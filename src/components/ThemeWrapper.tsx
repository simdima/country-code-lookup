import React from 'react';
import { AppTheme } from '../@types';

type ThemeWrapperProps = {
  theme: AppTheme;
  children: React.ReactNode;
};

const ThemeWrapper = ({ theme, children }: ThemeWrapperProps) => (
  <div
    className="flex flex-col min-h-[100dvh]"
    data-theme={theme}>
    {children}
  </div>
);

export default ThemeWrapper;
