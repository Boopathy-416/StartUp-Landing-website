import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

export function Sections() {
  const group = useRef(null)
  const scroll = useScroll()

  useFrame(() => {
    if (!group.current) return
    
    // Calculate current section
    const section = Math.floor(scroll.offset * 4)
    const sectionOffset = scroll.offset * 4 - section
    
    // Update camera position based on section
    group.current.position.z = -section * 10 - sectionOffset * 10
  })

  return (
    <group ref={group}>
      {/* Section 1 - Home */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffffff" wireframe />
      </mesh>

      {/* Section 2 - About */}
      <mesh position={[0, 0, -10]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#ffffff" wireframe />
      </mesh>

      {/* Section 3 - Referral */}
      <mesh position={[0, 0, -20]}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial color="#ffffff" wireframe />
      </mesh>

      {/* Section 4 - Footer */}
      <mesh position={[0, 0, -30]}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial color="#ffffff" wireframe />
      </mesh>
    </group>
  )
}
