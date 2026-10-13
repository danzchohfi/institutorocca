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
// CSS: comentários /* … */, sem tocar no que estiver dentro de aspas
const limparCss = (css) => css
  .replace(/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|\/\*[\s\S]*?\*\//g, (todo, aspas) => aspas || '')
  .replace(/^[ \t]*\n/gm, '');

// HTML: comentários e linhas vazias fora de <script>/<style>; comentários de CSS dentro de <style>;
// o atributo data-lexico-ok (só o scripts/lexico.mjs lê), apenas dentro de tags
const limparHtml = (html) => html
  .split(/(<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>)/i)
  .map((parte, i) => {
    if (i % 2) return /^<style/i.test(parte) ? parte.replace(/(<style\b[^>]*>)([\s\S]*?)(<\/style>)$/i, (_, a, css, b) => a + limparCss(css) + b) : parte;
    return parte
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/(<[a-z][^<>]*?)\s+data-lexico-ok(?:="[^"]*")?(?=[\s/>])/gi, '$1')
      .replace(/^[ \t]*\n/gm, '');
  })
  .join('');

/* ---- 3. assets, fontes e CSS compartilhado: só o que é citado ---------------------------------- */
const PASTAS_COPIADAS = /^(assets|brand|shared)\//;
const copiados = new Set();

// caminhos locais citados num HTML (atributos, srcset, onerror, og:image com o domínio, url() em style).
// Só conta o caminho que começa logo depois de aspas, espaço, "(", "," ou "=": assets/ no meio de uma URL
// externa (https://cdn…/assets/x.js) não é deste site.
function citadosNoHtml(html, paginaRel) {
  const base = posix.dirname(`/${paginaRel}`);
  const achados = [];
  const texto = html.replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/&amp;/g, '&').split(`${dominio}/`).join('/');
  texto.replace(/(^|["'\s(,=])((?:\.\.\/|\.\/|\/)*(?:assets|brand|shared)\/[^"'\s)<>,?#]+)/g, (todo, antes, caminho) => {
    achados.push(caminho.startsWith('/') ? caminho : posix.join(base, caminho));
    return todo;
  });
  return achados;
}

// url(), @import "…" e image-set("…") de um CSS, resolvidos a partir da pasta do próprio CSS
function citadosNoCss(css, cssRel) {
  const base = posix.dirname(`/${cssRel}`);
  const achados = [];
  const anotar = (url) => {
    const limpo = url.trim().split(/[?#]/)[0];
    if (limpo && !/^(?:data:|https?:|\/\/|#)/i.test(url.trim())) achados.push(limpo.startsWith('/') ? limpo : posix.join(base, limpo));
  };
  css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (todo, aspas, url) => { anotar(url); return todo; });
  css.replace(/@import\s+(['"])([^'"]+)\1/g, (todo, aspas, url) => { anotar(url); return todo; });
  css.replace(/image-set\(([^)]*)\)/g, (todo, dentro) => {
    dentro.replace(/(['"])([^'"]+)\1/g, (t, a, url) => { anotar(url); return t; });
    return todo;
  });
  return achados;
}

function copiarCitado(caminhoUrl, quem) {
  let alvo = posix.normalize(caminhoUrl).replace(/^\/+/, '');   // ../ além da raiz some, como no navegador
  try { alvo = decodeURI(alvo); } catch { /* fica como está */ }
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
  [/\bclaude\b|anthropic|openai|chatgpt|\bgpt-?\d|higg?sfield|midjourney|\bgemini\b|nano.?banana|dall-?e\b|stable.?diffusion|firefly|\bsora\b|\bkling\b|runwayml|ideogram|seedream|comfyui|\bcopilot\b|\bcodex\b/i, 'nome de ferramenta de IA'],
  [/gerad[oa]s? (?:por|com|no|na) (?:IA|intelig)|cri(?:ad|ei)[oa]?s? com (?:a )?IA\b|intelig[eê]ncia artificial|stand-?in/i, 'menção a imagem ou texto gerado'],
  [/scratchpad|internas\.md|home\.md|BRIEF|COPY\.md|CONCEITOS|lexico|src\/site\/|config\.mjs/, 'referência a documento ou código interno'],
  [/\[PENDENTE\]|\bpend[eê]ncia \d|\brodada \d|[Rr]odada de aprova/, 'pendência ou rodada de aprovação'],
  [/\b(?:pedido|decisão|escolha|aprovação|retorno|revisão|texto|dados) do cliente\b|\bo cliente (?:pediu|escolheu|aprovou|não aprovou|enviou|quer|preferiu|vetou)\b|\bconfirmar com o cliente\b|\b(?:pela|da) agência\b(?! [Nn]acional)/, 'conversa entre agência e cliente'],
  [/github\.io|pages\.vitaminapublicitaria/i, 'endereço de prévia'],
  [/<!--/, 'comentário de HTML'],
];
// imagens que nunca vão ao ar, mesmo que alguma página passe a citar
const NUNCA = ['assets/img/medicos-hero.jpg'];
// metadados de imagem que denunciam geração por IA (C2PA, IPTC DigitalSourceType, nomes de ferramentas)
const IA_NA_IMAGEM = /c2pa|jumbf|trainedAlgorithmicMedia|openai|dall-?e|midjourney|higg?sfield|firefly|gemini|stable.?diffusion|comfyui|google ai|imagen \d/i;

// só os segmentos de metadados (JPEG: APPn e COM antes dos dados da imagem; PNG: blocos antes do IDAT),
// para não confundir bytes comprimidos da foto com texto
function metadadosDaImagem(buf) {
  const partes = [];
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i + 4 <= buf.length && buf[i] === 0xff) {
      const marca = buf[i + 1];
      if (marca === 0xda || marca === 0xd9) break;                    // início dos dados / fim
      const tam = buf.readUInt16BE(i + 2);
      if ((marca >= 0xe0 && marca <= 0xef) || marca === 0xfe) partes.push(buf.subarray(i + 4, i + 2 + tam));
      i += 2 + tam;
    }
  } else if (buf.subarray(1, 4).toString('latin1') === 'PNG') {
    let i = 8;
    while (i + 8 <= buf.length) {
      const tam = buf.readUInt32BE(i);
      const tipo = buf.subarray(i + 4, i + 8).toString('latin1');
      if (tipo === 'IDAT' || tipo === 'IEND') break;
      partes.push(buf.subarray(i + 4, i + 8 + tam));
      i += 12 + tam;
    }
  } else {
    partes.push(buf);
  }
  return Buffer.concat(partes).toString('latin1');
}

const TEXTO = /\.(html|css|js|svg|xml|txt)$|\/_(headers|redirects)$/;
const IMAGEM = /\.(jpe?g|png|webp|avif|gif)$/i;
for (const abs of listar(saida)) {
  const r = rel(abs);
  if (/\.(md|ttf|otf)$/i.test(r) || /(^|\/)\.[^/]+$/.test(r)) problemas.push(`${r}: este tipo de arquivo não vai ao ar`);
  if (NUNCA.includes(r)) problemas.push(`${r}: imagem que não vai ao ar (está em NUNCA)`);
  for (const [padrao, motivo] of PROIBIDOS.slice(0, 2)) if (padrao.test(r)) problemas.push(`${r}: ${motivo} no nome do arquivo`);
  if (IMAGEM.test(r)) {
    const m = metadadosDaImagem(readFileSync(abs)).match(IA_NA_IMAGEM);
    if (m) problemas.push(`${r}: metadado de imagem gerada por IA ("${m[0]}")`);
    continue;
  }
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
  if (r.endsWith('.html')) {
    // comentário dentro de <script> que não seja JSON-LD
    texto.replace(/<script\b(?![^>]*\bsrc=)(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/gi, (todo, js) => {
      if (/\/\*|(^|\s)\/\/\s/.test(js)) problemas.push(`${r}: comentário dentro de <script> → "${js.trim().slice(0, 80)}"`);
      return todo;
    });
  }
  if (r === '404.html') {
    // a 404 é servida em qualquer profundidade: nenhum caminho relativo
    texto.replace(/\s(?:href|src|poster|srcset)="([^"]*)"|this\.src='([^']*)'|url\(\s*['"]?([^'")]+)/g, (todo, a, b, c) => {
      for (const u of (a ?? b ?? c ?? '').split(',').map((x) => x.trim().split(/\s+/)[0]).filter(Boolean)) {
        if (!/^(?:\/|#|[a-z][a-z0-9+.-]*:)/i.test(u)) problemas.push(`404.html: caminho relativo "${u}" (quebra fora da raiz)`);
      }
      return todo;
    });
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
