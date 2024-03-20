export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export type AppTheme = 'dark' | 'light';

export type QueryResponseType = {
  countries: { code: string; name: string; emoji: string }[];
};

export const STORAGE_KEY = 'ccl-app-theme' as const;
