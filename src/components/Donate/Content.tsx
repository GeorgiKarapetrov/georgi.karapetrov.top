'use client';

import Markdown from 'markdown-to-jsx';

interface DonateContentProps {
  markdown: string;
}

export default function DonateContent({ markdown }: DonateContentProps) {
  return (
    <article className="donate-content">
      <Markdown>{markdown}</Markdown>
    </article>
  );
}
