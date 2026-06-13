import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt,
  FaPaperPlane, FaCheckCircle, FaPhone,
} from 'react-icons/fa'

const socialLinks = [
  {
    icon: <FaEnvelope size={18} />,
    label: 'Email',
    value: 'alihamza555khan@gmail.com',
    href: 'mailto:alihamza555khan@gmail.com',
    color: '#00f0ff',
  },
  {
    icon: <FaLinkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/alihamza-khan',
    href: 'https://www.linkedin.com/in/alihamza-khan/',
    color: '#0a66c2',
  },
  {
    icon: <FaGithub size={18} />,
    label: 'GitHub',
    value: 'github.com/alihamza',
    href: '#',
    color: '#ffffff',
  },
  {
    icon: <FaMapMarkerAlt size={18} />,
    label: 'Location',
    value: 'Lahore, Pakistan',
    href: '#',
    color: '#ec4899',
  },
]

const InputField = ({ label, type = 'text', name, value, onChange, placeholder, required }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
      {label} {required && <span className="text-cyan-400">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/50 focus:bg-white/8 transition-all duration-200"
      style={{ backdropFilter: 'blur(4px)' }}
    />
  </div>
)

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate sending (replace with actual email service like EmailJS)
    await new Promise((r) => setTimeout(r, 1800))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #080818 50%, #050510 100%)' }}
    >
      {/* BG blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

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
            Let's Build Together
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="flex justify-center">
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #ec4899)' }}
            />
          </div>
          <p className="text-white/40 text-sm mt-4 max-w-md mx-auto">
            Have a project in mind or an internship opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Availability card */}
            <div
              className="glass rounded-2xl p-6 border"
              style={{ borderColor: 'rgba(52,211,153,0.25)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                </div>
                <span className="text-green-400 font-bold text-sm">Available for Work</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Currently open to internship positions, freelance projects, and exciting
                collaborations in MERN, AI, or cybersecurity domains.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Internship', 'Freelance', 'Collaboration'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-semibold border border-cyan-400/25 text-cyan-400 bg-cyan-400/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6 border border-white/5 flex flex-col gap-3">
              <h3 className="text-white font-bold text-sm mb-1">Connect With Me</h3>
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl border border-white/5 hover:border-white/15 transition-all duration-200 group"
                  whileHover={{ x: 4, background: 'rgba(255,255,255,0.04)' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${link.color}15`, color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/40 text-xs font-medium">{link.label}</p>
                    <p className="text-white/80 text-sm truncate group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Response time */}
            <div className="glass rounded-2xl p-5 border border-white/5 text-center">
              <FaPhone className="mx-auto text-cyan-400 mb-2" size={18} />
              <p className="text-white/60 text-sm font-semibold">Fast Response</p>
              <p className="text-white/30 text-xs mt-1">Usually replies within 24 hours</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #00f0ff60, transparent)' }}
              />

              <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>

              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="sent"
                    className="flex flex-col items-center justify-center py-16 text-center"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ background: 'rgba(52,211,153,0.15)', border: '2px solid rgba(52,211,153,0.4)' }}
                    >
                      <FaCheckCircle className="text-green-400" size={28} />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">Message Sent!</h4>
                    <p className="text-white/40 text-sm">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <InputField
                        label="Your Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                      <InputField
                        label="Email Address"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <InputField
                      label="Subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Internship Opportunity / Project Collab"
                      required
                    />

                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                        Message <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        required
                        rows={5}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/50 transition-all duration-200 resize-none"
                        style={{ backdropFilter: 'blur(4px)' }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-sm disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                      style={{ background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)' }}
                      whileHover={status !== 'sending' ? { scale: 1.03, boxShadow: '0 0 30px rgba(0,240,255,0.35)' } : {}}
                      whileTap={status !== 'sending' ? { scale: 0.97 } : {}}
                    >
                      {status === 'sending' ? (
                        <>
                          <motion.div
                            className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane size={14} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
