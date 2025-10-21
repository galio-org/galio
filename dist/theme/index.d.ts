import { ReactNode, ComponentType } from 'react';
import type { JSX } from 'react';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import GALIO_COLORS, { LIGHT_COLORS, SHADOWS } from './colors';
import GALIO_SIZES from './sizes';
export type ThemeMode = 'light' | 'dark' | 'auto';
export type SemanticColors = typeof LIGHT_COLORS;
export interface GalioTheme {
    COLORS: typeof GALIO_COLORS;
    SIZES: typeof GALIO_SIZES;
    colors: SemanticColors;
    sizes: typeof GALIO_SIZES;
    shadows: typeof SHADOWS;
    mode: 'light' | 'dark';
    [key: string]: any;
}
export interface GalioProviderProps {
    children: ReactNode;
    mode?: ThemeMode;
    theme?: {
        colors?: Partial<SemanticColors>;
        sizes?: Partial<typeof GALIO_SIZES>;
        shadows?: Partial<typeof SHADOWS>;
        COLORS?: Partial<typeof GALIO_COLORS>;
        SIZES?: Partial<typeof GALIO_SIZES>;
        customTheme?: Record<string, any>;
    };
}
declare const DEFAULT_THEME: GalioTheme;
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
export declare function useTheme(): GalioTheme;
/**
 * Legacy hook - use useTheme() instead
 * @deprecated Use useTheme() for better TypeScript support and semantic colors
 */
export declare function useGalioTheme(): GalioTheme;
/**
 * Convenience hook - returns just semantic colors for current mode
 * @returns {SemanticColors} Semantic colors (background, text, primary, etc.)
 *
 * @example
 * const colors = useColors();
 * <Text style={{ color: colors.text }}>Auto adapts to theme mode!</Text>
 */
export declare function useColors(): SemanticColors;
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
export declare function GalioProvider({ mode, theme, children }: GalioProviderProps): JSX.Element;
/**
 * Legacy hook for getting mode-specific colors
 * @deprecated Use useColors() instead for automatic mode adaptation
 */
export declare function useThemeColors(): {
    facebook: string;
    twitter: string;
    dribbble: string;
    primary: string;
    primaryDark: string;
    primaryLight: string;
    info: string;
    infoDark: string;
    infoLight: string;
    danger: string;
    dangerDark: string;
    dangerLight: string;
    warning: string;
    warningDark: string;
    warningLight: string;
    success: string;
    successDark: string;
    successLight: string;
    input: string;
    placeholder: string;
    navbar: string;
    block: string;
    icon: string;
    background: string;
    text: string;
    white: string;
    black: string;
    grey: string;
    muted: string;
    transparent: string;
    neutral: (opacity?: number) => string;
} | {
    facebook: string;
    twitter: string;
    dribbble: string;
    primary: string;
    primaryDark: string;
    primaryLight: string;
    info: string;
    infoDark: string;
    infoLight: string;
    danger: string;
    dangerDark: string;
    dangerLight: string;
    warning: string;
    warningDark: string;
    warningLight: string;
    success: string;
    successDark: string;
    successLight: string;
    input: string;
    placeholder: string;
    navbar: string;
    block: string;
    icon: string;
    background: string;
    text: string;
    white: string;
    black: string;
    grey: string;
    muted: string;
    transparent: string;
    neutral: (opacity?: number) => string;
};
/**
 * Create styles based on theme
 * @deprecated Use useColors() and create styles directly for better performance
 */
export declare function useGalioStyles<T>(styleFactory?: (theme: GalioTheme) => T): T | undefined;
type NamedStyles = ViewStyle | TextStyle | ImageStyle;
/**
 * HOC for injecting theme into components
 * @deprecated Use useTheme() or useColors() hooks instead
 */
export declare function withGalio<T extends ComponentType<any>>(Component: T, styleFactory?: (theme: GalioTheme) => Record<string, NamedStyles>): T;
export default DEFAULT_THEME;
//# sourceMappingURL=index.d.ts.map