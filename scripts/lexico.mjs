#!/usr/bin/env node
/* ============================================================================
   lexico.mjs — varre concepts/**\/index.html (e COPY.md) atrás dos termos
   proibidos do BRIEF §2.1 e de "!" em texto visível.
   Uso: node scripts/lexico.mjs [arquivos…]
   Exceções: no HTML, qualquer elemento com o atributo data-lexico-ok (o
   conteúdo inteiro dele é ignorado); no .md, linha marcada com [lexico-ok].
   A única exceção sancionada pela Direção é "Você sai entendendo o próprio
   resultado" (BLOCO 3 · O MÉTODO) — marque o <p> com data-lexico-ok.
   Sai com 1 se houver ocorrências.
   ============================================================================ */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { resolve, join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/* termo → regex; fronteiras com letras acentuadas (\b não serve) */
const L = '[\\p{L}\\p{N}]';
const termo = (padrao) => new RegExp(`(?<!${L})(?:${padrao})(?!${L})`, 'giu');
const TERMOS = [
  ['resultado(s)',            termo('resultados?')],
  ['transformar/transformação', termo('transform(?:a|ar|e|em|ou|ando|ado|ada|ação|ações)')],
  ['excelência',              termo('excel[êe]ncia')],
  ['equipe multidisciplinar', termo('equipe\\s+multidisciplinar')],
  ['caneta',                  termo('canetas?')],
  ['corpo dos sonhos',        termo('corpo\\s+dos\\s+sonhos')],
  ['agende já',               termo('agende\\s+j[áa]')],
  ['vagas limitadas',         termo('vagas\\s+limitadas')],
  ['melhor fase',             termo('melhor\\s+fase')],
  ['reposição hormonal',      termo('reposi[çc][ãa]o\\s+hormonal')],
  ['tecnologia de ponta',     termo('tecnologia\\s+de\\s+ponta')],
  ['estrutura completa',      termo('estrutura\\s+completa')],
  ['antes e depois',          termo('antes[\\s-]+e[\\s-]+depois')],
  ['nova você',               termo('nova\\s+voc[êe]')],
  ['outra pessoa',            termo('outra\\s+pessoa')],
  ['"!" em texto',            /!/g],
];

/* ---- coleta de arquivos ---------------------------------------------------- */
function listar(dir, filtro, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const nome of readdirSync(dir)) {
    const p = join(dir, nome);
    const st = statSync(p);
    if (st.isDirectory()) listar(p, filtro, acc);
    else if (filtro(p)) acc.push(p);
  }
  return acc;
}

let arquivos = process.argv.slice(2).map((a) => resolve(a));
if (!arquivos.length) {
  arquivos = listar(join(raiz, 'concepts'), (p) => /[\\/]index\.html$/.test(p));
  const copy = join(raiz, 'COPY.md');
  if (existsSync(copy)) arquivos.push(copy);
}

/* ---- HTML → texto visível --------------------------------------------------- */
const ENTIDADES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', mdash: '—', ndash: '–',
  hellip: '…', laquo: '«', raquo: '»', ldquo: '“', rdquo: '”', lsquo: '‘', rsquo: '’', copy: '©', middot: '·',
};
function decodificar(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&([a-z]+);/gi, (m, n) => (ENTIDADES[n.toLowerCase()] ?? m));
}

/** Remove elementos que carregam data-lexico-ok (com o conteúdo), respeitando aninhamento. */
function removerOk(html) {
  const abre = /<([a-zA-Z][\w-]*)\b[^>]*\bdata-lexico-ok\b[^>]*>/g;
  let saida = '';
  let pos = 0;
  let m;
  while ((m = abre.exec(html))) {
    if (m.index < pos) continue;
    const tag = m[1].toLowerCase();
    let fim = m.index + m[0].length;
    if (m[0].endsWith('/>')) { saida += html.slice(pos, m.index); pos = fim; abre.lastIndex = pos; continue; }
    const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi');
    re.lastIndex = fim;
    let nivel = 1;
    let t;
    while (nivel > 0 && (t = re.exec(html))) {
      nivel += t[1] ? -1 : 1;
      fim = t.index + t[0].length;
    }
    saida += html.slice(pos, m.index);
    pos = fim;
    abre.lastIndex = pos;
  }
  return saida + html.slice(pos);
}

function textoDoHtml(html) {
  let s = html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<template\b[\s\S]*?<\/template>/gi, ' ');
  s = removerOk(s);
  // atributos que também são lidos (alt, aria-label, title, placeholder, meta description)
  const atributos = [];
  s.replace(/\s(?:alt|aria-label|title|placeholder)="([^"]*)"/gi, (_, v) => { atributos.push(v); return ''; });
  s.replace(/<meta\b[^>]*name="description"[^>]*content="([^"]*)"/gi, (_, v) => { atributos.push(v); return ''; });
  s = s.replace(/<[^>]+>/g, ' ');
  return decodificar([s, ...atributos].join(' \n ')).replace(/[ \t]+/g, ' ');
}

function textoDoMd(md) {
  return md
    .split('\n')
    .filter((l) => !/\[lexico-ok\]/i.test(l))
    .join('\n')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ');
}

/* ---- varredura ------------------------------------------------------------- */
const ocorrencias = [];
for (const arq of arquivos) {
  const bruto = readFileSync(arq, 'utf8');
  const texto = /\.md$/i.test(arq) ? textoDoMd(bruto) : textoDoHtml(bruto);
  for (const [nome, re] of TERMOS) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(texto))) {
      const ini = Math.max(0, m.index - 40);
      const trecho = texto.slice(ini, m.index + m[0].length + 40).replace(/\s+/g, ' ').trim().slice(0, 80);
      ocorrencias.push({ arquivo: relative(raiz, arq), termo: nome, trecho });
    }
  }
}

if (!arquivos.length) {
  console.log('Léxico: nenhum arquivo para varrer.');
  process.exit(0);
}
if (!ocorrencias.length) {
  console.log(`Léxico ok — ${arquivos.length} arquivo(s), nenhuma ocorrência.`);
  process.exit(0);
}
console.log(`Léxico: ${ocorrencias.length} ocorrência(s) em ${arquivos.length} arquivo(s):\n`);
for (const o of ocorrencias) console.log(`  ${o.arquivo}\n    [${o.termo}]  …${o.trecho}…`);
process.exit(1);
