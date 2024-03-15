import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Georgi Karapetrov's personal website."
      + 'Technology consultant, DevOps engineer and a mathematician dabbling in physics.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">Georgi Karapetrov</Link>
          </h2>
          <p>
            Technology Consultant
          </p>
          <p>
            Software Engineer
          </p>
          <p>
            DevOps & SRE
          </p>
        </div>
      </header>
      <h1>Welcome to my website</h1>
      <p>
        {' '}
        You can read {' '}
        <Link to="/about">about me</Link>,
        <br />check out{' '}
        <Link to="/resume">my resume</Link>,{' '}
        <br /> view <Link to="/stats">site statistics</Link>,
        <br />or{' '} <Link to="/contact">contact me</Link>.
      </p>
      {/*
      <p>
        {' '}
        Source available{' '}
         on <a href="https://github.com/GeorgiKarapetrov/georgi.karapetrov.top">GitHub</a>.
      </p>
      */}
    </article>
  </Main>
);

export default Index;
