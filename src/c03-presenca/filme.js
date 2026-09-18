/* ============================================================================
   Conceito 3 — Presença · o filme (hero) e o lightbox do institucional
   ----------------------------------------------------------------------------
   HERO — <video class="hero__video" autoplay muted loop playsinline preload="metadata" poster>
     · <source data-src="…/institucional.mp4"> fica sem src no HTML para o
       navegador não pedir um arquivo que ainda não existe (evita requisição
       falha e erro de console). O JS promove data-src → src quando cabe.
     · data-filme="pendente" no <video> é o PONTO DE TROCA: enquanto existir,
       o placeholder (Ken Burns dos renders) fica e o vídeo não é tentado.
       Quando institucional.mp4 chegar, basta remover o atributo.
     · saveData ou largura < 640 px (ou prefers-reduced-motion): não tenta o
       vídeo (remove o <source>), mantém o placeholder.
     · 'loadeddata' → esconde o placeholder (fade) e o rótulo; 'error' →
       mantém o placeholder.
   LIGHTBOX — <dialog id="filme"> com o institucional completo (preload="none").
     Quando o vídeo falhar (arquivo ausente) ou estiver pendente, o parágrafo
     "Filme em produção — gravação na clínica" aparece sobre o poster.
   ============================================================================ */

import { gsap, prefersReducedMotion } from '../../shared/ui.js';

function deveEconomizar() {
  const conexao = navigator.connection;
  return Boolean(conexao && conexao.saveData) || window.innerWidth < 640 || prefersReducedMotion;
}

/* Remove o <source> E reinicia a seleção de fonte: só tirar o elemento não
   basta — o navegador já escolheu a URL ao analisar o HTML e um play()
   posterior (o ui.js dá play ao abrir o lightbox) retomaria o download do
   arquivo ausente. load() sem fonte deixa o vídeo vazio, sem requisição. */
function descartarFonte(video, source) {
  if (source) source.remove();
  video.removeAttribute('src');
  try { video.load(); } catch (e) { /* sem fonte, nada a carregar */ }
}

export function iniciarFilmeHero({ aoAssumir } = {}) {
  const hero = document.querySelector('.hero--presenca');
  const video = hero && hero.querySelector('.hero__video');
  if (!hero || !video) return { estado: 'sem-video' };
  const placeholder = hero.querySelector('.hero__placeholder');
  const rotulo = hero.querySelector('.hero__rotulo');
  const source = video.querySelector('source');
  const pendente = video.dataset.filme === 'pendente';

  const manter = (estado) => {
    hero.classList.add('hero--sem-filme');
    hero.dataset.filme = estado;
    video.removeAttribute('autoplay');
    try { video.pause(); } catch (e) { /* sem fonte, nada a pausar */ }
  };

  if (pendente || deveEconomizar()) {
    descartarFonte(video, source);
    manter(pendente ? 'pendente' : 'economia');
    return { estado: pendente ? 'pendente' : 'economia' };
  }

  // Promove data-src → src (se o HTML já trouxer src, o navegador já começou).
  if (source && !source.getAttribute('src') && source.dataset.src) {
    source.setAttribute('src', source.dataset.src);
    video.load();
  }

  let resolvido = false;
  const assumir = () => {
    if (resolvido) return;
    resolvido = true;
    hero.classList.add('hero--com-filme');
    hero.dataset.filme = 'tocando';
    const p = video.play();
    if (p && p.catch) p.catch(() => {});
    const alvos = [placeholder, rotulo].filter(Boolean);
    gsap.to(alvos, {
      opacity: 0,
      duration: 1.4,
      ease: 'power2.out',
      onComplete: () => {
        alvos.forEach((el) => { el.hidden = true; });
        if (aoAssumir) aoAssumir();
      },
    });
  };
  const falhar = () => {
    if (resolvido) return;
    resolvido = true;
    manter('ausente');
  };

  if (video.readyState >= 2) assumir();
  video.addEventListener('loadeddata', assumir, { once: true });
  video.addEventListener('error', falhar);
  if (source) source.addEventListener('error', falhar);
  // Rede muda de ideia: sem fonte utilizável depois de um tempo, fica o placeholder.
  setTimeout(() => { if (!resolvido && video.networkState === 3) falhar(); }, 6000);

  // Pausa fora da tela e com a aba oculta (o Ken Burns faz o mesmo por conta própria).
  const sincronizar = () => {
    if (!resolvido || hero.dataset.filme !== 'tocando') return;
    if (document.hidden || hero.dataset.visivel === 'nao') video.pause();
    else { const p = video.play(); if (p && p.catch) p.catch(() => {}); }
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => { hero.dataset.visivel = e.isIntersecting ? 'sim' : 'nao'; });
      sincronizar();
    }, { threshold: 0.05 });
    io.observe(hero);
  }
  document.addEventListener('visibilitychange', sincronizar);

  return { estado: 'tentando' };
}

export function iniciarLightboxFilme() {
  const dialog = document.getElementById('filme');
  const video = dialog && dialog.querySelector('video');
  if (!dialog || !video) return;
  const vazio = dialog.querySelector('.lightbox__vazio');
  const source = video.querySelector('source');

  const semFilme = () => {
    dialog.classList.add('lightbox--sem-filme');
    video.hidden = true;
    if (vazio) vazio.hidden = false;
  };

  if (video.dataset.filme === 'pendente') {
    descartarFonte(video, source);
    semFilme();
    return;
  }
  video.addEventListener('error', semFilme);
  if (source) source.addEventListener('error', semFilme);
}
