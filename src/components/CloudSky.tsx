import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const fragmentShader = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;

vec2 hash22(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  q += dot(q, q.yzx + 33.33);
  return fract((q.xx + q.yz) * q.zy);
}
float hash12(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float value = 0.0, amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p);
    p *= 2.03;
    amplitude *= 0.5;
  }
  return value;
}
float cloudLayer(vec2 p, float seed, float scale) {
  vec2 uv = p * scale;
  vec2 cell = floor(uv), f = fract(uv);
  float shape = -10.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 h = hash22(cell + offset + seed);
      if (h.x > 0.68) continue;
      vec2 center = offset + 0.15 + h * 0.7;
      vec2 d = f - center;
      float width = 0.45 + h.y * 0.42;
      float height = d.y > 0.0 ? 0.33 : 0.19;
      float puff = 1.0 - length(vec2(d.x / width, d.y / height));
      shape = max(shape, puff);
    }
  }
  float detail = fbm(uv * 2.6 + seed * 4.0) * 0.72
               + fbm(uv * 8.0 + seed * 9.0) * 0.28;
  return shape - (1.0 - detail) * 0.64;
}
void main() {
  vec2 p = gl_FragCoord.xy / max(u_resolution.y, 1.0);
  float aspect = u_resolution.x / max(u_resolution.y, 1.0);
  vec3 sky = mix(vec3(0.71, 0.82, 0.94), vec3(0.0, 0.46, 1.0), smoothstep(0.0, 0.9, p.y));
  vec2 sun = vec2(aspect * 0.78, 0.92);
  float glow = exp(-length(p - sun) * 3.4) * 0.25;
  sky += vec3(0.88, 0.94, 1.0) * glow;

  float drift = u_time * 0.012;
  vec2 farUV = vec2(p.x + drift * 0.45, p.y);
  float farCloud = clamp(cloudLayer(farUV, 17.0, 2.15) * 4.0, 0.0, 1.0);
  float farBand = smoothstep(0.08, 0.30, p.y) * (1.0 - smoothstep(0.72, 0.94, p.y));
  vec3 farColor = mix(vec3(0.95), sky, 0.45);
  vec3 color = mix(sky, farColor, farCloud * farBand * 0.72);

  vec2 nearUV = vec2(p.x + drift, p.y);
  float nearCloud = clamp(cloudLayer(nearUV, 3.0, 1.05) * 4.5, 0.0, 1.0);
  float nearBand = smoothstep(0.02, 0.18, p.y) * (1.0 - smoothstep(0.55, 0.78, p.y));
  float cloudAlpha = nearCloud * nearBand;
  float underside = smoothstep(0.05, 0.65, p.y);
  vec3 cloud = mix(vec3(0.73, 0.82, 0.92), vec3(1.0), underside);
  color = mix(color, cloud, cloudAlpha);
  gl_FragColor = vec4(color, 1.0);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("CloudSky shader:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

/** Animated, responsive cloud-sky background for the not-found page. */
export default function CloudSky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { alpha: false, antialias: false });
    if (!canvas || !gl) return;

    const vertex = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return;
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("CloudSky program:", gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    if (!buffer) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const resolution = gl.getUniformLocation(program, "u_resolution");
    const time = gl.getUniformLocation(program, "u_time");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let start = 0;

    const render = (now: number) => {
      if (!start) start = now;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const height = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
      gl.uniform2f(resolution, width, height);
      gl.uniform1f(time, reduceMotion ? 0 : (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduceMotion) frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ display: "block" }}
    />
  );
}
