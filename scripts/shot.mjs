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
import { pathToFileURL } from 'node:url';

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

  r.overflowX = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  r.scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  r.fontes = await page.evaluate(() => ({
    jostCheck: document.fonts.check('300 16px Jost'),
    jostCarregada: Array.from(document.fonts).some((f) => /jost/i.test(f.family) && f.status === 'loaded'),
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
    await page.screenshot({ path: `${prefixo}-${vp.nome}-full.png`, fullPage: true });
  }

  relatorio.viewports[vp.nome] = r;
  await ctx.close();
}

await browser.close();
console.log(JSON.stringify(relatorio, null, 2));
process.exit(houvePageError ? 1 : 0);
