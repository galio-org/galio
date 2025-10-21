"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var theme_1 = require("./theme");
function Avatar(_a) {
    var _b;
    var source = _a.source, label = _a.label, labelColor = _a.labelColor, _c = _a.size, size = _c === void 0 ? 50 : _c, backgroundColor = _a.backgroundColor, labelFontSize = _a.labelFontSize, labelFontWeight = _a.labelFontWeight, imageProps = _a.imageProps, imageStyle = _a.imageStyle, containerStyle = _a.containerStyle, style = _a.style, labelStyle = _a.labelStyle, labelTextStyle = _a.labelTextStyle, accessibilityLabel = _a.accessibilityLabel, accessibilityHint = _a.accessibilityHint, shadow = _a.shadow;
    var theme = (0, theme_1.useTheme)();
    var colors = theme.colors;
    var avatarSize = size || 50;
    // If shadow prop is set and not 'none', apply theme shadow for current platform
    var shadowStyle = {};
    if (shadow && shadow !== 'none') {
        var shadowDef = ((_b = theme.shadows) === null || _b === void 0 ? void 0 : _b[shadow]) || {};
        shadowStyle = react_native_1.Platform.select({
            ios: shadowDef.ios || {},
            android: shadowDef.android || {},
        }) || {};
        if (react_native_1.Platform.OS === 'web' && shadowDef.web) {
            shadowStyle = __assign({}, shadowDef.web);
        }
    }
    // Only apply overflow: 'hidden' if no shadow is present
    var containerBaseStyle = __assign({ width: avatarSize, height: avatarSize, alignItems: 'center', justifyContent: 'center', borderRadius: avatarSize / 2, backgroundColor: backgroundColor || colors.background }, (shadow ? shadowStyle : { overflow: 'hidden' }));
    var stylesheet = react_native_1.StyleSheet.create({
        container: __assign({}, containerBaseStyle),
        image: {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
        },
        label: {
            width: avatarSize,
            height: avatarSize,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: avatarSize / 2,
            backgroundColor: backgroundColor || colors.disabled,
        },
        labelText: {
            color: labelColor || colors.white,
            fontSize: labelFontSize !== undefined ? labelFontSize : Math.max(12, avatarSize * 0.32),
            fontWeight: labelFontWeight !== undefined ? labelFontWeight : '600',
            textAlign: 'center',
        },
    });
    var defaultAccessibilityLabel = accessibilityLabel ||
        (label ? "Avatar with label ".concat(label) : 'Avatar image');
    return (<react_native_1.View style={[stylesheet.container, containerStyle, style]} accessibilityRole="image" accessibilityLabel={defaultAccessibilityLabel} accessibilityHint={accessibilityHint}>
            {source ? (<react_native_1.Image source={source} style={[stylesheet.image, imageStyle]} {...imageProps}/>) : label ? (<react_native_1.View style={[stylesheet.label, labelStyle]}>
                    <react_native_1.Text numberOfLines={1} style={[stylesheet.labelText, labelTextStyle]}>
                        {label}
                    </react_native_1.Text>
                </react_native_1.View>) : null}
        </react_native_1.View>);
}
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map