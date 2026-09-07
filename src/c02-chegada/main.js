/* ============================================================================
   Conceito 2 — Chegada · main.js
   ----------------------------------------------------------------------------
   Sem WebGL, sem preloader (BRIEF §4.4: só nos conceitos 1 e 3). A UI
   compartilhada (Lenis, nav, menu, reveals, split por linhas, parallax,
   form, lightbox, WhatsApp) vem de shared/ui.js. Aqui entram só o hero
   (entrada + pin/scrub) e as linhas que se desenham.
   ============================================================================ */

import { initUI, gsap, ScrollTrigger, revelarHero, esperarFontes } from '../../shared/ui.js';
import { iniciarCartoes } from '../../shared/cartoes.js';
import { iniciarHero } from './hero.js';
import { iniciarLinhas } from './linhas.js';

initUI({ lenis: true, revelarHero: false, preloader: false });

window.addEventListener(
  'rocca:pronto',
  () => {
    // Mesma espera do ui.js: garante que o split por linhas já aconteceu.
    esperarFontes(1500).then(() => {
      iniciarHero();
      iniciarLinhas();
      iniciarCartoes();
      // A foto assenta primeiro; o texto entra logo depois, em ordem do DOM.
      gsap.delayedCall(0.35, () => revelarHero());
      ScrollTrigger.refresh();
    });
  },
  { once: true },
);
