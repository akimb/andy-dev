"use client";
import { ReactNode, useEffect, useRef } from "react";
import * as THREE from "three";

interface BackgroundShaderProps {
  children?: ReactNode;
}

export default function BackgroundShader({ children }: BackgroundShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "fixed";  // full screen
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1";        // ensure behind
    renderer.domElement.style.pointerEvents = "none"; // allows clicks to pass through
    container.appendChild(renderer.domElement);

    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      filmGrainIntensity: { value: 0.1 },
      float_speed: { value: 2.0 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform float filmGrainIntensity;
        uniform float float_speed;

        mat2 Rot(float a) {
          float s = sin(a);
          float c = cos(a);
          return mat2(c, s, -s, c);
        }

        vec2 hash(vec2 p) {
          p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37)));
          return fract(sin(p) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f*f*(3.0-2.0*f);
          float n = mix(
            mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)), f-vec2(0.0,0.0)),
                dot(-1.0+2.0*hash(i+vec2(1.0,0.0)), f-vec2(1.0,0.0)), u.x),
            mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)), f-vec2(0.0,1.0)),
                dot(-1.0+2.0*hash(i+vec2(1.0,1.0)), f-vec2(1.0,1.0)), u.x),
            u.y
          );
          return 0.5+0.5*n;
        }

        float filmGrainNoise(vec2 uv) { return length(hash(uv)); }

        void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          float aspectRatio = (u_resolution.x / u_resolution.y)/5.0;
          vec2 tuv = uv - 0.5;

          float degree = noise(vec2(u_time*0.05, tuv.x*tuv.y));
          tuv.y *= 1.0/aspectRatio;
          tuv = Rot(radians((degree-0.5)*720.0+180.0))*tuv;
          tuv.y *= aspectRatio;

          float frequency = 5.0;
          float amplitude = 30.0;
          float speed = u_time * float_speed;
          tuv.x += sin(tuv.y*frequency + speed)/amplitude;
          tuv.y += sin(tuv.x*frequency*1.5 + speed)/(amplitude*0.5);

          float cycle = sin(u_time*0.5);
          float t = (sign(cycle)*pow(abs(cycle),0.6)+1.0)/2.0;

        //   vec3 color1 = vec3(t, 0.2, 0.6);
        //   vec3 color2 = vec3(0.2, 0.6, t);
          vec3 color1 = vec3(1.0, 1.0, 1.0);
          vec3 color2 = vec3(186.0/255.0, 1.0, 252.0/255.0);
          vec3 color3 = vec3(1.0, 243.0/255.0, 135.0/255.0);
          vec3 color4 = vec3(243.0/255.0, 189.0/255.0, 1.0);

          vec2 tilted = Rot(radians(-5.0))*tuv;
          vec3 layer1 = mix(color1, color2, smoothstep(-0.3,0.2,tilted.x));
          vec3 layer2 = mix(color3, color4, smoothstep(-0.3,0.2,tilted.x));
          vec3 color = mix(layer1, layer2, smoothstep(0.5,-0.3,tuv.y));

          color -= filmGrainNoise(uv)*filmGrainIntensity;

          gl_FragColor = vec4(clamp(color,0.0,1.0),1.0);
        }
      `,
    });

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2,2), material);
    scene.add(quad);

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return(
    <>
        <div ref={containerRef} className="fixed inset-0 -z-0" />
        {children}
    </>
  );
}