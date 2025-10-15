import { JSX, useState, useEffect } from "react";
import { Image, ImageStyle, Pressable, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { useGalioTheme, useThemeColors } from "./theme";
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
    labelStyle?: TextStyle;
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
    const theme = useGalioTheme();
    const labelStyles = [
        styles(theme).textStyles,
        disabled && styles(theme).disabledLabel,
        labelStyle,
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
    color?: string;
    disabled?: boolean;
    flexDirection?: SpaceAroundProps['direction'];
    image?: string;
    imageStyle?: ImageStyle;
    iconColor?: string;
    iconFamily?: string;
    iconName?: string;
    iconSize?: number;
    checked?: boolean; // Controlled mode
    initialValue?: boolean; // Uncontrolled mode (deprecated, use checked instead)
    label?: string;
    labelStyle?: TextStyle;
    onChange?: (checked: boolean) => void;
    style?: ViewStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}

function Checkbox({
    checkboxStyle,
    color = 'theme',
    disabled = false,
    flexDirection = 'row',
    image,
    imageStyle,
    iconColor = '#fff',
    iconFamily = 'FontAwesome',
    iconName = 'check',
    iconSize = 15,
    checked: controlledChecked,
    initialValue = false,
    label,
    labelStyle,
    onChange = () => {},
    style,
    accessibilityLabel,
    accessibilityHint,
}: CheckboxProps): JSX.Element {
    const theme = useGalioTheme();
    const colors = useThemeColors();
    
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
        ? colors[color as keyof typeof colors] || theme.COLORS.LIGHT_MODE[color as keyof typeof theme.COLORS.LIGHT_MODE]
        : colors.primary;

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
                {renderChecked({ checked, iconColor, iconFamily, iconName, iconSize })}
            </View>
            {renderLabel({ image, label, disabled, labelStyle, imageStyle, flexDirection })}
        </Pressable>
    );
}

const styles = (theme: ReturnType<typeof useGalioTheme>) => {
  const modeKey = theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE';
  const colors = theme.COLORS[modeKey];
  
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    checkboxView: {
      width: theme.SIZES.CHECKBOX_WIDTH,
      height: theme.SIZES.CHECKBOX_HEIGHT,
      borderWidth: theme.SIZES.BORDER_WIDTH,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.SIZES.BORDER_RADIUS,
    },
    uncheckedBoxView: {
      backgroundColor: colors.transparent,
      borderColor: colors.grey,
    },
    checked: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    disabled: {
      borderColor: colors.muted,
    },
    textStyles: {
      color: colors.black,
    },
    disabledLabel: {
      color: colors.muted,
      opacity: theme.SIZES.OPACITY,
    },
  });
};

export default Checkbox;