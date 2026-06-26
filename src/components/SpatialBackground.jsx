import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Generate randomized rain drops that persist across renders at module level
const STATIC_RAIN_DROPS = Array.from({ length: 45 }, (_, idx) => ({
  id: idx,
  left: `${Math.random() * 110 - 5}%`,
  delay: `${Math.random() * 2.5}s`,
  duration: `${Math.random() * 0.7 + 0.6}s`,
  height: `${Math.random() * 70 + 50}px`,
  opacity: Math.random() * 0.45 + 0.25,
}))

export default function SpatialBackground() {
  const [isVisible, setIsVisible] = useState(true)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // Tight spring — high stiffness removes mouse-movement lag tail
  const springConfig = { damping: 28, stiffness: 180 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    if (!isVisible) return

    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      // Normalize between -0.5 and 0.5
      const normX = (clientX / innerWidth) - 0.5
      const normY = (clientY / innerHeight) - 0.5
      
      // Opposite direction subtle parallax shift for deep 3D feel (+/- 45px)
      mouseX.set(normX * -45)
      mouseY.set(normY * -45)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY, isVisible])

  return (
    <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden bg-[#020205] select-none pointer-events-none">
      {/* 3D Rendered Balcony/Hall Background Image with Parallax */}
      <motion.div 
        style={{ x, y, scale: 1.15 }} 
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={`${import.meta.env.BASE_URL}spatial_bg.png`}
          alt="Spatial Environment"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-98 brightness-[1.08] contrast-[1.01]"
        />
        
        {/* Subtle dynamic overlay tint to enhance rainy environment */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-slate-950/30 mix-blend-multiply" />
      </motion.div>

      {/* Atmospheric Rain Particles (Overlay on background layer) */}
      {isVisible && (
        <div className="absolute inset-0 w-full h-full overflow-hidden z-10">
          {STATIC_RAIN_DROPS.map((drop) => (
            <div
              key={drop.id}
              className="rain-drop"
              style={{
                left: drop.left,
                animationDelay: drop.delay,
                animationDuration: drop.duration,
                height: drop.height,
                opacity: drop.opacity,
              }}
            />
          ))}
        </div>
      )}

      {/* Ambient light overlay via radial gradients (optimized, zero repaints) */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20 z-15 pointer-events-none mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 15% 15%, rgba(20,184,166,0.18) 0%, transparent 65%), radial-gradient(circle at 85% 85%, rgba(99,102,241,0.18) 0%, transparent 65%)'
        }}
      />

      {/* Subtle Spatial Mesh / Grid Overlay for depth perspective */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.01)_1px,_transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,_white,_transparent_80%)] z-20" 
        style={{
          transform: 'perspective(1200px) rotateX(65deg) translateY(-20%) scale(1.6)',
          transformOrigin: 'top center',
          opacity: 0.12
        }}
      />

      {/* Glassmorphic border ring - visual depth */}
      <div className="absolute inset-4 rounded-[40px] border border-white/[0.015] pointer-events-none z-35" />
    </div>
  )
}
