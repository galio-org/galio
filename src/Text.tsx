import React, { memo, useMemo } from 'react';
import type { JSX } from 'react';
import { Platform, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { normalize } from './helpers/normalize';
import GalioTheme, { useTheme, useColors } from './theme';

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
    const theme = useTheme?.() || propTheme || GalioTheme;
    const colors = useColors?.() || theme?.colors || {};
    // Map font sizes to theme.sizes keys
    const fontSizes = {
        h1: theme?.sizes?.H1,
        h2: theme?.sizes?.H2,
        h3: theme?.sizes?.H3,
        h4: theme?.sizes?.H4,
        h5: theme?.sizes?.H5,
        h6: theme?.sizes?.H6,
        p: theme?.sizes?.BODY,
        body: theme?.sizes?.BODY,
        small: theme?.sizes?.SMALL,
    };
    const fontWeights = theme?.fontWeights || { bold: 'bold', normal: 'normal' };

    const getShadowStyle = (): TextStyle | undefined => {
        if (!shadow) return undefined;
        if (Platform.OS === 'web' || Platform.OS === 'ios' || Platform.OS === 'android') {
            return { textShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' } as any;
        }
        return undefined;
    };

    const dynamicStyles = useMemo(() => [
        h1 && { fontSize: normalize(fontSizes.h1 || 44) },
        h2 && { fontSize: normalize(fontSizes.h2 || 38) },
        h3 && { fontSize: normalize(fontSizes.h3 || 30) },
        h4 && { fontSize: normalize(fontSizes.h4 || 24) },
        h5 && { fontSize: normalize(fontSizes.h5 || 21) },
        h6 && { fontSize: normalize(fontSizes.h6 || 18) },
        p && { fontSize: normalize(fontSizes.p || 16) },
        body && { fontSize: normalize(fontSizes.body || 14) },
        small && { fontSize: normalize(fontSizes.small || 12) },
        muted && { color: colors.textTertiary || '#888' },
        neutral && { color: colors.textSecondary || '#555' },
        size && typeof size === 'number' ? { fontSize: normalize(size) } : undefined,
        color && { color },
        italic && { fontStyle: 'italic' as TextStyle['fontStyle'] },
        bold && { fontWeight: fontWeights.bold as TextStyle['fontWeight'] },
        center && { textAlign: 'center' as TextStyle['textAlign'] },
        getShadowStyle(),
        style,
    ], [h1, h2, h3, h4, h5, h6, p, body, small, muted, neutral, size, color, italic, bold, center, style, theme, shadow, fontSizes, fontWeights, colors]);

    return (
        <Text style={[styles(colors).base, ...dynamicStyles] as unknown as TextStyle} {...rest}>
            {children}
        </Text>
    );
}

const styles = (colors: ReturnType<typeof useColors> | undefined) => StyleSheet.create({
    base: {
        color: colors?.text || '#000',
    }
});
export default memo(Typography);
