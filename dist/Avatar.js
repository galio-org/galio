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
    var source = _a.source, label = _a.label, labelColor = _a.labelColor, _b = _a.size, size = _b === void 0 ? 50 : _b, backgroundColor = _a.backgroundColor, imageProps = _a.imageProps, imageStyle = _a.imageStyle, containerStyle = _a.containerStyle, style = _a.style, accessibilityLabel = _a.accessibilityLabel, accessibilityHint = _a.accessibilityHint;
    var colors = (0, theme_1.useColors)();
    var avatarSize = size || 50;
    var stylesheet = react_native_1.StyleSheet.create({
        container: __assign({ width: avatarSize, height: avatarSize, alignItems: 'center', justifyContent: 'center', borderRadius: avatarSize / 2, overflow: 'hidden' }, react_native_1.Platform.select({
            ios: {
                shadowColor: colors.border,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
            web: {
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            },
        })),
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
        }
    });
    var defaultAccessibilityLabel = accessibilityLabel ||
        (label ? "Avatar with label ".concat(label) : 'Avatar image');
    return (<react_native_1.View style={[stylesheet.container, containerStyle, style]} accessibilityRole="image" accessibilityLabel={defaultAccessibilityLabel} accessibilityHint={accessibilityHint}>
            {source ? (<react_native_1.Image source={source} style={[stylesheet.image, imageStyle]} {...imageProps}/>) : label ? (<react_native_1.View style={stylesheet.label}>
                    <react_native_1.Text numberOfLines={1} style={stylesheet.labelText}>
                        {label}
                    </react_native_1.Text>
                </react_native_1.View>) : null}
        </react_native_1.View>);
}
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map