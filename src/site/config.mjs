/* ============================================================================
   Site final — dados em um só lugar.
   ----------------------------------------------------------------------------
   Os dados que o cliente ainda não enviou ficam aqui, uma vez só. Quem lê:
   scripts/site.mjs (preenche os partials e os placeholders dos templates) e
   shared/stream.js (STREAM_CONTA e STREAM_IDS entram no bundle pelo esbuild).
   Trocar aqui e rodar `node scripts/site.mjs && npm run build`.
   O rótulo [PENDENTE] visível fica nos partials: só sai quando a agência
   apagar o texto — decisão consciente, não automática.
   ============================================================================ */

export const WHATS_NUMERO = '5511999999999';                 // [PENDENTE] só dígitos, com o 55
export const WHATS_NUMERO_VISIVEL = '+55 11 99999-9999';     // [PENDENTE] como aparece no fecho e no rodapé
export const WHATS_MSG_PADRAO = 'Olá. Quero agendar uma avaliação no Instituto Rocca.';

/* Cloudflare Stream: código do subdomínio customer-<código>.cloudflarestream.com. [PENDENTE] */
export const STREAM_CONTA = '';

/* UIDs dos vídeos no Stream. Cada chave vira o placeholder {{stream_<chave>}}
   nos templates (vazio enquanto o UID não chegar). [PENDENTE] */
export const STREAM_IDS = {
  institucional: '',   // filme institucional completo, com som (lightbox)
  fundo: '',           // loop mudo da abertura da home (pode ser o mesmo UID do institucional)
  tulio: '',           // Quem eu sou — Dr. Túlio Bovo (9:16)
  breno: '',           // Quem eu sou — Dr. Breno Gondim (9:16)
  ana: '',             // Quem eu sou — Dra. Ana Paula Bovo (9:16)
  casa_tulio: '',      // A casa, por dentro — com o Dr. Túlio Bovo (16:9)
  casa_breno: '',      // A casa, por dentro — com o Dr. Breno Gondim (16:9)
  casa_ana: '',        // A casa, por dentro — com a Dra. Ana Paula Bovo (16:9)
};

export const ANO = '2026';
export const PENDENTE = '[PENDENTE]';                        // o rótulo visível; nunca some sozinho
