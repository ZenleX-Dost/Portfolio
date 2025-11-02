import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MessageCircle, X, Github, Linkedin, Instagram } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Get theme from URL params for dynamic design page themes
  const searchParams = new URLSearchParams(location.search)
  const softwareTheme = searchParams.get('theme')

  // Determine page-specific styling
  const getPageStyle = () => {
    // Design page with dynamic themes based on selected software
    if (location.pathname === '/design' && softwareTheme) {
      const themes: Record<string, any> = {
        photoshop: {
          buttonBg: 'bg-[#00a8ff]', buttonBorder: 'border-[#0a0a0a]', buttonText: 'text-white', buttonHover: 'hover:bg-[#0096e6]',
          panelBg: 'bg-[#1e1e1e]', panelBorder: 'border-[#404040]', titleText: 'text-[#00a8ff]',
          inputBg: 'bg-[#2c2c2c]', inputBorder: 'border-[#404040]', inputText: 'text-[#c9d1d9]', inputFocus: 'focus:border-[#00a8ff]',
          buttonSubmit: 'bg-[#00a8ff] hover:bg-[#0096e6] text-white',
          socialBg: 'bg-[#2c2c2c] hover:bg-[#00a8ff]', socialText: 'text-[#00a8ff] hover:text-white',
        },
        illustrator: {
          buttonBg: 'bg-[#ff9a00]', buttonBorder: 'border-[#4a3820]', buttonText: 'text-white', buttonHover: 'hover:bg-[#e68a00]',
          panelBg: 'bg-[#1a1410]', panelBorder: 'border-[#4a3820]', titleText: 'text-[#ff9a00]',
          inputBg: 'bg-[#2c2014]', inputBorder: 'border-[#4a3820]', inputText: 'text-[#c9d1d9]', inputFocus: 'focus:border-[#ff9a00]',
          buttonSubmit: 'bg-[#ff9a00] hover:bg-[#e68a00] text-white',
          socialBg: 'bg-[#2c2014] hover:bg-[#ff9a00]', socialText: 'text-[#ff9a00] hover:text-white',
        },
        indesign: {
          buttonBg: 'bg-[#ff3366]', buttonBorder: 'border-[#4a2030]', buttonText: 'text-white', buttonHover: 'hover:bg-[#e62958]',
          panelBg: 'bg-[#1a0c14]', panelBorder: 'border-[#4a2030]', titleText: 'text-[#ff3366]',
          inputBg: 'bg-[#2c1420]', inputBorder: 'border-[#4a2030]', inputText: 'text-[#c9d1d9]', inputFocus: 'focus:border-[#ff3366]',
          buttonSubmit: 'bg-[#ff3366] hover:bg-[#e62958] text-white',
          socialBg: 'bg-[#2c1420] hover:bg-[#ff3366]', socialText: 'text-[#ff3366] hover:text-white',
        },
        davinci: {
          buttonBg: 'bg-[#e63946]', buttonBorder: 'border-[#3a3a3c]', buttonText: 'text-white', buttonHover: 'hover:bg-[#cc2936]',
          panelBg: 'bg-[#0f0f10]', panelBorder: 'border-[#3a3a3c]', titleText: 'text-[#e63946]',
          inputBg: 'bg-[#1c1c1e]', inputBorder: 'border-[#3a3a3c]', inputText: 'text-[#c9d1d9]', inputFocus: 'focus:border-[#e63946]',
          buttonSubmit: 'bg-[#e63946] hover:bg-[#cc2936] text-white',
          socialBg: 'bg-[#1c1c1e] hover:bg-[#e63946]', socialText: 'text-[#e63946] hover:text-white',
        },
        blender: {
          buttonBg: 'bg-[#f5792a]', buttonBorder: 'border-[#3a4048]', buttonText: 'text-white', buttonHover: 'hover:bg-[#e06920]',
          panelBg: 'bg-[#121518]', panelBorder: 'border-[#3a4048]', titleText: 'text-[#f5792a]',
          inputBg: 'bg-[#1e2328]', inputBorder: 'border-[#3a4048]', inputText: 'text-[#c9d1d9]', inputFocus: 'focus:border-[#f5792a]',
          buttonSubmit: 'bg-[#f5792a] hover:bg-[#e06920] text-white',
          socialBg: 'bg-[#1e2328] hover:bg-[#f5792a]', socialText: 'text-[#f5792a] hover:text-white',
        },
        figma: {
          buttonBg: 'bg-[#a259ff]', buttonBorder: 'border-[#404040]', buttonText: 'text-white', buttonHover: 'hover:bg-[#9048ee]',
          panelBg: 'bg-[#1e1e1e]', panelBorder: 'border-[#404040]', titleText: 'text-[#a259ff]',
          inputBg: 'bg-[#2c2c2c]', inputBorder: 'border-[#404040]', inputText: 'text-[#c9d1d9]', inputFocus: 'focus:border-[#a259ff]',
          buttonSubmit: 'bg-[#a259ff] hover:bg-[#9048ee] text-white',
          socialBg: 'bg-[#2c2c2c] hover:bg-[#a259ff]', socialText: 'text-[#a259ff] hover:text-white',
        },
      }
      return themes[softwareTheme] || themes.photoshop
    }

    switch (location.pathname) {
      case '/design':
        return {
          buttonBg: 'bg-[#00a8ff]',
          buttonBorder: 'border-[#0a0a0a]',
          buttonText: 'text-white',
          buttonHover: 'hover:bg-[#0096e6]',
          panelBg: 'bg-[#1e1e1e]',
          panelBorder: 'border-[#404040]',
          titleText: 'text-[#00a8ff]',
          inputBg: 'bg-[#2c2c2c]',
          inputBorder: 'border-[#404040]',
          inputText: 'text-[#c9d1d9]',
          inputFocus: 'focus:border-[#00a8ff]',
          buttonSubmit: 'bg-[#00a8ff] hover:bg-[#0096e6] text-white',
          socialBg: 'bg-[#2c2c2c] hover:bg-[#00a8ff]',
          socialText: 'text-[#00a8ff] hover:text-white',
        }
      case '/academic':
        return {
          buttonBg: 'bg-[#58a6ff]',
          buttonBorder: 'border-[#30363d]',
          buttonText: 'text-[#0d1117]',
          buttonHover: 'hover:bg-[#7ee787]',
          panelBg: 'bg-[#0d1117]',
          panelBorder: 'border-[#30363d]',
          titleText: 'text-[#58a6ff]',
          inputBg: 'bg-[#161b22]',
          inputBorder: 'border-[#30363d]',
          inputText: 'text-[#c9d1d9]',
          inputFocus: 'focus:border-[#58a6ff]',
          buttonSubmit: 'bg-[#58a6ff] hover:bg-[#7ee787] text-[#0d1117]',
          socialBg: 'bg-[#161b22] hover:bg-[#58a6ff]',
          socialText: 'text-[#58a6ff] hover:text-[#0d1117]',
        }
      case '/personal':
        return {
          buttonBg: 'bg-warm-rust',
          buttonBorder: 'border-warm-tan',
          buttonText: 'text-warm-cream',
          buttonHover: 'hover:bg-warm-sepia',
          panelBg: 'bg-warm-cream',
          panelBorder: 'border-warm-tan',
          titleText: 'text-warm-sepia',
          inputBg: 'bg-white',
          inputBorder: 'border-warm-tan',
          inputText: 'text-warm-sepia',
          inputFocus: 'focus:border-warm-rust',
          buttonSubmit: 'bg-warm-rust hover:bg-warm-sepia text-warm-cream',
          socialBg: 'bg-warm-tan hover:bg-warm-rust',
          socialText: 'text-warm-sepia hover:text-warm-cream',
        }
      default:
        return {
          buttonBg: 'bg-vintage-rust',
          buttonBorder: 'border-vintage-tan',
          buttonText: 'text-vintage-cream',
          buttonHover: 'hover:bg-vintage-brown',
          panelBg: 'bg-vintage-beige',
          panelBorder: 'border-vintage-tan',
          titleText: 'text-vintage-brown',
          inputBg: 'bg-white',
          inputBorder: 'border-vintage-tan',
          inputText: 'text-vintage-ink',
          inputFocus: 'focus:border-vintage-rust',
          buttonSubmit: 'bg-vintage-rust hover:bg-vintage-brown text-vintage-cream',
          socialBg: 'bg-vintage-tan hover:bg-vintage-rust',
          socialText: 'text-vintage-brown hover:text-vintage-cream',
        }
    }
  }

  const pageStyle = getPageStyle()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ZenleX-Dost', label: 'GitHub', color: 'hover:text-vintage-cream' },
    { icon: Linkedin, href: 'https://linkedin.com/in/amine-el-hend-1a4810228', label: 'LinkedIn', color: 'hover:text-tech-steel' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-warm-rose' },
  ]

  return (
    <>
      {/* Floating Button - Page-specific Style */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: isOpen ? 0 : 5 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-8 right-8 z-50 p-3 ${pageStyle.buttonBg} ${pageStyle.buttonHover} border-2 ${pageStyle.buttonBorder} shadow-lg ${pageStyle.buttonText} rounded-full transition-colors`}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>

      {/* Contact Panel - Page-specific Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`fixed bottom-24 right-8 z-50 w-80 ${pageStyle.panelBg} border-2 ${pageStyle.panelBorder} shadow-2xl overflow-hidden`}
            style={{ borderRadius: '12px' }}
          >
            <div className="p-6">
              <h3 className={`text-xl font-display font-light ${pageStyle.titleText} mb-4`}>Let's Connect!</h3>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2, scale: 1.05 }}
                      className={`p-2 ${pageStyle.socialBg} border ${pageStyle.panelBorder} ${pageStyle.socialText} transition-colors`}
                      style={{ borderRadius: '8px' }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>

              {/* Contact Form */}
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full px-3 py-2 ${pageStyle.inputBg} border ${pageStyle.inputBorder} ${pageStyle.inputText} placeholder-opacity-50 ${pageStyle.inputFocus} focus:outline-none transition-colors font-body font-light text-sm`}
                    style={{ borderRadius: '6px' }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-3 py-2 ${pageStyle.inputBg} border ${pageStyle.inputBorder} ${pageStyle.inputText} placeholder-opacity-50 ${pageStyle.inputFocus} focus:outline-none transition-colors font-body font-light text-sm`}
                    style={{ borderRadius: '6px' }}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={3}
                    className={`w-full px-3 py-2 ${pageStyle.inputBg} border ${pageStyle.inputBorder} ${pageStyle.inputText} placeholder-opacity-50 ${pageStyle.inputFocus} focus:outline-none transition-colors font-body font-light text-sm resize-none`}
                    style={{ borderRadius: '6px' }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full py-2 ${pageStyle.buttonSubmit} border ${pageStyle.panelBorder} font-body font-light text-sm flex items-center justify-center space-x-2 transition-colors`}
                  style={{ borderRadius: '6px' }}
                >
                  <Mail size={16} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingContact
