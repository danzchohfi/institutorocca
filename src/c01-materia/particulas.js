/* ============================================================================
   Conceito 1 — Matéria · sistema de partículas (three.js)
   ----------------------------------------------------------------------------
   THREE.Points + BufferGeometry + ShaderMaterial próprio. Dois modos:
   - 'seixo'  (hero): esfera de raio 1 deformada por ruído, ~6% das partículas
                      num fio que sobe do topo; converge de um volume 3× maior.
   - 'poeira' (as provas): pontos esparsos, quase estáticos, mesma material.
   Uniforms: uTime, uMouse (espaço da câmera), uProgress (scroll 0→1),
   uConverge (0→1 na abertura), uPixelRatio, uCorA, uCorB, uFog + auxiliares.
   Atributos: aAlvo, aInicio, aSemente, aTamanho, aFio.
   Pausa fora da tela (IntersectionObserver) e com a aba oculta; DPR ≤ 1.5;
   resize com debounce; renderer.setAnimationLoop.
   ============================================================================ */
import * as THREE from 'three';
import vert from './shaders/particulas.vert.glsl';
import frag from './shaders/particulas.frag.glsl';
import { criarAleatorio, criarRuido } from './ruido.js';

// Cores entram como hex sRGB e saem iguais (o shader não faz conversão).
THREE.ColorManagement.enabled = false;

const PADRAO = {
  modo: 'seixo',        // 'seixo' | 'poeira'
  quantidade: 30000,
  fio: 0.06,            // fração das partículas no fio que sobe
  mouse: true,
  forca: 1,             // intensidade da repulsão
  raio: 0.35,           // raio da repulsão (a forma tem raio 1)
  opacidade: 0.9,
  tamanho: 1,           // fator do tamanho base (px)
  ruido: 0.06,          // amplitude da respiração/ondulação
  corA: '#F2E8D9',      // creme
  corB: '#B8997D',      // madeira / areia
  fog: '#3B0000',       // bordô-profundo
  converge: 0,          // valor inicial de uConverge
  dprMax: 1.5,
  rotacao: 0.04,        // rad/s
  respiracao: 0.02,     // ±escala
  periodo: 6,           // s
  altura: 4,            // (poeira) altura visível da cena em unidades
  semente: 7,
};

const FOV = 35;
const TAN = Math.tan(THREE.MathUtils.degToRad(FOV / 2));

export function temWebGL() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl') || c.getContext('experimental-webgl');
    if (!gl) return false;
    const ext = gl.getExtension('WEBGL_lose_context');
    if (ext) ext.loseContext();
    return true;
  } catch (e) {
    return false;
  }
}

function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

export class Particulas {
  constructor(canvas, opcoes = {}) {
    this.canvas = canvas;
    this.o = { ...PADRAO, ...opcoes };
    this.ativo = false;
    this.visivel = true;
    this.destruido = false;
    this.tempo = 0;
    this.progressoAlvo = 0;
    this.mouseAlvo = new THREE.Vector2(99, 99);
    this.visH = 1;
    this.visW = 1;
    this.diamPx = 1;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
      premultipliedAlpha: true,
      stencil: false,
      depth: false,
    });
    this.dpr = Math.min(window.devicePixelRatio || 1, this.o.dprMax);
    this.renderer.setPixelRatio(this.dpr);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.autoClear = true;

    this.cena = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 80);
    this.relogio = new THREE.Clock(false);

    this._construirGeometria();
    this._construirMaterial();
    this.pontos = new THREE.Points(this.geo, this.mat);
    this.pontos.frustumCulled = false;
    if (this.o.modo === 'seixo') {
      this.pontos.rotation.x = 0.14;
      this.pontos.rotation.z = -0.08;
    }
    this.cena.add(this.pontos);

    this._quadro = this._quadro.bind(this);
    this._ajustar();
    this._ligarEventos();
    this.renderer.render(this.cena, this.camera); // primeiro quadro pronto sob o preloader
    this._atualizarLoop();
  }

  /* ---- geometria ---------------------------------------------------------- */
  _construirGeometria() {
    const n = this.o.quantidade;
    const rnd = criarAleatorio(this.o.semente);
    const ruido = criarRuido(this.o.semente + 3);
    const alvo = new Float32Array(n * 3);
    const inicio = new Float32Array(n * 3);
    const semente = new Float32Array(n);
    const tamanho = new Float32Array(n);
    const fio = new Float32Array(n);
    const poeira = this.o.modo === 'poeira';
    const nFio = poeira ? 0 : Math.round(n * this.o.fio);
    const capCos = Math.cos(0.26); // ~15° em torno do topo

    for (let i = 0; i < n; i++) {
      let x, y, z;
      if (poeira) {
        // caixa normalizada [-0.5, 0.5]², profundidade ±1, escalada em _ajustar()
        x = rnd() - 0.5; y = rnd() - 0.5; z = (rnd() - 0.5) * 2;
        alvo[i * 3] = x; alvo[i * 3 + 1] = y; alvo[i * 3 + 2] = z;
        inicio[i * 3] = x; inicio[i * 3 + 1] = y; inicio[i * 3 + 2] = z;
      } else {
        const ehFio = i < nFio;
        let dx, dy, dz, r;
        if (ehFio) {
          const ang = rnd() * Math.PI * 2;
          const phi = Math.acos(1 - rnd() * (1 - capCos));
          dx = Math.sin(phi) * Math.cos(ang); dy = Math.cos(phi); dz = Math.sin(phi) * Math.sin(ang);
          r = 0.86 + rnd() * 0.14;
        } else {
          const u = rnd() * 2 - 1;
          const ang = rnd() * Math.PI * 2;
          const s = Math.sqrt(1 - u * u);
          dx = s * Math.cos(ang); dy = u; dz = s * Math.sin(ang);
          // metade preenche o volume, metade adensa a casca: seixo com silhueta
          r = rnd() < 0.44 ? Math.cbrt(rnd()) : 0.9 + rnd() * 0.1;
        }
        const seixo = 1
          + 0.24 * ruido(dx * 1.05 + 2.1, dy * 1.05 + 5.3, dz * 1.05 + 1.7)
          + 0.06 * ruido(dx * 2.6 + 0.4, dy * 2.6, dz * 2.6 + 9.2);
        r *= seixo;
        alvo[i * 3] = dx * r; alvo[i * 3 + 1] = dy * r; alvo[i * 3 + 2] = dz * r;

        // posição dispersa: volume 3× maior, achatado em z (nada colado na câmera)
        const u2 = rnd() * 2 - 1;
        const ang2 = rnd() * Math.PI * 2;
        const s2 = Math.sqrt(1 - u2 * u2);
        const R = 3.1 * Math.pow(rnd(), 0.45) + 0.2;
        inicio[i * 3] = s2 * Math.cos(ang2) * R * 1.15;
        inicio[i * 3 + 1] = u2 * R;
        inicio[i * 3 + 2] = s2 * Math.sin(ang2) * R * 0.55;
        fio[i] = ehFio ? 1 : 0;
      }
      semente[i] = rnd();
      const t = rnd();
      tamanho[i] = t < 0.03 ? 1.35 + rnd() * 0.85 : 0.5 + Math.pow(rnd(), 1.5) * 0.95;
    }

    const geo = new THREE.BufferGeometry();
    const attrAlvo = new THREE.BufferAttribute(alvo, 3);
    geo.setAttribute('position', attrAlvo); // o renderer conta os vértices por 'position'
    geo.setAttribute('aAlvo', attrAlvo);
    geo.setAttribute('aInicio', new THREE.BufferAttribute(inicio, 3));
    geo.setAttribute('aSemente', new THREE.BufferAttribute(semente, 1));
    geo.setAttribute('aTamanho', new THREE.BufferAttribute(tamanho, 1));
    geo.setAttribute('aFio', new THREE.BufferAttribute(fio, 1));
    this.geo = geo;
    this._alvoBase = poeira ? alvo.slice() : null;
  }

  /* ---- material ----------------------------------------------------------- */
  _construirMaterial() {
    const o = this.o;
    this.uniforms = {
      uTime:       { value: 0 },
      uMouse:      { value: new THREE.Vector2(99, 99) },
      uProgress:   { value: 0 },
      uConverge:   { value: o.converge },
      uPixelRatio: { value: this.dpr },
      uTamanho:    { value: 1 },
      uCamDist:    { value: 6 },
      uRaio:       { value: o.raio },
      uForca:      { value: o.mouse ? o.forca : 0 },
      uRuido:      { value: o.ruido },
      uOpacidade:  { value: o.opacidade },
      uCorA:       { value: new THREE.Color(o.corA) },
      uCorB:       { value: new THREE.Color(o.corB) },
      uFog:        { value: new THREE.Color(o.fog) },
    };
    this.mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.NormalBlending,
    });
  }

  /* ---- câmera, enquadramento e tamanho ------------------------------------ */
  _ajustar() {
    const w = this.canvas.clientWidth || 1;
    const h = this.canvas.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    const aspecto = w / h;
    this.camera.aspect = aspecto;

    let visH, ox = 0, oy = 0;
    if (this.o.modo === 'seixo') {
      const diam = 2.4; // diâmetro da forma com ruído
      if (aspecto >= 1.15) {
        // desktop: texto à esquerda, forma centro-direita, um pouco abaixo do centro
        visH = diam / 0.64;
        ox = (0.71 - 0.5) * visH * aspecto;
        oy = -0.05 * visH;
      } else {
        // mobile / retrato: forma menor, acima do centro; o texto entra por baixo
        const diamPx = Math.min(0.74 * w, 0.44 * h);
        visH = (diam / diamPx) * h;
        ox = 0;
        oy = (0.5 - 0.34) * visH;
      }
      this.diamPx = (diam / visH) * h;
    } else {
      visH = this.o.altura;
      this.diamPx = h;
    }
    this.visH = visH;
    this.visW = visH * aspecto;
    const z = visH / (2 * TAN);
    this.camera.position.set(0, 0, z);
    this.camera.updateProjectionMatrix();
    this.pontos.position.set(ox, oy, 0);

    const u = this.uniforms;
    u.uCamDist.value = z;
    u.uPixelRatio.value = this.dpr;

    if (this.o.modo === 'poeira') {
      // espalha a caixa normalizada pela área visível (com sobra nas bordas)
      const base = this._alvoBase;
      const arr = this.geo.attributes.position.array;
      const sx = this.visW * 1.15, sy = this.visH * 1.2;
      for (let i = 0; i < base.length; i += 3) {
        arr[i] = base[i] * sx; arr[i + 1] = base[i + 1] * sy; arr[i + 2] = base[i + 2];
      }
      this.geo.attributes.position.needsUpdate = true;
      const inicio = this.geo.attributes.aInicio.array;
      inicio.set(arr);
      this.geo.attributes.aInicio.needsUpdate = true;
      u.uTamanho.value = this.o.tamanho * THREE.MathUtils.clamp(h / 900, 0.8, 1.3);
    } else {
      // densidade constante: quanto menos partículas por px², maior o ponto
      const dens = (this.diamPx * this.diamPx) / this.o.quantidade;
      const fator = THREE.MathUtils.clamp(Math.sqrt(dens / 11.06), 0.85, 2.1);
      u.uTamanho.value = this.o.tamanho * 1.3 * fator;
    }
  }

  /* ---- eventos ------------------------------------------------------------ */
  _ligarEventos() {
    this._aoRedimensionar = debounce(() => { if (!this.destruido) this._ajustar(); }, 200);
    window.addEventListener('resize', this._aoRedimensionar);

    if (this.o.mouse) {
      this._aoMover = (e) => {
        const r = this.canvas.getBoundingClientRect();
        if (!r.width || !r.height) return;
        const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
        const ny = -(((e.clientY - r.top) / r.height) * 2 - 1);
        if (nx < -1.05 || nx > 1.05 || ny < -1.05 || ny > 1.05) { this.mouseAlvo.set(99, 99); return; }
        this.mouseAlvo.set((nx * this.visW) / 2, (ny * this.visH) / 2);
      };
      this._aoSair = () => this.mouseAlvo.set(99, 99);
      window.addEventListener('pointermove', this._aoMover, { passive: true });
      document.addEventListener('pointerleave', this._aoSair);
      window.addEventListener('blur', this._aoSair);
    }

    this._aoVisibilidade = () => this._atualizarLoop();
    document.addEventListener('visibilitychange', this._aoVisibilidade);

    if ('IntersectionObserver' in window) {
      this._io = new IntersectionObserver((entradas) => {
        entradas.forEach((en) => { this.visivel = en.isIntersecting; });
        this._atualizarLoop();
      }, { threshold: 0 });
      this._io.observe(this.canvas);
    }
  }

  _atualizarLoop() {
    const deve = !this.destruido && this.visivel && !document.hidden;
    if (deve === this.ativo) return;
    this.ativo = deve;
    if (deve) { this.relogio.start(); this.renderer.setAnimationLoop(this._quadro); }
    else { this.relogio.stop(); this.renderer.setAnimationLoop(null); }
  }

  /* ---- quadro ------------------------------------------------------------- */
  _quadro() {
    const bruto = this.relogio.getDelta();
    const dt = Math.min(bruto, 0.05);      // simulação: sem saltos em quadros perdidos
    const dtReal = Math.min(bruto, 0.25);  // suavizações: acompanham o tempo real
    this.tempo += dt;
    const u = this.uniforms;
    u.uTime.value = this.tempo;

    const k = 1 - Math.pow(0.0015, dtReal); // suavização independente do fps
    u.uMouse.value.lerp(this.mouseAlvo, k);
    u.uProgress.value += (this.progressoAlvo - u.uProgress.value) * (1 - Math.pow(0.00005, dtReal));
    if (Math.abs(this.progressoAlvo - u.uProgress.value) < 0.002) u.uProgress.value = this.progressoAlvo;
    // dissolvido por completo (fora da dobra): não desenha, mas segue vivo para voltar
    if (u.uProgress.value >= 1) return;

    if (this.o.modo === 'seixo') {
      this.pontos.rotation.y += this.o.rotacao * dt;
      const s = 1 + this.o.respiracao * Math.sin((this.tempo * Math.PI * 2) / this.o.periodo);
      this.pontos.scale.setScalar(s);
    }
    this.renderer.render(this.cena, this.camera);
  }

  /* ---- API ---------------------------------------------------------------- */
  setProgress(v) { this.progressoAlvo = THREE.MathUtils.clamp(v, 0, 1); }

  destruir() {
    this.destruido = true;
    this._atualizarLoop();
    window.removeEventListener('resize', this._aoRedimensionar);
    if (this._aoMover) {
      window.removeEventListener('pointermove', this._aoMover);
      document.removeEventListener('pointerleave', this._aoSair);
      window.removeEventListener('blur', this._aoSair);
    }
    document.removeEventListener('visibilitychange', this._aoVisibilidade);
    if (this._io) this._io.disconnect();
    this.geo.dispose();
    this.mat.dispose();
    this.renderer.dispose();
  }
}
