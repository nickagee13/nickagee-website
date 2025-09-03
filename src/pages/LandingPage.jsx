import React from 'react'
import HeroSection from '../components/HeroSection'
import AlbumGrid from '../components/AlbumGrid'
import Testimonials from '../components/Testimonials'
import MusicPlayer from '../components/MusicPlayer'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <AlbumGrid />
      <Testimonials />
      <MusicPlayer />
    </div>
  )
}

export default LandingPage