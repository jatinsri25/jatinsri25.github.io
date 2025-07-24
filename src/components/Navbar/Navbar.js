import { useContext, useState, useEffect } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const toggleNavList = () => setShowNavList(!showNavList)

  // Close mobile menu when clicking on a link
  const handleNavClick = (sectionId) => {
    setShowNavList(false)
    // Smooth scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'about', label: 'About', show: true },
    { id: 'projects', label: 'Projects', show: projects.length > 0 },
    { id: 'skills', label: 'Skills', show: skills.length > 0 },
    { id: 'contact', label: 'Contact', show: contact.email }
  ]

  return (
    <nav className='navbar'>
      <ul
        className={`navbar__list ${showNavList ? 'navbar__list--open' : ''}`}
      >
        {navItems.map(({ id, label, show }) =>
          show ? (
            <li key={id} className='navbar__item'>
              <button
                type='button'
                onClick={() => handleNavClick(id)}
                className={`navbar__link ${activeSection === id ? 'navbar__link--active' : ''}`}
              >
                {label}
                <span className='navbar__link-indicator' />
              </button>
            </li>
          ) : null
        )}
      </ul>

      <div className='navbar__actions'>
        <button
          type='button'
          onClick={toggleTheme}
          className='navbar__theme-toggle'
          aria-label={`Switch to ${themeName === 'dark' ? 'light' : 'dark'} theme`}
        >
          <div className='theme-toggle__icon'>
            {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
          </div>
          <span className='theme-toggle__bg' />
        </button>

        <button
          type='button'
          onClick={toggleNavList}
          className={`navbar__hamburger ${showNavList ? 'navbar__hamburger--open' : ''}`}
          aria-label='toggle navigation menu'
        >
          <span className="sr-only">Menu</span>
          <span className='hamburger__line' aria-hidden='true' />
          <span className='hamburger__line' aria-hidden='true' />
          <span className='hamburger__line' aria-hidden='true' />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {showNavList && (
        <div
          className='navbar__overlay'
          onClick={() => setShowNavList(false)}
          role='button'
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setShowNavList(false)}
        />
      )}
    </nav>
  )
}

export default Navbar
