import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerIn}>
        <div className={styles.footerL}>
          <Link to="/" className={styles.footerLogo} aria-label="PadelProgram">
            <img src="/2 logo.png" alt="PadelProgram" loading="lazy" />
          </Link>
          <p>PadelProgram · Structuration de projets de clubs de padel.</p>
          <p>© 2026 ProPadelKit SAS · Tous droits réservés.</p>
        </div>
        <div className={styles.footerR}>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/cgv">CGV</Link>
          <Link to="/cgu">CGU</Link>
          <Link to="/guide">Guide padel</Link>
          <a href="mailto:contact@padelprogram.fr">Contact</a>
        </div>
      </div>
    </footer>
  )
}
