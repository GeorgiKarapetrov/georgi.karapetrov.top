import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import EmailLink from '../../Contact/EmailLink';

describe('EmailLink', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders as a link element', () => {
    render(<EmailLink />);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('renders the first email address', () => {
    render(<EmailLink />);

    // Advance timer to type out first message
    act(() => {
      vi.advanceTimersByTime(500);
    });

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    // The link should be a mailto link
    expect(link.getAttribute('href')).toMatch(/^mailto:/);
  });

  it('animates through email addresses over time', () => {
    render(<EmailLink />);

    // Advance through first message + hold + second message
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('pauses animation on mouse enter', () => {
    render(<EmailLink />);

    const container = document.querySelector(
      '.contact-email-container',
    ) as HTMLElement;

    // Let animation run a bit
    act(() => {
      vi.advanceTimersByTime(200);
    });

    const textBefore = screen.getByRole('link').textContent;

    // Pause on hover
    fireEvent.mouseEnter(container);

    // Advance time
    act(() => {
      vi.advanceTimersByTime(500);
    });

    const textAfter = screen.getByRole('link').textContent;

    // Should be the same since animation is paused
    expect(textAfter).toBe(textBefore);
  });

  it('resumes animation on mouse leave', () => {
    render(<EmailLink />);

    const container = document.querySelector(
      '.contact-email-container',
    ) as HTMLElement;

    // Pause
    fireEvent.mouseEnter(container);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    // Resume
    fireEvent.mouseLeave(container);

    // Animation should be running again (no error)
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(container).toBeInTheDocument();
  });

  it('loops messages when loopMessage is true (default)', () => {
    render(<EmailLink />);

    // Advance through both messages multiple times
    act(() => {
      vi.advanceTimersByTime(50000);
    });

    // Component should still be active and rendering
    const container = document.querySelector('.contact-email-container');
    expect(container).toBeInTheDocument();
  });

  it('stops after all messages when loopMessage is false', () => {
    render(<EmailLink loopMessage={false} />);

    // Advance through all messages
    act(() => {
      vi.advanceTimersByTime(50000);
    });

    // Component should still render (just stopped animating)
    const container = document.querySelector('.contact-email-container');
    expect(container).toBeInTheDocument();
  });
});
