import { JSX } from "react";
import { StyleSheet, ViewStyle, View, Text, Image, ImageSourcePropType, Platform, ImageStyle, TextStyle } from "react-native";
import { useTheme, useColors } from "./theme";

interface AvatarProps {
    source?: ImageSourcePropType;
    label?: string;
    labelColor?: string;
    size?: number;
    backgroundColor?: string;
    shadowLevel?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    imageProps?: object;
    imageStyle?: ImageStyle;
    containerStyle?: ViewStyle;
    style?: ViewStyle;
    labelStyle?: ViewStyle;
    labelTextStyle?: TextStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}


function Avatar({
    source,
    label,
    labelColor,
    size = 50,
    backgroundColor,
    shadowLevel = 'md',
    imageProps,
    imageStyle,
    containerStyle,
    style,
    labelStyle,
    labelTextStyle,
    accessibilityLabel,
    accessibilityHint,
}: AvatarProps): JSX.Element {
    const theme = useTheme();
    const colors = theme.colors;
    const avatarSize = size || 50;
    const shadow = theme.shadows?.[shadowLevel] || theme.shadows?.md || {};

    // Platform shadow composition (web boxShadow must be handled separately)
    const nativeShadow = Platform.select({
        ios: shadow.ios || {},
        android: shadow.android || {},
    }) || {};

    // Compose container style, adding boxShadow for web
    const containerBaseStyle: ViewStyle = {
        width: avatarSize,
        height: avatarSize,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: avatarSize / 2,
        overflow: 'hidden',
        backgroundColor: backgroundColor || colors.background,
        ...nativeShadow,
    };
    // For web, add boxShadow if present
    const containerWebStyle: ViewStyle = Platform.OS === 'web' && shadow.web ? { boxShadow: shadow.web.boxShadow } : {};

    const stylesheet = StyleSheet.create({
        container: {
            ...containerBaseStyle,
            ...containerWebStyle,
        },
        image: {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
        },
        label: {
            width: avatarSize,
            height: avatarSize,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: avatarSize / 2,
            backgroundColor: backgroundColor || colors.disabled,
        },
        labelText: {
            color: labelColor || colors.white,
            fontSize: Math.max(12, avatarSize * 0.32),
            fontWeight: '600',
            textAlign: 'center',
        },
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
                <View style={[stylesheet.label, labelStyle]}>
                    <Text numberOfLines={1} style={[stylesheet.labelText, labelTextStyle]}>
                        {label}
                    </Text>
                </View>
            ) : null}
        </View>
    );
}

export default Avatar;
