import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('Loading...')

  const phases = [
    'Initializing Portfolio...',
    'Loading Components...',
    'Applying Styles...',
    'Almost Ready...',
    'Welcome!',
  ]

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += 2
      setProgress(Math.min(current, 100))
      const phaseIndex = Math.floor((current / 100) * (phases.length - 1))
      setPhase(phases[Math.min(phaseIndex, phases.length - 1)])
      if (current >= 100) clearInterval(interval)
    }, 45)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050510]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />

        {/* Spinning outer ring */}
        <div className="relative flex items-center justify-center mb-10">
          <motion.div
            className="absolute w-40 h-40 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: '#00f0ff',
              borderRightColor: '#8b5cf6',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute w-32 h-32 rounded-full border-2 border-transparent"
            style={{
              borderBottomColor: '#ec4899',
              borderLeftColor: '#00f0ff',
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute w-24 h-24 rounded-full border border-transparent"
            style={{ borderTopColor: '#8b5cf6' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          {/* Center initials */}
          <motion.div
            className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center glass"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <span className="gradient-text text-3xl font-black tracking-wider">AH</span>
          </motion.div>

          {/* Orbiting dots */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400"
              style={{
                top: '50%',
                left: '50%',
                marginTop: '-4px',
                marginLeft: '-4px',
              }}
              animate={{
                x: Math.cos((i * Math.PI) / 2) * 65,
                y: Math.sin((i * Math.PI) / 2) * 65,
                rotate: 360,
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Name */}
        <motion.h1
          className="text-4xl font-black mb-2 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="gradient-text">Ali Hamza</span>
        </motion.h1>

        <motion.p
          className="text-cyan-400/70 text-sm font-medium tracking-[0.3em] uppercase mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Software Engineer
        </motion.p>

        {/* Phase text */}
        <motion.p
          key={phase}
          className="text-white/50 text-sm mb-6 font-mono"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {phase}
        </motion.p>

        {/* Progress bar */}
        <div className="w-72 md:w-96 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #ec4899)',
            }}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        <motion.p
          className="text-white/30 text-xs mt-3 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {progress}%
        </motion.p>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen
