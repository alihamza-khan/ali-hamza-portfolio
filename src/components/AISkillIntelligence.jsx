import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  FaBrain, FaCode, FaShieldAlt, FaChartBar, FaRobot,
  FaCheckCircle, FaStar, FaFire, FaTrophy, FaLightbulb,
} from 'react-icons/fa'
import { SiOpenai } from 'react-icons/si'

const skillData = [
  { skill: 'React.js', level: 75, category: 'Frontend' },
  { skill: 'Node.js', level: 70, category: 'Backend' },
  { skill: 'MongoDB', level: 72, category: 'Database' },
  { skill: 'Express.js', level: 70, category: 'Backend' },
  { skill: 'JavaScript', level: 80, category: 'Frontend' },
  { skill: 'Python', level: 65, category: 'AI/ML' },
  { skill: 'HTML/CSS', level: 88, category: 'Frontend' },
  { skill: 'Git/GitHub', level: 80, category: 'DevOps' },
]

const projectScore = 6 // number of projects
const certifications = 1
const yearsLearning = 2

function computeIntelligence() {
  const avgSkill = skillData.reduce((a, b) => a + b.level, 0) / skillData.length
  const projectBonus = projectScore * 3
  const certBonus = certifications * 5
  const timeBonus = yearsLearning * 4
  const raw = avgSkill + projectBonus + certBonus + timeBonus
  return Math.min(Math.round(raw), 99)
}

const OVERALL_SCORE = computeIntelligence()

const metrics = [
  {
    label: 'Frontend Strength',
    value: 82,
    color: '#00f0ff',
    icon: <FaCode />,
    insight: 'Strong HTML/CSS/JS + React foundation with modern tooling.',
  },
  {
    label: 'Backend Capability',
    value: 70,
    color: '#8b5cf6',
    icon: <FaRobot />,
    insight: 'Solid Node/Express REST API development across multiple projects.',
  },
  {
    label: 'AI / ML Potential',
    value: 58,
    color: '#ec4899',
    icon: <FaBrain />,
    insight: 'Emerging AI skills with hands-on NLP project experience.',
  },
  {
    label: 'Security Awareness',
    value: 45,
    color: '#f59e0b',
    icon: <FaShieldAlt />,
    insight: 'Growing interest in ethical hacking and cybersecurity fundamentals.',
  },
  {
    label: 'Project Execution',
    value: 88,
    color: '#34d399',
    icon: <FaTrophy />,
    insight: '6 diverse real-world projects across full stack, AI, and frontend.',
  },
  {
    label: 'Learning Velocity',
    value: 90,
    color: '#fb923c',
    icon: <FaFire />,
    insight: 'Consistently picks up new technologies rapidly and applies them.',
  },
]

const badges = [
  { label: 'MERN Developer', color: '#00f0ff', icon: '⚛️' },
  { label: 'AI Enthusiast', color: '#ec4899', icon: '🤖' },
  { label: 'Fast Learner', color: '#34d399', icon: '⚡' },
  { label: 'Problem Solver', color: '#8b5cf6', icon: '🧠' },
  { label: 'Open to Work', color: '#f59e0b', icon: '🚀' },
]

const typewriterLines = [
  '> Analyzing developer profile...',
  '> Scanning 6 projects across 5 domains...',
  '> Evaluating MERN stack proficiency...',
  '> Assessing AI & ML exposure...',
  '> Cross-referencing certifications...',
  '> Computing recruiter compatibility score...',
  '',
  '> ANALYSIS COMPLETE ✅',
  '',
  '  Profile: Ali Hamza — MERN Stack Developer',
  '  Level: Intermediate → Advanced (trending ↑)',
  '  Strengths: Full-Stack Web, Real-time Apps, AI',
  '  Hire Confidence: HIGH 🔥',
  '',
  '  Recommendation:',
  '  "Advanced MERN Developer with strong project',
  '   execution skills and growing expertise in AI',
  '   and Cybersecurity. Ideal candidate for junior',
  '   to mid-level full-stack or AI-adjacent roles."',
]

const MetricBar = ({ metric, animate }) => (
  <motion.div
    className="group relative glass rounded-xl p-4 border border-white/5 hover:border-white/15 transition-all duration-300 cursor-default"
    whileHover={{ scale: 1.02, boxShadow: `0 10px 40px ${metric.color}15` }}
  >
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <span style={{ color: metric.color }}>{metric.icon}</span>
        <span className="text-white/80 text-sm font-semibold">{metric.label}</span>
      </div>
      <span className="text-sm font-black" style={{ color: metric.color }}>{metric.value}%</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
      <motion.div
        className="h-full rounded-full relative overflow-hidden"
        style={{ background: `linear-gradient(90deg, ${metric.color}cc, ${metric.color})` }}
        initial={{ width: 0 }}
        animate={{ width: animate ? `${metric.value}%` : 0 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
      >
        <motion.div
          className="absolute inset-0 opacity-60"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
      </motion.div>
    </div>
    <p className="text-white/35 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {metric.insight}
    </p>
  </motion.div>
)

const TerminalOutput = ({ lines, show }) => {
  const [visibleLines, setVisibleLines] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!show) return
    setVisibleLines([])
    setDone(false)
    let i = 0
    const interval = setInterval(() => {
      if (i < lines.length) {
        setVisibleLines((prev) => [...prev, lines[i]])
        i++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, 90)
    return () => clearInterval(interval)
  }, [show, lines])

  return (
    <div
      className="font-mono text-xs leading-6 text-green-400/90 min-h-[340px] relative"
      style={{ fontFamily: "'Fira Code', 'Courier New', monospace" }}
    >
      {visibleLines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.15 }}
        >
          {!line ? (
            <span>&nbsp;</span>
          ) : line.startsWith('  "') ? (
            <span className="text-cyan-300">{line}</span>
          ) : line.startsWith('  Level:') ? (
            <span className="text-yellow-300">{line}</span>
          ) : line.startsWith('  Hire Confidence:') ? (
            <span className="text-green-400 font-bold">{line}</span>
          ) : line.startsWith('  Strengths:') ? (
            <span className="text-purple-300">{line}</span>
          ) : line.startsWith('> ANALYSIS') ? (
            <span className="text-green-300 font-bold">{line}</span>
          ) : (
            <span>{line}</span>
          )}
        </motion.div>
      ))}
      {!done && show && (
        <span className="inline-block w-2 h-4 bg-green-400 align-middle ml-0.5 animate-pulse" />
      )}
    </div>
  )
}

const CircularScore = ({ score, animate }) => {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (animate ? (score / 100) * circumference : circumference)

  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        {/* BG track */}
        <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
        {/* Gradient arc */}
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: animate ? strokeDashoffset : circumference }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
        />
      </svg>
      {/* Center score */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-3xl font-black gradient-text leading-none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: animate ? 1 : 0, scale: animate ? 1 : 0.5 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {score}
        </motion.span>
        <span className="text-white/40 text-xs mt-0.5">/ 100</span>
      </div>
    </div>
  )
}

const AISkillIntelligence = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [terminalStarted, setTerminalStarted] = useState(false)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    if (isInView && !terminalStarted) {
      setTerminalStarted(true)
      // Show result after terminal finishes ~90ms * lines count
      const delay = typewriterLines.length * 90 + 800
      setTimeout(() => setShowResult(true), delay)
    }
  }, [isInView, terminalStarted])

  return (
    <section
      id="ai-intelligence"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #080818 50%, #050510 100%)' }}
    >
      {/* BG FX */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,240,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00f0ff20, #8b5cf620)' }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <SiOpenai className="text-cyan-400" size={16} />
            </motion.div>
            <span className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase">
              AI Powered Analysis
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            AI Skill <span className="gradient-text">Intelligence</span>
          </h2>
          <div className="flex justify-center">
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #ec4899)' }}
            />
          </div>
          <p className="text-white/40 text-sm mt-4 max-w-md mx-auto">
            An intelligent profile evaluator that simulates how a technical recruiter would assess
            Ali Hamza's engineering capabilities.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Terminal panel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Terminal window */}
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                background: 'rgba(0, 10, 0, 0.92)',
                borderColor: 'rgba(0, 240, 255, 0.2)',
                boxShadow: '0 0 40px rgba(0, 240, 255, 0.07)',
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: 'rgba(0,240,255,0.1)', background: 'rgba(0,20,0,0.8)' }}
              >
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
                <span className="ml-3 text-green-400/60 text-xs font-mono tracking-wider">
                  ai-skill-analyzer@kiro:~$
                </span>
                <span className="ml-auto text-white/20 text-xs font-mono">v1.0.0</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 overflow-hidden">
                <TerminalOutput lines={typewriterLines} show={terminalStarted} />
              </div>
            </div>
          </motion.div>

          {/* Score + metrics panel */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Score card */}
            <div
              className="glass rounded-2xl p-6 border text-center relative overflow-hidden"
              style={{ borderColor: 'rgba(0,240,255,0.2)' }}
            >
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ background: 'radial-gradient(circle at center, #00f0ff, transparent 70%)' }}
              />
              <p className="text-white/50 text-xs uppercase tracking-widest mb-4 font-semibold">
                AI Intelligence Score
              </p>
              <CircularScore score={OVERALL_SCORE} animate={isInView} />
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4"
                  >
                    <span
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                      style={{
                        background: 'linear-gradient(135deg, #00f0ff20, #8b5cf620)',
                        border: '1px solid rgba(0,240,255,0.3)',
                        color: '#00f0ff',
                      }}
                    >
                      <FaStar size={12} />
                      Intermediate → Advanced
                    </span>
                    <p className="text-white/40 text-xs mt-2">
                      Trending upward — high growth velocity
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Badges */}
            <div className="glass rounded-2xl p-5 border border-white/5">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">
                Developer Profile Badges
              </p>
              <div className="flex flex-wrap gap-2">
                {badges.map((b, i) => (
                  <motion.span
                    key={b.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      background: `${b.color}15`,
                      color: b.color,
                      border: `1px solid ${b.color}30`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  >
                    {b.icon} {b.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {metrics.map((m) => (
            <MetricBar key={m.label} metric={m} animate={isInView} />
          ))}
        </motion.div>

        {/* Final AI verdict card */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              className="relative glass rounded-2xl p-8 border overflow-hidden"
              style={{ borderColor: 'rgba(0,240,255,0.25)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Gradient accent */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{ background: 'linear-gradient(135deg, #00f0ff, #8b5cf6, #ec4899)' }}
              />
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #00f0ff, #8b5cf6, #ec4899, transparent)' }}
              />

              <div className="relative flex flex-col md:flex-row items-start gap-6">
                {/* AI Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #00f0ff20, #8b5cf620)' }}
                >
                  <FaLightbulb className="text-cyan-400" size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-white font-black text-lg">AI Recruiter Verdict</span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: 'rgba(52,211,153,0.15)',
                        color: '#34d399',
                        border: '1px solid rgba(52,211,153,0.3)',
                      }}
                    >
                      ✅ HIRE RECOMMENDED
                    </span>
                  </div>

                  <blockquote
                    className="text-white/70 text-sm md:text-base leading-relaxed mb-5 border-l-2 pl-4"
                    style={{ borderColor: '#00f0ff' }}
                  >
                    "Advanced MERN Developer with strong project execution skills and growing expertise
                    in AI and Cybersecurity. Ali demonstrates exceptional learning velocity and has
                    shipped 6 real-world applications spanning full-stack web, real-time systems, and
                    AI-powered tools. Ideal candidate for junior to mid-level full-stack or AI-adjacent
                    roles at forward-thinking companies."
                  </blockquote>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: 'Skill Level', value: 'Intermediate+', color: '#00f0ff' },
                      { label: 'Hire Confidence', value: 'HIGH', color: '#34d399' },
                      { label: 'Projects', value: '6 Shipped', color: '#8b5cf6' },
                      { label: 'Growth Rate', value: 'Exceptional', color: '#f59e0b' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="text-center glass rounded-xl p-3 border border-white/5"
                      >
                        <div className="text-xs font-bold mb-0.5" style={{ color: item.color }}>
                          {item.value}
                        </div>
                        <div className="text-white/30 text-xs">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default AISkillIntelligence
