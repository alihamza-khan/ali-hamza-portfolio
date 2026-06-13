import { motion } from 'framer-motion'
import { FaCertificate, FaAward, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'

const skillsCovered = [
  { name: 'MongoDB', color: '#4db33d' },
  { name: 'Express.js', color: '#ffffff' },
  { name: 'React.js', color: '#61dafb' },
  { name: 'Node.js', color: '#68a063' },
  { name: 'REST APIs', color: '#00f0ff' },
  { name: 'JWT Auth', color: '#8b5cf6' },
  { name: 'Full Stack Dev', color: '#ec4899' },
]

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #080818 50%, #050510 100%)' }}
    >
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-yellow-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3 block">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="flex justify-center">
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #ec4899)' }}
            />
          </div>
        </motion.div>

        {/* Certificate card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Outer glow */}
          <div
            className="absolute -inset-1 rounded-3xl opacity-40 blur-lg"
            style={{ background: 'linear-gradient(135deg, #f59e0b, #8b5cf6, #00f0ff)' }}
          />

          <div
            className="relative glass-dark rounded-2xl p-8 md:p-10 border overflow-hidden"
            style={{ borderColor: 'rgba(245,158,11,0.3)' }}
          >
            {/* Gold corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10"
              style={{
                background: 'radial-gradient(circle at top right, #f59e0b, transparent)',
              }}
            />
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10"
              style={{
                background: 'radial-gradient(circle at bottom left, #8b5cf6, transparent)',
              }}
            />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              {/* Badge */}
              <motion.div
                className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
                style={{
                  background: 'linear-gradient(135deg, #f59e0b20, #8b5cf620)',
                  border: '2px solid rgba(245,158,11,0.4)',
                }}
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <FaCertificate style={{ color: '#f59e0b' }} />
              </motion.div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: 'rgba(245,158,11,0.15)',
                      color: '#f59e0b',
                      border: '1px solid rgba(245,158,11,0.3)',
                    }}
                  >
                    ✅ VERIFIED
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/50 border border-white/10">
                    Professional Certificate
                  </span>
                </div>

                <h3 className="text-white font-black text-2xl md:text-3xl mb-2">
                  MERN Stack Web Development
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-white/50">
                  <div className="flex items-center gap-1.5">
                    <FaAward size={12} className="text-yellow-400" />
                    <span>NexSkill Institute</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt size={12} className="text-cyan-400" />
                    <span>2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              A comprehensive professional certification covering the complete MERN stack (MongoDB,
              Express.js, React.js, Node.js) ecosystem. This program included hands-on projects,
              real-world application development, REST API design, authentication systems, and
              deployment to cloud platforms.
            </p>

            {/* Skills covered */}
            <div className="mb-8">
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">
                Skills Covered
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillsCovered.map((s) => (
                  <span
                    key={s.name}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold"
                    style={{
                      background: `${s.color}15`,
                      color: s.color,
                      border: `1px solid ${s.color}30`,
                    }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-white/5 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Credential Active</span>
              </div>
              <motion.a
                href="#"
                className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none"
                whileHover={{ x: 3 }}
                onClick={(e) => e.preventDefault()}
              >
                View Credential
                <FaExternalLinkAlt size={12} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* More certs note */}
        <motion.p
          className="text-center text-white/25 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          🎯 More certifications in progress — AWS, Python for ML, and Cybersecurity
        </motion.p>
      </div>
    </section>
  )
}

export default Certifications
