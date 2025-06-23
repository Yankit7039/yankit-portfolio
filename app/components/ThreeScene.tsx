"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"

function AnimatedSphere() {
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial color="#3B82F6" attach="material" distort={0.3} speed={1.5} roughness={0.4} />
      </Sphere>
    </Float>
  )
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  )
} 