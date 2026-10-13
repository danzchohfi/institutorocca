/* ------------------------------------------------------------------------------------------
   publicar.mjs — monta _site/ com o site do Instituto Rocca, na raiz do domínio (src/site/config.mjs → DOMINIO).

   Vai para _site/ só o que um visitante precisa:
   - as páginas, o CSS e os bundles de site/ (a 404 vira /404.html, com caminhos absolutos, porque é
     servida em qualquer endereço que não existe);
   - de assets/, brand/ e shared/, só os arquivos que as páginas e o CSS citam (a lista sai da varredura,
     não de uma pasta inteira: documentos, estudos e imagens que nenhuma página usa ficam de fora);
   - robots.txt e sitemap.xml.
   Na montagem, os comentários de HTML e de CSS e o atributo data-lexico-ok saem (os fontes continuam com
   eles), e as fontes vão só em woff2. No fim, uma varredura falha a publicação se sobrar algo que não é
   para o visitante (ver PROIBIDOS).

   As páginas continuam com os caminhos relativos de sempre (../assets, ../../assets). Na raiz de um domínio,
   o ../ que sobra é ignorado pelo navegador, então ../assets vira /assets: esta montagem só funciona na raiz
   de um domínio. Para ver localmente, sirva a raiz do repositório e abra /site/.

   Uso:
     node scripts/publicar.mjs            Cloudflare (padrão): + _headers e _redirects (/site/… → /…, 301)
     node scripts/publicar.mjs --github   GitHub Pages, enquanto o domínio não migra: no lugar do _redirects,
                                          uma página de redirecionamento em cada endereço antigo /site/…
   ------------------------------------------------------------------------------------------ */
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, posix, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cfg from '../src/site/config.mjs';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const saida = join(raiz, '_site');
const dominio = String(cfg.DOMINIO || '').replace(/\/+$/, '');
const destino = process.argv.includes('--github') ? 'github' : 'cloudflare';

const problemas = [];
const ler = (abs) => readFileSync(abs, 'utf8');
const listar = (dir) => readdirSync(dir).flatMap((nome) => {
  const abs = join(dir, nome);
  return statSync(abs).isDirectory() ? listar(abs) : [abs];
});
const rel = (abs) => relative(saida, abs).split('\\').join('/');

rmSync(saida, { recursive: true, force: true });
mkdirSync(saida, { recursive: true });

/* ---- 1. páginas, CSS e bundles (site/ → raiz); a 404 vai à parte ---------------------------------- */
const dir404 = join(raiz, 'site', '404');
cpSync(join(raiz, 'site'), saida, { recursive: true, filter: (src) => src !== dir404 && !src.startsWith(dir404 + '/') });
cpSync(join(raiz, 'robots.txt'), join(saida, 'robots.txt'));

if (existsSync(join(dir404, 'index.html'))) {
  // servida em qualquer profundidade (/x/, /a/b/c/): todo ../ do começo de um caminho vira a raiz
  const html = ler(join(dir404, 'index.html'))
    .replace(/(["'\s,(])(?:\.\.\/)+/g, '$1/')
    .replace(/^\s*<link rel="canonical"[^>]*>\n/m, '')
    .replace(/^\s*<meta property="og:url"[^>]*>\n/m, '');
  writeFileSync(join(saida, '404.html'), html);
} else {
  problemas.push('site/404/index.html não existe (rode node scripts/site.mjs)');
}

/* ---- 2. limpeza do que um visitante lê no código-fonte ----------------------------------------- */
// HTML: comentários fora de <script>/<style> e o data-lexico-ok (só o scripts/lexico.mjs lê)
const limparHtml = (html) => html
  .split(/(<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>)/i)
  .map((parte, i) => (i % 2 ? parte : parte.replace(/<!--[\s\S]*?-->/g, '')))
  .join('')
  .replace(/\s+data-lexico-ok(?:="[^"]*")?(?=[\s/>])/g, '')
  .replace(/^[ \t]*\n/gm, '');

// CSS: comentários /* … */, sem tocar no que estiver dentro de aspas
const limparCss = (css) => css
  .replace(/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|\/\*[\s\S]*?\*\//g, (todo, aspas) => aspas || '')
  .replace(/^[ \t]*\n/gm, '');

/* ---- 3. assets, fontes e CSS compartilhado: só o que é citado ---------------------------------- */
const PASTAS_COPIADAS = /^(assets|brand|shared)\//;
const copiados = new Set();

// caminhos locais citados num HTML (atributos, srcset, onerror, og:image com o domínio, url() em style)
function citadosNoHtml(html, paginaRel) {
  const base = posix.dirname(`/${paginaRel}`);
  const achados = [];
  const semDominio = html.split(`${dominio}/`).join('/');
  semDominio.replace(/(?:\.\.\/|\.\/|\/)*(?:assets|brand|shared)\/[^"'\s)<>,?#]+/g, (caminho) => {
    achados.push(caminho.startsWith('/') ? caminho : posix.join(base, caminho));
    return caminho;
  });
  return achados;
}

// url() de um CSS, resolvido a partir da pasta do próprio CSS
function citadosNoCss(css, cssRel) {
  const base = posix.dirname(`/${cssRel}`);
  const achados = [];
  css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (_, __, url) => {
    if (!/^(?:data:|https?:|\/\/|#)/i.test(url)) achados.push(url.startsWith('/') ? url : posix.join(base, url));
    return _;
  });
  return achados;
}

function copiarCitado(caminhoUrl, quem) {
  const alvo = posix.normalize(caminhoUrl).replace(/^\/+/, '');   // ../ além da raiz some, como no navegador
  if (!PASTAS_COPIADAS.test(alvo)) return null;
  if (copiados.has(alvo)) return null;
  const origem = join(raiz, alvo);
  if (!existsSync(origem) || statSync(origem).isDirectory()) {
    problemas.push(`${quem} cita ${alvo}, que não existe`);
    return null;
  }
  mkdirSync(dirname(join(saida, alvo)), { recursive: true });
  cpSync(origem, join(saida, alvo));
  copiados.add(alvo);
  return alvo;
}

// fontes: só woff2 (todo navegador atual lê); o .ttf é o arquivo de instalação da família
const soWoff2 = (css) => css.replace(/,\s*url\(\s*(['"]?)[^'")]+\.ttf\1\s*\)\s*format\(\s*(['"])truetype\2\s*\)/g, '');

const paginas = listar(saida).filter((a) => a.endsWith('.html'));
const filaCss = listar(saida).filter((a) => a.endsWith('.css')).map(rel);

for (const abs of paginas) {
  const html = limparHtml(ler(abs));
  writeFileSync(abs, html);
  for (const c of citadosNoHtml(html, rel(abs))) {
    const novo = copiarCitado(c, rel(abs));
    if (novo && novo.endsWith('.css')) filaCss.push(novo);
  }
}
while (filaCss.length) {
  const cssRel = filaCss.shift();
  const abs = join(saida, cssRel);
  const css = soWoff2(limparCss(ler(abs)));
  writeFileSync(abs, css);
  for (const c of citadosNoCss(css, cssRel)) {
    const novo = copiarCitado(c, cssRel);
    if (novo && novo.endsWith('.css')) filaCss.push(novo);
  }
}

/* ---- 4. endereços antigos /site/… → /… ---------------------------------------------------------- */
const enderecos = paginas
  .map((abs) => rel(abs))
  .filter((r) => r.endsWith('index.html'))
  .map((r) => posix.dirname(r))
  .map((d) => (d === '.' ? '' : d));

if (destino === 'cloudflare') {
  writeFileSync(join(saida, '_redirects'), [
    '# Endereços antigos /site/... → raiz (301; a query string é mantida)',
    '/site   /   301',
    '/site/* /:splat 301',
    '',
  ].join('\n'));
  writeFileSync(join(saida, '_headers'), [
    '/*',
    '  X-Content-Type-Options: nosniff',
    '  Referrer-Policy: strict-origin-when-cross-origin',
    '  X-Frame-Options: SAMEORIGIN',
    "  Content-Security-Policy: frame-ancestors 'self'; object-src 'none'; base-uri 'self'; upgrade-insecure-requests",
    '  Permissions-Policy: camera=(), microphone=(), payment=(), usb=()',
    '  Strict-Transport-Security: max-age=31536000',
    '',
    '# endereço *.workers.dev (testes) fora dos buscadores',
    'https://:version.:subdomain.workers.dev/*',
    '  X-Robots-Tag: noindex',
    '',
    '/brand/fontes/*',
    '  Cache-Control: public, max-age=2592000',
    '',
    '# imagens trocam com o mesmo nome: um dia de cache',
    '/assets/*',
    '  Cache-Control: public, max-age=86400',
    '',
    '/*.css',
    '  Cache-Control: public, max-age=300, must-revalidate',
    '/*.js',
    '  Cache-Control: public, max-age=300, must-revalidate',
    '',
  ].join('\n'));
} else {
  for (const p of enderecos) {
    const alvo = p ? `/${p}/` : '/';
    const pasta = join(saida, 'site', p);
    mkdirSync(pasta, { recursive: true });
    writeFileSync(join(pasta, 'index.html'), `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Instituto Rocca</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${dominio}${alvo}">
<meta http-equiv="refresh" content="0; url=${alvo}">
</head>
<body><p><a href="${alvo}">Instituto Rocca</a></p></body>
</html>
`);
  }
}

/* ---- 5. varredura final: nada de bastidor no que vai ao ar --------------------------------------- */
const PROIBIDOS = [
  [/claude|anthropic|openai|chatgpt|higgsfield|midjourney|copilot\b|codex\b/i, 'nome de ferramenta de IA'],
  [/gerad[oa]s? (?:por|com|no) (?:IA|intelig)|intelig[eê]ncia artificial|stand-?in/i, 'menção a imagem ou texto gerado'],
  [/scratchpad|internas\.md|home\.md|BRIEF|COPY\.md|CONCEITOS|lexico/, 'referência a documento interno'],
  [/\[PENDENTE\]|\bpend[eê]ncia \d|\brodada \d|[Rr]odada de aprova/, 'pendência ou rodada de aprovação'],
  [/\bo cliente\b|\bdo cliente\b|\bao cliente\b|\bpela agência\b|\bda agência\b/i, 'conversa entre agência e cliente'],
  [/github\.io|pages\.vitaminapublicitaria/i, 'endereço de prévia'],
  [/<!--/, 'comentário de HTML'],
];
const TEXTO = /\.(html|css|js|svg|xml|txt)$|\/_(headers|redirects)$/;
for (const abs of listar(saida)) {
  const r = rel(abs);
  if (/\.(md|ttf|otf)$/i.test(r) || /(^|\/)\.[^/]+$/.test(r)) problemas.push(`${r}: este tipo de arquivo não vai ao ar`);
  if (!TEXTO.test(`/${r}`)) continue;
  const texto = ler(abs);
  for (const [padrao, motivo] of PROIBIDOS) {
    if (r.endsWith('.js') && padrao.source === '<!--') continue;    // "<!--" pode aparecer em código de biblioteca
    const m = texto.match(padrao);
    if (m) {
      const i = m.index;
      problemas.push(`${r}: ${motivo} → "${texto.slice(Math.max(0, i - 40), i + 60).replace(/\s+/g, ' ')}"`);
    }
  }
}

if (problemas.length) {
  console.error(`publicar.mjs: ${problemas.length} problema(s); nada deve ser publicado assim:`);
  for (const p of problemas) console.error(`  ${p}`);
  process.exit(1);
}

const arquivos = listar(saida);
const bytes = arquivos.reduce((t, a) => t + statSync(a).size, 0);
console.log(`publicar.mjs ok (${destino}) — ${enderecos.length} página(s), ${copiados.size} arquivo(s) de assets/brand/shared, ` +
  `${arquivos.length} arquivo(s) no total, ${(bytes / 1048576).toFixed(1)} MB, na raiz de ${dominio}.`);
