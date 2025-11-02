# Amine El-Hend - Vintage Portfolio

A beautifully crafted, vintage-styled portfolio website featuring authentic design, warm aesthetics, and dynamic content loading. Built with React, TypeScript, and modern web technologies.

## ✨ Highlights

- **Authentic Vintage Design** - No AI-generated feel, handcrafted aesthetic
- **Dynamic Image Loading** - Automatically displays all designs from `/public/designs/` folder
- **Personalized Content** - Real information about Amine El-Hend's work and achievements
- **Responsive & Accessible** - Works beautifully on all devices

## 🎨 Features

### Three Distinct Themed Sections

1. **Graphic Design** - Pinterest-inspired masonry grid
   - Creative portfolio showcase
   - Interactive filters and tags
   - Lightbox view for project details
   - Like/favorite system

2. **Academic & Professional** - Modern technical dashboard
   - Interactive timeline resume
   - Project showcase with tech stack
   - Skills visualization with animated progress bars
   - Downloadable resume

3. **Personal Life** - Warm storytelling
   - Polaroid-style photo gallery
   - Hobby cards
   - Personal quotes and values
   - Authentic personality showcase

### Global Features
- 🎯 Custom animated cursor with vintage styling
- 📊 Scroll progress indicator
- 📱 Fully responsive design
- ⚡ Smooth page transitions with authentic feel
- 💬 Floating contact widget
- 🎨 Vintage color palette and textures
- 📸 Dynamic design image loading
- 🎭 Film grain and paper texture effects

## 🛠️ Technologies

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & GSAP
- **3D Graphics**: Three.js, React Three Fiber
- **Routing**: React Router v6
- **State Management**: Zustand
- **Build Tool**: Vite

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Project Structure

```
src/
├── components/        # Reusable components
│   ├── Layout/       # Main layout wrapper
│   ├── Navigation/   # Navigation menu
│   ├── CustomCursor/ # Custom cursor component
│   ├── ScrollProgress/ # Scroll indicator
│   └── FloatingContact/ # Contact widget
├── pages/            # Page components
│   ├── LandingPage.tsx
│   ├── GraphicDesign.tsx
│   ├── Academic.tsx
│   └── PersonalLife.tsx
├── context/          # React context
│   └── ThemeContext.tsx
├── store/            # Zustand stores
│   └── store.ts
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## 🎨 Customization

### Adding Your Design Images
1. Place your design files (PNG, JPG, JPEG, WEBP) in `/public/designs/` folder
2. The website automatically detects and displays all images
3. See `/public/designs/HOW_TO_ADD_IMAGES.md` for detailed instructions

### Vintage Color Palette
The portfolio uses an authentic vintage color scheme:
- **Vintage Cream** (#F7F3E9) - Backgrounds
- **Vintage Rust** (#B85C38) - Accents and CTAs
- **Vintage Brown** (#8B7355) - Borders and text
- **Vintage Tan** (#D4B896) - Secondary text
- **Vintage Ink** (#2C2C2C) - Primary backgrounds

Edit `tailwind.config.js` to customize colors further.

### Content
All content is personalized with real information:
- **Personal Info**: Contact details, location, specialization
- **Projects**: Real AI/ML/Data Science projects from ENSAM
- **Skills**: Technical skills including Python, ML frameworks, design tools
- **Leadership**: Positions at ADEAM, GENOS, Gadz'IT, and more
- **Experience**: Internships at Capgemini, GAMA, GRIF TECH

## 🚀 Performance

- ⚡ Code splitting for optimal loading
- 🖼️ Lazy loading for images
- 📦 Optimized bundle size
- 🎯 60fps animations

## 📱 Responsive Design

- Mobile-first approach
- Touch-optimized gestures
- Adapted layouts for all screen sizes
- Hamburger menu for mobile

## ♿ Accessibility

- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Alt text for images

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

**Amine El-Hend**
- Email: amine.elhend@gmail.com
- Phone: +212 6 14 20 93 41
- Location: Casablanca, Morocco
- LinkedIn: [linkedin.com/in/amine-el-hend-1a4810228](https://linkedin.com/in/amine-el-hend-1a4810228)
- GitHub: [github.com/ZenleX-Dost](https://github.com/ZenleX-Dost)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ by Amine El-Hend using React + TypeScript + Tailwind CSS
Vintage Design | Industrial Engineering Student | AI & Data Science Enthusiast
