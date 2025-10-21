import { JSX } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { useColors } from "./theme";
interface RadioProps {
    color?: keyof ReturnType<typeof useColors> | string;
    containerStyle?: ViewStyle;
    disabled?: boolean;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    initialValue?: boolean;
    label?: string;
    labelStyle?: TextStyle | TextStyle[];
    labelColor?: keyof ReturnType<typeof useColors> | string;
    onChange?: (value: boolean) => void;
    radioOuterStyle?: ViewStyle;
    radioInnerStyle?: ViewStyle;
    value?: boolean;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
declare function Radio({ color, containerStyle, disabled, flexDirection, initialValue, label, labelStyle, labelColor, onChange, radioOuterStyle, radioInnerStyle, value, accessibilityLabel, accessibilityHint, size, }: RadioProps): JSX.Element;
export default Radio;
//# sourceMappingURL=Radio.d.ts.map