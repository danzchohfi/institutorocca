/* Conceito 7 — Letras · main.js
   O wordmark INSTITUTO ROCCA é amostrado do próprio logo (SVG inline) e vira
   milhares de partículas em three.js: nascem dispersas, convergem para as
   letras, respiram, fogem do mouse e voltam; ao rolar, dissolvem.
   A posição é integrada na CPU (5–8 mil pontos, barato) e o shader só desenha. */
import * as THREE from 'three';
import { initUI, gsap, ScrollTrigger, revelarHero, esperarFontes, prefersReducedMotion } from '../../shared/ui.js';

initUI({ lenis: true, revelarHero: false, preloader: false });

const VERT = `
attribute float aSemente; attribute float aTamanho;
uniform float uPixelRatio, uAlpha;
varying float vSemente; varying float vAlpha;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aTamanho * uPixelRatio * (64.0 / -mv.z);
  vSemente = aSemente; vAlpha = uAlpha;
}`;
const FRAG = `
precision mediump float; uniform vec3 uCorA, uCorB; varying float vSemente; varying float vAlpha;
void main() {
  float r = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.18, r) * vAlpha;
  if (a < 0.02) discard;
  gl_FragColor = vec4(mix(uCorA, uCorB, step(0.72, vSemente)), a);
}`;

function amostrarLogo(img, largura, passo) {
  const escala = largura / img.naturalWidth;
  const w = Math.round(img.naturalWidth * escala), h = Math.round(img.naturalHeight * escala);
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  const ctx = cv.getContext('2d', { willReadFrequently: true }); ctx.drawImage(img, 0, 0, w, h);
  const px = ctx.getImageData(0, 0, w, h).data; const pts = [];
  for (let y = 0; y < h; y += passo) for (let x = 0; x < w; x += passo) {
    if (px[(y * w + x) * 4 + 3] > 120) pts.push([(x - w / 2) / w, -(y - h / 2) / w]);
  }
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
    const pts = amostrarLogo(img, mobile ? 800 : 1500, 2);
    const n = pts.length; const W = 20;
    const alvo = new Float32Array(n * 3), inicio = new Float32Array(n * 3), pos = new Float32Array(n * 3);
    const semente = new Float32Array(n), tam = new Float32Array(n), dir = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      alvo[i * 3] = pts[i][0] * W; alvo[i * 3 + 1] = pts[i][1] * W; alvo[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
      const r = W * (0.7 + Math.random() * 0.9), a = Math.random() * Math.PI * 2, b = (Math.random() - 0.5) * Math.PI;
      inicio[i * 3] = Math.cos(a) * Math.cos(b) * r; inicio[i * 3 + 1] = Math.sin(b) * r * 0.6; inicio[i * 3 + 2] = Math.sin(a) * Math.cos(b) * r * 0.4 - 3;
      semente[i] = Math.random(); tam[i] = 0.8 + Math.random() * 1.3;
      const dx = inicio[i * 3] - alvo[i * 3], dy = inicio[i * 3 + 1] - alvo[i * 3 + 1] + 4, dz = inicio[i * 3 + 2];
      const L = Math.hypot(dx, dy, dz) || 1; dir[i * 3] = dx / L; dir[i * 3 + 1] = dy / L; dir[i * 3 + 2] = dz / L;
      pos[i * 3] = inicio[i * 3]; pos[i * 3 + 1] = inicio[i * 3 + 1]; pos[i * 3 + 2] = inicio[i * 3 + 2];
    }
    const geo = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(pos, 3); posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', posAttr);
    geo.setAttribute('aSemente', new THREE.BufferAttribute(semente, 1));
    geo.setAttribute('aTamanho', new THREE.BufferAttribute(tam, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), W * 3);
    const uni = { uPixelRatio: { value: Math.min(devicePixelRatio, 1.5) }, uAlpha: { value: 0.6 }, uCorA: { value: new THREE.Color('#F2E8D9') }, uCorB: { value: new THREE.Color('#B8997D') } };
    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms: uni, transparent: true, depthWrite: false, depthTest: false });
    const pontos = new THREE.Points(geo, mat); pontos.frustumCulled = false;
    const scene = new THREE.Scene(); scene.add(pontos);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 200);
    let visW = 1, visH = 1;
    const ajustar = () => {
      const w = hero.clientWidth, h = hero.clientHeight; renderer.setSize(w, h, false); cam.aspect = w / h;
      const fracao = w < 900 ? 0.9 : 0.74;
      const dist = (W / fracao / 2) / (Math.tan(THREE.MathUtils.degToRad(15)) * cam.aspect);
      cam.position.set(0, 0, dist); cam.updateProjectionMatrix();
      visH = 2 * dist * Math.tan(THREE.MathUtils.degToRad(15)); visW = visH * cam.aspect;
      pontos.position.y = visH * 0.08;
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
      const tempo = clock.getElapsedTime();
      mouse.x += (alvoMouse.x - mouse.x) * 0.12; mouse.y += (alvoMouse.y - mouse.y) * 0.12;
      const c = estado.converge, p = estado.progresso;
      for (let i = 0; i < n; i++) {
        const s = semente[i];
        let t = Math.min(1, Math.max(0, (c - s * 0.35) / 0.65)); t = 1 - Math.pow(1 - t, 3);
        let x = inicio[i * 3] + (alvo[i * 3] - inicio[i * 3]) * t;
        let y = inicio[i * 3 + 1] + (alvo[i * 3 + 1] - inicio[i * 3 + 1]) * t;
        let z = inicio[i * 3 + 2] + (alvo[i * 3 + 2] - inicio[i * 3 + 2]) * t;
        x += Math.sin(tempo * 0.8 + s * 40) * 0.03 * t; y += Math.cos(tempo * 0.7 + s * 33) * 0.03 * t;
        const dx = x - mouse.x, dy = y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < 6.25) { const d = Math.sqrt(d2) || 0.001; const f = (1 - d / 2.5) * (1 - d / 2.5) * 1.5 * t; x += (dx / d) * f; y += (dy / d) * f; }
        if (p > 0) { x += dir[i * 3] * p * 9; y += dir[i * 3 + 1] * p * 9; z += dir[i * 3 + 2] * p * 9; }
        pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
      }
      posAttr.needsUpdate = true;
      uni.uAlpha.value = (0.5 + 0.5 * c) * (1 - p);
      renderer.render(scene, cam);
    };
    renderer.setAnimationLoop(passo);
    gsap.to(estado, { converge: 1, duration: 3.2, ease: 'expo.out', delay: 0.2 });
    gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: '+=120%', pin: true, scrub: 0.5, anticipatePin: 1, onLeave: () => { ativo = false; }, onEnterBack: () => { ativo = true; } } })
      .to(estado, { progresso: 1, ease: 'none' }, 0)
      .to(hero.querySelectorAll('.hero__conteudo, .hero__dica'), { opacity: 0, ease: 'none', duration: 0.4 }, 0);
  };
  img.onload = depois; if (img.complete && img.naturalWidth) depois();
}

window.addEventListener('rocca:pronto', () => {
  esperarFontes(1500).then(() => { iniciar(); gsap.delayedCall(0.9, () => revelarHero()); ScrollTrigger.refresh(); });
}, { once: true });
