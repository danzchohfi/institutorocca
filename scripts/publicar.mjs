/* ------------------------------------------------------------------------------------------
   publicar.mjs — monta _site/ para o GitHub Pages ou o Cloudflare, no domínio do cliente
   (src/site/config.mjs → DOMINIO).

   O site vai para a raiz do domínio: o conteúdo de site/ fica em _site/, ao lado de assets/,
   brand/ (tokens e fontes) e shared/base.css, que é tudo o que as páginas usam. Conceitos,
   documentos, briefing e fontes do código ficam de fora.

   As páginas continuam com os caminhos relativos de sempre (../assets, ../../assets). Na raiz de
   um domínio, o ../ que sobra é ignorado pelo navegador (é o padrão de URL), então ../assets vira
   /assets. Por isso esta montagem só funciona na raiz de um domínio, nunca numa subpasta como a
   antiga homologação (pages.vitaminapublicitaria.com.br/institutorocca/). Para ver localmente,
   continue servindo a raiz do repositório e abrindo /site/.

   Os endereços antigos (/site/…) ganham uma página que redireciona para o endereço novo, para
   não quebrar links já compartilhados.

   Com --cloudflare entram dois arquivos que o Cloudflare lê e não serve (docs/cloudflare.md): _headers,
   que tira dos buscadores o endereço de teste *.workers.dev (o www continua indexável), e .assetsignore,
   que deixa de fora o .nojekyll e os .md internos de assets/. No GitHub Pages eles iriam ao ar como
   arquivos comuns, por isso só nessa montagem.

   Uso: node scripts/publicar.mjs                (gera _site/; o .github/workflows/pages.yml publica)
        node scripts/publicar.mjs --cloudflare   (o .github/workflows/cloudflare.yml publica)
   ------------------------------------------------------------------------------------------ */
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cfg from '../src/site/config.mjs';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const saida = join(raiz, '_site');
const dominio = String(cfg.DOMINIO || '').replace(/\/+$/, '');

rmSync(saida, { recursive: true, force: true });
mkdirSync(saida, { recursive: true });

const copiar = (de, para = de) => {
  const origem = join(raiz, de);
  if (!existsSync(origem)) throw new Error(`publicar.mjs: ${de} não existe`);
  cpSync(origem, join(saida, para), { recursive: true });
};

copiar('site', '.');
copiar('assets');
copiar('brand/tokens.css');
copiar('brand/fontes');
copiar('shared/base.css');
copiar('robots.txt');
copiar('.nojekyll');

/* IndexNow: o arquivo que prova ao Bing que a chave é deste domínio (scripts/indexnow.mjs usa a mesma) */
if (cfg.INDEXNOW_CHAVE) writeFileSync(join(saida, `${cfg.INDEXNOW_CHAVE}.txt`), cfg.INDEXNOW_CHAVE);

/* Cloudflare: cabeçalho noindex só nos endereços *.workers.dev (o padrão que a documentação do Cloudflare
   indica; cada :placeholder é um trecho do endereço) e arquivos que não vão ao ar */
if (process.argv.includes('--cloudflare')) {
  writeFileSync(join(saida, '_headers'), 'https://:version.:subdomain.workers.dev/*\n  X-Robots-Tag: noindex\n');
  writeFileSync(join(saida, '.assetsignore'), '.nojekyll\n*.md\n');
}

/* Redirecionamentos /site/<página>/ → /<página>/ */
const paginas = [];
const varrer = (dir) => {
  for (const nome of readdirSync(dir)) {
    const caminho = join(dir, nome);
    if (statSync(caminho).isDirectory()) varrer(caminho);
    else if (nome === 'index.html') paginas.push(relative(join(raiz, 'site'), dir).split('\\').join('/'));
  }
};
varrer(join(raiz, 'site'));

for (const p of paginas) {
  const destino = p ? `/${p}/` : '/';
  const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Instituto Rocca</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${dominio}${destino}">
<meta http-equiv="refresh" content="0; url=${destino}">
</head>
<body><p><a href="${destino}">Instituto Rocca</a></p></body>
</html>
`;
  const pasta = join(saida, 'site', p);
  mkdirSync(pasta, { recursive: true });
  writeFileSync(join(pasta, 'index.html'), html);
}

console.log(`publicar.mjs ok — ${paginas.length} página(s) na raiz de ${dominio}, com redirecionamento de /site/.`);
