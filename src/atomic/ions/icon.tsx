import React, { memo } from 'react';
import type { JSX } from 'react';
import { Fontisto } from '@react-native-vector-icons/fontisto';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import galioConfig from '../../config/galio.json';
import getIconType from '../../helpers/getIconType';
import { useGalioTheme } from '../../theme';

const Galio = createIconSetFromIcoMoon(galioConfig, 'Galio', require('../../fonts/galio.ttf'));

export interface IconProps {
    name: string;
    family: string;
    size?: number;
    color?: string;
    medium?: boolean;
    large?: boolean;
    [key: string]: any;
}

function Icon({
    name,
    family,
    size,
    color,
    medium = false,
    large = false,
    ...rest
}: IconProps): JSX.Element | null {
    const theme = useGalioTheme();

    const iconSize = 
        size ||
        (medium
            ? theme.SIZES.ICON_MEDIUM
            : large
            ? theme.SIZES.ICON_LARGE
            : theme.SIZES.ICON);

    const iconColor = color || theme.COLORS.LIGHT_MODE.black;

    if (family === 'Galio') {
        return name ? <Galio name={name} size={iconSize} color={iconColor} {...rest} /> : null;
    }

    if (family === 'fontisto') {
        return name ? <Fontisto name={name as any} size={iconSize} color={iconColor} {...rest} /> : null;
    }

    const IconInstance = getIconType(family);
    return name && IconInstance ? (
        <IconInstance name={name} size={iconSize} color={iconColor} {...rest} />
    ) : null;

}

export default memo(Icon);
