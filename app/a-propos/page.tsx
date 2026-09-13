import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'À propos  Pretari',
  description: 'Pretari, une jeune agence de design et d\u2019ingénierie logicielle basée à Port-au-Prince.',
};

export default function APropos() {
  return (
    <>
      <section className={styles.pageBanner}>
        <div className="container">
          <span className="label">À propos</span>
          <h1 className="titleXl">Une agence pensée pour durer.</h1>
          <p className="body">
            Pretari est une jeune agence de design et d'ingénierie logicielle, construite autour d'une conviction simple : ces deux disciplines ne devraient jamais être séparées.
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <span className="label">Notre histoire</span>
              <h2 className="titleLg">Récente, mais exigeante.</h2>
            </div>
            <div>
              <p className="body">
                Nous sommes une équipe jeune, sans un long historique de clients  mais avec une exigence technique et créative digne des plus grandes agences. Nous travaillons avec des technologies de pointe à chaque étape, du premier prototype jusqu'au déploiement final.
              </p>
              <p className="body">
                Basés à Port-au-Prince, nous accompagnons institutions, entreprises et professionnels qui veulent construire juste, dès le départ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <span className="label">Nos valeurs</span>
          <h2 className="titleLg">Ce qui guide notre travail.</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <span className="label">01</span>
              <h3 className="titleMd">Rigueur</h3>
              <p className="bodySm">Chaque décision, technique ou visuelle, est pensée et justifiée.</p>
            </div>
            <div className={styles.valueItem}>
              <span className="label">02</span>
              <h3 className="titleMd">Curiosité technique</h3>
              <p className="bodySm">Nous suivons de près les outils et pratiques les plus récents.</p>
            </div>
            <div className={styles.valueItem}>
              <span className="label">03</span>
              <h3 className="titleMd">Transparence</h3>
              <p className="bodySm">Une communication claire, à chaque étape du projet.</p>
            </div>
            <div className={styles.valueItem}>
              <span className="label">04</span>
              <h3 className="titleMd">Excellence</h3>
              <p className="bodySm">Nous visons un niveau de qualité qui dépasse notre taille.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className="container">
          <span className="label">L'équipe</span>
          <h2 className="titleLg">Direction technique</h2>
          <div className={styles.teamCard}>
            <h3 className="titleMd">Christopher Lyns Wilson</h3>
<span className="label">CTO</span>
            <p className="bodySm">
              Pilote les choix technologiques et l'architecture de chaque projet.
            </p>
            <a href="mailto:christauxer@gmail.com" className={styles.teamEmail}>
              christauxer@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className="titleLg">Faisons connaissance.</h2>
          <p className="body">Parlons de votre projet, même si ce n'est encore qu'une idée.</p>
          <Link href="/contact" className="btn btnPrimary">Contactez-nous</Link>
        </div>
      </section>
    </>
  );
}
