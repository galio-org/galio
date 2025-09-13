import React, { JSX } from "react";
import { TextProps, TextStyle, ViewStyle } from "react-native";
interface NavBarProps {
    back?: boolean;
    hideLeft?: boolean;
    hideRight?: boolean;
    left?: React.ReactNode;
    leftStyle?: ViewStyle;
    leftIconColor?: string;
    leftHitSlop?: number;
    leftIconSize?: number;
    leftIconName?: string;
    leftIconFamily?: string;
    onLeftPress?: () => void;
    right?: React.ReactNode;
    rightStyle?: ViewStyle;
    style?: ViewStyle;
    transparent?: boolean;
    title?: React.ReactNode;
    titleStyle?: TextStyle;
    titleNumberOfLines?: number;
    titleTextProps?: TextProps;
    accessibilityLabel?: string;
}
declare function NavBar({ back, hideLeft, hideRight, left, leftIconColor, leftHitSlop, leftIconSize, leftIconName, leftStyle, leftIconFamily, onLeftPress, right, rightStyle, style, transparent, title, titleStyle, titleNumberOfLines, titleTextProps, accessibilityLabel, }: NavBarProps): JSX.Element;
export default NavBar;
//# sourceMappingURL=NavBar.d.ts.map