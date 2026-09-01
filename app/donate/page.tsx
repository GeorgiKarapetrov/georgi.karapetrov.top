import type { Metadata } from 'next';

import DonateContent from '@/components/Donate/Content';
import PageWrapper from '@/components/Template/PageWrapper';
import { donateMarkdown } from '@/data/donate';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Donate',
  description: 'Support my work with a crypto donation (Bitcoin or Monero).',
  path: '/donate/',
});

export default function DonatePage() {
  return (
    <PageWrapper>
      <section className="donate-page">
        <header className="donate-header">
          <h1 className="page-title">Donate</h1>
          <p className="page-subtitle">
            If my work has been useful to you, you can support it with a crypto
            donation.
          </p>
        </header>
        <DonateContent markdown={donateMarkdown} />
      </section>
    </PageWrapper>
  );
}
