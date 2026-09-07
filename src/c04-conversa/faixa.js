/* ============================================================================
   Conceito 4 — Conversa · faixa horizontal da casa
   ----------------------------------------------------------------------------
   O scroll é nativo (overflow-x + scroll-snap; data-lenis-prevent deixa o
   gesto horizontal passar). Aqui só entram as setas do desktop (Anterior /
   Próxima), que rolam um item por vez e se desligam nas pontas.
   ============================================================================ */

import { prefersReducedMotion } from '../../shared/ui.js';

export function iniciarFaixa() {
  const faixa = document.querySelector('.faixa');
  if (!faixa) return;
  const anterior = document.querySelector('[data-faixa="anterior"]');
  const proxima = document.querySelector('[data-faixa="proxima"]');
  const itens = Array.from(faixa.querySelectorAll('.faixa__item'));
  if (!itens.length) return;

  const passo = () => {
    const a = itens[0];
    const b = itens[1];
    return b ? b.offsetLeft - a.offsetLeft : a.offsetWidth;
  };

  const atualizar = () => {
    const max = faixa.scrollWidth - faixa.clientWidth - 2;
    if (anterior) anterior.disabled = faixa.scrollLeft <= 2;
    if (proxima) proxima.disabled = faixa.scrollLeft >= max;
  };

  const rolar = (dir) => {
    faixa.scrollBy({ left: dir * passo(), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  if (anterior) anterior.addEventListener('click', () => rolar(-1));
  if (proxima) proxima.addEventListener('click', () => rolar(1));
  faixa.addEventListener('scroll', atualizar, { passive: true });
  window.addEventListener('resize', atualizar);
  atualizar();
}
