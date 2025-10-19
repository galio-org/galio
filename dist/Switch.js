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
var Switch = function (_a) {
    var value = _a.value, onValueChange = _a.onValueChange, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, trackColor = _a.trackColor, iosBackgroundColor = _a.iosBackgroundColor, containerStyle = _a.containerStyle, accessibilityLabel = _a.accessibilityLabel, accessibilityHint = _a.accessibilityHint;
    var colors = (0, theme_1.useColors)();
    var _d = (0, react_1.useState)(value !== null && value !== void 0 ? value : false), internalValue = _d[0], setInternalValue = _d[1];
    var isControlled = value !== undefined;
    var currentValue = isControlled ? value : internalValue;
    (0, react_1.useEffect)(function () {
        if (isControlled)
            setInternalValue(value);
    }, [value, isControlled]);
    var handleValueChange = (0, react_1.useCallback)(function (newValue) {
        if (!isControlled)
            setInternalValue(newValue);
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
    }, [isControlled, onValueChange]);
    // Resolve theme palette key or custom color
    var resolveColor = function (c, fallback) {
        if (!c)
            return fallback || colors.primary;
        if (typeof c === 'string' && c.startsWith('#'))
            return c;
        return colors[c] || fallback || colors.primary;
    };
    var defaultTrackColor = {
        false: resolveColor((trackColor === null || trackColor === void 0 ? void 0 : trackColor.false) || 'surfaceVariant', colors.surfaceVariant),
        true: resolveColor((trackColor === null || trackColor === void 0 ? void 0 : trackColor.true) || color, colors.primary),
    };
    var finalTrackColor = {
        false: defaultTrackColor.false,
        true: defaultTrackColor.true,
    };
    var finalIosBackgroundColor = resolveColor(iosBackgroundColor || 'surfaceVariant', colors.surfaceVariant);
    return (<react_native_1.Switch value={currentValue} onValueChange={handleValueChange} disabled={disabled} trackColor={finalTrackColor} ios_backgroundColor={finalIosBackgroundColor} style={containerStyle} accessibilityRole="switch" accessibilityLabel={accessibilityLabel || 'Switch'} accessibilityHint={accessibilityHint || 'Toggle switch on or off'} accessibilityState={{ checked: currentValue }}/>);
};
exports.default = Switch;
//# sourceMappingURL=Switch.js.map