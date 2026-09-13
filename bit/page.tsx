import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a href="#" className={styles.logo}>
            <Image
              src="/logomost.svg"
              alt="Pretari"
              width={160}
              height={40}
              priority
              className={styles.logoFull}
            />
            <Image
              src="/logoleast.svg"
              alt="Pretari"
              width={40}
              height={40}
              priority
              className={styles.logoMinimal}
            />
          </a>
          <nav className={styles.nav}>
            <a href="#work">Travaux</a>
            <a href="#services">Services</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className={styles.headerCta}>
            <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
              Discutons
            </a>
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <span className={styles.label}>Design &amp; Ingénierie logicielle</span>
            <h1 className={styles.titleXl}>
              Le design rencontre<br />l'ingénierie.
            </h1>
            <p className={styles.body}>
              Nous concevons et développons des produits numériques sur mesure, du concept au code.
            </p>
            <a href="#work" className={styles.btn}>
              Voir nos réalisations →
            </a>
            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className={styles.label}>Fondée</span>
                <div className={styles.number}>2020</div>
              </div>
              <div className={styles.heroMetaItem}>
                <span className={styles.label}>Projets</span>
                <div className={styles.number}>150+</div>
              </div>
              <div className={styles.heroMetaItem}>
                <span className={styles.label}>Partenaires</span>
                <div className={styles.number}>60+</div>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <video
              className={styles.heroVideo}
              src="/hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <span className={styles.badge}>Design · Ingénierie · Stratégie</span>
          </div>
        </div>
      </section>

      {/* ─── CLIENTS MARQUEE ─── */}
      <section className={styles.clients}>
        <div className={styles.container}>
          <div className={styles.clientsTrack}>
            <div className={styles.clientsInner}>
              <span>Institutions</span>
              <span>Entreprises</span>
              <span>Startups</span>
              <span>Professionnels</span>
              <span>Particuliers</span>
              <span>ONG</span>
              <span>Institutions</span>
              <span>Entreprises</span>
              <span>Startups</span>
              <span>Professionnels</span>
              <span>Particuliers</span>
              <span>ONG</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WORK ─── */}
      <section className={styles.work} id="work">
        <div className={styles.container}>
          <div className={styles.workHeader}>
            <h2 className={styles.titleLg}>Réalisations</h2>
            <p className={styles.body}>
              Chaque projet allie stratégie, forme et fonction.
            </p>
          </div>
          <div className={styles.workGrid}>
            <div className={styles.workItem}>
              <div className={styles.thumb}>
                <div className={styles.thumbOverlay}>
                  <span>Voir le projet</span>
                </div>
              </div>
              <h3 className={styles.titleMd}>Identité institutionnelle</h3>
              <p className={styles.bodySm}>
                Langage visuel et signalétique pour un centre de recherche international.
              </p>
              <span className={styles.tag}>Marque</span>
            </div>
            <div className={styles.workItem}>
              <div className={styles.thumb}>
                <div className={styles.thumbOverlay}>
                  <span>Voir le projet</span>
                </div>
              </div>
              <h3 className={styles.titleMd}>Plateforme numérique</h3>
              <p className={styles.bodySm}>
                Logiciel sur mesure pour une institution financière de premier plan.
              </p>
              <span className={styles.tag}>Ingénierie</span>
            </div>
            <div className={styles.workItem}>
              <div className={styles.thumb}>
                <div className={styles.thumbOverlay}>
                  <span>Voir le projet</span>
                </div>
              </div>
              <h3 className={styles.titleMd}>Portail culturel</h3>
              <p className={styles.bodySm}>
                Archive interactive pour un musée national.
              </p>
              <span className={styles.tag}>Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className={styles.services} id="services">
        <div className={styles.container}>
          <span className={styles.label}>Ce que nous faisons</span>
          <h2 className={styles.titleLg}>
            Design &amp; ingénierie,<br />une seule voix.
          </h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <span className={styles.label}>01</span>
              <h3 className={styles.titleMd}>Identité</h3>
              <p className={styles.bodySm}>
                Stratégie de marque et systèmes visuels pour une voix distincte.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.label}>02</span>
              <h3 className={styles.titleMd}>Produit</h3>
              <p className={styles.bodySm}>
                Du concept au lancement  logiciels et plateformes conçus avec rigueur.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.label}>03</span>
              <h3 className={styles.titleMd}>Expérience</h3>
              <p className={styles.bodySm}>
                Des interfaces intuitives, pensées dans le moindre détail.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.label}>04</span>
              <h3 className={styles.titleMd}>Stratégie</h3>
              <p className={styles.bodySm}>
                Recherche et feuilles de route pour aligner vision et exécution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / CTA ─── */}
      <section className={styles.aboutCta} id="about">
        <div className={`${styles.container} ${styles.aboutCtaGrid}`}>
          <div>
            <span className={styles.label}>À propos</span>
            <h2 className={styles.titleLg}>
              Une agence pensée<br />pour durer.
            </h2>
            <p className={styles.body}>
              Nous travaillons avec des institutions et entreprises qui valorisent la clarté et la qualité. Designers, ingénieurs et stratèges y partagent un langage commun.
            </p>
            <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
              Démarrer un projet
            </a>
            <div className={styles.statGrid}>
              <div className={styles.statItem}>
                <div className={styles.number}>12+</div>
                <span className={styles.label}>Années</span>
              </div>
              <div className={styles.statItem}>
                <div className={styles.number}>60+</div>
                <span className={styles.label}>Partenaires</span>
              </div>
            </div>
          </div>
          <div className={styles.aboutVisual}>
            <Image
              src="/about-photo.jpeg"
              alt="L'équipe Pretari au travail"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.aboutPhoto}
            />
            <div className={styles.aboutVisualContent}>
              <Image
                src="/logoleast.svg"
                alt="Pretari"
                width={80}
                height={80}
                className={styles.aboutLogo}
              />
              <span>PAP · HTI</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className={styles.footer} id="contact">
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <a href="#" className={styles.logo}>
                <Image
                  src="/logomost.svg"
                  alt="Pretari"
                  width={160}
                  height={40}
                  className={styles.footerLogo}
                />
              </a>
              <p className={styles.bodySm}>
                Design et ingénierie logicielle pour ceux qui exigent la qualité.
              </p>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.label}>Travaux</span>
              <a href="#">Identité</a>
              <a href="#">Produit</a>
              <a href="#">Expérience</a>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.label}>Agence</span>
              <a href="#">À propos</a>
              <a href="#">Carrières</a>
              <a href="#">Contact</a>
            </div>
            <div className={styles.footerCol}>
              <span className={styles.label}>Suivez-nous</span>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">X</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>&copy; 2026 Pretari  Tous droits réservés</span>
            <span>Port-au-Prince · Haïti</span>
          </div>
        </div>
      </footer>
    </>
  );
}