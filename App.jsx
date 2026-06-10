import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Characters from './components/Characters'
import Trailer from './components/Trailer'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Intro from './components/Intro'
import './App.css'

function App() {
  const [introDone, setIntroDone] = useState(false)
  const handleIntroDone = useCallback(() => setIntroDone(true), [])

  return (
    <div className="app">
      {!introDone && <Intro onDone={handleIntroDone} />}
      <Navbar />
      <Hero />
      <Characters />
      <Features />
      <Trailer />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
