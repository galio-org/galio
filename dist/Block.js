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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var theme_1 = require("./theme");
// Extract specific props that aren't part of React Native's ViewStyle
// No longer needed: all props are now documented in BlockProps
function Block(props) {
    var row = props.row, flex = props.flex, center = props.center, middle = props.middle, top = props.top, bottom = props.bottom, right = props.right, left = props.left, space = props.space, fluid = props.fluid, height = props.height, width = props.width, shadowProp = props.shadow, shadowColor = props.shadowColor, card = props.card, safe = props.safe, background = props.background, children = props.children, style = props.style, rest = __rest(props, ["row", "flex", "center", "middle", "top", "bottom", "right", "left", "space", "fluid", "height", "width", "shadow", "shadowColor", "card", "safe", "background", "children", "style"]);
    // Backward compatibility: coerce boolean shadow to semantic value
    var shadow = shadowProp;
    if (typeof shadow === 'boolean') {
        if (shadow) {
            shadow = 'md';
            if (process.env.NODE_ENV !== 'production') {
                // eslint-disable-next-line no-console
                console.warn('[Block] Passing shadow as boolean is deprecated. Use semantic values (xs, sm, md, lg, xl) instead.');
            }
        }
        else {
            shadow = undefined;
        }
    }
    var theme = (0, theme_1.useTheme)();
    var colors = (0, theme_1.useColors)();
    // Build styles using composition pattern for better maintainability
    var blockStyles = useBlockStyles({
        theme: theme,
        colors: colors,
        row: row,
        flex: flex,
        center: center,
        middle: middle,
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        space: space,
        fluid: fluid,
        height: height,
        width: width,
        shadow: shadow,
        shadowColor: shadowColor,
        card: card,
        background: background,
        customStyle: style,
    });
    // Render with SafeAreaView if needed
    if (safe) {
        return (<react_native_safe_area_context_1.SafeAreaView style={blockStyles} {...rest}>
        {children}
      </react_native_safe_area_context_1.SafeAreaView>);
    }
    return (<react_native_1.View style={blockStyles} {...rest}>
      {children}
    </react_native_1.View>);
}
// Custom hook for building block styles - now supports semantic shadow levels
function useBlockStyles(_a) {
    var theme = _a.theme, colors = _a.colors, row = _a.row, flex = _a.flex, center = _a.center, middle = _a.middle, top = _a.top, bottom = _a.bottom, right = _a.right, left = _a.left, space = _a.space, fluid = _a.fluid, height = _a.height, width = _a.width, shadow = _a.shadow, shadowColor = _a.shadowColor, card = _a.card, background = _a.background, customStyle = _a.customStyle;
    // Base block styles with theme integration
    var baseStyles = {
        flexDirection: 'column',
        backgroundColor: background || 'transparent',
    };
    // Compose all styles using a more functional approach
    var styles = __spreadArray([
        baseStyles,
        // Layout styles
        row && { flexDirection: 'row' },
        flex && { flex: flex === true ? 1 : flex },
        center && {
            alignItems: 'center',
            alignSelf: 'center',
        },
        middle && {
            alignItems: 'center',
            justifyContent: 'center',
        },
        top && {
            alignItems: 'flex-start',
            alignSelf: 'flex-start',
        },
        bottom && {
            alignItems: 'flex-end',
            alignSelf: 'flex-end',
        },
        right && { alignItems: 'flex-end' },
        left && { alignItems: 'flex-start' },
        // Spacing
        space && { justifyContent: "space-".concat(space) },
        // Sizing
        fluid && { width: 'auto' },
        height && { height: height },
        width && { width: width },
        // Visual effects: semantic shadow
        (typeof shadow === 'string' && shadow !== 'none') ? getSemanticShadowStyles(theme, shadow, shadowColor) : undefined,
        card && getCardStyles(theme, colors),
        // Custom shadow color override
        shadowColor && { shadowColor: shadowColor }
    ], (Array.isArray(customStyle) ? customStyle : [customStyle]), true).filter(Boolean);
    return styles;
}
// Semantic shadow style builder
function getSemanticShadowStyles(theme, level, shadowColor) {
    var _a;
    if (level === 'none')
        return {};
    var def = ((_a = theme.shadows) === null || _a === void 0 ? void 0 : _a[level]) || {};
    var neutralShadowColor = '#b0b0b0';
    var nativeShadow = react_native_1.Platform.select({
        ios: __assign(__assign({}, (def.ios || {})), { shadowColor: shadowColor || (def.ios && def.ios.shadowColor) || neutralShadowColor }),
        android: __assign(__assign({}, (def.android || {})), { shadowColor: shadowColor || (def.android && def.android.shadowColor) || neutralShadowColor }),
    }) || {};
    // For web, merge boxShadow if present
    if (react_native_1.Platform.OS === 'web' && def.web) {
        return __assign(__assign({}, nativeShadow), def.web);
    }
    return nativeShadow;
}
function getCardStyles(theme, colors) {
    return {
        borderRadius: theme.sizes.CARD_BORDER_RADIUS,
        borderWidth: theme.sizes.CARD_BORDER_WIDTH,
        borderColor: colors.border,
    };
}
exports.default = Block;
//# sourceMappingURL=Block.js.map