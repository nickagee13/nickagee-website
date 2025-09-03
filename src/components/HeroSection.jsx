import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const handleBookClick = () => {
    window.open('https://engineears.com/nickagee13', '_blank')
  }

  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img 
          src="/src/assets/GMR Mixing Full.jpeg" 
          alt="Nick Agee at the mixing console in recording studio" 
          className="studio-image"
        />
        <div className="hero-buttons">
          <Link to="/about" className="btn-hero btn-about">
            ABOUT ME
          </Link>
          <button onClick={handleBookClick} className="btn-hero btn-book">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection