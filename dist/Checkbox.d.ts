import { JSX } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
interface SpaceAroundProps {
    direction: 'row-reverse' | 'column' | 'column-reverse' | 'row';
}
interface CheckboxProps {
    checkboxStyle?: ViewStyle;
    color?: string;
    disabled?: boolean;
    flexDirection?: SpaceAroundProps['direction'];
    image?: string;
    imageStyle?: ImageStyle;
    iconColor?: string;
    iconFamily?: string;
    iconName?: string;
    iconSize?: number;
    initialValue?: boolean;
    label?: string;
    labelStyle?: TextStyle;
    onChange?: (checked: boolean) => void;
    style?: ViewStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}
declare function Checkbox({ checkboxStyle, color, disabled, flexDirection, image, imageStyle, iconColor, iconFamily, iconName, iconSize, initialValue, label, labelStyle, onChange, style, accessibilityLabel, accessibilityHint, }: CheckboxProps): JSX.Element;
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map