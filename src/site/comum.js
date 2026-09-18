/* ============================================================================
   Site final — comum.js · o que todas as páginas rodam (iniciarSite).
   ----------------------------------------------------------------------------
   Duas entradas usam este módulo:
     main.js    (home)      → site/app.js      com a abertura fundida (hero.js → three.js)
     interno.js (as demais) → site/interno.js  sem hero.js: o three.js nem entra no grafo
   Cada comportamento procura o seu atributo de dados e não faz nada se ele não
   existir (a lista está em src/site/README.md). Construtores de página:
   registram um comportamento novo com uma linha de import e uma de chamada
   dentro de abrir(), e só.
   ============================================================================ */
import { initUI, ScrollTrigger, esperarFontes } from '../../shared/ui.js';
import { iniciarMosaico } from '../../shared/mosaico.js';      // [data-mosaico]
import { iniciarSliders } from '../../shared/slider.js';       // [data-slider]
import { iniciarStream } from '../../shared/stream.js';        // [data-stream], [data-stream-precisa], lightbox
import { iniciarLinhas } from '../c02-chegada/linhas.js';      // [data-linha] (linhas finas que se desenham)

/** Liga o site. `extras`: funções que só uma entrada traz (a home passa iniciarHeroFusao). */
export function iniciarSite(extras = []) {
  // A home revela o hero por conta própria (hero.js): o ui.js animaria o H1 da
  // clínica junto com o conteúdo das Letras.
  const temFusao = Boolean(document.querySelector('[data-hero-fusao]'));
  initUI({ lenis: true, revelarHero: !temFusao, preloader: false });

  // O stream não depende de fontes nem de scroll: liga já (o iframe é preguiçoso por conta própria).
  iniciarStream();

  function abrir() {
    esperarFontes(1500).then(() => {
      extras.forEach((f) => f());  // na home: iniciarHeroFusao() (faz nada sem [data-hero-fusao])
      iniciarLinhas();
      iniciarMosaico();
      iniciarSliders();
      ScrollTrigger.refresh();
    });
  }
  // O evento pode disparar antes de este módulo registrar o ouvinte (página em cache).
  if (document.documentElement.classList.contains('pronto')) abrir();
  else window.addEventListener('rocca:pronto', abrir, { once: true });
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}
