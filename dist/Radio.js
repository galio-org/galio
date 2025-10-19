"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var theme_1 = require("./theme");
var Text_1 = __importDefault(require("./Text"));
function Radio(_a) {
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, containerStyle = _a.containerStyle, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.flexDirection, flexDirection = _d === void 0 ? 'row' : _d, _e = _a.initialValue, initialValue = _e === void 0 ? false : _e, label = _a.label, labelStyle = _a.labelStyle, labelColor = _a.labelColor, onChange = _a.onChange, radioOuterStyle = _a.radioOuterStyle, radioInnerStyle = _a.radioInnerStyle, value = _a.value, accessibilityLabel = _a.accessibilityLabel, accessibilityHint = _a.accessibilityHint, _f = _a.size, size = _f === void 0 ? 'md' : _f;
    var theme = (0, theme_1.useTheme)();
    var colors = (0, theme_1.useColors)();
    var _g = (0, react_1.useState)(initialValue), internalValue = _g[0], setInternalValue = _g[1];
    var isControlled = value !== undefined;
    var checked = isControlled ? value : internalValue;
    // Consistent spacing between radio and label
    var getLabelSpacing = (0, react_1.useCallback)(function (direction) {
        var space = 10;
        switch (direction) {
            case 'row':
                return { marginLeft: space };
            case 'row-reverse':
                return { marginRight: space };
            case 'column':
                return { marginTop: space };
            case 'column-reverse':
                return { marginBottom: space };
            default:
                return { marginLeft: space };
        }
    }, []);
    var resolvedLabelColor = labelColor
        ? colors[labelColor] || labelColor
        : colors.text;
    // Semantic size mapping
    var sizeMap = {
        xs: theme.sizes.RADIO_WIDTH * 0.5,
        sm: theme.sizes.RADIO_WIDTH * 0.75,
        md: theme.sizes.RADIO_WIDTH,
        lg: theme.sizes.RADIO_WIDTH * 1.25,
        xl: theme.sizes.RADIO_WIDTH * 1.5,
    };
    var radioSize = typeof size === 'string' && sizeMap[size] ? sizeMap[size] : (typeof size === 'number' ? size : theme.sizes.RADIO_WIDTH);
    var renderLabel = (0, react_1.useCallback)(function () {
        var labelStyles = __spreadArray(__spreadArray([
            styles(theme, colors, radioSize).textStyles,
            { color: resolvedLabelColor },
            disabled && styles(theme, colors, radioSize).disabledLabel
        ], (Array.isArray(labelStyle) ? labelStyle : [labelStyle]), true), [
            getLabelSpacing(flexDirection),
        ], false).filter(Boolean);
        if (label) {
            return <Text_1.default style={labelStyles}>{label}</Text_1.default>;
        }
        return null;
    }, [label, disabled, labelStyle, flexDirection, getLabelSpacing, theme, colors, resolvedLabelColor, radioSize]);
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
        styles(theme, colors, radioSize).container,
        flexDirection && { flexDirection: flexDirection },
        containerStyle
    ]; }, [theme, colors, radioSize, flexDirection, containerStyle]);
    // Use theme palette key for color if available
    var whichColor = (0, react_1.useMemo)(function () {
        if (color && colors[color]) {
            return colors[color];
        }
        return color || colors.primary;
    }, [color, colors]);
    var radioButtonOuterStyles = (0, react_1.useMemo)(function () { return [
        styles(theme, colors, radioSize).radioOuterStyles,
        { borderColor: whichColor },
        disabled && styles(theme, colors, radioSize).disabledRadioOuter,
        radioOuterStyle,
    ]; }, [theme, colors, radioSize, whichColor, disabled, radioOuterStyle]);
    var radioButtonInnerStyles = (0, react_1.useMemo)(function () { return [
        styles(theme, colors, radioSize).radioInnerStyles,
        { backgroundColor: whichColor },
        disabled && styles(theme, colors, radioSize).disabledRadioInner,
        radioInnerStyle,
    ]; }, [theme, colors, radioSize, whichColor, disabled, radioInnerStyle]);
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
var styles = function (theme, colors, radioSize) {
    return react_native_1.StyleSheet.create({
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
};
exports.default = Radio;
//# sourceMappingURL=Radio.js.map