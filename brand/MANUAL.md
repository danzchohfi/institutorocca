# Resumo do Manual de Identidade Visual — Instituto Rocca (v1.0, 2026)

Fonte: `Manual_Identidade_Instituto_Rocca.pdf` (designer: Igor Viana). O que vale para o site.

## Cores institucionais (pág. 18)

| Nome | Hex | RGB | CMYK |
|------|-----|-----|------|
| Rocca 01 — Bordô | `#550000` | 85, 0, 0 | 40, 100, 85, 65 |
| Rocca 02 — Areia | `#B8997D` | 185, 150, 125 | 25, 35, 50, 12 |
| Rocca 03 — Oliva Escuro | `#4A3B26` | 75, 60, 38 | 50, 60, 75, 65 |
| Rocca 04 — Cinza Quente | `#544D45` | 85, 75, 70 | 55, 50, 55, 50 |

Cores de apoio adotadas no site (não estão no manual; vêm da Direção de Marca, que pede "nem preto puro, nem
branco puro", e do pedido do cliente de "off-white creme como cor de letra"): creme `#F2E8D9` (texto e logo
sobre bordô), osso `#EFE7DA` (fundos claros), tinta `#2A1A16` (texto sobre osso). A confirmar com o designer.

## Logotipo (págs. 5, 8, 9, 11, 12, 14, 16)

- Versão principal: **bordô sobre fundos claros**; **obrigatoriamente em branco sobre fundos escuros ou
  coloridos**. Versão em areia **não é permitida**. Positivo/negativo (preto/branco) só quando as cores não
  puderem ser reproduzidas.
- Sobre fotos: garantir alto contraste; quando o fundo comprometer a leitura, usar positivo ou negativo.
- Redução máxima: impresso 70 mm; **digital 250 px de largura**. Abaixo disso, usar o símbolo.
- Área de proteção: a altura (x) da letra "R" em todos os lados.
- Proibido: distorcer, alterar proporções ou espaçamentos, alterar cores, aplicar gradiente, efeitos, texturas
  ou trocar a fonte.

## Símbolo (págs. 6, 10)

Estrutura circular com quatro aberturas que formam, no espaço negativo, uma cruz médica. Usos: foto de perfil,
ícones, favicon, sinalização, uniformes, brindes, papelaria, marca-d'água, padrões gráficos e acabamentos. Em
materiais institucionais e primeiros contatos, priorizar o logotipo completo; o símbolo é apoio.

## Tipografia (pág. 21)

**Semplicita Pro** (Light, Regular, Medium, SemiBold, Bold + itálicas) como tipografia de apoio para títulos e
textos. No protótipo usamos **Jost** (Google Fonts) até a webfont ser entregue — troca em `brand/tokens.css`.

## Como isso está aplicado nos protótipos

- `brand/tokens.css`: `--cor-bordo #550000`, `--cor-areia #B8997D`, `--cor-oliva-escuro #4A3B26`,
  `--cor-cinza-quente #544D45` (+ aliases antigos `--cor-madeira`, `--cor-marmore`, `--cor-grafite`).
- `assets/img/logo.svg` (creme, fundos escuros), `logo-branco.svg`, `logo-bordo.svg` (= `logo-escuro.svg`,
  fundos claros) — vetorizados do PDF do manual.
- `assets/img/simbolo.svg` / `simbolo-bordo.svg` / `simbolo-branco.svg` / `favicon.svg`.
- Nav: wordmark no desktop; **símbolo no mobile** (regra dos 250 px).
