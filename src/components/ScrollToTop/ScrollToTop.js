import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={`scroll-top ${isVisible ? 'scroll-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label='Scroll to top'
      type='button'
    >
      <ArrowUpwardIcon className='scroll-top__icon' />
      <div className='scroll-top__glow' />
    </button>
  )
}

export default ScrollToTop
