import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Brain, Award, Download, Github, Calendar } from 'lucide-react'

// Typing effect component
const TypingText: React.FC<{ text: string; delay?: number; className?: string }> = ({ text, delay = 0, className = '' }) => {
  const [displayText, setDisplayText] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      setDisplayText('')
      return
    }

    let currentIndex = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, 80)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, delay, isHovered])

  return (
    <span 
      className={className}
      onMouseEnter={() => setIsHovered(true)}
    >
      {isHovered ? displayText : text}
      {isHovered && displayText.length < text.length && <span className="animate-pulse">▊</span>}
    </span>
  )
}

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

const certifications = [
  {
    id: 1,
    title: 'GenAI for Executives & Business Leaders: Integration Strategy',
    issuer: 'IBM - Coursera',
    date: '2024',
    credentialId: '06GVSZ3WBL9H',
    skills: ['Generative AI', 'Business Strategy', 'AI Integration', 'Leadership'],
    verified: true,
    pdfUrl: '/Certificates/Coursera 06GVSZ3WBL9H.pdf',
  },
  {
    id: 2,
    title: 'GenAI for Executives & Business Leaders: An Introduction',
    issuer: 'IBM - Coursera',
    date: '2024',
    credentialId: '0T5ZHMQ97Z5E',
    skills: ['Generative AI', 'Business Leadership', 'AI Strategy', 'Innovation'],
    verified: true,
    pdfUrl: '/Certificates/Coursera 0T5ZHMQ97Z5E.pdf',
  },
  {
    id: 3,
    title: 'GenAI for Executives & Business Leaders: Formulate Your Use Case',
    issuer: 'IBM - Coursera',
    date: '2024',
    credentialId: '36P5FWOSEZEL',
    skills: ['Generative AI', 'Use Case Development', 'Business Planning', 'AI Applications'],
    verified: true,
    pdfUrl: '/Certificates/Coursera 36P5FWOSEZEL.pdf',
  },
  {
    id: 4,
    title: 'Foundations of Project Management',
    issuer: 'Google - Coursera',
    date: '2024',
    credentialId: 'B8MJDEBYBMON',
    skills: ['Project Management', 'Planning', 'Organization', 'Leadership'],
    verified: true,
    pdfUrl: '/Certificates/Coursera B8MJDEBYBMON.pdf',
  },
  {
    id: 5,
    title: 'Machine Learning with Python',
    issuer: 'IBM - Coursera',
    date: '2023',
    credentialId: 'Q8CW9MVC6WW3',
    skills: ['Machine Learning', 'Python', 'Scikit-learn', 'Data Science'],
    verified: true,
    pdfUrl: '/Certificates/Coursera Q8CW9MVC6WW3.pdf',
  },
  {
    id: 6,
    title: 'Project Initiation: Starting a Successful Project',
    issuer: 'Google - Coursera',
    date: '2023',
    credentialId: 'V37YZRV84K2I',
    skills: ['Project Initiation', 'Stakeholder Management', 'Goals Setting', 'Planning'],
    verified: true,
    pdfUrl: '/Certificates/Coursera V37YZRV84K2I.pdf',
  },
  {
    id: 7,
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Stanford & DeepLearning.AI - Coursera',
    date: '2023',
    credentialId: 'VHF7S0YDAKDO',
    skills: ['Supervised Learning', 'Regression', 'Classification', 'Machine Learning'],
    verified: true,
    pdfUrl: '/Certificates/Coursera VHF7S0YDAKDO.pdf',
  },
  {
    id: 8,
    title: 'Generative AI for Executives and Business Leaders',
    issuer: 'IBM - Coursera',
    date: '2023',
    credentialId: 'YHZ60NPU5MBO',
    skills: ['Generative AI', 'Executive Leadership', 'AI Strategy', 'Business Innovation'],
    verified: true,
    pdfUrl: '/Certificates/Coursera YHZ60NPU5MBO.pdf',
  },
  {
    id: 9,
    title: 'Artificial Intelligence (ARS): Build the Most Powerful AI',
    issuer: 'Udemy',
    date: '2023',
    credentialId: 'UC-8767dcff-f1ff-4f20-ad77-aeca5a70fcd0',
    skills: ['Artificial Intelligence', 'Deep Learning', 'Neural Networks', 'AI Development'],
    verified: true,
    pdfUrl: '/Certificates/UC-8767dcff-f1ff-4f20-ad77-aeca5a70fcd0.pdf',
  },
  {
    id: 10,
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    date: '2024',
    credentialId: 'm7pik6yi6v35',
    skills: ['Model Context Protocol', 'AI Systems', 'Context Management', 'LLMs'],
    verified: true,
    pdfUrl: '/Certificates/m7pik6yi6v35.pdf',
  },
  {
    id: 11,
    title: 'Model Context Protocol: Advanced Topics',
    issuer: 'Anthropic',
    date: '2024',
    credentialId: 'd5394qce5ust',
    skills: ['Advanced MCP', 'AI Architecture', 'System Integration', 'Protocol Design'],
    verified: true,
    pdfUrl: '/Certificates/d5394qce5ust.pdf',
  },
  {
    id: 12,
    title: 'Oracle Certified Foundation Associate',
    issuer: 'Oracle',
    date: '2025',
    credentialId: '101469656OCI25AICFA',
    skills: ['Oracle Cloud', 'Database Management', 'Cloud Infrastructure', 'Certification'],
    verified: true,
    pdfUrl: '/Certificates/101469656OCI25AICFA.pdf',
  },
]

const Academic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'skills' | 'resume' | 'certifications'>('about')
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
    <div className="min-h-screen bg-[#0d1117] pt-20">
      {/* GitHub-style contribution graph header */}
      <div className="bg-[#010409] border-b border-[#30363d] py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="text-[#7d8590] text-xs font-mono">GitHub Portfolio v2.0</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-[#7ee787] animate-pulse"></div>
                <span className="text-[#7ee787] text-xs">Online</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs text-[#7d8590]">
              <span className="hidden sm:inline">Last updated: Nov 2025</span>
              <span className="hidden sm:inline text-[#30363d]">•</span>
              <span className="text-[#58a6ff]">⭐ Star this repo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Header */}
      <div className="bg-[#161b22] border-b border-[#30363d]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-4 md:pt-5 pb-3 md:pb-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#ff5f56] shadow-lg"></div>
            <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#ffbd2e] shadow-lg"></div>
            <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#27c93f] shadow-lg"></div>
            <span className="ml-2 md:ml-4 text-[#7d8590] text-xs font-mono">bash</span>
          </div>
          <div className="font-mono text-xs md:text-sm text-[#7ee787] overflow-x-auto">
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

      {/* Tab Navigation - GitHub File Explorer Style */}
      <div className="bg-[#161b22] border-b border-[#30363d]">
        <div className="max-w-7xl mx-auto px-2 md:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 gap-2">
            <div className="flex space-x-1 overflow-x-auto w-full sm:w-auto scrollbar-hide">
              {[
                { id: 'about', label: 'README.md', icon: Code },
                { id: 'projects', label: 'projects.json', icon: Brain },
                { id: 'skills', label: 'skills.py', icon: Database },
                { id: 'certifications', label: 'certifications.yml', icon: Award },
                { id: 'resume', label: 'experience.log', icon: Calendar },
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    whileHover={{ backgroundColor: '#21262d' }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-2 md:py-2.5 font-mono text-xs md:text-sm transition-all relative whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-[#0d1117] text-[#58a6ff]'
                        : 'bg-transparent text-[#8b949e] hover:text-[#c9d1d9]'
                    }`}
                  >
                    <Icon size={12} className="md:w-3.5 md:h-3.5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split('.')[0]}</span>
                    {activeTab === tab.id && (
                      <>
                        <motion.div
                          layoutId="activeIndicator"
                          className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#58a6ff]"
                        />
                        <motion.div
                          layoutId="activeTabBorder"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#58a6ff]"
                        />
                      </>
                    )}
                  </motion.button>
                )
              })}
            </div>
            <div className="hidden md:flex items-center space-x-3 text-xs text-[#7d8590]">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-[#238636]"></span>
                <span>4 branches</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-[#58a6ff]"></span>
                <span>15+ commits</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8">

        {/* Content */}
        <div className="space-y-6">
          {/* About Section */}
          {activeTab === 'about' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-xs md:text-sm"
            >
              <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 md:p-6 hover:border-[#58a6ff] transition-colors duration-300 shadow-lg">
                {/* GitHub-style file header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 pb-3 border-b border-[#30363d] gap-2">
                  <div className="flex items-center space-x-2">
                    <Code size={14} className="md:w-4 md:h-4 text-[#58a6ff]" />
                    <span className="text-[#c9d1d9] font-mono text-xs md:text-sm">README.md</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[10px] md:text-xs">
                    <span className="text-[#7d8590] font-mono">152 lines</span>
                    <span className="text-[#7d8590]">•</span>
                    <span className="text-[#7d8590] hidden sm:inline">Last commit: 2 days ago</span>
                    <span className="text-[#7d8590] sm:hidden">2d ago</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {/* Profile Image */}
                  <motion.div 
                    className="flex-shrink-0 mx-auto md:mx-0"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-32 h-32 md:w-48 md:h-48 bg-[#0d1117] border-2 border-[#30363d] rounded-lg overflow-hidden relative group">
                      {/* Profile Image */}
                      <img 
                        src="/profile.png" 
                        alt="Amine El-Hend"
                        className="w-full h-full object-cover"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#58a6ff] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      {/* Corner decorations */}
                      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#58a6ff] opacity-50"></div>
                      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#58a6ff] opacity-50"></div>
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#58a6ff] opacity-50"></div>
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#58a6ff] opacity-50"></div>
                    </div>
                    <p className="text-[#8b949e] text-xs text-center mt-2">profile.png</p>
                  </motion.div>

                  {/* Code Section */}
                  <div className="flex-1">
                    <div className="text-[#7ee787] mb-4"># About Me</div>
                    <div className="text-[#c9d1d9] space-y-3 leading-relaxed">
                      <p>
                        <span className="text-[#79c0ff]">const</span> <span className="text-[#d2a8ff]">student</span> = {'{'}
                      </p>
                      <p className="pl-4">
                        <span className="text-[#79c0ff]">name:</span> <span className="text-[#a5d6ff]">"<TypingText text="Amine El-Hend" className="text-[#a5d6ff]" />"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#79c0ff]">role:</span> <span className="text-[#a5d6ff]">"<TypingText text="Industrial Engineering Student" className="text-[#a5d6ff]" delay={100} />"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#79c0ff]">specialization:</span> <span className="text-[#a5d6ff]">"<TypingText text="AI & Data Science" className="text-[#a5d6ff]" delay={200} />"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#79c0ff]">school:</span> <span className="text-[#a5d6ff]">"<TypingText text="ENSAM Meknes" className="text-[#a5d6ff]" delay={300} />"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#79c0ff]">location:</span> <span className="text-[#a5d6ff]">"<TypingText text="Casablanca, Morocco" className="text-[#a5d6ff]" delay={400} />"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-[#79c0ff]">status:</span> <span className="text-[#a5d6ff]">"<TypingText text="Seeking internship - Feb 2026" className="text-[#a5d6ff]" delay={500} />"</span>
                      </p>
                      <p>{'};'}</p>
                    </div>
                  </div>
                </div>

                {/* GitHub-style stats pinned repositories */}
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-[#30363d]">
                  <div className="flex items-center space-x-2 mb-3 md:mb-4">
                    <span className="text-[#7ee787] font-mono text-xs md:text-sm"># Pinned</span>
                    <span className="text-[#7d8590] text-xs hidden sm:inline">— Showcase your work</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    {[
                      { label: 'Public repos', value: '15+', color: '#7ee787' },
                      { label: 'Technologies', value: '20+', color: '#58a6ff' },
                      { label: 'Achievements', value: '8+', color: '#d2a8ff' },
                    ].map((stat) => (
                      <motion.div 
                        key={stat.label} 
                        className="bg-[#0d1117] border border-[#30363d] rounded-md p-2 md:p-4 text-center hover:border-[#58a6ff] transition-colors cursor-pointer group"
                        whileHover={{ y: -4, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-lg md:text-2xl font-bold mb-0.5 md:mb-1 font-mono" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] md:text-xs text-[#8b949e] font-mono">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* GitHub contribution graph */}
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-[#30363d]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 md:mb-4 gap-2">
                    <span className="text-[#c9d1d9] font-mono text-xs md:text-sm">Contribution Activity</span>
                    <div className="flex items-center space-x-2 text-xs text-[#7d8590]">
                      <span className="hidden sm:inline">Less</span>
                      <div className="flex gap-1">
                        {['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'].map((color, i) => (
                          <div key={i} className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-sm border border-[#30363d]" style={{ backgroundColor: color }} />
                        ))}
                      </div>
                      <span className="hidden sm:inline">More</span>
                    </div>
                  </div>
                  <div className="overflow-x-auto pb-2">
                    <div className="inline-grid grid-rows-7 grid-flow-col gap-[3px]">
                      {(() => {
                        // ZENLEX pattern - each letter is 5 columns wide with 1 space between
                        // Z E N L E X = 6 letters × 6 cols = 36 columns total
                        const pattern = [
                          // Row 0 (top)
                          [1,1,1,1,1,0, 1,1,1,1,1,0, 1,0,0,0,1,0, 1,0,0,0,0,0, 1,1,1,1,1,0, 1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                          // Row 1
                          [0,0,0,0,1,0, 1,0,0,0,0,0, 1,1,0,0,1,0, 1,0,0,0,0,0, 1,0,0,0,0,0, 1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                          // Row 2
                          [0,0,0,1,0,0, 1,0,0,0,0,0, 1,0,1,0,1,0, 1,0,0,0,0,0, 1,0,0,0,0,0, 0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                          // Row 3 (middle)
                          [0,0,1,0,0,0, 1,1,1,1,1,0, 1,0,0,1,1,0, 1,0,0,0,0,0, 1,1,1,1,1,0, 0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                          // Row 4
                          [0,1,0,0,0,0, 1,0,0,0,0,0, 1,0,0,0,1,0, 1,0,0,0,0,0, 1,0,0,0,0,0, 0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                          // Row 5
                          [1,0,0,0,0,0, 1,0,0,0,0,0, 1,0,0,0,1,0, 1,0,0,0,1,0, 1,0,0,0,0,0, 1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                          // Row 6 (bottom)
                          [1,1,1,1,1,0, 1,1,1,1,1,0, 1,0,0,0,1,0, 1,1,1,1,1,0, 1,1,1,1,1,0, 1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        ]
                        
                        const colors = ['#161b22', '#39d353'] // dark and bright green
                        
                        return Array.from({ length: 53 * 7 }).map((_, i) => {
                          const col = Math.floor(i / 7)
                          const row = i % 7
                          
                          let isActive = 0
                          if (col < pattern[row].length) {
                            isActive = pattern[row][col]
                          } else {
                            // Random sparse pattern for remaining columns
                            isActive = Math.random() > 0.85 ? 1 : 0
                          }
                          
                          const contributions = isActive ? Math.floor(Math.random() * 10) + 5 : 0
                          
                          return (
                            <motion.div
                              key={i}
                              className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-sm cursor-pointer border border-[#30363d]/50"
                              style={{ backgroundColor: colors[isActive] }}
                              whileHover={{ scale: 1.5, zIndex: 10 }}
                              title={`${contributions} contribution${contributions !== 1 ? 's' : ''}`}
                            />
                          )
                        })
                      })()}
                    </div>
                  </div>
                  <div className="mt-2 text-[#7d8590] text-xs">
                    Learn how we count contributions
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
              {projects.map((project) => (
                <motion.div 
                  key={project.id} 
                  className="bg-[#161b22] border border-[#30363d] rounded-md p-3 md:p-5 font-mono text-xs md:text-sm hover:border-[#58a6ff] transition-all cursor-pointer group shadow-lg hover:shadow-[#58a6ff]/20"
                  whileHover={{ scale: 1.01, x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* GitHub repo-style header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-2 md:space-x-3 flex-1">
                      <motion.div 
                        className="mt-1 flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Brain size={14} className="md:w-4 md:h-4 text-[#7ee787]" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[#58a6ff] font-semibold text-sm md:text-base group-hover:text-[#79c0ff] transition-colors group-hover:underline break-words">{project.title}</span>
                          <span className="px-2 py-0.5 text-[10px] md:text-xs border border-[#30363d] rounded-full text-[#7d8590] whitespace-nowrap">Public</span>
                        </div>
                        <p className="text-[#c9d1d9] text-xs mb-2 md:mb-3 leading-relaxed">{project.description}</p>
                        {/* GitHub-style language tags */}
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {project.tech.map((tech) => (
                            <motion.span 
                              key={tech} 
                              className="px-2 py-1 text-xs bg-[#1f6feb]/10 text-[#58a6ff] rounded-md border border-[#1f6feb]/20 hover:border-[#58a6ff] hover:bg-[#1f6feb]/20 transition-colors"
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 px-2 md:px-3 py-1.5 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-md text-[#c9d1d9] hover:text-white transition-all flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={12} className="md:w-3.5 md:h-3.5" />
                      <span className="text-xs font-medium hidden sm:inline">Code</span>
                    </motion.a>
                  </div>
                  
                  {/* GitHub repo-style footer stats */}
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-3 pt-3 border-t border-[#30363d] text-[10px] md:text-xs text-[#7d8590]">
                    <div className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#3572a5]"></span>
                      <span className="hidden sm:inline">Python</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>⭐</span>
                      <span>{Math.floor(Math.random() * 50) + 10}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>🔱</span>
                      <span>{Math.floor(Math.random() * 20) + 5}</span>
                    </div>
                    <span className="hidden sm:inline">Updated {Math.floor(Math.random() * 30) + 1} days ago</span>
                    <span className="sm:hidden">{Math.floor(Math.random() * 30) + 1}d ago</span>
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
              className="bg-[#161b22] border border-[#30363d] rounded-md p-4 md:p-6 font-mono text-xs md:text-sm shadow-lg"
            >
              {/* GitHub insights-style header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 pb-3 md:pb-4 border-b border-[#30363d] gap-2">
                <div className="flex items-center space-x-2">
                  <Database size={14} className="md:w-4 md:h-4 text-[#58a6ff]" />
                  <span className="text-[#7ee787] text-sm md:text-base"># Language & Framework Proficiency</span>
                </div>
                <span className="text-[#7d8590] text-[10px] md:text-xs">Based on repository analysis</span>
              </div>

              <div className="space-y-3">
                {skills.map((skill, index) => {
                  const getLanguageColor = (category: string) => {
                    const colors: Record<string, string> = {
                      programming: '#3572a5',
                      ai: '#f1e05a',
                      data: '#e34c26',
                      design: '#563d7c',
                      management: '#2b7489'
                    }
                    return colors[category] || '#58a6ff'
                  }
                  
                  return (
                    <motion.div 
                      key={skill.name} 
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 8 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: getLanguageColor(skill.category) }}
                          />
                          <span className="text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors font-medium">{skill.name}</span>
                        </div>
                        <span className="text-[#7d8590] text-xs group-hover:text-[#7ee787] transition-colors font-bold">{skill.level}%</span>
                      </div>
                      <div className="flex-1 h-2 bg-[#21262d] rounded-full overflow-hidden border border-[#30363d]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 + index * 0.05 }}
                          className="h-full relative"
                          style={{ backgroundColor: getLanguageColor(skill.category) }}
                        >
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Skills distribution pie */}
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-[#30363d]">
                <div className="text-[#7d8590] text-[10px] md:text-xs mb-2 md:mb-3">Skills Distribution</div>
                <div className="flex gap-2 md:gap-3 flex-wrap">
                  {['Programming', 'AI/ML', 'Data Science', 'Design', 'Management'].map((category, i) => (
                    <div key={category} className="flex items-center space-x-1 md:space-x-2">
                      <div 
                        className="w-2 h-2 md:w-3 md:h-3 rounded-full flex-shrink-0"
                        style={{ 
                          backgroundColor: ['#3572a5', '#f1e05a', '#e34c26', '#563d7c', '#2b7489'][i] 
                        }}
                      />
                      <span className="text-[#8b949e] text-[10px] md:text-xs">{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Certifications Section */}
          {activeTab === 'certifications' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="bg-[#161b22] border border-[#30363d] rounded-md p-3 md:p-5 font-mono text-xs md:text-sm hover:border-[#58a6ff] transition-all cursor-pointer group shadow-lg hover:shadow-[#58a6ff]/20"
                  >
                    {/* Certificate Header */}
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start space-x-2 mb-2">
                          <Award size={14} className="md:w-4 md:h-4 text-[#58a6ff] flex-shrink-0 mt-0.5" />
                          <h3 className="text-[#c9d1d9] font-semibold text-xs md:text-base group-hover:text-[#58a6ff] transition-colors leading-tight">
                            {cert.title}
                          </h3>
                        </div>
                        <p className="text-[#d2a8ff] text-xs md:text-sm mb-1 group-hover:text-[#ffa6ff] transition-colors">
                          {cert.issuer}
                        </p>
                        <p className="text-[#7d8590] text-[10px] md:text-xs">{cert.date}</p>
                      </div>
                      {cert.verified && (
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="flex-shrink-0"
                        >
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#238636]/20 border border-[#238636] flex items-center justify-center">
                            <span className="text-[#7ee787] text-sm md:text-lg">✓</span>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Credential ID */}
                    <div className="mb-2 md:mb-3 pb-2 md:pb-3 border-b border-[#30363d]">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="text-[#7d8590] text-[10px] md:text-xs whitespace-nowrap">Credential ID:</span>
                        <code className="text-[#58a6ff] text-[10px] md:text-xs bg-[#1f6feb]/10 px-2 py-0.5 rounded truncate">
                          {cert.credentialId}
                        </code>
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div>
                      <span className="text-[#7d8590] text-[10px] md:text-xs mb-2 block">Skills:</span>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {cert.skills.map((skill, i) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-2 py-1 text-xs bg-[#1f6feb]/10 text-[#58a6ff] rounded-md border border-[#1f6feb]/20 hover:border-[#58a6ff] hover:bg-[#1f6feb]/20 transition-colors"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* View Certificate Button */}
                    <div className="mt-3 pt-3 border-t border-[#30363d]">
                      <motion.a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        className="text-[#58a6ff] text-xs flex items-center space-x-1 hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <span>View Certificate</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </motion.a>
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
              {/* GitHub Actions-style header */}
              <div className="flex items-center justify-between mb-6 bg-[#161b22] border border-[#30363d] rounded-md p-4">
                <div className="flex items-center space-x-3">
                  <Award size={18} className="text-[#58a6ff]" />
                  <div>
                    <h3 className="text-[#c9d1d9] font-mono font-medium">Professional Timeline</h3>
                    <p className="text-[#7d8590] text-xs mt-0.5">Education & Work Experience</p>
                  </div>
                </div>
                <motion.a
                  href="/doc/CV.pdf"
                  download="Amine_EL-Hend_CV.pdf"
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
                </motion.a>
              </div>

              {/* GitHub commit-style timeline */}
              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline connector line */}
                    {index < timeline.length - 1 && (
                      <div className="absolute left-[21px] top-12 w-0.5 h-full bg-[#30363d] z-0"></div>
                    )}
                    
                    <motion.div
                      whileHover={{ scale: 1.01, x: 8 }}
                      className="relative bg-[#161b22] border border-[#30363d] rounded-md p-5 mb-3 font-mono text-sm hover:border-[#58a6ff] transition-all cursor-pointer group shadow-lg hover:shadow-[#58a6ff]/20"
                    >
                      {/* GitHub commit-style indicator */}
                      <div className="absolute -left-2 top-6 w-10 h-10 bg-[#0d1117] rounded-full border-2 border-[#30363d] flex items-center justify-center group-hover:border-[#58a6ff] transition-colors z-10">
                        <motion.div 
                          className={`w-4 h-4 rounded-full ${item.type === 'education' ? 'bg-[#58a6ff]' : 'bg-[#7ee787]'}`}
                          whileHover={{ scale: 1.3 }}
                          transition={{ duration: 0.3 }}
                        >
                        </motion.div>
                      </div>

                      <div className="pl-10">
                        {/* Header with date and type */}
                        <div className="flex items-center space-x-2 mb-2">
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <Calendar size={14} className="text-[#7ee787]" />
                          </motion.div>
                          <span className="text-[#7ee787] font-medium">{item.year}</span>
                          <span className="text-[#30363d]">•</span>
                          <span className="px-2 py-0.5 text-xs bg-[#1f6feb]/10 text-[#58a6ff] rounded-full border border-[#1f6feb]/20">
                            {item.type === 'education' ? 'Education' : 'Professional'}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-[#c9d1d9] font-semibold text-base mb-2 group-hover:text-[#58a6ff] transition-colors">{item.title}</h3>
                        
                        {/* Institution */}
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-[#d2a8ff] text-sm group-hover:text-[#ffa6ff] transition-colors">{item.institution}</span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-[#8b949e] text-xs leading-relaxed group-hover:text-[#c9d1d9] transition-colors">{item.description}</p>
                        
                        {/* GitHub-style commit hash */}
                        <div className="mt-3 pt-3 border-t border-[#30363d] flex items-center space-x-2">
                          <span className="text-[#7d8590] text-xs">Commit:</span>
                          <code className="text-[#58a6ff] text-xs bg-[#1f6feb]/10 px-2 py-0.5 rounded">
                            {Math.random().toString(36).substring(2, 9)}
                          </code>
                        </div>
                      </div>
                    </motion.div>
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
