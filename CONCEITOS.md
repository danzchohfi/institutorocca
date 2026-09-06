# Instituto Rocca — três conceitos para a home

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
cinza quente como apoio; tipografia fina sem serifa (Jost como substituta da Semplicita Pro até a webfont
chegar); wordmark e símbolo vetorizados do manual; regra dos 250 px (no mobile a nav usa o símbolo).

**"Clássico no vínculo. Avançado na medicina."** A madeira, o mármore e a luz quente dos renders do projeto de
interiores dão o ambiente clássico; a tela do exame (off-white, uma linha só), a bioimpedância e o método dão o
avançado. Nenhum conceito tem só um dos dois.

**Estrutura de conversão.** Botão "Agendar avaliação" fixo na nav, WhatsApp flutuante após a primeira dobra,
formulário curto no fecho, seção "A primeira consulta" para reduzir o no-show (quem entende o que vai acontecer,
aparece), FAQ com as três objeções das personas.

<!-- CONCEITOS: preencher a partir dos relatórios dos construtores -->

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

## 7. Como foi feito

Briefing (`BRIEF.md`) a partir da Direção de Marca, do Planejamento de Conteúdo, do Estudo Preliminar de
Interiores e do Manual de Identidade; sistema visual compartilhado (`brand/`, `shared/`); um construtor por
conceito; QA técnico (console, overflow, reduced-motion, formulário, menu, léxico) e crítica de direção de arte
por conceito, com rodadas de correção; crítica de consistência entre os três. Screenshots em
`docs/screenshots/`.
