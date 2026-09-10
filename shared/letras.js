/* ============================================================================
   Letras: o wordmark INSTITUTO ROCCA escrito com partículas (three.js).
   Amostra o logo (SVG inline) pixel a pixel e integra tudo no vertex shader:
   montagem em varredura em espiral, vida própria, área grande do mouse,
   dissolução por progresso (setProgresso). Usado no 07 (grande, centrado)
   e no 01 (menor, à direita).
   iniciarLetras({ hero, canvas, fallback, fonte, fracao: {desktop, mobile},
     centro: {desktop: [x, y], mobile: [x, y]}  // frações da área visível
     amostra: {desktop: [largura, teto], mobile: [largura, teto]} })
   → { estado, setAtivo, setProgresso } ou null (sem WebGL / reduced-motion).
   ============================================================================ */
import * as THREE from 'three';
import { gsap, prefersReducedMotion } from './ui.js';

const VERT = `
attribute vec3 aInicio; attribute vec3 aDir; attribute float aSemente; attribute float aTamanho;
uniform float uPixelRatio, uAlpha, uConverge, uProgresso, uTempo, uEscala, uRaio, uForca;
uniform vec2 uMouse;
varying float vSemente; varying float vAlpha;
void main() {
  float s = aSemente;
  // Montagem: varre da esquerda para a direita, com sorteio por partícula,
  // e cada ponto chega numa espiral (gira ao redor do centro enquanto converge).
  float ordem = clamp(position.x / 20.0 + 0.5, 0.0, 1.0);
  float t = clamp(uConverge * 1.7 - ordem * 0.5 - s * 0.2, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);
  float ang = (1.0 - t) * 1.6; float ca = cos(ang), sa = sin(ang);
  vec3 ini = aInicio; ini.xy = vec2(ini.x * ca - ini.y * sa, ini.x * sa + ini.y * ca);
  vec3 p = mix(ini, position, t);
  // Vida própria: deriva orgânica em duas oitavas; ~8% são pó solto, com amplitude bem maior.
  float livre = step(0.92, fract(s * 13.7));
  float amp = mix(0.055, 0.9, livre) * t;
  p.xy += vec2(sin(uTempo * 0.9 + s * 40.0) + 0.5 * sin(uTempo * 1.7 + s * 91.0),
               cos(uTempo * 0.8 + s * 33.0) + 0.5 * cos(uTempo * 1.4 + s * 77.0)) * amp;
  p.z += sin(uTempo * 0.6 + s * 20.0) * 0.2 * t;
  // Mouse: área grande, queda suave; as partículas abrem caminho e voltam.
  vec2 d = p.xy - uMouse; float dist = length(d);
  float f = 1.0 - smoothstep(0.0, uRaio, dist);
  p.xy += (d / max(dist, 0.001)) * f * f * uRaio * (0.32 + 0.36 * fract(s * 5.1)) * uForca * t;
  p += aDir * uProgresso * 10.0;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aTamanho * uPixelRatio * (uEscala / -mv.z) * mix(1.0, 1.4, livre);
  vSemente = s;
  vAlpha = uAlpha * (0.55 + 0.45 * fract(s * 7.31)) * (0.78 + 0.22 * sin(uTempo * 1.6 + s * 60.0)) * mix(1.0, 0.55, livre);
}`;
const FRAG = `
precision mediump float; uniform vec3 uCorA, uCorB; varying float vSemente; varying float vAlpha;
void main() {
  float r = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.12, r) * vAlpha;
  if (a < 0.02) discard;
  gl_FragColor = vec4(mix(uCorA, uCorB, step(0.74, vSemente)), a);
}`;

/* Amostra o logo pixel a pixel (passo 1) numa largura dada; devolve pontos
   normalizados pela largura, centrados. Se passar do teto, sorteia. */
/* Amostra um texto (linhas) desenhado com a fonte da marca, na largura dada.
   Cada linha: { t, italico }. Alinhado à esquerda; o bloco é centrado. */
function amostrarTexto(linhas, largura, teto) {
  const fam = '"Semplicita Pro", Jost, sans-serif';
  const medir = document.createElement('canvas').getContext('2d');
  let px = 100, maior = 1;
  linhas.forEach((l) => { medir.font = `${l.italico ? 'italic ' : ''}300 ${px}px ${fam}`; maior = Math.max(maior, medir.measureText(l.t).width); });
  px = Math.floor(px * (largura / maior));
  const lh = Math.round(px * 1.08), w = largura, h = lh * linhas.length + Math.round(px * 0.2);
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  const ctx = cv.getContext('2d', { willReadFrequently: true }); ctx.fillStyle = '#fff'; ctx.textBaseline = 'alphabetic';
  linhas.forEach((l, i) => { ctx.font = `${l.italico ? 'italic ' : ''}300 ${px}px ${fam}`; ctx.fillText(l.t, 0, Math.round(px * 0.92) + i * lh); });
  return amostrarPixels(ctx, w, h, teto);
}
function amostrarPixels(ctx, w, h, teto) {
  const px = ctx.getImageData(0, 0, w, h).data; const pts = [];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const a = px[(y * w + x) * 4 + 3];
    if (a > 60) pts.push([(x - w / 2 + Math.random() - 0.5) / w, -(y - h / 2 + Math.random() - 0.5) / w]);
  }
  if (pts.length > teto) { const p = teto / pts.length; return pts.filter(() => Math.random() < p); }
  return pts;
}
function amostrarLogo(img, largura, teto) {
  const escala = largura / img.naturalWidth;
  const w = Math.round(img.naturalWidth * escala), h = Math.round(img.naturalHeight * escala);
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  const ctx = cv.getContext('2d', { willReadFrequently: true }); ctx.drawImage(img, 0, 0, w, h);
  const px = ctx.getImageData(0, 0, w, h).data; const pts = [];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const a = px[(y * w + x) * 4 + 3];
    if (a > 60) pts.push([(x - w / 2 + Math.random() - 0.5) / w, -(y - h / 2 + Math.random() - 0.5) / w]);
  }
  if (pts.length > teto) { const p = teto / pts.length; return pts.filter(() => Math.random() < p); }
  return pts;
}

export function iniciarLetras(op) {
  const { hero, canvas, fallback, fonte } = op;
  const temWebGL = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } })();
  if (!temWebGL || prefersReducedMotion) { canvas.hidden = true; if (fallback) fallback.hidden = false; return null; }
  const estado = { converge: 0, progresso: 0 }; let ativo = true;

  const img = new Image();
  if (!op.texto) { const svgTexto = new XMLSerializer().serializeToString(fonte).replace(' hidden=""', ''); img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgTexto); }

  let iniciado = false;
  const depois = () => {
    if (iniciado) return; iniciado = true;
    const mobile = window.innerWidth < 900;
    const [larg, teto] = mobile ? op.amostra.mobile : op.amostra.desktop; const pts = op.texto ? amostrarTexto(op.texto, larg, teto) : amostrarLogo(img, larg, teto);
    const n = pts.length; const W = 20;
    const alvo = new Float32Array(n * 3), inicio = new Float32Array(n * 3);
    const semente = new Float32Array(n), tam = new Float32Array(n), dir = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      alvo[i * 3] = pts[i][0] * W; alvo[i * 3 + 1] = pts[i][1] * W; alvo[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
      inicio[i * 3] = (Math.random() - 0.5) * W * 1.7; inicio[i * 3 + 1] = (Math.random() - 0.5) * W * 1.0; inicio[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
      semente[i] = Math.random(); tam[i] = 0.4 + Math.random() * 0.45;
      const dx = inicio[i * 3] - alvo[i * 3], dy = inicio[i * 3 + 1] - alvo[i * 3 + 1] + 4, dz = inicio[i * 3 + 2];
      const L = Math.hypot(dx, dy, dz) || 1; dir[i * 3] = dx / L; dir[i * 3 + 1] = dy / L; dir[i * 3 + 2] = dz / L;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(alvo, 3));
    geo.setAttribute('aInicio', new THREE.BufferAttribute(inicio, 3));
    geo.setAttribute('aDir', new THREE.BufferAttribute(dir, 3));
    geo.setAttribute('aSemente', new THREE.BufferAttribute(semente, 1));
    geo.setAttribute('aTamanho', new THREE.BufferAttribute(tam, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), W * 3);
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const uni = {
      uPixelRatio: { value: dpr }, uAlpha: { value: 0.6 }, uConverge: { value: 0 }, uProgresso: { value: 0 },
      uTempo: { value: 0 }, uEscala: { value: 40 }, uRaio: { value: 4 }, uForca: { value: 0 }, uMouse: { value: new THREE.Vector2(1e6, 1e6) },
      uCorA: { value: new THREE.Color('#F2E8D9') }, uCorB: { value: new THREE.Color('#B8997D') },
    };
    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms: uni, transparent: true, depthWrite: false, depthTest: false });
    const pontos = new THREE.Points(geo, mat); pontos.frustumCulled = false;
    const scene = new THREE.Scene(); scene.add(pontos);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(dpr);
    const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 200);
    let visW = 1, visH = 1;
    const ajustar = () => {
      const w = hero.clientWidth, h = hero.clientHeight; renderer.setSize(w, h, false); cam.aspect = w / h;
      const fracao = w < 900 ? op.fracao.mobile : op.fracao.desktop;
      const dist = (W / fracao / 2) / (Math.tan(THREE.MathUtils.degToRad(15)) * cam.aspect);
      cam.position.set(0, 0, dist); cam.updateProjectionMatrix();
      visH = 2 * dist * Math.tan(THREE.MathUtils.degToRad(15)); visW = visH * cam.aspect;
      const c = w < 900 ? op.centro.mobile : op.centro.desktop; pontos.position.x = visW * c[0]; pontos.position.y = visH * c[1];
      // tamanho em pixels independente da distância da câmera: ~0,6–1,3 px de grão (pó fino)
      uni.uEscala.value = dist * (w < 900 ? 1.35 : 1.5);
      // área de influência do mouse: ~16% da largura visível (no toque, um pouco mais)
      uni.uRaio.value = visW * (w < 900 ? 0.22 : 0.16);
    };
    ajustar();
    let tResize; addEventListener('resize', () => { clearTimeout(tResize); tResize = setTimeout(ajustar, 200); });

    const alvoMouse = { x: 0, y: 0, forca: 0 }, mouse = { x: 0, y: 0, forca: 0 };
    let dentro = false;
    hero.addEventListener('pointermove', (e) => {
      const r = canvas.getBoundingClientRect();
      alvoMouse.x = ((e.clientX - r.left) / r.width - 0.5) * visW - pontos.position.x; alvoMouse.y = -((e.clientY - r.top) / r.height - 0.5) * visH - pontos.position.y;
      if (!dentro) { dentro = true; mouse.x = alvoMouse.x; mouse.y = alvoMouse.y; }
      alvoMouse.forca = 1;
    });
    hero.addEventListener('pointerleave', () => { dentro = false; alvoMouse.forca = 0; });

    const clock = new THREE.Clock();
    const passo = () => {
      if (!ativo || document.hidden) return;
      mouse.x += (alvoMouse.x - mouse.x) * 0.1; mouse.y += (alvoMouse.y - mouse.y) * 0.1; mouse.forca += (alvoMouse.forca - mouse.forca) * 0.08;
      uni.uMouse.value.set(mouse.x, mouse.y); uni.uForca.value = mouse.forca;
      uni.uTempo.value = clock.getElapsedTime();
      uni.uConverge.value = estado.converge; uni.uProgresso.value = estado.progresso;
      uni.uAlpha.value = (0.35 + 0.65 * estado.converge) * (1 - estado.progresso);
      renderer.render(scene, cam);
    };
    renderer.setAnimationLoop(passo);
    // Montagem visível ao carregar: ~2 s, varrendo o wordmark da esquerda para a direita.
    gsap.to(estado, { converge: 1, duration: 2.2, ease: 'power2.inOut', delay: 0.15 });
  };
  if (op.texto) depois(); else { img.onload = depois; if (img.complete && img.naturalWidth) depois(); }
  return { estado, setAtivo: (v) => { ativo = v; }, setProgresso: (p) => { estado.progresso = p; } };
}

