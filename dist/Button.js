"use strict";
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
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, children = _a.children, _c = _a.disabled, disabled = _c === void 0 ? false : _c, icon = _a.icon, _d = _a.iconPosition, iconPosition = _d === void 0 ? 'left' : _d, iconFamily = _a.iconFamily, _e = _a.iconSize, iconSize = _e === void 0 ? 16 : _e, iconColor = _a.iconColor, _f = _a.loading, loading = _f === void 0 ? false : _f, _g = _a.loadingSize, loadingSize = _g === void 0 ? 'small' : _g, loadingColor = _a.loadingColor, _h = _a.onlyIcon, onlyIcon = _h === void 0 ? false : _h, _j = _a.opacity, opacity = _j === void 0 ? 0.8 : _j, _k = _a.round, round = _k === void 0 ? false : _k, _l = _a.size, size = _l === void 0 ? 'default' : _l, _m = _a.fullWidth, fullWidth = _m === void 0 ? false : _m, _o = _a.block, block = _o === void 0 ? false : _o, shadow = _a.shadow, style = _a.style, textStyle = _a.textStyle, _p = _a.textTransform, textTransform = _p === void 0 ? 'none' : _p, onPress = _a.onPress, testID = _a.testID, accessibilityLabel = _a.accessibilityLabel, rippleColor = _a.rippleColor;
    var theme = (0, theme_1.useTheme)();
    var colors = (0, theme_1.useColors)();
    var _q = (0, react_1.useState)(false), pressed = _q[0], setPressed = _q[1];
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
    if (isString) {
        switch (textTransform) {
            case 'uppercase':
                content = children.toUpperCase();
                break;
            case 'lowercase':
                content = children.toLowerCase();
                break;
            case 'capitalize':
                content = "".concat(children.charAt(0).toUpperCase()).concat(children.slice(1));
                break;
            default:
                content = children;
        }
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
                {icon && iconPosition === 'left' && (<Icon_1.default name={icon} family={iconFamily || 'AntDesign'} size={iconSize} color={iconColor || colors.white} style={{ marginRight: 6 }}/>)}
                {textElement}
                {icon && iconPosition === 'right' && (<Icon_1.default name={icon} family={iconFamily || 'AntDesign'} size={iconSize} color={iconColor || colors.white} style={{ marginLeft: 6 }}/>)}
            </react_native_1.View>);
    }, [loading, loadingSize, loadingColor, colors.white, onlyIcon, icon, iconFamily, iconSize, iconColor, iconPosition, textElement]);
    var handlePressIn = (0, react_1.useCallback)(function () { return setPressed(true); }, []);
    var handlePressOut = (0, react_1.useCallback)(function () { return setPressed(false); }, []);
    // Determine shadow style from theme
    var shadowStyle = {};
    if (shadow &&
        buttonColor !== 'transparent' &&
        theme.shadows &&
        Object.prototype.hasOwnProperty.call(theme.shadows, shadow)) {
        var platform = react_native_1.Platform.OS;
        if (platform === 'ios' || platform === 'android' || platform === 'web') {
            shadowStyle = theme.shadows[shadow][platform] || {};
        }
    }
    var buttonStyles = [
        styles(theme).defaultButton,
        { backgroundColor: buttonColor },
        size === 'large'
            ? { width: width * 0.8 }
            : size === 'small'
                ? { width: width * 0.3 }
                : { width: width * 0.42 },
        fullWidth || block ? { width: '100%' } : {},
        round ? { borderRadius: theme.sizes.BASE * 3 } : {},
        onlyIcon ? {
            width: iconSize * 2.75,
            height: iconSize * 2.75,
            borderRadius: (iconSize * 2.75) / 2,
        } : {},
        shadowStyle,
        { opacity: disabled ? 0.6 : pressed ? opacity : 1 },
        style || {},
    ];
    return (<react_native_1.Pressable onPress={!disabled ? onPress : undefined} onPressIn={handlePressIn} onPressOut={handlePressOut} style={buttonStyles} disabled={disabled} android_ripple={{ color: rippleColor || 'rgba(0,0,0,0.1)' }} accessibilityRole="button" accessibilityState={{ disabled: disabled }} accessibilityLabel={accessibilityLabel || (typeof children === 'string' ? children : 'Button')} testID={testID}>
            {getContent()}
        </react_native_1.Pressable>);
}
var styles = function (theme) {
    var colors = theme.colors;
    return react_native_1.StyleSheet.create({
        defaultButton: {
            borderRadius: theme.sizes.BASE * 2,
            height: theme.sizes.BUTTON_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 8,
            flexDirection: 'row',
        },
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