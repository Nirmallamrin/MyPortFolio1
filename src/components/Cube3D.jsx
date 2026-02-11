import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

function Cube() {
  const ref = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.x += (mouse.y * 0.6 - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (mouse.x * 0.6 - ref.current.rotation.y) * 0.05;

    ref.current.position.y = Math.sin(Date.now() * 0.001) * 0.2;
  });

  return (
    <mesh ref={ref} scale={2}>
      <boxGeometry />
      <meshStandardMaterial
        color="#0b0b0b"
        metalness={0.9}
        roughness={0.25}
        emissive="#22c55e"
        emissiveIntensity={0.12}
      />
    </mesh>
  );
}

export default function Cube3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <Cube />
    </Canvas>
  );
}
