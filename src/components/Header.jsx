import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleMixesClick = () => {
    if (location.pathname === '/') {
      scrollToSection('music-player')
    } else {
      window.location.href = '/#music-player'
    }
  }

  const handleDiscographyClick = () => {
    window.open('https://credits.muso.ai/profile/399ac1a7-3ea7-4533-8090-ba04d15e3f38', '_blank')
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <h1 className="site-title">NICK AGEE</h1>
          <span className="site-subtitle">Studio Engineer</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
            <li><button onClick={handleDiscographyClick}>DISCOGRAPHY</button></li>
            <li><button onClick={handleMixesClick}>MIXES</button></li>
            <li><Link to="/post-production" onClick={() => setIsMenuOpen(false)}>POST-PRODUCTION</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link></li>
            <li><a href="https://engineears.com/nickagee13" target="_blank" rel="noopener noreferrer">BOOK</a></li>
          </ul>
        </nav>

        <div className="social-link">
          <a 
            href="https://www.instagram.com/nickagee13/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-btn"
          >
            <img 
              src="/src/assets/Logos/Instagram sq.png" 
              alt="Instagram" 
              className="instagram-logo"
            />
          </a>
        </div>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header