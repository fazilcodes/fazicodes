import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Navbar from './components/Navbar'
import Skills from './pages/skills/Skills'
import Portfolio from './pages/portfolio/Portfolio'
import Resume from './pages/resume/Resume'
import Contact from './pages/contact/Contact'

function App() {

  const location = useLocation()

  return (
    <>
    <main className='main'>
      {/* <AnimatePresence mode='wait'>
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
      </AnimatePresence> */}

      <Home />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
    </main>
    </>
  )
}

export default App
