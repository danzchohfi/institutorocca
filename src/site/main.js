/* ============================================================================
   Site final — entrada da home (src/site/main.js → site/app.js).
   ----------------------------------------------------------------------------
   O corpo comum a todas as páginas está em comum.js; a home acrescenta a
   abertura fundida (hero.js, que traz o three.js). As internas usam interno.js
   → site/interno.js, sem o three.js. Comportamento novo: registre em comum.js.
   ============================================================================ */
import { iniciarSite } from './comum.js';
import { iniciarHeroFusao } from './hero.js';                  // [data-hero-fusao] (só a home)

iniciarSite([iniciarHeroFusao]);
