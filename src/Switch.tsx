
import React, { useCallback, useEffect, useState, JSX } from 'react';
import { Switch as RNSwitch, ViewStyle } from 'react-native';
import { useColors } from './theme';

interface SwitchProps {
    value?: boolean;
    onValueChange?: (value: boolean) => void;
    color?: keyof ReturnType<typeof useColors> | string;
    disabled?: boolean;
    trackColor?: { false?: string; true?: string };
    iosBackgroundColor?: string;
    containerStyle?: ViewStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}

const Switch: React.FC<SwitchProps> = ({
    value,
    onValueChange,
    color = 'primary',
    disabled = false,
    trackColor,
    iosBackgroundColor,
    containerStyle,
    accessibilityLabel,
    accessibilityHint,
}) => {
    const colors = useColors();
    const [internalValue, setInternalValue] = useState(value ?? false);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    useEffect(() => {
        if (isControlled) setInternalValue(value!);
    }, [value, isControlled]);

    const handleValueChange = useCallback((newValue: boolean) => {
        if (!isControlled) setInternalValue(newValue);
        onValueChange?.(newValue);
    }, [isControlled, onValueChange]);

    // Resolve theme palette key or custom color
    const resolveColor = (c?: keyof typeof colors | string, fallback?: string) => {
        if (!c) return fallback || colors.primary;
        if (typeof c === 'string' && c.startsWith('#')) return c;
        return colors[c as keyof typeof colors] || fallback || colors.primary;
    };

    const defaultTrackColor = {
        false: resolveColor(trackColor?.false || 'surfaceVariant', colors.surfaceVariant),
        true: resolveColor(trackColor?.true || color, colors.primary),
    };
    const finalTrackColor = {
        false: defaultTrackColor.false,
        true: defaultTrackColor.true,
    };
    const finalIosBackgroundColor = resolveColor(iosBackgroundColor || 'surfaceVariant', colors.surfaceVariant);

    return (
        <RNSwitch
            value={currentValue}
            onValueChange={handleValueChange}
            disabled={disabled}
            trackColor={finalTrackColor}
            ios_backgroundColor={finalIosBackgroundColor}
            style={containerStyle}
            accessibilityRole="switch"
            accessibilityLabel={accessibilityLabel || 'Switch'}
            accessibilityHint={accessibilityHint || 'Toggle switch on or off'}
            accessibilityState={{ checked: currentValue }}
        />
    );
};

export default Switch;
