import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaArrowUp } from 'react-icons/fa'

const socialLinks = [
  {
    icon: <FaGithub size={18} />,
    href: '#',
    label: 'GitHub',
    color: '#ffffff',
  },
  {
    icon: <FaLinkedin size={18} />,
    href: 'https://www.linkedin.com/in/alihamza-khan/',
    label: 'LinkedIn',
    color: '#0a66c2',
  },
  {
    icon: <FaEnvelope size={18} />,
    href: 'mailto:alihamza555khan@gmail.com',
    label: 'Email',
    color: '#00f0ff',
  },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Intelligence', href: '#ai-intelligence' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleNavClick = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #030308 100%)' }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, #00f0ff40, #8b5cf640, #ec489940, transparent)',
        }}
      />

      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-cyan-500/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Branding */}
          <div>
            <motion.h2
              className="text-2xl font-black gradient-text mb-3"
              whileHover={{ scale: 1.03 }}
            >
              Ali Hamza
            </motion.h2>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Software Engineering Student at UMT Lahore. Building the future with code, one
              project at a time.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-white/50 hover:text-white transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                  whileHover={{ scale: 1.1, borderColor: s.color, color: s.color }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/40 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-2 group focus:outline-none"
                  >
                    <span
                      className="w-4 h-px bg-white/20 group-hover:bg-cyan-400 group-hover:w-5 transition-all duration-200"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack & current status */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">
              Current Stack
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'Python'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs border border-white/10 text-white/40 hover:border-cyan-400/30 hover:text-cyan-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
              </div>
              <span className="text-green-400 text-xs font-semibold">
                Open to Internship / Work
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <FaCode size={10} className="text-cyan-400" />
            Built with
            <FaHeart size={10} className="text-pink-400" />
            using React, Tailwind CSS & Framer Motion
          </p>

          <p className="text-white/25 text-xs text-center">
            © {new Date().getFullYear()} Ali Hamza. All rights reserved.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white/40 hover:text-cyan-400 transition-colors focus:outline-none"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            aria-label="Back to top"
          >
            <FaArrowUp size={10} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
