import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function SegmentedCube() {
  const groupRef = useRef();

  // Create 27 cubes for a 3x3x3 grid
  const cubeSegments = useMemo(() => {
    const cubes = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          cubes.push({ position: [x * 1.05, y * 1.05, z * 1.05] });
        }
      }
    }
    return cubes;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Smooth auto-rotation
    groupRef.current.rotation.x = Math.sin(time * 0.4) * 0.2;
    groupRef.current.rotation.y = time * 0.3;

    // Subtle floating animation
    groupRef.current.position.y = Math.sin(time) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {cubeSegments.map((cube, i) => (
        <mesh key={i} position={cube.position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#111111"
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Cube3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22c55e" />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1} />
        <SegmentedCube />
      </Canvas>
    </div>
  );
}
