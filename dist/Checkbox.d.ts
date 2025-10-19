import { JSX } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { useColors } from "./theme";
interface SpaceAroundProps {
    direction: 'row-reverse' | 'column' | 'column-reverse' | 'row';
}
interface CheckboxProps {
    checkboxStyle?: ViewStyle;
    color?: keyof ReturnType<typeof useColors> | string;
    disabled?: boolean;
    flexDirection?: SpaceAroundProps['direction'];
    image?: string;
    imageStyle?: ImageStyle;
    /**
     * @deprecated Use iconProps instead
     */
    iconColor?: string;
    /**
     * @deprecated Use iconProps instead
     */
    iconFamily?: string;
    /**
     * @deprecated Use iconProps instead
     */
    iconName?: string;
    /**
     * @deprecated Use iconProps instead
     */
    iconSize?: number;
    /**
     * Icon customization object (family, name, color, size, etc.)
     */
    iconProps?: {
        name?: string;
        family?: string;
        color?: string;
        size?: number;
        [key: string]: any;
    };
    checked?: boolean;
    /**
     * @deprecated Use checked instead
     */
    initialValue?: boolean;
    label?: string;
    labelStyle?: TextStyle;
    labelColor?: keyof ReturnType<typeof useColors> | string;
    onChange?: (checked: boolean) => void;
    style?: ViewStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}
declare function Checkbox({ checkboxStyle, color, disabled, flexDirection, image, imageStyle, iconColor, // deprecated
iconFamily, // deprecated
iconName, // deprecated
iconSize, // deprecated
iconProps, checked: controlledChecked, initialValue, label, labelStyle, labelColor, onChange, style, accessibilityLabel, accessibilityHint, }: CheckboxProps): JSX.Element;
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map