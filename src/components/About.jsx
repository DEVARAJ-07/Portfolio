import { motion } from 'framer-motion'
import { HiLocationMarker, HiAcademicCap, HiBriefcase, HiMail } from 'react-icons/hi'

export default function About() {
  const details = [
    {
      icon: <HiMail className="text-slate-300 text-base" />,
      label: 'Email',
      value: 'devarajsubramani20@gmail.com',
      href: 'mailto:devarajsubramani20@gmail.com'
    },
    {
      icon: <HiLocationMarker className="text-slate-300 text-base" />,
      label: 'Location',
      value: 'Coimbatore, India'
    },
    {
      icon: <HiAcademicCap className="text-slate-300 text-base" />,
      label: 'Education',
      value: 'B.E. CSE – Dr. N.G.P. iTech (2023–2027)'
    },
    {
      icon: <HiBriefcase className="text-slate-300 text-base" />,
      label: 'Status',
      value: 'Student | Seeking Internships & Jobs'
    }
  ]

  return (
    <div className="max-w-5xl w-full mx-auto p-5 md:p-10 rounded-[32px] vision-window h-[78vh] overflow-y-auto md:overflow-hidden pr-2">
      <div className="grid md:grid-cols-12 gap-8 md:h-full items-stretch">

        {/* ── Specimen Plate Frame ── */}
        <div className="md:col-span-5 flex flex-col items-center justify-center md:h-full">
          <div className="relative">

            {/*
              UNIQUE FRAME CONCEPT: "Specimen Plate"
              Inspired by museum specimen mounts & studio photography light boxes.
              No color. No hover. Pure monochromatic depth through light physics:
              - Outer shadow casting the plate off the background
              - Bright 1px rim light (top-left) + dark 1px rim shadow (bottom-right)
                → mimics a physical machined-metal edge catching studio light
              - Inner matte border (like a photo mat board)
              - Deep recessed inset shadow inside the photo well
            */}

            {/* The Plate */}
            <div
              style={{
                /* Outer plate — the "mount board" */
                padding: '14px',
                borderRadius: '6px',
                background: 'rgba(14, 16, 22, 0.96)',
                /* Machined rim-light effect: top-left bright, bottom-right dark */
                boxShadow: `
                  0 0 0 1px rgba(255,255,255,0.22),
                  1px 1px 0 0 rgba(255,255,255,0.08) inset,
                  -1px -1px 0 0 rgba(0,0,0,0.6) inset,
                  0 20px 60px rgba(0,0,0,0.8),
                  0 4px 16px rgba(0,0,0,0.5),
                  0 1px 0 rgba(255,255,255,0.04)
                `,
              }}
            >
              {/* Inner mat board recess */}
              <div
                style={{
                  padding: '6px',
                  borderRadius: '3px',
                  background: 'rgba(8, 9, 14, 1)',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.06), inset 0 2px 8px rgba(0,0,0,0.9)',
                }}
              >
                {/* Photo well — the recessed aperture */}
                <div
                  style={{
                    width: '260px',
                    height: '280px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    position: 'relative',
                    /* Deep recess shadow inside the well */
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.8), inset 0 4px 20px rgba(0,0,0,0.6)',
                  }}
                >
                  {/* Subtle top-fade so photo blends into the dark mount */}
                  <div
                    style={{
                      position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, transparent 20%, transparent 75%, rgba(0,0,0,0.25) 100%)',
                    }}
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}deva.jpeg`}
                    alt="Devaraj S"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Biography Content */}
        <div className="md:col-span-7 md:h-full md:overflow-y-auto pr-2 pb-6 vision-scrollbar space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans mt-2">
              About Me
            </h1>

            <p className="text-slate-100 text-sm tracking-wide leading-relaxed font-normal">
              I'm DEVARAJ S, an aspiring Full Stack Developer and Mobile App Developer with Flutter technologies, currently pursuing Computer Science Engineering. I have hands-on experience in academic and personal projects, building responsive web applications and cross-platform mobile apps.
            </p>

            <p className="text-slate-100 text-sm tracking-wide leading-relaxed font-normal">
              I am passionate about modern technologies, problem-solving, and continuously improving my development skills through innovative projects and real-world applications.
            </p>

            <p className="text-slate-300 text-xs sm:text-sm tracking-wide leading-relaxed font-normal border-l-2 border-white/20 pl-3 italic">
              <strong>Languages Known:</strong> English (Professional Proficiency) · Tamil (Native / Fluent)
            </p>
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5">
            {["Full Stack Developer", "Android Application Developer", "AWS Cloud Engineer"].map((tag, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-200 font-newsreader italic tracking-wider font-semibold select-none"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-3 border-t border-white/10 pt-5"
          >
            {details.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-[11.5px] text-slate-100 font-bold hover:text-white transition-colors truncate block">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[11.5px] text-slate-100 font-bold truncate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
