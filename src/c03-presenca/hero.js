/* ============================================================================
   Conceito 3 — Presença · scroll do hero (sticky + scrub)
   ----------------------------------------------------------------------------
   O hero fica preso por uma tela (position: sticky dentro de .hero-pista, que
   tem o dobro da altura — o bloco 01 sobe por cima da segunda metade). Preferi
   sticky ao pin do ScrollTrigger: a posição vem do próprio scroll nativo, sem
   troca fixed→relative, então nunca há um quadro inconsistente entre o
   scroll suavizado e o pin. Enquanto o hero está preso:
     · o texto sobe e some;
     · a mídia (vídeo + placeholder, juntos em .hero__midia) encolhe para uma
       janela 21:9 centralizada no topo (.hero__alvo diz onde), e o bloco 01
       reserva esse espaço com padding, então a janela "acompanha" o texto do
       bloco 01 e, quando a pista termina, se solta e sobe com a página;
     · o véu afina (não há mais texto sobre a imagem).
   Técnica: FLIP só com transforms. A camada externa (.hero__midia) recebe
   translate + scaleX/scaleY (vira a janela); a interna (.hero__quadro, o
   quadro 16:9 que cobre a tela) recebe a contra-escala k/sx, k/sy, de modo
   que o conteúdo encolhe uniformemente (k) sem distorcer e continua centrado.
   Em prefers-reduced-motion: nada disso roda.
   ============================================================================ */

import { gsap, ScrollTrigger, prefersReducedMotion } from '../../shared/ui.js';

export function iniciarHeroScroll() {
  const hero = document.querySelector('.hero--presenca');
  if (!hero) return null;
  const pista = hero.closest('.hero-pista') || hero;
  const midia = hero.querySelector('.hero__midia');
  const quadro = hero.querySelector('.hero__quadro');
  const alvo = hero.querySelector('.hero__alvo');
  const conteudo = hero.querySelector('.hero__conteudo');
  const pe = hero.querySelector('.hero__pe');
  const veu = hero.querySelector('.hero__veu');
  if (!midia || !quadro || !alvo) return null;

  const g = { W: 1, H: 1, qw: 1, qh: 1, lx: 0, ly: 0, x: 0, y: 0, w: 1, h: 1, k: 1 };
  const t = { v: 0 };

  function medir() {
    const W = hero.clientWidth;
    const H = hero.clientHeight;
    // quadro 16:9 que cobre a tela (o vídeo é 16:9; os renders fazem cover dentro dele)
    const qw = Math.max(W, (H * 16) / 9);
    const qh = Math.max(H, (W * 9) / 16);
    const lx = (W - qw) / 2;
    const ly = (H - qh) / 2;
    gsap.set(quadro, { left: lx, top: ly, width: qw, height: qh });
    const hr = hero.getBoundingClientRect();
    const ar = alvo.getBoundingClientRect();
    Object.assign(g, { W, H, qw, qh, lx, ly, x: ar.left - hr.left, y: ar.top - hr.top, w: ar.width, h: ar.height });
    g.k = Math.max(g.w / qw, g.h / qh);
  }

  function aplicar() {
    const p = t.v;
    const sx = 1 + (g.w / g.W - 1) * p;
    const sy = 1 + (g.h / g.H - 1) * p;
    const k = 1 + (g.k - 1) * p;
    const ix = g.W / 2 - g.lx - (k * g.qw) / (2 * sx);
    const iy = g.H / 2 - g.ly - (k * g.qh) / (2 * sy);
    gsap.set(midia, { x: g.x * p, y: g.y * p, scaleX: sx, scaleY: sy, transformOrigin: '0 0' });
    gsap.set(quadro, { x: ix, y: iy, scaleX: k / sx, scaleY: k / sy, transformOrigin: '0 0' });
  }

  medir();
  if (prefersReducedMotion) {
    // Sem scrub: só o quadro dimensionado (o vídeo cobre a tela).
    ScrollTrigger.addEventListener('refreshInit', medir);
    return null;
  }

  // Timeline pausado, dirigido pelo próprio scroll nativo (síncrono, sem
  // depender do rAF): progresso = quanto a pista já subiu ÷ altura do hero.
  const somem = [conteudo, pe].filter(Boolean);
  const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
  tl.fromTo(somem, { opacity: 1, y: 0 }, { opacity: 0, y: -56, duration: 0.3, ease: 'power1.in' }, 0)
    .fromTo(t, { v: 0 }, { v: 1, duration: 0.7, ease: 'power2.inOut', onUpdate: aplicar }, 0.12);
  if (veu) tl.fromTo(veu, { opacity: 1 }, { opacity: 0.55, duration: 0.5, ease: 'power1.inOut' }, 0.3);

  let topoPista = 0;
  let ultimo = -1;
  const medirPista = () => { topoPista = pista.getBoundingClientRect().top + (window.scrollY || 0); };
  const atualizar = () => {
    const distancia = hero.offsetHeight || 1;
    const p = Math.min(1, Math.max(0, ((window.scrollY || 0) - topoPista) / distancia));
    if (p === ultimo) return;
    ultimo = p;
    tl.progress(p);
  };

  medirPista();
  atualizar();
  window.addEventListener('scroll', atualizar, { passive: true });
  ScrollTrigger.addEventListener('refreshInit', () => { medir(); medirPista(); ultimo = -1; });
  ScrollTrigger.addEventListener('refresh', atualizar);
  window.addEventListener('resize', () => { medirPista(); ultimo = -1; atualizar(); });

  return tl;
}
