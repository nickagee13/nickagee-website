import React from 'react'

const MusicPlayer = () => {
  return (
    <section id="music-player" className="music-player-section">
      <div className="container">
        <div className="music-player-container">
          <div className="player-wrapper">
            <iframe 
              data-testid="embed-iframe" 
              style={{borderRadius: '12px'}}
              src="https://open.spotify.com/embed/playlist/0SeBZbT1pjfaT1X7D10Fdx?utm_source=generator" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        <div className="book-now-container">
          <a href="https://engineears.com/nickagee13" target="_blank" rel="noopener noreferrer" className="btn-book">BOOK NOW</a>
        </div>
      </div>
    </section>
  )
}

export default MusicPlayer