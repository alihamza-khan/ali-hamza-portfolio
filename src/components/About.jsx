import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaBrain, FaAward } from 'react-icons/fa'

const stats = [
  { icon: <FaCode />, value: '6+', label: 'Projects Built', color: '#00f0ff' },
  { icon: <FaRocket />, value: '2+', label: 'Years Learning', color: '#8b5cf6' },
  { icon: <FaBrain />, value: '10+', label: 'Technologies', color: '#ec4899' },
  { icon: <FaAward />, value: '1', label: 'Certification', color: '#f59e0b' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#050510] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3 block">
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="flex justify-center">
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #ec4899)' }}
            />
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="glass rounded-2xl p-8 border border-white/5"
              variants={itemVariants}
            >
              <motion.h3
                className="text-2xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Hi there! 👋
              </motion.h3>
              <motion.p
                className="text-white/65 leading-relaxed mb-4"
                variants={itemVariants}
              >
                I'm <span className="text-cyan-400 font-semibold">Ali Hamza</span>, a passionate
                Software Engineering student at the University of Management and Technology (UMT),
                Lahore, Pakistan. Currently in my second year of a BS Software Engineering program
                (2023–2027), I'm on a journey to become a world-class full-stack developer.
              </motion.p>
              <motion.p
                className="text-white/65 leading-relaxed mb-4"
                variants={itemVariants}
              >
                My primary focus is the{' '}
                <span className="text-purple-400 font-semibold">MERN Stack</span> — MongoDB,
                Express.js, React.js, and Node.js — where I've built real-world applications
                including a Group Chat App, Restaurant Management System, and an AI Human Assistant.
              </motion.p>
              <motion.p
                className="text-white/65 leading-relaxed"
                variants={itemVariants}
              >
                Beyond web development, I'm deeply interested in{' '}
                <span className="text-pink-400 font-semibold">
                  Artificial Intelligence, Machine Learning, and Cybersecurity
                </span>
                . I believe technology should solve real problems, and I'm committed to building
                impactful digital solutions that make a difference.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 mt-6"
                variants={itemVariants}
              >
                {['MERN Stack', 'AI/ML', 'Cybersecurity', 'Problem Solver', 'Quick Learner'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold border border-cyan-400/30 text-cyan-400 bg-cyan-400/10"
                    >
                      {tag}
                    </span>
                  )
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visual / decorative card */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Profile highlights */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h4 className="text-white font-bold mb-5 text-lg">Quick Facts</h4>
              <div className="space-y-4">
                {[
                  { label: '🎓 University', value: 'UMT Lahore' },
                  { label: '📚 Degree', value: 'BS Software Engineering' },
                  { label: '📅 Batch', value: '2023 – 2027' },
                  { label: '📍 Location', value: 'Lahore, Pakistan' },
                  { label: '💼 Status', value: 'Open to Internships' },
                  { label: '🌐 Stack', value: 'MERN (MongoDB, Express, React, Node)' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-4">
                    <span className="text-white/40 text-sm">{item.label}</span>
                    <span className="text-white/80 text-sm font-medium text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div
              className="glass rounded-2xl p-5 border border-green-400/20 flex items-center gap-4"
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Available for Opportunities</p>
                <p className="text-white/40 text-xs mt-0.5">Internships • Freelance • Projects</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center card-hover border border-white/5"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
            >
              <div
                className="text-3xl mb-3 flex justify-center"
                style={{ color: stat.color, filter: `drop-shadow(0 0 8px ${stat.color})` }}
              >
                {stat.icon}
              </div>
              <div
                className="text-3xl font-black mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-white/50 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
