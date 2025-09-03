import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import AudioPostProduction from './pages/AudioPostProduction'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/post-production" element={<AudioPostProduction />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App