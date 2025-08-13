import React, { createContext, ReactNode, useContext, useMemo, ComponentType } from 'react';
import type { JSX } from 'react';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

import GALIO_COLORS from './colors';
import GALIO_SIZES from './sizes';

export interface GalioTheme {
    COLORS: typeof GALIO_COLORS;
    SIZES: typeof GALIO_SIZES;
    [key: string]: any;
}

export interface GalioProviderProps {
    children: ReactNode;
    theme?: {
        COLORS?: Partial<typeof GALIO_COLORS>;
        SIZES?: Partial<typeof GALIO_SIZES>;
        customTheme?: Record<string, any>;
    };
}

const DEFAULT_THEME: GalioTheme = {
    COLORS: GALIO_COLORS,
    SIZES: GALIO_SIZES,
}

const GalioContext = createContext<GalioTheme>(DEFAULT_THEME);

export function useGalioTheme(): GalioTheme {
    const theme = useContext(GalioContext);
    if (!theme) {
        throw new Error('useGalioTheme must be used within a GalioProvider');
    }
    return theme;
}

export function GalioProvider({ theme = {}, children} : GalioProviderProps): JSX.Element {
    const providerTheme = useMemo<GalioTheme>(()=> ({
        COLORS: { ...DEFAULT_THEME.COLORS, ...theme?.COLORS},
        SIZES: { ...DEFAULT_THEME.SIZES, ...theme?.SIZES},
        ...theme?.customTheme,
    }), [theme]);

    return (
        <GalioContext.Provider value={providerTheme}>
            {children}
        </GalioContext.Provider>
    )
}

export function useGalioStyles<T>(styles?: (theme: GalioTheme) => T): T | undefined {
    const theme = useGalioTheme();
    return styles ? styles(theme) : undefined;
}

type NamedStyles = ViewStyle | TextStyle | ImageStyle;

export function withGalio<T extends ComponentType<any>>(
    Component: T,
    styles: NamedStyles
): ComponentType<any> {
    return Component;
}

export default DEFAULT_THEME;