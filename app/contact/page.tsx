import styles from './page.module.css';

export const metadata = {
  title: 'Contact  Pretari',
  description: 'Contactez Pretari par email ou téléphone. Basés à Port-au-Prince, Haïti.',
};

export default function Contact() {
  return (
    <>
      <section className={styles.pageBanner}>
        <div className="container">
          <span className="label">Contact</span>
          <h1 className="titleXl">Parlons de votre projet.</h1>
          <p className="body">
            Une question, une idée, un projet à démarrer ? Écrivez-nous ou appelez-nous directement.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            <a href="mailto:pretaristudio@gmail.com" className={styles.contactCard}>
              <span className="label">Email</span>
              <h3 className="titleMd">pretaristudio@gmail.com</h3>
              <p className="bodySm">Pour toute demande générale ou nouveau projet.</p>
            </a>

            <a href="mailto:christauxer@gmail.com" className={styles.contactCard}>
              <span className="label">Direction technique (CTO)</span>
              <h3 className="titleMd">christauxer@gmail.com</h3>
              <p className="bodySm">Pour les questions techniques et l'architecture produit.</p>
            </a>

            <div className={styles.contactCard}>
              <span className="label">Téléphone</span>
              <h3 className="titleMd"><a href="tel:+50955195193">+509 5519-5193</a></h3>
              <h3 className="titleMd"><a href="tel:+50936306762">+509 3630-6762</a></h3>
            </div>

            <div className={styles.contactCard}>
              <span className="label">Adresse</span>
              <h3 className="titleMd">Port-au-Prince, Haïti</h3>
              <p className="bodySm">Nous travaillons avec des clients partout dans le monde.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
