import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';

import { GET } from '../route';

describe('feed.xml route', () => {
  it('uses canonical trailing-slash links for writing pages', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/writing/`);
    expect(xml).toContain(`${SITE_URL}/writing/hello-world/`);
  });

  it('keeps the feed self link file-like', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/feed.xml`);
    expect(xml).not.toContain(`${SITE_URL}/feed.xml/`);
  });

  it('derives lastBuildDate from the newest post rather than the build clock', async () => {
    const response = await GET();
    const xml = await response.text();

    // hello-world is dated 2025-06-15; the feed anchors lastBuildDate on it.
    expect(xml).toContain(
      '<lastBuildDate>Sun, 15 Jun 2025 12:00:00 GMT</lastBuildDate>',
    );
  });
});
