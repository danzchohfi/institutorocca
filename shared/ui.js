/* ============================================================================
   INSTITUTO ROCCA — ui.js
   ----------------------------------------------------------------------------
   Comportamento compartilhado dos três conceitos: Lenis + GSAP/ScrollTrigger,
   nav, menu, reveals, split por linhas, parallax, WhatsApp flutuante, form,
   lightbox, preloader e a sequência do hero.

   Uso (src/<conceito>/main.js):
     import { initUI, gsap, ScrollTrigger, lenis, prefersReducedMotion } from '../../shared/ui.js';
     const ui = initUI({ lenis: true, revelarHero: true, preloader: true });
     window.addEventListener('rocca:pronto', () => { ... coisas do conceito ... });

   Regras de motion (BRIEF §4.4): nada quica, nada pisca; power2/3.out, expo.out;
   reveal = opacity 0→1 + y 24, 1.1 s, stagger .08; títulos revelam por linha.
   ============================================================================ */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export { gsap, ScrollTrigger };

export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Instância do Lenis (ou null em reduced-motion / quando desligado). */
export let lenis = null;

const html = document.documentElement;
let pronto = false;          // 'rocca:pronto' já disparou?
let menuAberto = false;

/* ---------------------------------------------------------------------------
   Utilidades
   --------------------------------------------------------------------------- */
const $ = (sel, raiz = document) => raiz.querySelector(sel);
const $$ = (sel, raiz = document) => Array.from(raiz.querySelectorAll(sel));

function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

/** Promessa que resolve quando as fontes carregam (com teto de tempo). */
export function esperarFontes(teto = 1500) {
  if (!document.fonts || !document.fonts.ready) return Promise.resolve();
  return Promise.race([
    document.fonts.ready,
    new Promise((r) => setTimeout(r, teto)),
  ]);
}

/** Dispara 'rocca:pronto' uma única vez. */
function disparaPronto() {
  if (pronto) return;
  pronto = true;
  html.classList.add('pronto');
  window.dispatchEvent(new CustomEvent('rocca:pronto'));
  ScrollTrigger.refresh();
}

/* ---------------------------------------------------------------------------
   Lenis + ScrollTrigger
   --------------------------------------------------------------------------- */
function iniciarScroll(opcoes) {
  gsap.registerPlugin(ScrollTrigger);
  if (prefersReducedMotion || opcoes.lenis === false) return;

  lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Âncoras internas passam pelo Lenis (respeitando a altura da nav).
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.hasAttribute('data-sem-lenis')) return;
    const id = a.getAttribute('href');
    if (id === '#' || id.length < 2) return;
    const alvo = document.querySelector(id);
    if (!alvo) return;
    e.preventDefault();
    if (menuAberto) fecharMenu();
    lenis.scrollTo(alvo, { offset: 0, duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 3) });
  });
}

/* ---------------------------------------------------------------------------
   Nav: sólida ao rolar; tema claro sob seções data-tema="claro"
   --------------------------------------------------------------------------- */
function iniciarNav() {
  const nav = $('.nav');
  if (!nav) return;

  const atualiza = () => nav.classList.toggle('nav--solida', (window.scrollY || 0) > 40);
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: atualiza });
  atualiza();

  // Contador de seções claras "ativas" sob a nav (evita piscar entre vizinhas).
  let claras = 0;
  const aplica = () => {
    if (claras > 0) html.setAttribute('data-tema', 'claro');
    else html.removeAttribute('data-tema');
  };
  $$('[data-tema="claro"]').forEach((sec) => {
    ScrollTrigger.create({
      trigger: sec,
      start: 'top 60px',
      end: 'bottom 60px',
      onEnter: () => { claras++; aplica(); },
      onEnterBack: () => { claras++; aplica(); },
      onLeave: () => { claras = Math.max(0, claras - 1); aplica(); },
      onLeaveBack: () => { claras = Math.max(0, claras - 1); aplica(); },
    });
  });
}

/* ---------------------------------------------------------------------------
   Menu em tela cheia
   --------------------------------------------------------------------------- */
let botaoMenu, menu, focoAnterior;

export function abrirMenu() {
  if (!menu || menuAberto) return;
  menuAberto = true;
  focoAnterior = document.activeElement;
  menu.classList.add('menu--aberto');
  menu.removeAttribute('inert');
  menu.setAttribute('aria-hidden', 'false');
  html.classList.add('menu-aberto');
  botaoMenu.setAttribute('aria-expanded', 'true');
  const txt = $('.nav__menu-txt', botaoMenu);
  if (txt) { txt.dataset.original = txt.textContent; txt.textContent = 'Fechar'; }
  if (lenis) lenis.stop();
  const primeiro = $('a, button', menu);
  setTimeout(() => primeiro && primeiro.focus({ preventScroll: true }), 80);
}

export function fecharMenu() {
  if (!menu || !menuAberto) return;
  menuAberto = false;
  menu.classList.remove('menu--aberto');
  menu.setAttribute('inert', '');
  menu.setAttribute('aria-hidden', 'true');
  html.classList.remove('menu-aberto');
  botaoMenu.setAttribute('aria-expanded', 'false');
  const txt = $('.nav__menu-txt', botaoMenu);
  if (txt) txt.textContent = txt.dataset.original || 'Menu';
  if (lenis) lenis.start();
  if (focoAnterior && focoAnterior.focus) focoAnterior.focus({ preventScroll: true });
}

function iniciarMenu() {
  botaoMenu = $('.nav__menu');
  menu = $('.menu');
  if (!botaoMenu || !menu) return;
  menu.setAttribute('inert', '');

  botaoMenu.addEventListener('click', () => (menuAberto ? fecharMenu() : abrirMenu()));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menuAberto) fecharMenu(); });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) fecharMenu(); });
  $$('[data-fecha-menu]', menu).forEach((b) => b.addEventListener('click', fecharMenu));
}

/* ---------------------------------------------------------------------------
   Reveals: [data-reveal] em lote e [data-reveal-grupo] > * com stagger
   Itens dentro de [data-hero] ficam para revelarHero().
   --------------------------------------------------------------------------- */
const REVEAL = { duration: 1.1, ease: 'power3.out', stagger: 0.08 };

function foraDoHero(el) { return !el.closest('[data-hero]'); }

function animarReveal(alvos) {
  const lista = Array.isArray(alvos) ? alvos : [alvos];
  if (!lista.length) return;
  lista.forEach((el) => el.classList.add('revelado'));
  if (prefersReducedMotion) { gsap.set(lista, { clearProps: 'all' }); return; }
  const escala = lista.filter((el) => el.dataset.reveal === 'escala');
  const normais = lista.filter((el) => el.dataset.reveal !== 'escala');
  if (normais.length) gsap.fromTo(normais, { opacity: 0, y: 24 }, { opacity: 1, y: 0, ...REVEAL, overwrite: 'auto' });
  if (escala.length) gsap.fromTo(escala, { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out', stagger: 0.08, overwrite: 'auto' });
}

function iniciarReveals() {
  const soltos = $$('[data-reveal]').filter(foraDoHero).filter((el) => !el.parentElement.hasAttribute('data-reveal-grupo'));
  if (prefersReducedMotion) {
    soltos.forEach((el) => el.classList.add('revelado'));
  } else if (soltos.length) {
    ScrollTrigger.batch(soltos, {
      start: 'top 85%',
      once: true,
      onEnter: (lote) => animarReveal(lote),
    });
  }

  $$('[data-reveal-grupo]').filter(foraDoHero).forEach((grupo) => {
    const filhos = Array.from(grupo.children);
    if (prefersReducedMotion) { grupo.classList.add('revelado'); return; }
    ScrollTrigger.create({
      trigger: grupo,
      start: 'top 85%',
      once: true,
      onEnter: () => animarReveal(filhos),
    });
  });
}

/* ---------------------------------------------------------------------------
   Split por linhas (sem plugin): [data-split-linhas]
   1. guarda o HTML original; 2. envolve cada palavra em <span class="palavra">;
   3. mede offsetTop e agrupa por linha; 4. reconstrói cada linha em
      <span class="linha"><span class="linha__in">…</span></span>, clonando os
      wrappers inline (em, strong, .linha-2…) para não perder o itálico.
   --------------------------------------------------------------------------- */
function coletarPalavras(raiz) {
  const palavras = [];
  let espacoPendente = true;
  const percorre = (no, cadeia) => {
    if (no.nodeType === Node.TEXT_NODE) {
      const partes = no.nodeValue.split(/(\s+)/);
      partes.forEach((parte) => {
        if (!parte) return;
        if (/^\s+$/.test(parte)) { espacoPendente = true; return; }
        palavras.push({ texto: parte, cadeia, espacoAntes: espacoPendente, no });
        espacoPendente = false;
      });
      return;
    }
    if (no.nodeType !== Node.ELEMENT_NODE) return;
    if (no.tagName === 'BR') { espacoPendente = true; palavras.push({ quebra: true }); return; }
    Array.from(no.childNodes).forEach((filho) => percorre(filho, cadeia.concat(no)));
  };
  Array.from(raiz.childNodes).forEach((filho) => percorre(filho, []));
  return palavras;
}

function envolverPalavras(raiz) {
  const palavras = coletarPalavras(raiz);
  const grupos = new Map(); // nó de texto → palavras
  palavras.forEach((p) => {
    if (p.quebra) return;
    if (!grupos.has(p.no)) grupos.set(p.no, []);
    grupos.get(p.no).push(p);
  });
  grupos.forEach((lista, no) => {
    const frag = document.createDocumentFragment();
    const partes = no.nodeValue.split(/(\s+)/);
    let i = 0;
    partes.forEach((parte) => {
      if (!parte) return;
      if (/^\s+$/.test(parte)) { frag.append(' '); return; }
      const span = document.createElement('span');
      span.className = 'palavra';
      span.textContent = parte;
      lista[i].span = span;
      i++;
      frag.append(span);
    });
    no.parentNode.replaceChild(frag, no);
  });
  return palavras;
}

function construirLinha(palavras) {
  const linha = document.createElement('span');
  linha.className = 'linha';
  const dentro = document.createElement('span');
  dentro.className = 'linha__in';
  linha.append(dentro);

  let cadeiaAnterior = [];
  let nosAnteriores = [];
  palavras.forEach((p, i) => {
    let container = dentro;
    const nos = [];
    let mesmo = true;
    for (let k = 0; k < p.cadeia.length; k++) {
      if (mesmo && cadeiaAnterior[k] === p.cadeia[k] && nosAnteriores[k]) {
        container = nosAnteriores[k];
      } else {
        mesmo = false;
        const clone = p.cadeia[k].cloneNode(false);
        container.append(clone);
        container = clone;
      }
      nos[k] = container;
    }
    if (i > 0 && p.espacoAntes) container.append(' ');
    container.append(p.texto);
    cadeiaAnterior = p.cadeia;
    nosAnteriores = nos;
  });
  return linha;
}

export function splitLinhas(el) {
  if (!el.__splitOriginal) el.__splitOriginal = el.innerHTML;
  el.innerHTML = el.__splitOriginal;
  el.classList.remove('split-pronto');

  const palavras = envolverPalavras(el);
  const uteis = palavras.filter((p) => !p.quebra && p.span);
  if (!uteis.length) { el.classList.add('split-pronto'); return []; }

  const tolerancia = parseFloat(getComputedStyle(el).fontSize) * 0.5;
  const linhas = [];
  let atual = null;
  let topoAtual = null;
  palavras.forEach((p) => {
    if (p.quebra) { atual = null; return; }
    if (!p.span) return;
    const topo = p.span.offsetTop;
    if (!atual || Math.abs(topo - topoAtual) > tolerancia) {
      atual = [];
      linhas.push(atual);
      topoAtual = topo;
    }
    atual.push(p);
  });

  el.innerHTML = '';
  const nos = linhas.map((l) => construirLinha(l));
  nos.forEach((n) => el.append(n));
  el.classList.add('split-pronto');
  return $$('.linha__in', el);
}

function revelarLinhas(el, atraso = 0) {
  el.classList.add('revelado');
  const linhas = $$('.linha__in', el);
  if (prefersReducedMotion || !linhas.length) { gsap.set(linhas, { clearProps: 'transform' }); return null; }
  return gsap.fromTo(linhas, { yPercent: 110 }, { yPercent: 0, duration: 1.2, ease: 'power3.out', stagger: 0.08, delay: atraso, overwrite: 'auto' });
}

function iniciarSplit() {
  const todos = $$('[data-split-linhas]');
  if (!todos.length) return;

  if (prefersReducedMotion) {
    todos.forEach((el) => el.classList.add('split-pronto', 'revelado'));
    return;
  }

  const dividir = () => {
    todos.forEach((el) => {
      splitLinhas(el);
      if (el.classList.contains('revelado')) gsap.set($$('.linha__in', el), { yPercent: 0 });
    });
    ScrollTrigger.refresh();
  };

  dividir();

  todos.filter(foraDoHero).forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => revelarLinhas(el),
    });
  });

  let larguraAnterior = window.innerWidth;
  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth === larguraAnterior) return;
    larguraAnterior = window.innerWidth;
    dividir();
  }, 200));
}

/* ---------------------------------------------------------------------------
   Parallax: [data-parallax="-8"] → yPercent -8 → +8 com scrub
   --------------------------------------------------------------------------- */
function iniciarParallax() {
  if (prefersReducedMotion) return;
  $$('[data-parallax]').forEach((el) => {
    const v = parseFloat(el.dataset.parallax) || 8;
    const area = el.closest('[data-parallax-area]') || el.parentElement;
    gsap.fromTo(el, { yPercent: -v }, {
      yPercent: v,
      ease: 'none',
      scrollTrigger: { trigger: area, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

/* ---------------------------------------------------------------------------
   Contador simples: <span data-contador="60">0</span>
   --------------------------------------------------------------------------- */
function iniciarContadores() {
  $$('[data-contador]').forEach((el) => {
    const fim = parseFloat(el.dataset.contador);
    if (Number.isNaN(fim)) return;
    const casas = (el.dataset.casas && parseInt(el.dataset.casas, 10)) || 0;
    const fmt = (n) => n.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas });
    if (prefersReducedMotion) { el.textContent = fmt(fim); return; }
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => gsap.to(obj, { v: fim, duration: 1.6, ease: 'power2.out', onUpdate: () => { el.textContent = fmt(obj.v); } }),
    });
  });
}

/* ---------------------------------------------------------------------------
   WhatsApp flutuante: aparece quando [data-hero] sai da tela
   --------------------------------------------------------------------------- */
function iniciarWhats() {
  const whats = $('.whats');
  if (!whats) return;
  const hero = $('[data-hero]');
  if (!hero) { whats.classList.add('whats--visivel'); return; }
  ScrollTrigger.create({
    trigger: hero,
    start: 'bottom 120px',
    onEnter: () => whats.classList.add('whats--visivel'),
    onLeaveBack: () => whats.classList.remove('whats--visivel'),
  });
}

/* ---------------------------------------------------------------------------
   Formulário: validação mínima + estado enviado (sem backend no protótipo)
   --------------------------------------------------------------------------- */
function iniciarForm() {
  $$('.form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const campos = $$('input, textarea', form);
      let valido = true;
      campos.forEach((c) => { c.classList.remove('invalido'); });
      campos.forEach((c) => {
        if (!c.checkValidity()) { valido = false; c.classList.add('invalido'); }
      });
      if (!valido) {
        if (form.reportValidity) form.reportValidity();
        return;
      }
      form.classList.add('form--enviado');
      const sucesso = $('.form__sucesso', form);
      if (sucesso) sucesso.focus({ preventScroll: true });
      ScrollTrigger.refresh();
    });
  });
}

/* ---------------------------------------------------------------------------
   Lightbox: [data-abre-lightbox="#id"] → dialog.showModal()
   --------------------------------------------------------------------------- */
function iniciarLightbox() {
  const abrir = (dialog) => {
    if (!dialog || typeof dialog.showModal !== 'function') return;
    dialog.showModal();
    if (lenis) lenis.stop();
    const video = $('video', dialog);
    if (video) { const p = video.play(); if (p && p.catch) p.catch(() => {}); }
  };
  const fechou = (dialog) => {
    const video = $('video', dialog);
    if (video) video.pause();
    if (lenis && !menuAberto) lenis.start();
  };

  document.addEventListener('click', (e) => {
    const gatilho = e.target.closest('[data-abre-lightbox]');
    if (gatilho) {
      e.preventDefault();
      abrir(document.querySelector(gatilho.dataset.abreLightbox));
      return;
    }
    const fechar = e.target.closest('[data-fecha-lightbox]');
    if (fechar) { const d = fechar.closest('dialog'); if (d) d.close(); }
  });

  $$('dialog.lightbox').forEach((dialog) => {
    dialog.addEventListener('close', () => fechou(dialog));
    // clique no backdrop fecha
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  });
}

/* ---------------------------------------------------------------------------
   Preloader: ≤ 1,2 s, remove do DOM, dispara 'rocca:pronto'
   --------------------------------------------------------------------------- */
function iniciarPreloader(opcoes) {
  const pre = $('.preloader');
  const aoCarregar = (fn) => (document.readyState === 'complete' ? fn() : window.addEventListener('load', fn, { once: true }));

  if (!pre || opcoes.preloader === false || prefersReducedMotion) {
    if (pre) pre.remove();
    aoCarregar(() => esperarFontes(1200).then(disparaPronto));
    return;
  }

  const inicio = performance.now();
  if (lenis) lenis.stop();
  esperarFontes(800).then(() => {
    const decorrido = performance.now() - inicio;
    const espera = Math.max(0, 700 - decorrido);          // deixa a linha crescer
    gsap.to(pre, {
      opacity: 0,
      duration: 0.45,
      ease: 'power2.out',
      delay: espera / 1000,
      onComplete: () => {
        pre.remove();
        if (lenis) lenis.start();
        disparaPronto();
      },
    });
  });
}

/* ---------------------------------------------------------------------------
   Hero: eyebrow → linhas do H1 → sub → botões → resto, em sequência
   --------------------------------------------------------------------------- */
export function revelarHero(container = $('[data-hero]')) {
  if (!container) return null;
  const itens = $$('[data-reveal], [data-split-linhas]', container);
  const grupos = $$('[data-reveal-grupo]', container);
  container.classList.add('hero-revelado');

  if (prefersReducedMotion) {
    itens.forEach((el) => el.classList.add('revelado', 'split-pronto'));
    grupos.forEach((g) => g.classList.add('revelado'));
    gsap.set($$('.linha__in', container), { clearProps: 'transform' });
    return null;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  let t = 0;
  itens.forEach((el) => {
    el.classList.add('revelado');
    if (el.hasAttribute('data-split-linhas')) {
      if (!el.classList.contains('split-pronto')) splitLinhas(el);
      const linhas = $$('.linha__in', el);
      if (linhas.length) tl.fromTo(linhas, { yPercent: 110 }, { yPercent: 0, duration: 1.3, stagger: 0.1, overwrite: 'auto' }, t);
      else tl.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.1, overwrite: 'auto' }, t);
      t += 0.35;
    } else if (el.dataset.reveal === 'escala') {
      tl.fromTo(el, { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1.6, overwrite: 'auto' }, t);
      t += 0.2;
    } else {
      tl.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.1, overwrite: 'auto' }, t);
      t += 0.18;
    }
  });
  grupos.forEach((g) => {
    const filhos = Array.from(g.children);
    filhos.forEach((f) => f.classList.add('revelado'));
    tl.fromTo(filhos, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.1, stagger: 0.08, overwrite: 'auto' }, t);
    t += 0.2;
  });
  return tl;
}

/* ---------------------------------------------------------------------------
   Diversos
   --------------------------------------------------------------------------- */
function iniciarAno() {
  const ano = String(new Date().getFullYear());
  $$('[data-ano]').forEach((el) => { el.textContent = ano; });
}

function iniciarVideosPreguicosos() {
  // Vídeos com data-pausa-fora: pausam fora da tela (economia no mobile).
  if (!('IntersectionObserver' in window)) return;
  const videos = $$('video[data-pausa-fora]');
  if (!videos.length) return;
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) { const p = target.play(); if (p && p.catch) p.catch(() => {}); }
      else target.pause();
    });
  }, { threshold: 0.2 });
  videos.forEach((v) => io.observe(v));
}

/* ---------------------------------------------------------------------------
   initUI
   --------------------------------------------------------------------------- */
export function initUI(opcoes = {}) {
  html.classList.add('js');
  if (prefersReducedMotion) html.classList.add('movimento-reduzido');

  iniciarScroll(opcoes);
  iniciarNav();
  iniciarMenu();
  iniciarAno();
  iniciarForm();
  iniciarLightbox();
  iniciarWhats();
  iniciarContadores();
  iniciarParallax();
  iniciarReveals();
  iniciarVideosPreguicosos();

  // Split precisa das fontes: divide quando elas chegam (ou no teto de tempo).
  esperarFontes(1500).then(() => {
    iniciarSplit();
    ScrollTrigger.refresh();
  });

  if (opcoes.revelarHero !== false) {
    window.addEventListener('rocca:pronto', () => {
      // garante que o split já aconteceu antes de revelar o hero
      esperarFontes(1500).then(() => revelarHero());
    }, { once: true });
  }

  iniciarPreloader(opcoes);
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });

  return { gsap, ScrollTrigger, lenis, abrirMenu, fecharMenu, splitLinhas, revelarHero, esperarFontes };
}

export default initUI;
