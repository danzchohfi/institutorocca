#!/usr/bin/env node
/* ============================================================================
   perguntas.mjs — gera um template por pergunta em src/site/paginas/conteudo/<slug>.html
   ----------------------------------------------------------------------------
   Fonte: src/site/perguntas.mjs (PERGUNTAS, MEDICOS, ASSUNTOS). Depois, node scripts/site.mjs
   transforma cada template em site/conteudo/<slug>/index.html (uma URL por pergunta, com
   título, descrição, canonical e dados estruturados próprios).
   Uso: node scripts/perguntas.mjs
   ============================================================================ */
import { writeFileSync, mkdirSync, readdirSync, unlinkSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PERGUNTAS, MEDICOS, ESPECIALIDADES, ASSUNTOS } from '../src/site/perguntas.mjs';

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dirSaida = join(raiz, 'src', 'site', 'paginas', 'conteudo');
mkdirSync(dirSaida, { recursive: true });

const semTags = (s) => s.replace(/<[^>]+>/g, '');
const escapar = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

/** descrição para o <meta>: primeira frase ou duas da resposta, até ~155 caracteres */
function descricao(p) {
  const texto = semTags(p.paragrafos.join(' '));
  if (texto.length <= 155) return texto;
  const corte = texto.slice(0, 155);
  const fim = Math.max(corte.lastIndexOf('. '), corte.lastIndexOf(', '));
  return (fim > 60 ? corte.slice(0, fim + 1) : corte).trim();
}

function itemRelacionado(q) {
  const m = MEDICOS[q.medico];
  return `        <li class="pergunta-item">
          <h3 class="pergunta-item__titulo">${q.titulo}</h3>
          <span class="assinatura">${m.nome}</span>
          <span class="pergunta-item__acao"><a class="botao botao--secundario pergunta-item__link" href="{{site}}conteudo/${q.slug}/" aria-label="Ler a resposta: ${escapar(q.titulo)}">Ler a resposta <span class="seta" aria-hidden="true">→</span></a></span>
        </li>`;
}

function template(p) {
  const m = MEDICOS[p.medico];
  const esp = ESPECIALIDADES[p.especialidade];
  const assunto = ASSUNTOS[p.serie];
  const desc = descricao(p);
  const textoCompleto = semTags(p.paragrafos.join(' '));
  // relacionadas: mesmo médico, mesma série primeiro; até 4
  const relacionadas = [
    ...PERGUNTAS.filter((q) => q.slug !== p.slug && q.medico === p.medico && q.serie === p.serie),
    ...PERGUNTAS.filter((q) => q.slug !== p.slug && q.medico === p.medico && q.serie !== p.serie),
    ...PERGUNTAS.filter((q) => q.slug !== p.slug && q.medico !== p.medico && q.serie === p.serie),
  ].slice(0, 4);
  const [primeiro, ...resto] = p.paragrafos;
  const video = p.video
    ? `      <div class="resposta__video" data-reveal="escala">
        <div class="medico__midia medico__midia--insta"><blockquote class="instagram-media" data-instgrm-permalink="${p.video}" data-instgrm-version="14" style="margin:0"><a href="${p.video}" target="_blank" rel="noopener" aria-label="Abrir o vídeo no Instagram">${m.nome} no Instagram</a></blockquote></div>
      </div>
`
    : '';
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: p.titulo,
        description: desc,
        inLanguage: 'pt-BR',
        mainEntityOfPage: '{{url_pagina}}',
        image: `{{dominio}}/assets/img/producao/${m.foto}.jpg`,
        author: { '@type': 'Person', name: m.nome, url: `{{dominio}}/site/${m.slug}/`, jobTitle: 'Médico(a)', worksFor: { '@type': 'MedicalClinic', name: 'Instituto Rocca' } },
        publisher: { '@type': 'MedicalClinic', name: 'Instituto Rocca', address: { '@type': 'PostalAddress', streetAddress: 'Av. Indianópolis, 100', addressLocality: 'São Paulo', addressRegion: 'SP', postalCode: '04062-000', addressCountry: 'BR' } },
        articleSection: assunto,
        about: esp,
      },
      {
        '@type': 'FAQPage',
        mainEntity: [{ '@type': 'Question', name: p.titulo, acceptedAnswer: { '@type': 'Answer', text: textoCompleto, author: { '@type': 'Person', name: m.nome } } }],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Instituto Rocca', item: '{{dominio}}/site/' },
          { '@type': 'ListItem', position: 2, name: 'Conteúdo', item: '{{dominio}}/site/conteudo/' },
          { '@type': 'ListItem', position: 3, name: p.titulo, item: '{{url_pagina}}' },
        ],
      },
    ],
  };

  return `<!-- pagina
titulo: ${p.titulo} · ${m.nome}, Instituto Rocca
descricao: ${desc}
og_titulo: ${p.titulo}
og_imagem: assets/img/producao/${m.foto}.jpg
css: resposta
corpo: sup-bordo pagina pagina--resposta
whats_msg: Olá. Li a resposta "${p.titulo}" e quero agendar uma avaliação com ${m.artigo} ${m.nome} no Instituto Rocca.
fecho_h2: Avaliação com ${m.artigo} / ${m.nome}.
fecho_nota: Quem responde é o Instituto. Diga que quer marcar com ${m.artigo} ${m.nome}. Quem te atender no primeiro dia é quem vai te acompanhar.
-->
<!DOCTYPE html>
<html lang="pt-BR">
{{head}}
<body class="{{corpo}}">
{{skip}}
{{nav}}
{{menu}}
<main id="conteudo" tabindex="-1">
  <!-- Gerado por scripts/perguntas.mjs a partir de src/site/perguntas.mjs (${p.slug}). Não editar à mão. -->

  <!-- HERO: a pergunta como H1, quem responde e o retrato -->
  <section class="hero hero--interno hero--retrato hero--resposta sup-bordo" id="inicio" data-hero>
    <div class="container hero__in">
      <div class="hero__texto">
        <nav class="hero__trilha eyebrow" aria-label="Você está em" data-reveal><a href="{{site}}conteudo/">Conteúdo</a> · <a href="{{site}}conteudo/#serie-${p.serie}">${assunto}</a></nav>
        <h1 data-split-linhas>${p.titulo}</h1>
        <p class="hero__rotulo" data-reveal>
          <span class="hero__rotulo-linha">${m.nome} · ${m.frente}</span>
          <span class="hero__rotulo-linha">${m.crm}</span>
        </p>
        <p class="hero__sub texto-grande" data-reveal>${primeiro}</p>
        <div class="acoes" data-reveal>
          <a class="botao botao--primario" href="{{wa}}" target="_blank" rel="noopener">Agendar avaliação</a>
          <a class="botao botao--secundario" href="#resposta">Ler a resposta <span class="seta seta--baixo" aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div class="hero__foto paralaxe" data-parallax-area data-reveal="escala">
        <div class="paralaxe__in" data-parallax="-6">
          <img src="{{raiz}}assets/img/producao/${m.foto}.jpg" onerror="this.onerror=null;this.src='{{raiz}}assets/placeholders/${m.fallback}'" alt="${m.nome}" width="${m.foto_w}" height="${m.foto_h}" decoding="async">
        </div>
      </div>
    </div>
  </section>

  <!-- A RESPOSTA (osso): o texto na coluna da esquerda, quem responde e os caminhos à direita -->
  <section class="secao sup-osso resposta-corpo" id="resposta" data-tema="claro">
    <div class="container grid-12 resposta__in">
      <article class="col-7 resposta__texto prosa" data-reveal-grupo>
        <p class="eyebrow">A resposta</p>
${video}        <p class="texto-grande">${resto[0]}</p>
${resto.slice(1).map((t) => `        <p>${t}</p>`).join('\n')}
        <p class="assinatura">${m.nome}</p>
      </article>
      <aside class="col-4 col-inicio-9 resposta__lado" data-reveal>
        <p class="eyebrow">Quem responde</p>
        <a class="resposta__medico" href="{{site}}${m.slug}/">
          <span class="capa capa--${m.capa}" aria-hidden="true"><img src="{{raiz}}assets/img/producao/${m.foto}-640.jpg" onerror="this.onerror=null;this.src='{{raiz}}assets/placeholders/${m.fallback}'" alt="" width="640" height="960" loading="lazy" decoding="async"></span>
          <span class="resposta__medico-nome">${m.nome}<span class="resposta__medico-frente">${m.frente}</span></span>
        </a>
        <p class="eyebrow">Sobre o assunto</p>
        <div class="resposta__links">
          <a class="botao botao--secundario" href="{{site}}${p.especialidade}/#${p.ancora}">${esp} <span class="seta" aria-hidden="true">→</span></a>
          <a class="botao botao--secundario" href="{{site}}${m.slug}/" aria-label="Conheça ${m.artigo} ${m.nome}">Conheça ${m.trata} <span class="seta" aria-hidden="true">→</span></a>
          <a class="botao botao--secundario" href="https://www.instagram.com/institutorocca" target="_blank" rel="noopener">Ver no Instagram <span class="seta" aria-hidden="true">→</span></a>
        </div>
      </aside>
    </div>
  </section>

  <!-- MAIS PERGUNTAS (bordô) -->
  <section class="secao sup-bordo resposta-mais" id="mais-perguntas">
    <div class="container">
      <div class="secao__cabeca grid-12">
        <div class="col-7">
          <p class="eyebrow" data-reveal>Mais perguntas</p>
          <h2 class="titulo-2l" data-split-linhas>Outras perguntas <span class="linha-2">que a gente responde.</span></h2>
        </div>
      </div>
      <ol class="perguntas-lista" data-reveal-grupo>
${relacionadas.map(itemRelacionado).join('\n')}
      </ol>
      <div class="secao__rodape" data-reveal>
        <a class="botao botao--secundario" href="{{site}}conteudo/">Todas as perguntas <span class="seta" aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>
  <script type="application/ld+json">${json(ld)}</script>
</main>
{{fecho}}
{{footer}}
{{whats}}
{{lightbox}}
${p.video ? '<script async src="https://www.instagram.com/embed.js"></script>\n' : ''}</body>
</html>
`;
}

// limpa templates de perguntas que saíram do banco
const atuais = new Set(PERGUNTAS.map((p) => `${p.slug}.html`));
for (const n of readdirSync(dirSaida)) if (/\.html$/.test(n) && !atuais.has(n)) unlinkSync(join(dirSaida, n));
let n = 0;
for (const p of PERGUNTAS) { writeFileSync(join(dirSaida, `${p.slug}.html`), template(p)); n++; }
console.log(`perguntas.mjs ok — ${n} template(s) em src/site/paginas/conteudo/`);
