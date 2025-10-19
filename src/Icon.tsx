import React, { memo } from 'react';
import type { JSX } from 'react';
import { Fontisto } from '@react-native-vector-icons/fontisto';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import galioConfig from './config/galio.json';
import getIconType from './helpers/getIconType';
import { useTheme, useColors } from './theme';

const Galio = createIconSetFromIcoMoon(galioConfig, 'Galio', require('./fonts/galio.ttf'));

export interface IconProps {
    name: string;
    family: string;
    size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: string; // can be a color string or a theme color key
    style?: any;
    [key: string]: any;
}

function Icon({
    name,
    family,
    size,
    color,
    style,
    ...rest
}: IconProps): JSX.Element | null {
    const theme = useTheme();
    const colors = useColors();

    // Semantic size mapping to theme sizes
    const sizeMap: Record<string, number> = {
        xs: theme.sizes.SMALL, // smallest icon size
        sm: theme.sizes.ICON, // default icon size
        md: theme.sizes.ICON_MEDIUM, // medium icon size
        lg: theme.sizes.ICON_LARGE, // large icon size
        xl: theme.sizes.ICON_LARGE * 1.5, // extra large, custom
    };

    let iconSize: number = sizeMap.sm;
    if (typeof size === 'string' && sizeMap[size]) {
        iconSize = sizeMap[size];
    } else if (typeof size === 'number') {
        iconSize = size;
    }

    // Color: if color matches a theme key, use theme color, else use as is or fallback
    let iconColor = color;
    if (iconColor && colors[iconColor as keyof typeof colors]) {
        iconColor = colors[iconColor as keyof typeof colors];
    }
    if (!iconColor) {
        iconColor = colors.text;
    }

    if (family === 'Galio') {
        return name ? <Galio name={name} size={iconSize} color={iconColor} style={style} {...rest} /> : null;
    }

    if (family === 'fontisto') {
        return name ? <Fontisto name={name as any} size={iconSize} color={iconColor} style={style} {...rest} /> : null;
    }

    const IconInstance = getIconType(family);
    return name && IconInstance ? (
        <IconInstance name={name} size={iconSize} color={iconColor} style={style} {...rest} />
    ) : null;
}

export default memo(Icon);
