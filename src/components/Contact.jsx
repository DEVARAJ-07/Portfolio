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

// ── Paper Plane Flight Path for Sending State ──────────────────────────────
function SendingPaperPlane() {
  return (
    <div className="relative w-16 h-8 flex items-center justify-center overflow-visible">
      {/* Flight trail dots */}
      <div className="absolute inset-0 flex items-center justify-start gap-1 pl-2">
        {[0, 1, 2, 3].map((dot) => (
          <motion.div
            key={dot}
            className="w-1 h-1 bg-white/40 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: dot * 0.15,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Looping flying plane */}
      <motion.div
        animate={{
          x: [-35, 35],
          y: [8, -8],
          rotate: [-45, -45],
          opacity: [0, 1, 1, 0],
          scale: [0.7, 1.1, 0.7]
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-white text-sm absolute"
      >
        <FaPaperPlane className="transform -rotate-45" />
      </motion.div>
    </div>
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
    <div className="max-w-5xl w-full mx-auto p-8 md:p-10 rounded-[32px] vision-window h-[78vh] overflow-y-auto pr-4 vision-scrollbar flex flex-col gap-6">

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
          className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg"
        >
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

            {/* ── THE BUTTON AREA ── */}
            <div className="relative h-12 mt-4">
              <AnimatePresence mode="wait">

                {/* ─── IDLE: Clean pill button ─────────────────────────────── */}
                {status === 'idle' && (
                  <motion.button
                    key="idle"
                    type="submit"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18 }}
                    className="absolute inset-0 w-full rounded-full bg-white/8 border border-white/20 text-white font-newsreader italic tracking-wide text-sm flex items-center justify-center gap-2.5 hover:bg-white hover:text-black hover:border-white hover:scale-[1.01] active:scale-[0.98] transition-all duration-250 cursor-pointer group"
                  >
                    <FaPaperPlane className="text-[10px] transform -rotate-45 transition-transform duration-350 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    Send Message
                  </motion.button>
                )}

                {/* ─── SENDING: Paper Plane Take-Off Animation ──────────────── */}
                {status === 'sending' && (
                  <motion.div
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 rounded-full border border-white/12 bg-black/30 backdrop-blur-sm overflow-hidden flex items-center justify-center gap-2 font-newsreader italic text-sm tracking-wide text-white/80 select-none"
                  >
                    <SendingPaperPlane />
                    <span className="animate-pulse">
                      Sending...
                    </span>
                  </motion.div>
                )}

                {/* ─── ERROR ───────────────────────────────────────────────── */}
                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="absolute inset-0 rounded-full border border-red-400/30 bg-red-500/10 flex items-center justify-center text-red-300 font-newsreader italic text-sm tracking-wide"
                  >
                    ✕ Transmission Failed
                  </motion.div>
                )}

                {/* ─── DONE: Paper Plane Taken Off + Message Sent ────────────── */}
                {status === 'done' && (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 rounded-full border border-white/20 bg-white/8 overflow-hidden flex items-center justify-center gap-3"
                  >
                    {/* One-shot flight takeoff animation */}
                    <motion.div
                      initial={{ x: -15, y: 15, opacity: 1, scale: 1 }}
                      animate={{ x: 160, y: -80, opacity: 0, scale: 0.4 }}
                      transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
                      className="text-white text-base absolute"
                    >
                      <FaPaperPlane className="transform -rotate-45" />
                    </motion.div>

                    {/* Success emoji + Text */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.45, type: 'spring', stiffness: 320, damping: 20 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm select-none leading-none">📩</span>
                      <span className="font-newsreader italic text-sm tracking-wide text-white/95 select-none font-medium">
                        Message Sent
                      </span>
                    </motion.div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
