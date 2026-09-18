# `src/site/` — como escrever uma página do site final

Este é o contrato entre a fase Base e os construtores de página. Quem constrói uma página lê **só este
arquivo** (mais a especificação de conteúdo da página em `scratchpad/site/home.md` ou `internas.md`).
Regras de voz e léxico: `BRIEF.md` §2.1 e o checklist do `COPY.md` — nada de "!" em texto, nada de
"resultado", "transformação", "excelência", "equipe multidisciplinar", "caneta", "corpo dos sonhos",
"agende já", "uma hora" (duração da consulta), "Frentes", "Serviços". Tudo em português do Brasil,
comentários de código inclusive. Nunca um nome de modelo de IA em arquivo do repositório.

## 1. Onde fica cada coisa

```
src/site/
  config.mjs            dados pendentes em um só lugar (WhatsApp, conta e UIDs do Stream, ano)
  comum.js              iniciarSite(extras): o que todas as páginas rodam   (NÃO editar, salvo o registro de um comportamento novo)
  main.js               entrada da home → site/app.js (comum.js + hero.js, com three.js)   (NÃO editar)
  interno.js            entrada das internas → site/interno.js (só comum.js, sem three.js)   (NÃO editar)
  hero.js               a abertura fundida da home: iniciarHeroFusao()   (o construtor da home implementa)
  paginas/<slug>.html   UM template por página (documento HTML completo + cabeçalho de metadados)
  partials/*.html       head · skip · nav · menu · fecho · footer · whats · lightbox   (NÃO editar)
site/                   SAÍDA gerada e versionada (o GitHub Pages publica o repositório sem build)
  index.html            ← paginas/index.html   ({{raiz}} = ../     {{site}} = ./)
  <slug>/index.html     ← paginas/<slug>.html  ({{raiz}} = ../../  {{site}} = ../)
  site.css              regras comuns do site (fase Base)   — NÃO editar (nem shared/base.css)
  css/<slug>.css        regras só daquela página — cada construtor escreve a sua, nunca a dos outros
  app.js                bundle da home, gerado por `npm run build` (~620 KB: traz o three.js das partículas)
  interno.js            bundle das nove internas, gerado por `npm run build` (~140 KB, sem three.js)
```

As dez páginas e seus slugs: `index` (home) · `nutrologia` · `endocrinologia` · `dermatologia` ·
`dr-tulio-bovo` · `dr-breno-gondim` · `dra-ana-paula-bovo` · `a-casa` · `conteudo` · `contato`.
A fase Base deixou um **esqueleto** de cada uma em `paginas/` (só o hero) para os links do site
resolverem: o construtor **substitui o arquivo inteiro**.

## 2. Anatomia de um template

```html
<!-- pagina
titulo: Nutrologia em Moema — Instituto Rocca
descricao: Nutrologia no Instituto Rocca, em Moema: emagrecimento e metabolismo, lipedema. Investigar antes de prescrever, com o mesmo médico do primeiro dia em diante.
og_titulo: Nutrologia — Instituto Rocca
og_imagem: assets/img/consultorio-01.jpg
css: nutrologia
corpo: sup-bordo pagina pagina--nutrologia
whats_msg: Olá. Quero agendar uma avaliação em Nutrologia no Instituto Rocca.
fecho_h2: Avaliação com o médico / que vai acompanhar você.
fecho_nota: Quem responde é o Instituto. Você conta o que parou de funcionar e a avaliação é marcada na conversa, em até um dia útil.
-->
<!DOCTYPE html>
<html lang="pt-BR">
{{head}}
<body class="{{corpo}}">
{{skip}}
{{nav}}
{{menu}}
<main id="conteudo">
  … as seções da página, com {{raiz}}assets/… nas mídias e {{site}}<slug>/ nos links …
</main>
{{fecho}}
{{footer}}
{{whats}}
{{lightbox}}
</body>
</html>
```

O cabeçalho é a **primeira coisa do arquivo**: um comentário HTML que começa com `<!-- pagina` e traz
uma linha `chave: valor` por dado (o gerador o remove da saída; `&` em texto vai como `&amp;`).

| Chave | Obrigatória | Padrão | Onde entra |
|---|---|---|---|
| `titulo` | sim | — | `<title>` (e `og:title` se `og_titulo` faltar) |
| `descricao` | sim | — | `meta description` e `og:description` |
| `og_titulo` | não | `titulo` | `og:title` |
| `og_imagem` | não | `assets/img/producao/medicos-trio-horizontal.jpg` | `og:image` (caminho a partir da raiz do repositório; o gerador prefixa `{{raiz}}`) |
| `css` | não | o slug | `<link>` para `site/css/<css>.css`; se o arquivo não existir, o gerador **avisa** e omite o link |
| `corpo` | não | `sup-bordo` | `class` do `<body>` (o template escreve `<body class="{{corpo}}">`) |
| `tema_cor` | não | `#550000` | `meta theme-color` |
| `whats_msg` | não | `WHATS_MSG_PADRAO` do `config.mjs` | mensagem pré-preenchida de **todos** os links `{{wa}}` da página |
| `fecho_h2` | não | `Avaliação com o médico / que vai acompanhar você.` | H2 do fecho; ` / ` marca a segunda linha (itálica) |
| `fecho_sub` | não | vazio (o `<p>` não é emitido) | parágrafo `texto-grande` acima do botão do fecho |
| `fecho_nota` | não | a nota padrão | nota sob o número do WhatsApp |
| `robots` | não | vazio (sem meta) | `<meta name="robots">`, ex.: `noindex` enquanto o site estiver em refinamento |

## 3. Placeholders

| Placeholder | Vale | Uso |
|---|---|---|
| `{{raiz}}` | `../` na home, `../../` nas internas | tudo que está na raiz do repositório: `{{raiz}}assets/img/x.jpg`, `{{raiz}}assets/placeholders/x.svg` |
| `{{site}}` | `./` na home, `../` nas internas | links entre páginas: `{{site}}nutrologia/`, `{{site}}dermatologia/#pele`, `{{site}}` (home) |
| `{{wa}}` | `https://wa.me/<número>?text=<whats_msg codificada>` | todo link para o WhatsApp da página (o nav, o menu, o fecho e o flutuante já usam) |
| `{{whats_numero_visivel}}` | `+55 11 99999-9999` | o número por extenso (o rótulo `[PENDENTE]` fica no HTML, ao lado) |
| `{{ano}}` · `{{slug}}` · `{{titulo}}` · `{{descricao}}` | — | raramente necessários fora dos partials |
| `{{stream_<chave>}}` | UID do vídeo em `STREAM_IDS` (`config.mjs`), vazio hoje | `data-stream="{{stream_tulio}}"`; chaves: `institucional`, `fundo`, `tulio`, `breno`, `ana`, `casa_tulio`, `casa_breno`, `casa_ana` |
| `{{head}}` `{{skip}}` `{{nav}}` `{{menu}}` `{{fecho}}` `{{footer}}` `{{whats}}` `{{lightbox}}` | o partial inteiro | qualquer `partials/x.html` vira `{{x}}` |

Regras: os partials `nav`, `menu` e `footer` recebem `aria-current="page"` no link da página atual
sozinhos. `/contato/` simplesmente **não escreve** `{{fecho}}` (o topo da página é o fecho). Nenhum
`{{…}}` pode sobrar na saída — placeholder desconhecido é erro.

Caminhos dentro de **CSS** resolvem a partir do arquivo CSS, não da página: em `site/css/<slug>.css`
uma imagem é `../../assets/img/x.jpg`.

## 4. Comportamentos por atributo de dados (`site/app.js` na home, `site/interno.js` nas internas)

O `head` partial escreve `<script src="{{site}}{{bundle}}" defer>`: o gerador põe `app.js` na home e
`interno.js` nas demais. Os dois saem de `comum.js` (`iniciarSite`); a home acrescenta `hero.js`, que
traz o three.js — por isso as internas não o baixam. A tabela vale para os dois bundles.

| Atributo | Módulo | O que faz |
|---|---|---|
| `data-hero` | ui.js | Marca a primeira dobra: o WhatsApp flutuante aparece quando ela sai da tela e `revelarHero()` anima o que está dentro. **Toda página precisa de um** (a `<section class="hero">` do topo; na home, a `.abertura`) |
| `data-reveal` · `data-reveal="escala"` · `data-reveal-grupo` | ui.js | Entrada por opacidade/y (ou escala 1.06 → 1) ao entrar na tela; o grupo anima os filhos em cascata (é o que substitui qualquer "data-cartoes") |
| `data-split-linhas` | ui.js | Título revelado linha a linha (`.linha > .linha__in`) |
| `data-parallax="-8"` · `data-parallax-area` | ui.js | yPercent ±v com scrub dentro da área (`.paralaxe > .paralaxe__in > img`) |
| `data-tema="claro"` | ui.js | Seção clara (`sup-osso`): a nav troca para logo escuro e botão bordô enquanto ela está sob a nav |
| `data-abre-lightbox="#filme"` · `data-fecha-lightbox` | ui.js | Abre/fecha o `<dialog id="filme">` do partial `lightbox` |
| `data-mosaico` | shared/mosaico.js | Seis peças `.mosaico__item--a…f` com `.mosaico__moldura > img`: entrada em cascata e paralaxe leve, sem pin (CSS em `base.css`) |
| `data-slider` · `data-slider-pista` · `-prev` · `-next` · `-atual` | shared/slider.js | Slider editorial (setas, arrasto, teclado) |
| `data-linha` | src/c02-chegada/linhas.js | Linha de 1 px que cresce da esquerda ao entrar (o `site.css` já a deixa em `scaleX(0)` com JS) |
| `data-stream` … | shared/stream.js | Vídeo do Cloudflare Stream — §5 |
| `data-hero-fusao` | src/site/hero.js | A abertura fundida da home (só a home; o construtor da home implementa `iniciarHeroFusao()`) |
| `data-contador` | ui.js | Existe, mas o BRIEF veta contadores — **não usar** |

Precisa de um comportamento novo? Crie `src/site/<nome>.js` exportando `iniciarX()` (que procura o seu
atributo e não faz nada se ele não existir) e registre em `comum.js` com **uma** linha de import e **uma**
linha de chamada dentro de `abrir()` — assim entra nos dois bundles. Nada mais muda em `comum.js`,
`main.js` ou `interno.js`. Só se o comportamento puxar uma biblioteca pesada e servir a uma única
página é que ele vai na entrada dela (como `hero.js` na `main.js`, pelo `extras` de `iniciarSite`).

Sem JS (`html:not(.js)`) e com `prefers-reduced-motion` a página tem de ficar legível: as regras do
`base.css` §20–21 já mostram tudo o que `data-reveal`/`data-split-linhas` esconderiam; não crie estados
iniciais com `opacity: 0` fora de `html.js`.

## 5. Vídeo — componente `shared/stream.js`

Sempre pelo componente, nunca `<video>` nem iframe escrito à mão. Sem UID mostra o poster com o rótulo;
com UID monta o iframe do Stream. O site nunca mostra "filme em produção".

```html
<div class="stream" data-stream="{{stream_tulio}}" data-stream-modo="player"
     data-stream-titulo="Quem eu sou — Dr. Túlio Bovo" data-stream-proporcao="9/16">
  <img class="stream__poster" src="{{raiz}}assets/img/producao/dr-tulio-bovo.jpg"
       onerror="this.onerror=null;this.src='{{raiz}}assets/placeholders/retrato-tulio.svg'"
       alt="" width="1600" height="2400" loading="lazy" decoding="async">
  <button class="stream__play" type="button" hidden aria-label="Reproduzir: Quem eu sou — Dr. Túlio Bovo">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5v17l14-8.5z"/></svg>
  </button>
  <span class="stream__rotulo">Quem eu sou — gravado no estúdio Jacarandá <span class="texto-2">[PENDENTE]</span></span>
</div>
```

| Atributo | Valores | Obrigatório |
|---|---|---|
| `data-stream` | o UID (`{{stream_<chave>}}`) ou vazio | sim |
| `data-stream-modo` | `fundo` (loop mudo, monta ao se aproximar da tela; não monta abaixo de 900 px, com saveData ou movimento reduzido) · `player` (play no lugar, com controles e som) · `lightbox` (o play abre o `#filme` com este vídeo) · `alvo` (só no partial `lightbox`) | sim — o gerador falha sem um modo válido |
| `data-stream-titulo` | `title` do iframe | sim |
| `data-stream-proporcao` | `16/9` (padrão) · `9/16` · `21/9` · `3/2` — o CSS dá a proporção da moldura; `9/16` abre vertical no lightbox | não |
| `data-stream-poster` | URL absoluta para o `poster` do player (só quando o site tiver domínio) | não |

- O poster é sempre um `<img>` real (aceita `<picture>` e o `onerror` de fallback). O play nasce `hidden`.
- Modo `lightbox`: o play leva `data-abre-lightbox="#filme"` (o `stream.js` põe se faltar). Abridores
  soltos (um `<a>`/`<button>` com `data-abre-lightbox="#filme"`) passam `data-stream-id="UID"` +
  `data-stream-titulo`, ou `data-stream-de="#seletor"` para herdar o UID de outro `.stream`
  (`data-stream-de="#filme .stream"` = o institucional completo do lightbox).
- `data-stream-precisa="#seletor"` em qualquer elemento `hidden`: perde o `hidden` só quando o `.stream`
  apontado tiver UID (ex.: o botão `Assistir ao filme`).
- Card de médico: `<div class="medico__midia stream" data-stream-modo="lightbox" data-stream-proporcao="9/16">`
  — a moldura fica 2:3 (retrato) e o vídeo 9:16 abre no lightbox.
- Para testar com um UID de mentira: `<html data-stream-conta="teste">` no HTML gerado e um valor em
  `data-stream`; nada disso vai para o template.

## 6. Mídia — nomes e medidas reais dos arquivos

| Arquivo | Medidas | Fallback (`onerror`) |
|---|---|---|
| `assets/img/producao/medicos-trio-horizontal.jpg` | 1280×853 (3:2) | — |
| `assets/img/producao/medicos-trio-vertical.jpg` | 853×1280 (2:3) | — |
| `assets/img/producao/dr-tulio-bovo.jpg` | 1600×2400 | `assets/placeholders/retrato-tulio.svg` |
| `assets/img/producao/dr-breno-gondim.jpg` | 1600×2400 | `assets/placeholders/retrato-breno.svg` |
| `assets/img/producao/dra-ana-paula-bovo.jpg` | 1365×2048 | `assets/placeholders/retrato-ana-paula.svg` |
| `assets/img/producao/dra-ana-paula-bovo-02.jpg` | 853×1280 | `assets/placeholders/retrato-ana-paula-45.svg` |
| `assets/img/entrada-clinica.jpg` · `-mobile.jpg` | 2731×1536 · 1228×1536 | — |

Foto principal do trio, sempre em `<picture>` (vertical até 640 px):

```html
<figure class="trio paralaxe" data-parallax-area data-reveal="escala">
  <div class="paralaxe__in" data-parallax="-5">
    <picture>
      <source media="(max-width: 639.98px)" srcset="{{raiz}}assets/img/producao/medicos-trio-vertical.jpg">
      <img src="{{raiz}}assets/img/producao/medicos-trio-horizontal.jpg" width="1280" height="853" loading="lazy" decoding="async" alt="…">
    </picture>
  </div>
  <figcaption class="trio__legenda eyebrow">…</figcaption>
</figure>
```

Retratos: referencie o nome definitivo com o `onerror` de fallback (ver §5). Só o hero carrega sem
`loading="lazy"`. `alt` descritivo em toda imagem de conteúdo; `alt=""` só em fundo e poster.

## 7. O que o `site/site.css` já dá (não repita)

`--secao` com mais respiro · `.paralaxe/.paralaxe__in` · `[data-linha]` · `.menu__sub` ·
`.footer__lista--pequena` · componente `.stream` · abertura fundida da home (`.abertura`, `.hero--fusao`,
camadas, `.hero__alvo`, estado estático `.abertura--estatica`, e a seção seguinte `.abertura + .secao`
que reserva a janela) · hero interno (`.hero--interno`, `.hero--retrato`, `.hero--sem-foto`, `.hero--tela`
com `.hero__fundo`) · cabeçalho de seção (`.secao__cabeca.grid-12` + `.secao__sub`) · prosa (`.prosa`,
`.fala`, `.texto-2col`, `.figura-apoio`, `.tres`, `.lista-links`, `.ligacoes`) · especialidades
(`.especialidades > .especialidade`, `.destaque-faixa`) · "O que tratamos" (`.tratamos__lista > .tratamento`)
· perguntas (`.perguntas-lista > .pergunta-item`, `.comuns > .comum`) · cards de médico com retrato 2:3
(`.medico__midia`, `.medicos--2`) · `.trio` · `.mapa` · `.endereco` · fecho. Os nomes e a estrutura
esperada estão comentados no próprio `site.css`. Componentes do sistema (tiles, pilares, passos, faq,
galeria, mosaico, slider, botões, eyebrow, `titulo-2l`) vêm do `shared/base.css`.

Regras de CSS: mobile-first; breakpoints 640 / 900 / 1200 / 1440; variáveis de `brand/tokens.css`;
sem `border-radius`; nada de CDN nem `<link>` externo.

## 8. Comandos

```
node scripts/site.mjs            # gera as dez páginas (ou: node scripts/site.mjs nutrologia)
npm run build                    # site/app.js + site/interno.js (e os bundles dos conceitos)
node scripts/lexico.mjs          # léxico: tem de terminar em "Léxico ok"
npm run site                     # os três acima, em ordem
node scripts/shot.mjs site/<slug>/index.html <prefixo>    # capturas 1440 / 768 / 390 + diagnóstico
node scripts/shot.mjs site/index.html <prefixo>           # (home)
```

O gerador **falha** (sai com 1 e não grava a página) se sobrar `{{…}}`, se houver mais de um `<h1>` (ou
nenhum), se um `href`/`src`/`srcset`/`poster` relativo (ou o `this.src='…'` de um `onerror`) apontar
para arquivo inexistente, ou se um `[data-stream]` estiver sem `data-stream-modo` válido. Links para
outras páginas do site valem desde que o template dela exista em `paginas/`.

Antes de entregar: `npm run site` verde · `shot.mjs` com `pageErrors`, `consoleErrors` e `requestFailed`
vazios e `overflowX: false` nos três viewports · um `<h1>` · landmarks (`header.nav`, `nav#menu`,
`main#conteudo`, `footer#rodape`, `dialog#filme`) · `alt` descritivo · foco visível · `[PENDENTE]`
visível em todo dado que o cliente ainda não enviou.
