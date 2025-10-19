import React from 'react';
import type { JSX } from 'react';
import { ViewStyle } from 'react-native';
/**
 * Semantic shadow levels for cross-platform consistency.
 */
type ShadowLevel = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SpaceType = 'between' | 'around' | 'evenly' | 'left' | 'right' | 'center' | null;
interface BlockProps {
    /**
     * Layout direction: row (horizontal)
     */
    row?: boolean;
    /**
     * Flex value or enable flex: 1
     */
    flex?: boolean | number;
    /**
     * Center content horizontally
     */
    center?: boolean;
    /**
     * Center content vertically and horizontally
     */
    middle?: boolean;
    /**
     * Align content to top
     */
    top?: boolean;
    /**
     * Align content to bottom
     */
    bottom?: boolean;
    /**
     * Align content to right
     */
    right?: boolean;
    /**
     * Align content to left
     */
    left?: boolean;
    /**
     * Space distribution
     */
    space?: SpaceType;
    /**
     * Fluid width (auto)
     */
    fluid?: boolean;
    /**
     * Height override
     */
    height?: number | null;
    /**
     * Width override
     */
    width?: number | null;
    /**
     * Semantic shadow level: 'none', 'xs', 'sm', 'md', 'lg', 'xl'. If not set, no shadow is applied.
     */
    shadow?: ShadowLevel | boolean;
    /**
     * Custom shadow color (overrides default)
     */
    shadowColor?: string | null;
    /**
     * Card style (border, radius)
     */
    card?: boolean;
    /**
     * Use SafeAreaView
     */
    safe?: boolean;
    /**
     * Custom background color
     */
    background?: string | null;
    /**
     * Content
     */
    children?: React.ReactNode;
    /**
     * Custom style(s)
     */
    style?: ViewStyle | ViewStyle[];
}
declare function Block(props: BlockProps): JSX.Element;
export default Block;
//# sourceMappingURL=Block.d.ts.map