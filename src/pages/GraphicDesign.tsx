import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Masonry from 'react-masonry-css'
import { X, Square, MousePointer2, Move, RotateCw, Layers, Eye, Download } from 'lucide-react'
import './GraphicDesign.css'

// Function to dynamically load all images from the designs folder
const loadDesignImages = (): Array<{
  id: number
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  tools: string[]
}> => {
  const designs: any[] = []
  
  // This will be populated by Vite's glob import
  const imageModules = import.meta.glob('/public/designs/*.{png,jpg,jpeg,webp}', { eager: true })
  
  Object.keys(imageModules).forEach((path, index) => {
    const fileName = path.split('/').pop()?.split('.')[0] || `design-${index + 1}`
    
    designs.push({
      id: index + 1,
      title: fileName.replace(/-|_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: 'Graphic Design Work',
      image: path.replace('/public', ''),
      category: 'graphic-design',
      tags: ['Design', 'Creative'],
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    })
  })
  
  // If no images found, return placeholder projects
  if (designs.length === 0) {
    return [
      {
        id: 1,
        title: 'Brand Identity Design',
        description: 'Complete brand identity package',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
        category: 'graphic-design',
        tags: ['Branding', 'Logo', 'Identity'],
        tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      },
      {
        id: 2,
        title: 'Poster Design',
        description: 'Modern poster artwork',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        category: 'graphic-design',
        tags: ['Poster', 'Print', 'Typography'],
        tools: ['Adobe Photoshop', 'Adobe InDesign'],
      },
      {
        id: 3,
        title: 'Digital Illustration',
        description: 'Custom digital artwork',
        image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800',
        category: 'illustration',
        tags: ['Illustration', 'Digital Art', 'Creative'],
        tools: ['Adobe Illustrator', 'Procreate'],
      },
      {
        id: 4,
        title: 'Typography Showcase',
        description: 'Creative typography exploration',
        image: 'https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?w=800',
        category: 'typography',
        tags: ['Typography', 'Lettering', 'Design'],
        tools: ['Adobe Illustrator'],
      },
      {
        id: 5,
        title: 'Social Media Graphics',
        description: 'Engaging social media content',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
        category: 'graphic-design',
        tags: ['Social Media', 'Marketing', 'Digital'],
        tools: ['Adobe Photoshop', 'Canva'],
      },
      {
        id: 6,
        title: 'Package Design',
        description: 'Product packaging mockup',
        image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800',
        category: 'branding',
        tags: ['Packaging', 'Product', '3D Mockup'],
        tools: ['Adobe Photoshop', 'Adobe Dimension'],
      },
    ]
  }
  
  return designs
}

type Software = 'photoshop' | 'illustrator' | 'indesign' | 'davinci' | 'blender' | 'figma'

const GraphicDesign: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([])
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [activeTool, setActiveTool] = useState<'select' | 'move' | 'rotate'>('select')
  const [showGrid, setShowGrid] = useState(false)
  const [zoom, setZoom] = useState(100)
  const [selectedImages, setSelectedImages] = useState<number[]>([])
  const [imageRotations, setImageRotations] = useState<Record<number, number>>({})
  const [activeSoftware, setActiveSoftware] = useState<Software>('photoshop')
  const [firstSwapImage, setFirstSwapImage] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load images when component mounts
    const loadedProjects = loadDesignImages()
    setProjects(loadedProjects)
  }, [])

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  }

  const handleImageClick = (projectId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    
    if (activeTool === 'select') {
      // Toggle selection
      if (selectedImages.includes(projectId)) {
        setSelectedImages(selectedImages.filter(id => id !== projectId))
      } else {
        setSelectedImages([...selectedImages, projectId])
      }
    } else if (activeTool === 'move') {
      // Swap images
      if (firstSwapImage === null) {
        // First image selected
        setFirstSwapImage(projectId)
        setSelectedImages([projectId])
      } else if (firstSwapImage === projectId) {
        // Clicked same image, deselect
        setFirstSwapImage(null)
        setSelectedImages([])
      } else {
        // Second image selected, swap them
        setProjects(prev => {
          const newProjects = [...prev]
          const index1 = newProjects.findIndex(p => p.id === firstSwapImage)
          const index2 = newProjects.findIndex(p => p.id === projectId)
          
          if (index1 !== -1 && index2 !== -1) {
            // Swap the projects
            const temp = newProjects[index1]
            newProjects[index1] = newProjects[index2]
            newProjects[index2] = temp
          }
          
          return newProjects
        })
        // Clear selection after swap
        setFirstSwapImage(null)
        setSelectedImages([])
      }
    } else if (activeTool === 'rotate') {
      // Rotate selected image by 15 degrees
      setImageRotations(prev => ({
        ...prev,
        [projectId]: ((prev[projectId] || 0) + 15) % 360
      }))
    }
  }

  const handleToolAction = (toolId: string) => {
    setActiveTool(toolId as any)
    if (toolId === 'select') {
      setSelectedImages([]) // Clear selection when switching to select tool
    }
    if (toolId !== 'move') {
      setFirstSwapImage(null) // Clear first swap image when switching tools
    }
  }

  // Update URL when software changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    params.set('theme', activeSoftware)
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`)
  }, [activeSoftware])

  const softwareThemes = {
    photoshop: {
      primary: '#00a8ff',
      bg: '#2c2c2c',
      darkBg: '#1e1e1e',
      border: '#404040',
      text: '#ffffff',
      name: 'Adobe Photoshop'
    },
    illustrator: {
      primary: '#ff9a00',
      bg: '#2c2014',
      darkBg: '#1a1410',
      border: '#4a3820',
      text: '#ffffff',
      name: 'Adobe Illustrator'
    },
    indesign: {
      primary: '#ff3366',
      bg: '#2c1420',
      darkBg: '#1a0c14',
      border: '#4a2030',
      text: '#ffffff',
      name: 'Adobe InDesign'
    },
    davinci: {
      primary: '#e63946',
      bg: '#1c1c1e',
      darkBg: '#0f0f10',
      border: '#3a3a3c',
      text: '#ffffff',
      name: 'DaVinci Resolve'
    },
    blender: {
      primary: '#f5792a',
      bg: '#1e2328',
      darkBg: '#121518',
      border: '#3a4048',
      text: '#ffffff',
      name: 'Blender'
    },
    figma: {
      primary: '#a259ff',
      bg: '#2c2c2c',
      darkBg: '#1e1e1e',
      border: '#404040',
      text: '#ffffff',
      name: 'Figma'
    }
  }

  const currentTheme = softwareThemes[activeSoftware]

  const tools = [
    { id: 'select', icon: MousePointer2, label: 'Selection Tool (V)', shortcut: 'V', description: 'Select and highlight images' },
    { id: 'move', icon: Move, label: 'Move Tool (M)', shortcut: 'M', description: 'Swap positions of two images' },
    { id: 'rotate', icon: RotateCw, label: 'Rotate Tool (R)', shortcut: 'R', description: 'Rotate images 15° clockwise' },
  ]

  const softwares: Array<{ id: Software; name: string; icon: string }> = [
    { id: 'photoshop', name: 'Photoshop', icon: 'Ps' },
    { id: 'illustrator', name: 'Illustrator', icon: 'Ai' },
    { id: 'indesign', name: 'InDesign', icon: 'Id' },
    { id: 'davinci', name: 'DaVinci', icon: 'Dv' },
    { id: 'blender', name: 'Blender', icon: 'Bl' },
    { id: 'figma', name: 'Figma', icon: 'Fg' },
  ]

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'v') setActiveTool('select')
      if (e.key.toLowerCase() === 'm') setActiveTool('move')
      if (e.key.toLowerCase() === 'r') setActiveTool('rotate')
      if (e.key === '+') setZoom(prev => Math.min(prev + 10, 200))
      if (e.key === '-') setZoom(prev => Math.max(prev - 10, 50))
      if (e.key === 'Escape') setSelectedImages([])
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="min-h-screen pt-16 transition-colors duration-300" style={{ backgroundColor: currentTheme.bg }}>
      {/* Software-style Top Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 border-b transition-colors duration-300" style={{ backgroundColor: currentTheme.darkBg, borderColor: currentTheme.border }}>
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/profile.png" 
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 transition-all duration-300"
              style={{ borderColor: currentTheme.primary }}
            />
            <h1 className="text-xl font-semibold transition-colors duration-300" style={{ color: currentTheme.primary }}>Graphic Design</h1>
            <div className="flex items-center space-x-2 text-xs text-[#b8b8b8]">
              <span>•</span>
              <span>Portfolio.psd</span>
              <span>•</span>
              <span className="transition-colors duration-300" style={{ color: currentTheme.primary }}>{currentTheme.name}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-[#b8b8b8] text-xs">
            {/* Zoom Control */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setZoom(prev => Math.max(prev - 10, 50))}
                className="px-2 py-1 rounded transition-colors"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = currentTheme.bg}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                -
              </button>
              <span className="min-w-[3rem] text-center">{zoom}%</span>
              <button 
                onClick={() => setZoom(prev => Math.min(prev + 10, 200))}
                className="px-2 py-1 rounded transition-colors"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = currentTheme.bg}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                +
              </button>
            </div>
            
            {/* Grid Toggle */}
            <button 
              onClick={() => setShowGrid(!showGrid)}
              className="px-3 py-1 rounded transition-colors flex items-center space-x-1"
              style={{ 
                backgroundColor: showGrid ? currentTheme.primary : 'transparent',
                color: showGrid ? '#ffffff' : '#b8b8b8'
              }}
              onMouseEnter={(e) => {
                if (!showGrid) e.currentTarget.style.backgroundColor = currentTheme.bg
              }}
              onMouseLeave={(e) => {
                if (!showGrid) e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <Eye size={14} />
              <span>Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Software Selector Bar */}
      <div className="fixed top-[7.5rem] left-0 right-0 z-40 border-b transition-colors duration-300" style={{ backgroundColor: currentTheme.darkBg, borderColor: currentTheme.border }}>
        <div className="px-6 py-2 flex items-center space-x-2">
          <span className="text-xs text-[#b8b8b8] mr-2">SOFTWARE:</span>
          {softwares.map((software) => (
            <motion.button
              key={software.id}
              onClick={() => setActiveSoftware(software.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1.5 rounded text-xs font-bold transition-all duration-300 flex items-center space-x-1"
              style={{
                backgroundColor: activeSoftware === software.id ? currentTheme.primary : 'transparent',
                color: activeSoftware === software.id ? '#ffffff' : '#b8b8b8',
                border: `1px solid ${activeSoftware === software.id ? currentTheme.primary : currentTheme.border}`
              }}
            >
              <span>{software.icon}</span>
              <span>{software.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Software-style Toolbar */}
      <div className="fixed top-[10.5rem] left-0 right-0 z-40 border-b transition-colors duration-300" style={{ backgroundColor: currentTheme.bg, borderColor: currentTheme.border }}>
        <div className="px-6 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {tools.map((tool) => {
              const Icon = tool.icon
              const isActive = activeTool === tool.id
              return (
                <motion.button
                  key={tool.id}
                  onClick={() => handleToolAction(tool.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded transition-all duration-300 relative group"
                  style={{
                    backgroundColor: isActive ? currentTheme.primary : 'transparent',
                    color: isActive ? '#ffffff' : '#b8b8b8',
                    boxShadow: isActive ? `0 0 20px ${currentTheme.primary}50` : 'none'
                  }}
                  title={tool.label}
                >
                  <Icon size={18} />
                  {/* Tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 border"
                    style={{ backgroundColor: currentTheme.darkBg, borderColor: currentTheme.border }}
                  >
                    <div>{tool.label}</div>
                    <div className="text-[10px] mt-0.5" style={{ color: currentTheme.primary }}>({tool.shortcut})</div>
                  </div>
                </motion.button>
              )
            })}
          </div>
          
          {/* Tool Info */}
          <div className="text-xs text-[#b8b8b8] flex items-center space-x-4">
            <span>
              {activeTool === 'select' && 'Click images to select and highlight'}
              {activeTool === 'move' && (firstSwapImage ? 'Click another image to swap positions' : 'Click two images to swap their positions')}
              {activeTool === 'rotate' && 'Click images to rotate 15° clockwise'}
            </span>
            {selectedImages.length > 0 && activeTool !== 'move' && (
              <span className="transition-colors duration-300" style={{ color: currentTheme.primary }}>
                {selectedImages.length} image{selectedImages.length > 1 ? 's' : ''} selected
              </span>
            )}
            {firstSwapImage && activeTool === 'move' && (
              <span className="transition-colors duration-300" style={{ color: currentTheme.primary }}>
                🔄 Ready to swap - Click second image
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Canvas Area with Grid */}
      <div className="px-6 py-8 pt-40 relative" ref={containerRef}>
        {/* Grid Overlay */}
        {showGrid && (
          <div className="absolute inset-0 top-40 pointer-events-none transition-opacity duration-300" style={{
            backgroundImage: `linear-gradient(${currentTheme.primary}20 1px, transparent 1px), linear-gradient(90deg, ${currentTheme.primary}20 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} />
        )}

        {/* Masonry Grid with Photoshop Style */}
        <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center', transition: 'transform 0.3s ease' }}>
        <Masonry
          breakpointCols={breakpointColumns}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {projects.map((project, index) => {
            const isSelected = selectedImages.includes(project.id)
            const rotation = imageRotations[project.id] || 0
            const isFirstSwap = firstSwapImage === project.id
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: rotation
                }}
                transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
                className="mb-6"
                style={{ 
                  cursor: activeTool === 'move' ? 'pointer' : activeTool === 'rotate' ? 'crosshair' : 'pointer',
                  zIndex: isFirstSwap ? 100 : 1,
                }}
              >
                <div
                  className="group relative overflow-hidden transition-all duration-300 select-none"
                  style={{
                    backgroundColor: currentTheme.darkBg,
                    border: isSelected ? `4px solid ${currentTheme.primary}` : `2px solid ${currentTheme.border}`,
                    boxShadow: isSelected ? `0 0 30px ${currentTheme.primary}50` : 'none',
                    cursor: activeTool === 'rotate' ? 'crosshair' : activeTool === 'move' ? (isSelected ? 'grab' : 'pointer') : 'pointer'
                  }}
                  onClick={(e) => handleImageClick(project.id, e)}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.borderColor = currentTheme.primary
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.borderColor = currentTheme.border
                  }}
                >
                {/* Selection Corners - Always visible when selected */}
                <div 
                  className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-opacity z-10"
                  style={{
                    borderColor: currentTheme.primary,
                    opacity: isSelected ? 1 : 0
                  }}
                  onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.opacity = '1' }}
                  onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.opacity = '0' }}
                ></div>
                <div 
                  className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-opacity z-10"
                  style={{
                    borderColor: currentTheme.primary,
                    opacity: isSelected ? 1 : 0
                  }}
                  onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.opacity = '1' }}
                  onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.opacity = '0' }}
                ></div>
                <div 
                  className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 transition-opacity z-10"
                  style={{
                    borderColor: currentTheme.primary,
                    opacity: isSelected ? 1 : 0
                  }}
                  onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.opacity = '1' }}
                  onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.opacity = '0' }}
                ></div>
                <div 
                  className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-opacity z-10"
                  style={{
                    borderColor: currentTheme.primary,
                    opacity: isSelected ? 1 : 0
                  }}
                  onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.opacity = '1' }}
                  onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.opacity = '0' }}
                ></div>

                {/* Selected Indicator for Move Tool */}
                {isFirstSwap && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 left-2 text-white text-xs px-2 py-1 rounded z-10 font-semibold transition-colors duration-300"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    🔄 SWAP WITH...
                  </motion.div>
                )}
                
                {/* Selected Indicator for Select Tool */}
                {isSelected && !isFirstSwap && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 left-2 text-white text-xs px-2 py-1 rounded z-10 font-semibold transition-colors duration-300"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    ✓ SELECTED
                  </motion.div>
                )}

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                  style={{ display: 'block' }}
                />
                
                {/* Hover Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm p-2 translate-y-full group-hover:translate-y-0 transition-all duration-300"
                  style={{ backgroundColor: `${currentTheme.darkBg}f0` }}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="transition-colors duration-300" style={{ color: currentTheme.primary }}>{project.title}</span>
                    <div className="flex items-center space-x-2 text-[#b8b8b8]">
                      <Square size={12} />
                      <Layers size={12} />
                    </div>
                  </div>
                </div>

                {/* Layer indicator and rotation angle */}
                <div className="absolute top-2 right-2 px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ backgroundColor: `${currentTheme.darkBg}e6`, color: currentTheme.primary }}
                >
                  <div>Layer {index + 1}</div>
                  {rotation !== 0 && (
                    <div className="mt-0.5" style={{ color: currentTheme.primary }}>
                      {rotation}°
                    </div>
                  )}
                </div>
                </div>
              </motion.div>
            )
          })}
        </Masonry>
        </div>
        
        {/* Clear Selection Button */}
        {selectedImages.length > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setSelectedImages([])}
            className="fixed bottom-8 right-8 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center space-x-2 z-50 font-semibold transition-colors duration-300"
            style={{ backgroundColor: currentTheme.primary }}
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
          >
            <X size={18} />
            <span>Clear Selection (ESC)</span>
          </motion.button>
        )}
      </div>

      {/* Photoshop-style Properties Panel (Modal) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative max-w-6xl w-full bg-[#2c2c2c] border border-[#0a0a0a] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photoshop Window Header */}
              <div className="bg-[#1e1e1e] border-b border-[#0a0a0a] px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-[#00a8ff]">{selectedProject.title}.psd</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-[#b8b8b8] hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-[1fr_320px]">
                {/* Image Canvas */}
                <div className="relative bg-[#323232] p-8 flex items-center justify-center min-h-[400px]">
                  {/* Checkered Pattern Background (Photoshop style) */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(45deg, #2a2a2a 25%, transparent 25%), linear-gradient(-45deg, #2a2a2a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #2a2a2a 75%), linear-gradient(-45deg, transparent 75%, #2a2a2a 75%)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                  }} />
                  
                  <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="relative max-w-full max-h-[600px] object-contain shadow-2xl"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(0, 168, 255, 0.3))' }}
                  />
                </div>

                {/* Properties Panel (Right Side) */}
                <div className="bg-[#1e1e1e] border-l border-[#0a0a0a] overflow-y-auto max-h-[80vh]">
                  {/* Properties Header */}
                  <div className="border-b border-[#0a0a0a] px-4 py-3">
                    <h3 className="text-sm font-semibold text-[#00a8ff]">PROPERTIES</h3>
                  </div>

                  {/* Layer Info */}
                  <div className="p-4 border-b border-[#0a0a0a]">
                    <div className="text-xs text-[#b8b8b8] mb-2">LAYER NAME</div>
                    <div className="text-sm text-white mb-3">{selectedProject.title}</div>
                    
                    <div className="text-xs text-[#b8b8b8] mb-2">TYPE</div>
                    <div className="text-sm text-white mb-3">Image Layer</div>
                    
                    <div className="text-xs text-[#b8b8b8] mb-2">DIMENSIONS</div>
                    <div className="text-sm text-white">Auto × Auto</div>
                  </div>

                  {/* Tools Used */}
                  <div className="p-4 border-b border-[#0a0a0a]">
                    <div className="text-xs text-[#b8b8b8] mb-3">TOOLS USED</div>
                    <div className="space-y-2">
                      {selectedProject.tools.map((tool: string) => (
                        <div key={tool} className="flex items-center space-x-2 text-sm text-white bg-[#2c2c2c] px-3 py-2 rounded">
                          <Layers size={14} className="text-[#00a8ff]" />
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="p-4 border-b border-[#0a0a0a]">
                    <div className="text-xs text-[#b8b8b8] mb-3">TAGS</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#00a8ff]/20 border border-[#00a8ff]/40 rounded text-xs text-[#00a8ff]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-4">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-[#00a8ff] hover:bg-[#0096e6] rounded text-white font-semibold flex items-center justify-center space-x-2 transition-colors"
                    >
                      <Download size={18} />
                      <span>Download PSD</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GraphicDesign
