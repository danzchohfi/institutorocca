# Instituto Rocca — conceitos de home

Seis conceitos navegáveis para a **home** do site do Instituto Rocca (Moema, São Paulo), construídos sobre a
Direção de Marca, o Planejamento de Conteúdo e o projeto de interiores da clínica.

| # | Conceito | Hero | Abrir |
|---|----------|------|-------|
| 1 | **Matéria** | Partículas three.js em creme/madeira sobre bordô | `concepts/01-materia/index.html` |
| 2 | **Chegada** | Foto da entrada/recepção da clínica | `concepts/02-chegada/index.html` |
| 3 | **Presença** | Vídeo institucional (placeholder até a gravação) | `concepts/03-presenca/index.html` |
| 4 | **Conversa** | Claro, tipográfico, o médico em vídeo vertical | `concepts/04-conversa/index.html` |
| 5 | **Símbolo** | O símbolo da marca como máscara e dispositivo de scroll | `concepts/05-simbolo/index.html` |
| 6 | **Slides** | Slides fotográficos de tela cheia, ritmo de campanha | `concepts/06-slides/index.html` |

Leia **`CONCEITOS.md`** para o racional de cada conceito, a estrutura seção a seção, o que cada diária de
gravação precisa entregar e a recomendação. **`BRIEF.md`** é o briefing criativo que ancorou tudo.

## Previews hospedadas

| # | Conceito | Preview |
|---|----------|---------|
| 1 | **Matéria** | [abrir](https://claude.ai/code/artifact/d09b6cd9-5ef1-40ea-bce0-eb290422ddfb) |
| 2 | **Chegada** | [abrir](https://claude.ai/code/artifact/0a80f870-4a3d-4eb2-9161-a5626a6b3c32) |
| 3 | **Presença** | [abrir](https://claude.ai/code/artifact/d845e270-9a8c-48bf-88d6-523e668a0b95) |
| 4 | **Conversa** | [abrir](https://claude.ai/code/artifact/8f8ea080-dcb3-408b-ba91-ca64c7766096) |
| 5 | **Símbolo** | [abrir](https://claude.ai/code/artifact/1cc9a883-130d-4579-ac5b-33f664b28533) |
| 6 | **Slides** | [abrir](https://claude.ai/code/artifact/47d687a7-64e2-4817-97c3-d71b42522333) |
| 7 | **Letras** (só o hero) | [abrir](https://claude.ai/code/artifact/396e8436-193e-4f84-bccf-efcceb4e8412) |

Hub com os seis: [abrir](https://claude.ai/code/artifact/fccaed8e-d9d4-469b-aef8-2f9904fc4170).

Páginas privadas por padrão; compartilhe pelo menu da página. Geradas por `node scripts/build-artifacts.mjs` (cada conceito em um HTML único com fontes e imagens embutidas).

## Como rodar

```bash
npm install          # three, gsap, lenis, esbuild
npm run build        # empacota src/<conceito>/main.js → concepts/<conceito>/app.js
npm run dev          # http-server na porta 8080 → http://localhost:8080/
```

Abrir `index.html` (hub) ou cada `concepts/<conceito>/index.html`. Os arquivos também funcionam direto do
disco (`file://`), sem servidor.

## Estrutura

```
brand/tokens.css        variáveis de marca (paleta oficial Rocca 01–04, @font-face da Semplicita Pro, escala)
brand/fontes/           Semplicita Pro 300/400/500/600 + itálicas (woff2 + ttf), auto-hospedada
brand/MANUAL.md         resumo do Manual de Identidade aplicado ao site
brand/SISTEMA.md        documentação do sistema visual
shared/base.css         reset, tipografia, grid e componentes comuns (nav, botões, cards, footer…)
shared/ui.js            Lenis + GSAP/ScrollTrigger, nav, menu, reveals, formulário, lightbox
shared/partials.html    marcação canônica de nav, menu, WhatsApp, formulário e footer
src/<conceito>/         código-fonte JS de cada conceito (empacotado por esbuild)
concepts/<conceito>/    index.html + concept.css + app.js (bundle) de cada conceito
concepts/00-kit/        kit do sistema (style guide vivo)
assets/img/             renders do projeto de interiores + logo e símbolo oficiais (SVG) + favicon
assets/placeholders/    SVGs que ocupam o lugar de retratos, vídeos e telas até a mídia real chegar
assets/video/           ponha aqui institucional.mp4 (hero do conceito 3) e os vídeos dos médicos
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
| Endereço, telefone, horários, CRM, Instagram | `shared/partials.html` → copiar nos três `index.html` |

## Checagens

```bash
node scripts/shot.mjs concepts/01-materia/index.html docs/screenshots/01-materia --full
node scripts/lexico.mjs
```
