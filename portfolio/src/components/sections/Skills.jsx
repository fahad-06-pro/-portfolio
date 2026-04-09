import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUpVariants, staggerContainerVariants } from '../../hooks/useScrollAnimation'
import { skills } from '../../data/portfolioData'

const SkillBar = ({ name, level, index }) => {
  const { ref, controls, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={controls}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-white font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color: '#00D4FF' }}>
          {level}%
        </span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(to right, #7B2FBE, #00D4FF)',
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const { ref: titleRef, controls: titleControls } = useScrollAnimation()
  const { ref: cardsRef, controls: cardsControls } = useScrollAnimation()

  const categories = ['All', ...skills.map((s) => s.category)]

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory)

  // All tech icons
  const allTechIcons = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#68A063' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'Express', icon: '⚡', color: '#FFFFFF' },
    { name: 'JavaScript', icon: '🟡', color: '#F7DF1E' },
    { name: 'Tailwind', icon: '🎨', color: '#06B6D4' },
    { name: 'Git', icon: '🔧', color: '#F05032' },
    { name: 'Vercel', icon: '🚀', color: '#FFFFFF' },
    { name: 'JWT', icon: '🔐', color: '#7B2FBE' },
    { name: 'HTML5', icon: '🌐', color: '#E34F26' },
    { name: 'CSS3', icon: '🎭', color: '#1572B6' },
    { name: 'Vite', icon: '⚡', color: '#646CFF' },
  ]

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f1035 0%, #0B0C2A 100%)' }}
    >
      {/* Background Glow */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,190,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          ref={titleRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={titleControls}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono mb-3" style={{ color: '#00D4FF' }}>
            {'<'} skills {'>'}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Tech Stack
            </span>
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{ background: 'linear-gradient(to right, #7B2FBE, #00D4FF)' }}
          />
          <p style={{ color: '#8892B0' }} className="max-w-xl mx-auto">
            Technologies I use to build modern, scalable web applications
          </p>
        </motion.div>

        {/* Tech Icons Marquee */}
        <div className="overflow-hidden mb-16">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...allTechIcons, ...allTechIcons].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center gap-2 px-4 py-3 rounded-xl"
                style={{
                  background: 'rgba(18, 20, 74, 0.6)',
                  border: '1px solid rgba(30, 32, 80, 0.8)',
                  minWidth: '80px',
                }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-xs font-mono" style={{ color: tech.color }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background:
                  activeCategory === cat
                    ? 'linear-gradient(135deg, #7B2FBE, #00D4FF)'
                    : 'rgba(18, 20, 74, 0.6)',
                color: activeCategory === cat ? '#FFFFFF' : '#8892B0',
                border:
                  activeCategory === cat
                    ? 'none'
                    : '1px solid rgba(30, 32, 80, 0.8)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={cardsRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={cardsControls}
          className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={fadeUpVariants}
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(18, 20, 74, 0.6)',
                border: '1px solid rgba(30, 32, 80, 0.8)',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{
                borderColor: 'rgba(123, 47, 190, 0.4)',
                boxShadow: '0 10px 30px rgba(123,47,190,0.15)',
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{skillGroup.icon}</span>
                <h3 className="text-white font-bold">{skillGroup.category}</h3>
              </div>

              {/* Skill Bars */}
              {skillGroup.items.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills