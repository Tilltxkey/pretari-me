import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Travaux  Pretari',
  description: 'Ce que Pretari sait construire : applications web, plateformes SaaS, design de produit et plus.',
};

export default function Travaux() {
  return (
    <>
      <section className={styles.pageBanner}>
        <div className="container">
          <span className="label">Expertise</span>
          <h1 className="titleXl">Ce que nous savons construire.</h1>
          <p className="body">
            Nous sommes une jeune agence  mais notre équipe conçoit et développe avec des technologies de pointe, du premier trait au déploiement final.
          </p>
        </div>
      </section>

      <section className={styles.capabilities}>
        <div className="container">
          <div className={styles.capGrid}>
            <div className={styles.capItem}>
              <span className="label">01</span>
              <h3 className="titleMd">Applications web sur mesure</h3>
              <p className="bodySm">Des plateformes rapides, robustes, pensées pour évoluer avec votre activité.</p>
            </div>
            <div className={styles.capItem}>
              <span className="label">02</span>
              <h3 className="titleMd">Plateformes SaaS</h3>
              <p className="bodySm">Des architectures cloud-natives, multi-utilisateurs, prêtes à grandir.</p>
            </div>
            <div className={styles.capItem}>
              <span className="label">03</span>
              <h3 className="titleMd">Sites vitrines &amp; e-commerce</h3>
              <p className="bodySm">Des sites rapides, soignés et optimisés pour convertir.</p>
            </div>
            <div className={styles.capItem}>
              <span className="label">04</span>
              <h3 className="titleMd">Automatisation &amp; IA</h3>
              <p className="bodySm">Des workflows intelligents qui vous font gagner un temps précieux.</p>
            </div>
            <div className={styles.capItem}>
              <span className="label">05</span>
              <h3 className="titleMd">Design de produit (UI/UX)</h3>
              <p className="bodySm">Des interfaces intuitives, construites autour de vos utilisateurs.</p>
            </div>
            <div className={styles.capItem}>
              <span className="label">06</span>
              <h3 className="titleMd">Applications mobiles</h3>
              <p className="bodySm">Des expériences fluides et cohérentes sur iOS et Android.</p>
            </div>
            <div className={styles.capItem}>
              <span className="label">07</span>
              <h3 className="titleMd">Architecture cloud &amp; DevOps</h3>
              <p className="bodySm">Une infrastructure scalable, sécurisée et bien pensée dès le départ.</p>
            </div>
            <div className={styles.capItem}>
              <span className="label">08</span>
              <h3 className="titleMd">Identité de marque</h3>
              <p className="bodySm">Une voix visuelle forte et cohérente sur tous vos points de contact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.honesty}>
        <div className="container">
          <p className={styles.honestyText}>
            Nous n'avons pas encore un long historique de projets  mais nous avons l'exigence, la curiosité technique et les outils pour livrer un travail à la hauteur des plus grandes équipes.
          </p>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className="titleLg">Un projet en tête ?</h2>
          <p className="body">Discutons de ce que nous pouvons construire ensemble.</p>
          <Link href="/contact" className="btn btnPrimary">Contactez-nous</Link>
        </div>
      </section>
    </>
  );
}
