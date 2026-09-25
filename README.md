# Instituto Rocca — site

Site do **Instituto Rocca** (clínica de Nutrologia, Endocrinologia e Dermatologia em Moema, São Paulo), construído
sobre a Direção de Marca, o Planejamento de Conteúdo e o projeto de interiores da clínica.

## O site final (rodada 7)

O cliente escolheu a **abertura em partículas** (versão Letras) seguida das **fotos da clínica com a frase**
(versão Presença). A partir dessa escolha, o site completo vive em **`site/`**: home e páginas internas, geradas por
`node scripts/site.mjs` a partir de `src/site/paginas/<slug>.html` e dos partials em `src/site/partials/`.

| Página | Caminho | O que é |
|--------|---------|---------|
| Home | `site/` | Wordmark em partículas → a clínica em fotos → o que tratamos → as três especialidades → o instituto → os médicos → perguntas → fecho |
| Nutrologia · Endocrinologia · Dermatologia | `site/nutrologia/`, `site/endocrinologia/`, `site/dermatologia/` | Uma página por especialidade (o que tratamos, como é a consulta, o médico responsável) |
| Dr. Túlio Bovo · Dr. Breno Gondim · Dra. Ana Paula Bovo | `site/dr-tulio-bovo/`, `site/dr-breno-gondim/`, `site/dra-ana-paula-bovo/` | Uma página por médico (vídeo de apresentação, formação, o que atende) |
| O instituto | `site/o-instituto/` | O instituto em fotos, o endereço e o mapa |
| Conteúdo | `site/conteudo/` | Perguntas da semana e artigos (estrutura pronta, textos [PENDENTE]) |
| Contato | `site/contato/` | WhatsApp, endereço, horários, mapa |

**Preview em refinamento (antes de liberar ao cliente):** https://danzchohfi.github.io/institutorocca/site/

- Nenhum formulário: toda chamada para ação vai para o WhatsApp (link central em `src/site/config.mjs`).
- Os três vídeos de produção entram pelo Cloudflare Stream (`shared/stream.js`); até o código da conta e os UIDs
  chegarem, o componente mostra o poster.
- Fotos de produção em `assets/img/producao/` (leia o `LEIA-ME.md` de lá: nomes definitivos, quem é quem).
- Dados ainda não confirmados aparecem como `[PENDENTE]` e estão centralizados em `src/site/config.mjs`.
- `docs/site.md` descreve a home seção a seção e as decisões desta rodada; `docs/screenshots/site-*` tem as capturas.
- `docs/revisao-design.md`: o que mudou na revisão de conteúdo de setembro e as sugestões de design para a próxima rodada.

```bash
npm install
node scripts/site.mjs   # gera site/index.html e site/<slug>/index.html
npm run build           # empacota src/site/main.js → site/app.js (home, com three.js) e src/site/interno.js → site/interno.js (internas)
node scripts/lexico.mjs # varre os termos que a marca não usa (concepts/, site/, src/site/)
```

## Arquivo: as versões da home (rodadas 1 a 6)

O `index.html` da raiz redireciona direto para o site final (`site/`). As versões anteriores continuam no repositório, em `concepts/`,
para consulta:

| Versão | Nome | Hero | Pasta |
|--------|------|------|-------|
| 01 | **Letras** (escolhida para a abertura) | O wordmark em partículas, página completa | `concepts/07-letras/` |
| 02 | **Retrato** | Os três médicos no hero, mensagem em partículas | `concepts/08-retrato/` |
| 03 | **Matéria** | Hero editorial + wordmark em partículas à direita | `concepts/01-materia/` |
| 04 | **Chegada** | Foto da entrada/recepção da clínica | `concepts/02-chegada/` |
| 05 | **Presença** (escolhida para a segunda dobra) | Fotos/filme da clínica com a frase | `concepts/03-presenca/` |

As pastas mantêm a numeração interna original (01, 02, 03, 07, 08). Os conceitos 04 (Conversa), 05 (Símbolo) e
06 (Slides) saíram do repositório na rodada de aprovação; estão no histórico do git.

Leia **`CONCEITOS.md`** para o racional de cada conceito e **`BRIEF.md`** para o briefing criativo que ancorou tudo.

## Previews hospedadas

**Site (GitHub Pages, o próprio repositório):** https://pages.vitaminapublicitaria.com.br/institutorocca/ (a raiz redireciona para `site/`);
as versões abaixo continuam publicadas para consulta. O scroll é o da página real, sem iframe. Precisa ser ativado uma vez pelo dono do repositório
(Settings → Pages → Build and deployment → Source: **GitHub Actions**); a partir daí `.github/workflows/pages.yml`
publica a cada push nesta branch (ou na `main`).

| # | Conceito | Site | Artifact (provisório, dentro de iframe) |
|---|----------|------|------------------------------------------|
| 7 | **Letras** · principal (página completa) | [abrir](https://danzchohfi.github.io/institutorocca/concepts/07-letras/) | [abrir](https://claude.ai/code/artifact/396e8436-193e-4f84-bccf-efcceb4e8412) |
| 8 | **Retrato** · os três médicos no hero (Higgsfield) | [abrir](https://danzchohfi.github.io/institutorocca/concepts/08-retrato/) | [abrir](https://claude.ai/code/artifact/56510856-8b6c-475f-8ab2-adb00ab9b333) |
| 1 | **Matéria** | [abrir](https://danzchohfi.github.io/institutorocca/concepts/01-materia/) | [abrir](https://claude.ai/code/artifact/9ce3eecf-c42e-4a56-88f8-39344acbf006) |
| 2 | **Chegada** | [abrir](https://danzchohfi.github.io/institutorocca/concepts/02-chegada/) | [abrir](https://claude.ai/code/artifact/78e9e269-6337-4588-b6b9-c7b2b8bdcc54) |
| 3 | **Presença** | [abrir](https://danzchohfi.github.io/institutorocca/concepts/03-presenca/) | [abrir](https://claude.ai/code/artifact/beb00a86-fcd1-4331-abf7-2d3a54b2a446) |

Páginas privadas por padrão; compartilhe pelo menu da página. Geradas por `node scripts/build-artifacts.mjs` (cada conceito em um HTML único com fontes e imagens embutidas).

## Como rodar

```bash
npm install          # three, gsap, lenis, esbuild
npm run build        # empacota src/<conceito>/main.js → concepts/<conceito>/app.js
npm run dev          # http-server na porta 8080 → http://localhost:8080/
```

Abrir `index.html` (hub de aprovação) ou cada `concepts/<conceito>/index.html`. Os arquivos também funcionam direto do
disco (`file://`), sem servidor.

## Estrutura

```
brand/tokens.css        variáveis de marca (paleta oficial Rocca 01–04, @font-face da Semplicita Pro, escala)
brand/fontes/           Semplicita Pro 300/400/500/600 + itálicas (woff2 + ttf), auto-hospedada
brand/MANUAL.md         resumo do Manual de Identidade aplicado ao site
brand/SISTEMA.md        documentação do sistema visual
shared/base.css         reset, tipografia, grid e componentes comuns (nav, botões, cards, footer…)
shared/ui.js            Lenis + GSAP/ScrollTrigger, nav, menu, reveals, lightbox
shared/letras.js        o sistema de partículas do wordmark (three.js), usado pela home e pelo conceito 07
shared/mosaico.js       mosaico de fotos da clínica
shared/stream.js        componente Cloudflare Stream (poster até o UID chegar)
shared/partials.html    marcação canônica de nav, menu, WhatsApp e footer (conceitos)
src/site/               site final: comum.js, main.js (home), interno.js, hero.js, config.mjs, partials/ e paginas/
site/                   site final gerado: index.html, <slug>/index.html, css/<slug>.css, site.css, app.js (home) e interno.js (internas)
src/<conceito>/         código-fonte JS de cada conceito (empacotado por esbuild)
concepts/<conceito>/    index.html + concept.css + app.js (bundle) de cada conceito
concepts/00-kit/        kit do sistema (style guide vivo)
assets/img/             renders do projeto de interiores + logo e símbolo oficiais (SVG) + favicon + vitamina.svg (assinatura da agência no hub)
assets/placeholders/    SVGs que ocupam o lugar de retratos, vídeos e telas até a mídia real chegar
assets/video/           ponha aqui institucional.mp4 (hero do conceito 3) e os vídeos dos médicos
scripts/site.mjs        gera as páginas de site/ a partir de src/site/
scripts/build.mjs       build (esbuild)
scripts/shot.mjs        screenshots em 3 viewports + erros de console + overflow
scripts/lexico.mjs      varredura dos termos que a marca não usa
scripts/build-artifacts.mjs  gera dist/artifacts/<conceito>.html autocontido (para preview hospedado)
docs/screenshots/       capturas de cada conceito (desktop, tablet, mobile)
```

## Trocar a mídia real (mesmo nome de arquivo, nada muda no HTML)

| Material | Caminho |
|----------|---------|
| Foto real da entrada | `assets/img/entrada-clinica.jpg` (16:9) e `entrada-clinica-mobile.jpg` (4:5) |
| Filme institucional (loop mudo do hero) | `assets/video/institucional.mp4` (+ `poster.jpg`) |
| Filme completo (lightbox, com som) | `assets/video/institucional-completo.mp4` |
| Vídeos verticais dos médicos | `assets/video/tulio.mp4`, `breno.mp4`, `ana-paula.mp4` |
| Retratos dos médicos | `assets/img/retrato-tulio.jpg` etc. (substituem os SVGs de `assets/placeholders/`) |
| Endereço, telefone, horários, CRM, Instagram, WhatsApp, Stream | `src/site/config.mjs` e `src/site/partials/` → `node scripts/site.mjs` |

## Checagens

```bash
node scripts/site.mjs && npm run build && node scripts/lexico.mjs
node scripts/shot.mjs site/index.html docs/screenshots/site-index --full
```
