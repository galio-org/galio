import type { SHADOWS } from "./theme/colors";
type ShadowKey = keyof typeof SHADOWS;
import type { JSX } from "react";
import { TextStyle, ViewStyle } from "react-native";
export interface ButtonProps {
    color?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    icon?: string | boolean;
    iconPosition?: 'left' | 'right';
    iconFamily?: string;
    iconSize?: number;
    iconColor?: string;
    loading?: boolean;
    loadingSize?: 'small' | 'large';
    loadingColor?: string;
    onlyIcon?: boolean;
    opacity?: number;
    round?: boolean;
    size?: 'large' | 'default' | 'small';
    fullWidth?: boolean;
    block?: boolean;
    shadow?: ShadowKey;
    style?: ViewStyle;
    textStyle?: TextStyle;
    textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
    onPress?: () => void;
    testID?: string;
    accessibilityLabel?: string;
    rippleColor?: string;
}
declare function Button({ color, children, disabled, icon, iconPosition, iconFamily, iconSize, iconColor, loading, loadingSize, loadingColor, onlyIcon, opacity, round, size, fullWidth, block, shadow, style, textStyle, textTransform, onPress, testID, accessibilityLabel, rippleColor, }: ButtonProps): JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map