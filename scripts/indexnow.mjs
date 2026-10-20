#!/usr/bin/env node
/* ------------------------------------------------------------------------------------------
   indexnow.mjs — avisa o Bing (e os outros buscadores do IndexNow) das páginas que mudaram depois de
   cada publicação, para que ele as rastreie sem esperar o robô passar por conta própria. O Bing é a
   base da busca do Copilot e de boa parte da busca do ChatGPT.

   Envia para api.indexnow.org com a chave de src/site/config.mjs (INDEXNOW_CHAVE), que o publicar.mjs
   grava em <DOMINIO>/<chave>.txt. Roda no workflow que publica o domínio (pages.yml hoje, cloudflare.yml
   depois da troca: docs/cloudflare.md), logo depois do deploy: o arquivo da chave precisa estar no ar
   quando o Bing for conferir. O IndexNow pede para não reenviar o que não mudou, por isso o workflow
   passa o commit publicado antes deste (--desde) e só vão as páginas alteradas desde ele. Vai o sitemap
   inteiro quando não há commit anterior utilizável (Run workflow, branch nova, histórico reescrito) e
   quando a publicação anterior ainda não tinha o IndexNow (a primeira vez).

   Uso: node scripts/indexnow.mjs --desde <commit>   (o que os workflows usam)
        node scripts/indexnow.mjs <arquivo>…         (relativo a site/: "index.html", "nutrologia/index.html", …)
        node scripts/indexnow.mjs --tudo             (todas as URLs de site/sitemap.xml)
   ------------------------------------------------------------------------------------------ */
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cfg from '../src/site/config.mjs';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const dominio = String(cfg.DOMINIO || '').replace(/\/+$/, '');
const chave = cfg.INDEXNOW_CHAVE;
if (!chave) {
  console.log('indexnow.mjs: sem INDEXNOW_CHAVE no config, nada a enviar.');
  process.exit(0);
}

const git = (...args) => execFileSync('git', args, { cwd: raiz, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });

/** Páginas (relativas a site/) alteradas desde o commit `antes`; null quando é para mandar o sitemap inteiro. */
function alteradasDesde(antes) {
  if (!/^[0-9a-f]{40}$/.test(antes || '') || /^0+$/.test(antes)) return null;   // Run workflow, branch nova ou valor estranho
  try {
    git('fetch', '-q', '--depth=1', 'origin', antes);              // o checkout do Actions só traz o commit publicado
    git('cat-file', '-e', `${antes}:scripts/indexnow.mjs`);        // a publicação anterior ainda não avisava o Bing
    return git('diff', '--name-only', antes, 'HEAD', '--', 'site/*index.html').split('\n').filter(Boolean).map((f) => f.replace(/^site\//, ''));
  } catch {
    return null;                                                   // commit anterior fora do alcance: vai tudo
  }
}

const args = process.argv.slice(2);
const desde = args.indexOf('--desde');
const arquivos = desde >= 0 ? alteradasDesde(args[desde + 1]) : args.includes('--tudo') ? null : args;
const urls = arquivos === null
  ? [...readFileSync(join(raiz, 'site', 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  : arquivos.map((arquivo) => `${dominio}/${arquivo.replace(/index\.html$/, '')}`);   // a home é index.html, nunca um argumento vazio
if (!urls.length) {
  console.log('indexnow.mjs: nenhuma página mudou nesta publicação, nada a enviar.');
  process.exit(0);
}
const resposta = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(dominio).host, key: chave, keyLocation: `${dominio}/${chave}.txt`, urlList: urls }),
});
// 200 e 202 são sucesso (202: recebido, a chave ainda vai ser conferida)
console.log(`indexnow.mjs: ${urls.length} URL(s) enviada(s), resposta ${resposta.status} ${resposta.statusText}`);
if (!resposta.ok) {
  console.log(await resposta.text());
  process.exit(1);
}
