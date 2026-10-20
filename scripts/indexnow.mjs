#!/usr/bin/env node
/* ------------------------------------------------------------------------------------------
   indexnow.mjs — avisa o Bing (e os outros buscadores do IndexNow) das páginas que mudaram depois de
   cada publicação, para que ele as rastreie sem esperar o robô passar por conta própria. O Bing é a
   base da busca do Copilot e de boa parte da busca do ChatGPT.

   Envia para api.indexnow.org com a chave de src/site/config.mjs (INDEXNOW_CHAVE), que o publicar.mjs
   grava em <DOMINIO>/<chave>.txt. Roda no workflow do Pages, logo depois do deploy: o arquivo da chave
   precisa estar no ar quando o Bing for conferir. O IndexNow pede para não reenviar o que não mudou,
   por isso o workflow passa só as páginas alteradas no push; o sitemap inteiro vai na primeira
   publicação com o IndexNow e quando o workflow é rodado à mão (Run workflow).

   Uso: node scripts/indexnow.mjs <caminho>…   (como em site/<caminho>index.html: "", "nutrologia/", …)
        node scripts/indexnow.mjs --tudo       (todas as URLs de site/sitemap.xml)
   ------------------------------------------------------------------------------------------ */
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

const args = process.argv.slice(2);
const urls = args.includes('--tudo')
  ? [...readFileSync(join(raiz, 'site', 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  : args.map((caminho) => `${dominio}/${caminho}`);
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
