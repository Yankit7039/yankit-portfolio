"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Html, Environment, Sparkles } from "@react-three/drei"
import { useRef, useState, useMemo, useEffect } from "react"
import * as THREE from "three"

// Enhanced Particle System with Multiple Effects
function AdvancedParticleSystem() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particleCount = 1000
  
  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const col = new Float32Array(particleCount * 3)
    const size = new Float32Array(particleCount)
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      // Create particle clusters
      const cluster = Math.floor(i / (particleCount / 5))
      const clusterCenter = [
        (cluster - 2) * 8,
        Math.sin(cluster) * 5,
        Math.cos(cluster) * 5
      ]
      
      pos[i3] = clusterCenter[0] + (Math.random() - 0.5) * 6
      pos[i3 + 1] = clusterCenter[1] + (Math.random() - 0.5) * 6
      pos[i3 + 2] = clusterCenter[2] + (Math.random() - 0.5) * 6
      
      // Color based on cluster (tech theme)
      const hue = (cluster * 60 + 180) % 360
      const color = new THREE.Color().setHSL(hue / 360, 0.8, 0.6)
      col[i3] = color.r
      col[i3 + 1] = color.g
      col[i3 + 2] = color.b
      
      size[i] = Math.random() * 0.1 + 0.05
    }
    return { positions: pos, colors: col, sizes: size }
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      const colors = particlesRef.current.geometry.attributes.color.array as Float32Array
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        // Complex orbital motion
        const radius = 2 + Math.sin(time * 0.5 + i * 0.01) * 1
        const speed = 0.2 + (i % 10) * 0.05
        
        positions[i3] += Math.sin(time * speed + i) * 0.02
        positions[i3 + 1] += Math.cos(time * speed + i * 0.5) * 0.02
        positions[i3 + 2] += Math.sin(time * 0.3 + i * 0.1) * 0.01
        
        // Dynamic color shifting
        const intensity = 0.5 + 0.5 * Math.sin(time * 2 + i * 0.1)
        colors[i3] *= intensity
        colors[i3 + 1] *= intensity
        colors[i3 + 2] *= intensity
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true
      particlesRef.current.geometry.attributes.color.needsUpdate = true
      particlesRef.current.rotation.y = time * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={particleCount} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        transparent
        opacity={0.8}
        sizeAttenuation
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Dynamic Code Terminal with Real Code Snippets
function LiveCodeTerminal({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [currentCode, setCurrentCode] = useState(0)
  
  const codeSnippets = [
    { 
      title: "React Component", 
      code: `const Portfolio = () => {\n  const [skills] = useState([\n    'React', 'Node.js', 'Python'\n  ]);\n  return <div>{skills}</div>\n}`,
      color: "#61DAFB"
    },
    { 
      title: "Python ML", 
      code: `import numpy as np\nfrom sklearn.model_selection import train_test_split\n\nX_train, X_test = train_test_split(\n  data, test_size=0.2\n)\nmodel.fit(X_train, y_train)`,
      color: "#3776AB"
    },
    { 
      title: "Node.js API", 
      code: `app.post('/api/data', async (req, res) => {\n  try {\n    const result = await db.collection\n      .insertOne(req.body);\n    res.json(result);\n  } catch (err) {\n    res.status(500).send(err);\n  }\n});`,
      color: "#339933"
    },
    { 
      title: "IoT Arduino", 
      code: `#include <WiFi.h>\n#include <DHT.h>\n\nvoid setup() {\n  dht.begin();\n  WiFi.begin(ssid, password);\n}\n\nvoid loop() {\n  float temp = dht.readTemperature();\n  sendToAPI(temp);\n}`,
      color: "#00979D"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
      <group position={position}>
        <mesh ref={meshRef}>
          <boxGeometry args={[4, 2.5, 0.2]} />
          <meshStandardMaterial 
            color="#1a1a1a"
            transparent 
            opacity={0.9}
            metalness={0.8}
            roughness={0.2}
            emissive="#000000"
          />
        </mesh>
        
        <Html position={[0, 0, 0.11]} transform>
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg p-4 text-xs font-mono text-white w-80 h-48 overflow-hidden">
            <div className="flex items-center gap-2 mb-3 border-b border-gray-700 pb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-gray-400">{codeSnippets[currentCode].title}</span>
            </div>
            <pre className="text-green-400 text-xs leading-relaxed animate-pulse">
              {codeSnippets[currentCode].code}
            </pre>
            <div className="mt-2 text-blue-400 animate-blink">|</div>
          </div>
        </Html>
      </group>
    </Float>
  )
}

// Dynamic Skills Constellation
function SkillsConstellation() {
  const groupRef = useRef<THREE.Group>(null)
  
  const skills = [
    { name: "", level: 90, position: [0, 0, 0], color: "#61DAFB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "", level: 85, position: [2.5, 0.8, 0], color: "#339933", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "", level: 88, position: [-2.5, 0.8, 0], color: "#3776AB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "", level: 80, position: [1.8, -1.5, 0], color: "#47A248", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "", level: 85, position: [-1.8, -1.5, 0], color: "#000000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "", level: 70, position: [3, -0.8, 0], color: "#009688", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "", level: 85, position: [0, 1.5, 0], color: "#F7DF1E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "", level: 80, position: [-3, -0.8, 0], color: "#F05032", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
  ]

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime
      groupRef.current.rotation.y = time * 0.1
      
      // Individual skill orb animations
      groupRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.y = time * 0.5 + i
          child.rotation.z = Math.sin(time + i) * 0.2
          const scale = 1 + Math.sin(time * 2 + i) * 0.1
          child.scale.setScalar(scale)
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <Float key={skill.name} speed={1 + i * 0.1} rotationIntensity={0.5} floatIntensity={1.5}>
          <group position={skill.position}>
            <mesh>
              <sphereGeometry args={[0.25 + skill.level * 0.003, 32, 32]} />
              <meshStandardMaterial 
                color={skill.color}
                transparent 
                opacity={0.8}
                metalness={0.6}
                roughness={0.1}
                emissive={skill.color}
                emissiveIntensity={0.3}
              />
            </mesh>
            
            <Html position={[0, -0.5, 0] as [number, number, number]} center>
              <div className="text-white text-xs font-bold bg-black/70 px-2 py-1 rounded backdrop-blur-sm">
                <div className="w-6 h-6 mb-1 flex items-center justify-center">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </Html>
            
            {/* Skill level ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.35, 0.4, 32]} />
              <meshBasicMaterial 
                color={skill.color} 
                transparent 
                opacity={0.6}
              />
            </mesh>
          </group>
        </Float>
      ))}
      
      {/* Connection lines between skills */}
      {skills.map((skill, i) => 
        skills.slice(i + 1).map((otherSkill, j) => (
          <line key={`${i}-${j}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([
                  skill.position[0], skill.position[1], skill.position[2],
                  otherSkill.position[0], otherSkill.position[1], otherSkill.position[2]
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial 
              color="#60A5FA" 
              transparent 
              opacity={0.2}
              linewidth={1}
            />
          </line>
        ))
      )}
    </group>
  )
}

// Project Showcase Carousel
function ProjectShowcase({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)
  const [currentProject, setCurrentProject] = useState(0)
  
  const projects = [
    {
      name: "SmartSoil IoT",
      description: "ESP8266 • Sensors • Arduino • Python",
      achievement: "40% Water Savings",
      color: "#4ECDC4",
      icon: "🌱"
    },
    {
      name: "ReelNest Platform",
      description: "NextJS • MongoDB • REST API • Vercel",
      achievement: "200+ Posts Managed",
      color: "#45B7D1",
      icon: "🎬"
    },
    {
      name: "TextUtil App",
      description: "React • Bootstrap • JavaScript",
      achievement: "Global Deployment",
      color: "#61DAFB",
      icon: "📝"
    },
    {
      name: "DSA Mastery",
      description: "700+ Problems Solved",
      achievement: "LeetCode: 1513",
      color: "#FFD700",
      icon: "🧠"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.1
      groupRef.current.position.y = position[1] + Math.sin(time * 0.4) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={2}>
      <group ref={groupRef} position={position}>
        <mesh>
          <cylinderGeometry args={[2, 2, 0.3, 32]} />
          <meshStandardMaterial 
            color={projects[currentProject].color}
            transparent 
            opacity={0.8}
            metalness={0.7}
            roughness={0.1}
            emissive={projects[currentProject].color}
            emissiveIntensity={0.2}
          />
        </mesh>
        
        <Html position={[0, 0, 0.2]} transform>
          <div className="text-center">
            <div className="text-4xl mb-2">{projects[currentProject].icon}</div>
            <div className="text-white font-bold text-lg mb-1">
              {projects[currentProject].name}
            </div>
            <div className="text-gray-300 text-sm mb-2">
              {projects[currentProject].description}
            </div>
            <div className="text-yellow-400 font-bold text-sm">
              {projects[currentProject].achievement}
            </div>
          </div>
        </Html>
        
        {/* Project indicators */}
        {projects.map((_, i) => (
          <mesh 
            key={i} 
            position={[
              Math.cos(i * Math.PI / 2) * 2.5,
              0,
              Math.sin(i * Math.PI / 2) * 2.5
            ] as [number, number, number]}
          >
            <sphereGeometry args={[i === currentProject ? 0.1 : 0.05, 16, 16]} />
            <meshBasicMaterial 
              color={i === currentProject ? "#FFD700" : "#666666"} 
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

// Achievement Badges
function AchievementBadges() {
  const badges = [
    { text: "AI Certified", position: [-4, 2, 0], color: "#FF6B6B", icon: "🤖" },
    { text: "ML Expert", position: [4, 2, 0], color: "#4ECDC4", icon: "🧠" },
    // { text: "IEEE Senior", position: [-6, -3, 0], color: "#45B7D1", icon: "⚡" },
    // { text: "MOKSHA Lead", position: [6, -3, 0], color: "#FFD700", icon: "🎪" },
    { text: "700+ DSA", position: [0, 3, 0], color: "#9C27B0", icon: "💎" }
  ]

  return (
    <>
      {badges.map((badge, i) => (
        <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.8} floatIntensity={2}>
          <group position={badge.position}>
            <mesh>
              <cylinderGeometry args={[0.6, 0.6, 0.1, 8]} />
              <meshStandardMaterial 
                color={badge.color}
                transparent 
                opacity={0.9}
                metalness={0.8}
                roughness={0.1}
                emissive={badge.color}
                emissiveIntensity={0.4}
              />
            </mesh>
            
            <Html position={[0, 0, 0.06]} transform>
              <div className="text-center bg-black/70 backdrop-blur-sm rounded-lg p-2">
                <div className="text-xl mb-1">{badge.icon}</div>
                <div className="text-white text-xs font-bold">{badge.text}</div>
              </div>
            </Html>
          </group>
        </Float>
      ))}
    </>
  )
}

// Tech Stack Orbiting System
function TechStackOrbit() {
  const orbitRef = useRef<THREE.Group>(null)
  
  const techStack = {
    frontend: ["React", "Next.js", "Bootstrap", "HTML", "CSS", "JavaScript"],
    backend: ["Node.js", "FastAPI", "REST API"],
    database: ["MongoDB", "MySQL"],
    ml: ["Scikit-learn", "TensorFlow", "Jupyter"],
    tools: ["Git", "VS Code", "Arduino IDE"]
  }

  useFrame((state) => {
    if (orbitRef.current) {
      const time = state.clock.elapsedTime
      orbitRef.current.rotation.y = time * 0.2
      orbitRef.current.rotation.x = Math.sin(time * 0.1) * 0.1
    }
  })

  return (
    <group ref={orbitRef}>
      {Object.entries(techStack).map(([category, techs], categoryIndex) => (
        <group key={category}>
          {techs.map((tech, techIndex) => {
            const angle = (techIndex / techs.length) * Math.PI * 2
            const radius = 8 + categoryIndex * 1.5
            const x = Math.cos(angle) * radius
            const z = Math.sin(angle) * radius
            const y = Math.sin(categoryIndex * Math.PI / 3) * 2
            
            return (
              <Float key={tech} speed={1 + techIndex * 0.1} rotationIntensity={0.3} floatIntensity={1}>
                <Html position={[x, y, z]} transform>
                  <div 
                    className="text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-125"
                    style={{ 
                      backgroundColor: `hsl(${categoryIndex * 60 + 180}, 70%, 50%)20`,
                      border: `1px solid hsl(${categoryIndex * 60 + 180}, 70%, 50%)`,
                      color: `hsl(${categoryIndex * 60 + 180}, 70%, 80%)`,
                    }}
                  >
                    {tech}
                  </div>
                </Html>
              </Float>
            )
          })}
        </group>
      ))}
    </group>
  )
}

// Main Enhanced Scene
function EnhancedPortfolioScene() {
  const sceneRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (sceneRef.current) {
      const time = state.clock.elapsedTime
      sceneRef.current.rotation.y = Math.sin(time * 0.05) * 0.1
    }
  })

  return (
    <group ref={sceneRef}>
      {/* Advanced Particle System */}
      <AdvancedParticleSystem />
      
      {/* Central Skills Constellation */}
      <SkillsConstellation />
      
      {/* Live Code Terminal */}
      <LiveCodeTerminal position={[0, -4, 0]} />
      
      {/* Project Showcase */}
      <ProjectShowcase position={[0, 4, 0]} />
      
      {/* Achievement Badges */}
      <AchievementBadges />
      
      {/* Tech Stack Orbiting System */}
      <TechStackOrbit />
      
      {/* Enhanced Sparkles with Multiple Colors */}
      <Sparkles 
        count={300} 
        scale={20} 
        size={5} 
        speed={0.8} 
        opacity={0.4}
        color="#60A5FA"
      />
      
      {/* Secondary Sparkle Layer */}
      <Sparkles 
        count={200} 
        scale={15} 
        size={3} 
        speed={0.5} 
        opacity={0.3}
        color="#FFD700"
      />
    </group>
  )
}

export default function ThreeScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 20], fov: 60 }}
      style={{ background: 'transparent' }}
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance",
        toneMappingExposure: 1.2
      }}
    >
      {/* Advanced Lighting Setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={1.5} color="#3B82F6" />
      <pointLight position={[10, -10, -5]} intensity={1.5} color="#06B6D4" />
      <pointLight position={[0, 10, 0]} intensity={1.2} color="#60A5FA" />
      <spotLight position={[0, 20, 0]} intensity={2} color="#FFD700" penumbra={0.5} />
      
      {/* Environment */}
      <Environment preset="city" background={false} />
      
      {/* Main Enhanced Scene */}
      <EnhancedPortfolioScene />
      
      {/* Enhanced Camera Controls */}
      <OrbitControls 
        enableZoom={true} 
        enablePan={true} 
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 4}
        maxDistance={30}
        minDistance={15}
        dampingFactor={0.05}
        rotateSpeed={0.5}
        zoomSpeed={0.8}
      />
    </Canvas>
  )
}