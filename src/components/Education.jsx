import { motion } from 'framer-motion'

const educationList = [
    {
        degree: "B.E. Computer Science and Engineering",
        institution: "Dr. N.G.P. Institute of Technology, Coimbatore",
        duration: "2023 – 2027",
        details: [
            "Currently pursuing a Bachelor of Engineering in CSE, focusing on full-stack web and mobile development.",
            "Hands-on experience with MERN stack, Next.js, Flutter, and AWS cloud technologies.",
            "Active participation in national-level and institutional hackathons.",
            "Academic standing: CGPA: 8.01"
        ]
    },
    {
        degree: "Higher Secondary Education (HSC)",
        institution: "Cheran Matric Higher Secondary School",
        duration: "2023",
        details: [
            "Completed higher secondary education with a strong academic score of 84%.",
            "Developed a solid foundation in Mathematics, Physics, Chemistry, and Computer Science."
        ]
    },
    {
        degree: "Secondary School Education (SSLC)",
        institution: "Cheran Matric Higher Secondary School",
        duration: "2021",
        details: [
            "Completed secondary school education with high honors.",
            "Discovered early passion for software programming, logic design, and problem-solving."
        ]
    }
]

const certifications = [
    {
        name: "Generative AI: Working with Large Language Models",
        issuer: "Coursera / DeepLearning.AI",
        date: "May 2026",
    },
    {
        name: "Cloud Computing",
        issuer: "NPTEL",
        date: "2024",
    },
    {
        name: "Industrial IoT",
        issuer: "NPTEL",
        date: "2025",
    }
]

const hackathons = [
    {
        title: "MSME Idea Hackathon 5.0 (2025 – 2026)",
        status: "Final Round & Shortlisted",
        details: [
            "Advanced to the Final Round of the national-level competition.",
            "Shortlisted for project selection and funding evaluation by MSME evaluators."
        ]
    },
    {
        title: "Smart India Hackathon (2023 – 2024)",
        status: "First Round Selection",
        details: [
            "Selected in the First Round in both the 2023 and 2024 editions.",
            "Advanced through institutional screening among competing student developer teams."
        ]
    }
]

export default function Education() {
    return (
        <div className="max-w-5xl w-full mx-auto p-8 md:p-10 rounded-[32px] vision-window h-[78vh] overflow-y-auto pr-4 vision-scrollbar">
            <div className="space-y-12">
                {/* Education Timeline */}
                <div>
                    <h3 className="text-sm font-bold mb-6 flex items-center gap-3 text-white uppercase tracking-wider">
                        <span className="w-6 h-px bg-white/30" />
                        Education
                    </h3>
                    <div className="space-y-5 pl-10 border-l border-white/15 relative">
                        {educationList.map((edu, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="relative"
                            >
                                <div className="absolute -left-[45px] top-1.5 w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
                                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <h4 className="text-sm font-bold text-white mb-1">{edu.degree}</h4>
                                    <p className="text-slate-100 text-xs font-bold mb-0.5">{edu.institution}</p>
                                    <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-3 font-semibold">{edu.duration}</p>
                                    <ul className="space-y-1.5 mt-2">
                                        {edu.details.map((point, idx) => (
                                            <li key={idx} className="text-slate-200 text-xs font-normal tracking-wide leading-relaxed flex items-start gap-2">
                                                <span className="text-teal-400 text-[9px] mt-1 shrink-0">▶</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Hackathons */}
                <div>
                    <h3 className="text-sm font-bold mb-6 flex items-center gap-3 text-white uppercase tracking-wider">
                        <span className="w-6 h-px bg-white/30" />
                        Hackathons
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {hackathons.map((hack, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 + 0.15 }}
                                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col h-full justify-between"
                            >
                                <div>
                                    <h4 className="text-xs font-bold text-white mb-1.5 leading-tight">{hack.title}</h4>
                                    <div className="inline-block px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-[9px] tracking-wider uppercase text-slate-300 font-newsreader italic font-bold mb-3">
                                        {hack.status}
                                    </div>
                                    <ul className="space-y-1.5">
                                        {hack.details.map((point, idx) => (
                                            <li key={idx} className="text-slate-200 text-xs font-normal tracking-wide leading-relaxed flex items-start gap-2">
                                                <span className="text-teal-400 text-[8px] mt-1 shrink-0">▶</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-sm font-bold mb-6 flex items-center gap-3 text-white uppercase tracking-wider">
                        <span className="w-6 h-px bg-white/30" />
                        Certifications
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 + 0.2 }}
                                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <h4 className="text-xs font-bold text-white mb-1 leading-tight">{cert.name}</h4>
                                <p className="text-slate-300 text-[10px] mb-3 font-medium">{cert.issuer}</p>
                                <div className="inline-block px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-[9px] tracking-wider uppercase text-slate-300 font-newsreader italic font-semibold">
                                    {cert.date}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
