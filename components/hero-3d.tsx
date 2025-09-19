"use client"

import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Html } from "@react-three/drei"
import { useRef, useMemo, Suspense, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TextureLoader } from "three"
import Image from "next/image"

function AnimatedSphere() {
  // Minimal type: object with a scale.setScalar method used by the animation
  const meshRef = useRef<{ scale: { setScalar: (n: number) => void } } | null>(null)

  const profileTexture = useLoader(TextureLoader, "/kodjo-labore-profile.png")

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 2.5 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          map={profileTexture}
          color="#8b5cf6"
          attach="material"
          distort={0.2 + Math.sin(Date.now() * 0.001 * 1.2) * 0.1}
          speed={1.5}
          roughness={0.2}
          metalness={0.1}
          emissive="#4338ca"
          emissiveIntensity={0.2}
          transparent
          opacity={0.95}
        />
      </Sphere>
    </Float>
  )
}

function SimpleParticleField() {
  // Minimal type: object with rotation.x/y used by the animation
  const pointsRef = useRef<{ rotation: { x: number; y: number } } | null>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(150 * 3)
    for (let i = 0; i < 150; i++) {
      const radius = 3 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.8} />
    </points>
  )
}

function BlockchainLogos() {
  // Minimal type: object with rotation.y used by the animation
  const groupRef = useRef<{ rotation: { y: number } } | null>(null)

  const logos = [
    { name: "Ethereum", id: 1027, color: "#627EEA" },
    { name: "Bitcoin", id: 1, color: "#F7931A" },
    { name: "Solana", id: 5426, color: "#9945FF" },
    { name: "Cardano", id: 2010, color: "#0033AD" },
    { name: "Polygon", id: 3890, color: "#8247E5" },
    { name: "Chainlink", id: 1975, color: "#375BD2" },
    { name: "BNB", id: 1839, color: "#F3BA2F" },
    { name: "Axelar", id: 17799, color: "#00D2FF" },
    { name: "Polkadot", id: 6636, color: "#E6007A" },
    { name: "Lisk", id: 1214, color: "#0981D1" },
    { name: "Starknet", id: 22691, color: "#FF6B35" },
    { name: "Avalanche", id: 5805, color: "#E84142" },
    { name: "Sui", id: 20947, color: "#4DA2FF" },
    { name: "Aptos", id: 21794, color: "#00D4AA" },
    { name: "Mantle", id: 27075, color: "#1a1a1a" },
    { name: "Cosmos", id: 3794, color: "#2E3148" },
  ]

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {logos.map((logo, index) => {
        const angle = (index / logos.length) * Math.PI * 2
        const radius = 5
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = Math.sin(index) * 0.3

        return (
          <Float key={logo.name} speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
            <mesh position={[x, y, z]} scale={0.35}>
              <Html
                center
                distanceFactor={8}
                style={{
                  pointerEvents: "auto",
                  userSelect: "none",
                  opacity: 1,
                  visibility: "visible",
                }}
              >
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 15px ${logo.color}40, inset 0 0 10px rgba(255,255,255,0.1)`,
                    border: `1.5px solid ${logo.color}`,
                    position: "relative",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement
                    target.style.transform = "scale(1.1)"
                    target.style.boxShadow = `0 0 25px ${logo.color}60, inset 0 0 15px rgba(255,255,255,0.2)`
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement
                    target.style.transform = "scale(1)"
                    target.style.boxShadow = `0 0 15px ${logo.color}40, inset 0 0 10px rgba(255,255,255,0.1)`
                  }}
                >
                  <Image
                    src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${logo.id}.png`}
                    alt={logo.name}
                    width={22}
                    height={22}
                    style={{
                      objectFit: "contain",
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: logo.color,
                      fontSize: "6px",
                      fontWeight: "600",
                      textShadow: "0 0 8px rgba(0,0,0,0.8)",
                      whiteSpace: "nowrap",
                      opacity: 1,
                      visibility: "visible",
                    }}
                  >
                    {logo.name}
                  </div>
                </div>
              </Html>
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export function Hero3D() {
  const { width } = useWindowSize()
  
  return (
    <motion.div
      className="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20" />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: width < 768 ? 85 : 75 }}
          style={{ background: "transparent" }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={1} />

          <SimpleParticleField />
          <AnimatedSphere />
          <BlockchainLogos />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </Suspense>
    </motion.div>
  )
}
