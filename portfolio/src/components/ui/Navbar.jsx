import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdCode } from 'react-icons/md'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../../context/ThemeContext'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isDark } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const current = sections.find((section) => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleHireMe = () => {
    setIsOpen(false)
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? isDark ? 'rgba(11, 12, 42, 0.95)' : 'rgba(248, 249, 255, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? isDark ? '1px solid rgba(30, 32, 80, 0.8)' : '1px solid rgba(226, 232, 240, 0.8)'
            : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.2)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('#home')}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)' }}
              >
                <MdCode size={18} color="white" />
              </div>
              <span
                className="text-lg font-bold"
                style={{
                  background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Fahad Ali
              </span>
            </motion.div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-sm font-medium transition-colors duration-300 group"
                  style={{
                    color:
                      activeSection === link.href.replace('#', '')
                        ? '#00D4FF'
                        : isDark ? '#8892B0' : '#4A5568',
                  }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300"
                    style={{
                      background: 'linear-gradient(to right, #7B2FBE, #00D4FF)',
                      width: activeSection === link.href.replace('#', '') ? '100%' : '0%',
                    }}
                  />
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 w-0 group-hover:w-full"
                    style={{ background: 'linear-gradient(to right, #7B2FBE, #00D4FF)' }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <ThemeToggle />

              <motion.button
                onClick={handleHireMe}
                className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(123, 47, 190, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>

              <motion.button
                className="md:hidden p-2 rounded-lg"
                style={{
                  color: isDark ? '#FFFFFF' : '#0B0C2A',
                  background: isDark ? 'rgba(123, 47, 190, 0.2)' : 'rgba(123, 47, 190, 0.1)',
                }}
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: isDark ? 'rgba(11, 12, 42, 0.98)' : 'rgba(248, 249, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: isDark
                ? '1px solid rgba(30, 32, 80, 0.8)'
                : '1px solid rgba(226, 232, 240, 0.8)',
            }}
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300"
                  style={{
                    color:
                      activeSection === link.href.replace('#', '')
                        ? '#00D4FF'
                        : isDark ? '#8892B0' : '#4A5568',
                    background:
                      activeSection === link.href.replace('#', '')
                        ? 'rgba(123, 47, 190, 0.1)'
                        : 'transparent',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.button
                className="mt-2 py-3 px-4 rounded-xl text-center text-sm font-semibold text-white w-full"
                style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={handleHireMe}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me 🚀
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar