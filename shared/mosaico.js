/* ============================================================================
   Mosaico de fotos (GSAP): [data-mosaico] > .mosaico__item > .mosaico__moldura > img
   Entrada: cada peça abre (clip-path) e a foto assenta (escala), em cascata.
   Rolagem: paralaxe leve por peça (scrub), sem pin — tudo cabe numa tela.
   Em reduced-motion: nada roda; o CSS já mostra tudo.
   ============================================================================ */
import { gsap, ScrollTrigger, prefersReducedMotion } from './ui.js';

export function iniciarMosaico() {
  document.querySelectorAll('[data-mosaico]').forEach((raiz) => {
    const itens = Array.from(raiz.querySelectorAll('.mosaico__item'));
    if (!itens.length || prefersReducedMotion) return;
    const molduras = itens.map((i) => i.querySelector('.mosaico__moldura'));
    const imgs = itens.map((i) => i.querySelector('img'));
    gsap.set(itens, { clipPath: 'inset(8% 8% 8% 8%)', opacity: 0 });
    gsap.set(imgs, { scale: 1.3 });
    ScrollTrigger.create({
      trigger: raiz,
      start: 'top 78%',
      once: true,
      onEnter: () => {
        gsap.to(itens, { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.4, ease: 'power3.out', stagger: 0.09, overwrite: 'auto' });
        gsap.to(imgs, { scale: 1.12, duration: 1.8, ease: 'power3.out', stagger: 0.09, overwrite: 'auto', clearProps: 'scale' });
      },
    });
    molduras.forEach((m, k) => {
      const v = 3 + (k % 3) * 1.5;
      gsap.fromTo(m, { yPercent: -v }, { yPercent: v, ease: 'none', scrollTrigger: { trigger: itens[k], start: 'top bottom', end: 'bottom top', scrub: true } });
    });
  });
}
