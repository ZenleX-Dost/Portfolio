import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Music, Book, Camera, Coffee, Heart } from 'lucide-react'

// Sample data
const photos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400', caption: 'Adventure awaits' },
  { id: 2, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', caption: 'Mountain views' },
  { id: 3, url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400', caption: 'City lights' },
  { id: 4, url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400', caption: 'Sunset vibes' },
]

// Real leadership and activities from Amine's profile
const leadership = [
  { icon: Heart, name: 'Founder of GENOS', desc: 'AI Club of ENSAM Meknes', color: 'bg-vintage-rust' },
  { icon: Book, name: 'Head of Media & IT', desc: 'ADEAM Association', color: 'bg-tech-steel' },
  { icon: Camera, name: 'Graphic Designer', desc: 'Adobe Illustrator & Photoshop', color: 'bg-warm-amber' },
  { icon: Coffee, name: 'Vice-President', desc: "Gadz'IT (A&M IT Club)", color: 'bg-vintage-olive' },
]

const achievements = [
  { 
    title: 'Executive Board Member', 
    org: 'A&M Inter-Institutes & Enterprise Forum',
    desc: 'Contributing to strategic decisions and organizational growth'
  },
  { 
    title: 'Vice-President Integration Committee', 
    org: 'Class of 2029 - ENSAM',
    desc: 'Leading integration activities for incoming students'
  },
  { 
    title: 'Head of Aerospace Trades', 
    org: 'Space Club',
    desc: 'Managing aerospace-related projects and initiatives'
  },
  { 
    title: 'Manager - A Day Of Science', 
    org: '3 years of management',
    desc: 'Organized and managed science outreach events'
  },
]

const values = [
  { text: 'Innovation through Artificial Intelligence', author: 'Core Belief' },
  { text: 'Leadership is about empowering others to achieve their best', author: 'Personal Philosophy' },
  { text: 'Creativity meets Engineering Excellence', author: 'My Approach' },
]

const PersonalLife: React.FC = () => {
  return (
    <div className="min-h-screen py-24 px-6 paper-texture">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-handwritten font-bold mb-4 text-warm-amber" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.4)' }}>
          Beyond the Portfolio
        </h1>
        <p className="text-xl text-vintage-tan max-w-2xl mx-auto font-body">
          Leadership, creativity, and the journey of continuous learning
        </p>
        <div className="mt-4 text-sm text-vintage-brown font-vintage">
          Casablanca, Morocco | Student Leader & Creative Mind
        </div>
      </motion.div>

      {/* Photo Gallery */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
          Life in Pictures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, rotate: -5, y: 50 }}
              animate={{ opacity: 1, rotate: index % 2 === 0 ? 2 : -2, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              className="relative group"
            >
              <div className="bg-white p-3 shadow-xl rounded-lg">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full aspect-square object-cover rounded"
                />
                <p className="text-center text-sm text-gray-700 mt-2 font-handwritten">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership & Activities */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-display font-bold text-vintage-cream mb-8 text-center" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
          Leadership & Activities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {leadership.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, rotate: index % 2 === 0 ? 2 : -2 }}
                className="vintage-card p-6 text-center hover:shadow-vintage-lg transition-all"
              >
                <div className={`w-16 h-16 mx-auto mb-4 ${item.color} border-4 border-vintage-charcoal flex items-center justify-center shadow-vintage`}>
                  <Icon size={28} className="text-vintage-cream" />
                </div>
                <h3 className="text-vintage-cream font-vintage font-bold mb-1">{item.name}</h3>
                <p className="text-vintage-beige text-xs font-body">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-display font-bold text-vintage-cream mb-8 text-center" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
          Notable Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="vintage-card p-6"
            >
              <h3 className="text-xl font-display font-bold text-vintage-rust mb-2">{achievement.title}</h3>
              <p className="text-vintage-tan font-vintage mb-2">{achievement.org}</p>
              <p className="text-vintage-beige text-sm font-body">{achievement.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Me Cards */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
          A Few Things About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="vintage-card p-6"
          >
            <Heart className="text-vintage-rust mb-4" size={32} />
            <h3 className="text-xl font-display font-bold text-vintage-cream mb-3">Core Values</h3>
            <p className="text-vintage-beige font-body">
              Innovation, leadership, creativity, and making a positive impact through 
              artificial intelligence and engineering excellence. Committed to empowering 
              others and continuous learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="vintage-card p-6"
          >
            <MapPin className="text-tech-steel mb-4" size={32} />
            <h3 className="text-xl font-display font-bold text-vintage-cream mb-3">Goals & Aspirations</h3>
            <p className="text-vintage-beige font-body">
              Building cutting-edge AI solutions that solve real-world industrial problems. 
              Seeking final year internship starting February 2026 to apply my skills in 
              machine learning, computer vision, and data science.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-vintage-cream mb-8 text-center" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
          Philosophy & Beliefs
        </h2>
        <div className="space-y-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="vintage-card p-8 text-center stamp"
              style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
            >
              <p className="text-2xl font-handwritten text-vintage-cream mb-4">
                "{value.text}"
              </p>
              <p className="text-vintage-rust font-vintage font-bold">— {value.author} —</p>
            </motion.div>
          ))}
        </div>
        
        {/* Contact Info */}
        <div className="mt-12 text-center vintage-card p-6">
          <h3 className="text-xl font-display font-bold text-vintage-cream mb-4">Get In Touch</h3>
          <p className="text-vintage-beige font-body mb-2">amine.elhend@gmail.com</p>
          <p className="text-vintage-tan font-vintage">+212 6 14 20 93 41</p>
          <p className="text-vintage-brown font-vintage mt-2">Casablanca, Morocco</p>
        </div>
      </section>
    </div>
  )
}

export default PersonalLife
