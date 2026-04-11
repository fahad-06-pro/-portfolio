import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCalendarAlt, FaBullseye, FaCoffee } from 'react-icons/fa'
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants, slideInLeftVariants, slideInRightVariants } from '../../hooks/useScrollAnimation'
import { personalInfo, socialLinks, services, stats } from '../../data/portfolioData'

const About = () => {
  const { ref: titleRef, controls: titleControls } = useScrollAnimation()
  const { ref: leftRef, controls: leftControls } = useScrollAnimation()
  const { ref: rightRef, controls: rightControls } = useScrollAnimation()
  const { ref: statsRef, controls: statsControls } = useScrollAnimation()
  const { ref: servicesRef, controls: servicesControls } = useScrollAnimation()

  return (
    <section id="about" className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B0C2A 0%, #0f1035 100%)' }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
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
            {'<'} about me {'>'}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who Am{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              I?
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(to right, #7B2FBE, #00D4FF)' }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            ref={leftRef}
            variants={slideInLeftVariants}
            initial="hidden"
            animate={leftControls}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div
                className="w-full aspect-square rounded-2xl overflow-hidden"
                style={{
                  border: '2px solid rgba(123, 47, 190, 0.3)',
                  background: 'linear-gradient(135deg, #12144A, #1a1b4b)',
                }}
              >
                <img
                  src="/assets/images/fahad.jpeg"
                  alt="Fahad Ali"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div
                  className="absolute inset-0 items-center justify-center text-8xl hidden"
                  style={{ background: 'linear-gradient(135deg, #12144A, #1a1b4b)' }}
                >
                  👨‍💻
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 p-4 rounded-xl"
                style={{
                  background: 'rgba(18, 20, 74, 0.9)',
                  border: '1px solid rgba(123, 47, 190, 0.3)',
                  backdropFilter: 'blur(10px)',
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-2xl font-bold" style={{
                  background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  1.5+
                </p>
                <p className="text-xs text-white">Years Experience</p>
              </motion.div>

              <motion.div
                className="absolute -top-6 -left-6 p-4 rounded-xl"
                style={{
                  background: 'rgba(18, 20, 74, 0.9)',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                }}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <p className="text-2xl font-bold" style={{
                  background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  3+
                </p>
                <p className="text-xs text-white">Projects Done</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            ref={rightRef}
            variants={slideInRightVariants}
            initial="hidden"
            animate={rightControls}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Building Digital Solutions That{' '}
              <span style={{
                background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Matter
              </span>
            </h3>

            <p className="mb-6 leading-relaxed" style={{ color: '#8892B0' }}>
              {personalInfo.about}
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location },
                { icon: FaEnvelope, label: 'Email', value: personalInfo.email },
                { icon: FaPhone, label: 'Phone', value: personalInfo.phone },
                { icon: FaCalendarAlt, label: 'Experience', value: personalInfo.experience },
                { icon: FaBullseye, label: 'Goal', value: 'Tech Entrepreneur' },
                { icon: FaCoffee, label: 'Status', value: personalInfo.availability },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(123, 47, 190, 0.2)' }}
                  >
                    <Icon size={14} style={{ color: '#00D4FF' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#8892B0' }}>
                    {label}:
                  </span>
                  <span className="text-sm text-white font-medium">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="mailto:ujanfahad@gmail.com"
                className="px-6 py-3 rounded-full font-semibold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(123,47,190,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                style={{
                  border: '2px solid rgba(123, 47, 190, 0.5)',
                  color: '#7B2FBE',
                }}
                whileHover={{ scale: 1.05, background: 'rgba(123, 47, 190, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                View GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={statsRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={statsControls}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUpVariants}
              className="text-center p-6 rounded-2xl"
              style={{
                background: 'rgba(18, 20, 74, 0.6)',
                border: '1px solid rgba(30, 32, 80, 0.8)',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{
                y: -5,
                borderColor: 'rgba(123, 47, 190, 0.5)',
                boxShadow: '0 10px 30px rgba(123,47,190,0.2)',
              }}
            >
              <p
                className="text-4xl font-black mb-2"
                style={{
                  background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.number}
              </p>
              <p className="text-sm" style={{ color: '#8892B0' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={servicesRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={servicesControls}
        >
          <motion.h3
            variants={fadeUpVariants}
            className="text-2xl font-bold text-white text-center mb-10"
          >
            What I{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Offer
            </span>
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUpVariants}
                className="p-6 rounded-2xl transition-all duration-300 group"
                style={{
                  background: 'rgba(18, 20, 74, 0.6)',
                  border: '1px solid rgba(30, 32, 80, 0.8)',
                  backdropFilter: 'blur(10px)',
                }}
                whileHover={{
                  y: -8,
                  borderColor: 'rgba(123, 47, 190, 0.5)',
                  boxShadow: '0 20px 40px rgba(123,47,190,0.2)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(123, 47, 190, 0.2)' }}
                >
                  {service.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#8892B0' }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About