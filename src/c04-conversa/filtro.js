/* ============================================================================
   Conceito 4 — Conversa · filtro das perguntas da semana por médico
   ----------------------------------------------------------------------------
   Botões com aria-pressed (Todos · Túlio · Breno · Ana Paula). Ao trocar, as
   perguntas que ficam entram com um fade curto e stagger; as que saem recebem
   [hidden]. Um status só para leitor de tela diz quantas ficaram.
   ============================================================================ */

import { gsap, ScrollTrigger, prefersReducedMotion } from '../../shared/ui.js';
import { desenharAgora } from './linhas.js';

const NOMES = {
  todos: 'todos os médicos',
  tulio: 'o Dr. Túlio Bovo',
  breno: 'o Dr. Breno Gondim',
  'ana-paula': 'a Dra. Ana Paula Bovo',
};

export function iniciarFiltro() {
  const secao = document.querySelector('.perguntas-secao');
  if (!secao) return;
  const botoes = Array.from(secao.querySelectorAll('.filtro__botao'));
  const itens = Array.from(secao.querySelectorAll('.pergunta:not(.pergunta--fim)'));
  const status = secao.querySelector('.filtro__status');
  if (!botoes.length || !itens.length) return;

  let atual = 'todos';

  function aplicar(filtro) {
    if (filtro === atual) return;
    atual = filtro;
    botoes.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtro === filtro)));

    const ficam = [];
    itens.forEach((li) => {
      const fica = filtro === 'todos' || li.dataset.medico === filtro;
      li.hidden = !fica;
      if (fica) ficam.push(li);
    });

    if (status) {
      const n = ficam.length;
      status.textContent = `${n} ${n === 1 ? 'pergunta' : 'perguntas'} de ${NOMES[filtro] || filtro}.`;
    }

    if (!prefersReducedMotion) {
      gsap.fromTo(ficam, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.05, overwrite: 'auto', clearProps: 'transform' });
      desenharAgora(ficam.map((li) => li.querySelector('[data-linha]')).filter(Boolean));
    }
    ScrollTrigger.refresh();
  }

  botoes.forEach((b) => b.addEventListener('click', () => aplicar(b.dataset.filtro)));
}
