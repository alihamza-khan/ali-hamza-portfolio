import { motion } from 'framer-motion'
import { FaBrain, FaShieldAlt, FaCloud, FaCode, FaRocket, FaLaptopCode } from 'react-icons/fa'

const interests = [
  {
    icon: <FaBrain size={32} />,
    label: 'Artificial Intelligence',
    description: 'Building intelligent systems that learn and adapt',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.3)',
  },
  {
    icon: <FaCode size={32} />,
    label: 'Machine Learning',
    description: 'Teaching machines to recognize patterns and make decisions',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    icon: <FaShieldAlt size={32} />,
    label: 'Cybersecurity',
    description: 'Protecting digital assets and securing infrastructure',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
  },
  {
    icon: <FaRocket size={32} />,
    label: 'Ethical Hacking',
    description: 'Finding vulnerabilities before the bad actors do',
    color: '#ef4444',
    glow: 'rgba(239,68,68,0.3)',
  },
  {
    icon: <FaCloud size={32} />,
    label: 'Cloud Computing',
    description: 'Scaling applications with modern cloud infrastructure',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.3)',
  },
  {
    icon: <FaLaptopCode size={32} />,
    label: 'Web Development',
    description: 'Crafting beautiful and performant web experiences',
    color: '#00f0ff',
    glow: 'rgba(0,240,255,0.3)',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Interests = () => {
  return (
    <section
      id="interests"
      className="section-padding bg-[#050510] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,240,255,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-purple-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3 block">
            Passion Areas
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Areas of <span className="gradient-text">Interest</span>
          </h2>
          <div className="flex justify-center">
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #ec4899)' }}
            />
          </div>
        </motion.div>

        {/* Hexagonal grid layout */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {interests.map((item) => (
            <motion.div
              key={item.label}
              className="group relative flex flex-col items-center text-center p-8 glass rounded-2xl border border-white/5 cursor-default overflow-hidden"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                borderColor: item.glow.replace('0.3)', '0.5)'),
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow backdrop */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${item.glow.replace('0.3)', '0.08)')}, transparent 70%)` }}
              />

              {/* Icon circle */}
              <motion.div
                className="relative w-20 h-20 rounded-full flex items-center justify-center mb-5"
                style={{
                  background: `${item.color}15`,
                  border: `2px solid ${item.color}30`,
                  color: item.color,
                }}
                whileHover={{
                  boxShadow: `0 0 30px ${item.glow}`,
                  borderColor: item.color,
                }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
                {/* Rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-dashed opacity-0 group-hover:opacity-30"
                  style={{ borderColor: item.color }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>

              <h3
                className="text-white font-bold text-base mb-2 group-hover:transition-colors duration-300"
                style={{ color: undefined }}
              >
                {item.label}
              </h3>
              <p className="text-white/40 text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Interests
