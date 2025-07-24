import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    // 1. Check localStorage
    const savedTheme = localStorage.getItem('themeName')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setThemeName(savedTheme)
      return undefined // Explicitly return undefined for ESLint
    }
    // 2. Check system preference
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    // 3. Listen for system changes
    const listener = (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
    }
    darkMediaQuery.addEventListener('change', listener)
    return () => darkMediaQuery.removeEventListener('change', listener)
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
