"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var theme_1 = require("./theme");
var text_1 = __importDefault(require("./atomic/ions/text"));
function Radio(_a) {
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, containerStyle = _a.containerStyle, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.flexDirection, flexDirection = _d === void 0 ? 'row' : _d, _e = _a.initialValue, initialValue = _e === void 0 ? false : _e, label = _a.label, labelStyle = _a.labelStyle, onChange = _a.onChange, radioOuterStyle = _a.radioOuterStyle, radioInnerStyle = _a.radioInnerStyle, value = _a.value, accessibilityLabel = _a.accessibilityLabel, accessibilityHint = _a.accessibilityHint;
    var theme = (0, theme_1.useGalioTheme)();
    var _f = (0, react_1.useState)(initialValue), internalValue = _f[0], setInternalValue = _f[1];
    var isControlled = value !== undefined;
    var checked = isControlled ? value : internalValue;
    var spaceAround = (0, react_1.useCallback)(function (direction) {
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
    var renderLabel = (0, react_1.useCallback)(function () {
        var labelStyles = [
            styles(theme).textStyles,
            disabled && styles(theme).disabledLabel,
            labelStyle,
            flexDirection && spaceAround(flexDirection),
        ];
        if (label) {
            return <text_1.default style={labelStyles}>{label}</text_1.default>;
        }
        return null;
    }, [label, disabled, labelStyle, flexDirection, spaceAround, theme]);
    var radioPressHandler = (0, react_1.useCallback)(function () {
        if (disabled)
            return;
        var newValue = !checked;
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
        if (!isControlled) {
            setInternalValue(newValue);
        }
    }, [checked, disabled, onChange, isControlled]);
    var containerStyles = (0, react_1.useMemo)(function () { return [
        styles(theme).container,
        flexDirection && { flexDirection: flexDirection },
        containerStyle
    ]; }, [theme, flexDirection, containerStyle]);
    var whichColor = (0, react_1.useMemo)(function () {
        if (!color)
            return theme.COLORS.LIGHT_MODE.info;
        var upperColor = color.toUpperCase();
        var themeColor = theme.COLORS.LIGHT_MODE[upperColor];
        if (themeColor) {
            if (typeof themeColor === 'function') {
                return themeColor();
            }
            return themeColor;
        }
        return color;
    }, [color, theme.COLORS]);
    var radioButtonOuterStyles = (0, react_1.useMemo)(function () { return [
        styles(theme).radioOuterStyles,
        { borderColor: whichColor },
        disabled && styles(theme).disabledRadioOuter,
        radioOuterStyle,
    ]; }, [theme, whichColor, disabled, radioOuterStyle]);
    var radioButtonInnerStyles = (0, react_1.useMemo)(function () { return [
        styles(theme).radioInnerStyles,
        { backgroundColor: whichColor },
        disabled && styles(theme).disabledRadioInner,
        radioInnerStyle,
    ]; }, [theme, whichColor, disabled, radioInnerStyle]);
    (0, react_1.useEffect)(function () {
        if (isControlled && value !== undefined) {
            setInternalValue(value);
        }
    }, [value, isControlled]);
    (0, react_1.useEffect)(function () {
        if (!isControlled) {
            setInternalValue(initialValue);
        }
    }, [initialValue, isControlled]);
    var accessibilityProps = {
        accessibilityRole: 'radio',
        accessibilityState: { checked: checked, disabled: disabled },
        accessibilityLabel: accessibilityLabel || label || 'Radio button',
        accessibilityHint: accessibilityHint || 'Double tap to toggle selection',
    };
    return (<react_native_1.Pressable onPress={radioPressHandler} style={containerStyles} disabled={disabled} {...accessibilityProps}>
            <react_native_1.View style={radioButtonOuterStyles}>
                {checked ? (<react_native_1.View style={radioButtonInnerStyles}/>) : null}
            </react_native_1.View>
            {renderLabel()}
        </react_native_1.Pressable>);
}
var styles = function (theme) {
    return react_native_1.StyleSheet.create({
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
};
exports.default = Radio;
//# sourceMappingURL=Radio.js.map