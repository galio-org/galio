import { JSX, useState } from "react";
import { Image, ImageStyle, Pressable, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { useGalioTheme } from "./theme";
import Text from "./atomic/ions/text";
import Icon from "./atomic/ions/icon";

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
    initialValue?: boolean;
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
    initialValue = false,
    label,
    labelStyle,
    onChange = () => {},
    style,
    accessibilityLabel,
    accessibilityHint,
}: CheckboxProps): JSX.Element {
    const theme = useGalioTheme();
    const [checked, setChecked] = useState(initialValue);

    const colorStyle = color 
        ? theme.COLORS.LIGHT_MODE[color as keyof typeof theme.COLORS.LIGHT_MODE] 
        : theme.COLORS.LIGHT_MODE.primary;

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
    
    return (
        <Pressable
            onPress={() => _onPress({ checked, onChange, setChecked })}
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

const styles = (theme: ReturnType<typeof useGalioTheme>) =>
  StyleSheet.create({
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
      backgroundColor: theme.COLORS.LIGHT_MODE.transparent,
      borderColor: theme.COLORS.LIGHT_MODE.grey,
    },
    checked: {
      backgroundColor: theme.COLORS.LIGHT_MODE.primary,
      borderColor: theme.COLORS.LIGHT_MODE.primary,
    },
    disabled: {
      borderColor: theme.COLORS.LIGHT_MODE.muted,
    },
    textStyles: {
      color: theme.COLORS.LIGHT_MODE.black,
    },
    disabledLabel: {
      color: theme.COLORS.LIGHT_MODE.muted,
      opacity: theme.SIZES.OPACITY,
    },
  });

export default Checkbox;