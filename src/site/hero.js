/* ============================================================================
   Site final — hero.js · a abertura fundida da home (Letras → clínica → janela)
   ----------------------------------------------------------------------------
   Marcação (src/site/paginas/index.html; CSS base em site/site.css, ajustes em
   site/css/index.css):
     .abertura[data-hero-fusao][data-hero]      a pista (2,5 telas: o hero fica preso por 1,5)
       .hero--fusao                             sticky, 1 tela
         .hero__midia > .hero__quadro           camada 0: .stream--fundo (poster/iframe) + .hero__escurecedor
         #wordmark-fonte · canvas.letras__canvas · img.letras__fallback   camada 1: as partículas
         .hero__conteudo                        camada 2 (estado A): eyebrow, especialidades, chamada
         .hero__frase                           camada 3 (estado B): o H1 + botão do filme
         .hero__alvo                            retângulo invisível: onde a janela termina
     .abertura + .secao (#problema)             sobe uma tela e reserva a janela no padding-top

   Técnica: o pin é CSS (position: sticky) e o scroll nativo dirige um timeline
   pausado por tl.progress(p), com p = (scrollY − topo da pista) ÷ (pista − hero)
   — o mesmo esquema do conceito 03, que já roda bem com o Lenis, sem pin do
   ScrollTrigger (a janela precisa terminar exatamente sobre o topo do bloco 01
   e seguir com ele). Tudo é reversível ao rolar de volta.

   Linha do tempo (p):
     0 → .30   as letras se dissolvem (letras.estado.progresso) e a luz radial some;
     0 → .20   o conteúdo A sobe e some (fica invisível para não roubar cliques);
     .04 → .28 a clínica aparece em cores naturais (escala 1.06 → 1 até .40);
     .10 → .30 o escurecedor da base entra;
     .28 → .52 o H1 entra por linhas (a segunda .06 depois);
     .52 → .62 platô: a frase se lê mesmo em rolagem contínua;
     .62 → .78 a frase sobe e some; o escurecedor sai;
     .62 → 1   FLIP: a mídia encolhe até .hero__alvo (só transforms, sem distorcer).
   Em .35 o loop de render das partículas para (e religa ao voltar).

   O FLIP é o medir()/aplicar() do 03: a camada externa (.hero__midia) recebe
   translate + scaleX/scaleY e vira a janela; a interna (.hero__quadro) recebe
   a contra-escala k/sx, k/sy, então o conteúdo encolhe uniformemente (k) e
   continua centrado. O quadro tem o tamanho da tela (o poster faz cover nele);
   o filme 16:9, quando houver, cobre o quadro por --cobre-w/--cobre-h (CSS).

   Degradado: sem WebGL ou com movimento reduzido iniciarLetras() devolve null
   → .abertura--estatica empilha os dois estados (site.css) e nada disto roda.
   Contrato: iniciarHeroFusao() procura [data-hero-fusao] e devolve
   { letras, timeline } ou null. Não toca em nada fora da abertura.
   ============================================================================ */
import { gsap, ScrollTrigger, revelarHero, splitLinhas } from '../../shared/ui.js';
import { iniciarLetras } from '../../shared/letras.js';

/* posições no progresso (0 → 1): [início, duração] */
const T = {
  letras: [0, 0.30],
  luz: [0, 0.25],
  conteudo: [0, 0.20],
  midia: [0.04, 0.24],
  escala: [0, 0.40],
  escurecedorEntra: [0.10, 0.20],
  frase: [0.28, 0.18],
  fraseStagger: 0.06,
  filme: [0.44, 0.12],
  saida: [0.62, 0.16],
  flip: [0.62, 0.38],
  canvasSome: [0.24, 0.08],   // rede de segurança: o último quadro do canvas some mesmo sem novo render
  desligar: 0.35,
};

const clamp01 = (v) => Math.min(1, Math.max(0, v));
function debounce(fn, ms) { let t; return () => { clearTimeout(t); t = setTimeout(fn, ms); }; }

export function iniciarHeroFusao() {
  const pista = document.querySelector('[data-hero-fusao]');
  if (!pista) return null;

  const hero = pista.querySelector('.hero--fusao');
  const midia = hero && hero.querySelector('.hero__midia');
  const quadro = hero && hero.querySelector('.hero__quadro');
  const stream = quadro && quadro.querySelector('.stream--fundo');
  const escurecedor = quadro && quadro.querySelector('.hero__escurecedor');
  const alvo = hero && hero.querySelector('.hero__alvo');
  const conteudo = hero && hero.querySelector('.hero__conteudo');
  const frase = hero && hero.querySelector('.hero__frase');
  const h1 = frase && frase.querySelector('h1');
  const filme = frase && frase.querySelector('.hero__filme');
  const canvas = hero && hero.querySelector('.letras__canvas');
  const fallback = hero && hero.querySelector('.letras__fallback');
  const fonte = document.getElementById('wordmark-fonte');

  const estatico = () => { pista.classList.add('abertura--estatica'); return null; };
  if (!hero || !midia || !quadro || !stream || !alvo || !conteudo || !frase || !h1 || !canvas || !fonte) return estatico();

  // 1. As partículas. null = sem WebGL ou movimento reduzido: dois blocos empilhados e fim.
  const letras = iniciarLetras({
    hero, canvas, fallback, fonte,
    fracao: { desktop: 0.74, mobile: 0.86 },
    centro: { desktop: [0, 0.10], mobile: [0, 0.22] },   // um pouco acima do meio; no celular, no terço de cima
    amostra: { desktop: [1900, 150000], mobile: [900, 45000] },
  });
  if (!letras) return estatico();

  // 2. O conteúdo do estado A entra depois da montagem começar (como no 07).
  gsap.delayedCall(0.9, () => revelarHero(conteudo));

  // 3. Medidas do FLIP.
  const g = { W: 1, H: 1, x: 0, y: 0, w: 1, h: 1, k: 1 };
  const t = { v: 0 };

  function medir() {
    const W = hero.clientWidth || 1;
    const H = hero.clientHeight || 1;
    const hr = hero.getBoundingClientRect();
    const ar = alvo.getBoundingClientRect();
    Object.assign(g, { W, H, x: ar.left - hr.left, y: ar.top - hr.top, w: ar.width || 1, h: ar.height || 1 });
    g.k = Math.max(g.w / W, g.h / H);
    // o filme 16:9 (quando houver) cobre o quadro: medidas para o CSS do iframe
    hero.style.setProperty('--cobre-w', `${Math.ceil(Math.max(W, (H * 16) / 9))}px`);
    hero.style.setProperty('--cobre-h', `${Math.ceil(Math.max(H, (W * 9) / 16))}px`);
  }

  function aplicar() {
    const p = t.v;
    const sx = 1 + (g.w / g.W - 1) * p;
    const sy = 1 + (g.h / g.H - 1) * p;
    const k = 1 + (g.k - 1) * p;
    const ix = g.W / 2 - (k * g.W) / (2 * sx);
    const iy = g.H / 2 - (k * g.H) / (2 * sy);
    gsap.set(midia, { x: g.x * p, y: g.y * p, scaleX: sx, scaleY: sy, transformOrigin: '0 0' });
    gsap.set(quadro, { x: ix, y: iy, scaleX: k / sx, scaleY: k / sy, transformOrigin: '0 0' });
  }

  // 4. O timeline pausado. Só fromTo com valores explícitos: rebuild e scrub
  //    para trás sempre voltam ao mesmo estado.
  let tl = null;

  function estadoInicial() {
    letras.estado.progresso = 0;
    t.v = 0;
    hero.style.setProperty('--luz', '1');
    gsap.set(conteudo, { autoAlpha: 1, y: 0 });
    gsap.set(frase, { autoAlpha: 0, y: 0 });
    gsap.set(midia, { opacity: 0, x: 0, y: 0, scaleX: 1, scaleY: 1 });
    gsap.set(quadro, { x: 0, y: 0, scaleX: 1, scaleY: 1 });
    gsap.set(stream, { scale: 1.06 });
    gsap.set(canvas, { opacity: 1 });
    if (escurecedor) gsap.set(escurecedor, { opacity: 0 });
  }

  function montar() {
    if (tl) tl.kill();
    if (!h1.classList.contains('split-pronto')) splitLinhas(h1);
    // .revelado solta o translateY(110%) que o base.css põe nas linhas: daqui em diante
    // o transform é só do GSAP (y: 0 explícito, porque o cache dele leu o translate do CSS em px).
    h1.classList.add('revelado');
    const linhas = Array.from(h1.querySelectorAll('.linha__in'));
    estadoInicial();

    tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
    // as letras se dissolvem; a luz radial some com elas
    tl.fromTo(letras.estado, { progresso: 0 }, { progresso: 1, duration: T.letras[1] }, T.letras[0]);
    tl.fromTo(hero, { '--luz': 1 }, { '--luz': 0, duration: T.luz[1] }, T.luz[0]);
    tl.fromTo(canvas, { opacity: 1 }, { opacity: 0, duration: T.canvasSome[1], immediateRender: false }, T.canvasSome[0]);
    // o conteúdo A sobe e some (visibility: hidden no fim, para não roubar cliques)
    tl.fromTo(conteudo, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -40, duration: T.conteudo[1], ease: 'power1.in' }, T.conteudo[0]);
    // a clínica aparece rápido, em cores naturais
    tl.fromTo(midia, { opacity: 0 }, { opacity: 1, duration: T.midia[1], ease: 'power2.out' }, T.midia[0]);
    tl.fromTo(stream, { scale: 1.06 }, { scale: 1, duration: T.escala[1], ease: 'power2.out' }, T.escala[0]);
    if (escurecedor) tl.fromTo(escurecedor, { opacity: 0 }, { opacity: 1, duration: T.escurecedorEntra[1] }, T.escurecedorEntra[0]);
    // a frase entra por linhas; depois o platô
    tl.fromTo(frase, { autoAlpha: 0, y: 0 }, { autoAlpha: 1, y: 0, duration: 0.02 }, T.frase[0] - 0.02);
    if (linhas.length) {
      tl.fromTo(linhas, { y: 0, yPercent: 110, opacity: 0 }, { y: 0, yPercent: 0, opacity: 1, duration: T.frase[1], stagger: T.fraseStagger, ease: 'power3.out' }, T.frase[0]);
    } else {
      tl.fromTo(h1, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: T.frase[1], ease: 'power3.out' }, T.frase[0]);
    }
    if (filme) tl.fromTo(filme, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: T.filme[1], ease: 'power2.out' }, T.filme[0]);
    // a frase sai, o escurecedor sai, a mídia vira a janela
    tl.fromTo(frase, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -56, duration: T.saida[1], ease: 'power1.in', immediateRender: false }, T.saida[0]);
    if (escurecedor) tl.fromTo(escurecedor, { opacity: 1 }, { opacity: 0, duration: T.saida[1], immediateRender: false }, T.saida[0]);
    tl.fromTo(t, { v: 0 }, { v: 1, duration: T.flip[1], ease: 'power2.inOut', onUpdate: aplicar, immediateRender: false }, T.flip[0]);
    return tl;
  }

  // 5. O loop das partículas para quando elas já sumiram (e religa ao voltar).
  //    Desliga um instante depois, para o último quadro renderizado já ser o vazio.
  let letrasAtivas = true;
  let desligando = null;
  function ligarLetras(v) {
    if (v === letrasAtivas) return;
    letrasAtivas = v;
    clearTimeout(desligando);
    if (v) letras.setAtivo(true);
    else desligando = setTimeout(() => { if (!letrasAtivas) letras.setAtivo(false); }, 160);
  }

  // 6. O progresso vem do scroll nativo (o Lenis rola a janela de verdade).
  let topoPista = 0;
  let distancia = 1;
  let ultimo = -1;
  const medirPista = () => {
    topoPista = pista.getBoundingClientRect().top + (window.scrollY || 0);
    distancia = Math.max(1, pista.offsetHeight - hero.offsetHeight);
  };
  const atualizar = () => {
    const p = clamp01(((window.scrollY || 0) - topoPista) / distancia);
    if (p === ultimo) return;
    ultimo = p;
    tl.progress(p);
    ligarLetras(p < T.desligar);
  };

  medir();
  medirPista();
  montar();
  atualizar();

  window.addEventListener('scroll', atualizar, { passive: true });
  ScrollTrigger.addEventListener('refreshInit', () => { medir(); medirPista(); });
  ScrollTrigger.addEventListener('refresh', () => { ultimo = -1; atualizar(); aplicar(); });
  // Depois do re-split do ui.js (200 ms) os nós .linha__in são outros: remonta o timeline.
  window.addEventListener('resize', debounce(() => { medir(); medirPista(); montar(); ultimo = -1; atualizar(); }, 300));

  // o timeline é remontado no resize: quem guardar o objeto lê sempre o atual
  return { letras, get timeline() { return tl; } };
}

export default iniciarHeroFusao;
