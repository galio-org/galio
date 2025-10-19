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
var react_native_1 = require("react-native");
var Icon_1 = __importDefault(require("./Icon"));
var theme_1 = require("./theme");
var Input = (0, react_1.forwardRef)(function (_a, ref) {
    var style = _a.style, textInputStyle = _a.textInputStyle, _b = _a.type, type = _b === void 0 ? 'default' : _b, placeholderTextColor = _a.placeholderTextColor, label = _a.label, labelStyles = _a.labelStyles, _c = _a.color, color = _c === void 0 ? 'primary' : _c, help = _a.help, helpStyles = _a.helpStyles, bgColor = _a.bgColor, _d = _a.borderless, borderless = _d === void 0 ? false : _d, _e = _a.viewPass, viewPass = _e === void 0 ? false : _e, _f = _a.rounded, rounded = _f === void 0 ? false : _f, _g = _a.icon, icon = _g === void 0 ? false : _g, family = _a.family, _h = _a.left, left = _h === void 0 ? true : _h, _j = _a.right, right = _j === void 0 ? false : _j, _k = _a.iconColor, iconColor = _k === void 0 ? 'primary' : _k, // legacy
    _l = _a.iconSize, // legacy
    iconSize = _l === void 0 ? 16 : _l, // legacy
    _m = _a.iconProps, // legacy
    iconProps = _m === void 0 ? {} : _m, _o = _a.topHelp, topHelp = _o === void 0 ? true : _o, _p = _a.bottomHelp, bottomHelp = _p === void 0 ? false : _p, iconContent = _a.iconContent, _q = _a.password, password = _q === void 0 ? false : _q, error = _a.error, onRef = _a.onRef, rest = __rest(_a, ["style", "textInputStyle", "type", "placeholderTextColor", "label", "labelStyles", "color", "help", "helpStyles", "bgColor", "borderless", "viewPass", "rounded", "icon", "family", "left", "right", "iconColor", "iconSize", "iconProps", "topHelp", "bottomHelp", "iconContent", "password", "error", "onRef"]);
    var theme = (0, theme_1.useTheme)();
    var colors = (0, theme_1.useColors)();
    var _r = (0, react_1.useState)(password), isPassword = _r[0], setIsPassword = _r[1];
    var inputRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        focus: function () { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
        blur: function () { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur(); },
        clear: function () { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.clear(); },
        isFocused: function () { var _a; return ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.isFocused()) || false; },
    }); });
    (0, react_1.useEffect)(function () {
        setIsPassword(password);
    }, [password]);
    // Use theme color for bgColor if it's a theme key
    var resolvedBgColor = bgColor;
    if (resolvedBgColor && colors[resolvedBgColor]) {
        resolvedBgColor = colors[resolvedBgColor];
    }
    var inputViewStyles = [
        styles(theme, colors).inputStyle,
        styles(theme, colors).inputContainer,
        resolvedBgColor && { backgroundColor: resolvedBgColor },
        rounded && styles(theme, colors).rounded,
        borderless && styles(theme, colors).borderless,
        error && { borderColor: colors.error },
        rest.multiline && { minHeight: theme.sizes.INPUT_HEIGHT, height: 'auto' },
        style,
    ].filter(Boolean);
    // Use theme color for text color if it's a theme key
    var resolvedTextColor = color;
    if (resolvedTextColor && colors[resolvedTextColor]) {
        resolvedTextColor = colors[resolvedTextColor];
    }
    var inputStyles = [
        styles(theme, colors).inputView,
        borderless && icon && styles(theme, colors).inputIcon,
        styles(theme, colors).inputText,
        resolvedTextColor && { color: resolvedTextColor },
        rest.multiline && { textAlignVertical: 'top' },
        textInputStyle || {}
    ].filter(Boolean);
    // Prefer new iconProps API, fallback to legacy iconColor/iconSize
    var resolvedIconColor = (error && colors.error)
        || iconProps.color
        || iconColor
        || placeholderTextColor
        || colors.placeholder;
    // If resolvedIconColor matches a theme color, use it
    if (resolvedIconColor && colors[resolvedIconColor]) {
        resolvedIconColor = colors[resolvedIconColor];
    }
    var resolvedIconSize = iconProps.size || iconSize || theme.sizes.BASE * 1.0625;
    // Warn if using legacy props
    (0, react_1.useEffect)(function () {
        if (iconColor !== undefined && iconProps.color === undefined) {
            // eslint-disable-next-line no-console
            console.warn('[Input] iconColor is deprecated. Use iconProps.color instead.');
        }
        if (iconSize !== undefined && iconProps.size === undefined) {
            // eslint-disable-next-line no-console
            console.warn('[Input] iconSize is deprecated. Use iconProps.size instead.');
        }
    }, [iconColor, iconSize, iconProps.color, iconProps.size]);
    // Use theme color for icon if it's a theme key
    var iconThemeColor = resolvedIconColor;
    if (iconThemeColor && colors[iconThemeColor]) {
        iconThemeColor = colors[iconThemeColor];
    }
    var iconInstance = icon ? (<Icon_1.default name={icon} family={iconProps.family || family} size={resolvedIconSize} style={__assign({ marginRight: left && !right ? 4 : 0 }, (iconProps.style || {}))} color={iconThemeColor} {...iconProps}/>) : (iconContent);
    // Use theme color for viewPass icon if it's a theme key
    var viewPassColor = iconProps.color || iconColor || colors.text;
    if (viewPassColor && colors[viewPassColor]) {
        viewPassColor = colors[viewPassColor];
    }
    var viewPassElement = password && viewPass && (<react_native_1.Pressable style={{ marginLeft: 2 }} onPress={function () { return setIsPassword(!isPassword); }}>
      <Icon_1.default size={iconProps.size || iconSize || theme.sizes.BASE * 1.0625} color={viewPassColor} name="eye" family="entypo"/>
    </react_native_1.Pressable>);
    // Use theme color for label if it's a theme key
    var resolvedLabelColor = labelStyles && labelStyles.color;
    if (resolvedLabelColor && colors[resolvedLabelColor]) {
        resolvedLabelColor = colors[resolvedLabelColor];
    }
    var labelContent = label && label.length > 0 && (<react_native_1.Text style={[styles(theme, colors).label, labelStyles, resolvedLabelColor ? { color: resolvedLabelColor } : {}]}>{label}</react_native_1.Text>);
    // Use theme color for help text if it's a theme key
    var resolvedHelpColor = helpStyles && helpStyles.color;
    if (resolvedHelpColor && colors[resolvedHelpColor]) {
        resolvedHelpColor = colors[resolvedHelpColor];
    }
    var helpContent = help && help.length > 0 && (<react_native_1.Text style={[styles(theme, colors).helpText, helpStyles, resolvedHelpColor ? { color: resolvedHelpColor } : {}]}>{help}</react_native_1.Text>);
    return (<react_native_1.View style={{
            marginVertical: theme.sizes.BASE / 2,
            alignContent: 'center',
        }}>
      {labelContent}
      {topHelp && !bottomHelp && helpContent}
      <react_native_1.View style={inputViewStyles}>
        {left && !right && iconInstance}
        <react_native_1.TextInput ref={function (r) {
            if (r) {
                inputRef.current = r;
                onRef === null || onRef === void 0 ? void 0 : onRef(r);
            }
        }} style={inputStyles} keyboardType={type} secureTextEntry={isPassword} placeholderTextColor={placeholderTextColor && colors[placeholderTextColor]
            ? colors[placeholderTextColor]
            : placeholderTextColor || colors.placeholder} underlineColorAndroid="transparent" {...rest}/>
        {right && iconInstance}
        {viewPassElement}
      </react_native_1.View>
      {bottomHelp && helpContent}
    </react_native_1.View>);
});
Input.displayName = 'Input';
var styles = function (theme, colors) {
    return react_native_1.StyleSheet.create({
        inputStyle: {
            backgroundColor: colors.inputBackground,
            borderRadius: theme.sizes.INPUT_BORDER_RADIUS,
            borderWidth: theme.sizes.INPUT_BORDER_WIDTH,
            borderColor: colors.inputBorder,
            height: theme.sizes.INPUT_HEIGHT,
            paddingHorizontal: theme.sizes.INPUT_HORIZONTAL,
            width: '100%',
        },
        inputText: {
            color: colors.input,
            fontSize: theme.sizes.INPUT_TEXT,
            textDecorationColor: 'transparent',
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputView: {
            flex: 1,
        },
        inputIcon: {
            marginHorizontal: theme.sizes.BASE,
        },
        label: {
            fontWeight: '500',
            fontSize: theme.sizes.INPUT_TEXT,
            marginVertical: theme.sizes.INPUT_VERTICAL_LABEL,
            paddingHorizontal: theme.sizes.INPUT_HORIZONTAL
        },
        helpText: {
            color: colors.warning,
            fontSize: 14,
            marginVertical: 8,
            paddingHorizontal: 16,
        },
        rounded: {
            borderRadius: theme.sizes.INPUT_ROUNDED,
        },
        borderless: {
            borderColor: 'transparent',
            borderWidth: 0,
        }
    });
};
exports.default = Input;
//# sourceMappingURL=Input.js.map