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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var theme_1 = require("./theme");
function Switch(_a) {
    var value = _a.value, onValueChange = _a.onValueChange, color = _a.color, _b = _a.disabled, disabled = _b === void 0 ? false : _b, trackColor = _a.trackColor, ios_backgroundColor = _a.ios_backgroundColor, containerStyle = _a.containerStyle, accessibilityLabel = _a.accessibilityLabel, accessibilityHint = _a.accessibilityHint;
    var theme = (0, theme_1.useTheme)();
    var colors = (0, theme_1.useColors)();
    var _c = (0, react_1.useState)(value !== null && value !== void 0 ? value : false), internalValue = _c[0], setInternalValue = _c[1];
    var isControlled = value !== undefined;
    var currentValue = isControlled ? value : internalValue;
    (0, react_1.useEffect)(function () {
        if (value !== undefined) {
            setInternalValue(value);
        }
    }, [value]);
    var handleValueChange = (0, react_1.useCallback)(function (newValue) {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
    }, [isControlled, onValueChange]);
    var getThemeColor = (0, react_1.useCallback)(function (colorName) {
        if (!colorName)
            return colors.primary;
        if (typeof colorName === 'string' && colorName.startsWith('#')) {
            return colorName;
        }
        var themeColor = theme.COLORS.LIGHT_MODE[colorName];
        if (typeof themeColor === 'function') {
            return themeColor();
        }
        return themeColor || colors.primary;
    }, [theme.COLORS.LIGHT_MODE]);
    var defaultTrackColor = {
        false: colors.disabled,
        true: getThemeColor(color),
    };
    var finalTrackColor = trackColor || defaultTrackColor;
    var finalIosBackgroundColor = ios_backgroundColor || colors.disabled;
    var accessibilityProps = {
        accessibilityRole: 'switch',
        accessibilityLabel: accessibilityLabel || 'Switch',
        accessibilityHint: accessibilityHint || 'Toggle switch on or off',
        accessibilityState: {
            checked: currentValue,
        },
    };
    return (<react_native_1.Switch value={currentValue} onValueChange={handleValueChange} disabled={disabled} trackColor={finalTrackColor} ios_backgroundColor={finalIosBackgroundColor} style={containerStyle} {...accessibilityProps}/>);
}
exports.default = Switch;
//# sourceMappingURL=Switch.js.map