import { JSX } from "react";
import { TextStyle, ViewStyle } from "react-native";
interface RadioProps {
    color?: string;
    containerStyle?: ViewStyle;
    disabled?: boolean;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    initialValue?: boolean;
    label?: string;
    labelStyle?: TextStyle;
    onChange?: (value: boolean) => void;
    radioOuterStyle?: ViewStyle;
    radioInnerStyle?: ViewStyle;
    value?: boolean;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}
declare function Radio({ color, containerStyle, disabled, flexDirection, initialValue, label, labelStyle, onChange, radioOuterStyle, radioInnerStyle, value, accessibilityLabel, accessibilityHint, }: RadioProps): JSX.Element;
export default Radio;
//# sourceMappingURL=Radio.d.ts.map