import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

/*
const latexCode = `\\documentclass[a4paper,9pt]{article}

\\usepackage{url}
\\usepackage{parskip}
\\usepackage{graphicx}
\\usepackage[usenames,dvipsnames]{xcolor}
\\usepackage[scale=0.89]{geometry}
\\usepackage{tabularx}
\\usepackage{array}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{multicol}
\\usepackage{multirow}
\\usepackage{hyperref}
\\usepackage{fontawesome5}
\\usepackage{microtype}

% ── spacing tweaks ──────────────────────────────────────────────────────────
\\setlength{\\parskip}{2pt}
\\setlength{\\parindent}{0pt}
\\renewcommand{\\baselinestretch}{0.97}

% ── section title style ─────────────────────────────────────────────────────
\\titleformat{\\section}{\\large\\scshape\\raggedright}{}{0em}{}[\\titrule]
\\titlespacing{\\section}{0pt}{7pt}{4pt}

% ── custom column type ───────────────────────────────────────────────────────
\\newcolumntype{C}{>{\\centering\\arraybackslash}X}

% ── hyperlink colours ────────────────────────────────────────────────────────
\\hypersetup{
  colorlinks=true,
  urlcolor=black,
  linkcolor=black
}

\\begin{document}
\\pagestyle{empty}

% ============================================================
% HEADER
% ============================================================
\\begin{center}
  {\\Large \\textbf{DEVARAJ S}}\\\\[4pt]
  {\\small Full Stack Developer $|$ MERN Stack $|$ Next.js $|$ Flutter $|$ AWS}\\\\[5pt]
  \\small
  \\href{https://linkedin.com/in/devarajvetrii}{\\faLinkedin\\ LinkedIn} \\;\\;
  \\href{https://github.com/DEVARAJ-07}{\\faGithub\\ GitHub} \\;\\;
  \\href{mailto:devarajsubramani20@gmail.com}{\\faEnvelope\\ devarajsubramani20@gmail.com}
\\end{center}

\\vspace{4pt}

% ============================================================
% PROFESSIONAL SUMMARY
% ============================================================
\\section{Professional Summary}
{\\small
Full Stack Developer specializing in the \\textbf{MERN stack} with hands-on experience building, testing, and deploying scalable web and mobile applications.
Proficient in \\textbf{Flutter} cross-platform mobile development, \\textbf{CI/CD} via GitHub Actions, and cloud deployments on \\textbf{AWS}, focused on solving real-world problems through clean, efficient code.
}

% ============================================================
% TECHNICAL SKILLS
% ============================================================
\\section{Technical Skills}
{\\small
\\begin{tabularx}{\\linewidth}{@{} l X @{}}
  \\textbf{Languages}               & Java, C, SQL, Python\\\\[2pt]
  \\textbf{Frontend}                & React.js, Next.js, HTML5, CSS3, REST API Integration \\\\[2pt]
  \\textbf{Backend}                 & Node.js, Express.js, FastAPI, JWT Authentication \\\\[2pt]
  \\textbf{Mobile}                  & Flutter, Dart \\\\[2pt]
  \\textbf{Databases}               & MongoDB, MySQL, PostgreSQL, Supabase \\\\[2pt]
  \\textbf{Cloud \\& DevOps}         & AWS (EC2, S3, Lambda), Docker, CI/CD, GitHub Actions, Linux \\\\[2pt]
  \\textbf{Tools \\& Version Control}& Git, GitHub, Postman, VS Code, Android Studio, LM Studio \\
\\end{tabularx}
}

% ============================================================
% EDUCATION
% ============================================================
\\section{Education}
{\\small
\\begin{tabularx}{\\linewidth}{@{} l X r @{}}
  2023\\,--\\,2027 &
  \\textbf{Bachelor of Engineering, Computer Science and Engineering} \\newline
  Dr.\\ N.G.P.\\ Institute of Technology, Coimbatore
  & CGPA:\\ 8.01 \\
\\end{tabularx}
}

% ============================================================
% WORK EXPERIENCE
% ============================================================
\\section{Work Experience}
{\\small
\\noindent
\\textbf{Software Development Intern} \\hfill
\\textit{SkyLena Info Technology Pvt.\\ Ltd.\\ $|$ June 2025\\,--\\,July 2025}

\\begin{itemize}[nosep, leftmargin=1em, itemsep=2pt]
  \\item Engineered \\textbf{QuickBuy}, a full-stack e-commerce web application featuring
        product browsing, cart management, and an end-to-end order flow using
        \\textbf{HTML5, CSS3, and JavaScript}, reducing manual shopping workflow time
        by over \\textbf{60\\%} compared to the prior process.
  \\item Delivered \\textbf{responsive, cross-browser-compatible} UI components that improved
        interface accessibility across all major browsers.
\\end{itemize}
}

% ============================================================
% TECHNICAL PROJECTS
% ============================================================
\\section{Technical Projects}

{\\small

% ── Project 1 ──────────────────────────────────────────────
\\noindent
\\textbf{The Smart ATM\\,---\\,Cardless Cash Withdrawal System}\\;
\\href{https://github.com/DEVARAJ-07/SmartATM}{\\faGithub\\ }
\\hfill
\\textit{React.js, Node.js, Express.js, MongoDB, Twilio API, JWT}

\\begin{itemize}[leftmargin=1em, itemsep=2pt]
  \\item Architected a secure, full-stack banking web application enabling cardless
        withdrawals via \\textbf{OTP-based two-factor authentication}, integrating
        the \\textbf{Twilio REST API} for real-time SMS delivery.
  \\item Designed a \\textbf{RESTful API} backend with \\textbf{Node.js/Express.js} and
        \\textbf{MongoDB schema design}, enforcing daily transaction limits,
        \\textbf{JWT session management}, multi-step OTP verification, and input
        sanitization, reducing unauthorized-access risk by \\textbf{90\\%} in
        penetration tests.
\\end{itemize}

\\vspace{3pt}

% ── Project 2 ──────────────────────────────────────────────
\\noindent
\\textbf{SmartEco\\,---\\,AI-Driven Campus Resource Optimizer}\\;
\\href{https://github.com/DEVARAJ-07/SmartEco}{\\faGithub\\ }
\\hfill
\\textit{React.js, FastAPI, Python, Random Forest, REST API}

\\begin{itemize}[leftmargin=1em, itemsep=2pt]
  \\item Built a full-stack sustainability platform with a \\textbf{React.js} frontend
        consuming a \\textbf{Python FastAPI} REST API, integrating a
        \\textbf{Random Forest ML model} that achieved \\textbf{87\\%} prediction
        accuracy for forecasting campus energy and resource consumption.
  \\item Engineered a real-time environmental monitoring dashboard with dynamic
        \\textbf{data visualization} (charts and trend graphs), reducing manual
        resource-audit time by \\textbf{40\\%} for campus administrators and cutting
        weekly reporting overhead by \\textbf{3 hours}.
\\end{itemize}

\\vspace{3pt}

% ── Project 3 ──────────────────────────────────────────────
\\noindent
\\textbf{StudentBuddy\\,---\\,AI-Powered Smart Mentoring Platform}\\;
\\href{https://github.com/DEVARAJ-07/StudentBuddy}{\\faGithub\\ }
\\hfill
\\textit{Flutter, Dart, React.js, Node.js, Supabase, LLM Integration, JWT}

\\begin{itemize}[leftmargin=1em, itemsep=2pt]
  \\item Developed a cross-platform mentoring application with a
        \\textbf{Flutter (Dart)} frontend backed by \\textbf{Supabase}, enabling
        \\textbf{real-time one-to-one messaging} and unit-tested with
        \\textbf{40+ live users}.
  \\item Integrated a locally hosted \\textbf{LLM} (via LM Studio) as an AI chatbot
        delivering \\textbf{context-aware academic responses} with a
        \\textbf{privacy-first architecture}.
  \\item Designed a \\textbf{RESTful API} with \\textbf{Node.js} enforcing
        \\textbf{JWT authentication}, multi-role access control
        (student\\,/\\,mentor\\,/\\,admin), and relational \\textbf{database schema
        design} for user relationships.
\\end{itemize}

}

% ============================================================
% CERTIFICATIONS & ACHIEVEMENTS
% ============================================================
\\section{Certifications \\& Achievements}
{\\small
\\begin{itemize}[nosep, leftmargin=1em, itemsep=3pt]

  % ── Certifications ─────────────────────────────────────────
  \\item \\textbf{Generative AI: Working with Large Language Models} \\,--\\, May 2026
  \\item \\textbf{Cloud Computing} \\,--\\, NPTEL, 2024
  \\item \\textbf{Industrial IoT} \\,--\\, NPTEL, 2025

  % ── Hackathon Achievements ─────────────────────────────────
  \\item \\textbf{Smart India Hackathon (2023\\,-\\,2024)} \\,--\\, Selected in the \\textbf{First Round}
        in both \\textbf{2023} and \\textbf{2024} editions, advancing through internal
        institutional screening among competing student teams.

  \\item \\textbf{MSME Idea Hackathon 5.0 (2025\\,-\\,2026)} \\,--\\, Advanced to the
        \\textbf{Final Round} and were \\textbf{shortlisted for project selection} by
        MSME evaluators, representing one of the top teams from the national-level competition.

\\end{itemize}
}

\\end{document}
`
*/

export default function Resume() {
    return (
        <div className="max-w-5xl w-full mx-auto p-6 md:p-8 rounded-[32px] vision-window h-[78vh] overflow-y-auto pr-4 vision-scrollbar">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full rounded-2xl bg-white/[0.93] text-slate-900 border border-white/25 p-6 sm:p-10 shadow-inner select-text"
            >
                {/* Styled A4 sheet layout content */}
                <div className="space-y-4 text-left max-w-full font-newsreader" style={{ textShadow: 'none' }}>
                    {/* Header */}
                    <div className="text-center border-b border-slate-300 pb-3">
                        <h1 className="text-5xl font-bold tracking-wide text-slate-900" style={{ fontFamily: '"Times New Roman", Times, serif' }}>DEVARAJ S</h1>
                        <p className="text-[15.5px] font-bold text-slate-700 mt-2 uppercase tracking-wider" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                            Full Stack Developer | MERN Stack | Next.js | Flutter | AWS
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] text-slate-700 mt-2 font-semibold font-sans">
                            <a href="https://linkedin.com/in/devarajvetrii" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-950">
                                <FaLinkedin className="text-[12px]" /> LinkedIn
                            </a>
                            <span>•</span>
                            <a href="https://github.com/DEVARAJ-07" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-950">
                                <FaGithub className="text-[12px]" /> GitHub
                            </a>
                            <span>•</span>
                            <a href="mailto:devarajsubramani20@gmail.com" className="flex items-center gap-1 hover:text-slate-950">
                                <FaEnvelope className="text-[12px]" /> devarajsubramani20@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="space-y-1">
                        <h2 className="text-[17px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Professional Summary</h2>
                        <p className="text-[14px] leading-relaxed text-slate-800 font-normal">
                            Full Stack Developer specializing in the <strong>MERN stack</strong> with hands-on experience building, testing, and deploying scalable web and mobile applications. Proficient in <strong>Flutter</strong> cross-platform mobile development, <strong>CI/CD</strong> via GitHub Actions, and cloud deployments on <strong>AWS</strong>, focused on solving real-world problems through clean, efficient code.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="space-y-1">
                        <h2 className="text-[17px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Technical Skills</h2>
                        <div className="grid grid-cols-12 gap-y-1 text-[14px] leading-relaxed text-slate-800 font-normal">
                            <span className="col-span-3 font-bold text-slate-850">Languages:</span>
                            <span className="col-span-9">Java, C, SQL, Python</span>

                            <span className="col-span-3 font-bold text-slate-850">Frontend:</span>
                            <span className="col-span-9">React.js, Next.js, HTML5, CSS3, REST API Integration</span>

                            <span className="col-span-3 font-bold text-slate-850">Backend:</span>
                            <span className="col-span-9">Node.js, Express.js, FastAPI, JWT Authentication</span>

                            <span className="col-span-3 font-bold text-slate-850">Mobile:</span>
                            <span className="col-span-9">Flutter, Dart</span>

                            <span className="col-span-3 font-bold text-slate-850">Databases:</span>
                            <span className="col-span-9">MongoDB, MySQL, PostgreSQL, Supabase</span>

                            <span className="col-span-3 font-bold text-slate-850">Cloud & DevOps:</span>
                            <span className="col-span-9">AWS (EC2, S3, Lambda), Docker, CI/CD, GitHub Actions, Linux</span>

                            <span className="col-span-3 font-bold text-slate-850">Tools & Version Control:</span>
                            <span className="col-span-9">Git, GitHub, Postman, VS Code, Android Studio, LM Studio</span>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="space-y-1.5">
                        <h2 className="text-[17px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Work Experience</h2>
                        <div>
                            <div className="flex justify-between items-baseline text-[14.5px]">
                                <span className="font-bold text-slate-850">Software Development Intern</span>
                                <span className="text-[12px] text-slate-500 italic font-semibold">June 2025 – July 2025</span>
                            </div>
                            <p className="text-[13.5px] text-slate-650 font-semibold italic">SkyLena Info Technology Pvt. Ltd.</p>
                            <ul className="list-disc list-outside pl-4 mt-1 text-[14px] text-slate-800 space-y-1 font-normal">
                                <li>Engineered <strong>QuickBuy</strong>, a full-stack e-commerce web application featuring product browsing, cart management, and an end-to-end order flow using <strong>HTML5, CSS3, and JavaScript</strong>, reducing manual shopping workflow time by over <strong>60%</strong> compared to the prior process.</li>
                                <li>Delivered <strong>responsive, cross-browser-compatible</strong> UI components that improved interface accessibility across all major browsers.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="space-y-2">
                        <h2 className="text-[17px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Technical Projects</h2>
                        
                        {/* P1 */}
                        <div>
                            <div className="flex justify-between items-baseline text-[14.5px]">
                                <span className="font-bold text-slate-850">The Smart ATM – Cardless Cash Withdrawal System</span>
                                <span className="text-[12.5px] text-slate-650 font-semibold italic">React.js, Node.js, Express.js, MongoDB, Twilio API, JWT</span>
                            </div>
                            <ul className="list-disc list-outside pl-4 text-[14px] text-slate-800 mt-0.5 space-y-0.5 font-normal">
                                <li>Architected a secure, full-stack banking web application enabling cardless withdrawals via <strong>OTP-based two-factor authentication</strong>, integrating the <strong>Twilio REST API</strong> for real-time SMS delivery.</li>
                                <li>Designed a <strong>RESTful API</strong> backend with <strong>Node.js/Express.js</strong> and <strong>MongoDB schema design</strong>, enforcing daily transaction limits, <strong>JWT session management</strong>, multi-step OTP verification, and input sanitization, reducing unauthorized-access risk by <strong>90%</strong> in penetration tests.</li>
                            </ul>
                        </div>

                        {/* P2 */}
                        <div>
                            <div className="flex justify-between items-baseline text-[14.5px]">
                                <span className="font-bold text-slate-850">SmartEco – AI-Driven Campus Resource Optimizer</span>
                                <span className="text-[12.5px] text-slate-650 font-semibold italic">React.js, FastAPI, Python, Random Forest, REST API</span>
                            </div>
                            <ul className="list-disc list-outside pl-4 text-[14px] text-slate-800 mt-0.5 space-y-0.5 font-normal">
                                <li>Built a full-stack sustainability platform with a <strong>React.js</strong> frontend consuming a <strong>Python FastAPI</strong> REST API, integrating a <strong>Random Forest ML model</strong> that achieved <strong>87% prediction accuracy</strong> for forecasting campus energy and resource consumption.</li>
                                <li>Engineered a real-time environmental monitoring dashboard with dynamic <strong>data visualization</strong> (charts and trend graphs), reducing manual resource-audit time by <strong>40%</strong> for campus administrators and cutting weekly reporting overhead by <strong>3 hours</strong>.</li>
                            </ul>
                        </div>

                        {/* P3 */}
                        <div>
                            <div className="flex justify-between items-baseline text-[14.5px]">
                                <span className="font-bold text-slate-850">StudentBuddy – AI-Powered Smart Mentoring Platform</span>
                                <span className="text-[12.5px] text-slate-650 font-semibold italic">Flutter, Dart, React.js, Node.js, Supabase, LLM Integration, JWT</span>
                            </div>
                            <ul className="list-disc list-outside pl-4 text-[14px] text-slate-800 mt-0.5 space-y-0.5 font-normal">
                                <li>Developed a cross-platform mentoring application with a <strong>Flutter (Dart)</strong> frontend backed by <strong>Supabase</strong>, enabling <strong>real-time one-to-one messaging</strong> and unit-tested with <strong>40+ live users</strong>.</li>
                                <li>Integrated a locally hosted <strong>LLM</strong> (via LM Studio) as an AI chatbot delivering <strong>context-aware academic responses</strong> with a <strong>privacy-first architecture</strong>.</li>
                                <li>Designed a <strong>RESTful API</strong> with <strong>Node.js</strong> enforcing <strong>JWT authentication</strong>, multi-role access control (student / mentor / admin), and relational <strong>database schema design</strong> for user relationships.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-1">
                        <h2 className="text-[17px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Education</h2>
                        <div className="flex justify-between text-[14.5px]">
                            <div>
                                <span className="font-bold text-slate-850">Bachelor of Engineering, Computer Science and Engineering</span>
                                <br />
                                <span className="text-[13px] text-slate-600">Dr. N.G.P. Institute of Technology, Coimbatore</span>
                            </div>
                            <div className="text-right text-[13px]">
                                <span className="font-bold text-slate-850">CGPA: 8.01</span>
                                <br />
                                <span className="text-slate-500 italic font-medium">2023 – 2027</span>
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-1">
                        <h2 className="text-[17px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">Certifications & Achievements</h2>
                        <ul className="list-disc list-outside pl-4 text-[14px] text-slate-800 space-y-1.5 font-normal">
                            <li><strong>Generative AI: Working with Large Language Models</strong> – May 2026</li>
                            <li><strong>Cloud Computing</strong> – NPTEL, 2024</li>
                            <li><strong>Industrial IoT</strong> – NPTEL, 2025</li>
                            <li><strong>Smart India Hackathon (2023-2024)</strong> – Selected in the <strong>First Round</strong> in both <strong>2023</strong> and <strong>2024</strong> editions, advancing through internal institutional screening among competing student teams.</li>
                            <li><strong>MSME Idea Hackathon 5.0 (2025-2026)</strong> – Advanced to the <strong>Final Round</strong> and were <strong>shortlisted for project selection</strong> by MSME evaluators, representing one of the top teams from the national-level competition.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
