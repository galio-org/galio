import { JSX } from "react";
import { ViewStyle, ImageSourcePropType, ImageStyle, TextStyle } from "react-native";
interface AvatarProps {
    source?: ImageSourcePropType;
    label?: string;
    labelColor?: string;
    size?: number;
    backgroundColor?: string;
    labelFontSize?: number;
    labelFontWeight?: TextStyle['fontWeight'];
    imageProps?: object;
    imageStyle?: ImageStyle;
    containerStyle?: ViewStyle;
    style?: ViewStyle;
    labelStyle?: ViewStyle;
    labelTextStyle?: TextStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}
declare function Avatar({ source, label, labelColor, size, backgroundColor, labelFontSize, labelFontWeight, imageProps, imageStyle, containerStyle, style, labelStyle, labelTextStyle, accessibilityLabel, accessibilityHint, }: AvatarProps): JSX.Element;
export default Avatar;
//# sourceMappingURL=Avatar.d.ts.map