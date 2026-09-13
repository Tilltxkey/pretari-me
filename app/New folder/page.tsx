import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <span className="label">Design &amp; Ingénierie logicielle</span>
            <h1 className="titleXl">
              Le design rencontre<br />l'ingénierie.
            </h1>
            <p className="body">
              Nous concevons et développons des produits numériques sur mesure, du concept au code.
            </p>
            <Link href="/travaux" className="btn">
              Voir nos réalisations →
            </Link>
            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className="label">Approche</span>
                <div className={styles.number}>Sur-mesure</div>
              </div>
              <div className={styles.heroMetaItem}>
                <span className="label">Stack</span>
                <div className={styles.number}>Nouvelle génération</div>
              </div>
              <div className={styles.heroMetaItem}>
                <span className="label">Accompagnement</span>
                <div className={styles.number}>De bout en bout</div>
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
        <div className="container">
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

      {/* ─── WORK PREVIEW ─── */}
      <section className={styles.work}>
        <div className="container">
          <div className={styles.workHeader}>
            <h2 className="titleLg">Ce que nous savons faire</h2>
            <p className="body">
              Une jeune agence, une exigence de haut niveau  portée par des technologies de pointe à chaque étape.
            </p>
          </div>
          <div className={styles.workGrid}>
            <div className={styles.workItem}>
              <div className={styles.thumb}>
                <div className={styles.thumbOverlay}>
                  <span>En savoir plus</span>
                </div>
              </div>
              <h3 className="titleMd">Applications web sur mesure</h3>
              <p className="bodySm">
                Des produits rapides, robustes et pensés pour évoluer avec vous.
              </p>
              <span className={styles.tag}>Produit</span>
            </div>
            <div className={styles.workItem}>
              <div className={styles.thumb}>
                <div className={styles.thumbOverlay}>
                  <span>En savoir plus</span>
                </div>
              </div>
              <h3 className="titleMd">Design de produit</h3>
              <p className="bodySm">
                Des interfaces intuitives, construites autour de vos utilisateurs.
              </p>
              <span className={styles.tag}>Design</span>
            </div>
            <div className={styles.workItem}>
              <div className={styles.thumb}>
                <div className={styles.thumbOverlay}>
                  <span>En savoir plus</span>
                </div>
              </div>
              <h3 className="titleMd">Automatisation &amp; IA</h3>
              <p className="bodySm">
                Des workflows intelligents pour gagner un temps précieux.
              </p>
              <span className={styles.tag}>Innovation</span>
            </div>
          </div>
          <div className={styles.sectionLinkWrap}>
            <Link href="/travaux" className="btn">Voir toute notre expertise →</Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className={styles.services}>
        <div className="container">
          <span className="label">Ce que nous faisons</span>
          <h2 className="titleLg">
            Design &amp; ingénierie,<br />une seule voix.
          </h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <span className="label">01</span>
              <h3 className="titleMd">Identité</h3>
              <p className="bodySm">
                Stratégie de marque et systèmes visuels pour une voix distincte.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <span className="label">02</span>
              <h3 className="titleMd">Produit</h3>
              <p className="bodySm">
                Du concept au lancement  logiciels et plateformes conçus avec rigueur.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <span className="label">03</span>
              <h3 className="titleMd">Expérience</h3>
              <p className="bodySm">
                Des interfaces intuitives, pensées dans le moindre détail.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <span className="label">04</span>
              <h3 className="titleMd">Stratégie</h3>
              <p className="bodySm">
                Recherche et feuilles de route pour aligner vision et exécution.
              </p>
            </div>
          </div>
          <div className={styles.sectionLinkWrap}>
            <Link href="/services" className="btn">Voir tous nos services →</Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / CTA ─── */}
      <section className={styles.aboutCta}>
        <div className={`container ${styles.aboutCtaGrid}`}>
          <div>
            <span className="label">À propos</span>
            <h2 className="titleLg">
              Une agence pensée<br />pour durer.
            </h2>
            <p className="body">
              Nous travaillons avec des institutions et entreprises qui valorisent la clarté et la qualité. Designers, ingénieurs et stratèges y partagent un langage commun.
            </p>
            <Link href="/contact" className="btn btnPrimary">
              Démarrer un projet
            </Link>
            <div className={styles.statGrid}>
              <div className={styles.statItem}>
                <div className={styles.number}>4</div>
                <span className="label">Disciplines</span>
              </div>
              <div className={styles.statItem}>
                <div className={styles.number}>100%</div>
                <span className="label">Sur-mesure</span>
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
    </>
  );
}
