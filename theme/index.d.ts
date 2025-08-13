import { ReactNode, ComponentType } from 'react';
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
declare const DEFAULT_THEME: GalioTheme;
export declare function useGalioTheme(): GalioTheme;
export declare function GalioProvider({ theme, children }: GalioProviderProps): JSX.Element;
export declare function useGalioStyles<T>(styles?: (theme: GalioTheme) => T): T | undefined;
type NamedStyles = ViewStyle | TextStyle | ImageStyle;
export declare function withGalio<T extends ComponentType<any>>(Component: T, styles: NamedStyles): ComponentType<any>;
export default DEFAULT_THEME;
//# sourceMappingURL=index.d.ts.map