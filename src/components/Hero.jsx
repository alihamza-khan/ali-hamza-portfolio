import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaDownload, FaEnvelope, FaChevronDown } from 'react-icons/fa'

const TYPING_WORDS = [
  'Software Engineering Student',
  'MERN Stack Developer',
  'AI & ML Enthusiast',
  'Future Full Stack Engineer',
  'Problem Solver',
]

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 5,
  color: i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#8b5cf6' : '#ec4899',
}))

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex]

    const tick = () => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
          timeoutRef.current = setTimeout(tick, 80)
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentWord.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
          timeoutRef.current = setTimeout(tick, 45)
        } else {
          setIsDeleting(false)
          setWordIndex((w) => (w + 1) % TYPING_WORDS.length)
          timeoutRef.current = setTimeout(tick, 300)
        }
      }
    }

    timeoutRef.current = setTimeout(tick, 100)
    return () => clearTimeout(timeoutRef.current)
  }, [charIndex, isDeleting, wordIndex])

  const handleScrollDown = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050510]"
    >
      {/* Particle background */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid lines subtle background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-cyan-400/30 text-cyan-400 bg-cyan-400/10 mb-6">
                👋 Hello World!
              </span>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-white/70 font-medium mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="gradient-text">Ali Hamza</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              className="h-10 flex items-center justify-center lg:justify-start mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-lg md:text-2xl font-semibold text-white/80">
                {displayText}
                <span
                  className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 align-middle"
                  style={{ animation: 'blink 1s infinite' }}
                />
              </span>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-8 text-white/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <FaMapMarkerAlt className="text-cyan-400" size={14} />
              <span className="text-sm font-medium">Lahore, Pakistan</span>
            </motion.div>

            {/* Short bio */}
            <motion.p
              className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              Passionate software engineering student at UMT Lahore, building modern web applications
              with the MERN stack and exploring the frontiers of AI & Machine Learning.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <motion.a
                href="/Ali-Hamza-Resume.pdf"
                download="Ali-Hamza-Resume.pdf"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white focus:outline-none"
                style={{ background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,240,255,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                <FaDownload size={14} />
                Download Resume
              </motion.a>
              <motion.button
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-colors focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaEnvelope size={14} />
                Let's Connect
              </motion.button>
            </motion.div>
          </div>

          {/* Right – Avatar */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 120 }}
          >
            {/* Floating container — badges live here, outside the clipped circle */}
            <motion.div
              className="relative flex items-center justify-center"
              style={{ width: 300, height: 300 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Outer deco rings */}
              <motion.div
                className="absolute rounded-full border border-cyan-400/20"
                style={{ width: 290, height: 290 }}
                animate={{ rotate: -360, scale: [1, 1.03, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute rounded-full border border-purple-400/10"
                style={{ width: 320, height: 320 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />

              {/* Spinning gradient border ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 256,
                  height: 256,
                  padding: 3,
                  background: 'conic-gradient(from 0deg, #00f0ff, #8b5cf6, #ec4899, #00f0ff)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              {/* Photo circle — centred, no overflow badges inside */}
              <div
                className="relative rounded-full overflow-hidden z-10"
                style={{
                  width: 250,
                  height: 250,
                  boxShadow: '0 0 40px rgba(0,240,255,0.3), 0 0 80px rgba(139,92,246,0.15)',
                  border: '3px solid transparent',
                  background: '#050510',
                }}
              >
                <img
                  src="/front.jpg"
                  alt="Ali Hamza"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
              </div>

              {/* Tech badges — absolutely positioned OUTSIDE the clipped circle */}
              {[
                { label: 'React', color: '#61dafb', top: '8%',  left: '82%' },
                { label: 'Node',  color: '#68a063', top: '82%', left: '82%' },
                { label: 'AI',    color: '#ec4899', top: '82%', left: '2%'  },
                { label: 'DB',    color: '#8b5cf6', top: '8%',  left: '2%'  },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  className="absolute text-xs font-bold px-2.5 py-1 rounded-full z-20 pointer-events-none"
                  style={{
                    top: badge.top,
                    left: badge.left,
                    background: `${badge.color}20`,
                    border: `1px solid ${badge.color}60`,
                    color: badge.color,
                    backdropFilter: 'blur(6px)',
                    whiteSpace: 'nowrap',
                  }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 1.5 }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={handleScrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaChevronDown className="text-cyan-400/60" size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
