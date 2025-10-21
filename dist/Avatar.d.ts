import { JSX } from "react";
import { ViewStyle, ImageSourcePropType, ImageStyle, TextStyle } from "react-native";
interface AvatarProps {
    /**
     * Semantic shadow level: 'none', 'xs', 'sm', 'md', 'lg', 'xl'.
     * If not set, no shadow is applied.
     */
    shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Image source for the avatar (URL, require, etc.)
     */
    source?: ImageSourcePropType;
    /**
     * Text or initials to display if no image is provided
     */
    label?: string;
    /**
     * Color for the label text
     */
    labelColor?: string;
    /**
     * Size of the avatar (width & height)
     */
    size?: number;
    /**
     * Background color for the avatar
     */
    backgroundColor?: string;
    /**
     * Font size for the label text
     */
    labelFontSize?: number;
    /**
     * Font weight for the label text
     */
    labelFontWeight?: TextStyle['fontWeight'];
    /**
     * Props to pass to the underlying Image component
     */
    imageProps?: object;
    /**
     * Style for the Image component
     */
    imageStyle?: ImageStyle;
    /**
     * Style for the avatar container (outer View)
     */
    containerStyle?: ViewStyle;
    /**
     * Additional style for the outermost View
     */
    style?: ViewStyle;
    /**
     * Style for the label container (View around Text)
     */
    labelStyle?: ViewStyle;
    /**
     * Style for the label Text
     */
    labelTextStyle?: TextStyle;
    /**
     * Accessibility label for screen readers
     */
    accessibilityLabel?: string;
    /**
     * Accessibility hint for screen readers
     */
    accessibilityHint?: string;
}
declare function Avatar({ source, label, labelColor, size, backgroundColor, labelFontSize, labelFontWeight, imageProps, imageStyle, containerStyle, style, labelStyle, labelTextStyle, accessibilityLabel, accessibilityHint, shadow, }: AvatarProps): JSX.Element;
export default Avatar;
//# sourceMappingURL=Avatar.d.ts.map