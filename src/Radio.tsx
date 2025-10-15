import { JSX, useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { useTheme, useColors } from "./theme";
import Text from "./Text";

interface RadioProps {
    color?: string;
    containerStyle?: ViewStyle;
    disabled?: boolean;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    initialValue?: boolean;
    label?: string;
    labelStyle?: TextStyle;
    onChange?: (value: boolean) => void;
    radioOuterStyle?: ViewStyle;
    radioInnerStyle?: ViewStyle;
    value?: boolean;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}

function Radio({
    color = 'primary',
    containerStyle,
    disabled = false,
    flexDirection = 'row',
    initialValue = false,
    label,
    labelStyle,
    onChange,
    radioOuterStyle,
    radioInnerStyle,
    value,
    accessibilityLabel,
    accessibilityHint,
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

    const renderLabel = useCallback(() => {
        const labelStyles = [
            styles(theme, colors).textStyles,
            disabled && styles(theme, colors).disabledLabel,
            labelStyle,
            flexDirection && spaceAround(flexDirection),
        ];

        if (label) {
            return <Text style={labelStyles}>{label}</Text>;
        }
        return null;
    }, [label, disabled, labelStyle, flexDirection, spaceAround, theme]);

    const radioPressHandler = useCallback(() => {
        if (disabled) return;
        
        const newValue = !checked;
        onChange?.(newValue);
        
        if (!isControlled) {
            setInternalValue(newValue);
        }
    }, [checked, disabled, onChange, isControlled]);

    const containerStyles = useMemo(() => [
        styles(theme, colors).container, 
        flexDirection && { flexDirection }, 
        containerStyle
    ], [theme, flexDirection, containerStyle]);

    const whichColor = useMemo(() => {
        if (!color) return colors.info;
        
        const upperColor = color.toUpperCase();
        const themeColor = theme.COLORS.LIGHT_MODE[upperColor as keyof typeof theme.COLORS.LIGHT_MODE];
        
        if (themeColor) {
            if (typeof themeColor === 'function') {
                return themeColor();
            }
            return themeColor;
        }
        
        return color;
    }, [color, theme.COLORS]);

    const radioButtonOuterStyles = useMemo(() => [
        styles(theme, colors).radioOuterStyles,
        { borderColor: whichColor as string },
        disabled && styles(theme, colors).disabledRadioOuter,
        radioOuterStyle,
    ], [theme, whichColor, disabled, radioOuterStyle]);

    const radioButtonInnerStyles = useMemo(() => [
        styles(theme, colors).radioInnerStyles,
        { backgroundColor: whichColor as string },
        disabled && styles(theme, colors).disabledRadioInner,
        radioInnerStyle,
    ], [theme, whichColor, disabled, radioInnerStyle]);

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

const styles = (theme: ReturnType<typeof useTheme>, colors: ReturnType<typeof useColors>) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        radioOuterStyles: {
            height: theme.sizes.RADIO_HEIGHT,
            width: theme.sizes.RADIO_WIDTH,
            borderRadius: theme.sizes.RADIO_HEIGHT * 0.5,
            borderWidth: theme.sizes.RADIO_THICKNESS,
            borderColor: colors.border,
            alignItems: 'center',
            justifyContent: 'center',
        },
        radioInnerStyles: {
            height: theme.sizes.RADIO_HEIGHT * 0.5,
            width: theme.sizes.RADIO_WIDTH * 0.5,
            borderRadius: theme.sizes.RADIO_HEIGHT * 0.25,
            backgroundColor: colors.black,
        },
        disabledRadioOuter: {
            borderColor: colors.disabled,
        },
        disabledRadioInner: {
            backgroundColor: colors.disabled,
        },
        textStyles: {
            color: colors.black,
        },
        disabledLabel: {
            color: colors.textSecondary,
            opacity: theme.sizes.OPACITY,
        },
    });

export default Radio;