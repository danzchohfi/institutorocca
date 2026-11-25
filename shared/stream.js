/* ============================================================================
   INSTITUTO ROCCA — stream.js · componente Cloudflare Stream
   ----------------------------------------------------------------------------
   Marcação:
     <div class="stream" data-stream="UID" data-stream-modo="fundo|player|lightbox|alvo"
          data-stream-titulo="…" data-stream-proporcao="16/9|9/16|21/9|3/2">
       <img class="stream__poster" …>  (ou <picture>)      ← poster sempre é um <img> de verdade
       <button class="stream__play" type="button" hidden aria-label="Reproduzir: …">…</button>
       <span class="stream__rotulo">… [PENDENTE]</span>
     </div>
   Sem UID (data-stream="") ou sem STREAM_CONTA no config: classe .stream--sem-id,
   o play fica hidden, o rótulo fica visível e nada é pedido à rede.
   Modos, com UID:
     fundo    → iframe mudo em loop quando o elemento se aproxima da tela (IntersectionObserver);
                não monta com saveData, prefers-reduced-motion ou largura < 900 px (fica o poster).
     player   → mostra o play; no clique monta o iframe no lugar, com controles e som.
     lightbox → mostra o play; o clique abre o <dialog id="filme"> (ui.js) e o iframe é
                montado no .stream de modo "alvo" do dialog, com o UID/título/proporção do abridor.
     alvo     → só no lightbox.html: recebe o iframe ao abrir e o perde ao fechar (o som para).
   Abridores soltos (um <a>/<button> com data-abre-lightbox="#filme") passam data-stream-id="UID"
   + data-stream-titulo, ou data-stream-de="#seletor" para herdar o UID de outro .stream.
   [data-stream-precisa="#seletor"] em qualquer elemento hidden: perde o hidden quando o .stream
   apontado tiver UID (é o que faz "Assistir ao filme" aparecer só quando o filme existir).
   Para teste sem mexer no config: <html data-stream-conta="código">.
   ============================================================================ */
import { prefersReducedMotion } from './ui.js';
import { STREAM_CONTA } from '../src/site/config.mjs';

const $ = (sel, raiz = document) => raiz.querySelector(sel);
const $$ = (sel, raiz = document) => Array.from(raiz.querySelectorAll(sel));

const conta = (document.documentElement.dataset.streamConta || STREAM_CONTA || '').trim();
const base = (uid) => `https://customer-${conta}.cloudflarestream.com/${uid}/iframe`;
const PARAMS = {
  fundo: 'autoplay=true&muted=true&loop=true&controls=false&preload=auto',
  player: 'autoplay=true&controls=true&preload=metadata&primaryColor=%23F2E8D9&letterboxColor=transparent',
};
const PROPORCOES = new Set(['16/9', '9/16', '21/9', '3/2']);

let avisou = false;
function avisarSemConta() {
  if (avisou) return;
  avisou = true;
  console.info('stream.js: há data-stream com UID, mas STREAM_CONTA (src/site/config.mjs) está vazio — fica o poster.');
}

function deveEconomizar() {
  const conexao = navigator.connection;
  return Boolean(conexao && conexao.saveData) || window.innerWidth < 900 || prefersReducedMotion;
}

/** UID utilizável do elemento (vazio quando não há UID ou não há conta). */
function uidDe(el) {
  const uid = (el && el.dataset.stream || '').trim();
  if (uid && !conta) { avisarSemConta(); return ''; }
  return uid;
}

function montarIframe(el, uid, modo, titulo, poster) {
  const f = document.createElement('iframe');
  const extra = poster ? `&poster=${encodeURIComponent(poster)}` : '';
  f.src = `${base(uid)}?${PARAMS[modo === 'fundo' ? 'fundo' : 'player']}${extra}`;
  f.title = titulo || 'Vídeo';
  f.loading = 'lazy';
  f.allow = 'accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture';
  f.allowFullscreen = modo !== 'fundo';
  f.setAttribute('frameborder', '0');
  f.setAttribute('tabindex', modo === 'fundo' ? '-1' : '0');
  if (modo === 'fundo') f.setAttribute('aria-hidden', 'true');
  el.append(f);
  return f;
}

function desmontar(el) {
  $$('iframe', el).forEach((f) => f.remove());
  el.classList.remove('stream--tocando', 'stream--vertical');
  const play = $('.stream__play', el);
  if (play && el.classList.contains('stream--com-id') && el.dataset.streamModo !== 'fundo') play.hidden = false;
  clearTimeout(el.__streamTimer);
}

/* ---- fundo: monta quando se aproxima; remove depois de 10 s fora da tela ------------- */
function iniciarFundo(el, uid) {
  if (deveEconomizar() || !('IntersectionObserver' in window)) { el.classList.add('stream--economia'); return; }
  const montar = () => {
    if ($('iframe', el)) return;
    const f = montarIframe(el, uid, 'fundo', el.dataset.streamTitulo, el.dataset.streamPoster);
    f.addEventListener('load', () => { el.__streamTimer = setTimeout(() => el.classList.add('stream--tocando'), 1200); }, { once: true });
  };
  let fora;
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) { clearTimeout(fora); montar(); }
      else { fora = setTimeout(() => { $$('iframe', el).forEach((f) => f.remove()); el.classList.remove('stream--tocando'); }, 10000); }
    });
  }, { rootMargin: '200px' });
  io.observe(el);
}

/* ---- player: monta no lugar, no clique ---------------------------------------------- */
function iniciarPlayer(el, uid, play) {
  if (!play) return;
  play.hidden = false;
  play.addEventListener('click', () => {
    if ($('iframe', el)) return;
    const f = montarIframe(el, uid, 'player', el.dataset.streamTitulo, el.dataset.streamPoster);
    el.classList.add('stream--tocando');
    play.hidden = true;
    f.addEventListener('load', () => f.focus({ preventScroll: true }), { once: true });
  });
}

/* ---- lightbox: o dialog#filme recebe o vídeo do abridor --------------------------------- */
function iniciarLightbox() {
  const dialog = document.getElementById('filme');
  const alvo = dialog && $('.stream[data-stream-modo="alvo"]', dialog);
  if (!dialog || !alvo) return;
  const legenda = $('[data-stream-legenda]', dialog);
  const legendaOriginal = legenda ? legenda.textContent : '';
  const tituloOriginal = alvo.dataset.streamTitulo || '';

  document.addEventListener('click', (e) => {
    const abridor = e.target.closest('[data-abre-lightbox]');
    if (!abridor || $(abridor.dataset.abreLightbox) !== dialog) return;
    // de onde vem o vídeo: o próprio botão, outro .stream apontado, o .stream que o contém, ou o alvo
    const de = abridor.dataset.streamDe ? $(abridor.dataset.streamDe) : null;
    const dono = abridor.closest('.stream');
    const fonte = de || dono || null;
    const uid = (abridor.dataset.streamId || '').trim() || (fonte ? uidDe(fonte) : '') || uidDe(alvo);
    const titulo = abridor.dataset.streamTitulo || (fonte && fonte.dataset.streamTitulo) || tituloOriginal;
    const proporcao = abridor.dataset.streamProporcao || (fonte && fonte.dataset.streamProporcao) || '16/9';
    desmontar(alvo);
    if (legenda) legenda.textContent = titulo || legendaOriginal;
    alvo.classList.toggle('stream--vertical', proporcao === '9/16');
    if (!uid) return;                      // sem vídeo: o dialog abre com o poster e o rótulo
    montarIframe(alvo, uid, 'player', titulo, alvo.dataset.streamPoster);
    alvo.classList.add('stream--tocando');
  });

  dialog.addEventListener('close', () => {
    desmontar(alvo);
    if (legenda) legenda.textContent = legendaOriginal;
  });
}

/* ---- [data-stream-precisa]: aparece só quando o vídeo apontado existir ----------------- */
function iniciarPrecisa() {
  $$('[data-stream-precisa]').forEach((el) => {
    const alvo = $(el.dataset.streamPrecisa);
    if (alvo && uidDe(alvo)) el.hidden = false;
  });
}

export function iniciarStream() {
  $$('[data-stream]').forEach((el) => {
    const modo = el.dataset.streamModo;
    const play = $('.stream__play', el);
    const uid = uidDe(el);
    const proporcao = el.dataset.streamProporcao;
    if (proporcao && !PROPORCOES.has(proporcao)) console.warn(`stream.js: data-stream-proporcao="${proporcao}" desconhecida (16/9, 9/16, 21/9 ou 3/2).`);
    if (!uid) { el.classList.add('stream--sem-id'); if (play) play.hidden = true; return; }
    el.classList.add('stream--com-id');
    if (modo === 'fundo') iniciarFundo(el, uid);
    else if (modo === 'player') iniciarPlayer(el, uid, play);
    else if (modo === 'lightbox') {
      if (play) { play.hidden = false; if (!play.hasAttribute('data-abre-lightbox')) play.setAttribute('data-abre-lightbox', '#filme'); }
    }
    // 'alvo' não faz nada sozinho: recebe o iframe pelo lightbox
  });
  iniciarLightbox();
  iniciarPrecisa();
}

export default iniciarStream;
