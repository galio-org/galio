import React, { createContext, ReactNode, useContext, useMemo, useState, useEffect, ComponentType } from 'react';
import type { JSX } from 'react';
import { ViewStyle, TextStyle, ImageStyle, useColorScheme } from 'react-native';

import GALIO_COLORS, { LIGHT_COLORS, DARK_COLORS, SHADOWS } from './colors';
import GALIO_SIZES from './sizes';

export type ThemeMode = 'light' | 'dark' | 'auto';

// Semantic color type
export type SemanticColors = typeof LIGHT_COLORS;

// Modern theme interface
export interface GalioTheme {
    // Legacy structure (deprecated but maintained for compatibility)
    COLORS: typeof GALIO_COLORS;
    SIZES: typeof GALIO_SIZES;

    // Modern semantic structure
    colors: SemanticColors;
    sizes: typeof GALIO_SIZES;
    shadows: typeof SHADOWS;
    mode: 'light' | 'dark';

    [key: string]: any;
}

// Modern provider props - supports both old and new API
export interface GalioProviderProps {
    children: ReactNode;
    mode?: ThemeMode;
    theme?: {
        // Modern API (preferred)
        colors?: Partial<SemanticColors>;
        sizes?: Partial<typeof GALIO_SIZES>;
        shadows?: Partial<typeof SHADOWS>;

        // Legacy API (deprecated)
        COLORS?: Partial<typeof GALIO_COLORS>;
        SIZES?: Partial<typeof GALIO_SIZES>;
        customTheme?: Record<string, any>;
    };
}

// Deep merge utility for theme customization
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

// Get semantic colors based on current mode
function getSemanticColors(mode: 'light' | 'dark', customColors?: Partial<SemanticColors>): SemanticColors {
    const baseColors = mode === 'dark' ? DARK_COLORS : LIGHT_COLORS;
    return customColors ? deepMerge(baseColors, customColors) : baseColors;
}

const DEFAULT_THEME: GalioTheme = {
    COLORS: GALIO_COLORS,
    SIZES: GALIO_SIZES,
    colors: LIGHT_COLORS,
    sizes: GALIO_SIZES,
    shadows: SHADOWS,
    mode: 'light',
};

const GalioContext = createContext<GalioTheme | null>(null);

/**
 * Main theme hook - returns the complete theme object
 * @returns {GalioTheme} Complete theme with colors, sizes, and mode
 * 
 * @example
 * const { colors, mode, sizes } = useTheme();
 * <View style={{ backgroundColor: colors.background }}>
 *   <Text style={{ color: colors.text }}>Hello</Text>
 * </View>
 */
export function useTheme(): GalioTheme {
    const theme = useContext(GalioContext);
    if (!theme) {
        if (!(global as any).__GALIO_WARNED_NO_PROVIDER__) {
            (global as any).__GALIO_WARNED_NO_PROVIDER__ = true;
            console.warn('useTheme: No GalioProvider found, using default theme');
        }
        return DEFAULT_THEME;
    }
    return theme;
}

/**
 * Legacy hook - use useTheme() instead
 * @deprecated Use useTheme() for better TypeScript support and semantic colors
 */
export function useGalioTheme(): GalioTheme {
    if (!(global as any).__GALIO_WARNED_DEPRECATED_HOOK__) {
        (global as any).__GALIO_WARNED_DEPRECATED_HOOK__ = true;
        console.warn('useGalioTheme is deprecated. Use useTheme() instead for modern semantic colors.');
    }
    return useTheme();
}

/**
 * Convenience hook - returns just semantic colors for current mode
 * @returns {SemanticColors} Semantic colors (background, text, primary, etc.)
 * 
 * @example
 * const colors = useColors();
 * <Text style={{ color: colors.text }}>Auto adapts to theme mode!</Text>
 */
export function useColors(): SemanticColors {
    const theme = useTheme();
    return theme.colors;
}

/**
 * GalioProvider - Wrap your app with this to enable theming
 * 
 * @param mode - 'light', 'dark', or 'auto' (follows system preference)
 * @param theme - Custom theme overrides
 * 
 * @example
 * // Simple: Auto light/dark mode
 * <GalioProvider>
 *   <App />
 * </GalioProvider>
 * 
 * @example
 * // Custom brand colors
 * <GalioProvider theme={{ colors: { primary: '#FF6B6B' } }}>
 *   <App />
 * </GalioProvider>
 * 
 * @example
 * // Controlled mode switching
 * const [mode, setMode] = useState('light');
 * <GalioProvider mode={mode}>
 *   <Button onPress={() => setMode(mode === 'light' ? 'dark' : 'light')}>
 *     Toggle Theme
 *   </Button>
 * </GalioProvider>
 */
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
            // Check if using new API (colors) or legacy API (COLORS)
            const isLegacyAPI = theme.COLORS && !theme.colors;

            if (isLegacyAPI && !(global as any).__GALIO_WARNED_LEGACY_API__) {
                (global as any).__GALIO_WARNED_LEGACY_API__ = true;
                console.warn(
                    'GalioProvider: Legacy theme API detected. Consider migrating to the new API:\n' +
                    '  Old: theme={{ COLORS: {...}, SIZES: {...} }}\n' +
                    '  New: theme={{ colors: {...}, sizes: {...} }}'
                );
            }

            // Merge custom colors with base colors for current mode
            const customColors = theme.colors || {};
            const semanticColors = getSemanticColors(currentMode, customColors);

            // Merge sizes
            const customSizes = theme.sizes || theme.SIZES || {};
            const mergedSizes = customSizes ? deepMerge(GALIO_SIZES, customSizes) : GALIO_SIZES;

            // Merge shadows (allow override via theme.shadows)
            const mergedShadows = theme.shadows ? deepMerge(SHADOWS, theme.shadows) : SHADOWS;

            return {
                // Legacy structure (for backward compatibility)
                COLORS: deepMerge(GALIO_COLORS, theme?.COLORS || {}),
                SIZES: mergedSizes,

                // Modern structure
                colors: semanticColors,
                sizes: mergedSizes,
                shadows: mergedShadows,
                mode: currentMode,

                // Custom theme properties
                ...theme?.customTheme,
            };
        } catch (error) {
            console.warn('GalioProvider: Error merging themes, falling back to default', error);
            return {
                ...DEFAULT_THEME,
                mode: currentMode,
                colors: getSemanticColors(currentMode),
            };
        }
    }, [theme, currentMode]);

    return (
        <GalioContext.Provider value={providerTheme}>
            {children}
        </GalioContext.Provider>
    );
}

/**
 * Legacy hook for getting mode-specific colors
 * @deprecated Use useColors() instead for automatic mode adaptation
 */
export function useThemeColors() {
    if (!(global as any).__GALIO_WARNED_THEME_COLORS__) {
        (global as any).__GALIO_WARNED_THEME_COLORS__ = true;
        console.warn('useThemeColors is deprecated. Use useColors() for modern semantic color tokens.');
    }
    const theme = useTheme();
    const modeKey = theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE';
    return theme.COLORS[modeKey];
}

/**
 * Create styles based on theme
 * @deprecated Use useColors() and create styles directly for better performance
 */
export function useGalioStyles<T>(styleFactory?: (theme: GalioTheme) => T): T | undefined {
    const theme = useTheme();
    return useMemo(() => {
        return styleFactory ? styleFactory(theme) : undefined;
    }, [styleFactory, theme]);
}

type NamedStyles = ViewStyle | TextStyle | ImageStyle;

/**
 * HOC for injecting theme into components
 * @deprecated Use useTheme() or useColors() hooks instead
 */
export function withGalio<T extends ComponentType<any>>(
    Component: T,
    styleFactory?: (theme: GalioTheme) => Record<string, NamedStyles>
): T {
    if (!styleFactory) {
        return Component;
    }
    
    const WrappedComponent = (props: any) => {
        const theme = useTheme();
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
