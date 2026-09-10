#!/usr/bin/env node
/* ============================================================================
   build.mjs — empacota src/<conceito>/main.js → concepts/<conceito>/app.js
   Uso: node scripts/build.mjs [--watch]
   IIFE, minificado, es2019, sem sourcemap; .glsl/.vert/.frag entram como texto.
   ============================================================================ */
import { build, context } from 'esbuild';
import { existsSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const watch = process.argv.includes('--watch');

const pares = [
  { src: 'src/c00-kit/main.js',      out: 'concepts/00-kit/app.js' },
  { src: 'src/c01-materia/main.js',  out: 'concepts/01-materia/app.js' },
  { src: 'src/c02-chegada/main.js',  out: 'concepts/02-chegada/app.js' },
  { src: 'src/c03-presenca/main.js', out: 'concepts/03-presenca/app.js' },
{ src: 'src/c04-conversa/main.js', out: 'concepts/04-conversa/app.js' },
{ src: 'src/c05-simbolo/main.js', out: 'concepts/05-simbolo/app.js' },
{ src: 'src/c06-slides/main.js', out: 'concepts/06-slides/app.js' },
{ src: 'src/c07-letras/main.js', out: 'concepts/07-letras/app.js' },
{ src: 'src/c08-retrato/main.js', out: 'concepts/08-retrato/app.js' },
].filter(({ src }) => existsSync(resolve(raiz, src)));

if (!pares.length) {
  console.error('Nenhum src/<conceito>/main.js encontrado.');
  process.exit(1);
}

const opcoes = ({ src, out }) => ({
  entryPoints: [resolve(raiz, src)],
  outfile: resolve(raiz, out),
  bundle: true,
  format: 'iife',
  minify: true,
  target: 'es2019',
  sourcemap: false,
  logLevel: 'info',
  define: { 'process.env.NODE_ENV': '"production"' },
  loader: { '.glsl': 'text', '.vert': 'text', '.frag': 'text' },
  legalComments: 'none',
});

const kb = (arquivo) => (statSync(resolve(raiz, arquivo)).size / 1024).toFixed(1);

if (watch) {
  for (const par of pares) {
    const ctx = await context({
      ...opcoes(par),
      plugins: [{
        name: 'tamanho',
        setup(b) {
          b.onEnd((r) => {
            if (r.errors.length) return;
            console.log(`  ${par.out}  ${kb(par.out)} KB  (${new Date().toLocaleTimeString('pt-BR')})`);
          });
        },
      }],
    });
    await ctx.watch();
  }
  console.log(`Observando ${pares.length} entrada(s)… (Ctrl+C para sair)`);
} else {
  let falhou = false;
  for (const par of pares) {
    try {
      await build(opcoes(par));
      console.log(`  ${par.out}  ${kb(par.out)} KB`);
    } catch (e) {
      falhou = true;
      console.error(`Falha em ${par.src}:`, e.message || e);
    }
  }
  if (falhou) process.exit(1);
}
