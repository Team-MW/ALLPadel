import { Link } from 'react-router-dom'
import styles from './Legal.module.css'

export function CGV() {
  return (
    <main className={styles.legal}>
      <div className={styles.wrap}>
        <nav className={styles.breadcrumb}><Link to="/">Accueil</Link> › CGV</nav>
        <h1 className={styles.title}>Conditions Générales de Vente</h1>
        <section className={styles.section}>
          <h2>Objet</h2>
          <p>Les présentes Conditions Générales de Vente régissent les relations contractuelles entre ProPadelKit SAS (PadelProgram) et ses clients dans le cadre des prestations d'accompagnement à la création de clubs de padel.</p>
        </section>
        <section className={styles.section}>
          <h2>Prestations</h2>
          <p>PadelProgram propose des services de conseil et d'accompagnement incluant : études de marché, business plans, structuration de dossiers de financement, suivi stratégique. Le périmètre exact de chaque mission est défini contractuellement.</p>
        </section>
        <section className={styles.section}>
          <h2>Tarifs</h2>
          <p>Les tarifs sont communiqués lors de l'appel de sélection, une fois le périmètre de la mission défini. Ils font l'objet d'un devis signé avant tout démarrage de mission.</p>
        </section>
        <section className={styles.section}>
          <h2>Responsabilité</h2>
          <p>PadelProgram s'engage à fournir des prestations conformes aux règles de l'art. En aucun cas PadelProgram ne garantit l'obtention d'un financement ou le succès commercial du projet. La responsabilité de PadelProgram est limitée au montant des honoraires versés.</p>
        </section>
        <section className={styles.section}>
          <h2>Droit applicable</h2>
          <p>Les présentes CGV sont soumises au droit français. Tout litige relève de la compétence des tribunaux français.</p>
        </section>
      </div>
    </main>
  )
}

export function CGU() {
  return (
    <main className={styles.legal}>
      <div className={styles.wrap}>
        <nav className={styles.breadcrumb}><Link to="/">Accueil</Link> › CGU</nav>
        <h1 className={styles.title}>Conditions Générales d'Utilisation</h1>
        <section className={styles.section}>
          <h2>Objet</h2>
          <p>Les présentes CGU définissent les conditions d'utilisation du site padelprogram.fr édité par ProPadelKit SAS.</p>
        </section>
        <section className={styles.section}>
          <h2>Accès au site</h2>
          <p>L'accès au site est libre et gratuit. PadelProgram se réserve le droit de modifier, suspendre ou interrompre l'accès au site à tout moment, sans préavis.</p>
        </section>
        <section className={styles.section}>
          <h2>Utilisation du contenu</h2>
          <p>Tout le contenu publié sur ce site (textes, guides, analyses) est protégé par le droit d'auteur. Toute reproduction, même partielle, sans autorisation écrite est interdite.</p>
        </section>
        <section className={styles.section}>
          <h2>Liens hypertextes</h2>
          <p>Le site peut contenir des liens vers des sites tiers. PadelProgram n'est pas responsable du contenu de ces sites et ne garantit pas leur disponibilité.</p>
        </section>
        <section className={styles.section}>
          <h2>Droit applicable</h2>
          <p>Les présentes CGU sont soumises au droit français.</p>
        </section>
      </div>
    </main>
  )
}
