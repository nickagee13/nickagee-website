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
            <h1 style={{ fontFamily: 'Suez One, serif' }}>About</h1>
            <div className="about-description">
              <p>
                Nick Agee is an Avid and Dolby certified audio engineer based in Los Angeles, CA. 
                With over 14 years of experience working alongside Grammy Award-winning artists 
                and producers, he has a deep understanding of music production workflows from 
                recording to distribution and release.
              </p>
              
              <p>
                Believing in the power of music as a deeply emotional and collaborative process, 
                Nick ensures that every final mix captures the essence of the artist's performance. 
                By enhancing clarity, depth, and energy, each mix is crafted to resonate with 
                listeners, evoking the same emotions felt during recording and writing.
              </p>
              
              <p>
                Specializing in indie pop and bedroom pop, Nick draws inspiration from r&b, jazz, 
                and funk, blending these influences in fresh and modern ways. With a commitment 
                to understanding each artist's creative vision, he works to translate inspiration 
                into sonically rich and immersive mixes.
              </p>
            </div>
            
            <div className="certifications">
              <div className="certification-logos">
                <div className="cert-logo">
                  <img 
                    src="/src/assets/Logos/avidcertified.png" 
                    alt="Avid Certified Professional"
                  />
                </div>
                <div className="cert-logo">
                  <img 
                    src="/src/assets/Logos/applecert.jpg" 
                    alt="Apple Certified Professional"
                  />
                </div>
                <div className="cert-logo">
                  <img 
                    src="/src/assets/Logos/dolbyatmos.png" 
                    alt="Dolby Atmos Certified"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About