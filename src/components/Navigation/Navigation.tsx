import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Palette, Briefcase, Heart } from 'lucide-react'
import { useNavigationStore } from '../../store/store'

const Navigation: React.FC = () => {
  const location = useLocation()
  const { isMenuOpen, setMenuOpen } = useNavigationStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home', icon: Home, color: 'from-purple-500 to-pink-500' },
    { path: '/design', label: 'Design', icon: Palette, color: 'from-orange-500 to-purple-500' },
    { path: '/academic', label: 'Academic', icon: Briefcase, color: 'from-blue-500 to-cyan-500' },
    { path: '/personal', label: 'Personal', icon: Heart, color: 'from-rose-500 to-orange-500' },
  ]

  // Get theme from URL params for dynamic design page themes
  const searchParams = new URLSearchParams(location.search)
  const softwareTheme = searchParams.get('theme')

  // Determine page-specific styling
  const getPageStyle = () => {
    // Design page with dynamic themes
    if (location.pathname === '/design' && softwareTheme) {
      const themes: Record<string, any> = {
        photoshop: { bg: 'bg-[#1e1e1e]', text: 'text-[#00a8ff]', hoverText: 'hover:text-white', border: 'border-[#0a0a0a]', activeBg: 'bg-[#00a8ff]' },
        illustrator: { bg: 'bg-[#1a1410]', text: 'text-[#ff9a00]', hoverText: 'hover:text-white', border: 'border-[#4a3820]', activeBg: 'bg-[#ff9a00]' },
        indesign: { bg: 'bg-[#1a0c14]', text: 'text-[#ff3366]', hoverText: 'hover:text-white', border: 'border-[#4a2030]', activeBg: 'bg-[#ff3366]' },
        davinci: { bg: 'bg-[#0f0f10]', text: 'text-[#e63946]', hoverText: 'hover:text-white', border: 'border-[#3a3a3c]', activeBg: 'bg-[#e63946]' },
        blender: { bg: 'bg-[#121518]', text: 'text-[#f5792a]', hoverText: 'hover:text-white', border: 'border-[#3a4048]', activeBg: 'bg-[#f5792a]' },
        figma: { bg: 'bg-[#1e1e1e]', text: 'text-[#a259ff]', hoverText: 'hover:text-white', border: 'border-[#404040]', activeBg: 'bg-[#a259ff]' },
      }
      return themes[softwareTheme] || themes.photoshop
    }
    
    switch (location.pathname) {
      case '/design':
        return {
          bg: 'bg-[#1e1e1e]',
          text: 'text-[#00a8ff]',
          hoverText: 'hover:text-white',
          border: 'border-[#0a0a0a]',
          activeBg: 'bg-[#00a8ff]',
        }
      case '/academic':
        return {
          bg: 'bg-[#0d1117]',
          text: 'text-[#58a6ff]',
          hoverText: 'hover:text-[#7ee787]',
          border: 'border-[#30363d]',
          activeBg: 'bg-[#58a6ff]',
        }
      case '/personal':
        return {
          bg: 'bg-warm-cream',
          text: 'text-warm-sepia',
          hoverText: 'hover:text-warm-rust',
          border: 'border-warm-tan',
          activeBg: 'bg-warm-rust',
        }
      default:
        return {
          bg: scrolled ? 'bg-vintage-beige/95 backdrop-blur-sm' : 'bg-transparent',
          text: 'text-vintage-brown',
          hoverText: 'hover:text-vintage-rust',
          border: scrolled ? 'border-vintage-tan' : 'border-transparent',
          activeBg: 'bg-vintage-rust',
        }
    }
  }

  const pageStyle = getPageStyle()

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${pageStyle.bg} ${pageStyle.border} ${location.pathname !== '/' && !scrolled ? '' : 'shadow-vintage'}`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link key={item.path} to={item.path}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="relative group"
                    >
                      <div className={`flex items-center space-x-2 ${pageStyle.text} ${pageStyle.hoverText} transition-colors font-vintage`}>
                        <Icon size={18} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className={`absolute -bottom-1 left-0 right-0 h-1 ${pageStyle.activeBg}`}
                        />
                      )}
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className={`md:hidden ${pageStyle.text} p-2 hover:opacity-70 border-2 ${pageStyle.border} transition-colors rounded`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-vintage-beige/98 backdrop-blur-sm paper-texture">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="group"
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 bg-vintage-rust border-4 border-vintage-tan shadow-vintage"
                          >
                            <Icon size={32} className="text-vintage-cream" />
                          </motion.div>
                          <span className="text-vintage-brown text-xl font-vintage font-bold">
                            {item.label}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
