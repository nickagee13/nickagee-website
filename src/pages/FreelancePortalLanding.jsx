import React, { useState } from 'react'
import '../styles/FreelancePortalLanding.css'

// Import template images
import carousel1 from '../assets/notion/freelance-portal-dashboard/carousel/Carousel1.jpg'
import carousel2 from '../assets/notion/freelance-portal-dashboard/carousel/Carousel2.jpg'
import carousel3 from '../assets/notion/freelance-portal-dashboard/carousel/Carousel3.jpg'
import carousel4 from '../assets/notion/freelance-portal-dashboard/carousel/Carousel4.jpg'
import carousel5 from '../assets/notion/freelance-portal-dashboard/carousel/Carousel5.jpg'
import carousel6 from '../assets/notion/freelance-portal-dashboard/carousel/Carousel6.jpg'

const FreelancePortalLanding = () => {
  const [lightboxImage, setLightboxImage] = useState(null)
  
  const templateImages = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6]
  
  const videoData = [
    {
      id: "daWJRkCoVfs",
      title: "Full Client Journey"
    },
    {
      id: "lmo-2VAmNZo", 
      title: "Main Dashboard Overview"
    },
    {
      id: "mmEzCkL1tWU",
      title: "Customizing Sections"
    }
  ]

  const openLightbox = (image) => {
    setLightboxImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    document.body.style.overflow = 'unset'
  }

  const handleCTAClick = () => {
    window.open('https://www.notion.so/templates/freelance-portal-dashboard', '_blank')
  }

  return (
    <div className="freelance-landing">
      {/* Hero Section - Clean & Simple */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-left">
              <div className="hero-image">
                <img src={carousel1} alt="Freelance Portal Dashboard" onClick={() => openLightbox(carousel1)} />
              </div>
              <div className="hero-purchase">
                <div className="price-rating">
                  <div className="price">$8</div>
                  <div className="rating">
                    <span className="stars">⭐⭐⭐⭐⭐</span>
                    <span className="rating-text">5.0 (500+ freelancers)</span>
                  </div>
                </div>
                <div className="coupon-cta-row">
                  <div className="coupon-badge-small">
                    <span>🎯 20% off with code: <strong>FREELANCE20</strong></span>
                  </div>
                  <button className="cta-primary" onClick={handleCTAClick}>
                    Get Template
                  </button>
                </div>
                <div className="guarantee-text">
                  <span>Instant download • 14-day money back guarantee</span>
                </div>
              </div>
            </div>
            <div className="hero-content">
              <h1>Freelance Portal Dashboard</h1>
              <div className="description-content">
                <h2>The complete workspace for freelance success</h2>
                <p>
                  <strong>Freelance Portal Dashboard</strong> is an essential workspace for any independent professional, 
                  providing a centralized hub to manage every aspect of their freelance business. This comprehensive 
                  dashboard includes <strong>client relationship management, project tracking, task organization, and inventory oversight</strong>—all 
                  designed to handle multiple clients across diverse project scopes seamlessly.
                </p>
                <p>
                  This tool is built with <strong>customization at its core</strong>, allowing freelancers to tailor the system to match 
                  their unique workflow and business needs. Whether you're a creative professional juggling design projects 
                  or a consultant managing complex client deliverables, this dashboard adapts to your specific requirements.
                </p>
                <p>
                  The intuitive interface ensures freelancers can quickly access critical information, maintain client 
                  relationships, monitor project progress, and stay organized without getting bogged down in administrative 
                  details. With the Freelance Portal Dashboard, independent professionals can <strong>confidently scale their business 
                  and manage countless clients and projects</strong> while maintaining the personal touch that sets them apart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="video-section">
        <div className="container">
          <h2>See the dashboard in action</h2>
          <div className="videos-grid">
            {videoData.map((video, index) => (
              <div key={index} className="video-item">
                <h3>{video.title}</h3>
                <div className="video-embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Images */}
      <section className="gallery-section">
        <div className="container">
          <h2>Template screenshots</h2>
          <div className="template-grid">
            {templateImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Template view ${index + 1}`}
                onClick={() => openLightbox(image)}
                className="template-image"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="creator-section">
        <div className="container">
          <h2>About the creator</h2>
          <div className="creator-content">
            <p>
              Created by <strong>Nick Agee</strong>, a freelance mix engineer who understands the challenges 
              of managing multiple clients and projects efficiently. This template was born from real-world 
              experience and refined through years of freelance business management.
            </p>
            <div className="creator-links">
              <a href="https://nickagee13.github.io/nickagee-website/" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
              <a href="https://www.instagram.com/nickagee13/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to organize your freelance business?</h2>
          <div className="coupon-cta-row">
            <div className="coupon-badge">
              <span>🎯 20% off with code: <strong>FREELANCE20</strong></span>
            </div>
            <button className="cta-primary large" onClick={handleCTAClick}>
              Get Template - $8
            </button>
          </div>
          <p>Instant download • 14-day money back guarantee</p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={lightboxImage} alt="Template preview" />
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FreelancePortalLanding