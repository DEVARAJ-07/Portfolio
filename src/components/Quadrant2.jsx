import { motion } from 'framer-motion'
import { SectionHeading } from './ui'
import { FaGithub, FaReact, FaNodeJs, FaDatabase, FaMobileAlt, FaJava, FaCode, FaAws, FaRobot } from 'react-icons/fa'
import { SiPython, SiHtml5, SiCsswizardry, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiAndroidstudio, SiFlutter, SiMongodb, SiMysql, SiSupabase, SiGit, SiGithub, SiDart } from 'react-icons/si'

const skillCategories = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Java', icon: <FaJava className="text-3xl text-gray-300" /> },
            { name: 'C', icon: <FaCode className="text-3xl text-gray-300" /> },
            { name: 'Python', icon: <SiPython className="text-3xl text-gray-300" /> },
        ],
    },
    {
        title: 'Web Development',
        skills: [
            { name: 'HTML5', icon: <SiHtml5 className="text-3xl text-gray-300" /> },
            { name: 'CSS3', icon: <SiCsswizardry className="text-3xl text-gray-300" /> },
            { name: 'JavaScript', icon: <SiJavascript className="text-3xl text-gray-300" /> },
            { name: 'React.js', icon: <SiReact className="text-3xl text-gray-300" /> },
            { name: 'Node.js', icon: <SiNodedotjs className="text-3xl text-gray-300" /> },
            { name: 'Express.js', icon: <SiExpress className="text-3xl text-gray-300" /> },
        ],
    },
    {
        title: 'Mobile App Development',
        skills: [
            { name: 'Android Studio', icon: <SiAndroidstudio className="text-3xl text-gray-300" /> },
            { name: 'Flutter', icon: <SiFlutter className="text-3xl text-gray-300" /> },
            { name: 'Dart', icon: <SiDart className="text-3xl text-gray-300" /> },
        ],
    },
    {
        title: 'Database & Tools',
        skills: [
            { name: 'MongoDB', icon: <SiMongodb className="text-3xl text-gray-300" /> },
            { name: 'MySQL', icon: <SiMysql className="text-3xl text-gray-300" /> },
            { name: 'Supabase', icon: <SiSupabase className="text-3xl text-gray-300" /> },
            { name: 'Git', icon: <SiGit className="text-3xl text-gray-300" /> },
            { name: 'GitHub', icon: <SiGithub className="text-3xl text-gray-300" /> },
            { name: 'LM Studio', icon: <FaRobot className="text-3xl text-gray-300" /> },
            { name: 'AWS', icon: <FaAws className="text-3xl text-gray-300" /> },
        ],
    },
]

const projects = [
    {
        title: 'SmartEco 🌱 – Environmental Monitoring System',
        desc: 'An environmental monitoring system that tracks temperature, humidity, and pollution levels in real time. Features alert notifications when conditions cross safe limits.',
        tech: ['HTML', 'CSS', 'JS', 'Node.js', 'Python', 'MongoDB'],
        github: 'https://github.com/DEVARAJ-07/SmartEco'
    },
    {
        title: 'QuickBuy 🛒 – E-Commerce Web Application',
        desc: 'A modern e-commerce platform with user signup/login, product browsing, cart management, order placement, and downloadable PDF bill generation.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
        github: 'https://github.com/DEVARAJ-07/QuickBuy'
    },
    {
        title: 'StudentBuddy – AI Powered Mentoring App',
        desc: 'A student support application with AI-based mentoring, personalized learning recommendations, and test features to support student growth.',
        tech: ['MERN', 'Android Studio', 'Flutter', 'AI/ML'],
        github: 'https://github.com/DEVARAJ-07/StudentBuddy'
    },
    {
        title: 'ATM Simulation System 💳',
        desc: 'An ATM security system that detects faces, masks, and helmets in real time from camera feeds and alerts to a web dashboard for monitoring.',
        tech: ['Python', 'ML Model', 'YOLO'],
        github: 'https://github.com/DEVARAJ-07/ATM-Simulation-'
    },
    {
        title: 'E-mail-Fraud-Detection',
        desc: 'A machine learning-based security system designed to identify fraudulent and phishing emails automatically.',
        tech: ['Python', 'Machine Learning', 'Email Security'],
        github: 'https://github.com/DEVARAJ-07/E-mail-Fraud-Detection/tree/main/email-fraud-detector'
    },
    {
        title: 'Food Waste Management System',
        desc: 'A food waste management system aimed at reducing food wastage through organized tracking and management.',
        tech: ['Python', 'Excel', 'HTML', 'CSS'],
        github: 'https://github.com/DEVARAJ-07/Feed_the_need'
    }
]

export default function Quadrant2() {
    return (
        <div className="max-w-6xl mx-auto animate-in fade-in duration-700">
            <SectionHeading title="Projects and Builds" subtitle="Tools I use and things I've built" />
            
            {/* Tech Stack */}
            <div className="mb-20">
                <h3 className="text-2xl font-heading mb-8 flex items-center gap-4 text-white">
                    <span className="w-8 h-px bg-white/30" />
                    Skills & Technologies
                </h3>
                
                <div className="space-y-12">
                    {skillCategories.map((category, catIdx) => (
                        <div key={category.title}>
                            <h4 className="text-lg font-semibold text-gray-300 mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white" />
                                {category.title}
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: catIdx * 0.1 + i * 0.05 }}
                                        className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all flex flex-col items-center justify-center gap-3 text-center group"
                                    >
                                        <div className="transition-transform group-hover:scale-110">
                                            {skill.icon}
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects */}
            <div>
                <h3 className="text-2xl font-heading mb-8 flex items-center gap-4 text-white">
                    <span className="w-8 h-px bg-white/30" />
                    My Projects
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all flex flex-col h-full group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-lg font-bold text-white leading-tight pr-4">{proj.title}</h4>
                                <a href={proj.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <FaGithub size={20} />
                                </a>
                            </div>
                            <p className="text-gray-400 text-sm mb-6 flex-grow">{proj.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {proj.tech.map(t => (
                                    <span key={t} className="px-3 py-1 rounded-full border border-white/20 text-[10px] text-gray-300 tracking-wider uppercase font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
