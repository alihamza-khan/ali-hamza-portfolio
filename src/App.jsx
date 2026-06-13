import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CurrentlyLearning from './components/CurrentlyLearning'
import Interests from './components/Interests'
import Certifications from './components/Certifications'
import FutureGoals from './components/FutureGoals'
import AISkillIntelligence from './components/AISkillIntelligence'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import BackToTop from './components/BackToTop'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.colorScheme = 'light'
    }
  }, [darkMode])

  if (loading) return <LoadingScreen />

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div
        className="min-h-screen transition-colors duration-500"
        style={{
          background: darkMode
            ? '#050510'
            : 'linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f5f0ff 100%)',
          color: darkMode ? '#ffffff' : '#0f0f1a',
        }}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <CurrentlyLearning darkMode={darkMode} />
        <Interests darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <FutureGoals darkMode={darkMode} />
        <AISkillIntelligence darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
        <BackToTop />
      </div>
    </div>
  )
}

export default App
