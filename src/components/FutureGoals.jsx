import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaShieldAlt, FaCheckCircle, FaCircle } from 'react-icons/fa'

const goals = [
  {
    icon: <FaCode size={28} />,
    title: 'Full Stack Developer',
    subtitle: 'Senior MERN Engineer',
    description:
      'Become a senior-level full-stack developer building scalable, high-performance web applications used by millions of users globally.',
    color: '#00f0ff',
    glow: 'rgba(0,240,255,0.3)',
    timeline: '2025 – 2027',
    steps: [
      { label: 'Master MERN Stack', done: true },
      { label: 'Learn TypeScript deeply', done: true },
      { label: 'System Design fundamentals', done: false },
      { label: 'Build SaaS product', done: false },
      { label: 'Senior Developer role', done: false },
    ],
  },
  {
    icon: <FaBrain size={28} />,
    title: 'AI Engineer',
    subtitle: 'ML & Deep Learning Specialist',
    description:
      'Specialize in machine learning, deep learning, and LLMs. Build AI-powered products that solve real-world problems and create meaningful impact.',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.3)',
    timeline: '2026 – 2028',
    steps: [
      { label: 'Python & ML Fundamentals', done: true },
      { label: 'Deep Learning with TensorFlow', done: false },
      { label: 'NLP & Transformer models', done: false },
      { label: 'Build AI SaaS product', done: false },
      { label: 'AI Engineer at top company', done: false },
    ],
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: 'Cybersecurity Specialist',
    subtitle: 'Ethical Hacker & Security Analyst',
    description:
      'Become a certified cybersecurity expert specializing in penetration testing, vulnerability assessment, and building secure digital infrastructure.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
    timeline: '2026 – 2029',
    steps: [
      { label: 'Network Security basics', done: false },
      { label: 'CEH Certification', done: false },
      { label: 'Penetration Testing skills', done: false },
      { label: 'OSCP Certification', done: false },
      { label: 'Security Consultant role', done: false },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

const FutureGoals = () => {
  return (
    <section
      id="goals"
      className="section-padding bg-[#050510] relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-pink-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3 block">
            Vision & Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Future <span className="gradient-text">Goals</span>
          </h2>
          <div className="flex justify-center">
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #ec4899)' }}
            />
          </div>
          <p className="text-white/40 text-sm mt-4 max-w-md mx-auto">
            Three ambitious career paths I'm actively building toward, each with a clear roadmap.
          </p>
        </motion.div>

        {/* Goals grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {goals.map((goal, i) => (
            <motion.div
              key={goal.title}
              className="relative glass rounded-2xl p-6 border border-white/5 group overflow-hidden"
              variants={cardVariants}
              whileHover={{
                borderColor: `${goal.color}40`,
                boxShadow: `0 20px 60px ${goal.glow.replace('0.3)', '0.15)')}`,
                y: -8,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at top, ${goal.glow.replace('0.3)', '0.06)')}, transparent 60%)`,
                }}
              />

              {/* Goal number */}
              <div
                className="absolute top-5 right-5 text-6xl font-black opacity-5"
                style={{ color: goal.color }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative"
                style={{ background: `${goal.color}15`, color: goal.color }}
              >
                {goal.icon}
              </div>

              {/* Header */}
              <div className="mb-2">
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: `${goal.color}15`, color: goal.color }}
                >
                  {goal.timeline}
                </span>
              </div>

              <h3 className="text-white font-black text-xl mb-1">{goal.title}</h3>
              <p className="text-xs font-medium mb-4" style={{ color: goal.color }}>
                {goal.subtitle}
              </p>

              <p className="text-white/50 text-sm leading-relaxed mb-6">{goal.description}</p>

              {/* Roadmap steps */}
              <div className="space-y-2.5">
                <h4 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">
                  Roadmap
                </h4>
                {goal.steps.map((step) => (
                  <div key={step.label} className="flex items-center gap-3">
                    {step.done ? (
                      <FaCheckCircle size={13} style={{ color: goal.color, flexShrink: 0 }} />
                    ) : (
                      <FaCircle size={13} style={{ color: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
                    )}
                    <span
                      className={`text-sm ${step.done ? 'text-white/70 line-through' : 'text-white/40'}`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FutureGoals
