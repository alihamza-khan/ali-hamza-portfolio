import { motion } from 'framer-motion'
import { FaReact, FaBrain, FaShieldAlt, FaCloud, FaCode, FaRocket } from 'react-icons/fa'

const items = [
  {
    icon: <FaReact size={28} />,
    title: 'MERN Stack Advanced',
    description:
      'Deep-diving into advanced React patterns (hooks, context, Redux), Node.js microservices, JWT authentication, and deploying full-stack apps to production.',
    progress: 65,
    color: '#61dafb',
    topics: ['Redux Toolkit', 'JWT Auth', 'REST APIs', 'Deployment'],
  },
  {
    icon: <FaBrain size={28} />,
    title: 'AI & Machine Learning',
    description:
      'Exploring supervised & unsupervised learning, neural networks, and building practical ML models with Python, NumPy, Pandas, and scikit-learn.',
    progress: 40,
    color: '#ec4899',
    topics: ['Python ML', 'Neural Nets', 'Data Science', 'TensorFlow'],
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: 'Cybersecurity',
    description:
      'Learning ethical hacking fundamentals, penetration testing, network security protocols, OWASP Top 10 vulnerabilities, and CTF challenges.',
    progress: 30,
    color: '#f59e0b',
    topics: ['Ethical Hacking', 'Pen Testing', 'OWASP', 'CTF'],
  },
  {
    icon: <FaCloud size={28} />,
    title: 'Cloud Computing',
    description:
      'Getting hands-on with AWS fundamentals including EC2, S3, Lambda, and cloud architecture patterns for scalable and resilient applications.',
    progress: 25,
    color: '#38bdf8',
    topics: ['AWS EC2', 'S3 Storage', 'Lambda', 'Cloud Architecture'],
  },
  {
    icon: <FaCode size={28} />,
    title: 'System Design',
    description:
      'Studying large-scale distributed systems, database design patterns, load balancing, caching strategies, and scalability principles.',
    progress: 35,
    color: '#8b5cf6',
    topics: ['Distributed Systems', 'Caching', 'Load Balancing', 'Microservices'],
  },
  {
    icon: <FaRocket size={28} />,
    title: 'DevOps & CI/CD',
    description:
      'Learning Docker containerization, GitHub Actions for CI/CD pipelines, and modern deployment workflows to streamline software delivery.',
    progress: 20,
    color: '#00f0ff',
    topics: ['Docker', 'GitHub Actions', 'CI/CD', 'Kubernetes'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const CurrentlyLearning = () => {
  return (
    <section
      id="learning"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #060612 50%, #050510 100%)' }}
    >
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3 block">
            Growth Mindset
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Currently <span className="gradient-text">Learning</span>
          </h2>
          <div className="flex justify-center">
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #ec4899)' }}
            />
          </div>
          <p className="text-white/40 text-sm mt-4 max-w-md mx-auto">
            Continuously expanding my skillset across multiple domains of software engineering.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              className="glass rounded-2xl p-6 border border-white/5 group"
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: `${item.color}40`,
                boxShadow: `0 20px 60px ${item.color}15`,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${item.color}15`, color: item.color }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-white transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-5">{item.description}</p>

              {/* Topic tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {item.topics.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-xs font-medium"
                    style={{ background: `${item.color}10`, color: item.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Progress */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-white/35 text-xs">Progress</span>
                  <span className="text-xs font-bold" style={{ color: item.color }}>
                    {item.progress}%
                  </span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}88)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/25 text-sm italic">
            "The more I learn, the more I realize how much I have yet to learn." — Albert Einstein
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CurrentlyLearning
