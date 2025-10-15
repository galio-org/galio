import { JSX } from "react";
import { StyleSheet, ViewStyle, View, Text, Image, ImageSourcePropType, Platform, ImageStyle } from "react-native";
import { useTheme, useColors } from "./theme";

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

function Avatar({
    source,
    label,
    labelColor,
    size = 50,
    backgroundColor,
    imageProps,
    imageStyle,
    containerStyle,
    style,
    accessibilityLabel,
    accessibilityHint,
}: AvatarProps): JSX.Element {
    const colors = useColors();
    const avatarSize = size || 50;

    const stylesheet = StyleSheet.create({
        container: {
            width: avatarSize,
            height: avatarSize,
            alignItems: 'center' as const,
            justifyContent: 'center' as const,
            borderRadius: avatarSize / 2,
            overflow: 'hidden',
            ...Platform.select({
                ios: {
                    shadowColor: colors.border,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                },
                android: {
                    elevation: 2,
                },
                web: {
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                },
            }),
        },
        image: {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
        },
        label: {
            width: avatarSize,
            height: avatarSize,
            alignItems: 'center' as const,
            justifyContent: 'center' as const,
            borderRadius: avatarSize / 2,
            backgroundColor: backgroundColor || colors.disabled,
        },
        labelText: {
            color: labelColor || colors.white,
            fontSize: Math.max(12, avatarSize * 0.32),
            fontWeight: '600' as const,
            textAlign: 'center' as const,
        }
    });

    const defaultAccessibilityLabel = accessibilityLabel || 
        (label ? `Avatar with label ${label}` : 'Avatar image');

    return (
        <View 
            style={[stylesheet.container, containerStyle, style]}
            accessibilityRole="image"
            accessibilityLabel={defaultAccessibilityLabel}
            accessibilityHint={accessibilityHint}
        >
            {source ? (
                <Image 
                    source={source}
                    style={[stylesheet.image, imageStyle]}
                    {...imageProps}
                />
            ) : label ? (
                <View style={stylesheet.label}>
                    <Text numberOfLines={1} style={stylesheet.labelText}>
                        {label}
                    </Text>
                </View>
            ) : null}
        </View>
    );
}

export default Avatar;
