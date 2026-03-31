import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import FAQ from '../components/FAQ'
import styles from './Home.module.css'

const TYPEFORM_URL = 'https://form.typeform.com/to/OktIQ7XG'

const testimonials = [
  { name: 'Yohan M.', date: 'novembre 2024', text: "L'équipe a vraiment clarifié les étapes et priorités de mon projet. Je sais exactement où aller, quoi faire, dans quel ordre." },
  { name: 'Val G.', date: 'septembre 2024', text: "L'expert a su me trouver un terrain alors que j'étais bloqué sur cette partie depuis plusieurs mois. Cadrage rapide et efficace." },
  { name: 'Kylian M.', date: 'août 2024', text: "Un grand merci pour l'accompagnement. N'ayant pas beaucoup de temps libre, ça me permet d'avancer en toute sérénité sur mon projet." },
]

const faqItems = [
  { question: "Que se passe-t-il concrètement après l'appel de sélection ?", answer: "Si votre profil est retenu, on vous propose un périmètre d'accompagnement adapté à l'avancement de votre projet. L'accompagnement démarre par un audit de zone et un diagnostic de faisabilité. Chaque étape produit un livrable défini, avec un calendrier et un niveau d'exigence précis." },
  { question: "Est-ce que je peux commencer uniquement par l'audit, sans m'engager sur la suite ?", answer: "Oui. L'audit et le diagnostic constituent la première étape. Vous repartez avec un rapport de faisabilité clair : feu vert, ajustements nécessaires, ou stop. La suite n'est activée que si les conditions sont réunies et que vous décidez de poursuivre." },
  { question: "Mon projet est encore au stade d'idée. C'est trop tôt ?", answer: "L'appel de sélection sert justement à évaluer où vous en êtes. Si votre projet est trop précoce, on vous le dit et on vous indique ce qu'il faut consolider avant de revenir. Aucun porteur n'est accompagné si les bases ne sont pas là." },
  { question: "Quel budget prévoir pour l'accompagnement ?", answer: "Le montant dépend du périmètre retenu : audit seul, structuration complète, ou suivi jusqu'à l'ouverture. Les conditions tarifaires sont présentées lors de l'échange de sélection, une fois le périmètre défini. Il n'y a pas de grille unique parce qu'aucun projet n'a le même point de départ." },
  { question: "Combien de temps dure un accompagnement, du diagnostic à l'ouverture ?", answer: "Un audit de zone prend en général quelques semaines. Un accompagnement complet, du diagnostic à la concrétisation du projet, s'étend sur plusieurs mois selon la complexité du foncier, du financement et des autorisations. On vous donne un calendrier prévisionnel dès le cadrage initial." },
  { question: "Est-ce que vous garantissez l'obtention d'un financement ?", answer: "Non. Le financement dépend de facteurs que personne ne contrôle : conjoncture économique, profil emprunteur, politique de l'organisme prêteur. Ce que nous garantissons, c'est un dossier structuré, documenté et défendable devant un analyste financier. C'est la condition nécessaire, pas la condition suffisante." },
  { question: "Qu'est-ce qui est inclus dans l'accompagnement, et qu'est-ce qui ne l'est pas ?", answer: "L'accompagnement couvre l'étude de zone, le business plan, le prévisionnel financier, la qualification foncière et le suivi stratégique. Il ne remplace pas un expert-comptable, un avocat ou un architecte. On coordonne les intervenants, on ne se substitue pas à eux." },
  { question: "Quelle différence avec un consultant, une franchise, ou monter le projet seul ?", answer: "Un consultant produit un livrable ponctuel, sans suivi. Une franchise impose un modèle, un fournisseur et des redevances. Monter seul, c'est possible, mais chaque erreur de séquencement coûte des mois. PadelProgram structure l'ensemble du parcours avec un interlocuteur dédié, sans vous enfermer dans un modèle imposé." },
  { question: "Que se passe-t-il si mon projet n'est pas retenu ?", answer: "On vous explique précisément pourquoi et on vous indique les axes à renforcer. Pas de relance commerciale. Si votre situation évolue, vous pouvez reprendre contact. La sélection n'est pas un jugement : c'est une condition pour que l'accompagnement produise un résultat." },
  { question: "Vous accompagnez des projets partout en France et à l'international ?", answer: "Oui, en France métropolitaine, outre-mer et à l'international. La méthode s'adapte aux spécificités réglementaires et économiques locales. L'essentiel du travail se fait à distance, avec des points réguliers." },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

export default function Home() {
  useReveal()

  // Sticky mobile CTA
  useEffect(() => {
    const stk = document.getElementById('stk')
    const heroEl = document.getElementById('top')
    const footerEl = document.querySelector('footer')
    if (!stk) return
    const checkSticky = () => {
      if (window.innerWidth > 920) return
      const hb = heroEl?.getBoundingClientRect().bottom
      const ft = footerEl?.getBoundingClientRect().top
      stk.classList.toggle('show', hb < 0 && ft > window.innerHeight)
    }
    window.addEventListener('scroll', checkSticky)
    checkSticky()
    return () => window.removeEventListener('scroll', checkSticky)
  }, [])

  // Duplicate testimonials for infinite scroll
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <>
      <a href="#main" className="skip-link">Aller au contenu principal</a>

      <main id="main">

        {/* ── HERO ── */}
        <section className={styles.hero} id="top">
          <div className={styles.heroBg}>
            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/0n_ZBeysGB8?autoplay=1&mute=1&loop=1&playlist=0n_ZBeysGB8&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                title="Padel Background"
                allow="autoplay; fullscreen"
              />
            </div>
          </div>
          <div className={styles.heroIn}>
            <h1 className={`${styles.heroH1} r d1`}>L'incubateur de référence pour ouvrir votre club de padel.</h1>
            <p className={`${styles.heroSub} r d2`}>De l'expertise de zone au dossier de financement, nous structurons chaque étape pour garantir votre rentabilité.</p>
            <div className="r d3">
              <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '24px 48px', fontSize: '18px' }}>
                Entrer dans l'incubateur <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* ── AVIS GOOGLE ── */}
        <section className={styles.avis} id="avis">
          <div className={styles.avisLayout}>
            <div className={styles.avisHead}>
              <div className={styles.avisGoogleBadge}>
                <GoogleIcon />
                <span>Avis Google</span>
              </div>
              <div className={styles.avisSummary}>
                <span className={styles.avisBigScore}>5,0</span>
                <div className={styles.avisSummaryRight}>
                  <span className={styles.avisStars} aria-label="5 étoiles sur 5">★★★★★</span>
                  <span className={styles.avisCount}>9 avis vérifiés</span>
                </div>
              </div>
            </div>
            <div className={styles.avisTrackWrap}>
              <div className={styles.avisTrack}>
                {allTestimonials.map((t, i) => (
                  <div key={i} className={styles.avisCard}>
                    <div className={styles.avisCardHead}>
                      <div className={styles.avisCardAvatar}>{t.name[0]}</div>
                      <div className={styles.avisCardMeta}>
                        <div className={styles.avisCardWho}>{t.name}</div>
                        <div className={styles.avisCardDate}>{t.date}</div>
                      </div>
                    </div>
                    <div className={styles.avisCardStars}>★★★★★</div>
                    <div className={styles.avisCardTxt}>{t.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── LE CONSTAT ── */}
        <section className={styles.constat} id="constat">
          <div className="wrap">
            <div className={styles.constatLayout}>
              <div className={styles.constatLeft}>
                <div className="s-label s-label--light r">Le constat</div>
                <h2 className="s-title r d1">Ce qui fait échouer la majorité des projets padel.</h2>
                <p className={`${styles.constatIntro} r d2`}>Les projets ne s'arrêtent pas par manque d'énergie. Ils s'arrêtent parce qu'une décision structurante a été prise sans données, sans cadre, ou au mauvais moment.</p>
                <div className={`${styles.constatCost} r d2`}>
                  ⚠ <span>6 à 18 mois de retard en moyenne, et souvent un abandon définitif.</span>
                </div>
              </div>
              <ul className={`${styles.constatList} r d1`}>
                {[
                  { title: 'Bail signé sans étude de zone', sub: 'La zone ne génère pas assez de flux. Le bail court, le projet est bloqué.' },
                  { title: 'Dimensionnement à l\'intuition', sub: '8 terrains quand 5 suffisent, impact direct sur la rentabilité.' },
                  { title: 'Business plan sans benchmark', sub: 'Renvoyé par l\'analyste, souvent sans deuxième chance.' },
                  { title: 'Interlocuteurs sollicités trop tôt', sub: 'Chaque mauvais timing génère des coûts et de l\'inertie.' },
                ].map((item, i) => (
                  <li key={i}>
                    <div className={styles.constatX}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </div>
                    <div>
                      <strong>{item.title}</strong>
                      <span className={styles.constatLiSub}>{item.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── DISTINCTION ── */}
        <section className={styles.distinction}>
          <div className="wrap">
            <div className={styles.distinctionHead}>
              <div className="s-label s-label--light r">Ce qui fait la différence</div>
              <h2 className="s-title r d1">Ce qui distingue un projet viable<br />d'un projet fragile.</h2>
              <p className="s-sub r d2" style={{ color: 'var(--text-secondary)' }}>Trois fondamentaux. Chacun est mesurable, chacun est vérifiable, et chacun conditionne la suite.</p>
            </div>
            <div className={styles.distGrid}>
              {[
                {
                  bg: 'https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&w=800',
                  badge: '01 — Analyse de zone',
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></svg>,
                  title: 'Votre zone peut-elle vraiment soutenir un club ?',
                  desc: 'Flux, accessibilité, concurrence, bassin de population active. Pas une estimation : une analyse documentée, terrain par terrain.',
                  alert: '⚠ Sans ça : un bail signé sur une zone morte.',
                  delay: '',
                },
                {
                  bg: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
                  badge: '02 — Dimensionnement',
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 20h20" /><path d="M5 20V8l5-5 5 5v12" /><path d="M9 20v-4h2v4" /><path d="M17 20V12l3-2v10" /></svg>,
                  title: 'Combien de terrains, pour quel budget réel ?',
                  desc: 'Nombre de terrains, format du club, budget d\'aménagement : calibrés sur les données réelles, pas sur l\'envie du porteur.',
                  alert: '⚠ Sans ça : un modèle surdimensionné qui ne passe pas en financement.',
                  delay: 'd1',
                },
                {
                  bg: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
                  badge: '03 — Séquencement',
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
                  title: 'Les décisions prises au bon moment.',
                  desc: 'Valider la zone avant le foncier, le foncier avant le plan, le plan avant les rendez-vous financiers. Chaque étape dans l\'ordre.',
                  alert: '⚠ Sans ça : des mois de retard et des interlocuteurs perdus.',
                  delay: 'd2',
                },
              ].map((card, i) => (
                <div key={i} className={`${styles.distCard} r ${card.delay}`}>
                  <div className={styles.distCardBg} style={{ backgroundImage: `url('${card.bg}')` }}></div>
                  <div className={styles.distCardContent}>
                    <div className={styles.distTopRow}>
                      <div className={styles.distIcon}>{card.icon}</div>
                      <div className={styles.distBadge}>{card.badge}</div>
                    </div>
                    <div className={styles.distTitle}>{card.title}</div>
                    <div className={styles.distDesc}>{card.desc}</div>
                    <div className={styles.distAlert}>{card.alert}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LES 4 ÉTAPES ── */}
        <section className={styles.etapes} id="methode">
          <div className="wrap">
            <div className={styles.etapesHead}>
              <div className="s-label r">La méthode</div>
              <h2 className="s-title r d1">Quatre étapes. Un cadre structuré.</h2>
              <p className="s-sub r d2" style={{ color: 'var(--text-dim)' }}>Chaque étape produit un livrable défini. Chaque livrable répond à un niveau d'exigence. Rien n'est laissé à l'interprétation.</p>
            </div>
            <div className={styles.etapesTrack}>
              {[
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></svg>,
                  title: 'Cadrage initial',
                  desc: 'Vous complétez un questionnaire structuré. On évalue la maturité du projet, le contexte, les conditions de faisabilité.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" /></svg>,
                  title: 'Appel de sélection',
                  desc: 'Un échange pour valider la cohérence du projet. Si les conditions ne sont pas réunies, on vous le dit clairement.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
                  title: 'Structuration',
                  desc: 'Audit, marché, foncier, dossier de financement. Chaque livrable a un calendrier, un format, un niveau d\'exigence.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" /></svg>,
                  title: 'Suivi & arbitrages',
                  desc: 'Un interlocuteur dédié pour ajuster, arbitrer, avancer. Pas de réunions sans objet, pas de reporting inutile.',
                },
              ].map((step, i) => (
                <div key={i} className={`${styles.eStep} r ${i > 0 ? `d${i}` : ''}`}>
                  <div className={styles.eIcon}>{step.icon}</div>
                  <div>
                    <div className={styles.eStepT}>{step.title}</div>
                    <div className={styles.eStepD}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className={styles.services} id="services">
          <div className="wrap">
            <div className={styles.servicesHead}>
              <div className="s-label r">L'accompagnement</div>
              <h2 className="s-title r d1">Un cadre global, activé selon votre avancement.</h2>
              <p className="s-sub r d2" style={{ color: 'var(--text-dim)' }}>Marché, foncier, financement, exploitation. Un seul accompagnement qui couvre l'ensemble du projet.</p>
            </div>
            <div className={styles.srvTrack}>
              {[
                {
                  cls: styles.srvStep1,
                  num: '1', tag: 'Point de départ', title: 'Audit & Diagnostic',
                  desc: 'On analyse votre zone, la concurrence locale et la faisabilité réelle du projet. Vous repartez avec un diagnostic clair : feu vert, ajustements nécessaires, ou stop.',
                  pills: ['Zone de chalandise', 'Concurrence locale', 'Faisabilité', 'Rapport de diagnostic'],
                },
                {
                  cls: styles.srvStep2,
                  num: '2', tag: 'Construction', title: 'Structuration du dossier',
                  desc: 'On rédige le business plan, on modélise le prévisionnel, on qualifie le foncier. Chaque pièce du dossier est construite pour passer devant un analyste bancaire.',
                  pills: ['Business plan', 'Prévisionnel financier', 'Recherche foncière', 'Dossier investisseurs'],
                },
                {
                  cls: styles.srvStep3,
                  num: '3', tag: 'Exécution', title: 'Suivi & Pilotage',
                  desc: 'On vous accompagne dans les rendez-vous, on arbitre avec vous les décisions clés et on coordonne les intervenants jusqu\'à la concrétisation du projet.',
                  pills: ['Interlocuteur dédié', 'Suivi régulier', 'Arbitrages', 'Coordination'],
                },
              ].map((step, i) => (
                <div key={i} className={`${styles.srvStep} ${step.cls} r ${i > 0 ? `d${i}` : ''}`}>
                  <div className={styles.srvNum}>{step.num}</div>
                  <div className={styles.srvStepTop}>
                    <div className={styles.srvStepTag}>{step.tag}</div>
                    <div className={styles.srvTitle}>{step.title}</div>
                  </div>
                  <div className={styles.srvDesc}>{step.desc}</div>
                  <div className={styles.srvPills}>
                    {step.pills.map(p => <span key={p} className={styles.srvPill}>{p}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <p className="r d3" style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-dim)', marginTop: '32px' }}>L'appel de sélection est gratuit. Il permet de valider ensemble si un accompagnement est pertinent.</p>
          </div>
        </section>

        {/* ── SÉLECTION ── */}
        <section className={styles.selection} id="selection">
          <div className="wrap">
            <div className={styles.selectionHead}>
              <div className="s-label r">Sélection</div>
              <h2 className="s-title r d1">Un accompagnement sélectif.<br />Et c'est assumé.</h2>
              <p className="s-sub r d2" style={{ color: 'var(--text-dim)' }}>Nous ne travaillons pas avec tous les porteurs qui nous contactent. C'est ce qui garantit le niveau de chaque dossier produit.</p>
            </div>
            <div className={styles.selGrid}>
              <div className={`${styles.selCol} ${styles.selColY} r`}>
                <div className={styles.selColT}>On travaille bien ensemble si…</div>
                <ul>
                  <li>Projet réel, pas une simple idée</li>
                  <li>Une décision financière est envisagée</li>
                  <li>Un arbitrage stratégique doit être pris</li>
                  <li>Temps alloué chaque semaine au projet</li>
                </ul>
              </div>
              <div className={`${styles.selCol} ${styles.selColN} r d1`}>
                <div className={styles.selColT}>Ce qu'on ne fait pas.</div>
                <ul>
                  <li>Projets exploratoires sans implication réelle</li>
                  <li>Promesses d'obtention de financement</li>
                  <li>Remplacement d'expert-comptable, avocat ou architecte</li>
                  <li>Urgence sans cadre ni calendrier défini</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUI SOMMES-NOUS ── */}
        <section className={styles.histoire} id="equipe">
          <div className="wrap">
            <div className={styles.histoireLayout}>
              <div className={styles.histoireHead}>
                <div className="s-label r">Qui sommes-nous</div>
              </div>
              <div className={`${styles.histoireText} r d1`}>
                <p>On n'est pas arrivés dans le padel par hasard. Avant PadelProgram, on était <strong>apporteurs d'affaires pour des fournisseurs de terrains de padel</strong>. On a vu le marché de l'intérieur : les constructeurs, les exploitants, les projets qui passent, et ceux qui échouent.</p>
                <p>Ce qu'on a constaté, projet après projet : <strong>des porteurs de projets livrés à eux-mêmes</strong>. Des études bâclées, des business plans qui ne tiennent pas face à un analyste, des fonciers mal qualifiés. Des projets solides qui tombent, pas par manque d'ambition, mais par manque de méthode.</p>
                <p>On a créé PadelProgram pour ça : <strong>être à côté du porteur de projet</strong>, jusqu'à l'ouverture. Pas un prestataire. Un co-pilote.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={styles.faq} id="faq">
          <div className="wrap">
            <div className={styles.faqHead}>
              <div className="s-label r">FAQ</div>
              <h2 className="s-title r d1">Questions fréquentes.</h2>
            </div>
            <FAQ items={faqItems} />
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className={styles.ctaEnd}>
          <div className="wrap">
            <div className="text-cap mx-auto">
              <h2 className="s-title r">Si une décision structurante approche,<br />parlons-en avant qu'elle ne soit prise.</h2>
              <div className="r d1" style={{ marginTop: '44px' }}>
                <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Réserver votre appel de sélection <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Sticky mobile CTA */}
      <div className={styles.stickyM} id="stk" aria-hidden="true">
        <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">Réserver un appel ↗</a>
      </div>
    </>
  )
}
