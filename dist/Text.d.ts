import React from 'react';
import type { JSX } from 'react';
import { StyleProp, TextStyle } from 'react-native';
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
declare function Typography({ style, h1, h2, h3, h4, h5, h6, p, body, small, muted, neutral, size, color, bold, italic, center, children, theme: propTheme, shadow, ...rest }: TypographyProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Typography>;
export default _default;
//# sourceMappingURL=Text.d.ts.map