/* ============================================================================
   Site final — hero.js · a abertura fundida da home (Letras → clínica → janela)
   ----------------------------------------------------------------------------
   AINDA VAZIO: a fase Base só registra o contrato; o construtor da home
   implementa (mapa técnico, scratchpad/site/tecnico.md §4.4).

   Contrato:
     iniciarHeroFusao() procura [data-hero-fusao] e devolve { letras, timeline }
     ou null. Não toca em nada fora da abertura além de ler as medidas da
     seção seguinte (a que reserva a janela no padding-top).

   O que a implementação faz (resumo do mapa técnico):
     1. iniciarLetras({ hero, canvas: .letras__canvas, fallback: .letras__fallback,
          fonte: #wordmark-fonte, fracao: { desktop: .74, mobile: .86 },
          centro: { desktop: [0, .10], mobile: [0, .22] },
          amostra: { desktop: [1900, 150000], mobile: [900, 45000] } })  — shared/letras.js.
        Devolveu null (sem WebGL / movimento reduzido)? adiciona .abertura--estatica
        à pista e sai: o CSS de site.css empilha os dois blocos.
     2. gsap.delayedCall(0.9, () => revelarHero(hero.querySelector('.hero__conteudo'))).
     3. Pin por CSS (position: sticky, site.css) + progresso por ScrollTrigger:
        trigger: pista, start 'top top', end 'bottom bottom', scrub: true,
        invalidateOnRefresh, refreshPriority: 1, onUpdate → letras.setAtivo(p < .35).
        Linha do tempo (p): letras dissolvem 0→.30 (letras.estado.progresso);
        conteúdo A some 0→.20; mídia aparece .04→.28 (scale 1.06→1 até .40);
        H1 entra por linhas .28→.46 (yPercent 110→0, stagger .06); platô .46→.62;
        H1 sai .62→.78; FLIP da mídia para o .hero__alvo .62→1 (medir()/aplicar()
        copiados de src/c03-presenca/hero.js).
     4. Re-monta o timeline no resize (debounce 300 ms, depois do re-split do
        ui.js) e re-mede em ScrollTrigger 'refreshInit'.
   ============================================================================ */

export function iniciarHeroFusao() {
  const pista = document.querySelector('[data-hero-fusao]');
  if (!pista) return null;
  // Enquanto a abertura não está implementada, a página mostra o estado
  // estático (os dois blocos empilhados), como no movimento reduzido.
  pista.classList.add('abertura--estatica');
  return null;
}

export default iniciarHeroFusao;
