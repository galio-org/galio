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
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.children, children = _c === void 0 ? undefined : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.icon, icon = _e === void 0 ? undefined : _e, _f = _a.iconPosition, iconPosition = _f === void 0 ? 'left' : _f, _g = _a.iconFamily, iconFamily = _g === void 0 ? 'AntDesign' : _g, _h = _a.iconSize, iconSize = _h === void 0 ? 16 : _h, _j = _a.iconColor, iconColor = _j === void 0 ? undefined : _j, _k = _a.loading, loading = _k === void 0 ? false : _k, _l = _a.loadingSize, loadingSize = _l === void 0 ? 'small' : _l, _m = _a.loadingColor, loadingColor = _m === void 0 ? undefined : _m, _o = _a.onlyIcon, onlyIcon = _o === void 0 ? false : _o, _p = _a.opacity, opacity = _p === void 0 ? 0.8 : _p, _q = _a.round, round = _q === void 0 ? false : _q, _r = _a.size, size = _r === void 0 ? 'md' : _r, _s = _a.fullWidth, fullWidth = _s === void 0 ? false : _s, _t = _a.block, block = _t === void 0 ? false : _t, _u = _a.shadow, shadow = _u === void 0 ? undefined : _u, _v = _a.style, style = _v === void 0 ? undefined : _v, _w = _a.textStyle, textStyle = _w === void 0 ? undefined : _w, _x = _a.textTransform, textTransform = _x === void 0 ? 'none' : _x, _y = _a.onPress, onPress = _y === void 0 ? undefined : _y, _z = _a.testID, testID = _z === void 0 ? undefined : _z, _0 = _a.accessibilityLabel, accessibilityLabel = _0 === void 0 ? undefined : _0, _1 = _a.rippleColor, rippleColor = _1 === void 0 ? undefined : _1;
    var theme = (0, theme_1.useTheme)();
    var colors = (0, theme_1.useColors)();
    var _2 = (0, react_1.useState)(false), pressed = _2[0], setPressed = _2[1];
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
    // Map size values to widths (legacy values supported, will be removed in future)
    var widthStyle = {};
    if (fullWidth) {
        widthStyle = { width: '100%' };
    }
    else if (block) {
        widthStyle = { width: '100%' };
    }
    else if (size === 'xs') {
        widthStyle = { width: width * 0.2 };
    }
    else if (size === 'sm' || size === 'small') {
        widthStyle = { width: width * 0.3 };
    }
    else if (size === 'md' || size === 'default') {
        widthStyle = { width: width * 0.42 };
    }
    else if (size === 'lg' || size === 'large') {
        widthStyle = { width: width * 0.6 };
    }
    else if (size === 'xl') {
        widthStyle = { width: width * 0.8 };
    }
    else {
        widthStyle = { width: width * 0.42 };
    }
    // Disabled style: lower opacity, block pointer events
    var disabledStyle = disabled ? { opacity: 0.6 } : { opacity: pressed ? opacity : 1 };
    var buttonStyles = [
        styles(theme).defaultButton,
        { backgroundColor: buttonColor },
        widthStyle,
        round ? { borderRadius: theme.sizes.BASE * 3 } : {},
        onlyIcon ? {
            width: iconSize * 2.75,
            height: iconSize * 2.75,
            borderRadius: (iconSize * 2.75) / 2,
        } : {},
        shadowStyle,
        disabledStyle,
        style || {},
    ];
    return (<react_native_1.Pressable onPress={!disabled ? onPress : undefined} onPressIn={!disabled ? handlePressIn : undefined} onPressOut={!disabled ? handlePressOut : undefined} style={buttonStyles} disabled={disabled} android_ripple={{ color: rippleColor || 'rgba(0,0,0,0.1)' }} accessibilityRole="button" accessibilityState={{ disabled: disabled }} accessibilityLabel={accessibilityLabel || (typeof children === 'string' ? children : 'Button')} testID={testID} pointerEvents={disabled ? 'none' : 'auto'}>
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