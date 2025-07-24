import { useContext, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

// Force deployment refresh - latest fixes applied
const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  useEffect(() => {
    // Initialize AOS with custom settings for professional animations
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120,
      delay: 100,
      // Disable animations on mobile for better performance
      disable: window.innerWidth < 768 ? 'mobile' : false,
    })

    // Refresh AOS on window resize
    const handleResize = () => {
      AOS.refresh()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main className="main-content">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
