import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Services  Pretari',
  description: 'Identité, produit, expérience et stratégie  quatre disciplines, une seule équipe.',
};

export default function Services() {
  return (
    <>
      <section className={styles.pageBanner}>
        <div className="container">
          <span className="label">Services</span>
          <h1 className="titleXl">Design &amp; ingénierie, une seule voix.</h1>
          <p className="body">
            Quatre disciplines, une seule équipe  pour porter un produit du premier concept jusqu'à son lancement.
          </p>
        </div>
      </section>

      <section className={styles.pillars}>
        <div className="container">
          <div id="identite" className={styles.pillar}>
            <span className="label">01</span>
            <h2 className="titleLg">Identité</h2>
            <p className="body">
              Stratégie de marque et systèmes visuels pour une voix distincte, cohérente sur tous vos points de contact.
            </p>
            <ul className={styles.pillarList}>
              <li>Stratégie de marque</li>
              <li>Systèmes visuels</li>
              <li>Direction artistique</li>
              <li>Contenu &amp; narration</li>
            </ul>
          </div>

          <div id="produit" className={styles.pillar}>
            <span className="label">02</span>
            <h2 className="titleLg">Produit</h2>
            <p className="body">
              Du concept au lancement  logiciels et plateformes conçus avec rigueur, prêts à évoluer.
            </p>
            <ul className={styles.pillarList}>
              <li>Applications web</li>
              <li>Plateformes SaaS</li>
              <li>APIs &amp; intégrations</li>
              <li>Maintenance &amp; support</li>
            </ul>
          </div>

          <div id="experience" className={styles.pillar}>
            <span className="label">03</span>
            <h2 className="titleLg">Expérience</h2>
            <p className="body">
              Des interfaces intuitives, pensées dans le moindre détail, autour de vos utilisateurs réels.
            </p>
            <ul className={styles.pillarList}>
              <li>UI / UX design</li>
              <li>Prototypage</li>
              <li>Design systems</li>
              <li>Tests utilisateurs</li>
            </ul>
          </div>

          <div id="strategie" className={styles.pillar}>
            <span className="label">04</span>
            <h2 className="titleLg">Stratégie</h2>
            <p className="body">
              Recherche et feuilles de route pour aligner vision produit et exécution technique.
            </p>
            <ul className={styles.pillarList}>
              <li>Recherche &amp; positionnement</li>
              <li>Feuilles de route produit</li>
              <li>Architecture technique</li>
              <li>Conseil technologique</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <span className="label">Notre process</span>
          <h2 className="titleLg">Une méthode claire, à chaque étape.</h2>
          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <span className="label">01</span>
              <h3 className="titleMd">Découverte</h3>
              <p className="bodySm">Comprendre vos objectifs, vos contraintes et vos utilisateurs.</p>
            </div>
            <div className={styles.processItem}>
              <span className="label">02</span>
              <h3 className="titleMd">Design</h3>
              <p className="bodySm">Explorer, prototyper et valider avant d'écrire la moindre ligne de code.</p>
            </div>
            <div className={styles.processItem}>
              <span className="label">03</span>
              <h3 className="titleMd">Développement</h3>
              <p className="bodySm">Construire avec des technologies modernes, testées et documentées.</p>
            </div>
            <div className={styles.processItem}>
              <span className="label">04</span>
              <h3 className="titleMd">Lancement &amp; suivi</h3>
              <p className="bodySm">Déployer, mesurer et faire évoluer le produit dans la durée.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className="titleLg">Envie d'en discuter ?</h2>
          <p className="body">Parlons de votre projet et de la meilleure façon de l'aborder.</p>
          <Link href="/contact" className="btn btnPrimary">Contactez-nous</Link>
        </div>
      </section>
    </>
  );
}
