import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import profile from '../../../data/profile.json';
import EmailLink from '../../Contact/EmailLink';

// The finite set of full addresses the animation types through. EmailLink
// derives this from profile.email (plus any extra addresses configured there),
// so the test mirrors that: at minimum the canonical address is present.
const aliases = [profile.email];

function prefixText(): string {
  return document.querySelector('.contact-email-prefix')?.textContent ?? '';
}

describe('EmailLink', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders as a link element', () => {
    render(<EmailLink />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('opens on the first full address before the animation advances', () => {
    render(<EmailLink />);
    expect(prefixText()).toBe(aliases[0]);
  });

  it('always links to the canonical address, whatever alias is shown', () => {
    render(<EmailLink loopMessage />);
    for (let elapsed = 0; elapsed < 60_000; elapsed += 250) {
      act(() => {
        vi.advanceTimersByTime(250);
      });
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', `mailto:${profile.email}`);
      expect(link).not.toHaveAttribute('aria-disabled');
    }
  });

  it('names the link by its real destination, not the animated alias', () => {
    render(<EmailLink />);
    act(() => {
      vi.advanceTimersByTime(50 * 200);
    });
    expect(
      screen.getByRole('link', { name: `Email ${profile.email}` }),
    ).toBeInTheDocument();
    expect(document.querySelector('.contact-email-prefix')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });

  it('never blanks mid-animation', () => {
    render(<EmailLink loopMessage />);
    for (let elapsed = 0; elapsed < 120_000; elapsed += 50) {
      act(() => {
        vi.advanceTimersByTime(50);
      });
      expect(prefixText()).not.toBe('');
    }
  });

  it('only ever shows a leading slice of one configured alias', () => {
    render(<EmailLink loopMessage />);
    for (let elapsed = 0; elapsed < 60_000; elapsed += 50) {
      act(() => {
        vi.advanceTimersByTime(50);
      });
      const shown = prefixText();
      expect(aliases.some((alias) => alias.startsWith(shown))).toBe(true);
    }
  });

  it('pauses animation on mouse enter', () => {
    render(<EmailLink />);
    const container = document.querySelector(
      '.contact-email-container',
    ) as HTMLElement;
    act(() => {
      vi.advanceTimersByTime(200);
    });
    const before = prefixText();
    fireEvent.mouseEnter(container);
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(prefixText()).toBe(before);
  });

  it('resumes animation on mouse leave', () => {
    render(<EmailLink />);
    const container = document.querySelector(
      '.contact-email-container',
    ) as HTMLElement;
    fireEvent.mouseEnter(container);
    act(() => {
      vi.advanceTimersByTime(100);
    });
    fireEvent.mouseLeave(container);
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(container).toBeInTheDocument();
  });

  it('stays settled once the animation completes', () => {
    const { container } = render(<EmailLink />);
    act(() => {
      vi.advanceTimersByTime(120_000);
    });
    const settled = prefixText();
    const wrapper = container.querySelector(
      '.contact-email-container',
    ) as HTMLElement;
    fireEvent.mouseEnter(wrapper);
    fireEvent.mouseLeave(wrapper);
    act(() => {
      vi.advanceTimersByTime(5_000);
    });
    expect(prefixText()).toBe(settled);
  });
});
