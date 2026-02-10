import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, Suspense } from "react";
import * as random from "maath/random/dist/maath-random.esm";

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    // Smooth mouse follow
    const targetX = state.mouse.y * 0.2;
    const targetY = state.mouse.x * 0.2;

    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.1;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.1;

    // Constant slow rotation
    ref.current.rotation.z += delta / 30;
  });



  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#4ade80"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#000000]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000000]" />
    </div>
  );
}

