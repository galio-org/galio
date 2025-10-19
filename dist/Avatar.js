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
    var _b, _c;
    var source = _a.source, label = _a.label, labelColor = _a.labelColor, _d = _a.size, size = _d === void 0 ? 50 : _d, backgroundColor = _a.backgroundColor, _e = _a.shadowLevel, shadowLevel = _e === void 0 ? 'md' : _e, imageProps = _a.imageProps, imageStyle = _a.imageStyle, containerStyle = _a.containerStyle, style = _a.style, labelStyle = _a.labelStyle, labelTextStyle = _a.labelTextStyle, accessibilityLabel = _a.accessibilityLabel, accessibilityHint = _a.accessibilityHint;
    var theme = (0, theme_1.useTheme)();
    var colors = theme.colors;
    var avatarSize = size || 50;
    var shadow = ((_b = theme.shadows) === null || _b === void 0 ? void 0 : _b[shadowLevel]) || ((_c = theme.shadows) === null || _c === void 0 ? void 0 : _c.md) || {};
    // Platform shadow composition (web boxShadow must be handled separately)
    var nativeShadow = react_native_1.Platform.select({
        ios: shadow.ios || {},
        android: shadow.android || {},
    }) || {};
    // Compose container style, adding boxShadow for web
    var containerBaseStyle = __assign({ width: avatarSize, height: avatarSize, alignItems: 'center', justifyContent: 'center', borderRadius: avatarSize / 2, overflow: 'hidden', backgroundColor: backgroundColor || colors.background }, nativeShadow);
    // For web, add boxShadow if present
    var containerWebStyle = react_native_1.Platform.OS === 'web' && shadow.web ? { boxShadow: shadow.web.boxShadow } : {};
    var stylesheet = react_native_1.StyleSheet.create({
        container: __assign(__assign({}, containerBaseStyle), containerWebStyle),
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
            fontSize: Math.max(12, avatarSize * 0.32),
            fontWeight: '600',
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