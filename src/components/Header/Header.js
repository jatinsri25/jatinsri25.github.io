import { useState, useEffect } from 'react'
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className='header__container'>
        <div className='header__brand'>
          {homepage ? (
            <a href={homepage} className='header__logo link'>
              <span className='header__logo-text'>{title}</span>
              <div className='header__logo-glow' />
            </a>
          ) : (
            <span className='header__logo-text'>{title}</span>
          )}
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
