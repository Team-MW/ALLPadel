import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import FAQ from '../components/FAQ'
import styles from './Guide.module.css'

const TYPEFORM_URL = 'https://form.typeform.com/to/OktIQ7XG'

const faqItems = [
  { question: "Quel budget pour ouvrir un club de padel ?", answer: "Le budget dépend du format. Un mini club autonome (2-3 pistes) se situe entre 150 000 € et 250 000 €. Un club intermédiaire (4 pistes indoor) entre 250 000 € et 400 000 €. Un complexe premium (6+ pistes) dépasse les 500 000 €. Ces fourchettes incluent les pistes, le bâtiment, les aménagements, les frais juridiques et la trésorerie de démarrage." },
  { question: "Est-ce rentable d'ouvrir un club de padel ?", answer: "Un club bien structuré peut atteindre la rentabilité opérationnelle entre 12 et 24 mois après l'ouverture. En rythme de croisière, les clubs performants atteignent un taux d'occupation de 70 à 80 % et une marge nette de 20 à 30 % annuelle." },
  { question: "Combien de pistes de padel faut-il pour être rentable ?", answer: "Il n'y a pas de nombre minimum universel. Le dimensionnement dépend de la demande locale, du modèle (indoor/outdoor) et des charges fixes. En indoor, 4 pistes constituent souvent un seuil pertinent pour amortir les coûts de structure." },
  { question: "Quelle hauteur sous plafond pour un club indoor ?", answer: "La FFT impose une hauteur utile minimale de 7 m en zone centrale et 4 m aux extrémités. L'idéal pour un confort de jeu optimal et l'homologation compétition est de 9 m. C'est un critère éliminatoire lors de la recherche foncière." },
  { question: "Faut-il un diplôme pour ouvrir un club de padel ?", answer: "Pour ouvrir et gérer un club, aucun diplôme sportif spécifique n'est requis. En revanche, pour dispenser des cours contre rémunération, un diplôme d'État (DE JEPS ou équivalent) est obligatoire." },
  { question: "Comment financer un club de padel ?", answer: "Le financement combine un apport personnel (20–30 %), un emprunt professionnel (5–7 ans avec garantie BPI), et des aides publiques. La FFT a lancé un plan de 85 millions d'euros avec des prêts à taux zéro pour les projets structurés." },
  { question: "Quelle surface faut-il pour un club de padel ?", answer: "Une piste de padel standard mesure 20 m × 10 m, soit 200 m². Avec les dégagements réglementaires, comptez 240 à 280 m² d'emprise par piste. Pour un club de 4 pistes indoor, prévoyez 1 500 à 2 000 m² au total." },
  { question: "Quel montage juridique pour un club de padel ?", answer: "Trois montages fonciers sont possibles : le bail commercial 3/6/9 (le plus courant), le BEA ou AOT pour du foncier public, et l'achat via SCI + société d'exploitation. Le choix dépend du capital disponible, de la stratégie à long terme et du type de foncier identifié." },
  { question: "Où en est le marché du padel en France ?", answer: "La France compte plus de 3 000 pistes et 1 000+ clubs labellisés FFT, avec 500 000 pratiquants. Le ratio français (1 piste pour 22 600 habitants) reste très loin de l'Espagne (1/2 800). Le plan FFT de 85 M€ et la candidature du padel aux JO 2032 renforcent la dynamique." },
  { question: "PadelProgram peut-il m'accompagner dans mon projet ?", answer: "PadelProgram accompagne un nombre limité de porteurs de projets de clubs de padel. L'accompagnement couvre l'étude de marché, le cadrage foncier, la structuration du business plan et le suivi jusqu'à la présentation aux partenaires financiers." },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  )
}

export default function Guide() {
  useReveal()

  return (
    <>
      <a href="#main" className="skip-link">Aller au contenu principal</a>

      <main id="main">

        {/* ── HERO ── */}
        <section className={styles.guideHero}>
          <div className={`${styles.guideHeroIn} r`}>
            <nav className={styles.guideBreadcrumb} aria-label="Fil d'Ariane">
              <Link to="/">Accueil</Link>
              <span>›</span>
              Guide
            </nav>
            <h1>Ouvrir un club de padel en 2026 :<br/><em>le guide complet pour structurer votre projet.</em></h1>
            <div className={styles.guideHeroMeta}>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" width="14" height="14" style={{marginRight:'4px',verticalAlign:'-2px'}}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                Lecture : 15 min
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" width="14" height="14" style={{marginRight:'4px',verticalAlign:'-2px'}}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Mis à jour : février 2026
              </span>
              <span>Par PadelProgram</span>
            </div>
            <p className={styles.guideHeroIntro}>Étude de marché, recherche foncière, business plan, financement, coûts d'exploitation — ce guide couvre les étapes structurantes d'un projet de club de padel. Pas de généralités : des données, des repères concrets, et une méthode.</p>
          </div>
        </section>

        {/* ── TABLE DES MATIÈRES ── */}
        <section className={styles.tocSection} aria-label="Sommaire">
          <div className={`${styles.tocBox} r`}>
            <div className={styles.tocTitle}>Sommaire du guide</div>
            <ol className={styles.tocList}>
              {[
                ['#marche', 'Le marché du padel en France : chiffres et dynamique'],
                ['#etude', 'Étude de marché : valider la demande locale'],
                ['#foncier', 'Foncier et implantation : trouver le bon site'],
                ['#business-plan', 'Business plan : structurer le dossier de financement'],
                ['#couts', "Coûts d'ouverture : les postes à budgétiser"],
                ['#rentabilite', 'Rentabilité : modèle économique et point mort'],
                ['#erreurs', 'Les erreurs fréquentes des porteurs de projet'],
              ].map(([href, label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 1. MARCHÉ ── */}
        <section className={`${styles.articleSection} ${styles.cream}`} id="marche">
          <div className={styles.wrap760}>
            <div className={`${styles.articleLabel} r`}>01 — Marché</div>
            <h2 className={`${styles.articleH2} r d1`}>Le marché du padel en France : chiffres et dynamique</h2>
            <p className={`${styles.articleP} r d2`}>Le padel est le sport de raquette qui connaît la plus forte croissance au monde. À l'échelle mondiale, on dénombre plus de 50 000 pistes, et le nombre de clubs a progressé de 26 % en un an, avec plus de 3 200 nouveaux clubs ouverts en 2024. En France, le nombre de pratiquants est passé de 186 000 à plus de 500 000 en quatre ans. Le pays compte désormais plus de 3 000 pistes réparties dans plus de 1 000 clubs labellisés FFT.</p>
            <p className={`${styles.articleP} r`}>Cette croissance crée une fenêtre d'opportunité pour les porteurs de projet — mais elle ne suffit pas à valider un projet local. La demande nationale ne dit rien de la demande dans votre zone de chalandise.</p>
            <h3 className={`${styles.articleH3} r`}>La France encore sous-équipée par rapport à ses voisins</h3>
            <p className={`${styles.articleP} r`}>Malgré cette dynamique, la France reste nettement en retard. L'Espagne compte plus de 17 000 pistes (1 piste pour 2 800 habitants), l'Italie environ 10 000 pistes (1 pour 5 800 habitants). En France, le ratio est de 1 piste pour 22 600 habitants — soit un potentiel de développement considérable.</p>
            <div className={`${styles.keyFact} r`}>
              <div className={styles.keyFactLabel}>Accélérateurs institutionnels</div>
              <div className={styles.keyFactText}>La FFT a lancé un plan de développement de 85 millions d'euros sur 10 ans, avec un objectif de 500 nouvelles pistes et des prêts à taux zéro pour les porteurs de projet. Par ailleurs, le padel est candidat officiel pour les Jeux Olympiques de Brisbane 2032 — la décision du CIO est attendue courant 2026.</div>
            </div>
            <h3 className={`${styles.articleH3} r`}>Indoor vs outdoor : deux modèles différents</h3>
            <p className={`${styles.articleP} r`}>Le choix entre une structure indoor et outdoor conditionne le budget d'investissement, les charges annuelles et le taux d'utilisation des terrains. En France, le climat impose souvent un modèle indoor ou semi-couvert pour maintenir une activité sur 12 mois.</p>
            <p className={`${styles.articleP} r`}>Un club exclusivement outdoor dans une zone à forte pluviométrie risque de perdre 30 à 40 % de son chiffre d'affaires annuel sur les mois d'hiver.</p>
          </div>
        </section>

        {/* ── 2. ÉTUDE DE MARCHÉ ── */}
        <section className={`${styles.articleSection} ${styles.dark}`} id="etude">
          <div className={styles.wrap760}>
            <div className={`${styles.articleLabel} r`}>02 — Étude de marché</div>
            <h2 className={`${styles.articleH2} r d1`}>Étude de marché : valider la demande locale</h2>
            <p className={`${styles.articleP} r d2`}>L'étude de marché est la première brique structurante du projet. Elle précède toute recherche foncière et toute modélisation financière. Son objectif : déterminer si la zone visée peut absorber l'offre que vous prévoyez.</p>
            <h3 className={`${styles.articleH3} r`}>Zone de chalandise : quel périmètre analyser ?</h3>
            <p className={`${styles.articleP} r`}>Pour un club de padel, la zone de chalandise pertinente est de 10 à 20 minutes en voiture. L'analyse doit couvrir :</p>
            <ul className={`${styles.articleList} r`}>
              <li>La population dans le rayon défini (données INSEE)</li>
              <li>Le profil socio-démographique (CSP, tranches d'âge, revenus médians)</li>
              <li>La densité sportive locale (clubs de tennis, salles de sport, terrains existants)</li>
              <li>L'offre concurrente directe : nombre de pistes de padel déjà accessibles dans la zone</li>
              <li>Les projets concurrents en cours (permis déposés, annonces publiques)</li>
            </ul>
            <div className={`${styles.keyFact} r`}>
              <div className={styles.keyFactLabel}>Point de vigilance</div>
              <div className={styles.keyFactText}>Un concurrent qui affiche complet le soir et le week-end n'est pas une menace — c'est un signal de marché. Ce qui compte, c'est le volume de demande non servie dans le créneau cible.</div>
            </div>
          </div>
        </section>

        {/* Visual break */}
        <section className={styles.visualBreak} aria-hidden="true">
          <img src="https://images.pexels.com/photos/32897040/pexels-photo-32897040.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" loading="lazy" />
          <div className={`${styles.visualBreakOverlay} ${styles.vcDc}`}></div>
        </section>

        {/* ── 3. FONCIER ── */}
        <section className={`${styles.articleSection} ${styles.cream}`} id="foncier">
          <div className={styles.wrap760}>
            <div className={`${styles.articleLabel} r`}>03 — Foncier</div>
            <h2 className={`${styles.articleH2} r d1`}>Foncier et implantation : trouver le bon site</h2>
            <p className={`${styles.articleP} r d2`}>Le foncier est souvent le point de blocage principal. Un terrain mal situé, un bail mal négocié ou un PLU incompatible peut compromettre un projet entier — même si l'étude de marché est positive.</p>
            <h3 className={`${styles.articleH3} r`}>Normes techniques FFT : ce que le bâtiment doit respecter</h3>
            <ul className={`${styles.articleList} r`}>
              <li><strong>Dimensions de jeu :</strong> 20 m × 10 m par piste (200 m²)</li>
              <li><strong>Hauteur utile :</strong> 7 m minimum en zone centrale, 4 m aux extrémités. L'idéal est 9 m</li>
              <li><strong>Dégagements :</strong> 1,40 m sans sortie de jeu, 2 m avec. Compter 240 à 280 m² d'emprise réelle par piste</li>
              <li><strong>Éclairage :</strong> 400 lux minimum en compétition, 200 lux en loisir. LED obligatoire</li>
            </ul>
            <h3 className={`${styles.articleH3} r`}>Les 4 typologies foncières</h3>
            <ul className={`${styles.articleList} r`}>
              <li><strong>Entrepôt ou local d'activité :</strong> hauteur sous plafond souvent compatible (7 m+), dalle existante. C'est le format le plus fréquent en reconversion</li>
              <li><strong>Foncier nu :</strong> terrain vierge à aménager. Plus de liberté de conception, mais coûts de VRD, fondations et construction de structure à intégrer</li>
              <li><strong>Friche commerciale ou industrielle :</strong> opportunité de prix, mais vigilance sur la dépollution</li>
              <li><strong>Foncier public (BEA / AOT) :</strong> loyers souvent inférieurs, mais procédures plus longues</li>
            </ul>
            <div className={`${styles.keyFact} r`}>
              <div className={styles.keyFactLabel}>Répartition SCI / Exploitant</div>
              <div className={styles.keyFactText}>Dans un montage SCI + exploitation, la SCI prend en charge : le foncier, la dalle, les VRD, la structure du bâtiment, l'enveloppe et les fluides. L'exploitant finance : les pistes de padel, l'éclairage sportif, le club-house, les vestiaires et les logiciels de gestion.</div>
            </div>
          </div>
        </section>

        {/* CTA inline */}
        <section className={`${styles.articleSection} ${styles.cream}`} style={{paddingTop:0, paddingBottom:'48px'}}>
          <div className={styles.wrap760}>
            <div className={`${styles.ctaInline} r`}>
              <div className={styles.ctaInlineTitle}>Vous avez un projet de club de padel ?</div>
              <div className={styles.ctaInlineSub}>PadelProgram accompagne un nombre limité de porteurs — de l'étude de marché jusqu'à la présentation du dossier aux partenaires financiers.</div>
              <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-primary--white">
                Réserver un appel <ArrowIcon />
              </a>
              <p className="btn-micro">Appel de sélection · Accompagnement limité</p>
            </div>
          </div>
        </section>

        {/* ── 4. BUSINESS PLAN ── */}
        <section className={`${styles.articleSection} ${styles.dark}`} id="business-plan">
          <div className={styles.wrap760}>
            <div className={`${styles.articleLabel} r`}>04 — Business plan</div>
            <h2 className={`${styles.articleH2} r d1`}>Business plan : structurer le dossier de financement</h2>
            <p className={`${styles.articleP} r d2`}>Le business plan est le document central du projet. Il formalise la viabilité économique, structure les hypothèses et constitue la base de discussion avec les partenaires financiers. Un dossier mal structuré est renvoyé — souvent sans possibilité de deuxième passage.</p>
            <h3 className={`${styles.articleH3} r`}>3 profils d'investissement selon l'ambition du projet</h3>
            <ul className={`${styles.articleList} r`}>
              <li><strong>Mini club autonome (2-3 pistes) :</strong> budget de 150 000 € à 250 000 €. Format compact, souvent outdoor ou semi-couvert</li>
              <li><strong>Club intermédiaire (4 pistes) :</strong> budget de 250 000 € à 400 000 €. Le format le plus courant en indoor. Seuil pertinent pour amortir les coûts de structure</li>
              <li><strong>Complexe premium (6+ pistes) :</strong> budget supérieur à 500 000 €. Offre complète avec restaurant, pro shop, événementiel</li>
            </ul>
            <h3 className={`${styles.articleH3} r`}>Les composantes d'un business plan solide</h3>
            <ul className={`${styles.articleList} r`}>
              <li><strong>Executive summary :</strong> synthèse du projet en une page</li>
              <li><strong>Étude de marché :</strong> données locales, analyse concurrentielle, estimation du potentiel</li>
              <li><strong>Modèle économique :</strong> sources de revenus (location de pistes, cours, tournois, bar/restauration, abonnements)</li>
              <li><strong>Plan d'investissement :</strong> détail des coûts de lancement poste par poste</li>
              <li><strong>Prévisionnel financier :</strong> compte de résultat prévisionnel sur 3 à 5 ans, plan de trésorerie, seuil de rentabilité</li>
              <li><strong>Plan de financement :</strong> apport personnel, emprunt, aides publiques, montage juridique</li>
            </ul>
            <div className={`${styles.keyFact} r`}>
              <div className={styles.keyFactLabel}>Conseil</div>
              <div className={styles.keyFactText}>Un prévisionnel crédible présente trois scénarios (prudent, central, optimiste) avec des hypothèses explicitement sourcées. Les données comparables issues de clubs existants renforcent considérablement la crédibilité du dossier.</div>
            </div>
          </div>
        </section>

        {/* Visual break */}
        <section className={styles.visualBreak} aria-hidden="true">
          <img src="https://images.pexels.com/photos/10926534/pexels-photo-10926534.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" loading="lazy" />
          <div className={`${styles.visualBreakOverlay} ${styles.vcDc}`}></div>
        </section>

        {/* ── 5. COÛTS ── */}
        <section className={`${styles.articleSection} ${styles.cream}`} id="couts">
          <div className={styles.wrap760}>
            <div className={`${styles.articleLabel} r`}>05 — Coûts</div>
            <h2 className={`${styles.articleH2} r d1`}>Coûts d'ouverture : les postes à budgétiser</h2>
            <p className={`${styles.articleP} r d2`}>Le budget d'ouverture d'un club de padel varie considérablement selon le format (indoor/outdoor), le nombre de pistes, et le choix entre construction neuve et réhabilitation.</p>
            <h3 className={`${styles.articleH3} r`}>Les 3 types d'investissement</h3>
            <table className={`${styles.dataTable} r`}>
              <thead><tr><th>Profil</th><th>Pistes</th><th>Budget total</th></tr></thead>
              <tbody>
                <tr><td>Mini club autonome</td><td>2 – 3 pistes</td><td>150 000 € – 250 000 €</td></tr>
                <tr><td>Club intermédiaire</td><td>4 pistes</td><td>250 000 € – 400 000 €</td></tr>
                <tr><td>Complexe premium</td><td>6+ pistes</td><td>500 000 € et plus</td></tr>
              </tbody>
            </table>
            <h3 className={`${styles.articleH3} r`}>Détail des postes pour un club indoor de 4 pistes</h3>
            <table className={`${styles.dataTable} r`}>
              <thead><tr><th>Poste</th><th>Fourchette indicative</th></tr></thead>
              <tbody>
                <tr><td>Pistes de padel (fourniture + pose)</td><td>100 000 € – 200 000 €</td></tr>
                <tr><td>Structure / bâtiment</td><td>200 000 € – 600 000 €</td></tr>
                <tr><td>Aménagements intérieurs (vestiaires, accueil, bar)</td><td>50 000 € – 150 000 €</td></tr>
                <tr><td>Éclairage LED (400 lux compétition)</td><td>15 000 € – 40 000 €</td></tr>
                <tr><td>Traitement acoustique</td><td>10 000 € – 50 000 €</td></tr>
                <tr><td>Frais juridiques, assurances, honoraires</td><td>15 000 € – 30 000 €</td></tr>
                <tr><td>Communication de lancement</td><td>5 000 € – 20 000 €</td></tr>
                <tr><td>Trésorerie de démarrage (BFR)</td><td>20 000 € – 50 000 €</td></tr>
              </tbody>
            </table>
            <h3 className={`${styles.articleH3} r`}>Les postes souvent sous-estimés</h3>
            <ul className={`${styles.articleList} r`}>
              <li><strong>Le traitement acoustique :</strong> obligatoire si le club est à moins de 60-100 m d'habitations. Le coût peut doubler</li>
              <li><strong>La mise aux normes ERP :</strong> accessibilité PMR, sécurité incendie — souvent découverts tardivement</li>
              <li><strong>Le besoin en fonds de roulement :</strong> les 6 premiers mois sont rarement à l'équilibre</li>
              <li><strong>L'énergie :</strong> chauffage et éclairage d'une structure indoor représentent un poste conséquent</li>
              <li><strong>Les VRD (foncier nu) :</strong> 30 000 € à 80 000 € selon la desserte existante</li>
            </ul>
          </div>
        </section>

        {/* ── 6. RENTABILITÉ ── */}
        <section className={`${styles.articleSection} ${styles.dark}`} id="rentabilite">
          <div className={styles.wrap760}>
            <div className={`${styles.articleLabel} r`}>06 — Rentabilité</div>
            <h2 className={`${styles.articleH2} r d1`}>Rentabilité : modèle économique et point mort</h2>
            <p className={`${styles.articleP} r d2`}>La rentabilité d'un club de padel dépend de trois leviers principaux : le taux d'occupation des pistes, le panier moyen par créneau, et la maîtrise des charges fixes. Les clubs bien gérés atteignent 20 à 30 % de marge nette annuelle.</p>
            <h3 className={`${styles.articleH3} r`}>La pyramide des revenus d'un club</h3>
            <ul className={`${styles.articleList} r`}>
              <li><strong>Location de pistes (60-70 % du CA) :</strong> le cœur du modèle. Tarification au créneau de 40 € à 80 € selon la zone</li>
              <li><strong>Revenus structurants (20-30 % du CA) :</strong> abonnements, cours collectifs et coaching privé (DE requis), tournois et événements</li>
              <li><strong>Revenus complémentaires (5-10 % du CA) :</strong> bar et restauration légère, boutique, location d'espaces</li>
              <li><strong>Micro revenus (0,5-2 % du CA) :</strong> sponsoring, distributeurs automatiques, partenariats locaux</li>
            </ul>
            <h3 className={`${styles.articleH3} r`}>Taux d'occupation : le KPI central</h3>
            <ul className={`${styles.articleList} r`}>
              <li>Un club récent vise 35 à 50 % la première année</li>
              <li>Un club mature (2–3 ans) doit atteindre 70 à 80 % sur les créneaux payants</li>
              <li>Les créneaux soir et week-end sont les plus demandés ; la rentabilité se joue sur les heures creuses</li>
            </ul>
            <div className={`${styles.keyFact} r`}>
              <div className={styles.keyFactLabel}>Repère</div>
              <div className={styles.keyFactText}>Le point mort opérationnel est généralement atteint entre 12 et 24 mois après l'ouverture. Un business plan rigoureux modélise ce délai en intégrant la saisonnalité. Les clubs les plus performants dégagent une marge nette de 20 à 30 % en rythme de croisière.</div>
            </div>
          </div>
        </section>

        {/* CTA inline dark */}
        <section className={`${styles.articleSection} ${styles.deep}`} style={{paddingTop:0, paddingBottom:'48px'}}>
          <div className={styles.wrap760}>
            <div className={`${styles.ctaInline} r`}>
              <div className={styles.ctaInlineTitle}>Besoin d'un cadrage précis pour votre projet ?</div>
              <div className={styles.ctaInlineSub}>Nous structurons le dossier, les hypothèses et la présentation — pour les porteurs qui veulent avancer avec méthode.</div>
              <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Réserver un appel <ArrowIcon />
              </a>
              <p className="btn-micro">Appel de sélection · Accompagnement limité</p>
            </div>
          </div>
        </section>

        {/* ── 7. ERREURS ── */}
        <section className={`${styles.articleSection} ${styles.cream}`} id="erreurs">
          <div className={styles.wrap760}>
            <div className={`${styles.articleLabel} r`}>07 — Erreurs fréquentes</div>
            <h2 className={`${styles.articleH2} r d1`}>Les erreurs fréquentes des porteurs de projet padel</h2>
            <p className={`${styles.articleP} r d2`}>Après avoir accompagné des dizaines de porteurs, les mêmes erreurs structurantes reviennent. Elles ne sont pas liées à un manque de motivation — mais à un défaut de cadrage.</p>
            {[
              ['1. Signer un bail avant de valider la zone', "C'est l'erreur la plus coûteuse. Un bail commercial engage sur 3, 6 ou 9 ans. Si l'étude de marché n'a pas été réalisée avant la signature, le porteur découvre les faiblesses de la zone une fois engagé contractuellement."],
              ['2. Ignorer les contraintes techniques du bâtiment', "Visiter un local sans vérifier la hauteur sous plafond (7 m minimum, 9 m idéal), l'état de la dalle ou la compatibilité PLU. Un entrepôt à 5 m de hauteur utile ne sera jamais homologué FFT."],
              ['3. Sous-estimer le voisinage', "Un club de padel génère un niveau sonore important. Si le site est à moins de 60 m d'habitations sans traitement acoustique prévu, c'est un risque de contentieux et de surcoûts majeurs."],
              ['4. Surdimensionner le projet', "8 pistes quand 4 suffisent. Le dimensionnement doit découler de l'étude de marché, pas de l'ambition du porteur."],
              ['5. Présenter un dossier sans données comparables', "Un prévisionnel sans benchmark local n'est pas crédible. Les partenaires financiers attendent des données issues de clubs existants, des ratios vérifiables."],
              ['6. Négliger la montée en charge', "Un club de padel n'est pas rentable dès le premier mois. La montée en charge prend du temps. Sous-estimer cette phase conduit à des tensions de trésorerie évitables."],
              ['7. Avancer sans scénario clair', "Location ou achat ? SCI ou exploitation directe ? Indoor ou semi-couvert ? Chaque question non tranchée en amont crée de l'inertie."],
              ['8. Solliciter les bons interlocuteurs au mauvais moment', "Contacter un architecte avant d'avoir défini le programme fonctionnel. Chaque interlocuteur sollicité trop tôt génère des coûts, de l'inertie, et parfois des engagements prématurés."],
              ['9. Confondre passion et projet structuré', "La passion pour le padel est un moteur — pas un plan d'affaires. L'énergie sans structure mène à l'essoufflement."],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className={`${styles.articleH3} r`}>{title}</h3>
                <p className={`${styles.articleP} r`}>{text}</p>
              </div>
            ))}
            <div className={`${styles.keyFact} r`}>
              <div className={styles.keyFactLabel}>En résumé</div>
              <div className={styles.keyFactText}>Les erreurs ne viennent pas d'un manque de volonté. Elles viennent d'un manque de méthode. Structurer le projet en amont — marché, foncier, financement — permet d'éviter des décisions irréversibles prises sans données.</div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={styles.faqSection} id="faq-guide">
          <div className="wrap">
            <div className={styles.faqHead}>
              <div style={{color:'var(--lime)', textAlign:'center', fontSize:'11px', fontWeight:600, textTransform:'uppercase', letterSpacing:'2.5px', marginBottom:'14px'}}>Questions fréquentes</div>
              <h2 className={`${styles.faqTitle} r`}>Ouvrir un club de padel : les réponses aux questions clés.</h2>
            </div>
            <FAQ items={faqItems} />
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className={styles.ctaEnd}>
          <div className="wrap">
            <h2 className={`${styles.ctaEndTitle} r`}>Vous avez un projet de club de padel ?<br/><em style={{fontFamily:'var(--ff-display)', color:'var(--text-on-dark)'}}>Parlons-en.</em></h2>
            <p className={`${styles.ctaEndSub} r d1`}>PadelProgram structure les projets de clubs de padel — de l'étude de marché jusqu'à la présentation aux partenaires financiers. L'accompagnement est sélectif, le périmètre est contractuel.</p>
            <div className="r d2">
              <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Réserver un appel <ArrowIcon />
              </a>
              <p className="btn-micro">Appel de sélection · Accompagnement limité</p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
