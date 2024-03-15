import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Donate = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/donate.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  return (
    <Main
      title="Donate"
      description="Donate Crypto"
    >
      <article className="post markdown" id="donate">
        <header>
          <div className="title">
            <h2><Link to="/donate">Donate</Link></h2>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Donate;
