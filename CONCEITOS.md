# Instituto Rocca — conceitos para a home

> Documento de apresentação. Cada conceito é um protótipo navegável em `concepts/<conceito>/index.html`.
> Os três nascem da mesma Direção de Marca, usam o mesmo sistema visual e o mesmo texto; o que muda é o hero,
> o ritmo e a forma como a mídia atravessa a página.

## 0. O que os três têm em comum

**A frase-mãe como régua.** "Seu médico. Sua melhor versão." abre os três heros, com a segunda linha em itálico
como assinatura tipográfica. Cada dobra paga as duas metades: de quem é (a relação) e o que devolve (o
mecanismo).

**O texto da Direção de Marca, na íntegra.** Hero → O problema → O método → O mecanismo → As provas →
Os médicos → Fecho. Sem "agende já", sem contador, sem antes-e-depois, sem promessa de resultado. Em volta
desses blocos entram as seções de apoio (Frentes, A casa, A primeira consulta, Perguntas da semana, Perguntas
mais comuns), todas escritas na mesma voz e checadas pelo léxico (`node scripts/lexico.mjs`).

**A identidade oficial.** Bordô Rocca 01 como cor principal e creme como cor de letra; areia, oliva escuro e
cinza quente como apoio; Semplicita Pro (auto-hospedada, pesos 300–600) sem serifa; wordmark e símbolo a partir
dos vetores oficiais; regra dos 250 px (no mobile a nav usa o símbolo).

**"Clássico no vínculo. Avançado na medicina."** A madeira, o mármore e a luz quente dos renders do projeto de
interiores dão o ambiente clássico; a tela do exame (off-white, uma linha só), a bioimpedância e o método dão o
avançado. Nenhum conceito tem só um dos dois.

**Estrutura de conversão.** Botão "Agendar avaliação" fixo na nav, WhatsApp flutuante após a primeira dobra,
formulário curto no fecho, seção "A primeira consulta" para reduzir o no-show (quem entende o que vai acontecer,
aparece), FAQ com as três objeções das personas.

## 1. Conceito 1 — Matéria (partículas three.js)

**Frase de apresentação:** *"O que se dispersou volta ao lugar."* É a frase-mãe em movimento: milhares de
partículas em creme e areia sobre bordô-profundo nascem dispersas e, em 2,6 segundos, convergem para um seixo
orgânico que respira, reage ao mouse e solta um fio de poeira de luz pelo topo. Não é transformação em outra
coisa: é matéria voltando a se organizar. Ao rolar, a forma se dissolve para cima enquanto o bloco "O
problema", em osso, sobe por cima do hero como uma cortina.

**Onde ele se apoia nas referências:** a partícula da Totanka e a poeira de cobre da Clinique La Prairie,
traduzidas para a paleta Rocca. É o conceito que mais diz "avançado na medicina" logo na primeira dobra.

**Hero:** texto à esquerda (eyebrow, H1 em duas linhas com a segunda em itálico, sub, "Agendar avaliação" e
"Como funciona a primeira consulta"), forma centro-direita; no mobile a forma fica acima do texto, sobre um
véu de leitura. ~30 mil partículas no desktop, 10 mil no mobile; DPR limitado a 1,5; o loop pausa fora da tela
e com a aba oculta; sem WebGL ou com `prefers-reduced-motion` entra um SVG estático de partículas.

**Percurso:** Hero → 01 O problema (osso, cortina) → 02 O método (bordô, consultório com o computador) →
Frentes (osso, lista numerada) → 03 O mecanismo (bordô, split-screen consultório | tela do exame) → As provas
(bordô com poeira esparsa ao fundo) → O que a gente não faz (faixa) → A casa (osso, galeria de seis renders) →
Os médicos (bordô, três cards 9:16) → A primeira consulta (osso, quatro passos) → Perguntas da semana (bordô)
→ Perguntas mais comuns (osso) → Fecho com WhatsApp e formulário → Footer.

**Motion:** preloader com o wordmark; convergência das partículas e depois o hero por linhas; scrub do hero
dissolve a forma; reveals e split por linhas em todos os títulos; parallax sutil em três imagens; poeira
quase estática como textura em As provas.

**Pontos de atenção:** é o mais pesado (app.js com three.js ≈ 630 KB) e depende de GPU para o hero; em
celulares antigos cai para o fallback estático. Cuidar para nunca parecer "startup de IA": sem azul, sem
neon, sem grid.

**O que precisa das diárias:** vídeos verticais "Quem eu sou" e retratos 9:16 dos três (estúdio); capas 4:5
das séries (estúdio); consultório com a tela off-white acesa, mesa com o computador visto pela tampa,
recepção, espera, corredor, consultório, bioimpedância e lounge (clínica).

## 2. Conceito 2 — Chegada (a entrada da clínica)

**Frase de apresentação:** *"Você chegou."* A recepção do Instituto em tela cheia, como capa de revista de
arquitetura: madeira, mármore Emperador, luz quente e o wordmark na parede. É o conceito mais próximo da
Clinique La Prairie no ritmo: seções longas, muito respiro, duas declarações em osso com quase nada além do
título, listas editoriais em linhas finas que se desenham.

**Hero:** foto da recepção (render tratado com o logo real; a foto da diária entra no mesmo arquivo) com a nav
em bordô sobre o teto claro, texto no terço inferior esquerdo sobre um véu bordô que sobe da base sem sujar a
imagem, e o bloco dimensionado para não cobrir o wordmark da parede. Ao rolar, o hero fica preso, o texto some,
a foto sobe com parallax e encolhe para dentro de uma moldura bordô enquanto "O problema" entra por baixo.
No mobile e no tablet retrato entra a versão 4:5 da imagem.

**Percurso:** Hero → 01 O problema (bordô) → 02 O método (declaração em osso) → Frentes (osso, lista editorial)
→ 03 O mecanismo (bordô, split-screen de largura total: consultório | tela do exame) → As provas (declaração
em osso) → O que a gente não faz (faixa) → A casa (aberta pela porta vista do corredor, depois grade editorial
assimétrica com seis renders) → Os médicos → A primeira consulta → Perguntas da semana (linhas com miniatura)
→ Perguntas mais comuns → Fecho → Footer.

**Motion:** foto assenta ao carregar; pin + scrub do hero; nav troca de tema conforme a superfície; linhas
finas que se desenham nas listas; parallax em três imagens; hover que amplia as fotos da casa. Sem WebGL e sem
preloader: é o mais leve dos três primeiros (app.js ≈ 138 KB).

**Pontos de atenção:** a página vive da fotografia, então a diária na clínica define a qualidade final; até
lá, os renders sustentam bem, mas bioimpedância, aplicação e procedimento ainda são croquis do projeto.

**O que precisa das diárias:** recepção em 3:2 e 4:5 com o wordmark visível (clínica); a porta vista do hall
em 4:5; consultório com a tela acesa e captura frontal da tela; recepção, espera, corredor, consultório,
bioimpedância e lounge para a galeria; vídeos verticais, retratos 9:16 e capas 4:5 dos três (estúdio).

<!-- CONCEITOS 3–6: preencher a partir dos relatórios dos construtores -->

## 4. Comparativo e recomendação

<!-- COMPARATIVO: preencher a partir da crítica de consistência -->

## 5. O que cada diária precisa entregar para o site

### Diária 01 — Estúdio Jacarandá (fundação)

| Plano | Formato | Onde entra |
|-------|---------|-----------|
| Apresentação "Quem eu sou" de cada médico (60–90 s) | 9:16 | Card de cada médico (os três conceitos) |
| Retrato de cada médico no cenário (foto) | 9:16 e 4:5 | Cards, páginas dos médicos, poster dos vídeos |
| Retrato horizontal com bastidores à mostra (câmeras, luz) | 16:9 | Bloco "Conversa" (conceito 3) e seção Os médicos |
| Capas das séries ("A pergunta da semana", "Lendo o seu exame", "Quando a gente não indica") | 4:5 | Perguntas da semana |
| Trechos de 8–12 s de cada médico falando (sem áudio) | 16:9 | Fundo dos tiles de Frentes (opcional) |

### Diária 02 — Instituto Rocca, Moema (o filme)

| Plano | Formato | Onde entra |
|-------|---------|-----------|
| Filme institucional: loop mudo de 12–20 s (entrada, luz, corredor, mãos, tela, os três na casa com gente) | 16:9, 4K | Hero do conceito 3 (`assets/video/institucional.mp4`) |
| Filme institucional completo, com som (60–90 s) | 16:9 | Lightbox "Assistir ao filme" |
| Fotos da entrada/recepção, luz quente, sem pessoas olhando para a câmera | 3:2 e 4:5 | Hero do conceito 2 (`entrada-clinica.jpg` e `-mobile.jpg`) |
| A porta vista do corredor | 4:5 | Abertura da seção A casa (conceito 2) |
| Recepção, espera, corredor de portas, copa, consultórios, sala de soroterapia | 3:2 | Galeria A casa (os três) |
| A tela do exame acesa no consultório (off-white, uma linha só) | 16:10 | Split-screen do bloco O mecanismo |
| Bioimpedância sendo feita (mãos, aparelho, gráfico) | 16:9 | A primeira consulta; Bastidores (conceito 3) |
| Jornada encenada: chegada → espera → bioimpedância → consulta | 16:9, clipes de 5 s | Bastidores (conceito 3) e A primeira consulta |
| B-roll de detalhe: madeira, mármore, luminárias, painel ripado bordô | 16:9 | Transições e fundos |

## 6. O que ainda é placeholder (e como trocar)

| Material | Caminho | Estado |
|----------|---------|--------|
| Retratos e vídeos dos médicos | `assets/placeholders/retrato-*.svg` → `assets/img/retrato-*.jpg`, `assets/video/*.mp4` | Diária 01 |
| Filme institucional | `assets/video/institucional.mp4` + `poster.jpg` | Diária 02 |
| Foto real da entrada | `assets/img/entrada-clinica.jpg` (hoje: render tratado) | Diária 02 |
| Webfont Semplicita Pro | `brand/tokens.css` (`@font-face` + `--fonte`) | Designer / licença |
| Endereço, telefone, horários, Instagram, CRM/RQE dos médicos | `shared/partials.html` → footer dos três HTML | Cliente |
| Número do WhatsApp | `href="https://wa.me/55..."` nos três HTML | Cliente |
| Cores de apoio (creme, osso, tinta) | `brand/tokens.css` | A confirmar com o designer da identidade |

## 7. Próximas versões (lembrete)

- **Versão com Higgsfield:** hero e bastidores com vídeo/imagens gerados por IA enquanto a diária na clínica
  não acontece. Pedido pelo cliente para uma rodada futura, depois da escolha dos conceitos.
- Concepto "Linha" (a tela do exame como hero: uma linha de evolução desenhando em off-white) ficou como
  alternativa não construída.

## 8. Como foi feito

Briefing (`BRIEF.md`) a partir da Direção de Marca, do Planejamento de Conteúdo, do Estudo Preliminar de
Interiores e do Manual de Identidade; sistema visual compartilhado (`brand/`, `shared/`); um construtor por
conceito; QA técnico (console, overflow, reduced-motion, formulário, menu, léxico) e crítica de direção de arte
por conceito, com rodadas de correção; crítica de consistência entre os três. Screenshots em
`docs/screenshots/`.
