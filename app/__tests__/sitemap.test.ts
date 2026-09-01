import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';
import sitemap from '../sitemap';

describe('sitemap', () => {
  it('uses trailing slashes for exported page routes', () => {
    const entries = sitemap();

    expect(entries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ url: `${SITE_URL}/` }),
        expect.objectContaining({ url: `${SITE_URL}/about/` }),
        expect.objectContaining({ url: `${SITE_URL}/resume/` }),
        expect.objectContaining({ url: `${SITE_URL}/projects/` }),
        expect.objectContaining({ url: `${SITE_URL}/writing/` }),
        expect.objectContaining({ url: `${SITE_URL}/stats/` }),
        expect.objectContaining({ url: `${SITE_URL}/contact/` }),
        expect.objectContaining({ url: `${SITE_URL}/donate/` }),
      ]),
    );
  });

  it('does not invent modification dates for static pages', () => {
    const staticEntries = sitemap().filter(
      (entry) => !entry.url.startsWith(`${SITE_URL}/writing/`),
    );

    expect(
      staticEntries.every((entry) => entry.lastModified === undefined),
    ).toBe(true);
  });

  it('does not invent modification dates for static pages', () => {
    const staticEntries = sitemap().filter(
      (entry) => !entry.url.startsWith(`${SITE_URL}/writing/`),
    );

    expect(
      staticEntries.every((entry) => entry.lastModified === undefined),
    ).toBe(true);
  });

  it('uses trailing slashes for any post routes', () => {
    const entries = sitemap();
    const postEntries = entries.filter(
      (entry) =>
        entry.url.startsWith(`${SITE_URL}/writing/`) &&
        entry.url !== `${SITE_URL}/writing/`,
    );

    // Post entries are optional (may be empty), but any that exist must be
    // canonical trailing-slash URLs.
    expect(postEntries.every((entry) => entry.url.endsWith('/'))).toBe(true);
  });
});
