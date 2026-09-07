/* ============================================================================
   Conceito 1 — Matéria · fragment shader: disco suave, creme↔madeira por
   semente, esmaecido para o bordô-profundo conforme a profundidade (fog).
   ============================================================================ */
uniform vec3  uCorA;
uniform vec3  uCorB;
uniform vec3  uFog;
uniform float uOpacidade;

varying float vAlpha;
varying float vSemente;
varying float vFog;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  float disco = 1.0 - smoothstep(0.12, 0.5, d);
  if (disco <= 0.004) discard;
  float mistura = smoothstep(0.12, 0.9, fract(vSemente * 3.71));
  vec3 cor = mix(uCorA, uCorB, mistura);
  cor = mix(uFog, cor, vFog);
  gl_FragColor = vec4(cor, disco * vAlpha * uOpacidade);
}
