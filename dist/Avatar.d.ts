import { JSX } from "react";
import { ViewStyle, ImageSourcePropType, ImageStyle, TextStyle } from "react-native";
interface AvatarProps {
    source?: ImageSourcePropType;
    label?: string;
    labelColor?: string;
    size?: number;
    backgroundColor?: string;
    shadowLevel?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    disableShadow?: boolean;
    imageProps?: object;
    imageStyle?: ImageStyle;
    containerStyle?: ViewStyle;
    style?: ViewStyle;
    labelStyle?: ViewStyle;
    labelTextStyle?: TextStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}
declare function Avatar({ source, label, labelColor, size, backgroundColor, shadowLevel, disableShadow, imageProps, imageStyle, containerStyle, style, labelStyle, labelTextStyle, accessibilityLabel, accessibilityHint, }: AvatarProps): JSX.Element;
export default Avatar;
//# sourceMappingURL=Avatar.d.ts.map