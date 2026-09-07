/* Conceito 7 — Letras · main.js
   O wordmark INSTITUTO ROCCA é amostrado do próprio logo (SVG inline), pixel a
   pixel, e vira dezenas de milhares de partículas finas em three.js: nascem
   dispersas, convergem para as letras, respiram, fogem do mouse e voltam; ao
   rolar, dissolvem. Toda a integração acontece no vertex shader (a CPU só
   atualiza uniforms), o que permite muito mais pontos, e menores. */
import * as THREE from 'three';
import { initUI, gsap, ScrollTrigger, revelarHero, esperarFontes, prefersReducedMotion } from '../../shared/ui.js';

initUI({ lenis: true, revelarHero: false, preloader: false });

const VERT = `
attribute vec3 aInicio; attribute vec3 aDir; attribute float aSemente; attribute float aTamanho;
uniform float uPixelRatio, uAlpha, uConverge, uProgresso, uTempo, uEscala;
uniform vec2 uMouse;
varying float vSemente; varying float vAlpha;
void main() {
  float s = aSemente;
  float t = clamp((uConverge - s * 0.35) / 0.65, 0.0, 1.0);
  t = 1.0 - pow(1.0 - t, 3.0);
  vec3 p = mix(aInicio, position, t);
  p.xy += vec2(sin(uTempo * 0.8 + s * 40.0), cos(uTempo * 0.7 + s * 33.0)) * 0.010 * t;
  vec2 d = p.xy - uMouse; float dist = length(d);
  if (dist < 2.0) { float f = 1.0 - dist / 2.0; p.xy += (d / max(dist, 0.001)) * f * f * 1.0 * t; }
  p += aDir * uProgresso * 10.0;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aTamanho * uPixelRatio * (uEscala / -mv.z);
  vSemente = s; vAlpha = uAlpha * (0.55 + 0.45 * fract(s * 7.31));
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

function iniciar() {
  const hero = document.querySelector('.hero--letras');
  const canvas = hero.querySelector('.letras__canvas');
  const fallback = hero.querySelector('.letras__fallback');
  const temWebGL = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } })();
  if (!temWebGL || prefersReducedMotion) { canvas.hidden = true; fallback.hidden = false; return; }

  const fonte = document.getElementById('wordmark-fonte');
  const svgTexto = new XMLSerializer().serializeToString(fonte).replace(' hidden=""', '');
  const img = new Image(); img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgTexto);

  let iniciado = false;
  const depois = () => {
    if (iniciado) return; iniciado = true;
    const mobile = window.innerWidth < 900;
    const pts = amostrarLogo(img, mobile ? 900 : 1900, mobile ? 45000 : 150000);
    const n = pts.length; const W = 20;
    const alvo = new Float32Array(n * 3), inicio = new Float32Array(n * 3);
    const semente = new Float32Array(n), tam = new Float32Array(n), dir = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      alvo[i * 3] = pts[i][0] * W; alvo[i * 3 + 1] = pts[i][1] * W; alvo[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
      const r = W * (0.7 + Math.random() * 0.9), a = Math.random() * Math.PI * 2, b = (Math.random() - 0.5) * Math.PI;
      inicio[i * 3] = Math.cos(a) * Math.cos(b) * r; inicio[i * 3 + 1] = Math.sin(b) * r * 0.6; inicio[i * 3 + 2] = Math.sin(a) * Math.cos(b) * r * 0.4 - 3;
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
      uTempo: { value: 0 }, uEscala: { value: 40 }, uMouse: { value: new THREE.Vector2(1e6, 1e6) },
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
      const fracao = w < 900 ? 0.9 : 0.74;
      const dist = (W / fracao / 2) / (Math.tan(THREE.MathUtils.degToRad(15)) * cam.aspect);
      cam.position.set(0, 0, dist); cam.updateProjectionMatrix();
      visH = 2 * dist * Math.tan(THREE.MathUtils.degToRad(15)); visW = visH * cam.aspect;
      pontos.position.y = visH * 0.08;
      // tamanho em pixels independente da distância da câmera: ~0,6–1,3 px de grão (pó fino)
      uni.uEscala.value = dist * (w < 900 ? 1.35 : 1.5);
    };
    ajustar();
    let tResize; addEventListener('resize', () => { clearTimeout(tResize); tResize = setTimeout(ajustar, 200); });

    const estado = { converge: 0, progresso: 0 };
    const alvoMouse = { x: 1e6, y: 1e6 }, mouse = { x: 1e6, y: 1e6 };
    hero.addEventListener('pointermove', (e) => {
      const r = canvas.getBoundingClientRect();
      alvoMouse.x = ((e.clientX - r.left) / r.width - 0.5) * visW; alvoMouse.y = -((e.clientY - r.top) / r.height - 0.5) * visH - pontos.position.y;
    });
    hero.addEventListener('pointerleave', () => { alvoMouse.x = 1e6; alvoMouse.y = 1e6; });

    const clock = new THREE.Clock(); let ativo = true;
    const passo = () => {
      if (!ativo || document.hidden) return;
      mouse.x += (alvoMouse.x - mouse.x) * 0.12; mouse.y += (alvoMouse.y - mouse.y) * 0.12;
      uni.uMouse.value.set(mouse.x, mouse.y);
      uni.uTempo.value = clock.getElapsedTime();
      uni.uConverge.value = estado.converge; uni.uProgresso.value = estado.progresso;
      uni.uAlpha.value = (0.55 + 0.45 * estado.converge) * (1 - estado.progresso);
      renderer.render(scene, cam);
    };
    renderer.setAnimationLoop(passo);
    gsap.to(estado, { converge: 1, duration: 3.4, ease: 'expo.out', delay: 0.2 });
    // scrub: true — o Lenis já suaviza; um scrub com atraso por cima ficava "de borracha".
    gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: '+=100%', pin: true, scrub: true, onLeave: () => { ativo = false; }, onEnterBack: () => { ativo = true; } } })
      .to(estado, { progresso: 1, ease: 'none' }, 0)
      .to(hero.querySelectorAll('.hero__conteudo, .hero__dica'), { opacity: 0, ease: 'none', duration: 0.4 }, 0);
  };
  img.onload = depois; if (img.complete && img.naturalWidth) depois();
}

window.addEventListener('rocca:pronto', () => {
  esperarFontes(1500).then(() => { iniciar(); gsap.delayedCall(0.9, () => revelarHero()); ScrollTrigger.refresh(); });
}, { once: true });
