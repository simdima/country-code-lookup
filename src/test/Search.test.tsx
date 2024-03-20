import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/Search';

describe('Search component', () => {
  it('renders with initial state', () => {
    render(
      <Search
        term=""
        handleTermChange={() => {}}
      />
    );

    expect(screen.getByPlaceholderText('Search for a country or its code...')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('displays the correct placeholder when focused/blurred', () => {
    render(
      <Search
        term=""
        handleTermChange={() => {}}
      />
    );

    const inputElement = screen.getByRole('textbox');

    fireEvent.focus(inputElement);
    expect(inputElement).toHaveAttribute('placeholder', '');

    fireEvent.blur(inputElement);
    expect(inputElement).toHaveAttribute('placeholder', 'Search for a country or its code...');
  });
});
