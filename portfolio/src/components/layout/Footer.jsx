import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaArrowUp } from 'react-icons/fa'
import { MdCode } from 'react-icons/md'
import { personalInfo, socialLinks, navLinks } from '../../data/portfolioData'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const footerLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ]

  const socialIcons = [
    { icon: FaGithub, href: socialLinks.github, label: 'GitHub', color: '#FFFFFF' },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn', color: '#0077B5' },
    { icon: FaInstagram, href: socialLinks.instagram, label: 'Instagram', color: '#E4405F' },
    { icon: FaEnvelope, href: socialLinks.email, label: 'Email', color: '#00D4FF' },
  ]

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0B0C2A 0%, #060714 100%)',
        borderTop: '1px solid rgba(30, 32, 80, 0.8)',
      }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,190,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-6 cursor-pointer"
              onClick={scrollToTop}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)' }}
              >
                <MdCode size={20} color="white" />
              </div>
              <div>
                <p
                  className="text-lg font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Fahad Ali
                </p>
                <p className="text-xs font-mono" style={{ color: '#8892B0' }}>
                  Full Stack MERN Developer
                </p>
              </div>
            </motion.div>

            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: '#8892B0' }}>
              Building complete web applications that help businesses grow online.
              From idea to deployment — I handle everything.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: FaEnvelope, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: FaPhone, value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: FaMapMarkerAlt, value: personalInfo.location, href: '#' },
              ].map(({ icon: Icon, value, href }) => (
                <motion.a
                  key={value}
                  href={href}
                  className="flex items-center gap-3 text-sm transition-colors duration-300 group"
                  style={{ color: '#8892B0' }}
                  whileHover={{ x: 3 }}
                >
                  <Icon size={14} style={{ color: '#7B2FBE' }} className="flex-shrink-0" />
                  <span className="group-hover:text-white transition-colors">{value}</span>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(18, 20, 74, 0.8)',
                    border: '1px solid rgba(30, 32, 80, 0.8)',
                    color: '#8892B0',
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: color,
                    borderColor: color,
                    background: `${color}15`,
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: '#00D4FF' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm transition-all duration-300 flex items-center gap-2 group"
                    style={{ color: '#8892B0' }}
                    whileHover={{ x: 5 }}
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-3"
                      style={{ background: '#7B2FBE' }}
                    />
                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: '#00D4FF' }}>
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'JWT', 'REST API', 'Vercel'].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono rounded-lg"
                  style={{
                    background: 'rgba(123, 47, 190, 0.15)',
                    border: '1px solid rgba(123, 47, 190, 0.3)',
                    color: '#8892B0',
                  }}
                  whileHover={{
                    color: '#00D4FF',
                    borderColor: 'rgba(0, 212, 255, 0.5)',
                    background: 'rgba(0, 212, 255, 0.1)',
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="mt-8 p-4 rounded-xl"
              style={{
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
              }}
              animate={{
                boxShadow: [
                  '0 0 0px rgba(34,197,94,0)',
                  '0 0 15px rgba(34,197,94,0.2)',
                  '0 0 0px rgba(34,197,94,0)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-400">Available for Work</span>
              </div>
              <p className="text-xs" style={{ color: '#8892B0' }}>
                Open to freelance & full-time roles
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: 'rgba(30, 32, 80, 0.8)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <motion.p
              className="text-xs flex items-center gap-2"
              style={{ color: '#8892B0' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              © {new Date().getFullYear()} Fahad Ali. Made with
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart size={12} style={{ color: '#FF6B6B' }} />
              </motion.span>
              in Pakistan 🇵🇰
            </motion.p>

            <p className="text-xs font-mono" style={{ color: '#8892B0' }}>
              Built with{' '}
              <span style={{ color: '#61DAFB' }}>React</span> +{' '}
              <span style={{ color: '#38BDF8' }}>Tailwind</span> +{' '}
              <span style={{ color: '#7B2FBE' }}>Framer Motion</span>
            </p>

            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)' }}
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(123,47,190,0.5)' }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <FaArrowUp size={16} color="white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer