# assets/ — mídia dos conceitos de home

Duas pastas: `img/` (renders do projeto de interiores + logo vetorial) e `placeholders/` (SVGs que ocupam o
lugar da mídia que ainda não existe: retratos, vídeos, tela do exame). Tudo o que está em `placeholders/` é
temporário e sai quando a diária correspondente for feita. Regra geral de troca: **mesmo nome-base, extensão
real** (`.jpg`, `.mp4`), sem mexer em layout.

## Como trocar um placeholder por mídia real

| Placeholder (SVG)                       | Mídia real esperada                                   | Onde colocar             |
|-----------------------------------------|-------------------------------------------------------|--------------------------|
| `retrato-tulio.svg` (9:16)              | `retrato-tulio.jpg`, 1080×1920 ou maior (4:5 idem, `-45.jpg`) | `assets/img/`    |
| `retrato-breno.svg`, `retrato-ana-paula.svg` | idem                                             | `assets/img/`            |
| vídeos verticais dos cards OS MÉDICOS   | `tulio.mp4`, `breno.mp4`, `ana-paula.mp4` (9:16, loop mudo) | `assets/video/`    |
| `video-conversa.svg`                    | `conversa.mp4` (16:9, com som) + `conversa.jpg` (poster) | `assets/video/`       |
| `poster-institucional.svg`              | `poster.jpg` (16:9) + `institucional.mp4` (loop mudo) + `institucional-completo.mp4` | `assets/video/` |
| `bastidores-01.svg` … `03.svg`          | `bastidores-01.mp4` … (clipes curtos) ou `.jpg`       | `assets/video/` ou `img/`|
| `tela-exame.svg`                        | foto real do consultório com a tela acesa, ou captura da tela off-white (16:10) | `assets/img/` |
| `particulas-fallback.svg`               | não é substituído: é o fallback do hero do conceito 1 (`prefers-reduced-motion` / sem WebGL) | — |
| `textura-ripado.svg`, `play.svg`        | não são substituídos (elementos de interface)         | —                        |

No HTML, o `src`/`poster` aponta para o SVG; ao trocar, basta apontar para o arquivo real (mesmo nome, outra
extensão). Os SVGs foram desenhados no mesmo enquadramento que a mídia real vai ter, então `object-fit: cover`
e os cortes por breakpoint continuam valendo.

## placeholders/ (SVG, todos ≤ 120 KB; partículas ≤ 300 KB)

Todos usam só a paleta do `brand/tokens.css` (bordô `#4A1312`, bordô-profundo `#33090B`, bordô-claro `#6B1F1E`,
creme `#F2E8D9`, osso `#EFE7DA`, tinta `#2A1A16`, madeira `#B79A7C`, mármore `#483927`, grafite `#534B46`) e
misturas entre elas. Nunca preto puro nem branco puro. Sem filtros (só gradientes), então renderizam leves em qualquer
navegador. Texto interno em Jost com fallback sem serifa — dentro de `<img>` o navegador não baixa webfont,
então o rótulo cai no sans do sistema; é um rótulo pequeno e discreto, não faz diferença.
Gerados por script (`scripts` do agente, não versionado): quem quiser refazer altera os valores e regenera.

| Arquivo | viewBox | O que é | Onde entra |
|---------|---------|---------|------------|
| `retrato-tulio.svg`, `retrato-breno.svg`, `retrato-ana-paula.svg` | 1080×1920 (9:16) | Retrato no estúdio Jacarandá: painel de madeira em facetas (madeira/mármore/grafite), luminária quente lateral, silhueta abstrata de busto sentado na poltrona (sem rosto), nome + "Retrato — diária no estúdio Jacarandá" no rodapé | cards OS MÉDICOS (poster dos vídeos verticais), página de cada médico |
| `retrato-*-45.svg` | 1080×1350 (4:5) | mesma cena, corte 4:5 | grade dos médicos no desktop, feed |
| `video-conversa.svg` | 1920×1080 | Estúdio em sépia quente com os bastidores à mostra (padrão Seven): ciclorama, softbox no teto, dois tripés, duas banquetas com figuras sentadas de perfil, play central | seção "Conversa" / tile de vídeo horizontal |
| `bastidores-01.svg` | 1600×1200 | A chegada: porta de madeira entreaberta com luz saindo pela fresta | tiles "Bastidores" (conceito 3) |
| `bastidores-02.svg` | 1600×1200 | A espera: teto circular luminoso sobre uma poltrona de couro e mesinha | idem |
| `bastidores-03.svg` | 1600×1200 | O exame na tela: laptop com tela off-white e uma linha de evolução | idem |
| `tela-exame.svg` | 1600×1000 | A tela como a Direção descreve: fundo osso, muito espaço, uma linha bordô subindo, quatro marcadores de mês em madeira, título discreto "Composição corporal — evolução". Sem tabela, sem painel escuro | split-screen do BLOCO 3B (conceito 2), prova "o exame lido junto com você, na tela" |
| `particulas-fallback.svg` | 1920×1080 | ~1.400 partículas creme/madeira formando uma esfera suave (centro-direita, deformação orgânica, fio de partículas subindo do topo) sobre bordô-profundo com gradiente radial | hero do conceito 1 quando não há WebGL ou com `prefers-reduced-motion` |
| `poster-institucional.svg` | 1920×1080 | Poster do filme: a recepção em formas simples (parede osso, piso madeira, dois balcões de mármore, três luminárias como arcos, painel ripado, wordmark na parede — os `<path>` de `img/logo-escuro.svg`), véu bordô 35%, rótulo "Filme institucional — gravação na clínica" | `poster` do `<video>` do hero do conceito 3 e do lightbox |
| `textura-ripado.svg` | 80×80, tileável | Ripado bordô (barras `#6B1F1E` sobre `#4A1312`, sombra sutil) — use como `background-image` repetido | fundos de destaque, menu, footer |
| `play.svg` | 96×96 | Ícone de play: círculo fino + triângulo, creme | botão do vídeo (conversa, institucional) |

## img/ — renders do projeto de interiores (Doppo Arquitetura, rev 00) e logo

Dois tipos de render: **realistas** (luz e materiais fechados — são os que vão para o site) e **estudos de
maquete** (traço de SketchUp, sem iluminação — servem para entender o espaço, não para publicar). A linha de
cada arquivo abaixo serve de `alt`.

| Arquivo | Dimensões | Tipo | Descrição (alt) |
|---------|-----------|------|-----------------|
| `entrada-clinica.jpg` | 2731×1536 (16:9) | realista | Recepção do Instituto Rocca: painel ripado bordô à esquerda, banco de madeira, dois balcões de mármore marrom, o wordmark na parede, três luminárias suspensas, chaise creme, cadeira de palhinha e teto com círculo luminoso |
| `entrada-clinica-mobile.jpg` | 1228×1536 (4:5) | realista | Recepção em corte vertical: dois balcões de mármore marrom, luminárias suspensas em forma de folha, o wordmark Instituto Rocca na parede clara e uma cadeira de palhinha |
| `chegada-porta.jpg` | 2048×2048 (1:1) | realista | A recepção vista do hall, pelo vão da porta: balcões de mármore marrom, luminárias suspensas, o wordmark na parede e uma cadeira de palhinha |
| `espera-01.jpg` | 2000×1124 | realista | Sala de espera: teto com círculo luminoso, painel ripado bordô na parede, chaise creme, cadeiras de palhinha, tapete redondo, copa de mármore e a porta de madeira da sala de bioimpedância |
| `espera-02.jpg` | 2000×1265 | realista | Sala de espera sob o teto circular iluminado: sofá curvo creme, dois pufes de bouclê, duas cadeiras de palhinha, tapete redondo, painéis curvos de madeira clara e copa com nicho de mármore marrom |
| `lounge-copa.jpg` | 2000×1116 | realista | Copa e lounge: painéis de madeira clara com portas embutidas, nicho de mármore marrom com xícaras e máquina de café, pufe de bouclê, cadeiras de palhinha e tapete redondo |
| `corredor-portas.jpg` | 2000×1124 | realista | Corredor de painéis e portas de madeira clara embutidas, luz indireta no teto, plaquinhas discretas e dois pufes de bouclê |
| `corredor-02.jpg` | 2000×1124 | estudo | Estudo do corredor: parede clara com três portas de madeira e plaquinhas de identificação dos consultórios |
| `consultorio-05.jpg` | 2000×1523 | realista | Consultório com luz quente indireta: mesa de mármore Emperador com laptop, luminária de parede em bronze, duas banquetas de visita, poltrona verde-oliva e painel de madeira escura com porta embutida |
| `consultorio-06.jpg` | 2000×1601 | realista | Consultório de frente: painel de madeira escura, mesa de mármore com laptop, cadeira de rede preta, poltrona verde-oliva, armário escuro e espelho com fita de luz |
| `consultorio-01.jpg` | 2000×1555 | realista | Consultório com janela ampla para o skyline de São Paulo: mesa de mármore marrom com laptop, cadeira preta, duas cadeiras de visita, luminária articulada e poltrona verde-oliva |
| `consultorio-02.jpg` | 2000×1650 | estudo | Estudo do consultório: painel de madeira escura à esquerda, mesa de mármore marrom, luminária articulada, poltrona verde-oliva e cortina de tela |
| `consultorio-03.jpg` | 2000×1571 | estudo | Estudo do consultório de frente: parede de madeira cinza-grafite, mesa de mármore, cadeira de rede preta, poltrona verde-oliva e luminária articulada |
| `consultorio-04.jpg` | 2000×1499 | estudo | Estudo do consultório: cortina de tela ao fundo, mesa de mármore com laptop, duas cadeiras de visita, armário escuro em L e poltrona verde-oliva |
| `consultorio-dermatologia-01.jpg` | 2000×1252 | realista | Sala de dermatologia: maca reclinável creme sob um círculo luminoso no teto, bancada de madeira clara com cuba de mármore marrom e janela para a cidade |
| `consultorio-dermatologia-02.jpg` | 2000×1148 | realista | Consultório de dermatologia: painéis de madeira clara, mesa de mármore com laptop e duas banquetas, vitrine iluminada, maca creme e bancada com cuba de mármore junto à janela |
| `soroterapia-01.jpg` | 1886×2048 (vertical) | realista | Sala de soroterapia: três poltronas reclináveis em couro creme junto à janela com o skyline, suportes de soro na parede e bancada de mármore marrom com cuba |
| `soroterapia-02.jpg` | 2000×1261 | realista | Sala de soroterapia de frente: três poltronas de couro creme, mesinhas de madeira, suportes de soro, duas arandelas redondas de madeira e luz indireta no teto |
| `bioimpedancia.jpg` | 1499×1499 (1:1) | estudo | Estudo da sala de bioimpedância: bancada branca com cuba redonda e laptop, cadeira giratória creme, prateleira escura com luz indireta e piso de madeira clara |
| `sala-aplicacao.jpg` | 1334×1952 (vertical) | estudo | Estudo da sala de aplicação: bancada branca com cuba e laptop, cadeira giratória creme, prateleira e pufe marrom |
| `sala-procedimento.jpg` | 1978×2024 (1:1) | estudo | Estudo da sala de procedimento: maca branca, banqueta, escadinha e aparelho com tela em carrinho |
| `planta.jpg` | 1272×1536 | planta | Planta baixa humanizada da clínica: recepção com tapete redondo, consultórios, salas de soroterapia e bioimpedância, copa e banheiros |
| `logo.svg` | vetor | marca | Wordmark Instituto Rocca em creme (sobre bordô) — provisório, gerado a partir da Jost |
| `logo-escuro.svg` | vetor | marca | Wordmark em tom escuro (sobre osso) — provisório |
| `monograma.svg` | vetor | marca | Monograma "R" provisório — sai quando o símbolo oficial chegar |

Observações para uso na home: os estudos de maquete (`corredor-02`, `consultorio-02/03/04`, `bioimpedancia`,
`sala-aplicacao`, `sala-procedimento`) só entram como último recurso; a `bioimpedancia` real vai vir da diária
02. Nos renders que mostram plaquinhas com nomes, a sinalização é do projeto e não da marca (a Direção pede
"sem sinalização").
