#!/usr/bin/env node
/* ============================================================================
   shot.mjs — screenshots + diagnóstico de um HTML em 3 viewports
   Uso: node scripts/shot.mjs <html> <prefixo> [--full]
   Ex.: node scripts/shot.mjs concepts/01-materia/index.html docs/screenshots/01-materia --full
   Gera <prefixo>-desktop.png, -tablet.png, -mobile.png (viewport no topo) e,
   com --full, <prefixo>-<viewport>-full.png (página inteira, reveals forçados).
   Imprime um JSON com erros de console, pageerrors, requests falhas, overflow
   horizontal, app.js ao lado do HTML e fontes. Sai com 1 se houver pageerror.
   ============================================================================ */
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { existsSync, statSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

/* Neste ambiente o Chromium não completa o TLS com fonts.googleapis.com pelo
   proxy (ClientHello grande). O Node consegue. Então o script se relança com
   NODE_USE_ENV_PROXY=1 e relê CSS/woff2 do Google Fonts pelo Node, entregando
   ao navegador via page.route — a página continua igual à de produção. */
if (process.env.HTTPS_PROXY && !process.env.NODE_USE_ENV_PROXY) {
  const r = spawnSync(process.execPath, ['--no-warnings', fileURLToPath(import.meta.url), ...process.argv.slice(2)], {
    stdio: 'inherit',
    env: { ...process.env, NODE_USE_ENV_PROXY: '1' },
  });
  process.exit(r.status ?? 1);
}

const args = process.argv.slice(2);
const full = args.includes('--full');
const [htmlArg, prefixoArg] = args.filter((a) => !a.startsWith('--'));
if (!htmlArg || !prefixoArg) {
  console.error('Uso: node scripts/shot.mjs <html> <prefixo> [--full]');
  process.exit(2);
}

const html = resolve(htmlArg);
const prefixo = resolve(prefixoArg);
mkdirSync(dirname(prefixo), { recursive: true });

const viewports = [
  { nome: 'desktop', width: 1440, height: 900 },
  { nome: 'tablet',  width: 768,  height: 1024 },
  { nome: 'mobile',  width: 390,  height: 844 },
];

const appJs = resolve(dirname(html), 'app.js');
const relatorio = {
  html: htmlArg,
  appJs: existsSync(appJs) ? { existe: true, kb: +(statSync(appJs).size / 1024).toFixed(1) } : { existe: false, kb: 0 },
  viewports: {},
};

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

/* Relé de fontes: cache por execução (os 3 viewports reaproveitam). */
const cacheFontes = new Map();
const HOSTS_FONTES = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//;
async function buscarPeloNode(url, ua) {
  if (cacheFontes.has(url)) return cacheFontes.get(url);
  const resp = await fetch(url, { headers: { 'user-agent': ua, accept: '*/*' } });
  const corpo = Buffer.from(await resp.arrayBuffer());
  const item = { status: resp.status, contentType: resp.headers.get('content-type') || 'application/octet-stream', corpo };
  cacheFontes.set(url, item);
  return item;
}
async function instalarReleDeFontes(page) {
  await page.route(HOSTS_FONTES, async (route, req) => {
    try {
      const item = await buscarPeloNode(req.url(), req.headers()['user-agent'] || '');
      await route.fulfill({ status: item.status, contentType: item.contentType, body: item.corpo, headers: { 'access-control-allow-origin': '*' } });
    } catch (e) {
      await route.continue();
    }
  });
}

const browser = await chromium.launch({
  headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
  proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined,
});

let houvePageError = false;

for (const vp of viewports) {
  const ctx = await browser.newContext({
    ignoreHTTPSErrors: true,
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
    locale: 'pt-BR',
  });
  const page = await ctx.newPage();
  const r = { consoleErrors: [], consoleWarnings: [], pageErrors: [], requestFailed: [], overflowX: false, fontes: {} };

  page.on('console', (m) => {
    if (m.type() === 'error') r.consoleErrors.push(m.text());
    else if (m.type() === 'warning') r.consoleWarnings.push(m.text());
  });
  page.on('pageerror', (e) => { r.pageErrors.push(String(e.message || e)); houvePageError = true; });
  page.on('requestfailed', (req) => r.requestFailed.push(`${req.url()} (${req.failure()?.errorText || '?'})`));

  await instalarReleDeFontes(page);
  await page.goto(pathToFileURL(html).href, { waitUntil: 'load', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready.then(() => true)).catch(() => {});
  await espera(2500);

  // Rola até o fim em passos de 900px (dispara ScrollTriggers e lazy), volta ao topo.
  const altura = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < altura + 900; y += 900) {
    await page.evaluate((py) => window.scrollTo(0, py), y);
    await espera(250);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await espera(800);
  // Lenis pode animar o retorno: insiste até o topo real (máx. 3 s).
  for (let i = 0; i < 15; i++) {
    const y = await page.evaluate(() => { window.scrollTo(0, 0); return window.scrollY; });
    if (y === 0) break;
    await espera(200);
  }
  r.scrollYNoScreenshot = await page.evaluate(() => window.scrollY);

  r.overflowX = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  r.scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  r.fontes = await page.evaluate(() => ({
    semplicitaCarregada: Array.from(document.fonts).some((f) => /semplicita/i.test(f.family) && f.status === 'loaded'),
    jostCarregada: Array.from(document.fonts).some((f) => /jost/i.test(f.family) && f.status === 'loaded'),
    familiaDoH1: (() => { const h = document.querySelector('h1'); return h ? getComputedStyle(h).fontFamily.split(',')[0] : null; })(),
    faces: Array.from(document.fonts).filter((f) => f.status === 'loaded').length,
  }));

  await page.screenshot({ path: `${prefixo}-${vp.nome}.png`, fullPage: false });

  if (full) {
    // Força a revelação de tudo para o full não sair vazio (só no DOM da página).
    await page.evaluate(() => {
      document.querySelectorAll('[data-reveal], [data-reveal-grupo] > *, [data-split-linhas]').forEach((el) => {
        el.classList.add('revelado', 'split-pronto');
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      document.querySelectorAll('.linha__in').forEach((el) => { el.style.transform = 'none'; });
      document.querySelectorAll('.whats').forEach((el) => el.classList.add('whats--visivel'));
      document.querySelectorAll('.preloader').forEach((el) => el.remove());
    });
    await espera(400);
    // Página inteira por segmentos (o fullPage do Chromium repete o topo acima de ~8.000 px nesta máquina).
    const alturaDoc = await page.evaluate(() => document.documentElement.scrollHeight);
    const passo = vp.height;
    const partes = [];
    for (let y = 0; y < alturaDoc; y += passo) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      // Depois do primeiro segmento, esconde nav fixa e WhatsApp flutuante para não repetirem na costura.
      await page.evaluate((primeiro) => {
        document.querySelectorAll('header.nav, .whats').forEach((el) => { el.style.visibility = primeiro ? '' : 'hidden'; });
      }, y === 0);
      await page.waitForTimeout(350);
      const parte = `${prefixo}-${vp.nome}-parte${String(partes.length).padStart(3, '0')}.png`;
      await page.screenshot({ path: parte, fullPage: false });
      partes.push(parte);
    }
    await page.evaluate(() => { window.scrollTo(0, 0); document.querySelectorAll('header.nav, .whats').forEach((el) => { el.style.visibility = ''; }); });
    const ultimaAltura = alturaDoc - (partes.length - 1) * passo;
    const py = `
from PIL import Image
import sys, os
partes = sys.argv[2:]
imgs = [Image.open(p) for p in partes]
w = imgs[0].width; passo = imgs[0].height
ultima = ${Math.max(1, Math.round(ultimaAltura))}
total = passo * (len(imgs) - 1) + min(ultima, passo)
out = Image.new('RGB', (w, total), (85, 0, 0))
y = 0
for i, im in enumerate(imgs):
    if i == len(imgs) - 1 and ultima < passo:
        im = im.crop((0, passo - ultima, w, passo))
    out.paste(im, (0, y)); y += im.height
out.save(sys.argv[1], optimize=True)
for p in partes: os.remove(p)
`;
    const { spawnSync } = await import('node:child_process');
    const r = spawnSync('python3', ['-c', py, `${prefixo}-${vp.nome}-full.png`, ...partes], { encoding: 'utf8' });
    if (r.status !== 0) console.error('stitch falhou:', r.stderr);
  }

  relatorio.viewports[vp.nome] = r;
  await ctx.close();
}

await browser.close();
console.log(JSON.stringify(relatorio, null, 2));
process.exit(houvePageError ? 1 : 0);
