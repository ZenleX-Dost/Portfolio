import React, { ReactNode } from 'react'
import Navigation from '../Navigation/Navigation'
import CustomCursor from '../CustomCursor/CustomCursor'
import ScrollProgress from '../ScrollProgress/ScrollProgress'
import FloatingContact from '../FloatingContact/FloatingContact'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
      <FloatingContact />
    </div>
  )
}

export default Layout
