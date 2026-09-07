/* Conceito 5 — Símbolo · main.js
   Anel do símbolo gira com o scroll (pin + scrub) enquanto as quatro provas
   entram uma a uma; depois o anel escala e some. Frentes em scroll horizontal
   pinado no desktop; no mobile o trilho é scroll nativo com scroll-snap.
   O símbolo só gira, escala e mascara (manual: nunca distorcer nem gradiente). */
import { initUI, gsap, ScrollTrigger, revelarHero, esperarFontes, prefersReducedMotion } from '../../shared/ui.js';
import { iniciarLinhas } from './linhas.js';

initUI({ lenis: true, revelarHero: false, preloader: false });

function heroAnel() {
  const hero = document.querySelector('.hero--simbolo');
  const svg = hero.querySelector('.anel__svg');
  const textos = [...hero.querySelectorAll('.anel__texto')];
  if (prefersReducedMotion) { textos.forEach((t) => t.classList.add('anel__texto--visivel')); return; }
  const tl = gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: '+=200%', pin: true, scrub: 0.6, anticipatePin: 1 } });
  tl.to(svg, { rotate: 90, ease: 'none', duration: 4 }, 0);
  textos.forEach((t, i) => {
    tl.to(t, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, i * 0.9 + 0.15);
    if (i < textos.length - 1) tl.to(t, { opacity: 0, y: -8, duration: 0.4, ease: 'power2.in' }, i * 0.9 + 0.85);
  });
  tl.fromTo(hero.querySelector('.anel'), { scale: 1, opacity: 1 }, { scale: 1.5, opacity: 0, duration: 0.8, ease: 'power2.in', immediateRender: false }, 3.4);
  tl.fromTo(hero.querySelectorAll('.hero__conteudo, .hero__rolar'), { opacity: 1 }, { opacity: 0, duration: 0.5, immediateRender: false }, 3.4);
}

function frentesHorizontal() {
  const secao = document.querySelector('.frentes--horizontal');
  const trilho = secao.querySelector('.paineis');
  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
    secao.classList.add('frentes--pin');
    const dist = () => trilho.scrollWidth - window.innerWidth + 64;
    const tween = gsap.to(trilho, { x: () => -dist(), ease: 'none',
      scrollTrigger: { trigger: secao, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.5, invalidateOnRefresh: true, anticipatePin: 1 } });
    return () => { secao.classList.remove('frentes--pin'); tween.kill(); };
  });
}

window.addEventListener('rocca:pronto', () => {
  esperarFontes(1500).then(() => {
    heroAnel(); frentesHorizontal(); iniciarLinhas();
    gsap.delayedCall(0.2, () => revelarHero());
    ScrollTrigger.refresh();
  });
}, { once: true });
