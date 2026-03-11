import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useCursor } from './hooks'
import Home from './pages/Home'
import { About } from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'

export default function App() {
  const { dotRef, ringRef } = useCursor()
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      {/* Custom cursor */}
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />

      <Navbar />

      <Routes>
        <Route path="/"             element={<Home />}         />
        <Route path="/about"        element={<About />}        />
        <Route path="/experience"   element={<Experience />}   />
        <Route path="/projects"     element={<Projects />}     />
        <Route path="/skills"       element={<Skills />}       />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact"      element={<Contact />}      />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

function NotFound() {
  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: 16, textAlign: 'center' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '4rem', fontWeight: 700, color: 'var(--border2)' }}>404</p>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-.03em' }}>Page not found</h1>
      <p style={{ color: 'var(--muted)', fontSize: '.88rem' }}>The page you're looking for doesn't exist.</p>
      <a href="/" className="btn btn-primary" style={{ marginTop: 8 }}>← Back Home</a>
    </div>
  )
}
