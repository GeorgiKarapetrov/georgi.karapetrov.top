import { describe, expect, it } from 'vitest';

import { sharedOpenGraph, sharedTwitter } from '@/lib/metadata';
import { SITE_URL } from '@/lib/utils';

import { generateMetadata } from './page';

describe('writing post metadata', () => {
  it('uses a trailing-slash canonical URL for posts', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: 'hello-world' }),
    });

    expect(metadata.openGraph?.url).toBe(`${SITE_URL}/writing/hello-world/`);
  });

  it('falls back to the shared share card when a post has no article image', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: 'hello-world' }),
    });

    // hello-world declares no `image`/`imageAlt`, so both cards inherit the
    // site-wide share image rather than a per-article one. OpenGraph carries
    // the rich image object; Twitter carries the bare path.
    expect(metadata.openGraph?.images).toEqual(sharedOpenGraph?.images);
    expect(metadata.twitter?.images).toEqual(sharedTwitter?.images);
  });
});
