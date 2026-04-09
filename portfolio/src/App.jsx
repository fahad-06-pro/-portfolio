import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import CustomCursor from './components/ui/CustomCursor'
import Loader from './components/ui/Loader'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function AppContent() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Prevent scroll during loading
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = 'unset'
    }, 2800)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="relative min-h-screen dark:bg-galaxy-bg bg-light-bg">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Custom Cursor - Desktop Only */}
          <CustomCursor />

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App