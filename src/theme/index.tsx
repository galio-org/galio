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

const GalioContext = createContext<GalioTheme | null>(null);

export function useGalioTheme(): GalioTheme {
    const theme = useContext(GalioContext);
    if (!theme) {
        if (!(global as any).__GALIO_WARNED_NO_PROVIDER__) {
            (global as any).__GALIO_WARNED_NO_PROVIDER__ = true;
            console.warn('useGalioTheme: No GalioProvider found, using default theme');
        }
        return DEFAULT_THEME;
    }
    return theme;
}

export function GalioProvider({ theme = {}, children }: GalioProviderProps): JSX.Element {
    const providerTheme = useMemo<GalioTheme>(() => {
        try {
            return {
                COLORS: { ...DEFAULT_THEME.COLORS, ...theme?.COLORS },
                SIZES: { ...DEFAULT_THEME.SIZES, ...theme?.SIZES },
                ...theme?.customTheme,
            };
        } catch (error) {
            console.warn('GalioProvider: Error merging themes, falling back to default', error);
            return DEFAULT_THEME;
        }
    }, [theme]);

    return (
        <GalioContext.Provider value={providerTheme}>
            {children}
        </GalioContext.Provider>
    );
}

export function useGalioStyles<T>(styleFactory?: (theme: GalioTheme) => T): T | undefined {
    const theme = useGalioTheme();
    return useMemo(() => {
        return styleFactory ? styleFactory(theme) : undefined;
    }, [styleFactory, theme]);
}

type NamedStyles = ViewStyle | TextStyle | ImageStyle;

export function withGalio<T extends ComponentType<any>>(
    Component: T,
    styleFactory?: (theme: GalioTheme) => Record<string, NamedStyles>
): T {
    if (!styleFactory) {
        return Component;
    }
    
    const WrappedComponent = (props: any) => {
        const theme = useGalioTheme();
        const styles = useMemo(
            () => styleFactory(theme),
            [theme]
        );
        
        return <Component {...props} styles={styles} />;
    };
    
    WrappedComponent.displayName = `withGalio(${Component.displayName || Component.name})`;
    return WrappedComponent as T;
}

export default DEFAULT_THEME;