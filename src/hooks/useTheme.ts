import { useEffect, useState } from 'react';
import { AppTheme, STORAGE_KEY } from '../@types';

const useTheme = () => {
  const [theme, setTheme] = useState<AppTheme>(() => {
    const themeFromStorage = localStorage.getItem(STORAGE_KEY) as AppTheme;

    if (themeFromStorage) {
      return themeFromStorage;
    }

    const isSystemThemeSetToDark = window.matchMedia('(prefers-color-scheme: dark)');

    return isSystemThemeSetToDark.matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
