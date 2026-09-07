/* ============================================================================
   Conceito 4 — Conversa · seletor de médico (hero)
   ----------------------------------------------------------------------------
   Três botões (Túlio · Breno · Ana Paula) com aria-pressed trocam, em
   crossfade GSAP, a camada da moldura (retrato ou vídeo), o nome + frente e a
   linha em primeira pessoa. Setas do teclado percorrem os botões.

   Vídeo (mesma lógica do conceito 3):
     · cada camada tem <video autoplay muted loop playsinline preload="none"
       data-video="…/tulio.mp4" data-filme="pendente">. Sem src no HTML, o
       navegador não pede um arquivo que ainda não existe (zero requisição
       falha, zero erro de console).
     · data-filme="pendente" é o PONTO DE TROCA: enquanto existir, o retrato
       fica e o vídeo não é tentado. Quando o .mp4 chegar, basta remover.
     · sem o atributo: o JS promove data-video → src; 'loadeddata' → a camada
       ganha .tem-video (o vídeo assume, o retrato some); 'error' (ou rede
       parada por 6 s) → o retrato fica.
     · saveData ou prefers-reduced-motion: não tenta o vídeo.
   ============================================================================ */

import { gsap, prefersReducedMotion } from '../../shared/ui.js';

const $$ = (sel, raiz = document) => Array.from(raiz.querySelectorAll(sel));

function deveEconomizar() {
  const conexao = navigator.connection;
  return Boolean(conexao && conexao.saveData) || prefersReducedMotion;
}

function ligarVideo(camada) {
  const video = camada.querySelector('video[data-video]');
  if (!video || video.dataset.ligado) return;
  video.dataset.ligado = '1';
  if (video.dataset.filme === 'pendente' || deveEconomizar()) return;

  let resolvido = false;
  const assumir = () => {
    if (resolvido) return;
    resolvido = true;
    camada.classList.add('tem-video');
    if (camada.classList.contains('ativa')) tocar(camada);
  };
  const falhar = () => {
    if (resolvido) return;
    resolvido = true;
    camada.classList.remove('tem-video');
  };
  video.addEventListener('loadeddata', assumir, { once: true });
  video.addEventListener('error', falhar, { once: true });
  video.src = video.dataset.video;
  video.load();
  if (video.readyState >= 2) assumir();
  setTimeout(() => { if (!resolvido && video.networkState === 3) falhar(); }, 6000);
}

function tocar(camada) {
  const video = camada.querySelector('video');
  if (video && camada.classList.contains('tem-video')) { const p = video.play(); if (p && p.catch) p.catch(() => {}); }
}
function pausar(camada) {
  const video = camada.querySelector('video');
  if (video && !video.paused) video.pause();
}

export function iniciarSeletor() {
  const hero = document.querySelector('.hero--conversa');
  if (!hero) return;

  const botoes = $$('.seletor__botao', hero);
  const camadas = $$('.moldura__camada', hero);
  const apresentas = $$('.apresenta__item', hero);
  const falas = $$('.fala__item', hero);
  if (!botoes.length || !camadas.length) return;

  let atual = (botoes.find((b) => b.getAttribute('aria-pressed') === 'true') || botoes[0]).dataset.medico;
  let trocando = false;

  const porMedico = (lista, id) => lista.find((el) => el.dataset.medico === id);

  // Liga o vídeo da camada inicial (e das outras só quando forem pedidas).
  ligarVideo(porMedico(camadas, atual));

  function marcar(el, ativo) {
    el.classList.toggle('ativa', ativo);
    if (ativo) el.removeAttribute('aria-hidden');
    else el.setAttribute('aria-hidden', 'true');
  }

  function trocar(id) {
    if (id === atual || trocando) return;
    const de = { camada: porMedico(camadas, atual), apresenta: porMedico(apresentas, atual), fala: porMedico(falas, atual) };
    const para = { camada: porMedico(camadas, id), apresenta: porMedico(apresentas, id), fala: porMedico(falas, id) };
    if (!para.camada) return;

    botoes.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.medico === id)));
    atual = id;
    ligarVideo(para.camada);

    const textosDe = [de.apresenta, de.fala].filter(Boolean);
    const textosPara = [para.apresenta, para.fala].filter(Boolean);

    if (prefersReducedMotion) {
      marcar(de.camada, false); marcar(para.camada, true);
      textosDe.forEach((el) => marcar(el, false));
      textosPara.forEach((el) => marcar(el, true));
      pausar(de.camada); tocar(para.camada);
      return;
    }

    trocando = true;
    // A camada nova entra por cima (visível, opacidade 0) e a antiga some embaixo.
    marcar(para.camada, true);
    gsap.set(para.camada, { opacity: 0, zIndex: 2 });
    gsap.set(de.camada, { zIndex: 1 });
    const midiaPara = para.camada.classList.contains('tem-video')
      ? para.camada.querySelector('.moldura__video')
      : para.camada.querySelector('.moldura__retrato');

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        marcar(de.camada, false);
        gsap.set([de.camada, para.camada], { clearProps: 'opacity,zIndex' });
        pausar(de.camada);
        trocando = false;
      },
    });

    tl.to(para.camada, { opacity: 1, duration: 0.9 }, 0);
    if (midiaPara) tl.fromTo(midiaPara, { scale: 1.05 }, { scale: 1, duration: 1.4, clearProps: 'scale' }, 0);
    tocar(para.camada);

    // Textos: saem para cima, entram de baixo — nome, frente e a fala com stagger.
    tl.to(textosDe, {
      opacity: 0, y: -8, duration: 0.3, ease: 'power2.in',
      onComplete: () => {
        textosDe.forEach((el) => { marcar(el, false); gsap.set(el, { clearProps: 'opacity,transform' }); });
        textosPara.forEach((el) => marcar(el, true));
      },
    }, 0);
    tl.fromTo(textosPara, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, clearProps: 'opacity,transform' }, 0.34);
  }

  botoes.forEach((b) => {
    b.addEventListener('click', () => trocar(b.dataset.medico));
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'Home' && e.key !== 'End') return;
      e.preventDefault();
      const i = botoes.indexOf(b);
      let alvo = i;
      if (e.key === 'ArrowRight') alvo = (i + 1) % botoes.length;
      if (e.key === 'ArrowLeft') alvo = (i - 1 + botoes.length) % botoes.length;
      if (e.key === 'Home') alvo = 0;
      if (e.key === 'End') alvo = botoes.length - 1;
      botoes[alvo].focus();
      trocar(botoes[alvo].dataset.medico);
    });
  });

  // Fora da tela (ou com a aba oculta), o vídeo ativo pausa; volta ao entrar.
  let visivel = true;
  const sincronizar = () => {
    const camada = porMedico(camadas, atual);
    if (!camada) return;
    if (visivel && !document.hidden) tocar(camada); else pausar(camada);
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach(({ isIntersecting }) => { visivel = isIntersecting; });
      sincronizar();
    }, { threshold: 0.2 });
    const moldura = hero.querySelector('.moldura');
    if (moldura) io.observe(moldura);
  }
  document.addEventListener('visibilitychange', sincronizar);

  return { trocar };
}
