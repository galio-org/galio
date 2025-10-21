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
    /**
     * Button size. Use 'xs', 'sm', 'md', 'lg', 'xl'.
     * Legacy: 'small', 'default', 'large' (will be removed in future)
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'large';
    /**
     * Makes the button take 100% width of its container. Alias: block.
     */
    fullWidth?: boolean;
    /**
     * Alias for fullWidth. If both are set, fullWidth takes precedence.
     */
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