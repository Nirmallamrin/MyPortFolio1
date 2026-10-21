import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, useEffect, Suspense } from "react";
import * as random from "maath/random/dist/maath-random.esm";

function StarField(props) {
  const primaryRef = useRef();
  const secondaryRef = useRef();

  // Primary emerald glowing stars
  const [primarySphere] = useState(() =>
    random.inSphere(new Float32Array(4500), { radius: 1.5 })
  );

  // Secondary distant stars for 3D depth parallax
  const [secondarySphere] = useState(() =>
    random.inSphere(new Float32Array(2500), { radius: 1.8 })
  );

  // Smooth motion tracking state
  const motion = useRef({
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    scrollY: 0,
    targetScrollY: 0,
  });

  useEffect(() => {
    const handlePointerMove = (e) => {
      // Normalized cursor coordinates (-1 to 1) from screen center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      motion.current.targetMouseX = x;
      motion.current.targetMouseY = y;
    };

    const handleScroll = () => {
      // Normalized scroll progress across page
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      motion.current.targetScrollY = window.scrollY / maxScroll;
    };

    handleScroll();

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((state, delta) => {
    if (!primaryRef.current) return;

    // Smooth inertia interpolation (lerp)
    const lerpFactor = Math.min(delta * 4.5, 0.12);
    motion.current.mouseX +=
      (motion.current.targetMouseX - motion.current.mouseX) * lerpFactor;
    motion.current.mouseY +=
      (motion.current.targetMouseY - motion.current.mouseY) * lerpFactor;
    motion.current.scrollY +=
      (motion.current.targetScrollY - motion.current.scrollY) * lerpFactor;

    const { mouseX, mouseY, scrollY } = motion.current;

    // Primary layer: responsive tilt to mouse + smooth scroll rotation
    primaryRef.current.rotation.x = -mouseY * 0.3 + scrollY * 0.7;
    primaryRef.current.rotation.y = mouseX * 0.4 + scrollY * 0.5;
    primaryRef.current.position.y = -scrollY * 0.3;
    primaryRef.current.position.z = Math.sin(scrollY * Math.PI) * 0.15;

    // Continuous celestial drift
    primaryRef.current.rotation.z += delta / 65;

    // Secondary layer: slower movement for immersive multi-layer depth
    if (secondaryRef.current) {
      secondaryRef.current.rotation.x = -mouseY * 0.15 + scrollY * 0.35;
      secondaryRef.current.rotation.y = mouseX * 0.2 + scrollY * 0.25;
      secondaryRef.current.position.y = -scrollY * 0.15;
      secondaryRef.current.rotation.z += delta / 95;
    }
  });

  return (
    <>
      {/* Primary emerald constellation */}
      <group rotation={[0, 0, Math.PI / 8]}>
        <Points ref={primaryRef} positions={primarySphere} stride={3} frustumCulled {...props}>
          <PointMaterial
            transparent
            color="#4ade80"
            size={0.0045}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>

      {/* Secondary distant stars for 3D parallax depth */}
      <group rotation={[0, 0, -Math.PI / 10]}>
        <Points ref={secondaryRef} positions={secondarySphere} stride={3} frustumCulled {...props}>
          <PointMaterial
            transparent
            color="#94a3b8"
            size={0.0035}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#000000] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 1.15] }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        className="w-full h-full pointer-events-none"
      >
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
      {/* Subtle ambient overlay to enhance text contrast without cutting off stars */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/70" />
    </div>
  );
}


