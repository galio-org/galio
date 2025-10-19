import { useTheme, useColors } from "./theme";
import type { SHADOWS } from "./theme/colors";
type ShadowKey = keyof typeof SHADOWS;
import { useCallback, useState } from "react";
import type { JSX } from "react";
import { ActivityIndicator, Dimensions, Platform, Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import Icon from "./Icon";

const { width } = Dimensions.get('window');

export interface ButtonProps {
    color?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    icon?: string | boolean;
    iconPosition?: 'left' | 'right';
    iconFamily?: string;
    iconSize?: number;
    iconColor?: string;
    loading?: boolean;
    loadingSize?: 'small' | 'large';
    loadingColor?: string;
    onlyIcon?: boolean;
    opacity?: number;
    round?: boolean;
    size?: 'large' | 'default' | 'small';
    fullWidth?: boolean;
    block?: boolean;
    shadow?: ShadowKey;
    style?: ViewStyle;
    textStyle?: TextStyle;
    textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
    onPress?: () => void;
    testID?: string;
    accessibilityLabel?: string;
    rippleColor?: string;
}

function Button({
    color = 'primary',
    children,
    disabled = false,
    icon,
    iconPosition = 'left',
    iconFamily,
    iconSize = 16,
    iconColor,
    loading = false,
    loadingSize = 'small',
    loadingColor,
    onlyIcon = false,
    opacity = 0.8,
    round = false,
    size = 'default',
    fullWidth = false,
    block = false,
    shadow,
    style,
    textStyle,
    textTransform = 'none',
    onPress,
    testID,
    accessibilityLabel,
    rippleColor,
}: ButtonProps): JSX.Element {
    const theme = useTheme();
    const colors = useColors();

    const [pressed, setPressed] = useState(false);

    const getButtonColor = useCallback((colorName: string) => {
        const colorMap: { [key: string]: string } = {
            'primary': colors.primary,
            'info': colors.info,
            'danger': colors.error,
            'error': colors.error,
            'warning': colors.warning,
            'success': colors.success,
            'white': colors.white,
            'black': colors.black,
            'secondary': colors.primaryHover,
        };
        
        const result = colorMap[colorName] || colorName;
        return result;
    }, [colors]);

    const getTextColor = useCallback((backgroundColor: string) => {
        const lightColors = ['white', '#FFFFFF', colors.white];
        const isLightBackground = lightColors.includes(backgroundColor);
        
        return isLightBackground 
            ? colors.black 
            : colors.white;
    }, [colors]);

    let content = children;
    const isString = children && typeof children === 'string';
    if (isString) {
        switch (textTransform) {
            case 'uppercase':
                content = (children as string).toUpperCase();
                break;
            case 'lowercase':
                content = (children as string).toLowerCase();
                break;
            case 'capitalize':
                content = `${(children as string).charAt(0).toUpperCase()}${(children as string).slice(1)}`;
                break;
            default:
                content = children;
        }
    }

    const buttonColor = getButtonColor(color);
    const textColor = getTextColor(buttonColor);

    const textElement = isString && !onlyIcon ? (
        <Text style={[styles(theme).customText, { color: textColor }, textStyle]}>{content}</Text>
    ) : (content);

    const getContent = useCallback(() => {
        if (loading) {
            return <ActivityIndicator size={loadingSize} color={loadingColor || colors.white} />;
        }

        if (onlyIcon && icon) {
            return (
                <Icon
                    name={icon as string}
                    family={iconFamily || 'AntDesign'}
                    size={iconSize}
                    color={iconColor || colors.white}
                />
            );
        }

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {icon && iconPosition === 'left' && (
                    <Icon
                        name={icon as string}
                        family={iconFamily || 'AntDesign'}
                        size={iconSize}
                        color={iconColor || colors.white}
                        style={{ marginRight: 6 }}
                    />
                )}
                {textElement}
                {icon && iconPosition === 'right' && (
                    <Icon
                        name={icon as string}
                        family={iconFamily || 'AntDesign'}
                        size={iconSize}
                        color={iconColor || colors.white}
                        style={{ marginLeft: 6 }}
                    />
                )}
            </View>
        );
    }, [loading, loadingSize, loadingColor, colors.white, onlyIcon, icon, iconFamily, iconSize, iconColor, iconPosition, textElement]);

    const handlePressIn = useCallback(() => setPressed(true), []);
    const handlePressOut = useCallback(() => setPressed(false), []);

    // Determine shadow style from theme
    let shadowStyle: ViewStyle = {};
    if (
        shadow &&
        buttonColor !== 'transparent' &&
        theme.shadows &&
        Object.prototype.hasOwnProperty.call(theme.shadows, shadow)
    ) {
        const platform = Platform.OS;
        if (platform === 'ios' || platform === 'android' || platform === 'web') {
            shadowStyle = (theme.shadows as typeof SHADOWS)[shadow as keyof typeof SHADOWS][platform] || {};
        }
    }

    const buttonStyles: ViewStyle[] = [
        styles(theme).defaultButton,
        { backgroundColor: buttonColor },
        size === 'large'
            ? { width: width * 0.8 }
            : size === 'small'
            ? { width: width * 0.3 }
            : { width: width * 0.42 },
        fullWidth || block ? { width: '100%' } : {},
        round ? { borderRadius: theme.sizes.BASE * 3 } : {},
        onlyIcon ? {
            width: iconSize * 2.75,
            height: iconSize * 2.75,
            borderRadius: (iconSize * 2.75) / 2,
        } : {},
        shadowStyle,
        { opacity: disabled ? 0.6 : pressed ? opacity : 1 },
        style || {},
    ];

    return (
        <Pressable
            onPress={!disabled ? onPress : undefined}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={buttonStyles}
            disabled={disabled}
            android_ripple={{ color: rippleColor || 'rgba(0,0,0,0.1)' }}
            accessibilityRole="button"
            accessibilityState={{ disabled }}
            accessibilityLabel={accessibilityLabel || (typeof children === 'string' ? children : 'Button')}
            testID={testID}
        >
            {getContent()}
        </Pressable>
    );
}

const styles = (theme: ReturnType<typeof useTheme>) => {
    const colors = theme.colors;
    return StyleSheet.create({
        defaultButton: {
            borderRadius: theme.sizes.BASE * 2,
            height: theme.sizes.BUTTON_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 8,
            flexDirection: 'row',
        },
        customText: {
            fontSize: theme.sizes.FONT,
            color: colors.white,
        },
        transparent: {
            backgroundColor: 'transparent',
            borderWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
        },
    });
};

export default Button;
