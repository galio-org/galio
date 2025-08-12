import { useGalioTheme } from "../../theme";
import { useCallback, useState } from "react";
import type { JSX } from "react";
import { ActivityIndicator, Dimensions, Platform, Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import Icon from "../ions/icon";

const { width } = Dimensions.get('window');

export interface ButtonProps {
    color?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    icon?: string | boolean;
    iconRight?: boolean;
    iconFamily?: string;
    iconSize?: number;
    iconColor?: string;
    loading?: boolean;
    loadingSize?: 'small' | 'large';
    loadingColor?: string;
    onlyIcon?: boolean;
    opacity?: number;
    round?: boolean;
    size?: 'large' | 'default' | 'small' | number;
    shadowless?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    uppercase?: boolean;
    lowercase?: boolean;
    capitalize?: boolean;
    onPress?: () => void;
}

function Button({
    color = 'primary',
    children,
    disabled = false,
    icon,
    iconRight = false,
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
    shadowless = false,
    style,
    textStyle,
    uppercase = false,
    lowercase = false,
    capitalize = false,
    onPress,
}: ButtonProps): JSX.Element {
    const theme = useGalioTheme();

    const [pressed, setPressed] = useState(false);

    const getButtonColor = useCallback((colorName: string) => {
        const colorMap: { [key: string]: string } = {
            'primary': theme.COLORS.LIGHT_MODE.primary,
            'info': theme.COLORS.LIGHT_MODE.info,
            'danger': theme.COLORS.LIGHT_MODE.danger,
            'error': theme.COLORS.LIGHT_MODE.danger,
            'warning': theme.COLORS.LIGHT_MODE.warning,
            'success': theme.COLORS.LIGHT_MODE.success,
            'white': theme.COLORS.LIGHT_MODE.white,
            'black': theme.COLORS.LIGHT_MODE.black,
            'secondary': theme.COLORS.LIGHT_MODE.primaryDark,
            'grey': theme.COLORS.LIGHT_MODE.grey,
        };
        
        const result = colorMap[colorName] || colorName;
        return result;
    }, [theme]);

    const getTextColor = useCallback((backgroundColor: string) => {
        const lightColors = ['white', '#FFFFFF', theme.COLORS.LIGHT_MODE.white];
        const isLightBackground = lightColors.includes(backgroundColor);
        
        return isLightBackground 
            ? theme.COLORS.LIGHT_MODE.black 
            : theme.COLORS.LIGHT_MODE.white;
    }, [theme]);

    let content = children;
    const isString = children && typeof children === 'string';
    if (uppercase && isString) content = (children as string).toUpperCase();
    if (lowercase && isString) content = (children as string).toLowerCase();
    if (capitalize && isString) {
        content = `${(children as string).charAt(0).toUpperCase()}${(children as string).slice(1)}`;
    }

    const buttonColor = getButtonColor(color);
    const textColor = getTextColor(buttonColor);

    const textElement = isString && !onlyIcon ? (
        <Text style={[styles(theme).customText, { color: textColor }, textStyle]}>{content}</Text>
    ) : (content);

    const getContent = useCallback(() => {
        if (loading) {
            return <ActivityIndicator size={loadingSize} color={loadingColor || theme.COLORS.LIGHT_MODE.white} />;
        }

        if (onlyIcon && icon) {
            return (
                <Icon
                    name={icon as string}
                    family={iconFamily || 'AntDesign'}
                    size={iconSize}
                    color={iconColor || theme.COLORS.LIGHT_MODE.white}
                />
            );
        }

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {!iconRight && icon && (
                    <Icon
                        name={icon as string}
                        family={iconFamily || 'AntDesign'}
                        size={iconSize}
                        color={iconColor || theme.COLORS.LIGHT_MODE.white}
                        style={{ marginRight: 6 }}
                    />
                )}
                {textElement}
                {iconRight && icon && (
                    <Icon
                        name={icon as string}
                        family={iconFamily || 'AntDesign'}
                        size={iconSize}
                        color={iconColor || theme.COLORS.LIGHT_MODE.white}
                        style={{ marginLeft: 6 }}
                    />
                )}
            </View>
        );
    }, [loading, loadingSize, loadingColor, theme.COLORS.LIGHT_MODE.white, onlyIcon, icon, iconFamily, iconSize, iconColor, iconRight, textElement]);

    const handlePressIn = useCallback(() => setPressed(true), []);
    const handlePressOut = useCallback(() => setPressed(false), []);

    const buttonStyles: ViewStyle[] = [
        styles(theme).defaultButton,
        { backgroundColor: buttonColor },
        size === 'large'
            ? { width: width * 0.8 }
            : size === 'small'
            ? { width: width * 0.3 }
            : { width: width * 0.42 },
        round ? { borderRadius: theme.SIZES.BASE * 3 } : {},
        onlyIcon ? {
            width: iconSize * 2.75,
            height: iconSize * 2.75,
            borderRadius: (iconSize * 2.75) / 2,
        } : {},
        !shadowless && buttonColor !== 'transparent' ? styles(theme).shadow : {},
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
            android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
            accessibilityRole="button"
            accessibilityState={{ disabled }}
            accessibilityLabel={typeof children === 'string' ? children : 'Button'}
        >
            {getContent()}
        </Pressable>
    );
}

const styles = (theme: ReturnType<typeof useGalioTheme>) =>
    StyleSheet.create({
        defaultButton: {
            borderRadius: theme.SIZES.BASE*2,
            height: theme.SIZES.BUTTON_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 8,
            flexDirection: 'row',
        },
        shadow: {
            ...Platform.select({
                ios: {
                    shadowColor: theme.COLORS.LIGHT_MODE.black,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: theme.SIZES.OPACITY,
                    shadowRadius: theme.SIZES.BUTTON_SHADOW_RADIUS,
                },
                android: {
                    elevation: theme.SIZES.ANDROID_ELEVATION,
                },
                web: {
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                },
            }),
        },
        customText: {
            fontSize: theme.SIZES.FONT,
            color: theme.COLORS.LIGHT_MODE.white,
        },
        transparent: { 
            backgroundColor: 'transparent',
            borderWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
        },
    });

export default Button;
