import { motion } from 'framer-motion'
import { ScrollReveal, Container } from './ui'
import { HiSparkles } from 'react-icons/hi'
import {
    SiReact, SiJavascript, SiNodedotjs,
    SiGit, SiMongodb, SiGithub,
    SiHtml5, SiCsswizardry, SiFlutter, SiMysql,
    SiSupabase, SiExpress, SiAndroidstudio, SiPython,
} from 'react-icons/si'
import { FaJava, FaCode } from 'react-icons/fa'

const skillCategories = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
            { name: 'C', icon: <FaCode />, color: '#A8B9CC' },
            { name: 'Python', icon: <SiPython />, color: '#3776AB', note: 'Basics' },
        ],
    },
    {
        title: 'Web Development',
        skills: [
            { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
            { name: 'CSS3', icon: <SiCsswizardry />, color: '#1572B6' },
            { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
            { name: 'React.js', icon: <SiReact />, color: '#61DAFB' },
            { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
            { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
        ],
    },
    {
        title: 'Mobile App Development',
        skills: [
            { name: 'Android Studio', icon: <SiAndroidstudio />, color: '#3DDC84' },
            { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
        ],
    },
    {
        title: 'Database & Tools',
        skills: [
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
            { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
            { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
            { name: 'Git', icon: <SiGit />, color: '#F05032' },
            { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
        ],
    },
]

const professionalSkills = [
    'Problem Solving',
    'Time Management',
    'Communication',
    'Decision Making',
    'Debugging',
    'Leadership',
]

export default function Skills() {
    return (
        <Container id="skills" className="bg-dark-900/30">
            <div className="text-center mb-16">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-accent-400 text-xs font-medium mb-4 uppercase tracking-widest">
                        <HiSparkles />
                        <span>Tech Stack</span>
                    </div>
                    {/* Projects Built badge removed per request */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">Skills & Technologies</span>
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto text-lg">
                        Technologies I work with and tools I use regularly
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 mx-auto mt-6 rounded-full" />
                </ScrollReveal>
            </div>

            {/* Technical Skills */}
            <div className="space-y-12 mb-16">
                {skillCategories.map((category, catIdx) => (
                    <ScrollReveal key={category.title} delay={catIdx * 0.1}>
                        <h3 className="text-lg font-semibold text-dark-200 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent-500" />
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ y: -5, scale: 1.03 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="group glass-card rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-accent-500/20 transition-all duration-300 relative overflow-hidden cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span
                                        className="text-2xl transition-all duration-300 group-hover:scale-110 relative z-10"
                                        style={{ color: skill.color }}
                                    >
                                        {skill.icon}
                                    </span>
                                    <div className="text-center relative z-10">
                                        <span className="text-dark-300 text-sm font-medium group-hover:text-dark-100 transition-colors block">
                                            {skill.name}
                                        </span>
                                        {skill.note && (
                                            <span className="text-dark-500 text-xs">({skill.note})</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Professional Skills */}
            <ScrollReveal>
                <h3 className="text-lg font-semibold text-dark-200 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Professional Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                    {professionalSkills.map((skill) => (
                        <motion.span
                            key={skill}
                            whileHover={{ scale: 1.05 }}
                            className="px-5 py-2.5 glass-card rounded-2xl text-sm font-medium text-dark-200 hover:text-accent-400 hover:border-accent-500/20 transition-all duration-300 cursor-default"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </ScrollReveal>
        </Container>
    )
}
