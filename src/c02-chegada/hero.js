/* ============================================================================
   Conceito 2 — Chegada · hero
   ----------------------------------------------------------------------------
   A foto da recepção em tela cheia. Na entrada, a imagem assenta (1.06 → 1).
   Ao rolar, o hero fica preso (pin) por 75% de uma tela enquanto:
     · o bloco de texto e o indicador de scroll somem primeiro;
     · a foto sobe com parallax (yPercent -8) dentro da moldura;
     · a moldura encolhe (scale .92) e ganha margens (clip-path inset),
       revelando o bordô em volta — o mesmo bordô em que o bloco 01 entra.
   Em prefers-reduced-motion nada disso roda: a foto fica parada, o texto
   aparece sem animação (ui.js cuida) e não há pin.
   ============================================================================ */

import { gsap, prefersReducedMotion } from '../../shared/ui.js';

export function iniciarHero() {
  const hero = document.querySelector('.hero--chegada');
  if (!hero) return null;

  const midia = hero.querySelector('.hero__midia');
  const img = midia && midia.querySelector('img');
  const conteudo = hero.querySelector('.hero__conteudo');
  const rolar = hero.querySelector('.hero__rolar');
  if (!midia || !img) return null;

  if (prefersReducedMotion) return null;

  // Entrada: a foto assenta, sem fade (evita o flash de bordô sob a nav clara).
  gsap.fromTo(img, { scale: 1.06 }, { scale: 1, duration: 2.4, ease: 'power3.out' });

  const escala = window.innerWidth < 640 ? 0.94 : 0.92;
  const somem = [conteudo, rolar].filter(Boolean);

  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: '+=75%',
      pin: true,
      scrub: true,
      anticipatePin: 1,
      // Criado depois dos triggers do ui.js: prioridade alta para que o
      // espaço do pin entre na conta dos triggers da nav, do WhatsApp e dos reveals.
      refreshPriority: 1,
    },
  });

  tl.to(somem, { opacity: 0, y: -48, duration: 0.38, ease: 'power1.in' }, 0)
    .to(img, { yPercent: -8, duration: 1 }, 0)
    .fromTo(
      midia,
      { scale: 1, clipPath: 'inset(0% 0% 0% 0%)' },
      { scale: escala, clipPath: 'inset(3% 3.2% 3% 3.2%)', duration: 1, ease: 'power1.inOut' },
      0,
    );

  return tl;
}
