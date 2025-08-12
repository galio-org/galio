import { JSX, useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { useGalioTheme } from "./theme";
import Text from "./atomic/ions/text";

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

    const theme = useGalioTheme();
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
            styles(theme).textStyles,
            disabled && styles(theme).disabledLabel,
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
        styles(theme).container, 
        flexDirection && { flexDirection }, 
        containerStyle
    ], [theme, flexDirection, containerStyle]);

    const whichColor = useMemo(() => {
        if (!color) return theme.COLORS.LIGHT_MODE.info;
        
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
        styles(theme).radioOuterStyles,
        { borderColor: whichColor as string },
        disabled && styles(theme).disabledRadioOuter,
        radioOuterStyle,
    ], [theme, whichColor, disabled, radioOuterStyle]);

    const radioButtonInnerStyles = useMemo(() => [
        styles(theme).radioInnerStyles,
        { backgroundColor: whichColor as string },
        disabled && styles(theme).disabledRadioInner,
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

const styles = (theme: ReturnType<typeof useGalioTheme>) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        radioOuterStyles: {
            height: theme.SIZES.RADIO_HEIGHT,
            width: theme.SIZES.RADIO_WIDTH,
            borderRadius: theme.SIZES.RADIO_HEIGHT * 0.5,
            borderWidth: theme.SIZES.RADIO_THICKNESS,
            borderColor: theme.COLORS.LIGHT_MODE.grey,
            alignItems: 'center',
            justifyContent: 'center',
        },
        radioInnerStyles: {
            height: theme.SIZES.RADIO_HEIGHT * 0.5,
            width: theme.SIZES.RADIO_WIDTH * 0.5,
            borderRadius: theme.SIZES.RADIO_HEIGHT * 0.25,
            backgroundColor: theme.COLORS.LIGHT_MODE.black,
        },
        disabledRadioOuter: {
            borderColor: theme.COLORS.LIGHT_MODE.muted,
        },
        disabledRadioInner: {
            backgroundColor: theme.COLORS.LIGHT_MODE.muted,
        },
        textStyles: {
            color: theme.COLORS.LIGHT_MODE.black,
        },
        disabledLabel: {
            color: theme.COLORS.LIGHT_MODE.muted,
            opacity: theme.SIZES.OPACITY,
        },
    });

export default Radio;