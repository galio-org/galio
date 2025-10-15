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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var normalize_1 = require("./helpers/normalize");
var theme_1 = __importStar(require("./theme"));
function Typography(_a) {
    var style = _a.style, _b = _a.h1, h1 = _b === void 0 ? false : _b, _c = _a.h2, h2 = _c === void 0 ? false : _c, _d = _a.h3, h3 = _d === void 0 ? false : _d, _e = _a.h4, h4 = _e === void 0 ? false : _e, _f = _a.h5, h5 = _f === void 0 ? false : _f, _g = _a.h6, h6 = _g === void 0 ? false : _g, _h = _a.p, p = _h === void 0 ? false : _h, _j = _a.body, body = _j === void 0 ? false : _j, _k = _a.small, small = _k === void 0 ? false : _k, _l = _a.muted, muted = _l === void 0 ? false : _l, _m = _a.neutral, neutral = _m === void 0 ? false : _m, size = _a.size, color = _a.color, _o = _a.bold, bold = _o === void 0 ? false : _o, _p = _a.italic, italic = _p === void 0 ? false : _p, _q = _a.center, center = _q === void 0 ? false : _q, children = _a.children, propTheme = _a.theme, _r = _a.shadow, shadow = _r === void 0 ? false : _r, rest = __rest(_a, ["style", "h1", "h2", "h3", "h4", "h5", "h6", "p", "body", "small", "muted", "neutral", "size", "color", "bold", "italic", "center", "children", "theme", "shadow"]);
    var theme = (theme_1.useTheme === null || theme_1.useTheme === void 0 ? void 0 : (0, theme_1.useTheme)()) || propTheme || theme_1.default;
    var colors = theme_1.useColors === null || theme_1.useColors === void 0 ? void 0 : (0, theme_1.useColors)();
    var getShadowStyle = function () {
        if (!shadow)
            return undefined;
        if (react_native_1.Platform.OS === 'web') {
            return { textShadow: '0px 2px 8px rgba(0, 0, 0, 1)' };
        }
        else if (react_native_1.Platform.OS === 'ios') {
            return {
                textShadow: '0px 2px 8px rgba(0, 0, 0, 1)',
            };
        }
        else if (react_native_1.Platform.OS === 'android') {
            return {
                textShadow: '0px 2px 8px rgba(0, 0, 0, 1)',
            };
        }
        return undefined;
    };
    var dynamicStyles = (0, react_1.useMemo)(function () { return [
        h1 && { fontSize: (0, normalize_1.normalize)(44) },
        h2 && { fontSize: (0, normalize_1.normalize)(38) },
        h3 && { fontSize: (0, normalize_1.normalize)(30) },
        h4 && { fontSize: (0, normalize_1.normalize)(24) },
        h5 && { fontSize: (0, normalize_1.normalize)(21) },
        h6 && { fontSize: (0, normalize_1.normalize)(18) },
        p && { fontSize: (0, normalize_1.normalize)(16) },
        body && { fontSize: (0, normalize_1.normalize)(14) },
        small && { fontSize: (0, normalize_1.normalize)(12) },
        muted && colors && { color: colors.textTertiary },
        neutral && colors && { color: colors.textSecondary },
        size && typeof size === 'number' ? { fontSize: (0, normalize_1.normalize)(size) } : undefined,
        color && { color: color },
        italic && { fontStyle: 'italic' },
        bold && { fontWeight: 'bold' },
        center && { textAlign: 'center' },
        getShadowStyle(),
        style,
    ]; }, [h1, h2, h3, h4, h5, h6, p, body, small, muted, neutral, size, color, italic, bold, center, style, theme, shadow]);
    return (<react_native_1.Text style={__spreadArray([styles(colors).base], dynamicStyles, true)} {...rest}>
            {children}
        </react_native_1.Text>);
}
var styles = function (colors) { return react_native_1.StyleSheet.create({
    base: {
        color: (colors === null || colors === void 0 ? void 0 : colors.text) || '#000',
    }
}); };
exports.default = (0, react_1.memo)(Typography);
//# sourceMappingURL=Text.js.map