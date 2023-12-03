import { memo } from 'react';
import { AppTheme, SetStateAction } from '../@types';

type HeaderProps = {
  theme: AppTheme;
  changeTheme: SetStateAction<AppTheme>;
};

const Header = memo(({ theme, changeTheme }: HeaderProps) => (
  <header className="flex justify-end w-full my-4">
    <label className="flex mr-4 gap-2 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle
          cx="12"
          cy="12"
          r="5"
        />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input
        type="checkbox"
        className="theme-controller toggle"
        value={theme}
        onChange={e => changeTheme(e.target.value as AppTheme)}
        checked={theme === 'dark'}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  </header>
));

export default Header;
