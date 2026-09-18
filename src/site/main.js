/* ============================================================================
   Site final — entrada do bundle (src/site/main.js → site/app.js).
   ----------------------------------------------------------------------------
   Um bundle para as dez páginas. Cada comportamento procura o seu atributo de
   dados e não faz nada se ele não existir (a lista está em src/site/README.md).
   Construtores de página: registram um comportamento novo com uma linha de
   import e uma de chamada dentro de abrir(), e só.
   ============================================================================ */
import { initUI, ScrollTrigger, esperarFontes } from '../../shared/ui.js';
import { iniciarMosaico } from '../../shared/mosaico.js';      // [data-mosaico]
import { iniciarSliders } from '../../shared/slider.js';       // [data-slider]
import { iniciarStream } from '../../shared/stream.js';        // [data-stream], [data-stream-precisa], lightbox
import { iniciarLinhas } from '../c02-chegada/linhas.js';      // [data-linha] (linhas finas que se desenham)
import { iniciarHeroFusao } from './hero.js';                  // [data-hero-fusao] (só a home)

// A home revela o hero por conta própria (hero.js): o ui.js animaria o H1 da
// clínica junto com o conteúdo das Letras.
const temFusao = Boolean(document.querySelector('[data-hero-fusao]'));
initUI({ lenis: true, revelarHero: !temFusao, preloader: false });

// O stream não depende de fontes nem de scroll: liga já (o iframe é preguiçoso por conta própria).
iniciarStream();

function abrir() {
  esperarFontes(1500).then(() => {
    iniciarHeroFusao();          // faz nada sem [data-hero-fusao]
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
