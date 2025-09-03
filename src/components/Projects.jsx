import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with React and Node.js featuring user authentication and real-time updates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Project Two', 
      description: 'An e-commerce platform with payment integration, inventory management, and responsive design.',
      technologies: ['JavaScript', 'Express', 'PostgreSQL', 'Stripe API'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A data visualization dashboard that processes and displays complex datasets in an intuitive interface.',
      technologies: ['Python', 'React', 'D3.js', 'Flask'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoUrl} className="btn-outline" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.codeUrl} className="btn-outline" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects