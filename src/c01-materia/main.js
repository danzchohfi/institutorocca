/* ============================================================================
   Conceito 1 — Matéria · main.js
   UI compartilhada (ui.js) + o wordmark em partículas (shared/letras.js),
   menor e à direita. A montagem dispara no 'rocca:pronto'; o scroll do hero
   (scrub) dissolve as letras; o texto entra logo depois.
   ============================================================================ */
import { initUI, gsap, ScrollTrigger, prefersReducedMotion, revelarHero, esperarFontes } from '../../shared/ui.js';
import { iniciarMosaico } from '../../shared/mosaico.js';
import { iniciarLetras } from '../../shared/letras.js';

initUI({ lenis: true, revelarHero: false, preloader: true });

const hero = document.querySelector('[data-hero]');
const canvasHero = document.querySelector('.hero__canvas');
const fallback = document.querySelector('.hero__fallback');
const canvasProvas = document.querySelector('.provas__canvas');

const mobile = window.innerWidth < 900 || (navigator.hardwareConcurrency || 8) <= 4;

function mostrarFallback() {
  if (canvasHero) canvasHero.hidden = true;
  if (fallback) fallback.hidden = false;
  if (hero) hero.classList.add('hero--estatico');
}

/* ---- hero: o wordmark em partículas, menor, à direita (shared/letras.js) --- */
let letras = null;

/* ---- abertura: convergência + texto do hero ------------------------------ */
function abrir() {
  iniciarMosaico();
  if (!letras && canvasHero) {
    letras = iniciarLetras({
      hero, canvas: canvasHero, fallback, fonte: document.getElementById('wordmark-fonte'),
      fracao: { desktop: 0.36, mobile: 0.8 }, centro: { desktop: [0.22, 0.02], mobile: [0, 0.24] },
      amostra: { desktop: [1100, 60000], mobile: [700, 25000] },
    });
    if (!letras) mostrarFallback();
  }
  if (prefersReducedMotion) {
    // sem animação: só marca tudo como revelado (evita o gsap.set vazio do ui.js)
    hero.querySelectorAll('[data-reveal], [data-split-linhas]').forEach((el) => el.classList.add('revelado', 'split-pronto'));
    hero.querySelectorAll('[data-reveal-grupo]').forEach((g) => g.classList.add('revelado'));
    hero.classList.add('hero-revelado');
    return;
  }
  esperarFontes(1500).then(() => {
    gsap.delayedCall(letras ? 0.45 : 0, () => revelarHero());
  });
}
if (document.documentElement.classList.contains('pronto')) abrir();
else window.addEventListener('rocca:pronto', abrir, { once: true });

/* ---- scroll: a forma se dissolve enquanto o texto some ------------------- */
if (hero && !prefersReducedMotion) {
  const heroIn = hero.querySelector('.hero__in');
  const rolar = hero.querySelector('.hero__rolar');
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => { if (letras) letras.setProgresso(self.progress); },
      onLeave: () => { if (letras) letras.setAtivo(false); },
      onEnterBack: () => { if (letras) letras.setAtivo(true); },
    },
  });
  if (heroIn) tl.to(heroIn, { opacity: 0, y: -60, duration: 0.55 }, 0);
  if (rolar) tl.to(rolar, { opacity: 0, duration: 0.25 }, 0);
  // véu que escurece a cena no fim, para o bloco seguinte entrar limpo
  const veu = hero.querySelector('.hero__veu');
  if (veu) tl.to(veu, { opacity: 1, duration: 0.5 }, 0.5);
}

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
