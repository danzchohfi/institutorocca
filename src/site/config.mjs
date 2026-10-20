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

export const WHATS_NUMERO = '5511993246550';                 // só dígitos, com o 55
export const WHATS_NUMERO_VISIVEL = '+55 11 99324-6550';     // como aparece no fecho e no rodapé
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

/* Domínio público do site, sem barra no fim: og:image, og:url e canonical precisam de URL absoluta
   (WhatsApp, Instagram e LinkedIn não resolvem caminho relativo). O site é publicado na raiz deste
   domínio (scripts/publicar.mjs): a home é <DOMINIO>/ e as internas, <DOMINIO>/<slug>/. */
export const DOMINIO = 'https://www.institutorocca.com.br';

/* Google Tag Manager: o contêiner do site. Vira {{gtm_id}} nos partials head (script, no topo do <head>)
   e skip (noscript, logo depois do <body>). As tags (Analytics, Meta, Google Ads) se configuram no GTM, não aqui. */
export const GTM_ID = 'GTM-T2TRGJSB';

/* O Instituto como entidade: vira os dados estruturados da home (MedicalClinic) e o llms.txt, que é
   como Google, Bing e os assistentes (ChatGPT, Gemini, Copilot) ligam o nome "Instituto Rocca" a este
   site. Endereço e horário são os mesmos do partials/footer.html; mudou lá, muda aqui.
   perfis: as páginas do Instituto fora do site (sameAs). Novo perfil (Google, LinkedIn), entra aqui. */
export const INSTITUTO = {
  rua: 'Av. Indianópolis, 100',
  bairro: 'Moema',
  cidade: 'São Paulo',
  uf: 'SP',
  cep: '04062-000',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Av.+Indian%C3%B3polis%2C+100+-+Moema%2C+S%C3%A3o+Paulo+-+SP%2C+04062-000',
  horarios: [
    { dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '08:00', fecha: '19:00', texto: 'Segunda a sexta, das 8h às 19h' },
    { dias: ['Saturday'], abre: '08:00', fecha: '15:00', texto: 'Sábado, das 8h às 15h' },
  ],
  perfis: [
    'https://www.instagram.com/institutorocca/',
    'https://www.doctoralia.com.br/clinicas/instituto-rocca',
  ],
};

/* IndexNow: avisa o Bing (que alimenta a busca do ChatGPT e do Copilot) a cada publicação, sem esperar
   o robô passar. A chave é pública por definição: o publicar.mjs grava <DOMINIO>/<chave>.txt e o
   scripts/indexnow.mjs envia as URLs do sitemap depois do deploy. */
export const INDEXNOW_CHAVE = 'dc27c25aecef93d607903578c7476185';

export const ANO = '2026';
export const PENDENTE = '[PENDENTE]';                        // o rótulo visível; nunca some sozinho
