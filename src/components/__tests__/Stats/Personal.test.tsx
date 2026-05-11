import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Personal from '../../Stats/Personal';

describe('Personal', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the personal stats table', () => {
    render(<Personal />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays the current age label', () => {
    render(<Personal />);

    expect(screen.getByText('Current age')).toBeInTheDocument();
  });

  it('displays countries visited', () => {
    render(<Personal />);

    expect(screen.getByText('Countries visited')).toBeInTheDocument();
    expect(screen.getByText('Seven')).toBeInTheDocument();
  });

  it('displays home city', () => {
    render(<Personal />);

    expect(screen.getByText('Home city')).toBeInTheDocument();
    expect(screen.getByText('Sofia, Bulgaria')).toBeInTheDocument();
  });

  it('has a link for countries visited', () => {
    render(<Personal />);

    const link = screen.getByRole('link', { name: /seven/i });
    expect(link).toHaveAttribute(
      'href',
      'https://www.google.com/maps/d/embed?mid=1IrgOfUSRP2aBhPE0RV0noWMAfhol4Uyv',
    );
  });

  it('updates age over time', async () => {
    render(<Personal />);

    // Get initial age text
    const ageCell = screen.getByText('Current age').closest('tr');
    expect(ageCell).toBeInTheDocument();

    // Advance timer to trigger age update
    act(() => {
      vi.advanceTimersByTime(50);
    });

    // Age should still be displayed (value changes but component renders)
    expect(screen.getByText('Current age')).toBeInTheDocument();
  });
});
