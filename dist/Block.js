"use strict";
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
var theme_1 = require("./theme");
function Block(props) {
    var row = props.row, flex = props.flex, center = props.center, middle = props.middle, top = props.top, bottom = props.bottom, right = props.right, left = props.left, space = props.space, fluid = props.fluid, height = props.height, width = props.width, shadow = props.shadow, shadowColor = props.shadowColor, card = props.card, safe = props.safe, background = props.background, children = props.children, style = props.style, rest = __rest(props, ["row", "flex", "center", "middle", "top", "bottom", "right", "left", "space", "fluid", "height", "width", "shadow", "shadowColor", "card", "safe", "background", "children", "style"]);
    var theme = (0, theme_1.useGalioTheme)();
    // Build styles using composition pattern for better maintainability
    var blockStyles = useBlockStyles({
        theme: theme,
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
        return (<react_native_1.SafeAreaView style={blockStyles} {...rest}>
        {children}
      </react_native_1.SafeAreaView>);
    }
    return (<react_native_1.View style={blockStyles} {...rest}>
      {children}
    </react_native_1.View>);
}
// Custom hook for building block styles - improves testability and reusability
function useBlockStyles(_a) {
    var theme = _a.theme, row = _a.row, flex = _a.flex, center = _a.center, middle = _a.middle, top = _a.top, bottom = _a.bottom, right = _a.right, left = _a.left, space = _a.space, fluid = _a.fluid, height = _a.height, width = _a.width, shadow = _a.shadow, shadowColor = _a.shadowColor, card = _a.card, background = _a.background, customStyle = _a.customStyle;
    var modeKey = theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE';
    var colors = theme.COLORS[modeKey];
    // Base block styles with theme integration
    var baseStyles = {
        flexDirection: 'column',
        backgroundColor: background || colors.background,
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
        // Visual effects
        shadow && getShadowStyles(theme, colors),
        card && getCardStyles(theme, colors),
        // Custom shadow color override
        shadowColor && { shadowColor: shadowColor }
    ], (Array.isArray(customStyle) ? customStyle : [customStyle]), true).filter(Boolean);
    return styles;
}
// Extracted style builders for better organization
function getShadowStyles(theme, colors) {
    return react_native_1.Platform.select({
        ios: {
            shadowColor: colors.block,
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: theme.SIZES.BLOCK_SHADOW_OPACITY,
            shadowRadius: theme.SIZES.BLOCK_SHADOW_RADIUS,
        },
        android: {
            elevation: theme.SIZES.ANDROID_ELEVATION,
        },
        web: {
            boxShadow: "0px 3px ".concat(theme.SIZES.BLOCK_SHADOW_RADIUS, "px rgba(0, 0, 0, ").concat(theme.SIZES.BLOCK_SHADOW_OPACITY, ")"),
        },
    });
}
function getCardStyles(theme, colors) {
    return {
        borderRadius: theme.SIZES.CARD_BORDER_RADIUS,
        borderWidth: theme.SIZES.CARD_BORDER_WIDTH,
        borderColor: colors.block,
    };
}
exports.default = Block;
//# sourceMappingURL=Block.js.map