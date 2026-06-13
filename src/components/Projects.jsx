import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// ── Add your real GitHub repo URLs and live demo URLs here ──────────────────
// Leave as null if not available — buttons will show a "Coming Soon" tooltip
const projects = [
  {
    title: 'AI Human Assistant',
    description:
      'An intelligent AI-powered assistant capable of natural language understanding and context-aware responses. Built using Python with NLP techniques to simulate human-like conversation interactions.',
    tags: ['Python', 'AI/ML', 'NLP', 'Machine Learning'],
    tagColors: ['#3776ab', '#ec4899', '#8b5cf6', '#f59e0b'],
    category: 'AI / Machine Learning',
    border: 'rgba(236, 72, 153, 0.3)',
    icon: '🤖',
    github: 'https://github.com/alihamza-khan',   // ← replace with real repo URL
    demo: null,
  },
  {
    title: 'Restaurant Management System',
    description:
      'A full-featured MERN stack restaurant management application with real-time order tracking, menu management, staff roles, and an admin dashboard for business analytics.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    tagColors: ['#4db33d', '#ffffff', '#61dafb', '#68a063'],
    category: 'Full Stack Web',
    border: 'rgba(0, 240, 255, 0.3)',
    icon: '🍽️',
    github: 'https://github.com/alihamza-khan',
    demo: null,
  },
  {
    title: 'Group Chat Application',
    description:
      'A real-time group chat application with WebSocket support using Socket.io. Features include multiple chat rooms, user authentication, live typing indicators, and message history.',
    tags: ['React.js', 'Node.js', 'Socket.io', 'Express.js'],
    tagColors: ['#61dafb', '#68a063', '#f59e0b', '#ffffff'],
    category: 'Real-time Web',
    border: 'rgba(99, 179, 237, 0.3)',
    icon: '💬',
    github: 'https://github.com/alihamza-khan',
    demo: null,
  },
  {
    title: 'Amazon Clone',
    description:
      'A pixel-perfect clone of the Amazon shopping website featuring product listings, search functionality, a shopping cart, responsive design, and a clean UI matching the original.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    tagColors: ['#e34f26', '#1572b6', '#f7df1e', '#8b5cf6'],
    category: 'Frontend',
    border: 'rgba(245, 158, 11, 0.3)',
    icon: '🛒',
    github: 'https://github.com/alihamza-khan',
    demo: null,
  },
  {
    title: 'Weather Application',
    description:
      'A dynamic weather app that fetches real-time data from a weather API, displaying temperature, humidity, wind speed, and a 5-day forecast with beautiful animated weather icons.',
    tags: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
    tagColors: ['#f7df1e', '#00f0ff', '#e34f26', '#1572b6'],
    category: 'Frontend / API',
    border: 'rgba(0, 240, 255, 0.2)',
    icon: '🌤️',
    github: 'https://github.com/alihamza-khan',
    demo: null,
  },
  {
    title: 'TinyURL System',
    description:
      'A URL shortening service built with Node.js and Express. Generates unique short codes for long URLs, tracks click counts, and includes an analytics dashboard for link performance.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
    tagColors: ['#68a063', '#ffffff', '#4db33d', '#00f0ff'],
    category: 'Backend / API',
    border: 'rgba(139, 92, 246, 0.3)',
    icon: '🔗',
    github: 'https://github.com/alihamza-khan',
    demo: null,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Tooltip wrapper — shows "Coming Soon" when href is null
const LinkButton = ({ href, children, className, style, whileHover }) => {
  const [tip, setTip] = useState(false)

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        whileHover={whileHover}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <div className="relative">
      <motion.button
        className={`${className} cursor-not-allowed opacity-50`}
        style={style}
        onMouseEnter={() => setTip(true)}
        onMouseLeave={() => setTip(false)}
        onClick={(e) => e.preventDefault()}
      >
        {children}
      </motion.button>
      <AnimatePresence>
        {tip && (
          <motion.div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap z-50"
            style={{ background: 'rgba(15,15,30,0.95)', color: '#00f0ff', border: '1px solid rgba(0,240,255,0.2)' }}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
          >
            🚧 Coming Soon
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Projects = ({ darkMode }) => {
  const sectionBg = darkMode
    ? 'linear-gradient(180deg, #050510 0%, #070714 50%, #050510 100%)'
    : 'linear-gradient(180deg, #f0f4ff 0%, #e8f0fe 50%, #f0f4ff 100%)'

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
      style={{ background: sectionBg }}
    >
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-pink-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3 block">
            What I've Built
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: darkMode ? '#ffffff' : '#0f0f1a' }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="flex justify-center">
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #ec4899)' }}
            />
          </div>
          <p
            className="text-sm mt-4 max-w-md mx-auto"
            style={{ color: darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(15,15,26,0.5)' }}
          >
            6 real-world projects spanning AI, full-stack web, real-time apps, and frontend work.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="project-card relative rounded-2xl border overflow-hidden group"
              style={{
                background: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.75)',
                borderColor: darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(99,102,241,0.1)',
                backdropFilter: 'blur(12px)',
              }}
              variants={cardVariants}
              whileHover={{
                y: -8,
                borderColor: project.border,
                boxShadow: `0 20px 60px ${project.border}`,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.border}, transparent)`,
                }}
              />

              <div className="p-6">
                {/* Icon + category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{project.icon}</span>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                    style={{
                      color: project.border.replace('0.3)', '1)').replace('0.2)', '1)'),
                      borderColor: project.border,
                      background: project.border.replace('0.3)', '0.08)').replace('0.2)', '0.08)'),
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors"
                  style={{ color: darkMode ? '#ffffff' : '#0f0f1a' }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(15,15,26,0.6)' }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{
                        background: `${project.tagColors[i % project.tagColors.length]}15`,
                        color: project.tagColors[i % project.tagColors.length],
                        border: `1px solid ${project.tagColors[i % project.tagColors.length]}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div
                  className="flex items-center gap-3 pt-4 border-t"
                  style={{ borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}
                >
                  <LinkButton
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium transition-colors focus:outline-none"
                    style={{ color: darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(15,15,26,0.6)' }}
                    whileHover={{ x: 2 }}
                  >
                    <FaGithub size={15} />
                    <span>GitHub</span>
                  </LinkButton>

                  <LinkButton
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-medium transition-colors ml-auto focus:outline-none"
                    style={{ color: project.demo ? '#00f0ff' : 'rgba(0,240,255,0.6)' }}
                    whileHover={{ x: 2 }}
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt size={12} />
                  </LinkButton>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all on GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/alihamza-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-semibold transition-colors focus:outline-none"
            style={{
              borderColor: 'rgba(0,240,255,0.3)',
              color: '#00f0ff',
              background: 'rgba(0,240,255,0.05)',
            }}
            whileHover={{ scale: 1.04, background: 'rgba(0,240,255,0.1)' }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub />
            View All Projects on GitHub
            <FaExternalLinkAlt size={12} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
