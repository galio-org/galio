import { JSX, useState, useEffect } from "react";
import { Image, ImageStyle, Pressable, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { useTheme, useColors } from "./theme";
import Text from "./Text";
import Icon from "./Icon";

interface SpaceAroundProps {
    direction: 'row-reverse' | 'column' | 'column-reverse' | 'row';
}

function spaceAround(direction: SpaceAroundProps['direction']) {
    switch (direction) {
        case 'row-reverse':
            return { marginRight: 10 };
        case 'column':
            return { marginTop: 10 };
        case 'column-reverse':
            return { marginBottom: 10 };
        default:
            return { marginLeft: 10 };
    }
}

interface LabelProps {
    image?: string;
    label?: string;
    disabled?: boolean;
    labelStyle?: TextStyle | TextStyle[];
    imageStyle?: ImageStyle;
    flexDirection?: SpaceAroundProps['direction'];
}

function renderLabel({
    image,
    label,
    disabled,
    labelStyle,
    imageStyle,
    flexDirection,
}: LabelProps): JSX.Element | null {
    const theme = useTheme();
    const labelStyles = [
        styles(theme).textStyles,
        disabled && styles(theme).disabledLabel,
        ...(Array.isArray(labelStyle) ? labelStyle : [labelStyle]),
        flexDirection && spaceAround(flexDirection),
    ].filter(Boolean);

    const imageStyles = [imageStyle, flexDirection && spaceAround(flexDirection)].filter(Boolean);
    
    if (image && !label) {
        return <Image source={{ uri: image }} style={imageStyles} />;
    }
    if (!image && label) {
        return <Text style={labelStyles}>{label}</Text>;
    }
    return null;
}

interface CheckedProps {
    checked?: boolean;
    iconColor?: string;
    iconFamily?: string;
    iconName?: string;
    iconSize?: number;
}

function renderChecked({
    checked,
    iconColor,
    iconFamily,
    iconName,
    iconSize,
}: CheckedProps): JSX.Element | null {
    if (checked) {
        return (
            <Icon 
                name={iconName || 'check'} 
                family={iconFamily || 'antdesign'} 
                color={iconColor || '#000'} 
                size={iconSize || 16}
            />
        );
    }
    return null;
}

interface OnPressProps {
    checked?: boolean;
    onChange: (checked: boolean) => void;
    setChecked: (checked: boolean) => void;
}

function _onPress({
    checked,
    onChange,
    setChecked,
}: OnPressProps) {
    const current = !checked;
    onChange(current);
    setChecked(current);
}

interface CheckboxProps {
    checkboxStyle?: ViewStyle;
    color?: keyof ReturnType<typeof useColors> | string;
    disabled?: boolean;
    flexDirection?: SpaceAroundProps['direction'];
    image?: string;
    imageStyle?: ImageStyle;
    /**
     * @deprecated Use iconProps instead
     */
    iconColor?: string;
    /**
     * @deprecated Use iconProps instead
     */
    iconFamily?: string;
    /**
     * @deprecated Use iconProps instead
     */
    iconName?: string;
    /**
     * @deprecated Use iconProps instead
     */
    iconSize?: number;
    /**
     * Icon customization object (family, name, color, size, etc.)
     */
    iconProps?: {
        name?: string;
        family?: string;
        color?: string;
        size?: number;
        [key: string]: any;
    };
    checked?: boolean; // Controlled mode
    /**
     * @deprecated Use checked instead
     */
    initialValue?: boolean;
    label?: string;
    labelStyle?: TextStyle;
    labelColor?: keyof ReturnType<typeof useColors> | string;
    onChange?: (checked: boolean) => void;
    style?: ViewStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}

function Checkbox({
    checkboxStyle,
    color = 'primary',
    disabled = false,
    flexDirection = 'row',
    image,
    imageStyle,
    iconColor = '#fff', // deprecated
    iconFamily = 'FontAwesome', // deprecated
    iconName = 'check', // deprecated
    iconSize = 15, // deprecated
    iconProps = {},
    checked: controlledChecked,
    initialValue = false,
    label,
    labelStyle,
    labelColor,
    onChange = () => {},
    style,
    accessibilityLabel,
    accessibilityHint,
}: CheckboxProps): JSX.Element {
    const theme = useTheme();
    const colors = useColors();
    
    // Support both controlled and uncontrolled modes
    const isControlled = controlledChecked !== undefined;
    const [internalChecked, setInternalChecked] = useState(initialValue);
    const checked = isControlled ? controlledChecked : internalChecked;

    // Update internal state if controlledChecked changes (for controlled mode)
    useEffect(() => {
        if (isControlled && controlledChecked !== undefined) {
            setInternalChecked(controlledChecked);
        }
    }, [controlledChecked, isControlled]);

    const colorStyle = color 
        ? colors[color as keyof typeof colors] || color
        : colors.primary;
    const resolvedLabelColor = labelColor
        ? colors[labelColor as keyof typeof colors] || labelColor
        : colors.text;

    const checkBoxContainerStyle = [
        styles(theme).container, 
        flexDirection && { flexDirection }, 
        style
    ].filter(Boolean);

    const checkedInnerStyles = [
        styles(theme).checked,
        colorStyle && { backgroundColor: colorStyle, borderColor: colorStyle },
    ].filter(Boolean);

    const checkedBoxViewStyles = [
        styles(theme).checkboxView,
        styles(theme).uncheckedBoxView,
        color && { borderColor: colorStyle },
        color && !colorStyle && { borderColor: color },
        checked && checkedInnerStyles,
        disabled && styles(theme).disabled,
        checkboxStyle,
    ].filter(Boolean);
    
    const defaultAccessibilityLabel = accessibilityLabel || 
        (label ? `${label} checkbox` : 'checkbox');
    
    const handlePress = () => {
        if (!isControlled) {
            // Uncontrolled mode: update internal state
            _onPress({ checked, onChange, setChecked: setInternalChecked });
        } else {
            // Controlled mode: just call onChange, parent handles state
            onChange(!checked);
        }
    };

    return (
        <Pressable
            onPress={handlePress}
            style={checkBoxContainerStyle}
            disabled={disabled}
            accessibilityRole="checkbox"
            accessibilityState={{ checked, disabled }}
            accessibilityLabel={defaultAccessibilityLabel}
            accessibilityHint={accessibilityHint}
        >
            <View style={checkedBoxViewStyles as unknown as ViewStyle}>
                {checked ? (
                    <Icon
                        name={iconProps.name || iconName}
                        family={iconProps.family || iconFamily}
                        color={iconProps.color || iconColor}
                        size={iconProps.size || iconSize}
                        {...iconProps}
                    />
                ) : null}
            </View>
            {renderLabel({
                image,
                label,
                disabled,
                labelStyle: ([{ color: resolvedLabelColor }, labelStyle].filter(Boolean)) as TextStyle[],
                imageStyle,
                flexDirection,
            })}
        </Pressable>
    );
}

const styles = (theme: ReturnType<typeof useTheme>) => {
  const colors = theme.colors; // Use semantic colors
  
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    checkboxView: {
      width: theme.sizes.CHECKBOX_WIDTH,
      height: theme.sizes.CHECKBOX_HEIGHT,
      borderWidth: theme.sizes.BORDER_WIDTH,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.sizes.BORDER_RADIUS,
    },
    uncheckedBoxView: {
      backgroundColor: colors.transparent,
      borderColor: colors.border,
    },
    checked: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    disabled: {
      borderColor: colors.disabled,
    },
    textStyles: {
      color: colors.text,
    },
    disabledLabel: {
      color: colors.disabledText,
      opacity: theme.sizes.OPACITY,
    },
  });
};

export default Checkbox;