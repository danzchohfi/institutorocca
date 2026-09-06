# Briefing criativo — Home do site do Instituto Rocca (v3, com a Direção de Marca real)

> Documento-âncora para os 3 conceitos de home. Fontes: **Direção de Marca — Instituto Rocca · Moema (Vitamina,
> set/2026, v1)**, **Planejamento de Conteúdo**, **Estudo Preliminar de Interiores (Doppo Arquitetura, rev 00)**,
> logo enviado pelo cliente e capturas das referências (Clinique La Prairie, Clínica Seven, Totanka).
> O que ainda não chegou está marcado como **[PENDENTE]** e isolado em um ponto de troca.

## 1. O que estamos construindo

Três conceitos **apenas da home**, como protótipos navegáveis em HTML/CSS/JS puro (sem framework), com
GSAP + ScrollTrigger + Lenis para motion e three.js no conceito 1. Os três compartilham o mesmo sistema
(tipografia, cores, grid, nav, footer, componentes) e a mesma espinha de seções — **o texto da home já foi
escrito na Direção de Marca (§5) e é o mesmo nos três**. O que muda é o hero, o ritmo e como a mídia
atravessa a página.

| # | Conceito | Hero | Sensação-alvo |
|---|----------|------|---------------|
| 1 | **Matéria** | Campo de partículas three.js (referência: partículas de lp.totanka.com.br + poeira de cobre da Clinique La Prairie), em creme/madeira sobre bordô | "Avançado na medicina": precisão, matéria viva que volta ao lugar |
| 2 | **Chegada** | Foto da entrada/recepção da clínica (render do projeto de interiores já tratado com o wordmark ROCCA; a foto real chega na diária da clínica) | "Clássico no vínculo": madeira, pedra, luz quente — hotel de design, não consultório |
| 3 | **Presença** | Vídeo institucional que será gravado na clínica (a Direção de Marca já prevê "HERO · SOBRE O VÍDEO INSTITUCIONAL") | Cinema, cotidiano real, a casa com gente |

## 2. A marca (decisões travadas — não são premissas)

- **Nome / lugar:** Instituto Rocca · Moema, São Paulo. Clínica nova, abertura em outubro de 2026.
- **Categoria:** *Instituto de Qualidade de Vida e Bem-Estar em Moema.* **Nunca** "clínica de emagrecimento".
- **Posicionamento:** "Para quem construiu uma vida inteira e se perdeu de vista no caminho, o Instituto Rocca
  é o instituto de qualidade de vida que trata a causa do que parou de funcionar em você — com o mesmo médico
  do primeiro dia ao resultado."
- **Endline (régua, não slogan):** **"Seu médico. Sua melhor versão."** — "Seu médico" = a RELAÇÃO (a pessoa
  não passa por um médico, ela tem um médico); "Sua melhor versão" = o MECANISMO (ela já esteve melhor; o que
  mudou foi o metabolismo). Toda peça precisa pagar as duas metades.
- **Descritor:** "Instituto de Qualidade de Vida e Bem-Estar em Moema. Trata a causa do que parou de funcionar
  em você, com o mesmo médico do primeiro dia ao resultado."
- **Apelido:** "O seu médico".
- **Os três médicos (rosto e voz da marca):**
  - **Dr. Túlio Bovo** — frente clínica: metabolismo, avaliação hormonal, emagrecimento e lipedema.
  - **Dr. Breno Gondim** — frente clínica: mesmo território, conduz do mesmo jeito.
  - **Dra. Ana Paula Bovo** — dermatologia (lógica de compra diferente: a paciente chega sabendo o procedimento;
    a autoridade dela é o que ela NÃO indica).
  - CRM/RQE **[PENDENTE]** → usar "CRM-SP 000000" como placeholder visível.
- **Provas (as únicas que a home usa):** (1) o mesmo médico do primeiro dia em diante — todo paciente sai com o
  WhatsApp pessoal de quem o atendeu; (2) o metabolismo entra no tratamento (resposta ao medo do efeito
  sanfona); (3) a consulta que passa de uma hora; (4) o exame lido junto com você, na tela.
- **Público:** núcleo = a executiva de 40 (38–50, renda > R$ 15 mil/mês, decide sozinha, paga do próprio
  bolso, chega cética e cansada: "já tentei de tudo e voltou"). Segunda porta = o executivo de 40+, trazido pela
  companheira. Terceira = a paciente de pele.
- **Arquétipo:** Cuidador (dominante) + Sábio (secundário) = o mentor da jornada. **Não é o Mago** (não promete
  transformação) **nem o Herói** (o herói é o paciente).
- **Frentes / páginas de serviço (para a nav e a seção "Frentes"):** Emagrecimento e metabolismo · Avaliação
  hormonal · Qualidade de vida e longevidade · Dermatologia · Lipedema · Conteúdo (blog com transcrições).
- **Jornada de compra:** vê o vídeo do médico → vai ao perfil → manda mensagem (SDR agenda; o gargalo é o
  no-show de 50%: *quem entende o que vai acontecer na consulta, aparece*) → senta na cadeira (consulta > 1h,
  exame lido junto, tratamento construído item a item) → fica (WhatsApp pessoal, retorno, alta com
  acompanhamento) → traz alguém.

### 2.1 Voz (seis regras) e léxico — OBRIGATÓRIO em todo texto do site

Regras: frase curta, sem rodeio; reconhece o preço que a carreira cobrou, sem sermão nem culpa; explica o exame
antes de propor o tratamento; o menos técnico possível sem infantilizar; primeira pessoa com nome próprio
quando um médico fala ("Eu vejo isso toda semana. — Dr. Túlio Bovo"); nunca começa vendendo. Perto do
coloquial, longe da gíria ("a gente" pode; "cara", "galera" não). Sério sem ser solene. Factual, com
convicção: **sem exclamação, sem superlativo, sem "incrível"**. Próximo, e sempre de alguém.

| SEMPRE fala assim | NUNCA fala assim |
|---|---|
| "o que parou de funcionar em você" | "resultado" (o conselho restringe promessa de resultado) |
| "tratar a causa" · "avaliar antes de tratar" | "momento" · "melhor fase" |
| "metabolismo" | "caneta" (nem palavra nem imagem) · nome comercial de medicamento |
| "acompanhamento contínuo" (no lugar de "até o resultado") | "corpo dos sonhos" · "transformação" · "transforme" |
| "perder gordura" (na fala da marca; "perder peso" só na pergunta do paciente) | "equipe multidisciplinar" · "excelência" · "estrutura completa" · "tecnologia de ponta" |
| "avaliação hormonal" (nunca "reposição hormonal" na chamada) | "agende já" · contador · "vagas limitadas" · antes-e-depois |
| "voltar", "recuperar", "se reconhecer de novo" | "virar outra pessoa" · "nova você" |

Exceção sancionada pela Direção: o hero usa "com o mesmo médico do primeiro dia em diante" (não "ao
resultado"). Depoimento só como experiência de atendimento, nunca como demonstração de resultado — e a casa
ainda não tem um; **não inventar depoimentos**.

## 3. Direção visual (da Direção de Marca + logo + projeto de interiores)

**"Clássico no vínculo. Avançado na medicina."** O AMBIENTE é clássico (madeira, luz quente, tom sóbrio), o que
ACONTECE dentro dele é atual (composição corporal medida, exame lido na tela, medicamentos recentes com
critério). Se tem só aconchego, falta medicina; se tem só aparelho, virou o consultório branco que a marca
recusa. **Ambos em toda dobra.**

- **Cor principal: bordô.** O logo enviado é o wordmark creme sobre bordô profundo. Regra do feed: "base
  neutra, e o bordô entrando como PONTO; o oliva alternando com ele; o símbolo fazendo o resto". Para o site,
  o cliente pediu **bordô como cor principal e off-white creme como cor de letra**: o hero e as seções-âncora
  são bordô com texto creme; as seções de respiro são osso (off-white) com texto "preto aberto"; a madeira entra
  pelas imagens. **Nem preto puro nem branco puro** — nunca `#000`/`#FFF`.
- **Tipografia: Semplicita Pro, peso leve, sem serifa** ("a letra, a fonte fininha; aqui não tem serifa";
  referência de leitura é a Seven, não a Enjoy: nada caricato ou serifado). **[PENDENTE]** a webfont: usar
  **Jost** (Google Fonts) como substituta — geométrica, leve, mesma família de formas do wordmark. Um único
  token `--fonte` troca tudo. **Proibido serifa em qualquer lugar** (inclusive na marca).
- **Wordmark oficial:** "INSTITUTO" pequeno com tracking largo sobre "ROCCA" grande com tracking largo; o **A
  não tem barra** (Λ) — "o desenho aberto da letra A sugere evolução". Vetorizado do Manual de Identidade em
  `assets/img/logo*.svg`; **símbolo oficial** (círculo com quatro aberturas, cruz médica em espaço negativo) em
  `assets/img/simbolo*.svg` e `favicon.svg`. Ver regras de uso em §4.1.
- **Minimalista, mesmo usando bordô:** espaço, pouco elemento, uma informação por bloco. A cor sustenta, não
  decora. O símbolo (quando chegar) assina sem ocupar o quadro.
- **Fotografia:** os três no estúdio Jacarandá (painel de madeira geométrico, poltrona de couro, luminária de
  luz quente, terno sem gravata / alfaiataria escura); a casa = madeira, pedra (mármore marrom), luz quente
  indireta, sem sinalização e sem nada hospitalar; o computador é o elo "avançado" (aparece pela tampa no
  retrato; a tela, quando aparece, é off-white com **uma linha só** contando a evolução, sem painel escuro, sem
  tabela cheia). Materiais do moodboard: painel ripado bordô · madeira clara · madeira cinza-grafite · mármore
  marrom (Emperador).
- **Espaço (renders do projeto de interiores, já exportados em `assets/img/`):** recepção com balcões de mármore
  marrom, luminárias suspensas, chaise creme, cadeirinha de palhinha, painel ripado bordô na parede; espera com
  teto circular iluminado; corredor de portas de madeira; copa com mármore; sala de soroterapia com poltronas e
  skyline; consultórios (mesa de mármore, cadeiras verde-oliva, madeira escura); bioimpedância; sala de
  aplicação; sala de procedimento.

### 3.1 O que as referências mostram (capturas enviadas pelo cliente)

- **Clinique La Prairie (referência principal):** fundo escuro dominante; hero em vídeo escuro com feixes de luz
  volumétrica; nav = "MENU" (2 linhas + palavra) à esquerda, marca centralizada, ícones WhatsApp/e-mail e botão
  **retangular branco** "BOOK YOUR PROGRAM" à direita; eyebrow em caixa alta com tracking largo; H1 em sans
  geométrica light em 2 linhas, **a segunda em itálico, deslocada à direita**; link simples abaixo. Seção
  "WE ARE / LIFE-CHANGERS": perfil de rosto na penumbra + hélice de DNA em **partículas cor de cobre que se
  dissolvem em poeira subindo** sobre o preto. Botão "READ MORE →". Silêncio, poucas palavras, luz.
- **Clínica Seven (referência de estrutura):** slides fotográficos de tela cheia com título em caixa alta;
  split-screen (foto | tela com gráfico); grade 2×2 de tiles escuros com rótulo em caixa alta + sub-rótulo;
  seção de declaração com respiro enorme (eyebrow + H2 tracked, centralizados); vídeo "FUNDADOR & JORNALISTA"
  em estúdio P&B **com os equipamentos de luz à mostra**, play central; retratos com **nome + idade**; WhatsApp
  verde flutuante. *Do que a Seven faz, o Rocca NÃO herda:* antes-e-depois, celebridades com idade como prova de
  resultado, "The Body Longevity Clinic" bold.
- **Totanka (motion):** milhares de partículas finas formando figura orgânica, reagindo ao mouse, dissolvendo
  no scroll; GSAP encadeado.

**Síntese:** escuro dominante (aqui: bordô), tipografia fina em caixa alta nos rótulos, títulos de 2 linhas com
a 2ª em itálico como assinatura (encaixa perfeitamente em "Seu médico. / *Sua melhor versão.*"), botões
retangulares sem raio, partículas quentes, vídeo de estúdio com bastidores, muito respiro.

## 4. Sistema visual compartilhado (implementar em `brand/tokens.css` + `shared/base.css`)

### 4.1 Paleta — OFICIAL (Manual de Identidade Visual v1.0, pág. 18) + cores de apoio

| Token | Valor | Origem / uso |
|-------|-------|--------------|
| `--cor-bordo` | `#550000` | **Rocca 01 — Bordô** (RGB 85,0,0). Cor principal: hero, seções-âncora, botões sobre claro, logo sobre fundos claros |
| `--cor-areia` (alias `--cor-madeira`) | `#B8997D` | **Rocca 02 — Areia**. Acento quente: numerais, linhas, hover sobre osso, eyebrows sobre bordô. **Nunca** como cor do logo |
| `--cor-oliva-escuro` (alias `--cor-marmore`) | `#4A3B26` | **Rocca 03 — Oliva Escuro**. Superfícies escuras secundárias, bordas sobre osso, tags |
| `--cor-cinza-quente` (alias `--cor-grafite`) | `#544D45` | **Rocca 04 — Cinza Quente**. Texto secundário sobre osso, ícones, divisores |
| `--cor-creme` | `#F2E8D9` | Apoio (Direção de Marca: "nem branco puro"). **Texto sobre bordô** e logo sobre escuro — o "branco" da marca na tela |
| `--cor-osso` | `#EFE7DA` | Apoio. Fundo das seções de respiro (off-white) |
| `--cor-tinta` | `#2A1A16` | Apoio. Texto sobre osso ("preto aberto" quente) |
| `--cor-bordo-profundo` | `#3B0000` | Derivada. Footer, base de gradientes sutis de fundo (nunca no logo) |
| `--cor-bordo-claro` | `#6E1212` | Derivada. Hover e linhas sobre bordô |
| `--cor-creme-60` | `rgba(242,232,217,.6)` | Texto secundário sobre bordô (só ≥ 16px) |
| `--cor-whatsapp` | `#25D366` | Só no hover do botão flutuante |

Regras do manual que valem para o site: logo em **bordô sobre fundos claros** e em **branco/creme sobre fundos
escuros ou coloridos**; **proibida a versão em areia**; nada de gradiente, sombra, distorção ou efeito sobre o
logo; área de proteção = altura do "R"; **largura mínima digital do logotipo = 250 px** — abaixo disso usa-se
o **símbolo** (portanto a nav no mobile usa o símbolo, não o wordmark). Símbolo: círculo com quatro aberturas
que desenham uma cruz médica em espaço negativo; usar em favicon, foto de perfil, marca-d'água, padrões
gráficos e detalhes de acabamento (o cartão do manual repete os arcos do símbolo como padrão na borda).

Arquivos oficiais (vetores enviados pelo cliente: LOGO_VETOR e Vetor_Simbolo) em `assets/img/`: `logo.svg` (creme), `logo-branco.svg`,
`logo-bordo.svg` (= `logo-escuro.svg`, para fundos claros), `simbolo.svg` (creme), `simbolo-bordo.svg`,
`simbolo-branco.svg`, `favicon.svg` (símbolo creme em círculo bordô).

### 4.2 Tipografia

- **`--fonte: 'Semplicita Pro', 'Jost', 'Avenir Next', 'Helvetica Neue', Arial, sans-serif`**. A **Semplicita Pro**
  (tipografia oficial, manual pág. 21) está **auto-hospedada** em `brand/fontes/` (300/400/500/600 + itálicas) via
  `@font-face` em `brand/tokens.css`. **Não incluir `<link>` do Google Fonts** nos HTML (o Chromium desta máquina
  não alcança o Google Fonts e a fonte local dispensa isso). Pesos: títulos 300 (Light), corpo 300/400, destaques
  500, rótulos 400. Não existe peso 200: onde o BRIEF diz "200/300", usar 300. **Sem serifa em lugar nenhum.**
- **H1:** Jost 200/300, `clamp(2.6rem, 5.4vw, 5.8rem)`, `line-height: 1.04`, `letter-spacing: -0.005em`,
  caixa normal (sentence case, com ponto final, como a endline). **Assinatura:** H1/H2 de 2 linhas têm a
  **2ª linha em itálico 300**; no desktop a 2ª linha desloca `padding-left: 6–12%`; no mobile, 0.
- **H2:** Jost 300, `clamp(1.9rem, 3.4vw, 3.4rem)`, `line-height: 1.1`.
- **Corpo:** Jost 300 (17–18px desktop, 16px mobile), `line-height: 1.7`; **destaques** em 400. Máx. 62ch.
- **Eyebrow / rótulos:** Jost 400, 11–12px, **caixa alta, `letter-spacing: 0.28em`**, cor madeira (sobre bordô)
  ou grafite (sobre osso). Numerais de seção "01 — O PROBLEMA".
- **Assinaturas de médico:** "— Dr. Túlio Bovo" em Jost 400, 14px, cor madeira.

### 4.3 Grid, espaçamento, componentes

- Container máx. 1440px, gutter `clamp(20px, 5vw, 96px)`, grid 12 col. Seções: `padding-block: clamp(96px,
  12vw, 200px)`. Respiro é parte da marca ("muito espaço em branco").
- **Botões:** retângulo, `border-radius: 0`. Primário sobre bordô = fundo creme, texto bordô, Jost 400 12px caixa
  alta tracking 0.16em, padding `18px 28px`; hover = fundo madeira. Sobre osso = fundo bordô, texto creme.
  Secundário = texto em caixa alta + linha fina abaixo que cresce no hover + seta fina "→".
- **Cards / tiles:** sem raio; fundo bordô-profundo (sobre bordô) ou osso com borda `1px` marmore/20%;
  imagem sangrada; rótulo em caixa alta + sub-rótulo.
- **Nav (padrão CLP, igual nos 3):** esquerda "MENU" (2 linhas + palavra); centro `logo.svg` (creme) — sobre
  seção clara troca para `logo-escuro.svg`; direita: ícone WhatsApp + botão "AGENDAR AVALIAÇÃO". Transparente
  sobre o hero; ao rolar, fundo bordô 88% + blur. Menu em tela cheia bordô: Frentes (5), Os médicos (3),
  Conteúdo, Contato. Mobile: MENU + **símbolo** (o wordmark não pode ter menos de 250 px) + WhatsApp.
- **WhatsApp flutuante:** círculo creme com o glifo do WhatsApp em bordô (hover: fundo `--cor-whatsapp`,
  glifo creme), canto inferior direito, aparece após a 1ª dobra, `aria-label="Falar no WhatsApp"`.
- **Footer** bordô-profundo: logo, descritor, "Moema, São Paulo" **[PENDENTE endereço, telefone, horários]**,
  WhatsApp, Instagram **[PENDENTE @]**, links das frentes, "Responsável técnico: Dr. — · CRM-SP 000000"
  **[PENDENTE]**, política de privacidade, "Instituto Rocca © 2026".

### 4.4 Motion (GSAP + ScrollTrigger + Lenis)

- Lenis (lerp 0.08–0.1); desligar em `prefers-reduced-motion`.
- Reveal padrão: opacity 0→1 + `y: 24`, `duration: 1.1`, `ease: power3.out`, `stagger: 0.08`. Títulos grandes
  revelam por linha (split manual por `<span class="linha">`, sem plugin pago).
- Imagens: `scale 1.06 → 1` em 1.4s ou `clip-path` de baixo para cima; parallax sutil `yPercent ±8`.
- Nada pisca, nada quica. Sem `bounce`/`elastic`. Easing `power2/3.out` ou `expo.out`.
- Preloader ≤ 1.2s só nos conceitos 1 e 3: wordmark creme sobre bordô + linha fina que cresce.

## 5. A home, escrita (Direção de Marca, p. 56) — texto-base dos TRÊS conceitos

Usar **este texto**, nesta ordem, nos três conceitos. Complementos (§5.1) só onde indicado.

**HERO** (sobre partículas / foto / vídeo)
- H1: `Seu médico.` / `Sua melhor versão.` (2ª linha itálica)
- Sub: `Instituto de Qualidade de Vida e Bem-Estar em Moema. A gente trata a causa do que parou de funcionar em você — com o mesmo médico do primeiro dia em diante.`
- Botão: `Agendar avaliação` · Abaixo, discreto: `Atendimento em Moema, São Paulo`

**BLOCO 2 · O PROBLEMA**
- H2: `Alguma coisa parou de funcionar. E ninguém foi olhar.`
- `Dormir oito horas e acordar cansado. A disposição que sumiu. A barriga que não sai, mesmo fazendo o que sempre funcionou para você.`
- `Na maior parte das vezes não é a idade. É metabólico, é hormonal, e é investigável.`

**BLOCO 3 · O MÉTODO**
- H2: `Investigar antes de prescrever.`
- `A consulta começa pela escuta, passa pelo exame e só então chega à conduta. Nessa ordem, sempre.`
- `Você sai entendendo o próprio resultado, sem jargão, e sabendo por que cada coisa foi pedida — com o médico que vai te acompanhar o tratamento inteiro.`

**BLOCO 3B · O MECANISMO**
- H2: `Você já esteve melhor. O que mudou não foi você.`
- `Foi o seu metabolismo. Quando ele desregula, energia, sono, disposição e peso vão junto.`
- `Metabolismo se investiga e se trata. E o que volta é o que sumiu: não uma pessoa nova, a sua melhor versão.`

**BLOCO 4 · AS PROVAS**
- H2: `O que sustenta o que a gente diz`
- `O mesmo médico do primeiro dia em diante` · `O metabolismo dentro do tratamento` · `O exame lido junto com você, na tela`

**BLOCO 5 · OS MÉDICOS**
- H2: `Três médicos, uma casa.`
- `Aqui você não passa por um médico. Você tem um médico — o mesmo, do primeiro dia em diante.`
- Cada um com página própria (link), com os conteúdos que gravou e a agenda.

**BLOCO 6 · FECHO**
- H2: `Avaliação com o médico que vai acompanhar você.`
- Botão: `Falar no WhatsApp`. **Sem "agende já", sem contador, sem vagas limitadas.**

### 5.1 Complementos permitidos (mesma voz; o agente de copy escreve e o `COPY.md` consolida)

1. **Frentes** (após O MÉTODO ou após OS MÉDICOS): 5 itens com o H1 de cada página de serviço já escrito na
   Direção: "Emagrecer sem reganhar depois." · "Todo mundo sabe que a mulher precisa avaliar. O homem também."
   · "O que volta primeiro: energia, sono e disposição." · "Pele boa começa antes do procedimento." ·
   "Não é 'só gordura'." (Lipedema).
2. **A casa** (galeria dos renders): a casa como método, não como decoração. Legendas curtas ligando espaço a
   método: "A sala onde o exame é lido com você, na tela." · "Bioimpedância: composição corporal medida, não
   estimada." · "A espera que não parece espera." · "Sem sinalização, sem nada hospitalar."
3. **A primeira consulta** (reduz o no-show): 4 passos — Você manda mensagem · A consulta passa de uma hora ·
   O exame é lido junto, na tela · O tratamento é construído item a item, e você sai com o WhatsApp do seu médico.
4. **Perguntas que a gente responde toda semana** (conteúdo, com nome e rosto): 3 títulos do banco — "Dormir
   bem e acordar cansado: o que pode estar por trás?" (Dr. Breno Gondim) · "Exame de sangue normal, mas o corpo
   não está bem: o que pode estar acontecendo?" (Dr. Túlio Bovo) · "Quando o botox não é indicado?" (Dra. Ana
   Paula Bovo). Cada um com "Ver resposta →".
5. **As três perguntas mais comuns** (FAQ curto, respostas da Direção): "Vou ter que fazer isso para o resto da
   vida?" · "Isso é coisa de academia, não é?" · "Vai ficar com cara de feita?"
6. **O que a gente não faz** (opcional, marcar como opcional no doc): hormônio para hipertrofia · só a caneta
   sem investigação · resultado sem acompanhamento · antes-e-depois. Tom: "Dizer não é o que protege quem
   chega."
7. **Vídeos dos médicos** (na seção OS MÉDICOS): cada card é um vídeo vertical 9:16 em loop (a apresentação
   "Quem eu sou", gravada no estúdio Jacarandá) — placeholder até a diária.

## 6. Os três conceitos

### Conceito 1 — **Matéria** (three.js + partículas)

- **Ideia:** *"O que se dispersou volta ao lugar."* É a frase-mãe em movimento: milhares de partículas finas
  (12–40k conforme device), em creme e madeira sobre bordô profundo, começam **dispersas** e, nos primeiros
  2–3 s, **convergem** para uma forma orgânica que respira (uma massa esférica/seixo com deslocamento por ruído
  3D, lenta, quente). Não é transformação em outra coisa: é matéria voltando a se organizar — "não uma pessoa
  nova, a sua melhor versão". O mouse perturba (repulsão suave) e elas voltam. Do topo da forma, um fio de
  partículas se desprende e sobe como poeira de luz (eco da CLP). Ao rolar, a forma se dissolve (scrub) e cede
  lugar ao BLOCO 2 em osso; partículas esparsas reaparecem como textura na seção AS PROVAS (mesma cena, outros
  uniformes) ou em um "olho" no fecho.
- **Layout do hero:** texto centralizado (padrão CLP) sobre as partículas, ou texto à esquerda com a forma à
  direita sangrando — escolher o que ficar melhor. Mobile: densidade menor, texto sobreposto.
- **Técnica:** `THREE.Points` + `BufferGeometry` + `ShaderMaterial` próprio (vertex shader com noise 3D animado
  por `uTime`, `uMouse`, `uProgress` (scroll) e `uConverge` (0→1 na abertura); fragment com disco suave,
  alpha por profundidade e variação de tom creme↔madeira). DPR ≤ 1.5; pausar quando fora de tela/aba oculta;
  menos partículas no mobile; fallback estático (SVG de partículas) para `prefers-reduced-motion` ou sem WebGL.
- **Risco a evitar:** "site de startup de IA". Sem azul, sem neon, sem grid futurista. Lento, quente, mineral.

### Conceito 2 — **Chegada** (foto da entrada da clínica)

- **Ideia:** *"Você chegou."* A recepção (`assets/img/entrada-clinica.jpg`, 16:9; `entrada-clinica-mobile.jpg`
  4:5) em tela cheia, como capa de revista de arquitetura: madeira, mármore, luz quente, o wordmark na parede.
  Gradiente bordô sobe da base (para o texto creme) sem sujar a imagem. H1 na base à esquerda ou centralizado;
  ao rolar, a foto sobe com parallax e encolhe para dentro de uma moldura (scale + margens via scrub) enquanto
  o BLOCO 2 entra em bordô.
- **Segunda imagem:** `chegada-porta.jpg` (a porta vista do corredor) pode abrir a seção A CASA.
- **Ritmo:** o mais próximo da CLP — muito respiro, seções longas, grade editorial assimétrica (imagens que
  atravessam colunas, textos deslocados), alternância bordô/osso. Split-screen (foto | tela off-white com uma
  linha de evolução) no BLOCO 3B — é a direção de fotografia "a tela, quando ela aparece".
- **Motion:** parallax de imagens, reveals por linha, linhas finas que desenham ao entrar, hover em tiles com
  imagem que amplia 1.04. Sem WebGL.

### Conceito 3 — **Presença** (vídeo institucional no hero)

- **Ideia:** *"A casa como ela é."* É o hero que a Direção de Marca já previu. Vídeo mudo em loop (12–20 s) com
  entrada, luz, corredor, mãos, a tela do exame, os três médicos na casa com gente. H1 centralizado (padrão
  CLP), eyebrow, botão "Agendar avaliação", link "Assistir ao filme" (abre o institucional completo com som em
  `<dialog>`).
- **Placeholder do vídeo (até a diária na clínica):** sequência "Ken Burns" dos renders (`entrada-clinica`,
  `espera-02`, `corredor-portas`, `consultorio-01`, `bioimpedancia`) com pan/zoom lento, crossfade de 1.5 s,
  leve grão e um véu bordô; rótulo discreto "Filme institucional — gravação na clínica". O `<video
  autoplay muted loop playsinline preload="metadata" poster>` está no HTML apontando para
  `assets/video/institucional.mp4`; quando o arquivo existir, ele assume e o placeholder some (detectar
  `loadeddata`/`error`).
- **Scroll:** o vídeo fica preso (pin) enquanto o texto do hero sai por cima; depois diminui para uma janela
  21:9 que acompanha o BLOCO 2. "Bastidores": 3 tiles de clipes (placeholders) das duas diárias. A seção OS
  MÉDICOS ganha os vídeos verticais em destaque.
- **Técnica:** carregamento adiado no mobile (economia de dados → só poster); `IntersectionObserver` pausa fora
  da tela; lightbox `<dialog>` nativo.

## 7. Produção: as duas diárias alimentam o site

**Diária 01 — Estúdio Jacarandá (fundação):** painel de madeira, mesma poltrona, mesma luz para os três; terno
sem gravata / alfaiataria escura; sem cena de casa e sem computador. Sai: 72 respostas (40–90 s), as 3
apresentações pessoais ("Quem eu sou", 60–90 s, vertical 9:16) e os 3 anúncios. **Para o site:** os 3 vídeos
verticais dos cards OS MÉDICOS; retratos (foto) dos três no mesmo cenário; capas das séries para a seção de
conteúdo; um retrato horizontal com bastidores à mostra (padrão Seven) para a seção "Conversa".

**Diária 02 — Instituto Rocca, Moema (o filme):** 1 filme institucional com os três e a casa com gente (hero
do conceito 3, 12–20 s de loop mudo + versão completa com som); 3 vídeos "A casa, por dentro" (um por médico);
a jornada do paciente encenada (chegada, espera, bioimpedância); B-roll de detalhe, textura, luz e percurso;
**fotos da entrada/recepção** (hero do conceito 2: horizontal 3:2 e vertical 4:5, luz quente, sem pessoas
olhando para a câmera) e do consultório com a tela off-white acesa.

Cada conceito lista, em comentário no fim do HTML e em `CONCEITOS.md`, exatamente quais planos precisa.

## 8. Regras técnicas (valem para os três)

- HTML5 semântico, `lang="pt-BR"`, um `<h1>`, landmarks, `alt` descritivo, foco visível, contraste AA
  (creme sobre bordô passa; creme-60 só em texto ≥ 16px).
- CSS com variáveis de `brand/tokens.css`; mobile-first; breakpoints 640 / 900 / 1200 / 1440.
- JS: `src/<conceito>/main.js` importa `shared/ui.js` e é empacotado por esbuild em
  `concepts/<conceito>/app.js` (IIFE, minificado). Sem CDN: three, gsap e lenis vêm de `node_modules`.
- Fontes via Google Fonts (`preconnect` + `display=swap`), fallback sem serifa.
- `prefers-reduced-motion`: desliga Lenis/scrub; partículas → fallback estático; vídeo → poster.
- Peso: página ≤ 1.5 MB sem vídeo (imagens dos renders otimizadas por uso; usar `loading="lazy"` fora do hero);
  `app.js` do conceito 1 ≤ 800 KB.
- Léxico: `node scripts/lexico.mjs` varre os HTML e falha se encontrar termos proibidos ou "!" em texto.
- Testar em 390×844, 768×1024, 1440×900 sem erros no console.

## 9. Pontos de troca **[PENDENTE]**

| Material | Onde entra | Esforço |
|----------|-----------|---------|
| Webfont Semplicita Pro | `@font-face` em `brand/tokens.css` + `--fonte` | minutos |
| Foto real da entrada | `assets/img/entrada-clinica.jpg` (+ `-mobile.jpg`) | minutos |
| Filme institucional | `assets/video/institucional.mp4` + `poster.jpg` | minutos |
| Vídeos verticais dos médicos | `assets/video/tulio.mp4`, `breno.mp4`, `ana-paula.mp4` | minutos |
| Retratos dos médicos | `assets/img/retrato-tulio.jpg` etc. (substituem os SVGs) | minutos |
| Endereço, telefone, horários, CRM, Instagram | `shared/partials.html` (footer/contato) → copiar nos 3 HTML | 15 min |

## 6b. Conceitos adicionais (4–6) — para a segunda rodada

O cliente vai ver três; a agência quer escolher entre seis bem diferentes entre si. Os três abaixo se afastam
dos três primeiros em superfície, protagonista e mecânica. Mesmo sistema (`brand/`, `shared/`), mesmo texto
(`COPY.md`), mesma espinha de seções — como nos conceitos 1–3.

### Conceito 4 — **Conversa** (claro, tipográfico, o médico fala)

- **Ideia:** *"Aqui quem fala é uma pessoa."* É a regra do feed levada ao site: **base neutra (osso) e o bordô
  como ponto**. O hero é claro, quase só tipografia: a frase-mãe enorme em Semplicita Light sobre osso, e à
  direita um **vídeo vertical 9:16** do médico se apresentando ("Quem eu sou", gravado no estúdio Jacarandá —
  placeholder `retrato-tulio.svg`), com o nome, a frente e uma linha em primeira pessoa
  ("Eu vejo isso toda semana. — Dr. Túlio Bovo"). Um seletor discreto alterna os três médicos (Túlio / Breno /
  Ana Paula) trocando vídeo, nome e a frase; o "seu médico" é escolha de quem chega.
- **Estrutura:** O problema e O mecanismo como texto corrido grande, tipo carta; as **Perguntas da semana** viram
  o dispositivo principal da página — uma lista longa de perguntas (10–12 títulos do banco, BRIEF §5.1 + os do
  Planejamento) com nome do médico e "Ver resposta"; As provas como três frases em bordô sobre osso; A casa em
  uma faixa horizontal de fotos pequenas; o Fecho em bordô (único bloco escuro grande além do footer).
- **Motion:** discreto — reveals por linha, troca de médico com crossfade, sublinhados que desenham. Sem pin.
- **Diferença essencial:** é o único conceito claro; o protagonista é a pessoa e a pergunta, não a casa nem a
  tecnologia. Risco a evitar: parecer blog. O tamanho da tipografia e o vídeo vertical evitam isso.

### Conceito 5 — **Símbolo** (a geometria da marca em movimento)

- **Ideia:** *"Quatro aberturas, uma casa."* O símbolo oficial (círculo com quatro aberturas) vira o dispositivo
  visual da home: no hero, um anel gigante em creme sobre bordô, com a mídia (render/vídeo) visível **dentro do
  círculo** como máscara; ao rolar, o anel gira lentamente e as quatro aberturas se alinham com quatro textos —
  as **quatro provas/frentes** — que entram uma a uma (scrub). Depois o anel se abre e se dissolve em um padrão
  de arcos (como no cartão do manual) que vira textura das seções seguintes.
- **Estrutura:** hero (anel + frase-mãe centralizada); O problema em bordô com o padrão de arcos ao fundo; O
  método em osso com numerais grandes; **Frentes em scroll horizontal** (cinco painéis que deslizam com o scroll
  vertical, ScrollTrigger pin) — é o momento "avançado" do site; O mecanismo com a tela do exame; As provas dentro
  de três círculos; A casa; Os médicos; A primeira consulta; FAQ; Fecho.
- **Técnica:** SVG do símbolo (`assets/img/simbolo.svg`) com `clip-path`/`mask` sobre a mídia; GSAP ScrollTrigger
  com pin e scrub; sem WebGL. Respeitar o manual: o símbolo nunca é distorcido nem recebe gradiente — ele gira,
  escala e vira máscara, só.
- **Diferença essencial:** monocromático bordô/creme, geométrico, cinético, "app-like". É o mais moderno dos seis.

### Conceito 6 — **Slides** (fotográfico, editorial de moda, ritmo Seven)

- **Ideia:** *"Três médicos, uma casa — em tela cheia."* Hero em **slides fotográficos de tela cheia** que
  avançam sozinhos (7 s) ou por setas/teclado: slide 1 = a recepção com a frase-mãe centralizada; slide 2 = o
  retrato dos três no estúdio (placeholder `video-conversa.svg`) com "Três médicos, uma casa."; slide 3 = a tela
  do exame acesa no consultório com "Investigar antes de prescrever."; slide 4 = "Todo mundo sabe da mulher. E o
  homem?" sobre o consultório escuro. Título grande em caixa alta com tracking (é o lugar onde a caixa alta cabe),
  indicador de slides fino em creme, transição por crossfade + leve zoom.
- **Estrutura:** depois do hero, a página é mais direta e comercial: **Frentes em grade 2×2 de tiles escuros**
  (padrão Seven) com foto sangrada e rótulo em caixa alta; O problema/O mecanismo como declaração com respiro
  enorme (eyebrow + título em caixa alta com tracking, centralizados, em osso); As provas em três colunas; Os
  médicos com retratos P&B grandes e nome + frente (sem idade — a marca não usa depoimento como prova); A casa em
  split-screen; A primeira consulta; Fecho.
- **Motion:** slideshow (GSAP timeline, pausa em hover e em `document.hidden`), parallax nos tiles, reveals.
- **Diferença essencial:** fotografia como protagonista e caixa alta nos títulos; é o mais "campanha" dos seis.
  Cuidado: nada de antes-e-depois, nada de idade nos retratos, nada de exclamação.

### Ainda não agora (lembrete pedido pelo cliente)

- **Versão com Higgsfield** (vídeo/imagem gerados por IA para o hero e os bastidores, enquanto a diária não
  acontece): fica para uma rodada futura, depois de escolhidos os conceitos. Anotado em `CONCEITOS.md`.
