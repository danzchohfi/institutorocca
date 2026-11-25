/* ============================================================================
   Conceito 2 — Chegada · linhas finas que se desenham ao entrar
   ----------------------------------------------------------------------------
   Qualquer [data-linha] (linha de 1px das listas de Frentes e de Perguntas)
   começa em scaleX(0) (CSS, só com html.js) e cresce da esquerda para a
   direita quando entra na tela. Em reduced-motion o CSS já mostra a linha.
   ============================================================================ */

import { gsap, ScrollTrigger, prefersReducedMotion } from '../../shared/ui.js';

export function iniciarLinhas() {
  const linhas = Array.from(document.querySelectorAll('[data-linha]'));
  if (!linhas.length) return;

  if (prefersReducedMotion) {
    gsap.set(linhas, { clearProps: 'transform' });
    return;
  }

  ScrollTrigger.batch(linhas, {
    start: 'top 92%',
    once: true,
    onEnter: (lote) =>
      gsap.to(lote, {
        scaleX: 1,
        transformOrigin: 'left center',
        duration: 1.6,
        ease: 'expo.out',
        stagger: 0.1,
        overwrite: 'auto',
      }),
  });
}
