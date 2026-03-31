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
          <h2>1. Objet</h2>
          <p>Les présentes Conditions Générales d'Utilisation (CGU) définissent les modalités d'accès et d'utilisation du site internet padelprogram.fr, édité par ProPadelKit SAS.</p>
          <p>L'accès au site implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous êtes invité à ne pas utiliser le site.</p>
        </section>

        <section className={styles.section}>
          <h2>2. Accès au site</h2>
          <p>Le site padelprogram.fr est accessible gratuitement depuis tout appareil disposant d'un accès à Internet. Les frais d'accès à Internet et les équipements nécessaires à la consultation du site sont à la charge de l'utilisateur.</p>
          <p>ProPadelKit SAS met en oeuvre les moyens raisonnables pour assurer la disponibilité du site. Toutefois, l'accès peut être interrompu à tout moment, sans préavis, notamment pour des raisons de maintenance, de mise à jour ou en cas de force majeure.</p>
        </section>

        <section className={styles.section}>
          <h2>3. Services proposés</h2>
          <p>Le site padelprogram.fr a pour objet de :</p>
          <ul>
            <li>Présenter les prestations d'accompagnement proposées par PadelProgram</li>
            <li>Permettre aux porteurs de projets de prendre rendez-vous via un formulaire dédié (Typeform)</li>
            <li>Fournir des ressources informatives sur la structuration de projets de clubs de padel</li>
          </ul>
          <p>Les informations publiées sur le site sont fournies à titre indicatif et ne constituent en aucun cas un conseil juridique, financier ou comptable.</p>
        </section>

        <section className={styles.section}>
          <h2>4. Inscription et formulaire</h2>
          <p>L'accès à certaines fonctionnalités du site (prise de rendez-vous, formulaire de candidature) peut nécessiter la communication de données personnelles. L'utilisateur s'engage à fournir des informations exactes et à jour.</p>
          <p>La soumission d'un formulaire ne constitue pas un engagement contractuel de la part de ProPadelKit SAS et ne garantit pas l'accès aux prestations d'accompagnement.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Propriété intellectuelle</h2>
          <p>L'ensemble des éléments constituant le site padelprogram.fr (structure, design, textes, images, logos, vidéos, graphismes, logiciels) est la propriété exclusive de ProPadelKit SAS et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.</p>
          <p>Toute reproduction, représentation, diffusion ou redistribution, totale ou partielle, du contenu du site est strictement interdite sans autorisation écrite préalable de ProPadelKit SAS.</p>
        </section>

        <section className={styles.section}>
          <h2>6. Responsabilité de l'utilisateur</h2>
          <p>L'utilisateur s'engage à utiliser le site de manière conforme à sa destination et aux présentes CGU. Il s'interdit notamment de :</p>
          <ul>
            <li>Tenter d'accéder de manière non autorisée aux systèmes informatiques de ProPadelKit SAS</li>
            <li>Utiliser le site à des fins illicites ou contraires à l'ordre public</li>
            <li>Transmettre des contenus diffamatoires, injurieux ou portant atteinte aux droits de tiers</li>
            <li>Utiliser des dispositifs automatisés pour collecter des données sur le site</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Limitation de responsabilité</h2>
          <p>ProPadelKit SAS ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site, des interruptions temporaires, ou du contenu des sites tiers.</p>
        </section>

        <section className={styles.section}>
          <h2>8. Liens hypertextes</h2>
          <p>Le site padelprogram.fr peut contenir des liens vers des sites tiers (Typeform, réseaux sociaux, etc.). ProPadelKit SAS n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
        </section>

        <section className={styles.section}>
          <h2>9. Données personnelles et cookies</h2>
          <p>L'utilisation du site est soumise à la politique de protection des données personnelles décrite dans les mentions légales.</p>
        </section>

        <section className={styles.section}>
          <h2>10. Modification des CGU</h2>
          <p>ProPadelKit SAS se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur le site.</p>
        </section>

        <section className={styles.section}>
          <h2>11. Droit applicable</h2>
          <p>Les présentes CGU sont soumises au droit français.</p>
        </section>

        <section className={styles.section}>
          <p><small>Dernière mise à jour : mars 2026</small></p>
        </section>
      </div>
    </main>
  )
}
