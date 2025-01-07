import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

export function Background() {
  const mesh = useRef(null)
  const scroll = useScroll()

  useFrame((state, delta) => {
    if (!mesh.current) return
    
    // Update based on scroll position
    const scrollOffset = scroll.offset
    mesh.current.rotation.x = scrollOffset * Math.PI * 2
    mesh.current.rotation.y = scrollOffset * Math.PI * 2
    
    // Gentle floating animation
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <mesh ref={mesh} position={[0, 0, -5]} scale={[15, 15, 15]}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshStandardMaterial
        color="#000000"
        metalness={0.9}
        roughness={0.1}
        wireframe
      />
    </mesh>
  )
}
