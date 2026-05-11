import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Donate',
  description: 'Donate Crypto',
  path: '/donate/',
});

export default function DonatePage() {
  return (
    <PageWrapper>
      <article className="post" id="donate">
        <header>
          <div className="title">
            <h2>
              <Link href="/donate">Donate</Link>
            </h2>
          </div>
        </header>

        <section style={{ marginBottom: '2rem' }}>
          <h4>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/coin/BTC.jpg"
              alt="BTC"
              style={{ maxWidth: 32, verticalAlign: 'middle', marginRight: 8 }}
            />{' '}
            Bitcoin
          </h4>
          <pre>
            <code>bc1q6k5da7ngw5cvjyhc0xsgnz98x9s6eyew0dwyzh</code>
          </pre>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/coin/BitCoinQR.jpg" alt="Bitcoin QR code" />
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h4>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/coin/XMR.jpg"
              alt="XMR"
              style={{ maxWidth: 32, verticalAlign: 'middle', marginRight: 8 }}
            />{' '}
            Monero
          </h4>
          <pre>
            <code>
              4BB6hC5oq1fhzSFmgTWdaPKGQeZRh4hNLTMGT9PNKa1agiBGWEDmVL66TUzrvoWvmP3jLRbbVGRrSUXrkndXgFhQQN2QCnR
            </code>
          </pre>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/coin/MoneroQR.jpg" alt="Monero QR code" />
        </section>
      </article>
    </PageWrapper>
  );
}