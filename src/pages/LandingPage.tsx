import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Palette, Terminal, Heart, Sparkles, Code, Briefcase } from 'lucide-react'

const LandingPage: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null)

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
    <div className="min-h-screen flex flex-col md:flex-row">
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

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-12 py-20">
                <div className="text-center max-w-4xl">
                  {/* Icon with glow effect */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: section.path === '/personal' ? 0 : 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-8"
                  >
                    <div 
                      className="relative"
                      style={{
                        filter: hoveredSection === index ? `drop-shadow(0 0 20px ${section.accentColor})` : 'none',
                        transition: 'filter 0.3s'
                      }}
                    >
                      <Icon 
                        size={80} 
                        className={`${section.path === '/personal' ? 'text-[#e50914]' : section.textColor}`}
                        strokeWidth={1.5} 
                      />
                    </div>
                  </motion.div>

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
                    className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${section.textColor} tracking-tight leading-tight`}
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
                  <p className={`text-base md:text-lg font-light ${section.textColor} opacity-80 mb-6`}>
                    {section.description}
                  </p>

                  {/* Features tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
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
                      className="inline-flex items-center space-x-3 px-8 py-3 rounded-full font-semibold text-sm tracking-wider transition-all duration-300"
                      style={{
                        color: section.path === '/personal' ? '#000' : section.path === '/academic' ? '#000' : '#fff',
                        backgroundColor: section.accentColor,
                        boxShadow: `0 10px 30px ${section.accentColor}40`
                      }}
                    >
                      <span>EXPLORE</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
  )
}

export default LandingPage
