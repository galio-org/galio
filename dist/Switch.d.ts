import { JSX } from 'react';
import { ViewStyle } from 'react-native';
interface SwitchProps {
    value?: boolean;
    onValueChange?: (value: boolean) => void;
    color?: string;
    disabled?: boolean;
    trackColor?: {
        false?: string;
        true?: string;
    };
    ios_backgroundColor?: string;
    containerStyle?: ViewStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}
declare function Switch({ value, onValueChange, color, disabled, trackColor, ios_backgroundColor, containerStyle, accessibilityLabel, accessibilityHint, }: SwitchProps): JSX.Element;
export default Switch;
//# sourceMappingURL=Switch.d.ts.map