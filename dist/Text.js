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
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var style = _a.style, _l = _a.h1, h1 = _l === void 0 ? false : _l, _m = _a.h2, h2 = _m === void 0 ? false : _m, _o = _a.h3, h3 = _o === void 0 ? false : _o, _p = _a.h4, h4 = _p === void 0 ? false : _p, _q = _a.h5, h5 = _q === void 0 ? false : _q, _r = _a.h6, h6 = _r === void 0 ? false : _r, _s = _a.p, p = _s === void 0 ? false : _s, _t = _a.body, body = _t === void 0 ? false : _t, _u = _a.small, small = _u === void 0 ? false : _u, _v = _a.muted, muted = _v === void 0 ? false : _v, _w = _a.neutral, neutral = _w === void 0 ? false : _w, size = _a.size, color = _a.color, _x = _a.bold, bold = _x === void 0 ? false : _x, _y = _a.italic, italic = _y === void 0 ? false : _y, _z = _a.center, center = _z === void 0 ? false : _z, children = _a.children, propTheme = _a.theme, _0 = _a.shadow, shadow = _0 === void 0 ? false : _0, rest = __rest(_a, ["style", "h1", "h2", "h3", "h4", "h5", "h6", "p", "body", "small", "muted", "neutral", "size", "color", "bold", "italic", "center", "children", "theme", "shadow"]);
    var theme = (theme_1.useTheme === null || theme_1.useTheme === void 0 ? void 0 : (0, theme_1.useTheme)()) || propTheme || theme_1.default;
    var colors = (theme_1.useColors === null || theme_1.useColors === void 0 ? void 0 : (0, theme_1.useColors)()) || (theme === null || theme === void 0 ? void 0 : theme.colors) || {};
    // Map font sizes to theme.sizes keys
    var fontSizes = {
        h1: (_b = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _b === void 0 ? void 0 : _b.H1,
        h2: (_c = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _c === void 0 ? void 0 : _c.H2,
        h3: (_d = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _d === void 0 ? void 0 : _d.H3,
        h4: (_e = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _e === void 0 ? void 0 : _e.H4,
        h5: (_f = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _f === void 0 ? void 0 : _f.H5,
        h6: (_g = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _g === void 0 ? void 0 : _g.H6,
        p: (_h = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _h === void 0 ? void 0 : _h.BODY,
        body: (_j = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _j === void 0 ? void 0 : _j.BODY,
        small: (_k = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _k === void 0 ? void 0 : _k.SMALL,
    };
    var fontWeights = (theme === null || theme === void 0 ? void 0 : theme.fontWeights) || { bold: 'bold', normal: 'normal' };
    var getShadowStyle = function () {
        if (!shadow)
            return undefined;
        if (react_native_1.Platform.OS === 'web' || react_native_1.Platform.OS === 'ios' || react_native_1.Platform.OS === 'android') {
            return { textShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' };
        }
        return undefined;
    };
    var dynamicStyles = (0, react_1.useMemo)(function () { return [
        h1 && { fontSize: (0, normalize_1.normalize)(fontSizes.h1 || 44) },
        h2 && { fontSize: (0, normalize_1.normalize)(fontSizes.h2 || 38) },
        h3 && { fontSize: (0, normalize_1.normalize)(fontSizes.h3 || 30) },
        h4 && { fontSize: (0, normalize_1.normalize)(fontSizes.h4 || 24) },
        h5 && { fontSize: (0, normalize_1.normalize)(fontSizes.h5 || 21) },
        h6 && { fontSize: (0, normalize_1.normalize)(fontSizes.h6 || 18) },
        p && { fontSize: (0, normalize_1.normalize)(fontSizes.p || 16) },
        body && { fontSize: (0, normalize_1.normalize)(fontSizes.body || 14) },
        small && { fontSize: (0, normalize_1.normalize)(fontSizes.small || 12) },
        muted && { color: colors.textTertiary || '#888' },
        neutral && { color: colors.textSecondary || '#555' },
        size && typeof size === 'number' ? { fontSize: (0, normalize_1.normalize)(size) } : undefined,
        color && { color: color },
        italic && { fontStyle: 'italic' },
        bold && { fontWeight: fontWeights.bold },
        center && { textAlign: 'center' },
        getShadowStyle(),
        style,
    ]; }, [h1, h2, h3, h4, h5, h6, p, body, small, muted, neutral, size, color, italic, bold, center, style, theme, shadow, fontSizes, fontWeights, colors]);
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