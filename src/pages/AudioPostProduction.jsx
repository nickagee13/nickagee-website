import React from 'react'

const AudioPostProduction = () => {
  return (
    <div className="post-production-page">
      <div className="container">
        {/* Header Section */}
        <div className="page-header">
          <h1>AUDIO POST-PRODUCTION</h1>
          <div className="header-description">
            <p>
              Over the past decade, Nick has contributed to 500+ productions, spanning music, film, TV, branded 
              content, and podcasting. His work has been featured on Billboard, TIME, Entertainment Weekly, 
              Huffington Post, and NME.
            </p>
            <p>Below are select examples of previous work:</p>
          </div>
        </div>

        {/* Section 1: Voiceover & Score Mixing - Breakthrough For Men */}
        <div className="content-row">
          <div className="video-section">
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/7OY1zB-cINQ" 
                title="Breakthrough For Men Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/Ow_MAwSFHjk" 
                title="Breakthrough For Men Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="text-section">
            <h2>Voiceover & Score Mixing<br/>Breakthrough For Men</h2>
            <p>
              Captured and edited on-set dialogue, then mixed with underscore to 
              enhance the emotional tone of the visuals. Edited B-roll with interview 
              shots through video editing to visually reinforce the audio narrative. 
              Part of a video series I co-produced for Breakthrough for Men.
            </p>
          </div>
        </div>

        {/* Section 2: Podcast Audio Editing & Mixing - Hotchi Motchi MTG */}
        <div className="content-row">
          <div className="text-section">
            <h2>Podcast Audio Editing & Mixing<br/>Hotchi Motchi MTG</h2>
            <p>
              Collaborated with producers, hosts, and the video editor to elevate 
              podcast audio recorded in a sub-optimal environment to a 
              professional standard through detailed editing and mixing. This 
              example from episode #3 showcases the dialogue before and after 
              processing.
            </p>
          </div>
          <div className="video-section">
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/cOPI4Kjwj-k" 
                title="Hotchi Motchi MTG"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Section 3: Voiceover & Score Mixing - National Organization for Medical Intuition */}
        <div className="content-row">
          <div className="video-section">
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/cfHayN_Cm4A" 
                title="National Organization for Medical Intuition"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="text-section">
            <h2>Voiceover & Score Mixing<br/>National Organization for Medical Intuition</h2>
            <p>
              Edited and mixed multiple voiceover recordings with underscore music 
              to create a polished final audio mix that complements the professional 
              visuals of the video. I was also tasked with video editing to seamlessly 
              integrating the company's branding with stock imagery to convey 
              NOMI's core values.
            </p>
          </div>
        </div>

        {/* Section 4: Voiceover & Score Mixing - Nurses & The Lost Year */}
        <div className="content-row">
          <div className="text-section">
            <h2>Voiceover & Score Mixing<br/>Nurses & The Lost Year</h2>
            <p>
              Captured and edited Voiceover dialogue, then mixed with 
              underscore to enhance the emotional tone of the visuals. Edited 
              stock footage through video editing to visually reinforce the audio 
              narrative. Part of a video series I produced for Director Donn 
              Wilkerson.
            </p>
          </div>
          <div className="video-section">
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/yOp6RQthNWg" 
                title="Nurses & The Lost Year"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-embed">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/SD4ytvMG2mg" 
                title="Nurses & The Lost Year - Part 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioPostProduction