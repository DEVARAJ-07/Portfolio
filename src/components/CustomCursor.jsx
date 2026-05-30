import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isTouchDevice, setIsTouchDevice] = useState(false)

    useEffect(() => {
        // Detect touch device
        const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches
        setIsTouchDevice(isTouch)
        if (isTouch) return

        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseOver = (e) => {
            const target = e.target
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[data-cursor-hover]') ||
                target.classList.contains('cursor-hover')
            ) {
                setIsHovering(true)
            }
        }

        const handleMouseOut = (e) => {
            const target = e.target
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[data-cursor-hover]') ||
                target.classList.contains('cursor-hover')
            ) {
                setIsHovering(false)
            }
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)
        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        window.addEventListener('mousemove', move, { passive: true })
        document.addEventListener('mouseover', handleMouseOver, { passive: true })
        document.addEventListener('mouseout', handleMouseOut, { passive: true })
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)
        document.documentElement.addEventListener('mouseleave', handleMouseLeave)
        document.documentElement.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', move)
            document.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseout', handleMouseOut)
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [isVisible])

    if (isTouchDevice) return null

    return (
        <>
            {/* Dot cursor */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                    scale: isClicking ? 0.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.2 }}
            >
                <div className="w-2 h-2 rounded-full bg-white" />
            </motion.div>

            {/* Ring cursor */}
            <motion.div
                className="fixed top-0 left-0 z-[9998] pointer-events-none"
                animate={{
                    x: position.x - (isHovering ? 28 : 18),
                    y: position.y - (isHovering ? 28 : 18),
                    width: isHovering ? 56 : 36,
                    height: isHovering ? 56 : 36,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 22, mass: 0.5 }}
            >
                <div
                    className={`w-full h-full rounded-full border transition-colors duration-300 ${isHovering
                            ? 'border-accent-400/60 bg-accent-500/10'
                            : 'border-dark-400/40 bg-transparent'
                        }`}
                />
            </motion.div>

            {/* Glow trail on hover */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        className="fixed top-0 left-0 z-[9997] pointer-events-none"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            x: position.x - 30,
                            y: position.y - 30,
                            opacity: 0.3,
                            scale: 1,
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    >
                        <div className="w-[60px] h-[60px] rounded-full bg-accent-500/20 blur-xl" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
