#!/usr/bin/env node
/* ============================================================================
   site.mjs — gera as páginas do site final a partir dos templates
   ----------------------------------------------------------------------------
   Lê src/site/paginas/<slug>.html (documento HTML completo com um cabeçalho de
   metadados em comentário), injeta os partials de src/site/partials/, substitui
   {{raiz}} / {{site}} / {{wa}} / {{dominio}} / {{url_pagina}} e os valores do cabeçalho e grava:
     src/site/paginas/index.html  → site/index.html            ({{raiz}} = ../,    {{site}} = ./)
     src/site/paginas/<slug>.html → site/<slug>/index.html     ({{raiz}} = ../../, {{site}} = ../)
   Falha (sai com 1) se sobrar {{…}}, se houver mais de um <h1> (ou nenhum), se
   um href/src/srcset/poster relativo apontar para arquivo inexistente ou se um
   [data-stream] estiver sem data-stream-modo válido.
   Uso: node scripts/site.mjs [slug…]        (sem argumento: todas as páginas)
   Sem dependência nova: só node:fs e node:path. Contrato: src/site/README.md.
   ============================================================================ */
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { resolve, dirname, join, basename, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cfg from '../src/site/config.mjs';

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dirPaginas = join(raiz, 'src', 'site', 'paginas');
const dirPartials = join(raiz, 'src', 'site', 'partials');
const dirSite = join(raiz, 'site');

/* ---- partials: a pasta é a lista (qualquer partials/x.html vira {{x}}) ------- */
const partials = new Map();
if (existsSync(dirPartials)) {
  for (const nome of readdirSync(dirPartials)) {
    if (/\.html$/i.test(nome)) partials.set(basename(nome, '.html'), readFileSync(join(dirPartials, nome), 'utf8').trim());
  }
}

/* ---- chaves do cabeçalho ------------------------------------------------------ */
const OBRIGATORIAS = ['titulo', 'descricao'];
const PADROES = {
  og_imagem: 'assets/img/producao/medicos-trio-horizontal.jpg',
  corpo: 'sup-bordo',
  tema_cor: '#550000',
  fecho_h2: 'Avaliação com o médico / que vai acompanhar você.',
  fecho_sub: '',
  fecho_nota: 'Quem responde é o Instituto. Você conta o que parou de funcionar e a avaliação é marcada na conversa, em até um dia útil.',
  robots: '',
};
const MODOS_STREAM = new Set(['fundo', 'player', 'lightbox', 'alvo']);

/** Extrai o cabeçalho <!-- pagina … --> (primeira coisa do arquivo) e devolve { meta, corpo }. */
function lerCabecalho(texto, arquivo) {
  const m = texto.match(/^\uFEFF?\s*<!--\s*pagina\s*\n([\s\S]*?)-->\s*/);
  if (!m) throw new Error(`${arquivo}: falta o cabeçalho "<!-- pagina … -->" no topo do arquivo`);
  const meta = {};
  for (const linha of m[1].split('\n')) {
    const l = linha.trim();
    if (!l || l.startsWith('#')) continue;
    const dois = l.indexOf(':');
    if (dois < 1) throw new Error(`${arquivo}: linha do cabeçalho sem "chave: valor" → "${l}"`);
    meta[l.slice(0, dois).trim()] = l.slice(dois + 1).trim();
  }
  for (const k of OBRIGATORIAS) if (!meta[k]) throw new Error(`${arquivo}: o cabeçalho precisa de "${k}"`);
  return { meta: { ...PADROES, ...meta }, corpo: texto.slice(m[0].length) };
}

const escaparAtributo = (s) => s.replace(/&(?!(?:[a-z]+|#\d+|#x[0-9a-f]+);)/gi, '&amp;').replace(/"/g, '&quot;');

/** Marca aria-current="page" nos links da página atual dentro de nav/menu/footer (antes de trocar {{site}}). */
function marcarAtual(html, slug) {
  const alvo = slug === 'index' ? '{{site}}' : `{{site}}${slug}/`;
  return html.replace(/<a\b([^>]*?)\shref="([^"]*)"([^>]*)>/g, (todo, antes, href, depois) => {
    if (href !== alvo || /aria-current=/.test(todo)) return todo;
    return `<a${antes} href="${href}" aria-current="page"${depois}>`;
  });
}

/** Expande {{partial}} até não sobrar partial dentro de partial (teto de 5 passagens). */
function expandirPartials(html, slug, arquivo) {
  const marcados = new Set(['nav', 'menu', 'footer']);
  for (let passo = 0; passo < 5; passo++) {
    let trocou = false;
    html = html.replace(/\{\{([a-z0-9_-]+)\}\}/gi, (todo, nome) => {
      if (!partials.has(nome)) return todo;
      trocou = true;
      const conteudo = partials.get(nome);
      return marcados.has(nome) ? marcarAtual(conteudo, slug) : conteudo;
    });
    if (!trocou) return html;
  }
  throw new Error(`${arquivo}: partial dentro de partial além de 5 níveis`);
}

/* ---- verificações --------------------------------------------------------------- */
const EXTERNO = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#|$)/i;   // http:, https:, mailto:, tel:, data:, javascript:, //, #, vazio

function urlsDoHtml(html) {
  const urls = [];
  // sem comentários: um caminho citado num comentário não é um link
  const semComentarios = html.replace(/<!--[\s\S]*?-->/g, ' ');
  semComentarios.replace(/\s(?:href|src|poster)="([^"]*)"/gi, (_, v) => { urls.push(v); return ''; });
  semComentarios.replace(/\ssrcset="([^"]*)"/gi, (_, v) => {
    v.split(',').forEach((parte) => { const u = parte.trim().split(/\s+/)[0]; if (u) urls.push(u); });
    return '';
  });
  semComentarios.replace(/this\.src='([^']+)'/g, (_, v) => { urls.push(v); return ''; });
  return urls;
}

/* Saídas que esta rodada grava: contam como existentes antes de serem gravadas
   (a home linka as internas e vice-versa; app.js e interno.js vêm do build logo depois). */
const planejados = new Set([join(raiz, 'site', 'app.js'), join(raiz, 'site', 'interno.js')]);

function verificar(html, saidaRel, arquivo, problemas) {
  const sobras = html.match(/\{\{[^}]*\}\}/g);
  if (sobras) problemas.push(`${arquivo}: placeholder desconhecido ${[...new Set(sobras)].join(', ')}`);

  const h1 = (html.replace(/<!--[\s\S]*?-->/g, '').match(/<h1\b/gi) || []).length;
  if (h1 !== 1) problemas.push(`${arquivo}: ${h1 === 0 ? 'nenhum' : h1} <h1> (precisa de exatamente um)`);

  const pastaSaida = dirname(join(raiz, saidaRel));
  const vistos = new Set();
  for (const url of urlsDoHtml(html)) {
    if (EXTERNO.test(url) || vistos.has(url)) continue;
    vistos.add(url);
    let caminho = url.split('#')[0].split('?')[0];
    if (!caminho) continue;
    let abs = resolve(pastaSaida, decodeURIComponent(caminho));
    if (caminho.endsWith('/')) abs = join(abs, 'index.html');
    if (planejados.has(abs)) continue;
    if (!existsSync(abs)) problemas.push(`${arquivo}: "${url}" não existe (${posix.relative(raiz, abs.split('\\').join('/'))})`);
    else if (statSync(abs).isDirectory()) {
      if (!existsSync(join(abs, 'index.html'))) problemas.push(`${arquivo}: "${url}" é uma pasta sem index.html`);
    }
  }

  html.replace(/<[^>]*\sdata-stream=(?:"[^"]*"|'[^']*')[^>]*>/gi, (tag) => {
    const modo = (tag.match(/\sdata-stream-modo="([^"]*)"/) || [])[1];
    if (!modo || !MODOS_STREAM.has(modo)) problemas.push(`${arquivo}: [data-stream] sem data-stream-modo válido (fundo | player | lightbox | alvo) → ${tag.slice(0, 80)}…`);
    return tag;
  });
}

/* ---- uma página ------------------------------------------------------------------- */
function gerar(arquivoTemplate, problemas, avisos) {
  const arquivo = posix.relative(raiz, arquivoTemplate.split('\\').join('/'));
  const slug = slugDe(arquivoTemplate);                        // index | <slug> | conteudo/<slug>
  const saidaRel = slug === 'index' ? 'site/index.html' : `site/${slug}/index.html`;
  const pastaRel = posix.dirname(saidaRel);
  const valores = {
    slug,
    raiz: `${posix.relative(pastaRel, '.')}/`,                                          // ../ ou ../../
    site: `${posix.relative(pastaRel, 'site') || '.'}/`,                                // ./ ou ../
    bundle: slug === 'index' ? 'app.js' : 'interno.js',                                 // a home leva o three.js; as internas não
    dominio: String(cfg.DOMINIO || '').replace(/\/+$/, ''),                             // URL absoluta (og:image, og:url, canonical)
    url_pagina: `${String(cfg.DOMINIO || '').replace(/\/+$/, '')}/${pastaRel}/`,        // https://…/site/ ou https://…/site/<slug>/
    ano: cfg.ANO,
    whats_numero: cfg.WHATS_NUMERO,
    whats_numero_visivel: cfg.WHATS_NUMERO_VISIVEL,
    pendente: cfg.PENDENTE,
  };

  const { meta, corpo } = lerCabecalho(readFileSync(arquivoTemplate, 'utf8'), arquivo);
  Object.assign(valores, meta);
  valores.og_titulo = meta.og_titulo || meta.titulo;
  // og_imagem é um caminho a partir da raiz do repositório (assets/img/…) e vira {{dominio}}/{{og_imagem}}
  if (!EXTERNO.test(meta.og_imagem)) {
    if (/^(?:\.\.?\/|\/)/.test(meta.og_imagem)) problemas.push(`${arquivo}: og_imagem deve ser um caminho a partir da raiz do repositório, sem ../ nem / no início → "${meta.og_imagem}"`);
    else if (!existsSync(join(raiz, meta.og_imagem))) problemas.push(`${arquivo}: og_imagem "${meta.og_imagem}" não existe`);
  }
  valores.wa = `https://wa.me/${cfg.WHATS_NUMERO}?text=${encodeURIComponent(meta.whats_msg || cfg.WHATS_MSG_PADRAO)}`;
  valores.whats_msg = meta.whats_msg || cfg.WHATS_MSG_PADRAO;
  valores.robots_meta = meta.robots ? `<meta name="robots" content="${escaparAtributo(meta.robots)}">` : '';
  valores.fecho_h2_html = meta.fecho_h2.includes(' / ')
    ? meta.fecho_h2.replace(/ \/ ([\s\S]*)$/, ' <span class="linha-2">$1</span>')
    : meta.fecho_h2;
  valores.fecho_sub_html = meta.fecho_sub ? `<p class="texto-grande" data-reveal>${meta.fecho_sub}</p>` : '';

  const css = meta.css || slug;
  if (existsSync(join(dirSite, 'css', `${css}.css`))) {
    valores.css_link = `<link rel="stylesheet" href="{{site}}css/${css}.css">`;
  } else {
    valores.css_link = '';
    avisos.push(`${arquivo}: site/css/${css}.css ainda não existe — <link> omitido`);
  }
  for (const [chave, uid] of Object.entries(cfg.STREAM_IDS)) valores[`stream_${chave}`] = uid || '';

  let html = expandirPartials(corpo, slug, arquivo);
  // {{stream_x}} desconhecido = vídeo ainda sem chave no config: vazio, sem erro
  html = html.replace(/\{\{stream_[a-z0-9_]+\}\}/gi, (todo) => valores[todo.slice(2, -2)] ?? '');
  // valores (sem escape de HTML: o cabeçalho é escrito pela agência); repete para {{site}} dentro de css_link
  for (let passo = 0; passo < 3; passo++) {
    html = html.replace(/\{\{([a-z0-9_-]+)\}\}/gi, (todo, nome) => (nome in valores ? String(valores[nome]) : todo));
  }
  // linhas vazias deixadas por placeholders vazios (robots_meta, css_link, fecho_sub_html)
  html = html.replace(/^[ \t]+\n/gm, '');

  const antes = problemas.length;
  verificar(html, saidaRel, arquivo, problemas);
  if (problemas.length > antes) return { saidaRel, mudou: false, falhou: true };   // não grava página com problema

  const saidaAbs = join(raiz, saidaRel);
  mkdirSync(dirname(saidaAbs), { recursive: true });
  const atual = existsSync(saidaAbs) ? readFileSync(saidaAbs, 'utf8') : null;
  if (atual !== html) { writeFileSync(saidaAbs, html); return { saidaRel, mudou: true }; }
  return { saidaRel, mudou: false };
}

/* ---- varredura ------------------------------------------------------------------------ */
if (!existsSync(dirPaginas)) {
  console.error('Nenhum template em src/site/paginas/.');
  process.exit(1);
}
const pedidos = process.argv.slice(2).map((s) => (s === 'home' ? 'index' : s.replace(/\.html$/, '')));
function listarTemplates(dir) {
  const lista = [];
  for (const n of readdirSync(dir).sort()) {
    const abs = join(dir, n);
    if (statSync(abs).isDirectory()) lista.push(...listarTemplates(abs));
    else if (/\.html$/i.test(n)) lista.push(abs);
  }
  return lista;
}
const slugDe = (arquivoTemplate) => posix.relative(dirPaginas.split('\\').join('/'), arquivoTemplate.split('\\').join('/')).replace(/\.html$/i, '').replace(/^home$/, 'index');
let templates = listarTemplates(dirPaginas);
if (templates.some((t) => basename(t) === 'home.html') && templates.some((t) => basename(t) === 'index.html')) {
  console.error('src/site/paginas/: home.html e index.html geram a mesma saída — mantenha só index.html.');
  process.exit(1);
}
if (pedidos.length) templates = templates.filter((t) => pedidos.includes(slugDe(t)));
if (!templates.length) {
  console.error(`Nenhum template encontrado${pedidos.length ? ` para: ${pedidos.join(', ')}` : ''}.`);
  process.exit(1);
}

const todosSlugs = listarTemplates(dirPaginas).map(slugDe);
for (const s of todosSlugs) planejados.add(join(raiz, s === 'index' ? 'site/index.html' : `site/${s}/index.html`));

const problemas = [];
const avisos = [];
let gravadas = 0;
for (const t of templates) {
  try {
    const r = gerar(t, problemas, avisos);
    if (r.mudou) gravadas++;
    console.log(`  ${posix.relative(raiz, t.split('\\').join('/'))} → ${r.saidaRel}${r.falhou ? ' (NÃO gravada)' : r.mudou ? '' : ' (sem mudança)'}`);
  } catch (e) {
    problemas.push(e.message || String(e));
  }
}
for (const a of avisos) console.log(`  aviso · ${a}`);
if (problemas.length) {
  console.error(`\nsite.mjs: ${problemas.length} problema(s):`);
  for (const p of problemas) console.error(`  ${p}`);
  process.exit(1);
}
/* ---- sitemap.xml e robots.txt (todas as páginas, no domínio do config) ------------------------------ */
{
  const dominio = String(cfg.DOMINIO || '').replace(/\/+$/, '');
  const urls = todosSlugs.map((s) => `${dominio}/site/${s === 'index' ? '' : `${s}/`}`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`;
  const sitemapAbs = join(dirSite, 'sitemap.xml');
  if (!existsSync(sitemapAbs) || readFileSync(sitemapAbs, 'utf8') !== xml) writeFileSync(sitemapAbs, xml);
  const robots = `User-agent: *\nAllow: /\nSitemap: ${dominio}/site/sitemap.xml\n`;
  const robotsAbs = join(raiz, 'robots.txt');
  if (!existsSync(robotsAbs) || readFileSync(robotsAbs, 'utf8') !== robots) writeFileSync(robotsAbs, robots);
}
console.log(`site.mjs ok — ${templates.length} página(s), ${gravadas} gravada(s).`);
