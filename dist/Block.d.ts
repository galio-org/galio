import React from 'react';
import type { JSX } from 'react';
import { ViewStyle } from 'react-native';
type SpaceType = 'between' | 'around' | 'evenly' | 'left' | 'right' | 'center' | null;
interface BlockProps extends Omit<ViewStyle, keyof BlockSpecificProps> {
    row?: boolean;
    flex?: boolean | number;
    center?: boolean;
    middle?: boolean;
    top?: boolean;
    bottom?: boolean;
    right?: boolean;
    left?: boolean;
    space?: SpaceType;
    fluid?: boolean;
    height?: number | null;
    width?: number | null;
    shadow?: boolean;
    shadowColor?: string | null;
    card?: boolean;
    safe?: boolean;
    background?: string | null;
    children?: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
}
interface BlockSpecificProps {
    row?: boolean;
    flex?: boolean | number;
    center?: boolean;
    middle?: boolean;
    top?: boolean;
    bottom?: boolean;
    right?: boolean;
    left?: boolean;
    space?: SpaceType;
    fluid?: boolean;
    height?: number | null;
    width?: number | null;
    shadow?: boolean;
    shadowColor?: string | null;
    card?: boolean;
    safe?: boolean;
    background?: string | null;
    children?: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
}
declare function Block(props: BlockProps): JSX.Element;
export default Block;
//# sourceMappingURL=Block.d.ts.map