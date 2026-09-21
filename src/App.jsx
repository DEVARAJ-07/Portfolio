import { useState, useEffect, useCallback, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SpatialBackground from './components/SpatialBackground'

// Lazy-load all page components so JS is code-split per page
const About    = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Skills   = lazy(() => import('./components/Skills'))
const Education = lazy(() => import('./components/Education'))
const Resume   = lazy(() => import('./components/Resume'))
const Contact  = lazy(() => import('./components/Contact'))

const pagesList = [
  { id: 0, label: 'Resume',           shortLabel: 'Resume',    title: 'Resume'      },
  { id: 1, label: 'About Me',         shortLabel: 'About',     title: 'Dashboard'   },
  { id: 2, label: 'Projects',         shortLabel: 'Projects',  title: 'Projects'    },
  { id: 3, label: 'Tech Skills',      shortLabel: 'Skills',    title: 'Tech Skills' },
  { id: 4, label: 'Education',        shortLabel: 'Education', title: 'Education'   },
  { id: 5, label: 'Connect & Contact',shortLabel: 'Contact',   title: 'Contact'     },
]

// Page components — module-level so they're never re-created
const PAGE_COMPONENTS = [
  <Resume    key={0} />,
  <About     key={1} />,
  <Projects  key={2} />,
  <Skills    key={3} />,
  <Education key={4} />,
  <Contact   key={5} />,
]

// Tightest spring that still looks organic — no mass property (framer default = 1 but omitting
// lets framer use its tighter internal default), high stiffness = instant snap, damping kills bounce.
// Tightest spring that still looks organic — no mass property (framer default = 1 but omitting
// lets framer use its tighter internal default), high stiffness = instant snap, damping kills bounce.
const CARD_SPRING = { type: 'spring', stiffness: 260, damping: 30, mass: 0.7 }
const HEADER_SPRING = { type: 'spring', stiffness: 420, damping: 32, mass: 0.5 }

function App() {
  const [activePage, setActivePage] = useState(1)
  const [isMobile, setIsMobile]     = useState(false)
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Stable navigate callback — no re-creation on every render
  const handleNavigate = useCallback((page) => {
    setActivePage(page)
  }, [])

  // Wheel/trackpad navigation
  useEffect(() => {
    let lastScrollTime = 0
    const COOLDOWN  = 850   // ms between page changes — slightly snappier than 950
    const THRESHOLD = 35

    const handleWheel = (e) => {
      const now   = Date.now()
      const absX  = Math.abs(e.deltaX)
      const absY  = Math.abs(e.deltaY)

      // Check if we're inside a scrollable content panel
      let insideScrollable = false
      const path = e.composedPath ? e.composedPath() : []
      for (const el of path) {
        if (el.classList && (
          el.classList.contains('overflow-y-auto') ||
          el.classList.contains('vision-scrollbar')
        )) {
          insideScrollable = true
          break
        }
      }

      if (absX > THRESHOLD && absX > absY) {
        if (e.cancelable) e.preventDefault()
        if (now - lastScrollTime < COOLDOWN) return
        if (e.deltaX > THRESHOLD) {
          setActivePage(p => Math.min(pagesList.length - 1, p + 1))
          lastScrollTime = now
        } else if (e.deltaX < -THRESHOLD) {
          setActivePage(p => Math.max(0, p - 1))
          lastScrollTime = now
        }
      } else if (!insideScrollable && absY > THRESHOLD) {
        if (e.cancelable) e.preventDefault()
        if (now - lastScrollTime < COOLDOWN) return
        if (e.deltaY > THRESHOLD) {
          setActivePage(p => Math.min(pagesList.length - 1, p + 1))
          lastScrollTime = now
        } else if (e.deltaY < -THRESHOLD) {
          setActivePage(p => Math.max(0, p - 1))
          lastScrollTime = now
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className="relative w-screen h-screen bg-[#020306] text-white font-sans overflow-hidden select-none">
      {/* Background */}
      <SpatialBackground />

      {/* Floating Dynamic Island Header */}
      <div
        className="fixed top-10 left-1/2 -translate-x-1/2 z-[90] pointer-events-auto select-none flex justify-center"
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <motion.div
          layout
          transition={HEADER_SPRING}
          className={`h-11 px-5 rounded-full bg-[#05070d]/80 border backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.18)] flex items-center justify-center gap-3 transition-all duration-300 ${
            isHeaderHovered
              ? 'border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.15),0_20px_50px_rgba(0,0,0,0.85)] scale-[1.02]'
              : 'border-white/15'
          }`}
        >
          {/* Left Arrow Button */}
          <AnimatePresence>
            {isHeaderHovered && activePage > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, x: -6 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -6 }}
                transition={{ duration: 0.15 }}
                onClick={() => setActivePage(p => Math.max(0, p - 1))}
                className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-emerald-400 text-xs flex items-center justify-center transition-colors cursor-pointer"
                title="Previous"
              >
                ‹
              </motion.button>
            )}
          </AnimatePresence>

          {/* Active Status Pulse Indicator */}
          <div className="relative flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            <span className="absolute w-3 h-3 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />
          </div>

          {/* Dynamic Island Title */}
          <div className="relative overflow-hidden flex items-center justify-center min-w-[70px] h-6 px-1">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={activePage}
                initial={{ opacity: 0, y: 7, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -7, filter: 'blur(4px)' }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="text-xs md:text-sm font-semibold tracking-wide text-white/95 whitespace-nowrap flex items-center font-newsreader italic"
              >
                {pagesList[activePage]?.title}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Page Progress Indicator Dots */}
          <div className="flex items-center gap-1.5 px-1">
            {pagesList.map((page, idx) => (
              <button
                key={page.id}
                onClick={() => setActivePage(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activePage === idx
                    ? 'w-4 h-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]'
                    : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Go to ${page.title}`}
              />
            ))}
          </div>

          {/* Right Arrow Button */}
          <AnimatePresence>
            {isHeaderHovered && activePage < pagesList.length - 1 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, x: 6 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 6 }}
                transition={{ duration: 0.15 }}
                onClick={() => setActivePage(p => Math.min(pagesList.length - 1, p + 1))}
                className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-emerald-400 text-xs flex items-center justify-center transition-colors cursor-pointer"
                title="Next"
              >
                ›
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 3D Horizontal Card Stage */}
      <div
        className="absolute inset-0 z-25 flex items-center justify-center p-6 pb-24 pt-20 pointer-events-none overflow-visible translate-y-12"
        style={{ perspective: '1600px' }}
      >
        <div
          className="relative w-full h-full flex items-center justify-center overflow-visible"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {PAGE_COMPONENTS.map((component, index) => {
            const rel = index - activePage

            // Only render active card + immediate neighbours — skip far cards entirely
            // This is the biggest perf win: avoids mounting 4 pages worth of motion.divs simultaneously
            const isVisible = Math.abs(rel) <= 1

            let xOffset = '0px', scale = 1, opacity = 0, zIndex = 10, rotateY = 0, z = 0

            if (rel === 0) {
              xOffset = '0px'; scale = 1; opacity = 1; zIndex = 30; rotateY = 0; z = 0
            } else if (rel === -1) {
              xOffset = isMobile ? '-100vw' : '-58vw'
              scale   = isMobile ? 0.75 : 0.78
              opacity = isMobile ? 0 : 0.72
              zIndex  = 20; rotateY = isMobile ? 0 : 25; z = isMobile ? -200 : -220
            } else if (rel === 1) {
              xOffset = isMobile ? '100vw' : '58vw'
              scale   = isMobile ? 0.75 : 0.78
              opacity = isMobile ? 0 : 0.72
              zIndex  = 20; rotateY = isMobile ? 0 : -25; z = isMobile ? -200 : -220
            } else if (rel < -1) {
              xOffset = '-100vw'; scale = 0.65; opacity = 0; zIndex = 10; rotateY = 35; z = -350
            } else {
              xOffset = '100vw';  scale = 0.65; opacity = 0; zIndex = 10; rotateY = -35; z = -350
            }

            return (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transformStyle: 'preserve-3d',
                  // GPU-promote this layer BEFORE the animation starts
                  willChange: 'transform, opacity',
                  pointerEvents: isVisible ? 'auto' : 'none',
                  '--window-bg':     rel === 0 ? 'rgba(8,10,16,0.92)'  : 'rgba(12,14,22,0.65)',
                  '--window-border': rel === 0 ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.11)',
                }}
                initial={{ opacity: 0, scale: 0.6, z: -600, y: 50, rotateX: 10 }}
                animate={{ x: xOffset, scale, opacity, zIndex, rotateY, z, rotateX: 0, y: 0 }}
                transition={CARD_SPRING}
                className={`select-none ${rel === 0 ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}
                drag={rel === 0 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.35}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -55) handleNavigate(Math.min(pagesList.length - 1, activePage + 1))
                  else if (info.offset.x > 55) handleNavigate(Math.max(0, activePage - 1))
                }}
                onClick={() => {
                  if (rel === -1) handleNavigate(activePage - 1)
                  if (rel ===  1) handleNavigate(activePage + 1)
                }}
              >
                <div className="relative w-full max-w-5xl mx-auto px-4 md:px-0">
                  {/* Only fully render adjacent cards — saves React reconcile cost for far pages */}
                  <Suspense fallback={null}>
                    {isVisible ? component : null}
                  </Suspense>

                  {/* Glass intercept overlay for inactive cards */}
                  {rel !== 0 && (
                    <div className="absolute inset-0 bg-transparent rounded-[32px] z-50 pointer-events-auto" />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
