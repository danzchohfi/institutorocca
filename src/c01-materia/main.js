/* ============================================================================
   Conceito 1 — Matéria · main.js
   UI compartilhada (ui.js) + partículas do hero (three.js) + poeira em
   "As provas". A convergência dispara no 'rocca:pronto'; o scroll do hero
   (scrub) dissolve a forma; o texto do hero entra logo depois da matéria
   começar a se organizar.
   ============================================================================ */
import { initUI, gsap, ScrollTrigger, prefersReducedMotion, revelarHero, esperarFontes } from '../../shared/ui.js';
import { Particulas, temWebGL } from './particulas.js';

initUI({ lenis: true, revelarHero: false, preloader: true });

const hero = document.querySelector('[data-hero]');
const canvasHero = document.querySelector('.hero__canvas');
const fallback = document.querySelector('.hero__fallback');
const canvasProvas = document.querySelector('.provas__canvas');

const mobile = window.innerWidth < 900 || (navigator.hardwareConcurrency || 8) <= 4;
const podeWebGL = !prefersReducedMotion && temWebGL();

function mostrarFallback() {
  if (canvasHero) canvasHero.hidden = true;
  if (fallback) fallback.hidden = false;
  if (hero) hero.classList.add('hero--estatico');
}

/* ---- hero: seixo de partículas ------------------------------------------- */
let seixo = null;
if (podeWebGL && canvasHero) {
  try {
    seixo = new Particulas(canvasHero, {
      modo: 'seixo',
      quantidade: mobile ? 10000 : 30000,
      fio: 0.06,
      mouse: true,
      raio: 0.35,
      opacidade: mobile ? 0.78 : 0.84,
      ruido: 0.06,
      converge: 0,
    });
  } catch (e) {
    seixo = null;
    mostrarFallback();
  }
} else {
  mostrarFallback();
}

/* ---- as provas: poeira esparsa, quase estática --------------------------- */
let poeira = null;
if (podeWebGL && canvasProvas) {
  try {
    poeira = new Particulas(canvasProvas, {
      modo: 'poeira',
      quantidade: mobile ? 1400 : 2500,
      mouse: true,
      forca: 0.6,
      raio: 0.55,
      opacidade: 0.7,
      tamanho: 1.5,
      ruido: 0.05,
      converge: 1,
      altura: 4.2,
      semente: 11,
    });
  } catch (e) {
    poeira = null;
  }
}

/* ---- abertura: convergência + texto do hero ------------------------------ */
function abrir() {
  if (seixo) {
    gsap.to(seixo.uniforms.uConverge, { value: 1, duration: 2.6, ease: 'expo.out' });
  }
  if (prefersReducedMotion) {
    // sem animação: só marca tudo como revelado (evita o gsap.set vazio do ui.js)
    hero.querySelectorAll('[data-reveal], [data-split-linhas]').forEach((el) => el.classList.add('revelado', 'split-pronto'));
    hero.querySelectorAll('[data-reveal-grupo]').forEach((g) => g.classList.add('revelado'));
    hero.classList.add('hero-revelado');
    return;
  }
  esperarFontes(1500).then(() => {
    gsap.delayedCall(seixo ? 0.45 : 0, () => revelarHero());
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
      onUpdate: (self) => { if (seixo) seixo.setProgress(self.progress); },
    },
  });
  if (heroIn) tl.to(heroIn, { opacity: 0, y: -60, duration: 0.55 }, 0);
  if (rolar) tl.to(rolar, { opacity: 0, duration: 0.25 }, 0);
  // véu que escurece a cena no fim, para o bloco seguinte entrar limpo
  const veu = hero.querySelector('.hero__veu');
  if (veu) tl.to(veu, { opacity: 1, duration: 0.5 }, 0.5);
}

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
