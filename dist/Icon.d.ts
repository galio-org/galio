import React from 'react';
import type { JSX } from 'react';
export interface IconProps {
    name: string;
    family: string;
    size?: number;
    color?: string;
    medium?: boolean;
    large?: boolean;
    [key: string]: any;
}
declare function Icon({ name, family, size, color, medium, large, ...rest }: IconProps): JSX.Element | null;
declare const _default: React.MemoExoticComponent<typeof Icon>;
export default _default;
//# sourceMappingURL=Icon.d.ts.map