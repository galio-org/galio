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
var theme_1 = require("./theme");
var Text_1 = __importDefault(require("./Text"));
var Icon_1 = __importDefault(require("./Icon"));
var Block_1 = __importDefault(require("./Block"));
var height = react_native_1.Dimensions.get("screen").height;
function NavBar(_a) {
    var _b = _a.back, back = _b === void 0 ? false : _b, hideLeft = _a.hideLeft, hideRight = _a.hideRight, left = _a.left, leftIconColor = _a.leftIconColor, leftHitSlop = _a.leftHitSlop, leftIconSize = _a.leftIconSize, leftIconName = _a.leftIconName, leftStyle = _a.leftStyle, leftIconFamily = _a.leftIconFamily, _c = _a.onLeftPress, onLeftPress = _c === void 0 ? function () { } : _c, right = _a.right, rightStyle = _a.rightStyle, style = _a.style, _d = _a.transparent, transparent = _d === void 0 ? false : _d, title = _a.title, titleStyle = _a.titleStyle, titleNumberOfLines = _a.titleNumberOfLines, titleTextProps = _a.titleTextProps, accessibilityLabel = _a.accessibilityLabel;
    var theme = (0, theme_1.useGalioTheme)();
    var renderTitle = (0, react_1.useCallback)(function () {
        if (typeof title === "string") {
            return (<react_native_1.View style={styles(theme).title}>
          <Text_1.default numberOfLines={titleNumberOfLines || 1} style={[styles(theme).titleTextStyle, titleStyle]} {...titleTextProps}>
            {title}
          </Text_1.default>
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
              <Icon_1.default name={leftIconName || (back ? "chevron-left" : "navicon")} family={leftIconFamily || "material"} color={leftIconColor || theme.COLORS.LIGHT_MODE.icon} size={leftIconSize || theme.SIZES.BASE * 2.2}/>
            </react_native_1.Pressable>
          </react_native_1.View>);
            }
            return <react_native_1.View style={[styles(theme).left, leftStyle]}>{left}</react_native_1.View>;
        }
        return <react_native_1.View style={styles(theme).left}/>;
    }, [
        hideLeft,
        leftIconName,
        back,
        left,
        leftStyle,
        onLeftPress,
        leftHitSlop,
        accessibilityLabel,
        leftIconFamily,
        leftIconColor,
        leftIconSize,
        theme,
    ]);
    var renderRight = (0, react_1.useCallback)(function () {
        var hasIcons = react_1.default.Children.count(right) > 1;
        var rightStyles = __assign(__assign({}, styles(theme).right), rightStyle);
        if (!hideRight) {
            return (<react_native_1.View style={rightStyles}>
          {hasIcons ? (<react_native_1.View style={styles(theme).rightIconsContainer}>{right}</react_native_1.View>) : (right)}
        </react_native_1.View>);
        }
        return <react_native_1.View style={styles(theme).right}/>;
    }, [hideRight, right, rightStyle, theme]);
    var navStyles = (0, react_1.useMemo)(function () {
        var defaultStyles = styles(theme).navBar;
        var transparentStyles = transparent ? styles(theme).transparent : {};
        var merged = react_native_1.StyleSheet.flatten([
            defaultStyles,
            transparentStyles,
            style ? style : [],
        ]);
        if (!merged.height || (typeof merged.height === "number" && merged.height <= 0)) {
            merged.height = defaultStyles.height;
        }
        return merged;
    }, [theme, transparent, style]);
    return (<Block_1.default style={navStyles}>
      {renderLeft()}
      {renderTitle()}
      {renderRight()}
    </Block_1.default>);
}
var styles = function (theme) {
    return react_native_1.StyleSheet.create({
        navBar: __assign({ flexDirection: 'row', alignItems: "center", justifyContent: "space-evenly", backgroundColor: theme.COLORS.LIGHT_MODE.white, paddingVertical: theme.SIZES.BASE * 0.5, height: theme.SIZES.BASE * 4.125, width: "auto", borderBottomWidth: 1, borderBottomColor: theme.COLORS.LIGHT_MODE.grey || "#f0f0f0" }, react_native_1.Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.08,
                shadowRadius: 8,
            },
            android: {
                elevation: 4,
            },
            web: {
                boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.08)",
            },
        })),
        title: {
            flex: 2,
            height: height * 0.07,
            alignItems: "center",
            justifyContent: "center",
        },
        titleTextStyle: {
            fontWeight: "700",
            fontSize: theme.SIZES.FONT * 0.875,
            color: theme.COLORS.LIGHT_MODE.black,
            textAlign: "center",
            letterSpacing: 0.3,
        },
        left: {
            height: height * 0.07,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: theme.SIZES.BASE,
        },
        right: {
            height: height * 0.07,
            alignItems: "center",
            justifyContent: "center",
            marginRight: theme.SIZES.BASE,
        },
        transparent: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            borderWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
        },
        rightIconsContainer: {
            flexDirection: "row",
            alignItems: "center",
        },
    });
};
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map