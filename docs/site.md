# O site final — home e páginas internas (rodada 7)

> Preview em refinamento: https://danzchohfi.github.io/institutorocca/site/
> Gerado por `node scripts/site.mjs` a partir de `src/site/`. Capturas em `docs/screenshots/site-<slug>-{desktop,mobile}.png`.

## 1. O que o cliente pediu e como foi resolvido

O cliente escolheu uma **mistura de duas versões**: a abertura da versão Letras (o wordmark em partículas) e,
logo abaixo, as fotos da clínica com a frase da versão Presença. Nas palavras dele: "que fique como a versão 1;
quando abaixe, continue como está, mas que rapidamente dê para ver a clínica também; a imagem não precisa estar
em vermelho". E a identidade em dois níveis: primeiro **clínica de Nutrologia, Endocrinologia e Dermatologia**;
depois **o que tratamos** (emagrecimento, lipedema, tricologia, estética facial, menopausa…), com o emagrecimento
em destaque discreto.

| Pedido | Onde está |
|--------|-----------|
| Abre como a versão Letras | A home carrega com o wordmark em partículas montado, vida própria e reação ao mouse; abaixo dele, as três especialidades e "Agendar avaliação". |
| "Quando abaixe, continue como está" | O scroll dissolve as partículas na mesma tela (sem trocar de página nem de composição). |
| "Rapidamente dê para ver a clínica" | A recepção aparece inteira em 0,3 tela de rolagem, em cores naturais (sem véu vermelho); a frase "Seu médico. / Sua melhor versão." entra sobre o mármore. |
| Clínica de Nutrologia, Endocrinologia e Dermatologia | Linha mais forte do hero; seção Especialidades com as três colunas; uma página por especialidade. |
| O que tratamos em segundo plano | Lista curta dentro de cada coluna de especialidade e, nas páginas internas, a seção "O que tratamos" com as perguntas de cada assunto. |
| Emagrecimento em destaque | Faixa "Emagrecer sem reganhar depois." logo abaixo das especialidades, com "Saiba mais". |
| Foto principal = o trio | Seção "Os médicos": trio horizontal no desktop, vertical no celular, com os três cards e "Conheça o médico/a médica". |
| Sem formulário, WhatsApp sempre | Nav, fecho, botão flutuante e rodapé apontam para o WhatsApp com a mensagem da página. Nenhum formulário no site. |

## 2. A home, seção a seção

1. **Abertura (pista de 2,25 telas, hero fixo)** — estado A: wordmark em partículas + especialidades + descritor + botão. Ao rolar: as partículas se dissolvem, a foto da recepção surge (opacidade e leve escala), a frase entra linha a linha, faz um platô para ser lida, sai, e a foto encolhe até virar a janela que abre "O problema". Sem WebGL ou com movimento reduzido, os dois blocos ficam empilhados e estáticos.
2. **01 — O problema** e **02 — O método**: o texto da Direção de Marca, na íntegra.
3. **Especialidades**: Nutrologia, Endocrinologia, Dermatologia, cada uma com a linha de abertura, "O que tratamos" e "Saiba mais". Abaixo, a faixa do emagrecimento.
4. **03 — O mecanismo**: a tela do exame, uma linha só.
5. **A casa**: mosaico de seis fotos numa tela (a primeira peça recebe o filme institucional quando o UID chegar).
6. **Os médicos**: a foto do trio e três cards (retrato, nome, CRM [PENDENTE], "Conheça o médico/a médica").
7. **Perguntas da semana**: três perguntas com capa 4:5 e "Ver mais respostas".
8. **Fecho**: número do WhatsApp em destaque, sem formulário. Rodapé.

## 3. As páginas internas

| Página | Estrutura |
|--------|-----------|
| Nutrologia · Endocrinologia · Dermatologia | Hero com foto da sala → 01 Como a gente conduz (três pilares) → 02 O que tratamos (sub-seções por assunto, cada uma com fala do médico e "Perguntas que a gente responde") → 03 Quem conduz (cards com poster do vídeo) → 04 Perguntas mais comuns → fecho |
| Dr. Túlio Bovo · Dr. Breno Gondim · Dra. Ana Paula Bovo | Hero retrato com citação → 01 Quem eu sou (vídeo 9:16 + o que o vídeo responde) → 02 Como eu conduzo → 03 O que eu trato ("Saiba mais" para cada assunto) → 04 Perguntas que eu respondo → 05 A casa, por dentro (vídeo 16:9) + os outros médicos → fecho |
| A casa | Hero em tela cheia → 01 A casa (mosaico com legendas) → 02 O percurso (cinco espaços, na ordem de quem chega) → 03 A casa, por dentro (três vídeos) → 04 Onde fica (ficha + mapa [PENDENTE]) → fecho |
| Conteúdo | Hero com o trio → 01 Como funciona → 02 As séries (oito séries do Planejamento, 45 perguntas) → 03 Por médico → fecho |
| Contato | WhatsApp em destaque → 01 Depois da mensagem → 02 Antes de mandar mensagem → 03 Os médicos → 04 Onde fica → rodapé |

## 4. Decisões de texto e marca desta rodada

- Rótulos únicos em todo o site: "Perguntas que a gente responde" (listas), "Ver resposta →", "Ver todas as respostas →", "Saiba mais →" (link para um assunto/serviço), "Conheça o médico →" / "Conheça a médica →", "Conhecer a casa →", "Como chegar →", "Assistir: Quem eu sou".
- "Frentes" e "Serviços" não aparecem em lugar nenhum (nem em texto corrido). A categoria é **especialidade**; o segundo nível é **o que tratamos**.
- A seção "O que acontece na primeira consulta" não voltou em nenhuma página; o percurso de "A casa" é um passeio pelos espaços.
- Frases vetadas sobre a casa ("não é decoração", "madeira, pedra e luz quente", "uma casa, não um consultório branco") e seus parentes próximos foram retirados.
- Fecho dos médicos em forma neutra ("Diga que quer marcar com…"); "WhatsApp" no lugar de "telefone".
- Todo dado do cliente que ainda não chegou aparece como `[PENDENTE]` (CRM/RQE, formação, endereço, horários, telefone, e-mail, Instagram, mapa, política de falta, UIDs dos vídeos, URLs das respostas).

## 5. Mídia

- **Fotos de produção** em `assets/img/producao/` (leia o `LEIA-ME.md`): trio horizontal e vertical, retratos do Dr. Túlio (terno bordô, à esquerda no trio) e do Dr. Breno (terno cinza, à direita), três fotos da Dra. Ana Paula de terno branco. Variantes de 640 px para capas e cards. O único stand-in que resta é `dra-ana-paula-bovo.jpg` (não é mais usado por nenhuma página).
- **Vídeos** entram pelo Cloudflare Stream (`shared/stream.js`): cada `<div class="stream" data-stream="{{stream_x}}">` mostra o poster até o UID existir em `src/site/config.mjs`. Chaves: `tulio`, `breno`, `ana` (Quem eu sou), `casa_tulio`, `casa_breno`, `casa_ana` (A casa, por dentro), `institucional`. Com o código da conta e os UIDs preenchidos, `node scripts/site.mjs` liga tudo.
- **Renders** do projeto de interiores continuam como fotos da casa até as fotos reais chegarem (mesmo nome de arquivo, nada muda no HTML).

## 6. Técnica

- `src/site/comum.js` inicia o site (Lenis, GSAP/ScrollTrigger, nav, reveals, Stream, mosaico); `main.js` (home) soma `hero.js` e o sistema de partículas (`shared/letras.js`, three.js) → `site/app.js` (~620 KB); `interno.js` → `site/interno.js` (~140 KB) para as nove internas.
- Sem WebGL, com movimento reduzido ou sem JS, a home fica inteira e legível (abertura estática).
- Skip link funcional (fora do Lenis, `main` focável); `dialog` do filme nomeado pela legenda; contraste do areia sobre osso corrigido; cards de médico sempre com o componente Stream.
- Checagens: `node scripts/site.mjs && npm run build && node scripts/lexico.mjs`; `node scripts/shot.mjs site/<slug>/index.html <prefixo>` para capturas e erros de console.

## 7. O que falta do cliente

1. Código da conta do Cloudflare Stream e os três UIDs (qual vídeo é de quem).
2. CRM/RQE dos três médicos, a especialidade de registro do Dr. Túlio e do Dr. Breno, e a linha de formação de cada um.
3. Endereço, horários, telefone, e-mail, Instagram, mapa; política de falta/remarcação; domínio definitivo (o `og:image` usa o endereço de homologação até lá).
4. Retrato da Dra. Ana Paula de colete camelo (opcional) e, se possível, o trio em 2400–3000 px.
5. Validação das falas em primeira pessoa e das respostas de "Perguntas mais comuns"; as perguntas de tricologia.
