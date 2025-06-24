import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";
import "./CodeMatrix.css";

interface CodeMatrixProps {
  color?: [number, number, number];
  speed?: number;
  density?: number;
  intensity?: number;
}

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uSpeed;
uniform float uDensity;
uniform float uIntensity;

#define PI 3.1415926538

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 4; i++) {
        value += amplitude * noise(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}

float codeBlock(vec2 uv, vec2 pos, float time) {
    vec2 local = uv - pos;
    float width = 0.15;
    float height = 0.08;
    
    // Code block shape
    float block = smoothstep(width, 0.0, abs(local.x)) * smoothstep(height, 0.0, abs(local.y));
    
    // Code lines
    float lines = 0.0;
    for (int i = 0; i < 5; i++) {
        float y = local.y + height * 0.5 - float(i) * height * 0.2;
        float lineWidth = 0.8 + 0.2 * sin(time * 2.0 + float(i) * 10.0);
        lines += smoothstep(0.01, 0.0, abs(y)) * lineWidth;
    }
    
    // Cursor blink
    float cursor = smoothstep(0.005, 0.0, abs(local.x + 0.05)) * 
                   smoothstep(0.02, 0.0, abs(local.y + 0.02)) * 
                   (0.5 + 0.5 * sin(time * 3.0));
    
    return block * (0.3 + lines * 0.4 + cursor * 0.3);
}

float matrixRain(vec2 uv, float time) {
    float col = floor(uv.x * 20.0);
    float row = floor(uv.y * 30.0 + time * 2.0);
    
    float char = hash(vec2(col, row));
    float alpha = smoothstep(0.1, 0.0, abs(uv.x - col / 20.0));
    alpha *= smoothstep(0.1, 0.0, abs(uv.y - (row - time * 2.0) / 30.0));
    
    return char * alpha * 0.3;
}

float circuit(vec2 uv, float time) {
    float circuit = 0.0;
    
    // Horizontal lines
    for (int i = 0; i < 8; i++) {
        float y = 0.1 + float(i) * 0.12;
        float width = 0.8 + 0.2 * sin(time + float(i) * 0.5);
        circuit += smoothstep(0.02, 0.0, abs(uv.y - y)) * width;
    }
    
    // Vertical lines
    for (int i = 0; i < 6; i++) {
        float x = 0.1 + float(i) * 0.16;
        float height = 0.6 + 0.2 * sin(time * 0.5 + float(i) * 0.3);
        circuit += smoothstep(0.02, 0.0, abs(uv.x - x)) * height;
    }
    
    // Connection nodes
    for (int i = 0; i < 8; i++) {
        for (int j = 0; j < 6; j++) {
            vec2 node = vec2(0.1 + float(j) * 0.16, 0.1 + float(i) * 0.12);
            float dist = distance(uv, node);
            float pulse = sin(time * 2.0 + float(i + j) * 0.5) * 0.5 + 0.5;
            circuit += smoothstep(0.03, 0.0, dist) * pulse * 0.5;
        }
    }
    
    return circuit;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    float time = iTime * uSpeed;
    
    float totalAlpha = 0.0;
    
    // Code blocks
    for (int i = 0; i < 6; i++) {
        float seed = float(i) * 0.3;
        vec2 pos = vec2(
            0.1 + 0.8 * fract(sin(seed * 123.456) * 456.789 + time * 0.02),
            0.1 + 0.8 * fract(cos(seed * 234.567) * 789.012 + time * 0.03)
        );
        
        totalAlpha += codeBlock(uv, pos, time) * uIntensity;
    }
    
    // Matrix rain effect
    totalAlpha += matrixRain(uv, time) * 0.4;
    
    // Circuit pattern
    totalAlpha += circuit(uv, time) * 0.3;
    
    // Add some flowing motion
    vec2 flow = vec2(
        fbm(uv * 2.0 + time * 0.1),
        fbm(uv * 2.0 + vec2(1.0) + time * 0.1)
    );
    
    float flowAlpha = fbm(uv * 1.5 + flow * 0.05 + time * 0.03) * 0.2;
    totalAlpha += flowAlpha;
    
    vec3 color = uColor * totalAlpha;
    fragColor = vec4(color, totalAlpha * 0.95);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

const CodeMatrix: React.FC<CodeMatrixProps> = ({
  color = [0.4, 0.7, 1.0],
  speed = 0.8,
  density = 1.0,
  intensity = 1.0,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        uColor: { value: new Color(...color) },
        uSpeed: { value: speed },
        uDensity: { value: density },
        uIntensity: { value: intensity },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.iResolution.value.r = clientWidth;
      program.uniforms.iResolution.value.g = clientHeight;
      program.uniforms.iResolution.value.b = clientWidth / clientHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    function update(t: number) {
      program.uniforms.iTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      animationFrameId.current = requestAnimationFrame(update);
    }
    animationFrameId.current = requestAnimationFrame(update);

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", resize);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [color, speed, density, intensity]);

  return <div ref={containerRef} className="code-matrix-container" {...rest} />;
};

export default CodeMatrix; 