import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../../data/portfolioData'

const roles = [
  'Full Stack MERN Developer',
  'React.js Developer',
  'Node.js Developer',
  'Web App Builder',
  'Problem Solver',
]

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const canvasRef = useRef(null)

  useEffect(() => {
    const role = roles[currentRole]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 0 : 2000

    if (!isDeleting && charIndex === role.length) {
      setTimeout(() => setIsDeleting(true), pauseTime)
      return
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
      return
    }

    const timer = setTimeout(() => {
      setDisplayText(role.substring(0, charIndex + (isDeleting ? -1 : 1)))
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, currentRole])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: Math.random() > 0.5 ? '#7B2FBE' : '#00D4FF',
      opacity: Math.random() * 0.6 + 0.2,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
      })

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = '#7B2FBE'
            ctx.globalAlpha = (1 - dist / 100) * 0.2
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0B0C2A 0%, #1a1b4b 50%, #0B0C2A 100%)' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,190,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left - Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(123, 47, 190, 0.15)',
                border: '1px solid rgba(123, 47, 190, 0.3)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-mono" style={{ color: '#00D4FF' }}>
                Available for work
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg mb-2" style={{ color: '#8892B0' }}>
                Hi there! I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                <span className="text-white">Fahad </span>
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Ali
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-6 h-10"
            >
              <span style={{ color: '#00D4FF' }} className="text-xl sm:text-2xl font-mono font-semibold">
                {displayText}
              </span>
              <span className="w-0.5 h-7 animate-pulse" style={{ background: '#7B2FBE' }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg mb-8 leading-relaxed max-w-lg"
              style={{ color: '#8892B0' }}
            >
              {personalInfo.subtitle}. From product listings and shopping carts
              to user dashboards and admin panels — I build it all.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 mb-8"
            >
              {[
                { number: '3+', label: 'Projects' },
                { number: '1.5+', label: 'Years Exp' },
                { number: '10+', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-xs" style={{ color: '#8892B0' }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(123,47,190,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>

              <motion.button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 rounded-full font-semibold transition-all duration-300"
                style={{ border: '2px solid #7B2FBE', color: '#7B2FBE' }}
                whileHover={{ scale: 1.05, background: 'rgba(123, 47, 190, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm" style={{ color: '#8892B0' }}>Follow me:</span>
              {[
                { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
                { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
                { icon: FaInstagram, href: socialLinks.instagram, label: 'Instagram' },
                { icon: FaEnvelope, href: socialLinks.email, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(123, 47, 190, 0.15)',
                    border: '1px solid rgba(123, 47, 190, 0.3)',
                    color: '#8892B0',
                  }}
                  whileHover={{
                    scale: 1.2,
                    background: 'rgba(123, 47, 190, 0.3)',
                    color: '#00D4FF',
                    borderColor: '#00D4FF',
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #7B2FBE, #00D4FF, #FF6B6B, #7B2FBE)',
                  padding: '3px',
                  borderRadius: '50%',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                style={{
                  border: '4px solid transparent',
                  background: 'linear-gradient(#0B0C2A, #0B0C2A) padding-box, linear-gradient(135deg, #7B2FBE, #00D4FF) border-box',
                }}
              >
                <img
                  src="/assets/images/fahad.jpeg"
                  alt="Fahad Ali"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div
                  className="absolute inset-0 items-center justify-center text-6xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #1a1b4b, #0B0C2A)',
                    color: '#7B2FBE',
                    display: 'none',
                  }}
                >
                  FA
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-mono text-white"
                style={{
                  background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
                  boxShadow: '0 0 20px rgba(123,47,190,0.5)',
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                React.js ⚛️
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-xs font-mono text-white"
                style={{
                  background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)',
                  boxShadow: '0 0 20px rgba(0,212,255,0.5)',
                }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                Node.js 🚀
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 px-3 py-2 rounded-xl text-xs font-mono text-white"
                style={{
                  background: 'linear-gradient(135deg, #FF6B6B, #7B2FBE)',
                  boxShadow: '0 0 20px rgba(255,107,107,0.5)',
                }}
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
              >
                MongoDB 🍃
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-mono" style={{ color: '#8892B0' }}>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowDown size={16} style={{ color: '#7B2FBE' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero