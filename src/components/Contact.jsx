import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })

const links = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="text-[#0077B5]" />,
    href: 'https://www.linkedin.com/in/devarajvetrii/',
    handle: 'devarajvetrii',
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="text-white" />,
    href: 'https://github.com/DEVARAJ-07',
    handle: 'DEVARAJ-07',
  },
  {
    name: 'LeetCode',
    icon: <SiLeetcode className="text-[#FFA116]" />,
    href: 'https://leetcode.com/u/DEVARAJ_lc_07/',
    handle: 'DEVARAJ_lc_07',
  },
  {
    name: 'Email',
    icon: <FaEnvelope className="text-[#EA4335]" />,
    href: 'mailto:devarajsubramani20@gmail.com',
    handle: 'devarajsubramani20@gmail.com',
  },
]

// ── Hand-Drawn Pencil Letter Outside Send Animation ───────────────
function LoveLetterSendOverlay({ status }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 z-50 rounded-3xl bg-[#060810]/92 backdrop-blur-xl border border-white/15 flex flex-col items-center justify-center p-6 select-none shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden"
    >
      {/* Subtle Ambient Dispatch Particles (clean dots & soft sparkles, NO hearts) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x: '22%', y: '65%', delay: 0.1, size: 'w-1.5 h-1.5' },
          { x: '78%', y: '60%', delay: 0.4, size: 'w-2 h-2' },
          { x: '30%', y: '30%', delay: 0.7, size: 'w-1 h-1' },
          { x: '72%', y: '25%', delay: 0.9, size: 'w-1.5 h-1.5' },
          { x: '50%', y: '18%', delay: 1.2, size: 'w-2 h-2' },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25, scale: 0.5 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [20, -50],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeOut'
            }}
            style={{ left: item.x, top: item.y }}
            className={`absolute rounded-full bg-emerald-400/50 shadow-[0_0_8px_rgba(52,211,153,0.8)] pointer-events-none ${item.size}`}
          />
        ))}
      </div>

      {/* Main Mail & Letter Stage */}
      <div className="relative w-48 h-40 flex items-center justify-center">
        {/* Envelope Container: floats while sending, swooshes away when done */}
        <motion.div
          animate={
            status === 'done'
              ? {
                  x: [0, -30, 320],
                  y: [0, 15, -200],
                  scale: [1, 1.05, 0.25],
                  opacity: [1, 1, 0],
                  rotate: [0, -8, 25]
                }
              : {
                  y: [0, -8, 0]
                }
          }
          transition={
            status === 'done'
              ? { duration: 0.95, ease: [0.25, 1, 0.5, 1] }
              : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
          }
          className="relative w-40 h-28 flex items-center justify-center"
        >
          {/* 1. The Padded Hand-Made Letter with Pencil-Sketched Lines & Soft Rounded Edges */}
          <motion.div
            initial={{ y: -72, opacity: 0, scale: 0.92 }}
            animate={{
              y: [-72, -15, 6],
              opacity: [0, 1, 0.35],
              scale: [0.92, 0.9, 0.82]
            }}
            transition={{
              duration: 1.8,
              times: [0, 0.5, 0.95],
              repeat: status === 'sending' ? Infinity : 0,
              repeatDelay: 0.5,
              ease: 'easeInOut'
            }}
            className="absolute z-10 w-32 h-24 bg-[#faf8f4] rounded-2xl p-3 shadow-[0_12px_28px_rgba(0,0,0,0.5)] flex flex-col justify-between border border-[#e5e0d4] pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.03), 0 12px 28px rgba(0,0,0,0.55)'
            }}
          >
            {/* Pencil sketch header */}
            <div className="flex items-center justify-between px-0.5">
              <svg width="24" height="8" viewBox="0 0 24 8" fill="none">
                <path d="M1 4C5 2 8 6 13 4C17 2 20 6 23 4" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 1" />
              </svg>
              <div className="w-9 h-1 bg-emerald-600/70 rounded-full" />
            </div>

            {/* Hand-drawn organic pencil text lines */}
            <svg viewBox="0 0 100 32" className="w-full h-8 overflow-visible" fill="none">
              <path d="M2 4 Q25 2, 50 4 T98 4" stroke="#475569" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="2 1" />
              <path d="M2 12 Q20 14, 45 12 T88 12" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 1" />
              <path d="M2 20 Q30 19, 60 21 T75 20" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="2 0.8" opacity="0.85" />
              <path d="M70 27 C75 24, 78 30, 85 26 C90 23, 93 28, 97 26" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />
            </svg>

            {/* Subtle bottom note indicator */}
            <div className="flex justify-between items-center px-0.5 text-[7px] text-slate-500 font-mono">
              <span>DEVA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
            </div>
          </motion.div>

          {/* 2. Envelope Back Shell */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-slate-900 via-[#0e1628] to-[#070b14] border border-white/25 shadow-2xl" />

          {/* 3. Envelope Top Flap that folds down and CLOSES */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '56px',
              transformOrigin: 'top center',
              zIndex: 30
            }}
            animate={{
              rotateX: [180, 180, 0, 0] // Folds shut over the letter
            }}
            transition={{
              duration: 1.8,
              times: [0, 0.48, 0.88, 1],
              repeat: status === 'sending' ? Infinity : 0,
              repeatDelay: 0.5,
              ease: 'easeInOut'
            }}
          >
            <svg viewBox="0 0 160 56" className="w-full h-full drop-shadow-md" fill="none">
              <polygon
                points="0,0 80,56 160,0"
                fill="#1e293b"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>

          {/* 4. Envelope Front Pocket */}
          <svg viewBox="0 0 160 112" className="absolute inset-0 w-full h-full z-25 pointer-events-none" fill="none">
            <polygon points="0,112 80,52 160,112" fill="#141e30" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
            <polygon points="0,0 80,58 0,112" fill="#0f172a" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            <polygon points="160,0 80,58 160,112" fill="#0f172a" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          </svg>

          {/* 5. Minimalist Emerald Wax Seal with clean stamp icon (NO heart) */}
          <motion.div
            animate={{
              scale: [0, 0, 1.35, 1],
              opacity: [0, 0, 1, 1]
            }}
            transition={{
              duration: 1.8,
              times: [0, 0.65, 0.88, 1],
              repeat: status === 'sending' ? Infinity : 0,
              repeatDelay: 0.5,
              ease: 'easeOut'
            }}
            className="absolute top-[38px] left-1/2 -translate-x-1/2 z-40 w-7 h-7 rounded-full bg-emerald-500 border border-emerald-300/40 shadow-[0_0_18px_rgba(52,211,153,0.95)] flex items-center justify-center text-[10px] text-slate-950 font-bold"
          >
            ✓
          </motion.div>
        </motion.div>
      </div>

      {/* Dynamic Status Text */}
      <div className="mt-4 flex flex-col items-center gap-1.5 text-center">
        {status === 'sending' && (
          <>
            <p className="text-lg font-newsreader italic text-white font-semibold tracking-wide flex items-center gap-2">
              Sealing Your Letter...
            </p>
            <p className="text-xs text-emerald-400 font-sans tracking-wide">
              Handwritten note moving into envelope & sealing shut
            </p>
          </>
        )}

        {status === 'done' && (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex flex-col items-center gap-1.5 text-center"
          >
            <div className="flex items-center gap-2 text-emerald-300">
              <span className="text-xl">✓</span>
              <p className="text-lg font-newsreader italic font-semibold tracking-wide">
                Message Dispatched & Delivered!
              </p>
            </div>
            <p className="text-xs text-slate-300 font-sans tracking-wide">
              Thank you! I will get back to you shortly.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

// ── SVG checkmark that draws itself ──────────────────────────────────────────
function DrawCheckmark() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
      <motion.path
        d="M1.5 7L6.5 12L16.5 1.5"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
      />
    </svg>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | done | error
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          reply_to:   formData.email,
          message:    formData.message,
        }
      )
      console.log('EmailJS OK:', result.status, result.text)

      setStatus('done')

      setTimeout(() => {
        setStatus('idle')
        setFormData({ name: '', email: '', message: '' })
      }, 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrorMsg(err?.text || err?.message || 'Unknown error')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <div className="max-w-5xl w-full mx-auto p-5 md:p-10 rounded-[32px] vision-window h-[78vh] overflow-y-auto pr-4 vision-scrollbar flex flex-col gap-6">

      {/* Header */}
      <div className="space-y-1 select-text shrink-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Get in touch</p>
        <h3 className="text-3xl font-extrabold tracking-tight text-white font-sans">Let's Connect</h3>
        <p className="text-xs text-slate-400 max-w-2xl leading-relaxed font-sans font-normal mt-1">
          I am always available to communicate. Please feel free to reach out via the secure message form or connect through my professional networks.
        </p>
      </div>

      {/* Social Links */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl mx-auto shrink-0">
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
            className="group flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/8 transition-all duration-300 min-h-[70px]"
          >
            <div className="text-2xl group-hover:scale-110 transition-transform duration-300 shrink-0">
              {link.icon}
            </div>
            <div className="text-left font-sans select-text overflow-hidden min-w-0">
              <h5 className="text-[8px] font-bold tracking-widest uppercase text-white/40">{link.name}</h5>
              <p className="text-[11.5px] text-white font-bold mt-0.5 break-all truncate">{link.handle}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Message Form */}
      <div className="w-full max-w-2xl mx-auto">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Send Message</p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="relative p-6 rounded-3xl bg-white/[0.04] border border-white/10 shadow-lg overflow-hidden"
        >
          {/* Outside Love Letter & Envelope Sealing Animation Overlay (Lottie style) */}
          <AnimatePresence>
            {(status === 'sending' || status === 'done') && (
              <LoveLetterSendOverlay status={status} />
            )}
          </AnimatePresence>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-bold tracking-widest uppercase text-slate-400 ml-1">Your Name</label>
              <input
                type="text" required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                disabled={status !== 'idle'}
                placeholder="Your Name"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-white/30 focus:bg-white/[0.06] focus:outline-none transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-bold tracking-widest uppercase text-slate-400 ml-1">Email Address</label>
              <input
                type="email" required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                disabled={status !== 'idle'}
                placeholder="your.email@example.com"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-white/30 focus:bg-white/[0.06] focus:outline-none transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-bold tracking-widest uppercase text-slate-400 ml-1">Your Message</label>
              <textarea
                required rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                disabled={status !== 'idle'}
                placeholder="Write your message here..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-white/30 focus:bg-white/[0.06] focus:outline-none transition-all duration-200 resize-none"
              />
            </div>

            {/* Error */}
            {status === 'error' && errorMsg && (
              <p className="text-[10px] text-red-400 font-semibold px-1">⚠ {errorMsg}</p>
            )}

            {/* Submit Button */}
            <div className="relative h-12 mt-4">
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full h-full rounded-full bg-white/8 border border-white/20 text-white font-newsreader italic tracking-wide text-sm flex items-center justify-center gap-2.5 hover:bg-white hover:text-black hover:border-white hover:scale-[1.01] active:scale-[0.98] transition-all duration-250 cursor-pointer group disabled:opacity-50 disabled:pointer-events-none"
              >
                <FaPaperPlane className="text-[10px] transform -rotate-45 transition-transform duration-350 group-hover:translate-x-1 group-hover:-translate-y-1" />
                {status === 'sending' ? 'Sending Message...' : status === 'done' ? 'Message Sent' : 'Send Message'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
