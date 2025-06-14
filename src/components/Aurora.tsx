
import { Renderer, Program, Mesh, Color, Geometry } from "ogl";
import { useEffect, useRef } from "react";

const VERT = `#version 300 es
in vec2 position;
out vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

in vec2 vUv;
out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

vec3 mixColors(vec3 color1, vec3 color2, vec3 color3, float factor) {
  if (factor < 0.5) {
    return mix(color1, color2, factor * 2.0);
  } else {
    return mix(color2, color3, (factor - 0.5) * 2.0);
  }
}

void main() {
  vec2 uv = vUv;
  
  // Create flowing aurora pattern
  float noise1 = snoise(vec2(uv.x * 3.0 + uTime * 0.5, uv.y * 2.0 + uTime * 0.3));
  float noise2 = snoise(vec2(uv.x * 2.0 - uTime * 0.3, uv.y * 1.5 + uTime * 0.4));
  
  // Combine noises for more complex pattern
  float combinedNoise = (noise1 + noise2 * 0.5) * 0.5;
  
  // Create aurora waves
  float wave = sin(uv.x * 4.0 + uTime * 2.0 + combinedNoise * 2.0) * 0.3;
  float auroraShape = 1.0 - abs(uv.y - 0.5 - wave);
  auroraShape = pow(max(auroraShape, 0.0), 2.0) * uAmplitude;
  
  // Color mixing based on position and time
  float colorFactor = fract(uv.x * 2.0 + uTime * 0.2 + combinedNoise * 0.5);
  vec3 auroraColor = mixColors(uColorStops[0], uColorStops[1], uColorStops[2], colorFactor);
  
  // Apply intensity and alpha
  float intensity = auroraShape * (0.7 + combinedNoise * 0.3);
  float alpha = smoothstep(0.0, uBlend, intensity);
  
  vec3 finalColor = auroraColor * intensity * 2.0;
  
  fragColor = vec4(finalColor, alpha);
}
`;

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  time?: number;
  speed?: number;
}

export default function Aurora(props: AuroraProps) {
  const {
    colorStops = ["#5227FF", "#7cff67", "#5227FF"],
    amplitude = 1.0,
    blend = 0.5
  } = props;
  const propsRef = useRef(props);
  propsRef.current = props;

  const ctnDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    console.log("Aurora: Initializing WebGL renderer");

    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl) {
      console.error("Aurora: WebGL2 not supported");
      return;
    }

    const renderer = new Renderer({
      canvas,
      alpha: true,
      premultipliedAlpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    
    const rendererGl = renderer.gl;
    rendererGl.clearColor(0, 0, 0, 0);
    rendererGl.enable(rendererGl.BLEND);
    rendererGl.blendFunc(rendererGl.SRC_ALPHA, rendererGl.ONE_MINUS_SRC_ALPHA);
    
    // Style the canvas
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';

    let program: Program;

    function resize() {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      console.log(`Aurora: Resizing to ${width}x${height}`);
      
      if (width > 0 && height > 0) {
        renderer.setSize(width, height);
        if (program) {
          program.uniforms.uResolution.value = [width, height];
        }
      }
    }
    window.addEventListener("resize", resize);

    // Create full-screen quad geometry
    const geometry = new Geometry(rendererGl, {
      position: { 
        size: 2, 
        data: new Float32Array([
          -1, -1,
           1, -1,
          -1,  1,
           1,  1
        ])
      }
    });
    geometry.addIndex({
      data: new Uint16Array([0, 1, 2, 1, 3, 2])
    });

    const colorStopsArray = colorStops.map((hex) => {
      const c = new Color(hex);
      return [c.r, c.g, c.b];
    });

    console.log("Aurora: Creating shader program");
    console.log("Aurora: Color stops:", colorStopsArray);
    
    try {
      program = new Program(rendererGl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          uTime: { value: 0 },
          uAmplitude: { value: amplitude },
          uColorStops: { value: colorStopsArray },
          uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
          uBlend: { value: blend }
        }
      });

      const mesh = new Mesh(rendererGl, { geometry, program });
      ctn.appendChild(canvas);
      console.log("Aurora: Canvas appended to container");

      let animateId = 0;
      const update = (t: number) => {
        animateId = requestAnimationFrame(update);
        const { time = t * 0.001, speed = 1.0 } = propsRef.current;
        
        program.uniforms.uTime.value = time * speed;
        program.uniforms.uAmplitude.value = propsRef.current.amplitude ?? 1.0;
        program.uniforms.uBlend.value = propsRef.current.blend ?? blend;
        
        const stops = propsRef.current.colorStops ?? colorStops;
        program.uniforms.uColorStops.value = stops.map((hex) => {
          const c = new Color(hex);
          return [c.r, c.g, c.b];
        });
        
        renderer.render({ scene: mesh });
      };
      animateId = requestAnimationFrame(update);

      resize();

      return () => {
        console.log("Aurora: Cleaning up");
        cancelAnimationFrame(animateId);
        window.removeEventListener("resize", resize);
        if (ctn && canvas.parentNode === ctn) {
          ctn.removeChild(canvas);
        }
        const ext = rendererGl.getExtension("WEBGL_lose_context");
        if (ext) ext.loseContext();
      };
    } catch (error) {
      console.error("Aurora: Error creating program:", error);
    }
  }, [amplitude, blend]);

  return (
    <div 
      ref={ctnDom} 
      className="absolute inset-0 w-full h-full"
      style={{ 
        width: '100%', 
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }} 
    />
  );
}
