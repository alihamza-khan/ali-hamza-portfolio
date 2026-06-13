import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBook } from 'react-icons/fa'

const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Web Engineering',
  'Software Engineering Principles',
  'Operating Systems',
  'Computer Networks',
  'Artificial Intelligence',
]

const Education = () => {
  return (
    <section
      id="education"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #080818 50%, #050510 100%)' }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-purple-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3 block">
            Academic Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="flex justify-center">
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #ec4899)' }}
            />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-30 md:-translate-x-0.5" />

          <div className="relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
            {/* Timeline dot - desktop */}
            <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
              <motion.div
                className="w-5 h-5 rounded-full border-2 border-cyan-400 bg-[#050510] flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </motion.div>
            </div>

            {/* Timeline dot - mobile */}
            <div className="absolute left-6 top-8 flex md:hidden z-10">
              <motion.div
                className="w-5 h-5 rounded-full border-2 border-cyan-400 bg-[#050510] flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </motion.div>
            </div>

            {/* Empty left column on desktop */}
            <div className="hidden md:flex items-start justify-end pr-8 pt-4">
              <motion.div
                className="glass rounded-2xl px-5 py-3 border border-cyan-400/20 text-right"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-end gap-2 text-cyan-400 font-semibold">
                  <FaCalendarAlt size={12} />
                  <span className="text-sm">2023 – 2027</span>
                </div>
                <p className="text-white/40 text-xs mt-1">4 Years Program</p>
              </motion.div>
            </div>

            {/* Main education card */}
            <motion.div
              className="md:pl-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div
                className="glass rounded-2xl p-6 md:p-8 border border-white/5 hover:border-cyan-400/30 transition-all duration-300"
                style={{ boxShadow: '0 0 40px rgba(0,240,255,0.05)' }}
              >
                {/* University header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #00f0ff20, #8b5cf620)' }}
                  >
                    <FaGraduationCap className="text-cyan-400" size={26} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl leading-tight">
                      University of Management and Technology
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm mt-0.5">UMT Lahore</p>
                  </div>
                </div>

                {/* Degree & badges */}
                <div className="mb-5">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="px-3 py-1.5 rounded-lg text-sm font-bold"
                      style={{ background: 'linear-gradient(135deg, #00f0ff20, #8b5cf620)', color: '#00f0ff' }}
                    >
                      BS Software Engineering
                    </span>
                    <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-400/10 text-green-400 border border-green-400/20">
                      In Progress
                    </span>
                  </div>

                  {/* Mobile date */}
                  <div className="flex items-center gap-2 text-white/40 text-sm md:hidden mb-2">
                    <FaCalendarAlt size={11} />
                    <span>2023 – 2027</span>
                  </div>

                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <FaMapMarkerAlt size={11} />
                    <span>Lahore, Punjab, Pakistan</span>
                  </div>
                </div>

                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  Pursuing a comprehensive 4-year Bachelor's degree in Software Engineering,
                  covering core computer science fundamentals, software development methodologies,
                  and cutting-edge technologies in AI, databases, and distributed systems.
                </p>

                {/* Coursework */}
                <div>
                  <div className="flex items-center gap-2 text-white/60 text-sm font-semibold mb-3">
                    <FaBook size={12} className="text-purple-400" />
                    Relevant Coursework
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium border border-white/10 text-white/50 hover:border-purple-400/40 hover:text-purple-300 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-6 pt-5 border-t border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/40 text-xs">Degree Progress</span>
                    <span className="text-cyan-400 text-xs font-semibold">~78% Complete</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '78%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
