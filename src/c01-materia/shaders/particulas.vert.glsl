/* ============================================================================
   Conceito 1 — Matéria · vertex shader das partículas
   "O que se dispersou volta ao lugar": cada ponto sai de aInicio (volume 3×)
   e converge para aAlvo (seixo orgânico) conforme uConverge; respira com ruído
   simplex 3D animado por uTime; foge do mouse (uMouse, espaço da câmera) e se
   dissolve para cima com o scroll (uProgress). Um subconjunto (aFio = 1) sobe
   do topo da forma como poeira de luz, em ciclo.
   ============================================================================ */
uniform float uTime;
uniform vec2  uMouse;
uniform float uProgress;
uniform float uConverge;
uniform float uPixelRatio;
uniform float uTamanho;
uniform float uCamDist;
uniform float uRaio;
uniform float uForca;
uniform float uRuido;

attribute vec3  aAlvo;
attribute vec3  aInicio;
attribute float aSemente;
attribute float aTamanho;
attribute float aFio;

varying float vAlpha;
varying float vSemente;
varying float vFog;

/* ---- simplex noise 3D (Ashima Arts / Stefan Gustavson, MIT) ------------- */
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g  = step(x0.yzx, x0.xyz);
  vec3 l  = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j  = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x  = x_ * ns.x + ns.yyyy;
  vec4 y  = y_ * ns.x + ns.yyyy;
  vec4 h  = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

void main() {
  /* convergência escalonada: quem está mais longe (e uma parte ao acaso) chega depois */
  float atraso = aSemente * 0.22 + min(length(aInicio) * 0.07, 0.24);
  float c = clamp((uConverge - atraso) / (1.0 - atraso), 0.0, 1.0);
  c = c * c * (3.0 - 2.0 * c);

  vec3 alvo = aAlvo;
  float alphaFio = 1.0;

  /* fio de poeira que sobe do topo (trajetória reciclada) */
  if (aFio > 0.5) {
    float vel = 0.6 + 0.8 * fract(aSemente * 7.31);
    float t = fract(aSemente * 13.7 + uTime * 0.06 * vel);
    float s = aSemente * 6.2831;
    vec3 deriva = vec3(
      snoise(vec3(s, uTime * 0.16, 1.7)),
      0.0,
      snoise(vec3(2.9, s, uTime * 0.16))
    ) * (0.03 + t * 0.45);
    alvo = aAlvo + vec3(0.0, t * 1.5, 0.0) + deriva;
    alphaFio = smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.3, 1.0, t)) * 0.6;
  }

  /* respiração e ondulação lenta da superfície */
  vec3 dir = normalize(alvo + vec3(1e-4, 2e-4, 3e-4));
  float n1 = snoise(alvo * 1.5 + vec3(0.0, uTime * 0.08, uTime * 0.05));
  vec3 forma = alvo + dir * n1 * uRuido;
  forma += vec3(
    snoise(alvo * 2.4 + vec3(uTime * 0.06, 0.0, 3.3)),
    snoise(alvo * 2.4 + vec3(0.0, uTime * 0.05, 7.1)),
    snoise(alvo * 2.4 + vec3(5.5, 0.0, uTime * 0.07))
  ) * uRuido * 0.45;

  /* dispersão pelo scroll: expande radialmente e sobe */
  float p = uProgress;
  float pe = p * p;
  forma += dir * pe * 2.4 + vec3(0.0, p * 3.0 * (0.55 + 0.45 * aSemente), 0.0);

  vec3 pos = mix(aInicio, forma, c);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);

  /* repulsão suave do mouse (espaço da câmera) */
  vec2 d = mv.xy - uMouse;
  float dist = length(d);
  float f = 1.0 - smoothstep(0.0, uRaio, dist);
  f *= f;
  float forca = uForca * smoothstep(0.75, 1.0, uConverge);
  mv.xy += (d / max(dist, 1e-4)) * f * uRaio * 0.75 * forca;

  gl_Position = projectionMatrix * mv;

  float prof = -mv.z;
  float rel = clamp((prof - uCamDist) / 1.3, -1.0, 1.0);
  vFog = 1.0 - smoothstep(-0.35, 1.0, rel) * 0.82;

  float tam = aTamanho * uTamanho * uPixelRatio * (uCamDist / max(prof, 0.5));
  gl_PointSize = clamp(tam, 0.75 * uPixelRatio, 22.0 * uPixelRatio);

  float alphaConv = mix(0.45, 1.0, c);
  vAlpha = alphaFio * alphaConv * (1.0 - smoothstep(0.0, 0.85, p));
  vSemente = aSemente;
}
