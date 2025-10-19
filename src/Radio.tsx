import { JSX, useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { useTheme, useColors } from "./theme";
import Text from "./Text";

interface RadioProps {
    color?: keyof ReturnType<typeof useColors> | string;
    containerStyle?: ViewStyle;
    disabled?: boolean;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    initialValue?: boolean;
    label?: string;
    labelStyle?: TextStyle | TextStyle[];
    labelColor?: keyof ReturnType<typeof useColors> | string;
    onChange?: (value: boolean) => void;
    radioOuterStyle?: ViewStyle;
    radioInnerStyle?: ViewStyle;
    value?: boolean;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function Radio({
    color = 'primary',
    containerStyle,
    disabled = false,
    flexDirection = 'row',
    initialValue = false,
    label,
    labelStyle,
    labelColor,
    onChange,
    radioOuterStyle,
    radioInnerStyle,
    value,
    accessibilityLabel,
    accessibilityHint,
    size = 'md',
}: RadioProps): JSX.Element {
    const theme = useTheme();
    const colors = useColors();
    const [internalValue, setInternalValue] = useState(initialValue);
    
    const isControlled = value !== undefined;
    const checked = isControlled ? value : internalValue;

    const spaceAround = useCallback((direction: 'row' | 'row-reverse' | 'column' | 'column-reverse') => {
        switch (direction) {
            case 'row':
                return { marginRight: 10 };
            case 'row-reverse':
                return { marginLeft: 10 };
            case 'column':
                return { marginBottom: 10 };
            case 'column-reverse':
                return { marginTop: 10 };
            default:
                return { marginRight: 10 };
        }
    }, []);

    const resolvedLabelColor = labelColor
        ? colors[labelColor as keyof typeof colors] || labelColor
        : colors.text;
    // Semantic size mapping
    const sizeMap: Record<string, number> = {
        xs: theme.sizes.RADIO_WIDTH * 0.5,
        sm: theme.sizes.RADIO_WIDTH * 0.75,
        md: theme.sizes.RADIO_WIDTH,
        lg: theme.sizes.RADIO_WIDTH * 1.25,
        xl: theme.sizes.RADIO_WIDTH * 1.5,
    };
    const radioSize = typeof size === 'string' && sizeMap[size] ? sizeMap[size] : (typeof size === 'number' ? size : theme.sizes.RADIO_WIDTH);
    const renderLabel = useCallback(() => {
        const labelStyles = [
            styles(theme, colors, radioSize).textStyles,
            { color: resolvedLabelColor },
            disabled && styles(theme, colors, radioSize).disabledLabel,
            ...(Array.isArray(labelStyle) ? labelStyle : [labelStyle]),
            flexDirection && spaceAround(flexDirection),
        ].filter(Boolean);
        if (label) {
            return <Text style={labelStyles}>{label}</Text>;
        }
        return null;
    }, [label, disabled, labelStyle, flexDirection, spaceAround, theme, colors, resolvedLabelColor, radioSize]);

    const radioPressHandler = useCallback(() => {
        if (disabled) return;
        
        const newValue = !checked;
        onChange?.(newValue);
        
        if (!isControlled) {
            setInternalValue(newValue);
        }
    }, [checked, disabled, onChange, isControlled]);

    const containerStyles = useMemo(() => [
        styles(theme, colors, radioSize).container, 
        flexDirection && { flexDirection }, 
        containerStyle
    ], [theme, colors, radioSize, flexDirection, containerStyle]);

    // Use theme palette key for color if available
    const whichColor = useMemo(() => {
        if (color && colors[color as keyof typeof colors]) {
            return colors[color as keyof typeof colors];
        }
        return color || colors.primary;
    }, [color, colors]);

    const radioButtonOuterStyles = useMemo(() => [
        styles(theme, colors, radioSize).radioOuterStyles,
        { borderColor: whichColor as string },
        disabled && styles(theme, colors, radioSize).disabledRadioOuter,
        radioOuterStyle,
    ], [theme, colors, radioSize, whichColor, disabled, radioOuterStyle]);

    const radioButtonInnerStyles = useMemo(() => [
        styles(theme, colors, radioSize).radioInnerStyles,
        { backgroundColor: whichColor as string },
        disabled && styles(theme, colors, radioSize).disabledRadioInner,
        radioInnerStyle,
    ], [theme, colors, radioSize, whichColor, disabled, radioInnerStyle]);

    useEffect(() => {
        if (isControlled && value !== undefined) {
            setInternalValue(value);
        }
    }, [value, isControlled]);

    useEffect(() => {
        if (!isControlled) {
            setInternalValue(initialValue);
        }
    }, [initialValue, isControlled]);

    const accessibilityProps = {
        accessibilityRole: 'radio' as const,
        accessibilityState: { checked, disabled },
        accessibilityLabel: accessibilityLabel || label || 'Radio button',
        accessibilityHint: accessibilityHint || 'Double tap to toggle selection',
    };

    return (
        <Pressable
            onPress={radioPressHandler}
            style={containerStyles}
            disabled={disabled}
            {...accessibilityProps}
        >
            <View style={radioButtonOuterStyles}>
                {checked ? (
                    <View 
                        style={radioButtonInnerStyles}
                    />
                ) : null}
            </View>
            {renderLabel()}
        </Pressable>
    );
}

const styles = (theme: ReturnType<typeof useTheme>, colors: ReturnType<typeof useColors>, radioSize: number) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        radioOuterStyles: {
            height: radioSize,
            width: radioSize,
            borderRadius: radioSize * 0.5,
            borderWidth: theme.sizes.RADIO_THICKNESS,
            borderColor: colors.border,
            alignItems: 'center',
            justifyContent: 'center',
        },
        radioInnerStyles: {
            height: radioSize * 0.5,
            width: radioSize * 0.5,
            borderRadius: radioSize * 0.25,
            backgroundColor: colors.black,
        },
        disabledRadioOuter: {
            borderColor: colors.disabled,
        },
        disabledRadioInner: {
            backgroundColor: colors.disabled,
        },
        textStyles: {
            color: colors.text,
        },
        disabledLabel: {
            color: colors.disabledText,
            opacity: theme.sizes.OPACITY,
        },
    });

export default Radio;