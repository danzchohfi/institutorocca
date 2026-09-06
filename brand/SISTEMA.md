# Sistema visual — Instituto Rocca (como usar)

Guia curto para quem constrói os conceitos. O kit vivo está em `concepts/00-kit/index.html`; a marcação
canônica em `shared/partials.html`; o BRIEF continua sendo a fonte de verdade para voz e conteúdo.

## Arquivos

| Arquivo | O que é |
|---|---|
| `brand/tokens.css` | Cores, `--fonte` + `@font-face` da Semplicita Pro, escala tipográfica, espaços, easings, z-index, superfícies |
| `brand/fontes/` | Semplicita Pro auto-hospedada (300/400/500/600 + itálicas, woff2 + ttf) |
| `shared/base.css` | Reset, tipografia, layout, todos os componentes, estados de reveal, reduced-motion |
| `shared/partials.html` | Nav, menu, WhatsApp, preloader, lightbox, form, footer e fragmentos — copiar tal qual |
| `shared/ui.js` | `initUI()` + Lenis/GSAP/ScrollTrigger, nav, menu, reveals, split, parallax, form, lightbox, preloader, `revelarHero()` |
| `scripts/build.mjs` | esbuild: `src/cXX-*/main.js` → `concepts/XX-*/app.js` (IIFE, minificado) |
| `scripts/shot.mjs` | Screenshots em 3 viewports + diagnóstico (console, overflow, fontes) |
| `scripts/lexico.mjs` | Varre os HTML (e `COPY.md`) atrás dos termos vetados do BRIEF §2.1 e de "!" |

## Tokens (`brand/tokens.css`)

- **Cores oficiais (manual pág. 18):** `--cor-bordo #550000`, `--cor-areia #B8997D`, `--cor-oliva-escuro #4A3B26`,
  `--cor-cinza-quente #544D45`. Aliases antigos continuam valendo: `--cor-madeira` = areia, `--cor-marmore` e
  `--cor-oliva` = oliva-escuro, `--cor-grafite` = cinza-quente.
- **Apoio:** `--cor-creme #F2E8D9` (texto e logo sobre escuro), `--cor-osso #EFE7DA` (fundo claro), `--cor-tinta
  #2A1A16` (texto sobre osso), `--cor-bordo-profundo #3B0000`, `--cor-bordo-claro #6E1212`, `--cor-creme-60`,
  `--cor-whatsapp` (só no hover do flutuante). Nunca `#000`/`#FFF`.
- **Superfícies:** `.sup-bordo`, `.sup-osso`, `.sup-profundo` definem `--bg`, `--fg`, `--fg-2`, `--acento`,
  `--rotulo`, `--linha`, `--botao-*` e `--foco`, e aplicam `background`/`color`. Os componentes leem dessas
  variáveis, então basta trocar a superfície da seção. Seções claras levam `data-tema="claro"` para a nav
  trocar o logo e o botão.
- **Escala:** `--h1` `clamp(2.6rem, 5.4vw, 5.8rem)`, `--h2`, `--h3`, `--corpo` (16 → 18px), `--eyebrow` (11–12px),
  `--medida 62ch`. **Espaço:** `--container 1440px`, `--gutter clamp(20px, 5vw, 96px)`, `--secao clamp(96px,
  12vw, 200px)`, `--coluna-gap`, `--espaco-1…6`, `--nav-altura 88px`.
- **Motion:** `--ease-out cubic-bezier(.22,1,.36,1)`, `--ease-inout`, `--dur-rapida/media/lenta/imagem`.
- **Camadas:** `--z-whats 80` < `--z-menu 90` < `--z-nav 100` < `--z-lightbox 110` < `--z-preloader 120`.

## Tipografia

Semplicita Pro em tudo (títulos 300, corpo 300, destaques 400/500, rótulos 400). Não existe 200. Sem serifa.

| Classe | Uso |
|---|---|
| `h1`/`.h1`, `h2`/`.h2`, `h3`/`.h3`, `h4` | escala; um único `<h1>` por página |
| `.titulo-2l` + `.linha-2` (ou `<em>`) | título de 2 linhas, 2ª em itálico 300 deslocada 8% no desktop (0 no mobile); `.titulo-2l--centro` desloca 6% |
| `.eyebrow` (+ `.numeral`) | rótulo em caixa alta, tracking .28em, cor `--rotulo` ("01 — O problema") |
| `.assinatura` | "— Dr. Túlio Bovo", 14px, areia |
| `.texto-grande`, `.texto-2`, `.destaque`, `.citacao`, `.medida` | variações de corpo |

## Layout

`.container` (1440 + gutter), `.container--estreito`, `.grid-12` com `.col-1…12` e `.col-inicio-N` (a partir de
900px; abaixo tudo ocupa a largura toda), `.secao` (`padding-block: var(--secao)`), `.secao--curta`, `.respiro`
(declaração centralizada com respiro enorme), `.centro`, `.pilha`, `.acoes`, `.sangra`, `.midia` + `.midia--16x9/21x9/4x5/3x2`,
`.linha-fina`, `.visualmente-oculto`. Breakpoints: 640 / 900 / 1200 / 1440, mobile-first.

## Componentes (classes)

| Componente | Classes | Observações |
|---|---|---|
| Nav | `.nav`, `.nav--solida`, `.nav__menu` (+ `.nav__menu-linhas`, `.nav__menu-txt`), `.nav__marca` > `.nav__wordmark` / `.nav__simbolo` > `.nav__logo--creme` / `--escuro`, `.nav__acoes`, `.nav__whats` | fixa e transparente; sólida (bordô 88% + blur) ao rolar > 40px; wordmark de 250px a partir de 640px, símbolo abaixo; sobre `data-tema="claro"` vira osso 88% com logo bordô |
| Menu | `.menu`, `.menu--aberto`, `.menu__in`, `.menu__colunas`, `.menu__coluna`, `.menu__titulo`, `.menu__lista` (+ `--grande`), `.menu__rodape` | tela cheia bordô; Esc fecha; foco vai para o primeiro link |
| Botões | `.botao` + `.botao--primario` / `--secundario` / `--contorno` / `--pequeno`; `.seta` | retângulo sem raio, 12px caixa alta; o primário muda de cor com a superfície; o secundário leva `<span class="seta">→</span>` |
| Tiles | `.tiles` (+ `--4`), `.tile`, `.tile__media`, `.tile__corpo`, `.tile__rotulo`, `.tile__sub`, `.tile--sobreposto` | imagem amplia 1.04 no hover |
| Lista numerada | `ol.pilares` > `li` (+ `.pilares__titulo`, `.pilares__texto`), `.pilares--colunas` | numeral em areia por contador CSS |
| Galeria | `.galeria`, `.galeria__item` (+ `--vertical` 4:5, `--quadrado`, `--larga`, `--meia`, `--terco`, `--sangra`, `--desloca`, `--sem-desloca`), `.galeria__moldura`, `.legenda` | padrão assimétrico automático a cada 4 itens |
| Médico | `.medicos`, `.medico`, `.medico__video` (9:16), `.medico__play`, `.medico__rotulo`, `.medico__nome`, `.medico__frente`, `.medico__crm`, `.medico__link` | |
| Passos | `ol.passos` > `li` (+ `.passos__titulo`, `.passos__texto`) | numerais 01–04, linha conectora (vertical no mobile, horizontal no desktop) |
| FAQ | `details.faq` > `summary` + `.faq__conteudo` | sinal + / − em CSS, abertura suave |
| Form | `.form`, `.form__campos` (+ `--2`), `.form__campo` (+ `--largo`), `.form__privacidade`, `.form__acoes`, `.form__sucesso`, `.form--enviado` | `<label>` depois do input; input com `placeholder=" "` |
| WhatsApp | `.whats`, `.whats--visivel` | aparece quando `[data-hero]` sai da tela |
| Footer | `.footer.sup-profundo`, `.footer__grid`, `.footer__col`, `.footer__logo`, `.footer__descritor`, `.footer__titulo`, `.footer__lista`, `.footer__pendente`, `.footer__base` | 4 → 2 → 1 colunas |
| Preloader | `.preloader`, `.preloader__marca`, `.preloader__linha` | só conceitos 1 e 3; ≤ 1,2 s |
| Lightbox | `dialog.lightbox`, `.lightbox__fechar` (`data-fecha-lightbox`), `.lightbox__media`, `.lightbox__legenda` | abre com `[data-abre-lightbox="#id"]` |
| Scroll | `.scroll-dica` (+ `--esquerda`) | linha vertical animada |

## Motion (`shared/ui.js`)

```js
import { initUI, gsap, ScrollTrigger, lenis, prefersReducedMotion, revelarHero } from '../../shared/ui.js';
const ui = initUI({ lenis: true, revelarHero: true, preloader: true });
window.addEventListener('rocca:pronto', () => { /* coisas do conceito */ });
```

- `initUI` põe `js` no `<html>`, cria o Lenis (lerp .09) sincronizado com `gsap.ticker` e `ScrollTrigger.update`
  (desligado em reduced-motion), liga nav/menu/form/lightbox/WhatsApp/ano/preloader.
- Atributos: `data-reveal` (opacity 0→1, y 24, 1,1 s, power3.out; `data-reveal="escala"` para imagens),
  `data-reveal-grupo` (filhos com stagger .08), `data-split-linhas` (quebra por linha, `yPercent` 110→0, stagger .08,
  re-split no resize), `data-parallax="-8"` (yPercent ±8 com scrub; use `data-parallax-area` no container),
  `data-contador="60"`, `data-abre-lightbox="#id"`, `data-fecha-lightbox`, `data-ano`, `data-tema="claro"`,
  `data-hero`, `video[data-pausa-fora]`.
- O hero: itens com `data-reveal`/`data-split-linhas` dentro de `[data-hero]` não entram nos reveals de scroll;
  `revelarHero()` os anima em ordem do DOM depois do `rocca:pronto` (passe `revelarHero: false` para controlar
  na mão, por exemplo sincronizado com as partículas).
- Sem `bounce`/`elastic`; `power2/3.out`, `expo.out`. Em `prefers-reduced-motion` tudo aparece sem animação.

## Como trocar identidade, fonte e logo

- **Fonte:** substitua os arquivos em `brand/fontes/` (mesmos nomes) ou edite os `@font-face` e a ordem de `--fonte`
  em `brand/tokens.css`. Nenhum HTML carrega Google Fonts.
- **Cores:** troque os valores `--cor-*` em `:root`; superfícies e componentes seguem.
- **Logo/símbolo:** `assets/img/logo.svg` (creme), `logo-escuro.svg` (= `logo-bordo.svg`, fundos claros),
  `simbolo.svg`, `simbolo-bordo.svg`, `favicon.svg`. Mantendo os nomes, o HTML não muda. Regras do manual: logo
  em bordô sobre claro e em branco/creme sobre escuro; nunca em areia; sem gradiente/efeito; wordmark nunca
  abaixo de 250px (a nav usa o símbolo abaixo de 640px).
- **Dados pendentes** (endereço, horários, telefone, Instagram, CRM): trocar em `shared/partials.html` e copiar
  nos três HTML.

## Como rodar

```bash
npm install                      # esbuild, gsap, lenis, three (sem CDN)
npm run build                    # gera concepts/XX/app.js (use --watch para observar)
npx http-server -p 8080 -c-1 .   # http://localhost:8080/concepts/00-kit/
```

## Screenshots e léxico

```bash
node scripts/shot.mjs concepts/00-kit/index.html docs/screenshots/00-kit --full
node scripts/lexico.mjs                       # varre concepts/**/index.html e COPY.md
```

`shot.mjs` abre o HTML via `file://` em 1440×900, 768×1024 e 390×844, rola a página inteira (dispara reveals e
lazy), volta ao topo, salva `<prefixo>-<viewport>.png` (e `-full.png` com `--full`, com todos os reveals
forçados) e imprime um JSON com erros de console, `pageerror`, requests falhas, overflow horizontal, tamanho do
`app.js` e fontes carregadas (`principal` deve ser `Semplicita Pro` com `principalCarregada: true`). Sai com 1
se houver `pageerror`. `lexico.mjs` sai com 1 se encontrar termo vetado ou "!" fora de um elemento com
`data-lexico-ok` (HTML) ou linha `[lexico-ok]` (md). A única exceção sancionada é "Você sai entendendo o próprio
resultado" — marque esse `<p>` com `data-lexico-ok`.
