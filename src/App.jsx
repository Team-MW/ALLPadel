import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Guide from './pages/Guide'
import MentionsLegales from './pages/MentionsLegales'
import { CGV, CGU } from './pages/Legal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

function NotFound() {
  return (
    <main style={{padding:'160px 28px 80px', textAlign:'center', minHeight:'80vh', background:'linear-gradient(180deg, #082428 0%, #030A0B 100%)'}}>
      <h1 style={{fontFamily:'var(--ff-display)', fontSize:'clamp(40px,8vw,80px)', color:'var(--lime)', marginBottom:'24px'}}>404</h1>
      <p style={{color:'var(--text-dim)', fontSize:'18px', marginBottom:'40px'}}>Cette page n'existe pas.</p>
      <a href="/" style={{display:'inline-flex', alignItems:'center', gap:'10px', background:'var(--lime)', color:'var(--deep)', fontWeight:600, padding:'14px 32px', borderRadius:'6px', fontFamily:'var(--ff-body)'}}>
        Retour à l'accueil
      </a>
    </main>
  )
}
