import React from 'react'

const AudioPostProduction = () => {
  return (
    <div className="post-production-page">
      <div className="container">
        {/* Header Section */}
        <div className="page-header">
          <div className="header-background">
            <div className="header-text">
              <h1>Audio Post-Production</h1>
              <p>Professional audio services for film, television, podcasts, and digital media.</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="content-sections">
          
          {/* Section 1: Two YouTube videos with text on right */}
          <div className="content-row">
            <div className="video-group">
              <div className="video-embed">
                <div className="video-placeholder">
                  {/* Replace with actual YouTube embed */}
                  <p>YouTube Video 1</p>
                  {/* 
                  <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                    frameBorder="0" 
                    allowFullScreen
                  ></iframe>
                  */}
                </div>
              </div>
              <div className="video-embed">
                <div className="video-placeholder">
                  {/* Replace with actual YouTube embed */}
                  <p>YouTube Video 2</p>
                </div>
              </div>
            </div>
            <div className="text-content">
              <h3>Professional Audio Mixing</h3>
              <p>
                Our audio mixing services ensure your content sounds professional and polished. 
                From dialogue cleanup to music balance, we handle every aspect of your audio 
                post-production needs.
              </p>
              <p>
                Using industry-standard tools and techniques, we deliver broadcast-quality 
                results that meet the highest professional standards.
              </p>
            </div>
          </div>

          {/* Section 2: Video on right with text on left */}
          <div className="content-row reverse">
            <div className="text-content">
              <h3>Sound Design & Effects</h3>
              <p>
                Custom sound design and audio effects bring your projects to life. Whether 
                you need atmospheric sounds, Foley work, or creative audio elements, we 
                create the perfect sonic landscape for your content.
              </p>
              <p>
                Our sound design process focuses on enhancing the emotional impact of your 
                story while maintaining clarity and professionalism.
              </p>
            </div>
            <div className="video-single">
              <div className="video-embed">
                <div className="video-placeholder">
                  {/* Replace with actual YouTube embed */}
                  <p>YouTube Video 3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Video with text on right */}
          <div className="content-row">
            <div className="video-single">
              <div className="video-embed">
                <div className="video-placeholder">
                  {/* Replace with actual YouTube embed */}
                  <p>YouTube Video 4</p>
                </div>
              </div>
            </div>
            <div className="text-content">
              <h3>Dialogue Enhancement</h3>
              <p>
                Clear, crisp dialogue is essential for any audio project. Our dialogue 
                enhancement services include noise reduction, EQ optimization, and 
                compression to ensure every word is heard clearly.
              </p>
              <p>
                We specialize in salvaging difficult recordings and making them 
                broadcast-ready through advanced restoration techniques.
              </p>
            </div>
          </div>

          {/* Section 4: Videos on right with text on left */}
          <div className="content-row reverse">
            <div className="text-content">
              <h3>Final Mix & Mastering</h3>
              <p>
                The final mix brings all elements together in perfect balance. Our mastering 
                process ensures your audio translates well across all playback systems, 
                from mobile devices to professional speakers.
              </p>
              <p>
                We deliver your final audio in any format you need, optimized for your 
                specific distribution platform and technical requirements.
              </p>
            </div>
            <div className="video-group">
              <div className="video-embed">
                <div className="video-placeholder">
                  {/* Replace with actual YouTube embed */}
                  <p>YouTube Video 5</p>
                </div>
              </div>
              <div className="video-embed">
                <div className="video-placeholder">
                  {/* Replace with actual YouTube embed */}
                  <p>YouTube Video 6</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AudioPostProduction