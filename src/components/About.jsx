import React from 'react'

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'HTML/CSS', 
    'Python', 'Git', 'Responsive Design', 'UI/UX'
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with a love for creating digital experiences 
              that make a difference. With expertise in modern web technologies, I enjoy 
              turning ideas into reality through clean, efficient code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or enjoying the outdoors.
            </p>
          </div>
          <div className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About