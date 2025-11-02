import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout/Layout'
import LandingPage from './pages/LandingPage'
import GraphicDesign from './pages/GraphicDesign'
import Academic from './pages/Academic'
import PersonalLife from './pages/PersonalLife'
import './App.css'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/design" element={<GraphicDesign />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/personal" element={<PersonalLife />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
