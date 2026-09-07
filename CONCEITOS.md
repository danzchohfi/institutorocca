# Instituto Rocca — conceitos para a home

> Documento de apresentação. Cada conceito é um protótipo navegável em `concepts/<conceito>/index.html`.
> Os três nascem da mesma Direção de Marca, usam o mesmo sistema visual e o mesmo texto; o que muda é o hero,
> o ritmo e a forma como a mídia atravessa a página.

## Previews hospedadas

| # | Conceito | Preview |
|---|----------|---------|
| 1 | **Matéria** | [abrir](https://claude.ai/code/artifact/d09b6cd9-5ef1-40ea-bce0-eb290422ddfb) |
| 2 | **Chegada** | [abrir](https://claude.ai/code/artifact/78e9e269-6337-4588-b6b9-c7b2b8bdcc54) |
| 3 | **Presença** | [abrir](https://claude.ai/code/artifact/29c238e3-20bf-4cc9-a0a2-cb13e84bb6bc) |
| 4 | **Conversa** | [abrir](https://claude.ai/code/artifact/09347f2e-9418-45c6-972f-1f2748888485) |
| 5 | **Símbolo** | [abrir](https://claude.ai/code/artifact/09a7a2bc-3761-40d6-9e07-b512ad29cdfd) |
| 6 | **Slides** | [abrir](https://claude.ai/code/artifact/47d687a7-64e2-4817-97c3-d71b42522333) |
| 7 | **Letras** (só o hero) | [abrir](https://claude.ai/code/artifact/396e8436-193e-4f84-bccf-efcceb4e8412) |

Hub com os seis: [abrir](https://claude.ai/code/artifact/fccaed8e-d9d4-469b-aef8-2f9904fc4170).

Páginas privadas por padrão; compartilhe pelo menu da página. Geradas por `node scripts/build-artifacts.mjs` (cada conceito em um HTML único com fontes e imagens embutidas).

## 0. O que os seis têm em comum

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

## 4. Conceito 4 — Conversa (claro, tipográfico, o médico fala)

**Frase de apresentação:** *"Aqui quem fala é uma pessoa."* É o único conceito claro: base osso de ponta a
ponta e o bordô entrando como ponto, exatamente como a regra do feed pede. O hero é quase só tipografia: a
frase-mãe enorme à esquerda e, à direita, uma moldura vertical 9:16 com o médico se apresentando ("Quem eu
sou", gravado no estúdio). Um seletor com os três nomes troca vídeo, nome, frente e a fala em primeira pessoa;
"o seu médico" vira escolha de quem chega, antes mesmo da consulta.

**Hero:** H1 em duas linhas com a segunda em itálico, sub, "Agendar avaliação" e "Como funciona a primeira
consulta"; fala em primeira pessoa com assinatura ("— Dr. Túlio Bovo"); moldura com retrato placeholder que
cede ao vídeo vertical assim que o arquivo existir (sondagem só em http, pausa fora da tela); seletor acessível
por teclado; nav em bordô sobre o fundo claro.

**Percurso:** Hero → 01 O problema e 03 O mecanismo como texto corrido grande, tipo carta (coluna de 62
caracteres com o rótulo na margem) → 02 O método em bordô (único bloco escuro até o fecho) → Frentes como
lista tipográfica de cinco linhas com seta → As provas em três frases bordô sobre osso → A casa em faixa
horizontal de fotos pequenas com scroll lateral nativo → Os médicos (três cards) → A primeira consulta →
**Perguntas que a gente responde toda semana** como dispositivo principal: dez perguntas do banco com o nome
do médico, "Ver resposta" e filtro por médico → Perguntas mais comuns → Fecho em bordô → Footer.

**Motion:** moldura abre por máscara de baixo para cima; crossfade do seletor; linhas finas que se desenham
nas listas; filtro com entrada em cascata; parallax sutil no retrato e no consultório. Sem pin, sem WebGL, sem
preloader: é o mais leve de todos.

**Pontos de atenção:** o risco é parecer blog; a escala da tipografia, o respiro e a moldura vertical
dominando o hero seguram o conceito como site de marca. Sobre osso, as assinaturas usam bordô (areia não
passa no contraste). É o conceito que mais depende da diária no estúdio: sem os vídeos verticais, o hero fica
com retratos estáticos.

**O que precisa das diárias:** vídeos verticais "Quem eu sou" e retratos 9:16/4:5 dos três, e as respostas
das dez perguntas listadas (estúdio); consultório com a tela acesa, captura da tela e as seis fotos da casa
para a faixa (clínica).

## 3. Conceito 3 — Presença (o filme institucional no hero)

**Frase de apresentação:** *"A casa como ela é."* É o hero que a própria Direção de Marca previu: a frase-mãe
centralizada sobre o filme institucional, mudo e em loop, com a casa com gente. Até a diária na clínica, o
lugar do filme é ocupado por uma sequência lenta dos renders (pan e zoom, crossfade, véu bordô e um grão
leve) com o rótulo "Filme institucional — gravação na clínica"; quando `assets/video/institucional.mp4`
existir, o vídeo assume sozinho.

**Hero:** eyebrow, H1 em duas linhas com a segunda em itálico, sub, "Agendar avaliação" e "Assistir ao filme"
(abre o filme completo com som em um lightbox; enquanto não há arquivo, mostra "Filme em produção"). Ao
rolar, o hero fica preso, o texto sobe e a mídia encolhe para uma janela em formato cinema que acompanha
"O problema".

**Percurso:** o mesmo dos conceitos 1 e 2, com uma seção "Bastidores" (três clipes das duas diárias) antes de
A casa e um bloco "Conversa" (o retrato dos três no estúdio, com os equipamentos à mostra, e o play) acima
dos cards dos médicos.

**Pontos de atenção:** é o conceito que mais depende da diária na clínica e da qualidade do filme; sem ele, a
sequência de renders segura a apresentação, mas o efeito final só aparece com a casa real e as pessoas.
No celular com economia de dados o vídeo não carrega: fica o poster.

**O que precisa das diárias:** filme institucional em loop mudo (12–20 s) e a versão completa com som; três
clipes curtos de bastidores (chegada, espera, exame na tela); retrato horizontal dos três no estúdio;
vídeos verticais e retratos dos médicos; as fotos da casa.

## 5. Conceito 5 — Símbolo (a geometria da marca em movimento)

**Frase de apresentação:** *"Quatro aberturas, uma casa."* O símbolo oficial vira o dispositivo visual: um
anel gigante em creme sobre bordô, com a casa visível dentro do círculo, ao lado da frase-mãe. Ao rolar, o
hero fica preso, o anel gira 90 graus e as quatro provas da marca entram uma a uma sob o círculo ("O mesmo
médico do primeiro dia em diante", "O metabolismo dentro do tratamento", "O exame lido junto com você, na
tela", "Avaliar antes de tratar"); no fim o anel cresce e se desfaz. O padrão de arcos do símbolo
volta como textura sutil em "O problema".

**Frentes em scroll horizontal:** cinco painéis (foto, nome da frente, o H1 da página e uma linha) deslizam
com a rolagem vertical no desktop; no celular viram um trilho nativo com encaixe por painel.

**Pontos de atenção:** o símbolo só gira, escala e mascara, como o manual exige (nunca distorcido, nunca com
gradiente). É o mais "cinético" dos seis; o pin do hero e o das frentes precisam de teste em celulares reais
antes de ir ao ar. Em movimento reduzido, tudo fica visível sem pin.

**O que precisa das diárias:** uma foto quadrada da espera ou da recepção para dentro do anel; cinco fotos
horizontais, uma por frente (consultório, sala de soroterapia, espera, dermatologia); o restante igual ao
conceito 2.

## 6. Conceito 6 — Slides (fotográfico, no ritmo da referência Seven)

**Frase de apresentação:** *"Três médicos, uma casa — em tela cheia."* O hero é um slideshow fotográfico de
tela cheia que avança sozinho a cada sete segundos ou pelas setas, teclado e gesto: a recepção com a
frase-mãe; os três no estúdio com "Três médicos, uma casa."; a tela do exame acesa com "Investigar antes de
prescrever."; o consultório escuro com "Todo mundo sabe da mulher. E o homem?". Títulos dos slides em caixa
alta com tracking, indicador fino em creme, transição por crossfade e zoom lento; pausa ao passar o mouse e
quando a aba ou o hero saem de vista.

**Estrutura:** depois do hero, "O problema" vira uma declaração em caixa alta com respiro enorme; as frentes
viram uma grade de tiles escuros com foto sangrada, rótulo em caixa alta e o H1 da página; os médicos
aparecem em retratos 4:5 em preto e branco com nome e frente em caixa alta, sem idade e sem depoimento.

**Pontos de atenção:** é o mais "campanha" dos seis e o que mais depende de fotografia de nível editorial;
com os renders funciona como maquete, com a diária vira o conceito. Mantém a régua da marca: sem
exclamação, sem antes-e-depois, sem promessa.

**O que precisa das diárias:** retrato horizontal dos três no estúdio com equipamentos à mostra; a tela do
exame acesa no consultório; o consultório escuro; cinco fotos horizontais para os tiles; retratos 4:5 dos
três; o restante igual ao conceito 2.


## 7. Comparativo e recomendação

| Conceito | O que diz primeiro | Força | Risco | Depende de |
|---|---|---|---|---|
| 1 Matéria | "Avançado na medicina" | Assinatura própria, memorável; motion que o cliente pediu (partículas) | Peso (three.js) e leitura "tech" se a cor sair da paleta | Nada além do sistema; a mídia real só melhora |
| 2 Chegada | "Clássico no vínculo" | A casa como argumento; o mais próximo da Clinique La Prairie; leve | Vive da foto da entrada | Diária na clínica |
| 3 Presença | "A casa com gente" | É o hero que a Direção previu; o filme faz o trabalho | Sem o filme, é o conceito 2 com vídeo simulado | Diária na clínica (filme) |
| 4 Conversa | "Seu médico é uma pessoa" | O único claro; a promessa de relação vira interface; o mais leve | Pode parecer blog se a tipografia encolher | Diária no estúdio (vídeos verticais) |
| 5 Símbolo | "Método, geometria, precisão" | Marca em movimento; moderno e monocromático | Pins exigem teste em celulares; menos calor humano | Pouco: renders bastam |
| 6 Slides | "Campanha fotográfica" | Impacto imediato; estrutura direta de conversão | Depende de fotografia editorial; mais próximo da concorrência | Diárias (fotos) |

**Recomendação para apresentar ao cliente:** levar o **2 (Chegada)** como o caminho seguro e mais fiel à
Direção ("clássico no vínculo"), o **1 (Matéria)** como o caminho assinatura, que mostra "avançado na
medicina" logo na primeira dobra e responde ao pedido das partículas, e o **4 (Conversa)** como o
contraponto claro em que o médico fala. O 3 é a evolução natural do 2 quando o filme existir; o 5 e o 6
ficam como alternativas se o cliente quiser algo mais cinético ou mais campanha. Em qualquer escolha,
o sistema, o texto e a estrutura de conversão são os mesmos, então a decisão é sobre o hero e o ritmo,
não sobre refazer o site.


## 8. O que cada diária precisa entregar para o site

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

## 9. O que ainda é placeholder (e como trocar)

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
