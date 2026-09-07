/* ============================================================================
   Conceito 4 — Conversa · lightbox vertical da apresentação ("Quem eu sou")
   ----------------------------------------------------------------------------
   Os botões de play dos cards de OS MÉDICOS abrem o <dialog id="apresentacao">
   (ui.js faz o showModal e tenta o play). Aqui entra o que é deste conceito:
   trocar o retrato, o nome e o vídeo conforme o card clicado.
     · data-filme="pendente" no <video> do dialog é o PONTO DE TROCA: enquanto
       existir, o retrato do médico aparece com o rótulo "Vídeo vertical —
       'Quem eu sou'…" e nenhum arquivo é pedido.
     · sem o atributo: o src vem do data-video do botão; 'error' → volta ao
       retrato. Ao fechar, o vídeo pausa (ui.js) e o src fica para o próximo.
   ============================================================================ */

export function iniciarApresentacao() {
  const dialog = document.getElementById('apresentacao');
  if (!dialog) return;
  const video = dialog.querySelector('video');
  const retrato = dialog.querySelector('.lightbox__retrato');
  const vazio = dialog.querySelector('.lightbox__vazio');
  const nome = dialog.querySelector('.lightbox__nome');
  const pendente = !video || video.dataset.filme === 'pendente';

  const mostrarRetrato = () => {
    if (video) { video.hidden = true; if (!video.paused) video.pause(); }
    if (retrato) retrato.hidden = false;
    if (vazio) vazio.hidden = false;
  };
  const mostrarVideo = () => {
    if (retrato) retrato.hidden = true;
    if (vazio) vazio.hidden = true;
    video.hidden = false;
  };

  if (pendente) mostrarRetrato();
  else video.addEventListener('error', mostrarRetrato);

  document.addEventListener('click', (e) => {
    const botao = e.target.closest('[data-abre-lightbox="#apresentacao"]');
    if (!botao) return;
    const quem = botao.dataset.nome || '';
    if (nome) nome.textContent = quem;
    if (quem) dialog.setAttribute('aria-label', `Apresentação: ${quem}`);
    if (retrato && botao.dataset.retrato) {
      retrato.src = botao.dataset.retrato;
      retrato.alt = quem ? `Retrato — diária no estúdio Jacarandá: ${quem} (placeholder)` : '';
    }
    if (pendente || !botao.dataset.video) { mostrarRetrato(); return; }
    mostrarVideo();
    if (video.getAttribute('src') !== botao.dataset.video) {
      video.src = botao.dataset.video;
      video.load();
    }
    const p = video.play();
    if (p && p.catch) p.catch(() => {});
  });
}
