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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("./theme");
var react_1 = require("react");
var react_native_1 = require("react-native");
var Icon_1 = __importDefault(require("./Icon"));
var width = react_native_1.Dimensions.get('window').width;
function Button(_a) {
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, children = _a.children, _c = _a.disabled, disabled = _c === void 0 ? false : _c, icon = _a.icon, _d = _a.iconRight, iconRight = _d === void 0 ? false : _d, iconFamily = _a.iconFamily, _e = _a.iconSize, iconSize = _e === void 0 ? 16 : _e, iconColor = _a.iconColor, _f = _a.loading, loading = _f === void 0 ? false : _f, _g = _a.loadingSize, loadingSize = _g === void 0 ? 'small' : _g, loadingColor = _a.loadingColor, _h = _a.onlyIcon, onlyIcon = _h === void 0 ? false : _h, _j = _a.opacity, opacity = _j === void 0 ? 0.8 : _j, _k = _a.round, round = _k === void 0 ? false : _k, _l = _a.size, size = _l === void 0 ? 'default' : _l, _m = _a.shadowless, shadowless = _m === void 0 ? false : _m, style = _a.style, textStyle = _a.textStyle, _o = _a.uppercase, uppercase = _o === void 0 ? false : _o, _p = _a.lowercase, lowercase = _p === void 0 ? false : _p, _q = _a.capitalize, capitalize = _q === void 0 ? false : _q, onPress = _a.onPress;
    var theme = (0, theme_1.useTheme)();
    var colors = (0, theme_1.useColors)();
    var _r = (0, react_1.useState)(false), pressed = _r[0], setPressed = _r[1];
    var getButtonColor = (0, react_1.useCallback)(function (colorName) {
        var colorMap = {
            'primary': colors.primary,
            'info': colors.info,
            'danger': colors.error,
            'error': colors.error,
            'warning': colors.warning,
            'success': colors.success,
            'white': colors.white,
            'black': colors.black,
            'secondary': colors.primaryHover,
        };
        var result = colorMap[colorName] || colorName;
        return result;
    }, [colors]);
    var getTextColor = (0, react_1.useCallback)(function (backgroundColor) {
        var lightColors = ['white', '#FFFFFF', colors.white];
        var isLightBackground = lightColors.includes(backgroundColor);
        return isLightBackground
            ? colors.black
            : colors.white;
    }, [colors]);
    var content = children;
    var isString = children && typeof children === 'string';
    if (uppercase && isString)
        content = children.toUpperCase();
    if (lowercase && isString)
        content = children.toLowerCase();
    if (capitalize && isString) {
        content = "".concat(children.charAt(0).toUpperCase()).concat(children.slice(1));
    }
    var buttonColor = getButtonColor(color);
    var textColor = getTextColor(buttonColor);
    var textElement = isString && !onlyIcon ? (<react_native_1.Text style={[styles(theme).customText, { color: textColor }, textStyle]}>{content}</react_native_1.Text>) : (content);
    var getContent = (0, react_1.useCallback)(function () {
        if (loading) {
            return <react_native_1.ActivityIndicator size={loadingSize} color={loadingColor || colors.white}/>;
        }
        if (onlyIcon && icon) {
            return (<Icon_1.default name={icon} family={iconFamily || 'AntDesign'} size={iconSize} color={iconColor || colors.white}/>);
        }
        return (<react_native_1.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {!iconRight && icon && (<Icon_1.default name={icon} family={iconFamily || 'AntDesign'} size={iconSize} color={iconColor || colors.white} style={{ marginRight: 6 }}/>)}
                {textElement}
                {iconRight && icon && (<Icon_1.default name={icon} family={iconFamily || 'AntDesign'} size={iconSize} color={iconColor || colors.white} style={{ marginLeft: 6 }}/>)}
            </react_native_1.View>);
    }, [loading, loadingSize, loadingColor, colors.white, onlyIcon, icon, iconFamily, iconSize, iconColor, iconRight, textElement]);
    var handlePressIn = (0, react_1.useCallback)(function () { return setPressed(true); }, []);
    var handlePressOut = (0, react_1.useCallback)(function () { return setPressed(false); }, []);
    var buttonStyles = [
        styles(theme).defaultButton,
        { backgroundColor: buttonColor },
        size === 'large'
            ? { width: width * 0.8 }
            : size === 'small'
                ? { width: width * 0.3 }
                : { width: width * 0.42 },
        round ? { borderRadius: theme.sizes.BASE * 3 } : {},
        onlyIcon ? {
            width: iconSize * 2.75,
            height: iconSize * 2.75,
            borderRadius: (iconSize * 2.75) / 2,
        } : {},
        !shadowless && buttonColor !== 'transparent' ? styles(theme).shadow : {},
        { opacity: disabled ? 0.6 : pressed ? opacity : 1 },
        style || {},
    ];
    return (<react_native_1.Pressable onPress={!disabled ? onPress : undefined} onPressIn={handlePressIn} onPressOut={handlePressOut} style={buttonStyles} disabled={disabled} android_ripple={{ color: 'rgba(0,0,0,0.1)' }} accessibilityRole="button" accessibilityState={{ disabled: disabled }} accessibilityLabel={typeof children === 'string' ? children : 'Button'}>
            {getContent()}
        </react_native_1.Pressable>);
}
var styles = function (theme) {
    var colors = theme.colors; // Use semantic colors
    return react_native_1.StyleSheet.create({
        defaultButton: {
            borderRadius: theme.sizes.BASE * 2,
            height: theme.sizes.BUTTON_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 8,
            flexDirection: 'row',
        },
        shadow: __assign({}, react_native_1.Platform.select({
            ios: {
                shadowColor: colors.black,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: theme.sizes.OPACITY,
                shadowRadius: theme.sizes.BUTTON_SHADOW_RADIUS,
            },
            android: {
                elevation: theme.sizes.ANDROID_ELEVATION,
            },
            web: {
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            },
        })),
        customText: {
            fontSize: theme.sizes.FONT,
            color: colors.white,
        },
        transparent: {
            backgroundColor: 'transparent',
            borderWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
        },
    });
};
exports.default = Button;
//# sourceMappingURL=Button.js.map