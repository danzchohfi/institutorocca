/* ============================================================================
   Conceito 3 — Presença · main.js
   ----------------------------------------------------------------------------
   Sem WebGL. Preloader sim (BRIEF §4.4: conceitos 1 e 3). A UI compartilhada
   (Lenis, nav, menu, reveals, split por linhas, parallax, form, lightbox,
   WhatsApp) vem de shared/ui.js. Aqui entram o filme do hero e seu
   placeholder (Ken Burns dos renders), o pin/scrub do hero e o fallback do
   lightbox.
   ============================================================================ */

import { initUI, gsap, ScrollTrigger, revelarHero, esperarFontes } from '../../shared/ui.js';
import { iniciarSliders } from '../../shared/slider.js';
import { iniciarKenBurns } from './kenburns.js';
import { iniciarFilmeHero, iniciarLightboxFilme } from './filme.js';
import { iniciarHeroScroll } from './hero.js';

initUI({ lenis: true, revelarHero: false, preloader: true });

// O primeiro render já está na tela; a sequência só anda depois do preloader.
const kenBurns = iniciarKenBurns();
iniciarLightboxFilme();
iniciarFilmeHero({ aoAssumir: () => { if (kenBurns) kenBurns.parar(); } });

function abrir() {
  // Mesma espera do ui.js: garante que o split por linhas já aconteceu.
  esperarFontes(1500).then(() => {
    iniciarHeroScroll();
    iniciarSliders();
    if (kenBurns) kenBurns.tocar();
    // A imagem assenta primeiro; o texto entra logo depois, em ordem do DOM.
    gsap.delayedCall(0.3, () => revelarHero());
    ScrollTrigger.refresh();
  });
}
if (document.documentElement.classList.contains('pronto')) abrir();
else window.addEventListener('rocca:pronto', abrir, { once: true });

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
