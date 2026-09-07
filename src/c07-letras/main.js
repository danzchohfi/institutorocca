/* Conceito 7 — Letras · main.js
   Hero: o wordmark em partículas (shared/letras.js), preso por uma tela e
   dissolvido pelo scroll. O resto da página segue a espinha do conceito 2. */
import { initUI, gsap, ScrollTrigger, revelarHero, esperarFontes } from '../../shared/ui.js';
import { iniciarLinhas } from '../c02-chegada/linhas.js';
import { iniciarCartoes } from '../../shared/cartoes.js';
import { iniciarLetras } from '../../shared/letras.js';

initUI({ lenis: true, revelarHero: false, preloader: false });

function iniciar() {
  const hero = document.querySelector('.hero--letras');
  const letras = iniciarLetras({
    hero, canvas: hero.querySelector('.letras__canvas'), fallback: hero.querySelector('.letras__fallback'),
    fonte: document.getElementById('wordmark-fonte'),
    fracao: { desktop: 0.74, mobile: 0.9 }, centro: { desktop: [0, 0.08], mobile: [0, 0.08] },
    amostra: { desktop: [1900, 150000], mobile: [900, 45000] },
  });
  if (!letras) return;
  // scrub: true — o Lenis já suaviza; um scrub com atraso por cima ficava "de borracha".
  gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: '+=100%', pin: true, scrub: true, onLeave: () => letras.setAtivo(false), onEnterBack: () => letras.setAtivo(true) } })
    .to(letras.estado, { progresso: 1, ease: 'none' }, 0)
    .to(hero.querySelectorAll('.hero__conteudo'), { opacity: 0, ease: 'none', duration: 0.4 }, 0);
}

window.addEventListener('rocca:pronto', () => {
  esperarFontes(1500).then(() => { iniciar(); iniciarLinhas(); iniciarCartoes(); gsap.delayedCall(0.9, () => revelarHero()); ScrollTrigger.refresh(); });
}, { once: true });
