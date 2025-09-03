import React from 'react'

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/src/assets/gmr studio.jpg" 
              alt="Nick Agee working in the studio" 
            />
          </div>
          
          <div className="about-text">
            <h1>About Nick Agee</h1>
            <div className="about-description">
              <p>
                With over [X] years of experience in audio engineering and music production, 
                I bring technical expertise and creative vision to every project. My passion 
                for sound design and mixing has led me to work with artists across various 
                genres, from indie rock to electronic music.
              </p>
              
              <p>
                My studio is equipped with industry-standard gear and acoustically treated 
                to ensure the highest quality recordings and mixes. I believe in collaborating 
                closely with artists to understand their vision and bring their musical ideas 
                to life.
              </p>
              
              <p>
                Whether you're looking for mixing, mastering, or full production services, 
                I'm committed to delivering professional results that exceed your expectations. 
                Every project receives my full attention to detail and creative input.
              </p>
            </div>
            
            <div className="certifications">
              <h3>Certifications & Training</h3>
              <div className="certification-logos">
                {/* Placeholder for certification logos */}
                <div className="cert-logo">
                  <img 
                    src="/src/assets/cert-logo-1.png" 
                    alt="Certification 1"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                <div className="cert-logo">
                  <img 
                    src="/src/assets/cert-logo-2.png" 
                    alt="Certification 2"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                <div className="cert-logo">
                  <img 
                    src="/src/assets/cert-logo-3.png" 
                    alt="Certification 3"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                {/* Add more certification logos as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About