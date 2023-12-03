import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders Footer correctly', () => {
    render(<Footer />);

    expect(screen.getByText(/Copyright.*/)).toBeInTheDocument();
  });
});
