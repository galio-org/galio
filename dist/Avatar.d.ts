import { JSX } from "react";
import { ViewStyle, ImageSourcePropType, ImageStyle } from "react-native";
interface AvatarProps {
    source?: ImageSourcePropType;
    label?: string;
    labelColor?: string;
    size?: number;
    backgroundColor?: string;
    imageProps?: object;
    imageStyle?: ImageStyle;
    containerStyle?: ViewStyle;
    style?: ViewStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}
declare function Avatar({ source, label, labelColor, size, backgroundColor, imageProps, imageStyle, containerStyle, style, accessibilityLabel, accessibilityHint, }: AvatarProps): JSX.Element;
export default Avatar;
//# sourceMappingURL=Avatar.d.ts.map