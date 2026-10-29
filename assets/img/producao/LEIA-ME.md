# Fotos da produção

Nomes de arquivo que o site espera. Fotos reais já no lugar: o trio (horizontal e as duas verticais) e a
Dra. Ana Paula de terno branco (três variações). Retratos reais do Dr. Túlio e do Dr. Breno já no lugar (reduzidos para 1600×2400).
O stand-in da Dra. Ana Paula (colete camel, gerado por IA) saiu do repositório: o site usa só as fotos reais dela (-02, -03, -04).
Ao subir as fotos reais com estes nomes, o site troca sozinho.

| Arquivo | O que é | Proporção |
|---|---|---|
| `medicos-trio-horizontal.jpg` | Os três, foto principal da home (Dr. Túlio em pé à esquerda, de terno bordô e gravata clara; Dra. Ana Paula sentada ao centro; Dr. Breno em pé à direita, de terno cinza e gravata escura). Hoje em 2000 px; `-1280.jpg` é a variante para telas menores (srcset) | 3:2, ≥ 2400 px de largura |
| `medicos-trio-vertical.jpg` | Os três, versão vertical (mobile), sorrindo | 2:3, ≥ 1600 px de largura |
| `medicos-trio-vertical-02.jpg` | Os três, vertical, expressão séria | 2:3 |
| `dr-tulio-bovo.jpg` | Dr. Túlio Bovo sentado na poltrona (terno bordô, gravata clara, barba) | 2:3 |
| `dr-breno-gondim.jpg` | Dr. Breno Gondim sentado na poltrona (terno cinza, gravata escura) | 2:3 |
| `dra-ana-paula-bovo-02.jpg` | Dra. Ana Paula Bovo, terno branco, sorrindo (cenário com estante) | 2:3 |
| `dra-ana-paula-bovo-03.jpg` | Idem, expressão séria | 2:3 |
| `dra-ana-paula-bovo-04.jpg` | Idem, sorriso leve, mãos no colo | 2:3 |

Fotos reais da clínica (diária de 26/10, trocadas pela página "Troca de fotos do Rocca"). Cada uma entra só nos
lugares indicados; os renders de `assets/img/` continuam nos demais.

| Arquivo | O que é | Onde entra |
|---|---|---|
| `recepcao-01.jpg` | Recepção: wordmark, balcão de mármore, sofá curvo e poltronas diante do painel de madeira (1280 px); `-mobile.jpg` é o recorte 4:5 centrado no wordmark | Home (abertura), O instituto (percurso: a chegada), Dr. Breno (capa do vídeo "O instituto, por dentro") |
| `recepcao-02.jpg` | Recepção de perto: wordmark, balcão e sofá (2400 px; `-1280.jpg` no srcset) | Home (mosaico 01 · A chegada) |
| `recepcao-03.jpg` | Atendente no balcão da recepção, sala de espera ao fundo (1280 px) | Home (mosaico 02 · A espera), Contato (onde fica) |
| `dr-breno-gondim-consultorio-01.jpg` | Dr. Breno sentado à mesa do consultório (1280 px) | O instituto (capa do vídeo do Dr. Breno) |
| `dr-breno-gondim-consultorio-02.jpg` | Dr. Breno em pé junto à mesa do consultório (1280 px) | Dr. Breno (02 · Como eu conduzo) |
| `consultorio-atendimento-01.jpg` | Médico atendendo à mesa do consultório, cidade ao fundo (1280 px) | Endocrinologia (topo e imagem de compartilhamento) |

As fotos de 1280 px vieram na exportação "Grande"; reenviadas em 2400–3000 px com o mesmo nome, o site troca sozinho.

Como subir: no GitHub, abrir a pasta `assets/img/producao/` na branch de trabalho → **Add file → Upload files**,
soltar os arquivos com estes nomes e confirmar. JPEG, qualidade 80–85, sem perfil de cor exótico.

As fotos enviadas em 18/09 vieram na exportação "Large" (1280 px no lado maior). Para o hero e a foto principal
em telas grandes, o ideal é reenviar em 2400–3000 px (no Fotos/Preview: exportar em tamanho personalizado), que
fica em 2–4 MB e passa no limite de upload do GitHub (25 MB por arquivo).
