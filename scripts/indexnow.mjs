#!/usr/bin/env node
/* ------------------------------------------------------------------------------------------
   indexnow.mjs — avisa o Bing (e os outros buscadores do IndexNow) das URLs do site depois de cada
   publicação. É o que faz o site aparecer no Bing, e por consequência no ChatGPT e no Copilot, sem
   esperar o robô passar por conta própria.

   Lê as URLs de site/sitemap.xml e envia para api.indexnow.org com a chave de src/site/config.mjs
   (INDEXNOW_CHAVE), que o publicar.mjs grava em <DOMINIO>/<chave>.txt. Roda no workflow do Pages,
   logo depois do deploy: o arquivo da chave precisa estar no ar quando o Bing for conferir.

   Uso: node scripts/indexnow.mjs
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

const urls = [...readFileSync(join(raiz, 'site', 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
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
