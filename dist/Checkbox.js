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
var Icon_1 = __importDefault(require("./Icon"));
function spaceAround(direction) {
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
function renderLabel(_a) {
    var image = _a.image, label = _a.label, disabled = _a.disabled, labelStyle = _a.labelStyle, imageStyle = _a.imageStyle, flexDirection = _a.flexDirection;
    var theme = (0, theme_1.useTheme)();
    var labelStyles = __spreadArray(__spreadArray([
        styles(theme).textStyles,
        disabled && styles(theme).disabledLabel
    ], (Array.isArray(labelStyle) ? labelStyle : [labelStyle]), true), [
        flexDirection && spaceAround(flexDirection),
    ], false).filter(Boolean);
    var imageStyles = [imageStyle, flexDirection && spaceAround(flexDirection)].filter(Boolean);
    if (image && !label) {
        return <react_native_1.Image source={{ uri: image }} style={imageStyles}/>;
    }
    if (!image && label) {
        return <Text_1.default style={labelStyles}>{label}</Text_1.default>;
    }
    return null;
}
function renderChecked(_a) {
    var checked = _a.checked, iconColor = _a.iconColor, iconFamily = _a.iconFamily, iconName = _a.iconName, iconSize = _a.iconSize;
    if (checked) {
        return (<Icon_1.default name={iconName || 'check'} family={iconFamily || 'antdesign'} color={iconColor || '#000'} size={iconSize || 16}/>);
    }
    return null;
}
function _onPress(_a) {
    var checked = _a.checked, onChange = _a.onChange, setChecked = _a.setChecked;
    var current = !checked;
    onChange(current);
    setChecked(current);
}
function Checkbox(_a) {
    var checkboxStyle = _a.checkboxStyle, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.flexDirection, flexDirection = _d === void 0 ? 'row' : _d, image = _a.image, imageStyle = _a.imageStyle, _e = _a.iconColor, iconColor = _e === void 0 ? '#fff' : _e, // deprecated
    _f = _a.iconFamily, // deprecated
    iconFamily = _f === void 0 ? 'FontAwesome' : _f, // deprecated
    _g = _a.iconName, // deprecated
    iconName = _g === void 0 ? 'check' : _g, // deprecated
    _h = _a.iconSize, // deprecated
    iconSize = _h === void 0 ? 15 : _h, // deprecated
    _j = _a.iconProps, // deprecated
    iconProps = _j === void 0 ? {} : _j, controlledChecked = _a.checked, _k = _a.initialValue, initialValue = _k === void 0 ? false : _k, label = _a.label, labelStyle = _a.labelStyle, labelColor = _a.labelColor, _l = _a.onChange, onChange = _l === void 0 ? function () { } : _l, style = _a.style, accessibilityLabel = _a.accessibilityLabel, accessibilityHint = _a.accessibilityHint;
    var theme = (0, theme_1.useTheme)();
    var colors = (0, theme_1.useColors)();
    // Support both controlled and uncontrolled modes
    var isControlled = controlledChecked !== undefined;
    var _m = (0, react_1.useState)(initialValue), internalChecked = _m[0], setInternalChecked = _m[1];
    var checked = isControlled ? controlledChecked : internalChecked;
    // Update internal state if controlledChecked changes (for controlled mode)
    (0, react_1.useEffect)(function () {
        if (isControlled && controlledChecked !== undefined) {
            setInternalChecked(controlledChecked);
        }
    }, [controlledChecked, isControlled]);
    var colorStyle = color
        ? colors[color] || color
        : colors.primary;
    var resolvedLabelColor = labelColor
        ? colors[labelColor] || labelColor
        : colors.text;
    var checkBoxContainerStyle = [
        styles(theme).container,
        flexDirection && { flexDirection: flexDirection },
        style
    ].filter(Boolean);
    var checkedInnerStyles = [
        styles(theme).checked,
        colorStyle && { backgroundColor: colorStyle, borderColor: colorStyle },
    ].filter(Boolean);
    var checkedBoxViewStyles = [
        styles(theme).checkboxView,
        styles(theme).uncheckedBoxView,
        color && { borderColor: colorStyle },
        color && !colorStyle && { borderColor: color },
        checked && checkedInnerStyles,
        disabled && styles(theme).disabled,
        checkboxStyle,
    ].filter(Boolean);
    var defaultAccessibilityLabel = accessibilityLabel ||
        (label ? "".concat(label, " checkbox") : 'checkbox');
    var handlePress = function () {
        if (!isControlled) {
            // Uncontrolled mode: update internal state
            _onPress({ checked: checked, onChange: onChange, setChecked: setInternalChecked });
        }
        else {
            // Controlled mode: just call onChange, parent handles state
            onChange(!checked);
        }
    };
    return (<react_native_1.Pressable onPress={handlePress} style={checkBoxContainerStyle} disabled={disabled} accessibilityRole="checkbox" accessibilityState={{ checked: checked, disabled: disabled }} accessibilityLabel={defaultAccessibilityLabel} accessibilityHint={accessibilityHint}>
            <react_native_1.View style={checkedBoxViewStyles}>
                {checked ? (<Icon_1.default name={iconProps.name || iconName} family={iconProps.family || iconFamily} color={iconProps.color || iconColor} size={iconProps.size || iconSize} {...iconProps}/>) : null}
            </react_native_1.View>
            {renderLabel({
            image: image,
            label: label,
            disabled: disabled,
            labelStyle: ([{ color: resolvedLabelColor }, labelStyle].filter(Boolean)),
            imageStyle: imageStyle,
            flexDirection: flexDirection,
        })}
        </react_native_1.Pressable>);
}
var styles = function (theme) {
    var colors = theme.colors; // Use semantic colors
    return react_native_1.StyleSheet.create({
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
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map