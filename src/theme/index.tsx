import React, { createContext, ReactNode, useContext, useMemo, useState, useEffect, ComponentType } from 'react';
import type { JSX } from 'react';
import { ViewStyle, TextStyle, ImageStyle, useColorScheme } from 'react-native';

import GALIO_COLORS from './colors';
import GALIO_SIZES from './sizes';

export type ThemeMode = 'light' | 'dark' | 'auto';

export interface GalioTheme {
    COLORS: typeof GALIO_COLORS;
    SIZES: typeof GALIO_SIZES;
    mode: 'light' | 'dark';
    [key: string]: any;
}

export interface GalioProviderProps {
    children: ReactNode;
    mode?: ThemeMode;
    theme?: {
        COLORS?: Partial<typeof GALIO_COLORS>;
        SIZES?: Partial<typeof GALIO_SIZES>;
        customTheme?: Record<string, any>;
    };
}

function deepMerge<T extends object>(target: T, source: Partial<T>): T {
    const output = { ...target };
    
    if (!source) return output;
    
    Object.keys(source).forEach((key) => {
        const sourceValue = source[key as keyof T];
        const targetValue = output[key as keyof T];
        
        if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
            if (targetValue && typeof targetValue === 'object' && !Array.isArray(targetValue)) {
                (output as any)[key] = deepMerge(targetValue as any, sourceValue as any);
            } else {
                (output as any)[key] = sourceValue;
            }
        } else if (sourceValue !== undefined) {
            (output as any)[key] = sourceValue;
        }
    });
    
    return output;
}

const DEFAULT_THEME: GalioTheme = {
    COLORS: GALIO_COLORS,
    SIZES: GALIO_SIZES,
    mode: 'light',
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

export function GalioProvider({ mode = 'auto', theme = {}, children }: GalioProviderProps): JSX.Element {
    const systemColorScheme = useColorScheme();
    const [currentMode, setCurrentMode] = useState<'light' | 'dark'>(() => {
        if (mode === 'auto') {
            return systemColorScheme === 'dark' ? 'dark' : 'light';
        }
        return mode;
    });

    useEffect(() => {
        if (mode === 'auto') {
            setCurrentMode(systemColorScheme === 'dark' ? 'dark' : 'light');
        } else {
            setCurrentMode(mode);
        }
    }, [mode, systemColorScheme]);

    const providerTheme = useMemo<GalioTheme>(() => {
        try {
            return {
                COLORS: deepMerge(DEFAULT_THEME.COLORS, theme?.COLORS || {}),
                SIZES: deepMerge(DEFAULT_THEME.SIZES, theme?.SIZES || {}),
                mode: currentMode,
                ...theme?.customTheme,
            };
        } catch (error) {
            console.warn('GalioProvider: Error merging themes, falling back to default', error);
            return { ...DEFAULT_THEME, mode: currentMode };
        }
    }, [theme, currentMode]);

    return (
        <GalioContext.Provider value={providerTheme}>
            {children}
        </GalioContext.Provider>
    );
}

export function useThemeColors() {
    const theme = useGalioTheme();
    const modeKey = theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE';
    return theme.COLORS[modeKey];
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
