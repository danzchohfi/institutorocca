/* ============================================================================
   Conceito 3 — Presença · "Ken Burns" dos renders (placeholder do filme)
   ----------------------------------------------------------------------------
   Enquanto assets/video/institucional.mp4 não existe, cinco renders da casa
   passam em sequência: pan/zoom lento (~7 s cada), crossfade de 1,5 s.
   Os slides ficam empilhados na ordem do DOM: o que entra dissolve por cima
   do anterior (sem "dip" de fundo no meio do crossfade); o anterior é
   apagado depois de coberto. No fecho do ciclo o último dissolve sobre o
   primeiro, que já voltou ao enquadramento inicial.
   Pausa fora da tela (IntersectionObserver) e com a aba oculta.
   Em prefers-reduced-motion: só o primeiro render, parado.
   ============================================================================ */

import { gsap, prefersReducedMotion } from '../../shared/ui.js';

const DURACAO = 7;    // segundos por render
const FUSAO = 1.5;    // crossfade

/* Um plano por render: de → para (escala e deslocamento em %) */
const PLANOS = [
  { de: { scale: 1.08, xPercent: 1.4, yPercent: 0 },    para: { scale: 1.2,  xPercent: -1.4, yPercent: 1.0 } },
  { de: { scale: 1.22, xPercent: -1.0, yPercent: 1.4 }, para: { scale: 1.1,  xPercent: 1.0,  yPercent: -0.8 } },
  { de: { scale: 1.1,  xPercent: 0,    yPercent: -1.4 }, para: { scale: 1.22, xPercent: 1.4,  yPercent: 1.2 } },
  { de: { scale: 1.2,  xPercent: 1.4,  yPercent: 1.0 }, para: { scale: 1.08, xPercent: -1.0, yPercent: -1.0 } },
  { de: { scale: 1.12, xPercent: -1.4, yPercent: -1.0 }, para: { scale: 1.24, xPercent: 0.6,  yPercent: 1.4 } },
];

export function iniciarKenBurns() {
  const hero = document.querySelector('.hero--presenca');
  const caixa = hero && hero.querySelector('.hero__placeholder');
  if (!hero || !caixa) return null;
  const slides = Array.from(caixa.querySelectorAll('img'));
  if (!slides.length) return null;

  // autoAlpha (opacity + visibility): o slide coberto sai da composição —
  // no celular, cinco camadas em tela cheia custam memória e quadros.
  gsap.set(slides, { autoAlpha: 0 });
  gsap.set(slides[0], { autoAlpha: 1 });

  const parado = { tocar() {}, pausar() {}, parar() {} };
  if (prefersReducedMotion || slides.length < 2) {
    gsap.set(slides[0], { scale: 1.06 });
    return parado;
  }

  const n = slides.length;
  const tl = gsap.timeline({ repeat: -1, paused: true });

  slides.forEach((img, i) => {
    const plano = PLANOS[i % PLANOS.length];
    const inicio = i * DURACAO;
    tl.fromTo(img, plano.de, { ...plano.para, duration: DURACAO + FUSAO, ease: 'none' }, inicio);
    if (i > 0) tl.fromTo(img, { autoAlpha: 0 }, { autoAlpha: 1, duration: FUSAO, ease: 'power1.inOut' }, inicio);
    // coberto pelo seguinte → some (o último fica para o fecho do ciclo)
    if (i > 0 && i < n - 1) tl.set(img, { autoAlpha: 0 }, (i + 1) * DURACAO + FUSAO + 0.05);
  });

  // Fecho do ciclo: o primeiro volta ao enquadramento inicial (ainda coberto)
  // e o último dissolve sobre ele. O ciclo dura n × DURACAO + FUSAO.
  const fim = n * DURACAO;
  tl.set(slides[0], PLANOS[0].de, fim - 0.02);
  tl.fromTo(slides[n - 1], { autoAlpha: 1 }, { autoAlpha: 0, duration: FUSAO, ease: 'power1.inOut', immediateRender: false }, fim);

  // Só roda quando o hero está na tela, a aba está visível e ninguém pediu para parar.
  let ativo = false;
  let visivel = true;
  let morto = false;
  const sincronizar = () => {
    if (morto) return;
    if (ativo && visivel && !document.hidden) tl.play();
    else tl.pause();
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => { visivel = e.isIntersecting; });
      sincronizar();
    }, { threshold: 0.05 });
    io.observe(hero);
  }
  document.addEventListener('visibilitychange', sincronizar);

  return {
    tocar() { ativo = true; sincronizar(); },
    pausar() { ativo = false; sincronizar(); },
    /** O filme real assumiu: encerra de vez. */
    parar() { morto = true; tl.kill(); },
  };
}
