import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Georgi Karapetrov</span>
        </h1>

        <p className="hero-tagline">
          Platform Engineer at{' '}
          <a href="https://www.sap.com/" className="hero-highlight">
            SAP Labs
          </a>
          . Systems engineer and FOSS enthusiast.
          <br />
          Mathematician dabbling in physics.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Platform Engineering</span>
          <span className="hero-chip">DevOps</span>
          <span className="hero-chip">M.S. Mathematics KU Leuven</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
