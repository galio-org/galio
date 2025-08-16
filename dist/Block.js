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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var theme_1 = require("./theme");
function Block(_a) {
    var _b = _a.row, row = _b === void 0 ? false : _b, _c = _a.flex, flex = _c === void 0 ? false : _c, _d = _a.center, center = _d === void 0 ? false : _d, _e = _a.middle, middle = _e === void 0 ? false : _e, _f = _a.top, top = _f === void 0 ? false : _f, _g = _a.bottom, bottom = _g === void 0 ? false : _g, _h = _a.right, right = _h === void 0 ? false : _h, _j = _a.left, left = _j === void 0 ? false : _j, _k = _a.shadow, shadow = _k === void 0 ? false : _k, _l = _a.space, space = _l === void 0 ? null : _l, _m = _a.fluid, fluid = _m === void 0 ? false : _m, _o = _a.height, height = _o === void 0 ? null : _o, _p = _a.shadowColor, shadowColor = _p === void 0 ? null : _p, _q = _a.card, card = _q === void 0 ? false : _q, _r = _a.width, width = _r === void 0 ? null : _r, _s = _a.safe, safe = _s === void 0 ? false : _s, children = _a.children, style = _a.style, rest = __rest(_a, ["row", "flex", "center", "middle", "top", "bottom", "right", "left", "shadow", "space", "fluid", "height", "shadowColor", "card", "width", "safe", "children", "style"]);
    var theme = (0, theme_1.useGalioTheme)();
    var styleBlock = [
        styles(theme).block,
        row && styles(theme).row,
        flex && { flex: flex === true ? 1 : flex },
        center && styles(theme).center,
        middle && styles(theme).middle,
        top && styles(theme).top,
        bottom && styles(theme).bottom,
        right && styles(theme).right,
        left && styles(theme).left,
        space && { justifyContent: "space-".concat(space) },
        shadow && styles(theme).shadow,
        fluid && styles(theme).fluid,
        card && styles(theme).card,
        height && { height: height },
        width && { width: width },
        shadowColor && { shadowColor: shadowColor },
        style,
    ].filter(Boolean);
    if (safe) {
        return (<react_native_1.SafeAreaView style={styleBlock} {...rest}>
                {children}
            </react_native_1.SafeAreaView>);
    }
    return (<react_native_1.View style={styleBlock} {...rest}>
            {children}
        </react_native_1.View>);
}
var styles = function (theme) {
    return react_native_1.StyleSheet.create({
        block: {
            flexDirection: 'column',
        },
        row: {
            flexDirection: 'row',
        },
        middle: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        center: {
            alignItems: 'center',
            alignSelf: 'center',
        },
        left: {
            alignItems: 'flex-start',
        },
        right: {
            alignItems: 'flex-end',
        },
        top: {
            alignItems: 'flex-start',
            alignSelf: 'flex-start',
        },
        bottom: {
            alignItems: 'flex-end',
            alignSelf: 'flex-end',
        },
        card: {
            borderRadius: theme.SIZES.CARD_BORDER_RADIUS,
            borderWidth: theme.SIZES.CARD_BORDER_WIDTH,
            borderColor: theme.COLORS.LIGHT_MODE.block,
        },
        shadow: __assign({}, react_native_1.Platform.select({
            ios: {
                shadowColor: theme.COLORS.LIGHT_MODE.block,
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: theme.SIZES.BLOCK_SHADOW_OPACITY,
                shadowRadius: theme.SIZES.BLOCK_SHADOW_RADIUS,
            },
            android: {
                elevation: theme.SIZES.ANDROID_ELEVATION,
            },
            web: {
                boxShadow: "0px 3px ".concat(theme.SIZES.BLOCK_SHADOW_RADIUS, "px rgba(0, 0, 0, ").concat(theme.SIZES.BLOCK_SHADOW_OPACITY, ")"),
            },
        })),
        fluid: {
            width: 'auto',
        },
    });
};
exports.default = Block;
//# sourceMappingURL=Block.js.map