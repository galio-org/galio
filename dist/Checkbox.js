"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var theme_1 = require("./theme");
var text_1 = __importDefault(require("./atomic/ions/text"));
var icon_1 = __importDefault(require("./atomic/ions/icon"));
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
    var theme = (0, theme_1.useGalioTheme)();
    var labelStyles = [
        styles(theme).textStyles,
        disabled && styles(theme).disabledLabel,
        labelStyle,
        flexDirection && spaceAround(flexDirection),
    ].filter(Boolean);
    var imageStyles = [imageStyle, flexDirection && spaceAround(flexDirection)].filter(Boolean);
    if (image && !label) {
        return <react_native_1.Image source={{ uri: image }} style={imageStyles}/>;
    }
    if (!image && label) {
        return <text_1.default style={labelStyles}>{label}</text_1.default>;
    }
    return null;
}
function renderChecked(_a) {
    var checked = _a.checked, iconColor = _a.iconColor, iconFamily = _a.iconFamily, iconName = _a.iconName, iconSize = _a.iconSize;
    if (checked) {
        return (<icon_1.default name={iconName || 'check'} family={iconFamily || 'antdesign'} color={iconColor || '#000'} size={iconSize || 16}/>);
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
    var checkboxStyle = _a.checkboxStyle, _b = _a.color, color = _b === void 0 ? 'theme' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.flexDirection, flexDirection = _d === void 0 ? 'row' : _d, image = _a.image, imageStyle = _a.imageStyle, _e = _a.iconColor, iconColor = _e === void 0 ? '#fff' : _e, _f = _a.iconFamily, iconFamily = _f === void 0 ? 'FontAwesome' : _f, _g = _a.iconName, iconName = _g === void 0 ? 'check' : _g, _h = _a.iconSize, iconSize = _h === void 0 ? 15 : _h, _j = _a.initialValue, initialValue = _j === void 0 ? false : _j, label = _a.label, labelStyle = _a.labelStyle, _k = _a.onChange, onChange = _k === void 0 ? function () { } : _k, style = _a.style, accessibilityLabel = _a.accessibilityLabel, accessibilityHint = _a.accessibilityHint;
    var theme = (0, theme_1.useGalioTheme)();
    var _l = (0, react_1.useState)(initialValue), checked = _l[0], setChecked = _l[1];
    var colorStyle = color
        ? theme.COLORS.LIGHT_MODE[color]
        : theme.COLORS.LIGHT_MODE.primary;
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
    return (<react_native_1.Pressable onPress={function () { return _onPress({ checked: checked, onChange: onChange, setChecked: setChecked }); }} style={checkBoxContainerStyle} disabled={disabled} accessibilityRole="checkbox" accessibilityState={{ checked: checked, disabled: disabled }} accessibilityLabel={defaultAccessibilityLabel} accessibilityHint={accessibilityHint}>
            <react_native_1.View style={checkedBoxViewStyles}>
                {renderChecked({ checked: checked, iconColor: iconColor, iconFamily: iconFamily, iconName: iconName, iconSize: iconSize })}
            </react_native_1.View>
            {renderLabel({ image: image, label: label, disabled: disabled, labelStyle: labelStyle, imageStyle: imageStyle, flexDirection: flexDirection })}
        </react_native_1.Pressable>);
}
var styles = function (theme) {
    return react_native_1.StyleSheet.create({
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
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map