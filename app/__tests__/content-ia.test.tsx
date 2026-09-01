import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { getWritingItems } from '@/lib/writing';
import HomePage from '../page';
import WritingPage from '../writing/page';

describe('writing information architecture', () => {
  it('does not surface a writing section on the homepage', () => {
    render(<HomePage />);

    // Writing is intentionally delisted from the homepage.
    expect(
      screen.queryByRole('region', { name: 'Latest writing' }),
    ).not.toBeInTheDocument();
  });

  it('groups owned essays and external articles under real headings', () => {
    const { container } = render(<WritingPage />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'Essays on this site' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Selected writing elsewhere',
      }),
    ).toBeInTheDocument();

    // The Guides heading only renders when undated guide entries exist.
    const hasGuides = getWritingItems().some(
      (item) => item.isExternal && !item.date,
    );
    expect(
      screen.queryByRole('heading', { level: 2, name: 'Guides' }) !== null,
    ).toBe(hasGuides);

    expect(container.querySelectorAll('.writing-item h3')).toHaveLength(
      getWritingItems().length,
    );
  });

  it('features exactly the newest dated item, wherever it is grouped', () => {
    const newest = getWritingItems().find((item) => item.date);
    const { container } = render(<WritingPage />);
    const featured = container.querySelectorAll('.writing-item--featured');

    expect(featured).toHaveLength(1);
    // Next normalises the rendered href; compare without a trailing slash so
    // the assertion does not depend on that detail.
    const stripSlash = (value: string | null | undefined) =>
      (value ?? '').replace(/\/$/, '');
    expect(stripSlash(featured[0]?.getAttribute('href'))).toBe(
      stripSlash(newest?.url),
    );
  });

  it('shows provenance beside every external-link arrow', () => {
    const externalItems = getWritingItems().filter((item) => item.isExternal);
    const { container } = render(<WritingPage />);
    const externalLinks = [
      ...container.querySelectorAll('a.writing-item[target="_blank"]'),
    ];

    expect(externalLinks).toHaveLength(externalItems.length);
    externalLinks.forEach((link, index) => {
      expect(link.querySelector('.writing-source')).toHaveTextContent(
        externalItems[index].source,
      );
      expect(link.querySelector('.writing-external')).toHaveTextContent('↗');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link.querySelector('.sr-only')).toHaveTextContent(
        'opens in a new tab',
      );
    });
  });
});
