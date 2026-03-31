import { Link } from 'react-router-dom'
import styles from './Legal.module.css'

export default function MentionsLegales() {
  return (
    <main className={styles.legal}>
      <div className={styles.wrap}>
        <nav className={styles.breadcrumb}><Link to="/">Accueil</Link> › Mentions légales</nav>
        <h1 className={styles.title}>Mentions légales</h1>
        <section className={styles.section}>
          <h2>Éditeur du site</h2>
          <p><strong>PadelProgram</strong> — ProPadelKit SAS<br/>
          Site web : padelprogram.fr<br/>
          Contact : <a href="mailto:contact@padelprogram.fr">contact@padelprogram.fr</a></p>
        </section>
        <section className={styles.section}>
          <h2>Hébergement</h2>
          <p>Ce site est hébergé par un prestataire tiers. Pour toute demande relative à l'hébergement, contactez-nous à l'adresse mentionnée ci-dessus.</p>
        </section>
        <section className={styles.section}>
          <h2>Propriété intellectuelle</h2>
          <p>L'ensemble des contenus présents sur ce site (textes, images, logos, etc.) sont la propriété exclusive de ProPadelKit SAS, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite.</p>
        </section>
        <section className={styles.section}>
          <h2>Données personnelles</h2>
          <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@padelprogram.fr">contact@padelprogram.fr</a></p>
        </section>
      </div>
    </main>
  )
}
