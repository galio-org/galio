import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
export interface LinkProps {
    children?: React.ReactNode;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    color?: string;
    disabled?: boolean;
    activeOpacity?: number;
}
export interface linkRef {
    press: () => void;
}
declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<linkRef>>;
export default Link;
//# sourceMappingURL=Link.d.ts.map