import React, { memo, useMemo } from 'react';
import type { JSX } from 'react';
import { Platform, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { normalize } from '../../helpers/normalize';
import GalioTheme, { useGalioTheme, useThemeColors } from '../../theme';

interface TypographyProps {
    style?: StyleProp<TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    p?: boolean;
    body?: boolean;
    small?: boolean;
    muted?: boolean;
    neutral?: boolean;
    size?: number;
    color?: string;
    bold?: boolean;
    italic?: boolean;
    center?: boolean;
    children?: React.ReactNode;
    theme?: any;
    shadow?: boolean;
    [key: string]: any;
}

function Typography({
    style,
    h1 = false,
    h2 = false,
    h3 = false,
    h4 = false,
    h5 = false,
    h6 = false,
    p = false,
    body = false,
    small = false,
    muted = false,
    neutral = false,
    size,
    color,
    bold = false,
    italic = false,
    center = false,
    children,
    theme: propTheme,
    shadow = false,
    ...rest
}: TypographyProps): JSX.Element {
    const theme = useGalioTheme?.() || propTheme || GalioTheme;
    const colors = useThemeColors?.();

    const getShadowStyle = (): TextStyle | undefined => {
        if (!shadow) return undefined;
        if (Platform.OS === 'web') {
            return { textShadow: '0px 2px 8px rgba(0, 0, 0, 1)' } as any;
        } else if (Platform.OS === 'ios') {
            return {
                textShadow: '0px 2px 8px rgba(0, 0, 0, 1)',
            } as any;
        } else if (Platform.OS === 'android') {
            return {
                textShadow: '0px 2px 8px rgba(0, 0, 0, 1)',
            } as any; 
        }
        return undefined;
    };

    const dynamicStyles = useMemo(() => [
        h1 && { fontSize: normalize(44) },
        h2 && { fontSize: normalize(38) },
        h3 && { fontSize: normalize(30) },
        h4 && { fontSize: normalize(24) },
        h5 && { fontSize: normalize(21) },
        h6 && { fontSize: normalize(18) },
        p && { fontSize: normalize(16) },
        body && { fontSize: normalize(14) },
        small && { fontSize: normalize(12) },
        muted && colors && { color: colors.muted },
        neutral && colors && { color: colors.neutral(0.65) },
        size && typeof size === 'number' ? { fontSize: normalize(size) } : undefined,
        color && { color },
        italic && { fontStyle: 'italic' as TextStyle['fontStyle'] },
        bold && { fontWeight: 'bold' as TextStyle['fontWeight'] },
        center && { textAlign: 'center' as TextStyle['textAlign'] },
        getShadowStyle(),
        style,
    ], [h1, h2, h3, h4, h5, h6, p, body, small, muted, neutral, size, color, italic, bold, center, style, theme, shadow]);

    return (
        <Text style={[styles.base, ...dynamicStyles] as unknown as TextStyle} {...rest}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    base: {
        color: '#000',
    }
});
export default memo(Typography);
