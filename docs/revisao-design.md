# Revisão de design do site final (set/2026)

Sugestões de melhoria da home e das internas, na ordem em que valem mais. O critério em tudo:
tirar a cara de "site gerado" (gradientes animados, blobs, brilho, tudo simétrico demais) e deixar a
produção fotográfica e a marca fazerem o trabalho. Movimento só onde ele conta uma coisa.

## Feito nesta rodada

1. **A foto dos três em largura total.** Na home, a horizontal sangra a página, com quase uma tela de
   altura e paralaxe leve; a legenda saiu de cima dos rostos e foi para baixo da foto. No celular entra a
   vertical (3:4). A foto de produção está em 1280 px de largura: para a tela cheia em monitores grandes,
   exportar de novo em 2400 a 3000 px (mesmo nome de arquivo, o site troca sozinho).
2. **Home mais curta.** Saíram "O mecanismo" (repetia "O problema" com outras palavras) e a faixa
   "Emagrecer sem reganhar" (repetia a Nutrologia logo acima). A home ficou com abertura, problema,
   método, especialidades, instituto, médicos, perguntas e fecho.
3. **Vídeos reais nos cards.** Os três vídeos já publicados no Instagram entram no lugar do poster
   parado (home, páginas dos médicos e Conteúdo).

## Sugestões (para a próxima rodada)

1. **Os médicos mais cedo no celular.** Hoje a foto dos três aparece depois de cinco telas de rolagem.
   Os rostos são o maior ativo da produção: vale mover "Os médicos" para logo depois de "O problema"
   (ou trazer a foto vertical para o estado B da abertura, no lugar da recepção renderizada).
2. **As fotos verticais maiores.** As duas verticais do trio (sorrindo e séria) e as três da Dra. Ana
   Paula de terno branco cabem em tela cheia: a séria como abertura da página Conteúdo no celular, a
   sorridente no fecho da home (a chamada "Avaliação com o médico que vai acompanhar você" sobre a
   foto, em vez do bordô chapado).
3. **three.js onde ele conta algo, e só ali.** O sistema de partículas do wordmark é a assinatura do
   site; hoje aparece uma vez, na abertura. Dois usos que fazem sentido, na mesma linguagem:
   - o símbolo Rocca se formando em partículas ao entrar no fecho (mesmo código, outro path SVG);
   - a foto dos três aparecendo por trás das partículas que se dissolvem (o mesmo gesto da abertura,
     fechando a página).
   O que evitar: shaders coloridos, malhas ondulando, blobs, cursor com rastro. É isso que dá cara de IA.
4. **Grão de filme.** Uma textura de grão (SVG feTurbulence, 3 a 4 % de opacidade) sobre o bordô das
   seções de foto tira o aspecto "chapado" das cores digitais e casa com a fotografia de estúdio.
5. **Numerais editoriais.** Os "01 · O problema" hoje são eyebrows minúsculos. Um numeral grande, em
   300, ao lado do título (como numa revista) dá ritmo e estrutura sem acrescentar elementos.
6. **Fotos no lugar dos renders.** Assim que a obra fechar, uma diária fotográfica substitui os seis
   renders do mosaico e os das internas (mesmos nomes de arquivo). Render e foto real na mesma página
   é o que mais entrega "montagem".
7. **Vídeo próprio depois do Instagram.** O embed do Instagram resolve agora, mas traz a interface
   deles para dentro do site. Quando os "Quem eu sou" subirem no Cloudflare Stream, os cards voltam ao
   player próprio, com autoplay mudo ao passar o mouse.
8. **Uma palavra em itálico por título, no máximo.** A segunda linha em itálico é a marca tipográfica
   do site; quando toda seção tem, perde força. Reservar para a abertura, os médicos e o fecho.
