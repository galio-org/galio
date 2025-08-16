import React from 'react';
interface ToastProps {
    children: React.ReactNode;
    isShow: boolean;
    positionIndicator?: 'top' | 'center' | 'bottom';
    positionOffset?: number;
    fadeInDuration?: number;
    fadeOutDuration?: number;
    color?: string;
    round?: boolean;
    style?: any;
    textStyle?: any;
}
declare function Toast({ children, isShow, positionIndicator, positionOffset, fadeInDuration, fadeOutDuration, color, round, style, textStyle, }: ToastProps): React.JSX.Element;
export default Toast;
//# sourceMappingURL=Toast.d.ts.map