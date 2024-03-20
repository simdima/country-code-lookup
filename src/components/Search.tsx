import { useState } from 'react';
import { SetStateAction } from '../@types';

type SearchProps = {
  term: string;
  handleTermChange: SetStateAction<string>;
};

const Search = ({ term, handleTermChange }: SearchProps) => {
  const [placeholder, setPlaceholder] = useState('Search for a country or its code...');

  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="flex justify-center">
      <input
        className={`input input-bordered w-11/12 md:max-w-md my-2 text-center tracking-wide ${
          placeholder && !term && 'font-extralight italic'
        }`}
        type="text"
        aria-label="Search country code..."
        value={term}
        onChange={({ target }) => handleTermChange(target.value)}
        placeholder={placeholder}
        onFocus={() => setPlaceholder('')}
        onBlur={() => setPlaceholder('Search for a country or its code...')}
      />
    </form>
  );
};

export default Search;
