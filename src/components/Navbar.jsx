import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'AI Intelligence', href: '#ai-intelligence' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveLink(`#${sections[i]}`)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navBg = darkMode
    ? scrolled ? 'rgba(5,5,16,0.95)' : 'rgba(5,5,16,0.5)'
    : scrolled ? 'rgba(240,244,255,0.96)' : 'rgba(240,244,255,0.7)'

  const borderColor = darkMode
    ? scrolled ? '1px solid rgba(0,240,255,0.12)' : 'none'
    : scrolled ? '1px solid rgba(99,102,241,0.15)' : 'none'

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: navBg,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: borderColor,
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.button
          onClick={() => handleNavClick('#home')}
          className="text-xl font-black tracking-wider gradient-text focus:outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Ali Hamza
        </motion.button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none ${
                activeLink === link.href
                  ? 'text-cyan-500'
                  : darkMode
                  ? 'text-white/60 hover:text-white'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {link.label}
              {activeLink === link.href && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg,#00f0ff,#8b5cf6)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-14 h-7 rounded-full focus:outline-none overflow-hidden flex-shrink-0"
            style={{
              background: darkMode
                ? 'linear-gradient(135deg, #1e1b4b, #312e81)'
                : 'linear-gradient(135deg, #bfdbfe, #ddd6fe)',
              border: darkMode ? '1px solid rgba(139,92,246,0.4)' : '1px solid rgba(99,102,241,0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {/* Track icons */}
            <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-[10px]">🌙</span>
            <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[10px]">☀️</span>
            {/* Thumb */}
            <motion.div
              className="absolute top-0.5 w-6 h-6 rounded-full shadow-lg flex items-center justify-center"
              style={{
                background: darkMode
                  ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
                  : 'linear-gradient(135deg, #f59e0b, #d97706)',
              }}
              animate={{ x: darkMode ? 1 : 29 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              {darkMode
                ? <FaMoon size={10} className="text-white" />
                : <FaSun size={10} className="text-white" />
              }
            </motion.div>
          </motion.button>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors focus:outline-none ${
              darkMode ? 'text-white/70 hover:text-cyan-400' : 'text-slate-600 hover:text-indigo-600'
            }`}
            style={{
              background: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(99,102,241,0.08)',
              border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(99,102,241,0.2)',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden"
            style={{
              background: darkMode ? 'rgba(5,5,16,0.98)' : 'rgba(240,244,255,0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: darkMode
                ? '1px solid rgba(0,240,255,0.1)'
                : '1px solid rgba(99,102,241,0.15)',
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all focus:outline-none ${
                    activeLink === link.href
                      ? 'text-cyan-500 bg-cyan-400/10'
                      : darkMode
                      ? 'text-white/60 hover:text-white hover:bg-white/5'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-900/5'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
