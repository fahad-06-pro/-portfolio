import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#0B0C2A' }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo / Name */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        {/* Animated Logo */}
        <div className="relative mb-6">
          {/* Outer Ring */}
          <motion.div
            className="w-24 h-24 rounded-full mx-auto"
            style={{
              border: '2px solid transparent',
              backgroundImage:
                'linear-gradient(#0B0C2A, #0B0C2A), linear-gradient(135deg, #7B2FBE, #00D4FF)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Inner Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-2xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              FA
            </span>
          </div>
        </div>

        <motion.h1
          className="text-2xl font-bold text-white mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Fahad Ali
        </motion.h1>
        <motion.p
          className="text-sm font-mono"
          style={{ color: '#00D4FF' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack MERN Developer
        </motion.p>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-64"
      >
        <div
          className="w-full h-1 rounded-full overflow-hidden mb-3"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(to right, #7B2FBE, #00D4FF)',
              width: `${progress}%`,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <p
          className="text-center text-xs font-mono"
          style={{ color: '#8892B0' }}
        >
          {progress}%
        </p>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? '#7B2FBE' : '#00D4FF',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  )
}

export default Loader