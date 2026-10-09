# Hero do conceito 08 — os três médicos (foto de estúdio + Higgsfield)

O conceito 08 (Retrato) usa uma foto dos três médicos com o fundo de madeira do estúdio,
ao lado do bordô com a mensagem principal em partículas. Enquanto a foto real não existe,
a imagem em `assets/img/medicos-hero.jpg` foi gerada no Higgsfield com os Elements dos três
(a partir das fotos de referência de cada um) e o Element do estúdio Jacarandá como cenário
(modelo GPT Image 2). Depois da diária no estúdio
Jacarandá, a foto real entra no mesmo arquivo, com o mesmo nome, e a página troca sozinha.

## O que fotografar (estúdio Jacarandá)

- Os três juntos, da cintura para cima, próximos, poses relaxadas, olhando para a câmera.
- Fundo: a parede de painéis de madeira do próprio estúdio (a curva de nogueira/carvalho),
  sem recorte. A página mostra a foto inteira na metade direita do hero, com borda reta;
  o bordô fica do lado esquerdo, com a mensagem em partículas.
- Luz principal quente, suave, vindo da esquerda a 45°; um contra-luz leve nos cabelos e
  ombros. Sem luz dura, sem fundo claro.
- Roupa escura e neutra (grafite, bordô, creme). Sem jaleco branco, sem estetoscópio.
- Enquadramento 3:2 horizontal, com espaço vazio à esquerda (a mensagem em partículas
  fica ali). Uma variante 4:5 vertical para o mobile ajuda.
- Câmera na altura do peito, 50–85 mm, abertura aberta (fundo levemente fora de foco).

## Edição no Higgsfield (depois da foto)

1. **Escolha** a foto com os três olhando para a câmera e a parede de madeira limpa atrás.
2. **Acabamento:** `generate_image` com a foto como referência (modelo `gpt_image_2`, role `image`)
   só se precisar limpar o fundo (fios, LED, móveis) ou equilibrar a luz: *"Keep the people
   exactly as they are; clean the wood wall behind them; warm soft key light from the left."*
3. **Exportar:** `upscale_image` para 2400 px de largura ou mais; JPG (qualidade 82) como
   `assets/img/medicos-hero.jpg`, 3:2 (2400×1600), com o grupo no centro-direita do quadro.

## Prompt usado para a prévia (Soul 2.0, 3:2, 2k)

> Editorial studio portrait of three Brazilian physicians standing close together, waist-up,
> in relaxed confident poses looking at the camera […]. Elegant dark and neutral clothing,
> no white coats, no stethoscopes. Seamless deep burgundy studio background (#550000) fading
> to darker burgundy at the edges, warm soft key light from the left at 45 degrees, subtle warm
> rim light, medium format look, 85mm lens, shallow depth of field, natural skin texture, quiet
> luxury magazine quality, plenty of empty background on the left side of the frame, no text.
