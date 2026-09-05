import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Sparkles } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Heart() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const points: number[] = []
    for (let i = 0; i < 2600; i++) {
      const t = Math.random() * Math.PI * 2
      const x = 16 * Math.sin(t) ** 3
      const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)
      const depth = (Math.random() - .5) * 3
      const scale = .17 + Math.random() * .025
      points.push(x * scale, y * scale, depth)
    }
    return new Float32Array(points)
  }, [])
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * .12
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * .035
    ref.current.scale.setScalar(pulse)
  })
  return <points ref={ref}>
    <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
    <pointsMaterial color="#ff294d" size={.045} transparent opacity={.92} sizeAttenuation blending={THREE.AdditiveBlending} />
  </points>
}

function Planets() {
  return <>
    <mesh position={[-4, 1.2, -2]}><sphereGeometry args={[.55, 32, 32]} /><meshStandardMaterial color="#7b1328" roughness={.5} /></mesh>
    <mesh position={[4.2, -1.4, -1]}><sphereGeometry args={[.38, 32, 32]} /><meshStandardMaterial color="#e8b4be" roughness={.35} /></mesh>
    <pointLight color="#ff183f" intensity={35} distance={15} />
  </>
}

export default function Galaxy() {
  return <div className="galaxy-canvas" aria-label="Интерактивная трёхмерная галактика Вики">
    <Canvas camera={{ position: [0, 0, 8], fov: 52 }}>
      <color attach="background" args={['#020103']} />
      <ambientLight intensity={.35} />
      <Stars radius={75} depth={55} count={6500} factor={3.5} saturation={.25} fade speed={.55} />
      <Sparkles count={100} scale={9} size={2} speed={.25} color="#ff5d79" />
      <Heart /><Planets />
      <OrbitControls enablePan={false} minDistance={3.5} maxDistance={14} autoRotate autoRotateSpeed={.25} />
    </Canvas>
    <div className="galaxy-label"><span>VICHKA GALAXY</span><strong>Сердце этой вселенной — ты</strong><small>Крути мышкой · приближай колёсиком</small></div>
  </div>
}
