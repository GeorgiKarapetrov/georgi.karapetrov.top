import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Georgi Karapetrov's personal we site. Technology consultant, DevOps engineer and a mathematician dabbling in physics."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/about">Georgi Karapetrov</Link></h2>
          <p>
            Technology Consultant
          </p>
        </div>
      </header>
      <h1>Welcome</h1>
      <p><br />You can <Link to="/about">read about me</Link>,
        <br />
        <Link to="/resume">check out my resume</Link>,
        {/*
        <Link to="/projects">projects</Link>,
        */}
        <br /><Link to="/stats">view some statistics</Link>,
        <br />or <Link to="/contact">contact me</Link>.
      </p>
      {/*
      <p> Source available  on <a href="https://github.com/GeorgiKarapetrov/georgi.karapetrov.top">GitHub</a>.</p>
      */}
    </article>
  </Main>
);

export default Index;
