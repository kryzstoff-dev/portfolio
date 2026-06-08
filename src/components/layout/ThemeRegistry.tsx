"use client";

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import theme from '@/theme';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableColorScheme={false}
    >
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </NextThemesProvider>
  );
}
