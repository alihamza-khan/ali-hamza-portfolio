import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaPython, FaGithub, FaCode,
} from 'react-icons/fa'
import {
  SiMongodb, SiExpress, SiJavascript, SiHtml5,
  SiBootstrap, SiMysql, SiGit, SiTailwindcss, SiCss,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    color: '#00f0ff',
    icon: <FaCode />,
    skills: [
      { name: 'HTML5', icon: <SiHtml5 color="#e34f26" />, level: 90 },
      { name: 'CSS3', icon: <SiCss color="#1572b6" />, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" />, level: 80 },
      { name: 'React.js', icon: <FaReact color="#61dafb" />, level: 75 },
      { name: 'Bootstrap', icon: <SiBootstrap color="#7952b3" />, level: 80 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" />, level: 72 },
    ],
  },
  {
    title: 'Backend',
    color: '#8b5cf6',
    icon: <FaNodeJs />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs color="#68a063" />, level: 70 },
      { name: 'Express.js', icon: <SiExpress color="#ffffff" />, level: 70 },
      { name: 'Python', icon: <FaPython color="#3776ab" />, level: 65 },
    ],
  },
  {
    title: 'Database',
    color: '#ec4899',
    icon: <SiMongodb />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb color="#4db33d" />, level: 72 },
      { name: 'MySQL', icon: <SiMysql color="#4479a1" />, level: 65 },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: '#f59e0b',
    icon: <FaGithub />,
    skills: [
      { name: 'Git', icon: <SiGit color="#f05032" />, level: 80 },
      { name: 'GitHub', icon: <FaGithub color="#ffffff" />, level: 80 },
    ],
  },
]

const SkillBar = ({ skill, color, animate }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-white/80 text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-xs font-bold" style={{ color }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={{ width: animate ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  )
}

const CategoryCard = ({ category }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 card-hover"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ boxShadow: `0 20px 60px ${category.color}15` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ background: `${category.color}20`, color: category.color }}
        >
          {category.icon}
        </div>
        <h3 className="text-white font-bold text-lg">{category.title}</h3>
      </div>

      <div>
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} color={category.color} animate={isInView} />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-[#050510] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            What I Know
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="flex justify-center">
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg, #00f0ff, #8b5cf6, #ec4899)' }}
            />
          </div>
          <p className="text-white/40 text-sm mt-4 max-w-md mx-auto">
            A constantly growing stack built through hands-on projects and dedicated self-learning.
          </p>
        </motion.div>

        {/* Skill grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>

        {/* Overall proficiency summary */}
        <motion.div
          className="mt-12 glass rounded-2xl p-6 border border-white/5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white/40 text-sm mb-4">Overall Skill Distribution</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: 'Frontend', value: '82%', color: '#00f0ff' },
              { label: 'Backend', value: '68%', color: '#8b5cf6' },
              { label: 'Database', value: '69%', color: '#ec4899' },
              { label: 'DevOps', value: '80%', color: '#f59e0b' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-black mb-1" style={{ color: item.color }}>
                  {item.value}
                </div>
                <div className="text-white/40 text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
