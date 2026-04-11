import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { useScrollAnimation, fadeUpVariants, slideInLeftVariants, slideInRightVariants } from '../../hooks/useScrollAnimation'
import { personalInfo, socialLinks } from '../../data/portfolioData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const { ref: titleRef, controls: titleControls } = useScrollAnimation()
  const { ref: leftRef, controls: leftControls } = useScrollAnimation()
  const { ref: rightRef, controls: rightControls } = useScrollAnimation()

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 10) newErrors.message = 'Message too short'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'ujanfahad@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email error:', error)
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: 'https://mail.google.com/mail/?view=cm&to=ujanfahad@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: 'tel:+923713608007' },
    { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: 'https://www.google.com/maps/search/Sukkur,+Sindh,+Pakistan' },
  ]

  const socialIcons = [
    { icon: FaGithub, href: socialLinks.github, label: 'GitHub', color: '#FFFFFF' },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn', color: '#0077B5' },
    { icon: FaInstagram, href: socialLinks.instagram, label: 'Instagram', color: '#E4405F' },
    { icon: FaEnvelope, href: socialLinks.email, label: 'Email', color: '#00D4FF' },
  ]

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f1035 0%, #0B0C2A 100%)' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,190,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={titleControls}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono mb-3" style={{ color: '#00D4FF' }}>
            {'<'} contact {'>'}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{ background: 'linear-gradient(to right, #7B2FBE, #00D4FF)' }}
          />
          <p style={{ color: '#8892B0' }} className="max-w-xl mx-auto">
            Have a project in mind? Let's work together to build something amazing.
            I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div ref={leftRef} variants={slideInLeftVariants} initial="hidden" animate={leftControls}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Build Something{' '}
              <span style={{
                background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Amazing
              </span>
            </h3>
            <p className="mb-8 leading-relaxed" style={{ color: '#8892B0' }}>
              I'm currently available for freelance work and full-time positions.
              If you have a project that needs some creative work or want to discuss
              opportunities, feel free to contact me!
            </p>

            <div className="space-y-4 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                  style={{
                    background: 'rgba(18, 20, 74, 0.6)',
                    border: '1px solid rgba(30, 32, 80, 0.8)',
                  }}
                  whileHover={{ borderColor: 'rgba(123, 47, 190, 0.5)', x: 5 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(123, 47, 190, 0.2)' }}
                  >
                    <Icon size={20} style={{ color: '#00D4FF' }} />
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: '#8892B0' }}>{label}</p>
                    <p className="text-white font-medium text-sm">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <p className="text-sm mb-4" style={{ color: '#8892B0' }}>Follow me on social media:</p>
              <div className="flex gap-3">
                {socialIcons.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(18, 20, 74, 0.6)',
                      border: '1px solid rgba(30, 32, 80, 0.8)',
                      color: '#8892B0',
                    }}
                    whileHover={{ scale: 1.1, color: color, borderColor: color, background: `${color}15` }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div ref={rightRef} variants={slideInRightVariants} initial="hidden" animate={rightControls}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#8892B0' }}>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(18, 20, 74, 0.6)',
                      border: errors.name ? '1px solid #FF6B6B' : '1px solid rgba(30, 32, 80, 0.8)',
                      color: '#FFFFFF',
                    }}
                  />
                  {errors.name && <p className="text-xs mt-1" style={{ color: '#FF6B6B' }}>{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#8892B0' }}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(18, 20, 74, 0.6)',
                      border: errors.email ? '1px solid #FF6B6B' : '1px solid rgba(30, 32, 80, 0.8)',
                      color: '#FFFFFF',
                    }}
                  />
                  {errors.email && <p className="text-xs mt-1" style={{ color: '#FF6B6B' }}>{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2" style={{ color: '#8892B0' }}>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                  style={{
                    background: 'rgba(18, 20, 74, 0.6)',
                    border: errors.subject ? '1px solid #FF6B6B' : '1px solid rgba(30, 32, 80, 0.8)',
                    color: '#FFFFFF',
                  }}
                />
                {errors.subject && <p className="text-xs mt-1" style={{ color: '#FF6B6B' }}>{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-sm mb-2" style={{ color: '#8892B0' }}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none"
                  style={{
                    background: 'rgba(18, 20, 74, 0.6)',
                    border: errors.message ? '1px solid #FF6B6B' : '1px solid rgba(30, 32, 80, 0.8)',
                    color: '#FFFFFF',
                  }}
                />
                {errors.message && <p className="text-xs mt-1" style={{ color: '#FF6B6B' }}>{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3 transition-all duration-300"
                style={{
                  background:
                    status === 'success' ? 'linear-gradient(135deg, #22C55E, #16A34A)' :
                    status === 'error' ? 'linear-gradient(135deg, #EF4444, #DC2626)' :
                    'linear-gradient(135deg, #7B2FBE, #00D4FF)',
                  opacity: status === 'loading' ? 0.8 : 1,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                }}
                whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 30px rgba(123,47,190,0.5)' } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              >
                {status === 'loading' ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <><FaCheckCircle size={20} /> Message Sent Successfully! 🎉</>
                ) : status === 'error' ? (
                  <><FaPaperPlane size={20} /> Failed! Try Again</>
                ) : (
                  <><FaPaperPlane size={20} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact