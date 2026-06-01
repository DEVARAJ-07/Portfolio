import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#02040a]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1.5} />
      </Canvas>
      {/* Milky way overlay glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-900/20 via-transparent to-cyan-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
