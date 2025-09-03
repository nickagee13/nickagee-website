import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© {currentYear} Nick Agee | Mix Engineer</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer