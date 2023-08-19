'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

const Providers = ({ children, themeProps }: ProvidersProps) => (
	<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
);

export default Providers;
