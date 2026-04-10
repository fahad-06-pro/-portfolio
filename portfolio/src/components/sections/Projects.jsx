import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { projects } from '../../data/portfolioData'

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
      style={{
        background: 'rgba(18, 20, 74, 0.6)',
        border: '1px solid rgba(30, 32, 80, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -10,
        borderColor: 'rgba(123, 47, 190, 0.5)',
        boxShadow: '0 20px 60px rgba(123,47,190,0.25)',
      }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        {/* Fallback */}
        <div
          className="absolute inset-0 items-center justify-center text-5xl"
          style={{
            background: 'linear-gradient(135deg, #12144A, #1a1b4b)',
            display: 'none',
          }}
        >
          {project.id === 1 ? '🛒' : project.id === 2 ? '✅' : '✈️'}
        </div>

        {/* Overlay on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center gap-4"
              style={{ background: 'rgba(11, 12, 42, 0.85)' }}
            >
              {project.liveLink !== '#' && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ background: 'linear-gradient(135deg, #7B2FBE, #00D4FF)' }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} />
                </motion.a>
              )}
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                style={{
                  background: 'rgba(123, 47, 190, 0.5)',
                  border: '2px solid #7B2FBE',
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2 py-1 rounded-full text-xs font-mono"
            style={{
              background:
                project.status === 'Live'
                  ? 'rgba(34, 197, 94, 0.2)'
                  : 'rgba(251, 191, 36, 0.2)',
              border:
                project.status === 'Live'
                  ? '1px solid rgba(34, 197, 94, 0.5)'
                  : '1px solid rgba(251, 191, 36, 0.5)',
              color: project.status === 'Live' ? '#22C55E' : '#FBBF24',
            }}
          >
            {project.status === 'Live' ? '🟢 Live' : '🟡 In Progress'}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span
              className="px-2 py-1 rounded-full text-xs font-mono"
              style={{
                background: 'rgba(123, 47, 190, 0.3)',
                border: '1px solid rgba(123, 47, 190, 0.5)',
                color: '#00D4FF',
              }}
            >
              ⭐ Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <span
            className="text-xs font-mono px-2 py-1 rounded-full"
            style={{
              background: 'rgba(0, 212, 255, 0.1)',
              color: '#00D4FF',
              border: '1px solid rgba(0, 212, 255, 0.2)',
            }}
          >
            {project.category}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: '#8892B0' }}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          className="flex gap-3 pt-4"
          style={{ borderTop: '1px solid rgba(30, 32, 80, 0.8)' }}
        >
          {project.liveLink !== '#' && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium"
              style={{ color: '#00D4FF' }}
              whileHover={{ x: 3 }}
            >
              <ExternalLink size={14} />
              Live Demo
            </motion.a>
          )}
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium"
            style={{ color: '#8892B0' }}
            whileHover={{ x: 3, color: '#FFFFFF' }}
          >
            <Github size={14} />
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [titleRef, titleInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // ✅ FIXED - Sirf jo categories projects mein hain wohi dikhao
  const availableCategories = ['All', ...new Set(projects.map((p) => p.category))]

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B0C2A 0%, #0f1035 100%)' }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono mb-3" style={{ color: '#00D4FF' }}>
            {'<'} projects {'>'}
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
              Projects
            </span>
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{ background: 'linear-gradient(to right, #7B2FBE, #00D4FF)' }}
          />
          <p style={{ color: '#8892B0' }} className="max-w-xl mx-auto">
            Real-world applications built with modern technologies.
            Each project is fully deployed and production-ready.
          </p>
        </motion.div>

        {/* ✅ FIXED - Dynamic Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {availableCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background:
                  filter === cat
                    ? 'linear-gradient(135deg, #7B2FBE, #00D4FF)'
                    : 'rgba(18, 20, 74, 0.6)',
                color: filter === cat ? '#FFFFFF' : '#8892B0',
                border:
                  filter === cat
                    ? 'none'
                    : '1px solid rgba(30, 32, 80, 0.8)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* ✅ FIXED - Projects Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-4xl mb-4">🚧</p>
            <p className="text-white font-semibold mb-2">
              No projects in this category yet
            </p>
            <p style={{ color: '#8892B0' }} className="text-sm">
              Coming soon! Stay tuned.
            </p>
          </motion.div>
        )}

        {/* Add More Projects Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{
              background: 'rgba(18, 20, 74, 0.6)',
              border: '1px solid rgba(123, 47, 190, 0.3)',
            }}
          >
            <span className="text-2xl">🚀</span>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">
                More projects coming soon!
              </p>
              <p className="text-xs" style={{ color: '#8892B0' }}>
                Currently working on exciting new projects
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects