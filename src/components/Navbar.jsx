import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const TYPEFORM_URL = 'https://form.typeform.com/to/OktIQ7XG'

export default function Navbar() {
  const [stuck, setStuck] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/#constat', label: 'Constat' },
    { to: '/#methode', label: 'Méthode' },
    { to: '/#services', label: 'Accompagnement' },
    { to: '/guide', label: 'Guide' },
    { to: '/#faq', label: 'FAQ' },
  ]

  const handleAnchorClick = (to) => {
    setMenuOpen(false)
    if (to.startsWith('/#')) {
      if (location.pathname === '/') {
        const id = to.slice(2)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <>
      <nav className={`${styles.nav} ${stuck ? styles.stuck : ''}`} id="nav" aria-label="Navigation principale">
        <div className={styles.navIn}>
          <Link to="/" className={styles.logo} aria-label="PadelProgram — Accueil">
            <img src="/2 logo.png" alt="PadelProgram" loading="eager" />
          </Link>

          <div className={styles.navMid}>
            {navLinks.map(({ to, label }) => (
              to.startsWith('/#') ? (
                <Link key={to} to={to} onClick={() => handleAnchorClick(to)}>{label}</Link>
              ) : (
                <NavLink key={to} to={to} className={({ isActive }) => isActive ? styles.active : ''}>{label}</NavLink>
              )
            ))}
          </div>

          <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btnNav} ${styles.desk}`}>
            Réserver un appel
          </a>

          <button
            className={`${styles.ham} ${menuOpen ? styles.on : ''}`}
            id="ham"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobMenu} ${menuOpen ? styles.open : ''}`} role="dialog" aria-label="Menu mobile">
        {navLinks.map(({ to, label }) => (
          to.startsWith('/#') ? (
            <Link key={to} to={to} onClick={() => handleAnchorClick(to)}>{label}</Link>
          ) : (
            <Link key={to} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>
          )
        ))}
        <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnNav}>
          Réserver votre appel de sélection
        </a>
      </div>
    </>
  )
}
