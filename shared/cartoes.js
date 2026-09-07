/* ============================================================================
   Cartões empilhados (GSAP ScrollTrigger): [data-cartoes] > [data-cartoes-pista] > [data-cartao]
   A pista fica presa por (n − 1) telas; cada cartão sobe de baixo e cobre o
   anterior, que encolhe um pouco e escurece. Em reduced-motion: lista estática.
   ============================================================================ */
import { gsap, ScrollTrigger, prefersReducedMotion } from './ui.js';

export function iniciarCartoes() {
  document.querySelectorAll('[data-cartoes]').forEach((raiz) => {
    const pista = raiz.querySelector('[data-cartoes-pista]');
    const cartoes = pista ? Array.from(pista.querySelectorAll('[data-cartao]')) : [];
    if (cartoes.length < 2 || prefersReducedMotion) { raiz.classList.add('cartoes--estatico'); return; }
    gsap.set(cartoes.slice(1), { yPercent: 115 });
    const tl = gsap.timeline({
      defaults: { ease: 'none', duration: 1 },
      scrollTrigger: {
        trigger: raiz,
        start: 'top top',
        end: () => '+=' + Math.round((cartoes.length - 1) * window.innerHeight * 0.9),
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    cartoes.forEach((c, k) => {
      if (k === 0) return;
      tl.to(cartoes[k - 1], { scale: 0.94, yPercent: -3, filter: 'brightness(.6)' }, k - 1)
        .to(c, { yPercent: 0 }, k - 1);
    });
    ScrollTrigger.addEventListener('refreshInit', () => gsap.set(cartoes[0], { scale: 1, yPercent: 0, filter: 'brightness(1)' }));
  });
}
