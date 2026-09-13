import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          <div className="footerBrand">
            <Link href="/" className="logo">
              <Image
                src="/logomost.svg"
                alt="Pretari"
                width={160}
                height={40}
              />
            </Link>
            <p className="bodySm">
              Design et ingénierie logicielle pour ceux qui exigent la qualité.
            </p>
          </div>
          <div className="footerCol">
            <span className="label">Services</span>
            <Link href="/services#identite">Identité</Link>
            <Link href="/services#produit">Produit</Link>
            <Link href="/services#experience">Expérience</Link>
            <Link href="/services#strategie">Stratégie</Link>
          </div>
          <div className="footerCol">
            <span className="label">Agence</span>
            <Link href="/a-propos">À propos</Link>
            <Link href="/travaux">Travaux</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footerCol">
            <span className="label">Suivez-nous</span>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </div>
        <div className="footerBottom">
          <span>&copy; 2026 Pretari  Tous droits réservés</span>
          <span>Port-au-Prince · Haïti</span>
        </div>
      </div>
    </footer>
  );
}
