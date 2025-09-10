import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import AudioPostProduction from './pages/AudioPostProduction'
import FreelancePortalLanding from './pages/FreelancePortalLanding'
import './styles/App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/post-production" element={<AudioPostProduction />} />
            <Route path="/templates/freelance-portal" element={<FreelancePortalLanding />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App