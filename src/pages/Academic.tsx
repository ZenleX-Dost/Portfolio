import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Brain, Award, Download, Github, Calendar } from 'lucide-react'

// Real data from Amine's profile
const skills = [
  { name: 'Python', level: 95, category: 'programming' },
  { name: 'Machine Learning', level: 90, category: 'ai' },
  { name: 'PyTorch', level: 88, category: 'ai' },
  { name: 'TensorFlow', level: 85, category: 'ai' },
  { name: 'Data Analysis', level: 92, category: 'data' },
  { name: 'SQL', level: 70, category: 'data' },
  { name: 'C++', level: 80, category: 'programming' },
  { name: 'JAVA', level: 75, category: 'programming' },
  { name: 'CATIA V5', level: 80, category: 'design' },
  { name: 'Adobe Illustrator', level: 92, category: 'design' },
  { name: 'Adobe Photoshop', level: 98, category: 'design' },
  { name: 'Lean Six Sigma', level: 85, category: 'management' },
]

const projects = [
  {
    id: 1,
    title: 'GenAI-DIX: Generative AI for Product Design',
    description: 'Streamlit application generating design suggestions with product categorization and manufacturing materials recommendations',
    tech: ['Python', 'Streamlit', 'Generative AI'],
    github: 'https://github.com/ZenleX-Dost',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
  },
  {
    id: 2,
    title: 'Sketch to Image - GAN Architecture',
    description: 'Model using GAN to convert facial sketches into realistic images for police database comparison',
    tech: ['Python', 'GAN', 'PyTorch', 'Deep Learning'],
    github: 'https://github.com/ZenleX-Dost',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600',
  },
  {
    id: 3,
    title: 'Data Preprocessing Interface',
    description: 'Interface for preprocessing data (.csv, .xls, .txt) providing statistics via diagrams and graphs',
    tech: ['Python', 'Pandas', 'Data Visualization'],
    github: 'https://github.com/ZenleX-Dost',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
  },
  {
    id: 4,
    title: 'Explainable AI for Visual Quality Control',
    description: 'Prototype for radiographic/vision-based quality control with explainable AI decision support',
    tech: ['Python', 'Computer Vision', 'Explainable AI', 'Deep Learning'],
    github: 'https://github.com/ZenleX-Dost',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600',
  },
  {
    id: 5,
    title: 'Quality Control via PyQt6',
    description: 'Local offline application for CTF quality control comparing measurement control reports',
    tech: ['Python', 'PyQt6', 'Quality Control'],
    github: 'https://github.com/ZenleX-Dost',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600',
  },
  {
    id: 6,
    title: 'NASA Turbine Predictive Maintenance',
    description: 'Data mining project for predictive maintenance of NASA turbines',
    tech: ['Python', 'Machine Learning', 'Predictive Analytics'],
    github: 'https://github.com/ZenleX-Dost',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600',
  },
]

const timeline = [
  {
    year: '2021 - Present',
    type: 'education',
    title: 'Industrial Engineering - AI & Data Science',
    institution: 'ENSAM Meknes (Higher National School of Arts and Crafts)',
    description: 'Specializing in Artificial Intelligence and Data Science',
  },
  {
    year: 'July - August 2025',
    type: 'work',
    title: 'Year-End Project Internship',
    institution: 'Capgemini Engineering',
    description: 'Developed application to digitize verification process of CTFs in RCM for Stellantis',
  },
  {
    year: 'July 2024',
    type: 'work',
    title: 'Engineering Intern',
    institution: 'GAMA Intégration (GAMA Distribution)',
    description: 'Programmed IFM camera for anomaly detection on production line using TIA Portal',
  },
  {
    year: 'July - August 2023',
    type: 'work',
    title: 'Marketing Department Intern',
    institution: 'GRIF TECH',
    description: 'Created and designed technical catalog for SH and SHTEL brands',
  },
]

const Academic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'skills' | 'resume'>('about')
  const [terminalText, setTerminalText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  useEffect(() => {
    const text = '$ amine-el-hend --academic'
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setTerminalText(text.slice(0, index))
        index++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#0d1117]">
      {/* Terminal Header */}
      <div className="bg-[#161b22] border-b border-[#30363d]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="font-mono text-sm text-[#7ee787]">
            <span className="text-[#58a6ff]">amine@portfolio</span>
            <span className="text-[#8b949e]">:</span>
            <span className="text-[#f0883e]">~/academic</span>
            <span className="text-[#8b949e]"> $ </span>
            <span className="text-[#c9d1d9]">{terminalText}</span>
            {isTyping && <span className="animate-pulse">▊</span>}
            {!isTyping && <span className="animate-pulse ml-1 text-[#7ee787]">█</span>}
          </div>
        </div>
      </div>

      {/* Tab Navigation - Terminal Style */}
      <div className="bg-[#161b22] border-b border-[#30363d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1">
            {[
              { id: 'about', label: 'about.md', icon: Code },
              { id: 'projects', label: 'projects.json', icon: Brain },
              { id: 'skills', label: 'skills.py', icon: Database },
              { id: 'resume', label: 'timeline.log', icon: Award },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  whileHover={{ backgroundColor: '#21262d', y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center space-x-2 px-4 py-3 font-mono text-sm border-b-2 transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#0d1117] text-[#58a6ff] border-[#58a6ff]'
                      : 'bg-transparent text-[#8b949e] border-transparent hover:text-[#c9d1d9]'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Content */}
        <div className="space-y-6">
          {/* About Section */}
          {activeTab === 'about' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-sm"
            >
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition-colors duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Image Placeholder */}
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-48 h-48 bg-[#0d1117] border-2 border-[#30363d] rounded-lg overflow-hidden flex items-center justify-center relative group">
                      {/* Placeholder content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-24 h-24 text-[#58a6ff] opacity-50 group-hover:opacity-70 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#58a6ff] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      {/* Corner decorations */}
                      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#58a6ff] opacity-50"></div>
                      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#58a6ff] opacity-50"></div>
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#58a6ff] opacity-50"></div>
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#58a6ff] opacity-50"></div>
                    </div>
                    <p className="text-[#8b949e] text-xs text-center mt-2">profile.jpg</p>
                  </motion.div>

                  {/* Code Section */}
                  <div className="flex-1">
                    <div className="text-[#7ee787] mb-4"># About Me</div>
                    <div className="text-[#c9d1d9] space-y-3 leading-relaxed">
                      <p>
                        <span className="text-[#79c0ff]">const</span> <span className="text-[#d2a8ff]">student</span> = {'{'}
                      </p>
                      <p className="pl-4">
                        <span className="text-[#79c0ff]">name:</span> <span className="text-[#a5d6ff]">"Amine El-Hend"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#79c0ff]">role:</span> <span className="text-[#a5d6ff]">"Industrial Engineering Student"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#79c0ff]">specialization:</span> <span className="text-[#a5d6ff]">"AI & Data Science"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#79c0ff]">school:</span> <span className="text-[#a5d6ff]">"ENSAM Meknes"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#79c0ff]">location:</span> <span className="text-[#a5d6ff]">"Casablanca, Morocco"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#79c0ff]">status:</span> <span className="text-[#a5d6ff]">"Seeking internship - Feb 2026"</span>
                      </p>
                      <p>{'};'}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#30363d]">
                  <div className="text-[#7ee787] mb-3"># Stats</div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Projects', value: '15+', color: '#7ee787' },
                      { label: 'Skills', value: '20+', color: '#58a6ff' },
                      { label: 'Certificates', value: '8+', color: '#d2a8ff' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-[#0d1117] border border-[#30363d] rounded p-3 text-center">
                        <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-xs text-[#8b949e]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Projects Section */}
          {activeTab === 'projects' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id} 
                  className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 font-mono text-sm hover:border-[#58a6ff] transition-colors cursor-pointer group"
                  whileHover={{ scale: 1.01, x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <motion.span 
                        className="text-[#7ee787]"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {index + 1}.
                      </motion.span>
                      <span className="text-[#58a6ff] font-semibold group-hover:text-[#79c0ff] transition-colors">{project.title}</span>
                    </div>
                    <motion.a
                      href={project.github}
                      className="flex items-center space-x-1 text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={14} />
                      <span className="text-xs">View Code</span>
                    </motion.a>
                  </div>
                  <p className="text-[#c9d1d9] mb-3 pl-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pl-6">
                    <span className="text-[#8b949e]">Tech:</span>
                    {project.tech.map((tech, i) => (
                      <motion.span 
                        key={tech} 
                        className="text-[#d2a8ff]"
                        whileHover={{ scale: 1.1, color: '#ffa6ff' }}
                      >
                        {tech}{i < project.tech.length - 1 ? ',' : ''}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Skills Section */}
          {activeTab === 'skills' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 font-mono text-sm"
            >
              <div className="text-[#7ee787] mb-4"># Technical Skills</div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="flex items-center space-x-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 8 }}
                  >
                    <span className="text-[#58a6ff] w-48 group-hover:text-[#79c0ff] transition-colors">{skill.name}</span>
                    <div className="flex-1 flex items-center space-x-2">
                      <div className="flex-1 h-2 bg-[#0d1117] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 + index * 0.05 }}
                          whileHover={{ backgroundColor: '#79c0ff' }}
                          className="h-full bg-[#58a6ff]"
                        />
                      </div>
                      <span className="text-[#8b949e] w-12 text-right group-hover:text-[#7ee787] transition-colors">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Resume Section */}
          {activeTab === 'resume' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="flex justify-end mb-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-md font-mono text-sm flex items-center space-x-2 transition-colors shadow-lg hover:shadow-[#238636]/50"
                >
                  <motion.div
                    whileHover={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                  >
                    <Download size={14} />
                  </motion.div>
                  <span>Download CV</span>
                </motion.button>
              </div>

              {/* Timeline */}
              <div className="space-y-3">
                <div className="text-[#7ee787] font-mono text-sm mb-4"># Timeline</div>
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 8 }}
                    className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 font-mono text-sm hover:border-[#58a6ff] transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <Calendar size={14} className="text-[#7ee787]" />
                      </motion.div>
                      <span className="text-[#7ee787]">{item.year}</span>
                      <span className="text-[#8b949e]">|</span>
                      <span className="text-[#58a6ff] group-hover:text-[#79c0ff] transition-colors">{item.type === 'education' ? '🎓 Education' : '💼 Work'}</span>
                    </div>
                    <h3 className="text-[#c9d1d9] font-semibold mb-1 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-[#d2a8ff] mb-2 group-hover:text-[#ffa6ff] transition-colors">{item.institution}</p>
                    <p className="text-[#8b949e] text-xs group-hover:text-[#c9d1d9] transition-colors">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Academic
