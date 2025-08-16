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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var text_1 = __importDefault(require("../ions/text"));
var theme_1 = require("../../theme");
var react_native_1 = require("react-native");
var Link = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, onPress = _a.onPress, style = _a.style, textStyle = _a.textStyle, color = _a.color, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.activeOpacity, activeOpacity = _c === void 0 ? 0.7 : _c, rest = __rest(_a, ["children", "onPress", "style", "textStyle", "color", "disabled", "activeOpacity"]);
    var theme = (0, theme_1.useGalioTheme)();
    var handlePress = function () {
        if (!disabled && onPress) {
            onPress();
        }
    };
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        press: handlePress,
    }); });
    var pressableStyle = [
        style,
        react_native_1.Platform.OS === 'web' && {
            cursor: disabled ? 'not-allowed' : 'pointer',
            userSelect: 'none',
        },
    ];
    return (<react_native_1.Pressable onPress={handlePress} style={pressableStyle} disabled={disabled} android_ripple={{ color: 'rgba(0,0,0,0.1)' }} accessibilityRole="link" accessibilityState={{ disabled: disabled }}>
            <text_1.default color={color || theme.COLORS.LIGHT_MODE.primary} style={[
            {
                textDecorationLine: 'underline',
                opacity: disabled ? 0.5 : 1,
            },
            textStyle,
        ]}>
                {children}
            </text_1.default>
        </react_native_1.Pressable>);
});
exports.default = Link;
//# sourceMappingURL=Link.js.map