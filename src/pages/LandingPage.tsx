import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Palette, Terminal, Heart, Sparkles } from 'lucide-react'

const LandingPage: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null)
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const sections = [
    {
      title: 'Graphic Design',
      path: '/design',
      icon: Palette,
      bgColor: 'bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a]',
      textColor: 'text-[#00a8ff]',
      accentColor: '#00a8ff',
      description: 'Visual storytelling through design',
      subtitle: 'Adobe Creative Suite • UI/UX',
      features: ['Brand Identity', 'Digital Art', 'Typography'],
    },
    {
      title: 'Academic & Professional',
      path: '/academic',
      icon: Terminal,
      bgColor: 'bg-gradient-to-br from-[#0a1929] via-[#1e3a5f] to-[#0a1929]',
      textColor: 'text-[#64b5f6]',
      accentColor: '#64b5f6',
      description: 'Engineering meets artificial intelligence',
      subtitle: 'AI • Data Science • Machine Learning',
      features: ['Computer Vision', 'Deep Learning', 'Python'],
    },
    {
      title: 'Personal Story',
      path: '/personal',
      icon: Heart,
      bgColor: 'bg-gradient-to-br from-black via-zinc-900 to-black',
      textColor: 'text-white',
      accentColor: '#e50914',
      description: 'Leadership, growth & aspirations',
      subtitle: 'Student Leader • AI Innovator',
      features: ['GENOS Founder', 'VP Leadership', 'Creative Mind'],
    },
  ]

  return (
    <>
    <div className="min-h-screen flex flex-col md:flex-row relative overflow-hidden">
      {/* Animated Welcome Screen */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <Sparkles size={80} className="text-purple-400 mx-auto mb-4" />
              </motion.div>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-white mb-2"
              >
                Welcome
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-purple-300"
              >
                Amine El-Hend's Portfolio
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm text-gray-400 font-medium">Explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-purple-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {sections.map((section, index) => {
        const Icon = section.icon
        return (
          <Link
            key={section.path}
            to={section.path}
            className="flex-1 group"
            onMouseEnter={() => setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`h-full ${section.bgColor} transition-all duration-700 relative overflow-hidden`}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at center, ${section.accentColor}15 0%, transparent 70%)`
                }}
              />
              
              {/* Animated grid pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `linear-gradient(${section.accentColor}50 1px, transparent 1px), linear-gradient(90deg, ${section.accentColor}50 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                  }}
                />
              </div>

              {/* Floating particles */}
              <AnimatePresence>
                {hoveredSection === index && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 100, x: Math.random() * 100 - 50 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          y: -100,
                          x: Math.random() * 200 - 100
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 3,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                        className="absolute bottom-0 left-1/2"
                        style={{
                          width: '4px',
                          height: '4px',
                          backgroundColor: section.accentColor,
                          borderRadius: '50%',
                          boxShadow: `0 0 10px ${section.accentColor}`
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>

              {/* Section number badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="absolute top-4 md:top-8 left-4 md:left-8 text-5xl md:text-8xl font-bold"
                style={{ color: section.accentColor }}
              >
                0{index + 1}
              </motion.div>

              {/* Decorative corner elements */}
              <div className="hidden md:block absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 opacity-20 group-hover:opacity-40 transition-opacity" style={{ borderColor: section.accentColor }} />
              <div className="hidden md:block absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 opacity-20 group-hover:opacity-40 transition-opacity" style={{ borderColor: section.accentColor }} />

              {/* Rotating ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div 
                  className="w-96 h-96 rounded-full border-2 border-dashed"
                  style={{ borderColor: section.accentColor }}
                />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-8 lg:px-12 py-12 md:py-20">
                <div className="text-center max-w-4xl">
                  {/* Icon with glow effect and orbiting elements */}
                  <div className="relative inline-block mb-6 md:mb-8">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: section.path === '/personal' ? 0 : 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <div 
                        className="relative"
                        style={{
                          filter: hoveredSection === index ? `drop-shadow(0 0 20px ${section.accentColor})` : 'none',
                          transition: 'filter 0.3s'
                        }}
                      >
                        <Icon 
                          size={60}
                          className={`md:w-20 md:h-20 ${section.path === '/personal' ? 'text-[#e50914]' : section.textColor}`}
                          strokeWidth={1.5} 
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Subtitle badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    className="mb-4"
                  >
                    <span 
                      className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider border"
                      style={{
                        color: section.accentColor,
                        borderColor: section.accentColor,
                        backgroundColor: `${section.accentColor}10`
                      }}
                    >
                      {section.subtitle}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    className={`text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 ${section.textColor} tracking-tight leading-tight`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      textShadow: hoveredSection === index ? `0 0 30px ${section.accentColor}40` : 'none',
                      fontFamily: section.path === '/academic' ? 'monospace' : 'inherit'
                    }}
                  >
                    {section.title}
                  </motion.h2>

                  {/* Description */}
                  <p className={`text-sm md:text-base lg:text-lg font-light ${section.textColor} opacity-80 mb-4 md:mb-6`}>
                    {section.description}
                  </p>

                  {/* Features tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
                    {section.features.map((feature, i) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          color: section.textColor,
                          backgroundColor: `${section.accentColor}20`,
                          border: `1px solid ${section.accentColor}30`
                        }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  {/* Explore button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="transition-opacity duration-300"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 md:space-x-3 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-xs md:text-sm tracking-wider transition-all duration-300"
                      style={{
                        color: section.path === '/personal' ? '#000' : section.path === '/academic' ? '#000' : '#fff',
                        backgroundColor: section.accentColor,
                        boxShadow: `0 10px 30px ${section.accentColor}40`
                      }}
                    >
                      <span>EXPLORE</span>
                      <svg width="16" height="16" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </div>
              </div>

              {/* Divider Line */}
              {index < sections.length - 1 && (
                <motion.div 
                  className={`absolute md:right-0 md:top-0 md:bottom-0 md:w-px md:h-full bottom-0 left-0 right-0 h-px opacity-20`}
                  style={{ backgroundColor: section.accentColor }}
                  animate={{
                    opacity: hoveredSection === index || hoveredSection === index + 1 ? 0.5 : 0.2
                  }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          </Link>
        )
      })}
      </div>

      {/* Preview Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12 md:py-20 px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-3 md:mb-4"
          >
            Explore My Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-center text-gray-400 text-base md:text-lg mb-10 md:mb-16 max-w-2xl mx-auto px-4"
          >
            Dive into three distinct worlds showcasing creativity, innovation, and personal growth
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <Link key={section.path} to={section.path}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + index * 0.2 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-opacity-100 transition-all duration-300 group"
                    style={{ 
                      borderColor: `${section.accentColor}30`,
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: section.path === '/personal' ? 0 : 15, scale: 1.1 }}
                      className="mb-4"
                    >
                      <div 
                        className="w-16 h-16 rounded-lg flex items-center justify-center"
                        style={{ 
                          backgroundColor: `${section.accentColor}20`,
                        }}
                      >
                        <Icon 
                          size={32} 
                          className="group-hover:scale-110 transition-transform"
                          style={{ color: section.accentColor }}
                          strokeWidth={1.5}
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 
                      className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform"
                      style={{ color: section.accentColor }}
                    >
                      {section.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {section.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {section.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.8 + index * 0.2 + i * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <div 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: section.accentColor }}
                          />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* View More Link */}
                    <motion.div
                      className="flex items-center space-x-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: section.accentColor }}
                    >
                      <span>Explore More</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="text-center mt-16"
          >
            <p className="text-gray-500 text-sm mb-4">
              © 2025 Amine El-Hend. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <a 
                href="https://github.com/ZenleX-Dost" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                GitHub
              </a>
              <span className="text-gray-700">•</span>
              <a 
                href="https://linkedin.com/in/amine-el-hend-1a4810228" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <span className="text-gray-700">•</span>
              <a 
                href="https://www.instagram.com/aminelhend/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default LandingPage
