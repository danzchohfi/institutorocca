/* Conceito 8 — Retrato · main.js
   Hero: os três médicos (foto) sobre bordô e a mensagem principal escrita em
   partículas (shared/letras.js, modo texto), presa por uma tela e dissolvida
   pelo scroll. O resto da página segue a espinha do conceito 2. */
import { initUI, gsap, ScrollTrigger, revelarHero, esperarFontes } from '../../shared/ui.js';
import { iniciarLinhas } from '../c02-chegada/linhas.js';
import { iniciarMosaico } from '../../shared/mosaico.js';
import { iniciarLetras } from '../../shared/letras.js';

initUI({ lenis: true, revelarHero: false, preloader: false });

function iniciar() {
  const hero = document.querySelector('.hero--retrato');
  const letras = iniciarLetras({
    hero, canvas: hero.querySelector('.letras__canvas'), fallback: null, fonte: null,
    texto: [{ t: 'Seu médico.' }, { t: 'Sua melhor versão.', italico: true }],
    fracao: { desktop: 0.36, mobile: 0.86 }, centro: { desktop: [-0.27, 0.1], mobile: [0, -0.12] },
    amostra: { desktop: [1500, 90000], mobile: [800, 35000] },
  });
  if (!letras) { hero.classList.add('hero--estatico'); return; }
  gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: '+=100%', pin: true, scrub: true, onLeave: () => letras.setAtivo(false), onEnterBack: () => letras.setAtivo(true) } })
    .to(letras.estado, { progresso: 1, ease: 'none' }, 0)
    .to(hero.querySelector('.hero__medicos'), { yPercent: 10, opacity: 0, ease: 'none', duration: 0.6 }, 0)
    .to(hero.querySelectorAll('.hero__conteudo'), { opacity: 0, ease: 'none', duration: 0.4 }, 0);
}

// As letras são desenhadas com a fonte da marca (regular e itálica) antes da amostragem.
const fontes = () => (document.fonts && document.fonts.load
  ? Promise.all([document.fonts.load('300 100px "Semplicita Pro"'), document.fonts.load('italic 300 100px "Semplicita Pro"')]).catch(() => {})
  : Promise.resolve());

window.addEventListener('rocca:pronto', () => {
  Promise.all([esperarFontes(1500), fontes()]).then(() => { iniciar(); iniciarLinhas(); iniciarMosaico(); gsap.delayedCall(0.9, () => revelarHero()); ScrollTrigger.refresh(); });
}, { once: true });
