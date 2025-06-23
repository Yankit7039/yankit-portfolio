"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Box, Torus, Float } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null)

  return (
    <group ref={groupRef}>
      {/* Floating Sphere */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.5, 32, 32]} position={[-2, 1, 0]}>
          <meshStandardMaterial 
            color="#3B82F6" 
            transparent 
            opacity={0.9}
            metalness={0.2}
            roughness={0.1}
            emissive="#1E40AF"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>

      {/* Floating Cube */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Box args={[0.8, 0.8, 0.8]} position={[2, -1, 0]}>
          <meshStandardMaterial 
            color="#06B6D4" 
            transparent 
            opacity={0.8}
            metalness={0.4}
            roughness={0.1}
            emissive="#0891B2"
            emissiveIntensity={0.3}
          />
        </Box>
      </Float>

      {/* Floating Torus */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={2.5}>
        <Torus args={[0.6, 0.2, 16, 32]} position={[0, 2, 0]}>
          <meshStandardMaterial 
            color="#60A5FA" 
            transparent 
            opacity={0.7}
            metalness={0.3}
            roughness={0.2}
            emissive="#3B82F6"
            emissiveIntensity={0.2}
          />
        </Torus>
      </Float>

      {/* Small floating spheres */}
      <Float speed={4} rotationIntensity={3} floatIntensity={1}>
        <Sphere args={[0.1, 16, 16]} position={[-1, -2, 1]}>
          <meshStandardMaterial 
            color="#22D3EE" 
            transparent 
            opacity={1}
            metalness={0.6}
            roughness={0.1}
            emissive="#06B6D4"
            emissiveIntensity={0.4}
          />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={2} floatIntensity={1.8}>
        <Sphere args={[0.15, 16, 16]} position={[1.5, 0.5, -1]}>
          <meshStandardMaterial 
            color="#3B82F6" 
            transparent 
            opacity={0.9}
            metalness={0.5}
            roughness={0.1}
            emissive="#1E40AF"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>
    </group>
  )
}

export default function ThreeScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 8], fov: 75 }}
      style={{ background: 'transparent' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#3B82F6" />
      <pointLight position={[10, -10, -5]} intensity={0.8} color="#06B6D4" />
      <pointLight position={[0, 10, 0]} intensity={0.6} color="#60A5FA" />

      {/* 3D Shapes */}
      <FloatingShapes />

      {/* Camera Controls - Disabled for background effect */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  )
} 