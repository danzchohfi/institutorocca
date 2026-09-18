/* ============================================================================
   Slider editorial (GSAP): [data-slider] > [data-slider-pista] > slides
   Setas, contador, arrasto com o ponteiro (mouse e toque) e setas do teclado.
   Sem loop: para nas pontas. Em reduced-motion troca sem animação.
   ============================================================================ */
import { gsap, prefersReducedMotion } from './ui.js';

export function iniciarSliders() {
  document.querySelectorAll('[data-slider]').forEach((raiz) => {
    const pista = raiz.querySelector('[data-slider-pista]');
    if (!pista) return;
    const slides = Array.from(pista.children);
    const prev = raiz.querySelector('[data-slider-prev]');
    const next = raiz.querySelector('[data-slider-next]');
    const atual = raiz.querySelector('[data-slider-atual]');
    let i = 0, passo = 1, maxX = 0;

    const medir = () => {
      const gap = parseFloat(getComputedStyle(pista).columnGap) || 0;
      passo = slides[0].offsetWidth + gap;
      maxX = Math.max(0, pista.scrollWidth - raiz.clientWidth);
    };
    const alvoX = (k) => -Math.min(k * passo, maxX);
    const ir = (k, animar = true) => {
      i = Math.max(0, Math.min(slides.length - 1, k));
      const x = alvoX(i);
      if (animar && !prefersReducedMotion) gsap.to(pista, { x, duration: 1.1, ease: 'power3.out', overwrite: true });
      else gsap.set(pista, { x });
      if (atual) atual.textContent = String(i + 1).padStart(2, '0');
      if (prev) prev.disabled = i === 0;
      if (next) next.disabled = x <= -maxX + 0.5;
      slides.forEach((s, k2) => s.classList.toggle('slider__slide--ativo', k2 === i));
    };
    if (prev) prev.addEventListener('click', () => ir(i - 1));
    if (next) next.addEventListener('click', () => ir(i + 1));

    // arrasto: acompanha o ponteiro e, ao soltar, vai para o slide seguinte na direção do gesto
    let x0 = 0, xBase = 0, arrastando = false;
    pista.addEventListener('pointerdown', (e) => {
      arrastando = true; x0 = e.clientX; xBase = gsap.getProperty(pista, 'x');
      gsap.killTweensOf(pista); pista.setPointerCapture(e.pointerId); raiz.classList.add('slider--arrastando');
    });
    pista.addEventListener('pointermove', (e) => { if (arrastando) gsap.set(pista, { x: xBase + (e.clientX - x0) }); });
    const soltar = (e) => {
      if (!arrastando) return;
      arrastando = false; raiz.classList.remove('slider--arrastando');
      const dx = e.clientX - x0;
      if (Math.abs(dx) < 10) { ir(i, false); return; }
      ir(dx < 0 ? i + 1 : i - 1);
    };
    pista.addEventListener('pointerup', soltar);
    pista.addEventListener('pointercancel', soltar);
    raiz.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { ir(i + 1); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { ir(i - 1); e.preventDefault(); }
    });
    addEventListener('resize', () => { medir(); ir(i, false); });
    medir(); ir(0, false);
  });
}
