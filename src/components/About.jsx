import { ScrollReveal, Container } from './ui'
import { HiLocationMarker, HiAcademicCap, HiBriefcase, HiSparkles, HiUser, HiMail } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function About() {
    const details = [
        {
            icon: <HiMail className="text-white text-xl" />,
            label: 'Email',
            value: 'devarajsubramani20@gmail.com',
        },
        {
            icon: <HiLocationMarker className="text-white text-xl" />,
            label: 'Location',
            value: 'Coimbatore, India',
        },
        {
            icon: <HiAcademicCap className="text-white text-xl" />,
            label: 'Education',
            value: 'B.E. CSE – Dr. N.G.P. iTech (2023–2027)',
        },
        {
            icon: <HiBriefcase className="text-white text-xl" />,
            label: 'Status',
            value: 'Student | Seeking Internships and Jobs',
        },
    ]

    return (
        <Container id="about">
            <div className="text-center mb-16">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-medium mb-4 uppercase tracking-widest">
                        <HiSparkles />
                        <span>About</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        About Me
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        A glimpse into who I am and what drives me
                    </p>
                    <div className="w-20 h-1 bg-white mx-auto mt-6 rounded-full" />
                </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <ScrollReveal direction="left">
                    <div className="relative group mx-auto md:mx-0 w-64 h-64 sm:w-72 sm:h-72">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 p-1">
                        <div className="relative w-full h-full rounded-[1.3rem] overflow-hidden bg-black">
                            <img
                                src={`${import.meta.env.BASE_URL}deva.jpeg`}
                                alt="About me — Devaraj S"
                                className="w-full h-full object-cover transition-all duration-500"
                                loading="lazy"
                            />
                        </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Content */}
                <ScrollReveal direction="right">
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                        I'm <span className="text-white font-semibold">DEVARAJ S</span>, an aspiring
                        Full Stack Developer and Mobile App Developer with Flutter technologies, currently pursuing Computer Science Engineering. I have hands-on
                        experience in academic and personal projects, building responsive web applications and cross-platform mobile apps.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        Currently learning <span className="text-gray-300">AI and Machine Learning concepts</span>, I am passionate about modern technologies,
                        problem-solving, and continuously improving my development skills through innovative projects and real-world applications.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        <span className="text-gray-300">Languages known:</span> English (Professional Proficiency) · Tamil (Native / Fluent)
                    </p>

                    <div className="space-y-3">
                        {details.map((d, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 4 }}
                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                                    {d.icon}
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider">{d.label}</p>
                                    {d.label === 'Email' ? (
                                        <a href={`mailto:${d.value}`} className="text-gray-100 font-medium hover:text-white transition-colors">
                                            {d.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-100 font-medium">{d.value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </Container>
    )
}
