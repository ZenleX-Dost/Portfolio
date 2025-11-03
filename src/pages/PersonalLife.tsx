import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Info, ChevronLeft, ChevronRight, Heart, Book, Camera, Coffee, MapPin, X, Volume2, VolumeX } from 'lucide-react'

// Netflix-style content categories
const leadership = [
  { 
    id: 1,
    title: 'Founder of GENOS',
    subtitle: 'AI Club of ENSAM Meknes',
    image: '/personal/leadership/genos.png',
    desc: 'Leading the artificial intelligence initiative at ENSAM, organizing workshops and projects',
    year: '2024',
    icon: Heart
  },
  { 
    id: 2,
    title: 'Vice-President',
    subtitle: 'CI29',
    image: '/personal/leadership/ci29.jpg',
    desc: 'Leading initiatives and coordinating activities for the CI29 organization',
    year: '2024',
    icon: Book
  },
  { 
    id: 3,
    title: 'Vice-President',
    subtitle: "Gadz'IT",
    image: '/personal/leadership/gadzit.jpg',
    desc: 'Coordinating technical events and IT initiatives',
    year: '2024',
    icon: Coffee
  },
  { 
    id: 4,
    title: 'Head of Media & IT',
    subtitle: 'ADE',
    image: '/personal/leadership/ade.jpg',
    desc: 'Managing digital presence and technical infrastructure',
    year: '2024',
    icon: Camera
  },
  { 
    id: 5,
    title: 'Chief',
    subtitle: 'AMII X',
    image: '/personal/leadership/amiix.jpg',
    desc: 'Leading the AMII X organization and its initiatives',
    year: '2024',
    icon: Heart
  },
  { 
    id: 6,
    title: 'Executive Office Member',
    subtitle: 'Forum 22',
    image: '/personal/leadership/forum22.jpg',
    desc: 'Contributing to strategic decisions and event organization',
    year: '2024',
    icon: Book
  },
  { 
    id: 7,
    title: 'Caravane Alhayat',
    subtitle: 'Participant',
    image: '/personal/leadership/caravane.jpg',
    desc: 'Participating in community outreach and social initiatives',
    year: '2024',
    icon: Heart
  },
  { 
    id: 8,
    title: 'Amenagement Social',
    subtitle: 'Participant',
    image: '/personal/leadership/amenagement.webp',
    desc: 'Engaged in social development and community improvement projects',
    year: '2024',
    icon: Coffee
  },
  { 
    id: 9,
    title: 'ADOS',
    subtitle: 'Organizer',
    image: '/personal/leadership/ados.webp',
    desc: 'Organizing and coordinating ADOS events and activities',
    year: '2024',
    icon: Camera
  },
]

const achievements = [
  { 
    id: 1,
    title: "Gadz'IT",
    subtitle: 'Vice-President',
    image: '/personal/clubs/gadzit.webp',
    desc: 'Coordinating technical events and IT initiatives',
    year: '2024',
    rating: '98% Match'
  },
  { 
    id: 2,
    title: 'Space Club',
    subtitle: 'Chief of AeroX',
    image: '/personal/clubs/space.webp',
    desc: 'Leading aerospace projects and initiatives',
    year: '2024',
    rating: '96% Match'
  },
  { 
    id: 3,
    title: 'AMII',
    subtitle: 'Organizer & Graphic Designer',
    image: '/personal/clubs/amii.webp',
    desc: 'Organizing events and creating visual identities',
    year: '2024',
    rating: '97% Match'
  },
  { 
    id: 4,
    title: 'Caravane',
    subtitle: 'Member',
    image: '/personal/clubs/caravane.webp',
    desc: 'Community outreach and social initiatives',
    year: '2024',
    rating: '95% Match'
  },
  { 
    id: 5,
    title: 'Social',
    subtitle: 'Member',
    image: '/personal/clubs/social.webp',
    desc: 'Social development and community projects',
    year: '2024',
    rating: '93% Match'
  },
  { 
    id: 6,
    title: 'Industriel',
    subtitle: 'Member',
    image: '/personal/clubs/industriel.webp',
    desc: 'Industrial engineering initiatives',
    year: '2024',
    rating: '92% Match'
  },
  { 
    id: 7,
    title: 'Mecanique',
    subtitle: 'Member',
    image: '/personal/clubs/mecanique.webp',
    desc: 'Mechanical engineering projects',
    year: '2024',
    rating: '90% Match'
  },
  { 
    id: 8,
    title: 'CRIAM',
    subtitle: 'Member',
    image: '/personal/clubs/criam.webp',
    desc: 'Research and innovation activities',
    year: '2024',
    rating: '91% Match'
  },
  { 
    id: 9,
    title: 'Express',
    subtitle: 'Member',
    image: '/personal/clubs/express.webp',
    desc: 'Campus media and communication',
    year: '2024',
    rating: '89% Match'
  },
  { 
    id: 10,
    title: 'Kotaku',
    subtitle: 'Member',
    image: '/personal/clubs/kotaku.webp',
    desc: 'Gaming and esports community',
    year: '2024',
    rating: '88% Match'
  },
  { 
    id: 11,
    title: 'Musique',
    subtitle: 'Member',
    image: '/personal/clubs/musique.webp',
    desc: 'Music and cultural events',
    year: '2024',
    rating: '94% Match'
  },
  { 
    id: 12,
    title: 'UGA',
    subtitle: 'Member - Ultras Gadz\'Arts',
    image: '/personal/clubs/uga.webp',
    desc: 'Supporting and animating sporting events',
    year: '2024',
    rating: '96% Match'
  },
]

const lifeStories = [
  { 
    id: 1,
    title: 'Preparation',
    image: '/personal/gallery/1.jpg',
    category: 'Study',
    year: '2025'
  },
  { 
    id: 2,
    title: 'Adventure',
    image: '/personal/gallery/2.jpg',
    category: 'Trips',
    year: '2025'
  },
  { 
    id: 3,
    title: 'Souga Jr',
    image: '/personal/gallery/3.jpg',
    category: 'Friends',
    year: '2025'
  },
  { 
    id: 4,
    title: 'ENSEM Show',
    image: '/personal/gallery/4.jpg',
    category: 'Ultras',
    year: '2025'
  },
  { 
    id: 5,
    title: 'Me',
    image: '/personal/gallery/5.jpg',
    category: 'Life Moments',
    year: '2025'
  },
  { 
    id: 6,
    title: 'Pictures',
    image: '/personal/gallery/6.jpg',
    category: 'Art',
    year: '2025'
  },
  { 
    id: 7,
    title: 'CI29',
    image: '/personal/gallery/7.jpg',
    category: 'Friends',
    year: '2025'
  },
  { 
    id: 8,
    title: 'Life Moments',
    image: '/personal/gallery/8.jpg',
    category: 'Life Moments',
    year: '2025'
  },
  { 
    id: 9,
    title: 'ADE',
    image: '/personal/gallery/9.jpg',
    category: 'Parascolaire',
    year: '2025'
  },
  { 
    id: 10,
    title: 'Blue',
    image: '/personal/gallery/10.jpg',
    category: 'Life Moments',
    year: '2025'
  },
  { 
    id: 11,
    title: 'Last Dance',
    image: '/personal/gallery/11.jpg',
    category: 'Parascolaire',
    year: '2025'
  },
]

// Scrollable row component
const ScrollableRow: React.FC<{ items: any[]; title: string; type?: 'portrait' | 'landscape' }> = ({ items, title, type = 'landscape' }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <div className="mb-12 group">
      <h2 className="text-2xl font-bold text-white mb-4 px-12">{title}</h2>
      <div className="relative">
        {/* Left Arrow */}
        <AnimatePresence>
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll('left')}
              className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/80 to-transparent z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={40} className="text-white" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Right Arrow */}
        <AnimatePresence>
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll('right')}
              className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/80 to-transparent z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={40} className="text-white" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto overflow-y-hidden space-x-2 px-12 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`flex-shrink-0 ${type === 'portrait' ? 'w-48' : 'w-80'} relative group/item cursor-pointer`}
            >
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full ${type === 'portrait' ? 'h-72' : 'h-44'} object-cover`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{item.subtitle || item.category}</p>
                    {item.desc && (
                      <p className="text-gray-400 text-xs line-clamp-2">{item.desc}</p>
                    )}
                    {item.rating && (
                      <div className="flex items-center mt-2 space-x-2">
                        <span className="text-green-500 font-bold text-sm">{item.rating}</span>
                        <span className="text-gray-400 text-xs">{item.year}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const PersonalLife: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [muted, setMuted] = useState(true)
  
  // Refs for scrolling to sections
  const leadershipRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  // Scroll to sections
  const scrollToLeadership = () => {
    leadershipRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pt-16">
      {/* Netflix Hero Section */}
      <div className="relative h-[80vh] mb-8">
        <div className="absolute inset-0">
          <img
            src="personal/background/background-main.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center px-12">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Amine EL-Hend
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-300 mb-6"
            >
              Student Leader • AI Innovator • Creative Designer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              Industrial Engineering student specializing in AI and Data Science. Founder of GENOS AI Club, 
              leading multiple student organizations while pursuing innovation in machine learning and creative design.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex space-x-4"
            >
              <button 
                onClick={scrollToLeadership}
                className="flex items-center space-x-2 bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition"
              >
                <Play size={24} fill="black" />
                <span>Learn More</span>
              </button>
              <button 
                onClick={scrollToAbout}
                className="flex items-center space-x-2 bg-gray-700/80 text-white px-8 py-3 rounded font-bold hover:bg-gray-600/80 transition"
              >
                <Info size={24} />
                <span>More Info</span>
              </button>
              <button
                onClick={() => setMuted(!muted)}
                className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-400 hover:bg-gray-700/50 transition"
              >
                {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center space-x-4 text-sm text-gray-400"
            >
              <span className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>Casablanca, Morocco</span>
              </span>
              <span>•</span>
              <span>ENSAM Meknes</span>
              <span>•</span>
              <span>Class of 2026</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Leadership Row */}
      <div ref={leadershipRef}>
        <ScrollableRow items={leadership} title="Leadership & Activities" type="landscape" />
      </div>

      {/* Achievements Row */}
      <ScrollableRow items={achievements} title="Clubs I was part of" type="landscape" />

      {/* Life Stories Row */}
      <ScrollableRow items={lifeStories} title="Life in Pictures" type="portrait" />

      {/* About Section - Netflix Style */}
      <div ref={aboutRef} className="px-12 py-12 bg-gradient-to-b from-black via-gray-900 to-black">
        <h2 className="text-3xl font-bold text-white mb-8">About Amine</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500">Education</h3>
            <p className="text-gray-300 leading-relaxed">
              Industrial Engineering student at ENSAM Meknes, specializing in Artificial Intelligence 
              and Data Science with a focus on machine learning and computer vision.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500">Leadership</h3>
            <p className="text-gray-300 leading-relaxed">
              Founder of GENOS AI Club, Vice-President of Gadz'IT, Executive Board Member, and active 
              in multiple student organizations driving innovation and community growth.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500">Creative Work</h3>
            <p className="text-gray-300 leading-relaxed">
              Graphic Designer proficient in Adobe Illustrator and Photoshop, creating visual 
              identities and managing media content for various organizations.
            </p>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400">
            <a href="mailto:amine.elhend@gmail.com" className="hover:text-white transition">
              amine.elhend@gmail.com
            </a>
            <span className="hidden md:inline">•</span>
            <span>+212 6 14 20 93 41</span>
            <span className="hidden md:inline">•</span>
            <span>Casablanca, Morocco</span>
          </div>
        </div>
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-lg max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/70 rounded-full flex items-center justify-center hover:bg-black transition"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-2">{selectedItem.title}</h2>
                <p className="text-xl text-gray-400 mb-4">{selectedItem.subtitle}</p>
                <p className="text-gray-300 leading-relaxed mb-6">{selectedItem.desc}</p>
                {selectedItem.year && (
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{selectedItem.year}</span>
                    {selectedItem.rating && (
                      <>
                        <span>•</span>
                        <span className="text-green-500">{selectedItem.rating}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PersonalLife
