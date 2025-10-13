import React from 'react';
import type { JSX } from 'react';
import { ViewStyle, View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { useGalioTheme, useThemeColors } from './theme';

interface BlockProps {
    row?: boolean;
    flex?: boolean | number;
    center?: boolean;
    middle?: boolean;
    top?: boolean;
    bottom?: boolean;
    right?: boolean;
    left?: boolean;
    shadow?: boolean;
    space?: 'between' | 'around' | 'evenly' | 'left' | 'right' | 'center' | null;
    fluid?: boolean;
    height?: number | null;
    shadowColor?: string | null;
    card?: boolean;
    width?: number | null;
    safe?: boolean;
    children?: React.ReactNode;
    style?: ViewStyle;
    [key: string]: any;
}

function Block({
    row = false,
    flex = false,
    center = false,
    middle = false,
    top = false,
    bottom = false,
    right = false,
    left = false,
    shadow = false,
    space = null,
    fluid = false,
    height = null,
    shadowColor = null,
    card = false,
    width = null,
    safe = false,
    children,
    style,
    ...rest
}: BlockProps): JSX.Element {
    const theme = useGalioTheme();

    const styleBlock = [
        styles(theme).block,
        row && styles(theme).row,
        flex && { flex: flex === true ? 1 : flex },
        center && styles(theme).center,
        middle && styles(theme).middle,
        top && styles(theme).top,
        bottom && styles(theme).bottom,
        right && styles(theme).right,
        left && styles(theme).left,
        space && { justifyContent: `space-${space}` },
        shadow && styles(theme).shadow,
        fluid && styles(theme).fluid,
        card && styles(theme).card,
        height && { height },
        width && { width },
        shadowColor && { shadowColor },
        style,
    ].filter(Boolean) as ViewStyle[];

    if (safe) {
        return (
            <SafeAreaView style={styleBlock} {...rest}>
                {children}
            </SafeAreaView>
        );
    }

    return (
        <View style={styleBlock} {...rest}>
            {children}
        </View>
    );
}

const styles = (theme: ReturnType<typeof useGalioTheme>) => {
    const modeKey = theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE';
    const colors = theme.COLORS[modeKey];
    
    return StyleSheet.create({
        block: {
            flexDirection: 'column',
        },
        row: {
            flexDirection: 'row',
        },
        middle: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        center: {
            alignItems: 'center',
            alignSelf: 'center',
        },
        left: {
            alignItems: 'flex-start',
        },
        right: {
            alignItems: 'flex-end',
        },
        top: {
            alignItems: 'flex-start',
            alignSelf: 'flex-start',
        },
        bottom: {
            alignItems: 'flex-end',
            alignSelf: 'flex-end',
        },
        card: {
            borderRadius: theme.SIZES.CARD_BORDER_RADIUS,
            borderWidth: theme.SIZES.CARD_BORDER_WIDTH,
            borderColor: colors.block,
        },
        shadow: {
            ...Platform.select({
                ios: {
                    shadowColor: colors.block,
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: theme.SIZES.BLOCK_SHADOW_OPACITY,
                    shadowRadius: theme.SIZES.BLOCK_SHADOW_RADIUS,
                },
                android: {
                    elevation: theme.SIZES.ANDROID_ELEVATION,
                },
                web: {
                    boxShadow: `0px 3px ${theme.SIZES.BLOCK_SHADOW_RADIUS}px rgba(0, 0, 0, ${theme.SIZES.BLOCK_SHADOW_OPACITY})`,
                },
            }),
        },
        fluid: {
            width: 'auto',
        },
    });
};

export default Block;
