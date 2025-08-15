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
var react_native_2 = require("react-native");
var theme_1 = require("./theme");
var text_1 = __importDefault(require("./atomic/ions/text"));
var icon_1 = __importDefault(require("./atomic/ions/icon"));
var Block_1 = __importDefault(require("./Block"));
var height = react_native_2.Dimensions.get('screen').height;
function NavBar(_a) {
    var _b = _a.back, back = _b === void 0 ? false : _b, hideLeft = _a.hideLeft, hideRight = _a.hideRight, left = _a.left, leftIconColor = _a.leftIconColor, leftHitSlop = _a.leftHitSlop, leftIconSize = _a.leftIconSize, leftIconName = _a.leftIconName, leftStyle = _a.leftStyle, leftIconFamily = _a.leftIconFamily, _c = _a.onLeftPress, onLeftPress = _c === void 0 ? function () { } : _c, right = _a.right, rightStyle = _a.rightStyle, style = _a.style, _d = _a.transparent, transparent = _d === void 0 ? false : _d, title = _a.title, titleStyle = _a.titleStyle, titleNumberOfLines = _a.titleNumberOfLines, titleTextProps = _a.titleTextProps, accessibilityLabel = _a.accessibilityLabel;
    var theme = (0, theme_1.useGalioTheme)();
    var renderTitle = (0, react_1.useCallback)(function () {
        if (typeof title === 'string') {
            return (<react_native_1.View style={styles(theme).title}>
                    <text_1.default numberOfLines={titleNumberOfLines || 1} style={[styles(theme).titleTextStyle, titleStyle]} {...titleTextProps}>
                        {title}
                    </text_1.default>
                </react_native_1.View>);
        }
        if (!title)
            return null;
        return title;
    }, [title, titleStyle, titleNumberOfLines, titleTextProps, theme]);
    var renderLeft = (0, react_1.useCallback)(function () {
        if (!hideLeft) {
            if (leftIconName || (back && !left)) {
                return (<react_native_1.View style={[styles(theme).left, leftStyle]}>
                        <react_native_1.Pressable onPress={onLeftPress} hitSlop={leftHitSlop} accessibilityRole="button" accessibilityLabel={accessibilityLabel || "Back button"}>
                            <icon_1.default name={leftIconName || (back ? 'chevron-left' : 'navicon')} family={leftIconFamily || 'evilicons'} color={leftIconColor || theme.COLORS.LIGHT_MODE.icon} size={leftIconSize || theme.SIZES.BASE * 1.0625}/>
                        </react_native_1.Pressable>
                    </react_native_1.View>);
            }
            return <react_native_1.View style={[styles(theme).left, leftStyle]}>{left}</react_native_1.View>;
        }
        return <react_native_1.View style={styles(theme).left}/>;
    }, [hideLeft, leftIconName, back, left, leftStyle, onLeftPress, leftHitSlop, accessibilityLabel, leftIconFamily, leftIconColor, leftIconSize, theme]);
    var renderRight = (0, react_1.useCallback)(function () {
        var hasIcons = react_1.default.Children.count(right) > 1;
        var rightStyles = __assign(__assign({}, styles(theme).right), rightStyle);
        if (!hideRight) {
            return (<react_native_1.View style={rightStyles}>
                    {hasIcons ? (<react_native_1.View style={styles(theme).rightIconsContainer}>
                            {right}
                        </react_native_1.View>) : (right)}
                </react_native_1.View>);
        }
        return <react_native_1.View style={styles(theme).right}/>;
    }, [hideRight, right, rightStyle, theme]);
    var navStyles = (0, react_1.useMemo)(function () {
        var baseStyle = styles(theme).navBar;
        var transparentStyle = transparent ? styles(theme).transparent : {};
        return __assign(__assign(__assign({}, baseStyle), transparentStyle), style);
    }, [theme, transparent, style]);
    return (<Block_1.default style={navStyles}>
            {renderLeft()}
            {renderTitle()}
            {renderRight()}
        </Block_1.default>);
}
var styles = function (theme) {
    return react_native_1.StyleSheet.create({
        navBar: __assign({ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: theme.COLORS.LIGHT_MODE.white, paddingVertical: theme.SIZES.BASE * 1, paddingHorizontal: theme.SIZES.BASE * 1, height: 56, width: '100%', borderBottomWidth: 1, borderBottomColor: theme.COLORS.LIGHT_MODE.grey || '#f0f0f0' }, react_native_1.Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.08,
                shadowRadius: 8,
            },
            android: {
                elevation: 4,
            },
            web: {
                boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.08)',
            },
        })),
        title: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: theme.SIZES.BASE * 0.5,
        },
        titleTextStyle: {
            fontWeight: '700',
            fontSize: theme.SIZES.FONT * 1.1,
            color: theme.COLORS.LIGHT_MODE.black,
            textAlign: 'center',
            letterSpacing: 0.3,
        },
        left: {
            minWidth: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: theme.SIZES.BASE * 0.25,
            borderRadius: 20,
            backgroundColor: 'transparent',
        },
        right: {
            minWidth: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: theme.SIZES.BASE * 0.25,
            borderRadius: 20,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            flexWrap: 'nowrap',
        },
        transparent: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
        },
        rightIconsContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    });
};
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map