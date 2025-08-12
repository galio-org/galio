import React, { useCallback, useEffect, useState, JSX } from 'react';
import { Switch as Switcher, ViewStyle } from 'react-native';
import { useGalioTheme } from './theme';

interface SwitchProps {
    value?: boolean;
    onValueChange?: (value: boolean) => void;
    color?: string;
    disabled?: boolean;
    trackColor?: { false?: string; true?: string };
    ios_backgroundColor?: string;
    containerStyle?: ViewStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}

function Switch({
    value,
    onValueChange,
    color,
    disabled = false,
    trackColor,
    ios_backgroundColor,
    containerStyle,
    accessibilityLabel,
    accessibilityHint,
}: SwitchProps): JSX.Element {
    const theme = useGalioTheme();
    const [internalValue, setInternalValue] = useState(value ?? false);
    
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    
    useEffect(() => {
        if (value !== undefined) {
            setInternalValue(value);
        }
    }, [value]);
    
    const handleValueChange = useCallback((newValue: boolean) => {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        onValueChange?.(newValue);
    }, [isControlled, onValueChange]);
    
    const getThemeColor = useCallback((colorName?: string) => {
        if (!colorName) return theme.COLORS.LIGHT_MODE.primary;
        
        if (typeof colorName === 'string' && colorName.startsWith('#')) {
            return colorName;
        }
        
        const themeColor = theme.COLORS.LIGHT_MODE[colorName as keyof typeof theme.COLORS.LIGHT_MODE];
        if (typeof themeColor === 'function') {
            return themeColor();
        }
        return themeColor || theme.COLORS.LIGHT_MODE.primary;
    }, [theme.COLORS.LIGHT_MODE]);
    
    const defaultTrackColor = {
        false: theme.COLORS.LIGHT_MODE.grey,
        true: getThemeColor(color),
    };
    
    const finalTrackColor = trackColor || defaultTrackColor;
    const finalIosBackgroundColor = ios_backgroundColor || theme.COLORS.LIGHT_MODE.grey;
    
    const accessibilityProps = {
        accessibilityRole: 'switch' as const,
        accessibilityLabel: accessibilityLabel || 'Switch',
        accessibilityHint: accessibilityHint || 'Toggle switch on or off',
        accessibilityState: {
            checked: currentValue,
        },
    };
    
    return (
        <Switcher
            value={currentValue}
            onValueChange={handleValueChange}
            disabled={disabled}
            trackColor={finalTrackColor}
            ios_backgroundColor={finalIosBackgroundColor}
            style={containerStyle}
            {...accessibilityProps}
        />
    );
}

export default Switch;
