import type { Metadata } from 'next';

import AboutContent from '@/components/About/Sections';
import PageWrapper from '@/components/Template/PageWrapper';
import { aboutMarkdown } from '@/data/about';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn about Georgi Karapetrov - Platform Engineer at SAP Labs, systems engineer, mathematician, and FOSS enthusiast.',
  path: '/about/',
});

function wordCount(markdown: string): number {
  return markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;
}

export default function AboutPage() {
  const count = wordCount(aboutMarkdown);

  return (
    <PageWrapper mainClassName="page-main--wide">
      <section className="about-page">
        <header className="about-header">
          <h1 className="page-title">About</h1>
          <p className="about-wordcount">(in about {count} words)</p>
        </header>
        <AboutContent markdown={aboutMarkdown} />
      </section>
    </PageWrapper>
  );
}
