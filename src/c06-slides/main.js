/* Conceito 6 — Slides · main.js
   Slideshow do hero: crossfade + zoom lento, 7 s por slide, setas, indicador,
   teclado (← →), swipe; pausa em hover, em document.hidden e quando o hero sai
   da tela. Sem WebGL, sem preloader. */
import { initUI, gsap, ScrollTrigger, revelarHero, esperarFontes, prefersReducedMotion } from '../../shared/ui.js';
import { iniciarLinhas } from './linhas.js';

initUI({ lenis: true, revelarHero: false, preloader: false });

function slideshow() {
  const hero = document.querySelector('.hero--slides');
  const slides = [...hero.querySelectorAll('.slide')];
  const tabs = [...hero.querySelectorAll('[data-ir]')];
  let atual = 0, timer = null, pausado = false, visivel = true;
  const ir = (n) => {
    atual = (n + slides.length) % slides.length;
    slides.forEach((s, i) => { s.classList.toggle('slide--ativo', i === atual); s.setAttribute('aria-hidden', i === atual ? 'false' : 'true'); });
    tabs.forEach((t, i) => t.setAttribute('aria-selected', i === atual ? 'true' : 'false'));
  };
  const parar = () => { clearInterval(timer); timer = null; };
  const rodar = () => { parar(); if (prefersReducedMotion || pausado || !visivel || document.hidden) return; timer = setInterval(() => ir(atual + 1), 7000); };
  hero.querySelector('[data-anterior]').addEventListener('click', () => { ir(atual - 1); rodar(); });
  hero.querySelector('[data-proximo]').addEventListener('click', () => { ir(atual + 1); rodar(); });
  tabs.forEach((t, i) => t.addEventListener('click', () => { ir(i); rodar(); }));
  window.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') { ir(atual + 1); rodar(); } if (e.key === 'ArrowLeft') { ir(atual - 1); rodar(); } });
  hero.addEventListener('pointerenter', () => { pausado = true; parar(); });
  hero.addEventListener('pointerleave', () => { pausado = false; rodar(); });
  let x0 = null;
  hero.addEventListener('pointerdown', (e) => { x0 = e.clientX; });
  hero.addEventListener('pointerup', (e) => { if (x0 !== null && Math.abs(e.clientX - x0) > 40) { ir(e.clientX < x0 ? atual + 1 : atual - 1); rodar(); } x0 = null; });
  document.addEventListener('visibilitychange', rodar);
  new IntersectionObserver(([en]) => { visivel = en.isIntersecting; rodar(); }, { threshold: 0.2 }).observe(hero);
  rodar();
}

window.addEventListener('rocca:pronto', () => {
  esperarFontes(1500).then(() => {
    slideshow(); iniciarLinhas();
    gsap.delayedCall(0.2, () => revelarHero());
    ScrollTrigger.refresh();
  });
}, { once: true });
