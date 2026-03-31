import { Link } from 'react-router-dom'
import styles from './Legal.module.css'

export default function MentionsLegales() {
  return (
    <main className={styles.legal}>
      <div className={styles.wrap}>
        <nav className={styles.breadcrumb}><Link to="/">Accueil</Link> › Mentions légales</nav>
        <h1 className={styles.title}>Mentions légales</h1>
        
        <section className={styles.section}>
          <h2>1. Éditeur du site</h2>
          <p>
            <strong>Raison sociale :</strong> ProPadelKit SAS<br/>
            <strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)<br/>
            <strong>Capital social :</strong> 1 000 €<br/>
            <strong>SIRET :</strong> 937 836 955 00016<br/>
            <strong>SIREN :</strong> 937 836 955<br/>
            <strong>RCS :</strong> Nanterre<br/>
            <strong>TVA intracommunautaire :</strong> FR75937836955<br/>
            <strong>Code APE :</strong> 7022Z — Conseil pour les affaires et autres conseils de gestion<br/>
            <strong>Siège social :</strong> 32 Rue de Paris, 92100 Boulogne-Billancourt, France<br/>
            <strong>Email :</strong> <a href="mailto:contact@padelprogram.fr">contact@padelprogram.fr</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Directeur de la publication</h2>
          <p>Le directeur de la publication du site padelprogram.fr est <strong>Clément Rouanet</strong>, en qualité de Président de ProPadelKit SAS.</p>
        </section>

        <section className={styles.section}>
          <h2>3. Hébergement</h2>
          <p>
            <strong>Hébergeur :</strong> Hostinger International Ltd<br/>
            <strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre<br/>
            <strong>Site web :</strong> <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer">www.hostinger.fr</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Propriété intellectuelle</h2>
          <p>L'ensemble des contenus présents sur le site padelprogram.fr (textes, images, graphismes, logo, icônes, vidéos, sons, logiciels, mise en page, base de données) est protégé par les dispositions du Code de la propriété intellectuelle et appartient à ProPadelKit SAS ou fait l'objet d'une autorisation d'utilisation.</p>
          <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de ProPadelKit SAS.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Données personnelles</h2>
          <p>ProPadelKit SAS accorde une importance particulière à la protection des données personnelles de ses utilisateurs. Les données collectées via le site padelprogram.fr sont traitées conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.</p>
          <p>Pour exercer vos droits d'accès, de rectification ou de suppression, contactez-nous à <a href="mailto:contact@padelprogram.fr">contact@padelprogram.fr</a>.</p>
        </section>

        <section className={styles.section}>
          <h2>6. Cookies</h2>
          <p>Le site padelprogram.fr est susceptible d'utiliser des cookies pour améliorer l'expérience de navigation et à des fins statistiques. L'utilisateur peut paramétrer son navigateur pour accepter ou refuser les cookies.</p>
        </section>

        <section className={styles.section}>
          <h2>7. Limitation de responsabilité</h2>
          <p>ProPadelKit SAS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site. Toutefois, ProPadelKit SAS ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.</p>
        </section>

        <section className={styles.section}>
          <p><small>Dernière mise à jour : mars 2026</small></p>
        </section>
      </div>
    </main>
  )
}
