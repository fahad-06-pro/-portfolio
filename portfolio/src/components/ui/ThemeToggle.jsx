import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full p-1 transition-colors duration-300 focus:outline-none"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #7B2FBE, #00D4FF)'
          : 'linear-gradient(135deg, #FFB800, #FF6B6B)',
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 rounded-full flex items-center justify-center"
        style={{ background: '#FFFFFF' }}
        animate={{
          x: isDark ? 0 : 28,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {isDark ? (
          <FaMoon size={12} style={{ color: '#7B2FBE' }} />
        ) : (
          <FaSun size={12} style={{ color: '#FFB800' }} />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle