import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <Link href="/" className="logo">
          <Image
            src="/logomost.svg"
            alt="Pretari"
            width={160}
            height={40}
            priority
            className="logoFull"
          />
          <Image
            src="/logoleast.svg"
            alt="Pretari"
            width={40}
            height={40}
            priority
            className="logoMinimal"
          />
        </Link>
        <nav className="nav">
          <Link href="/travaux">Travaux</Link>
          <Link href="/services">Services</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="headerCta">
          <Link href="/contact" className="btn btnPrimary">
            Discutons
          </Link>
        </div>
      </div>
    </header>
  );
}
