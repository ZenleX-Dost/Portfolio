import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Palette, Terminal, Heart } from 'lucide-react'

const LandingPage: React.FC = () => {
  const sections = [
    {
      title: 'Graphic Design',
      path: '/design',
      icon: Palette,
      bgColor: 'bg-[#2c2c2c]',
      textColor: 'text-[#00a8ff]',
      hoverColor: 'hover:bg-[#3c3c3c]',
      description: 'Visual storytelling through design',
    },
    {
      title: 'Academic & Professional',
      path: '/academic',
      icon: Terminal,
      bgColor: 'bg-[#0d1117]',
      textColor: 'text-[#58a6ff]',
      hoverColor: 'hover:bg-[#161b22]',
      description: 'Engineering meets artificial intelligence',
    },
    {
      title: 'Personal Story',
      path: '/personal',
      icon: Heart,
      bgColor: 'bg-warm-cream',
      textColor: 'text-warm-sepia',
      hoverColor: 'hover:bg-warm-honey',
      description: 'Leadership, growth & aspirations',
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
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`h-full ${section.bgColor} ${section.hoverColor} transition-all duration-500 relative overflow-hidden`}
            >
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="currentColor" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill={`url(#pattern-${index})`} />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center px-12 py-20">
                <div className="text-center max-w-4xl">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-block mb-6"
                  >
                    <Icon size={64} className={`${section.textColor} opacity-80`} strokeWidth={1} />
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    className={`text-5xl md:text-7xl ${section.path === '/academic' ? 'font-mono' : section.path === '/design' ? 'font-body' : 'font-display'} ${section.path === '/design' ? 'font-semibold' : 'font-light'} mb-4 ${section.textColor} tracking-wide`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {section.title}
                  </motion.h2>

                  {/* Description */}
                  <p className={`text-lg md:text-xl ${section.path === '/academic' ? 'font-mono' : 'font-body'} font-light ${section.textColor} opacity-70`}>
                    {section.description}
                  </p>

                  {/* Hover Indicator */}
                  <motion.div
                    className={`mt-8 inline-flex items-center space-x-2 ${section.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    <span className="font-vintage font-light tracking-widest">EXPLORE</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Divider Line - Vertical on desktop, horizontal on mobile */}
              {index < sections.length - 1 && (
                <div className={`absolute md:right-0 md:top-0 md:bottom-0 md:w-px md:h-full bottom-0 left-0 right-0 h-px bg-current opacity-10 ${section.textColor}`} />
              )}
            </motion.div>
          </Link>
        )
      })}
    </div>
  )
}

export default LandingPage
