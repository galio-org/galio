import type { JSX } from "react";
import { TextStyle, ViewStyle } from "react-native";
export interface ButtonProps {
    color?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    icon?: string | boolean;
    iconRight?: boolean;
    iconFamily?: string;
    iconSize?: number;
    iconColor?: string;
    loading?: boolean;
    loadingSize?: 'small' | 'large';
    loadingColor?: string;
    onlyIcon?: boolean;
    opacity?: number;
    round?: boolean;
    size?: 'large' | 'default' | 'small' | number;
    shadowless?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    uppercase?: boolean;
    lowercase?: boolean;
    capitalize?: boolean;
    onPress?: () => void;
}
declare function Button({ color, children, disabled, icon, iconRight, iconFamily, iconSize, iconColor, loading, loadingSize, loadingColor, onlyIcon, opacity, round, size, shadowless, style, textStyle, uppercase, lowercase, capitalize, onPress, }: ButtonProps): JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map