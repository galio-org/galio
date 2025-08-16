import React from 'react';
import type { JSX } from 'react';
import { ViewStyle } from 'react-native';
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
declare function Block({ row, flex, center, middle, top, bottom, right, left, shadow, space, fluid, height, shadowColor, card, width, safe, children, style, ...rest }: BlockProps): JSX.Element;
export default Block;
//# sourceMappingURL=Block.d.ts.map