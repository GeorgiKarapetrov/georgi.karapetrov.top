import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Georgi Karapetrov</h2>
        <p>
          <a href="mailto:Georgi.D.Karapetrov@gmail.com">Georgi.D.Karapetrov@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Call me George. I like building things.
        A <a href="https://www.kuleuven.be/english/">KUL</a> graduate, <a href="https://www.uni-sofia.bg/eng">SU</a> Alumni, and a <a href="https://www.sap.com/about/company/innovation/labs.html">SAP Labs</a> employee. Before SAP I was
        at <a href="https://www.VMWare.com/">VMWare</a>
        , <a href="https://www.sciant.com/">Sciant</a>
        , <a href="https://www.microfocus.com/en-us/home">Micro Focus</a>
        , <a href="https://www.eta.bg/">Eta</a>
        , <a href="https://www.concentrix.com/">Concentrix </a>
        and <a href="https://www.bssofia.bg/">The British School of Sofia</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Georgi Karapetrov <Link to="/">georgi.karapetrov.top</Link>
      </p>
    </section>
  </section>
);

export default SideBar;
