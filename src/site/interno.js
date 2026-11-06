/* ============================================================================
   Site final — entrada das páginas internas (src/site/interno.js → site/interno.js).
   ----------------------------------------------------------------------------
   Tudo o que as internas rodam está em comum.js; sem hero.js, o three.js nem
   entra no grafo (~140 KB em vez de ~620 KB). A home usa main.js → site/app.js.
   ============================================================================ */
import { iniciarSite } from './comum.js';

iniciarSite();
