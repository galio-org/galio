"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var theme_1 = require("./theme");
var text_1 = __importDefault(require("./atomic/ions/text"));
var _a = react_native_1.Dimensions.get('screen'), height = _a.height, width = _a.width;
function Toast(_a) {
    var children = _a.children, isShow = _a.isShow, _b = _a.positionIndicator, positionIndicator = _b === void 0 ? 'top' : _b, _c = _a.positionOffset, positionOffset = _c === void 0 ? 120 : _c, _d = _a.fadeInDuration, fadeInDuration = _d === void 0 ? 300 : _d, _e = _a.fadeOutDuration, fadeOutDuration = _e === void 0 ? 300 : _e, _f = _a.color, color = _f === void 0 ? 'primary' : _f, _g = _a.round, round = _g === void 0 ? false : _g, style = _a.style, textStyle = _a.textStyle;
    var theme = (0, theme_1.useGalioTheme)();
    var _h = (0, react_1.useState)(isShow), internalIsShow = _h[0], setInternalIsShow = _h[1];
    var _j = (0, react_1.useState)(0), opacity = _j[0], setOpacity = _j[1];
    var fadeAnim = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    var animationRef = (0, react_1.useRef)(null);
    var timeoutRef = (0, react_1.useRef)(null);
    var getThemeColor = function (colorName) {
        if (!colorName)
            return theme.COLORS.LIGHT_MODE.primary;
        if (typeof colorName === 'string' && colorName.startsWith('#')) {
            return colorName;
        }
        var colorMap = {
            'primary': theme.COLORS.LIGHT_MODE.primary,
            'success': theme.COLORS.LIGHT_MODE.success,
            'warning': theme.COLORS.LIGHT_MODE.warning,
            'error': theme.COLORS.LIGHT_MODE.danger,
            'danger': theme.COLORS.LIGHT_MODE.danger,
            'info': theme.COLORS.LIGHT_MODE.info,
        };
        return colorMap[colorName] || theme.COLORS.LIGHT_MODE.primary;
    };
    var getTopPosition = function () {
        if (positionIndicator === 'top') {
            return positionOffset;
        }
        if (positionIndicator === 'bottom') {
            return height - positionOffset - 100;
        }
        return height / 2 - 50;
    };
    (0, react_1.useEffect)(function () {
        if (isShow && !internalIsShow) {
            setInternalIsShow(true);
            setOpacity(1);
            animationRef.current = react_native_1.Animated.timing(fadeAnim, {
                toValue: 1,
                duration: fadeInDuration,
                useNativeDriver: false,
            });
        }
        if (!isShow && internalIsShow) {
            console.log('Hiding toast');
            setOpacity(0); // Set opacity immediately for fallback
            animationRef.current = react_native_1.Animated.timing(fadeAnim, {
                toValue: 0,
                duration: fadeOutDuration,
                useNativeDriver: false,
            });
            timeoutRef.current = setTimeout(function () {
                setInternalIsShow(false);
            }, fadeOutDuration);
        }
        return function () {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            if (animationRef.current) {
                animationRef.current.stop();
            }
        };
    }, [isShow, internalIsShow, fadeInDuration, fadeOutDuration, fadeAnim]);
    var renderContent = function () {
        if (typeof children === 'string') {
            return <text_1.default style={[styles(theme).text, textStyle]}>{children}</text_1.default>;
        }
        return children;
    };
    var backgroundColor = getThemeColor(color);
    var borderRadius = round ? theme.SIZES.BASE * 2 : theme.SIZES.BASE;
    var topPosition = getTopPosition();
    var toastStyles = [
        styles(theme).toast,
        {
            backgroundColor: backgroundColor,
            top: topPosition,
            opacity: opacity,
            borderRadius: borderRadius,
        },
        style,
    ];
    return (<react_native_1.View style={styles(theme).overlay} pointerEvents="none">
            <react_native_1.Animated.View style={toastStyles}>
                {renderContent()}
            </react_native_1.Animated.View>
        </react_native_1.View>);
}
var styles = function (theme) {
    return react_native_1.StyleSheet.create({
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            pointerEvents: 'none',
        },
        toast: {
            padding: theme.SIZES.BASE * 1.5,
            position: 'absolute',
            left: theme.SIZES.BASE,
            right: theme.SIZES.BASE,
            shadowColor: theme.COLORS.LIGHT_MODE.black,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 15,
            minHeight: 60,
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.3)',
        },
        text: {
            fontSize: theme.SIZES.FONT,
            color: theme.COLORS.LIGHT_MODE.white,
            textAlign: 'center',
            fontWeight: '600',
        },
    });
};
exports.default = Toast;
//# sourceMappingURL=Toast.js.map