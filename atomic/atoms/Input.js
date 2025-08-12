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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var icon_1 = __importDefault(require("../ions/icon"));
var theme_1 = require("../../theme");
var Input = (0, react_1.forwardRef)(function (_a, ref) {
    var style = _a.style, textInputStyle = _a.textInputStyle, _b = _a.type, type = _b === void 0 ? 'default' : _b, placeholderTextColor = _a.placeholderTextColor, label = _a.label, labelStyles = _a.labelStyles, _c = _a.color, color = _c === void 0 ? 'primary' : _c, help = _a.help, helpStyles = _a.helpStyles, bgColor = _a.bgColor, _d = _a.borderless, borderless = _d === void 0 ? false : _d, _e = _a.viewPass, viewPass = _e === void 0 ? false : _e, _f = _a.rounded, rounded = _f === void 0 ? false : _f, _g = _a.icon, icon = _g === void 0 ? false : _g, family = _a.family, _h = _a.left, left = _h === void 0 ? true : _h, _j = _a.right, right = _j === void 0 ? false : _j, _k = _a.iconColor, iconColor = _k === void 0 ? 'primary' : _k, _l = _a.topHelp, topHelp = _l === void 0 ? true : _l, _m = _a.bottomHelp, bottomHelp = _m === void 0 ? false : _m, _o = _a.iconSize, iconSize = _o === void 0 ? 16 : _o, iconContent = _a.iconContent, _p = _a.password, password = _p === void 0 ? false : _p, error = _a.error, onRef = _a.onRef, rest = __rest(_a, ["style", "textInputStyle", "type", "placeholderTextColor", "label", "labelStyles", "color", "help", "helpStyles", "bgColor", "borderless", "viewPass", "rounded", "icon", "family", "left", "right", "iconColor", "topHelp", "bottomHelp", "iconSize", "iconContent", "password", "error", "onRef"]);
    var theme = (0, theme_1.useGalioTheme)();
    var _q = (0, react_1.useState)(password), isPassword = _q[0], setIsPassword = _q[1];
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
    var inputViewStyles = [
        styles(theme).inputStyle,
        styles(theme).inputContainer,
        bgColor && { backgroundColor: bgColor },
        rounded && styles(theme).rounded,
        borderless && styles(theme).borderless,
        error && { borderColor: theme.COLORS.LIGHT_MODE.danger },
        rest.multiline && { minHeight: theme.SIZES.INPUT_HEIGHT, height: 'auto' },
        style,
    ].filter(Boolean);
    var inputStyles = [
        styles(theme).inputView,
        borderless && icon && styles(theme).inputIcon,
        styles(theme).inputText,
        color && { color: color },
        rest.multiline && { textAlignVertical: 'top' },
        textInputStyle || {}
    ].filter(Boolean);
    var iconInstance = icon ? (<icon_1.default name={icon} family={family} size={iconSize || theme.SIZES.BASE * 1.0625} style={{ marginRight: left && !right ? 4 : 0 }} color={(error && theme.COLORS.LIGHT_MODE.danger) || iconColor || placeholderTextColor || theme.COLORS.LIGHT_MODE.neutral(0.6)}/>) : (iconContent);
    var viewPassElement = password && viewPass && (<react_native_1.Pressable style={{ marginLeft: 2 }} onPress={function () { return setIsPassword(!isPassword); }}>
      <icon_1.default size={iconSize || theme.SIZES.BASE * 1.0625} color={iconColor || theme.COLORS.LIGHT_MODE.black} name="eye" family="entypo"/>
    </react_native_1.Pressable>);
    var labelContent = label && label.length > 0 && (<react_native_1.Text style={[styles(theme).label, labelStyles || {}]}>{label}</react_native_1.Text>);
    var helpContent = help && help.length > 0 && (<react_native_1.Text style={[styles(theme).helpText, helpStyles || {}]}>{help}</react_native_1.Text>);
    return (<react_native_1.View style={{
            marginVertical: theme.SIZES.BASE / 2,
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
        }} style={inputStyles} keyboardType={type} secureTextEntry={isPassword} placeholderTextColor={placeholderTextColor} underlineColorAndroid="transparent" {...rest}/>
        {right && iconInstance}
        {viewPassElement}
      </react_native_1.View>
      {bottomHelp && helpContent}
    </react_native_1.View>);
});
Input.displayName = 'Input';
var styles = function (theme) {
    return react_native_1.StyleSheet.create({
        inputStyle: {
            backgroundColor: theme.COLORS.LIGHT_MODE.white,
            borderRadius: theme.SIZES.INPUT_BORDER_RADIUS,
            borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
            borderColor: theme.COLORS.LIGHT_MODE.input,
            height: theme.SIZES.INPUT_HEIGHT,
            paddingHorizontal: theme.SIZES.INPUT_HORIZONTAL,
            width: '100%',
        },
        inputText: {
            color: theme.COLORS.LIGHT_MODE.input,
            fontSize: theme.SIZES.INPUT_TEXT,
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
            marginHorizontal: theme.SIZES.BASE,
        },
        label: {
            fontWeight: '500',
            fontSize: theme.SIZES.INPUT_TEXT,
            marginVertical: theme.SIZES.INPUT_VERTICAL_LABEL,
            paddingHorizontal: theme.SIZES.INPUT_HORIZONTAL
        },
        helpText: {
            color: theme.COLORS.LIGHT_MODE.warningLight,
            fontSize: 14,
            marginVertical: 8,
            paddingHorizontal: 16,
        },
        rounded: {
            borderRadius: theme.SIZES.INPUT_ROUNDED,
        },
        borderless: {
            borderColor: 'transparent',
            borderWidth: 0,
        }
    });
};
exports.default = Input;
//# sourceMappingURL=Input.js.map