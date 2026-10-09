/* ------------------------------------------------------------------------------------------
   publicar.mjs — monta _site/ para o GitHub Pages, no domínio do cliente (src/site/config.mjs → DOMINIO).

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

   Uso: node scripts/publicar.mjs   (gera _site/; o workflow .github/workflows/pages.yml publica)
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
