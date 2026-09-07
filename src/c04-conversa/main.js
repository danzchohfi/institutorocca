/* ============================================================================
   Conceito 4 — Conversa · main.js
   ----------------------------------------------------------------------------
   Sem WebGL, sem pin, sem preloader (BRIEF §4.4: só nos conceitos 1 e 3). A UI
   compartilhada (Lenis, nav, menu, reveals, split por linhas, parallax, form,
   lightbox, WhatsApp) vem de shared/ui.js. Aqui entra só o que é deste
   conceito: a entrada da moldura do hero, o seletor de médico (crossfade), as
   linhas que se desenham, o filtro das perguntas, a faixa da casa e o
   lightbox vertical da apresentação.
   ============================================================================ */

import { initUI, gsap, ScrollTrigger, revelarHero, esperarFontes, prefersReducedMotion } from '../../shared/ui.js';
import { iniciarSeletor } from './seletor.js';
import { iniciarLinhas } from './linhas.js';
import { iniciarFiltro } from './filtro.js';
import { iniciarFaixa } from './faixa.js';
import { iniciarApresentacao } from './apresentacao.js';

initUI({ lenis: true, revelarHero: false, preloader: false });

/* A moldura entra por um clip de baixo para cima enquanto o texto revela por
   linha — a pessoa e a frase chegam juntas. Em reduced-motion a moldura já
   está visível (CSS) e revelarHero mostra o resto sem animação. */
function entrarHero() {
  const moldura = document.querySelector('.hero--conversa .moldura');
  if (!moldura || prefersReducedMotion) { revelarHero(); return; }

  const midia = moldura.querySelector('.moldura__camada.ativa .moldura__retrato');
  gsap.set(moldura, { clipPath: 'inset(100% 0% 0% 0%)' });
  if (midia) gsap.set(midia, { scale: 1.08, transformOrigin: '50% 60%' });

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.to(moldura, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, clearProps: 'clipPath' }, 0);
  if (midia) tl.to(midia, { scale: 1, duration: 2.2, ease: 'power3.out', clearProps: 'scale' }, 0);

  // O texto entra logo em seguida, em ordem do DOM (H1 por linha → sub → botões → fala → seletor → nome).
  gsap.delayedCall(0.25, () => revelarHero());
}

window.addEventListener(
  'rocca:pronto',
  () => {
    // Mesma espera do ui.js: garante que o split por linhas já aconteceu.
    esperarFontes(1500).then(() => {
      entrarHero();
      iniciarSeletor();
      iniciarLinhas();
      iniciarFiltro();
      iniciarFaixa();
      iniciarApresentacao();
      ScrollTrigger.refresh();
    });
  },
  { once: true },
);

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
