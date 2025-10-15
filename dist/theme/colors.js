"use strict";
// Semantic Color Tokens - Modern React Native Theming (2025)
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DARK_MODE = exports.LIGHT_MODE = exports.BASE = exports.COMPONENTS = exports.THEME = exports.DARK_COLORS = exports.LIGHT_COLORS = exports.SHADOWS = exports.BRAND_COLORS = exports.SOCIAL = void 0;
// Base color palette - shared across modes
exports.SOCIAL = {
    facebook: '#3B5998',
    twitter: '#5BC0DE',
    dribbble: '#EA4C89',
};
exports.BRAND_COLORS = {
    primary: '#FE2472',
    primaryDark: '#F4075C',
    primaryLight: '#FF8AB9',
    info: '#0E2ADD',
    infoDark: '#0520D0',
    infoLight: '#8794FF',
    danger: '#FF3F31',
    dangerDark: '#F43324',
    dangerLight: '#FF7167',
    warning: '#FF9C09',
    warningDark: '#EE8E00',
    warningLight: '#FFCC76',
    success: '#18CE0F',
    successDark: '#24AD12',
    successLight: '#88F38E',
};
exports.SHADOWS = {
    default: {
        boxShadow: '0px 4px 4.65px rgba(0,0,0,0.1)',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,
    },
    strong: {
        boxShadow: '0px 8px 6.27px rgba(0,0,0,0.1)',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 6.27,
    },
};
// Semantic color tokens for light mode
exports.LIGHT_COLORS = __assign({ 
    // Semantic background colors
    background: '#FFFFFF', surface: '#F9F9F9', surfaceVariant: '#F5F5F5', 
    // Semantic text colors
    text: '#161D28', textSecondary: '#666666', textTertiary: '#9FA5AA', 
    // Colors for text on branded backgrounds
    onPrimary: '#FFFFFF', onSuccess: '#FFFFFF', onError: '#FFFFFF', onWarning: '#FFFFFF', onInfo: '#FFFFFF', onBackground: '#161D28', onSurface: '#161D28', 
    // Semantic state colors (use brand colors)
    primary: exports.BRAND_COLORS.primary, primaryHover: exports.BRAND_COLORS.primaryDark, primaryActive: exports.BRAND_COLORS.primaryDark, success: exports.BRAND_COLORS.success, successHover: exports.BRAND_COLORS.successDark, error: exports.BRAND_COLORS.danger, errorHover: exports.BRAND_COLORS.dangerDark, warning: exports.BRAND_COLORS.warning, warningHover: exports.BRAND_COLORS.warningDark, info: exports.BRAND_COLORS.info, infoHover: exports.BRAND_COLORS.infoDark, 
    // UI element colors
    border: '#E0E0E0', borderHover: '#CCCCCC', divider: '#EEEEEE', 
    // Component-specific defaults
    input: '#808080', inputBackground: '#FFFFFF', inputBorder: '#E0E0E0', placeholder: '#9FA5AA', disabled: '#E0E0E0', disabledText: '#9FA5AA', 
    // Utility colors
    white: '#FFFFFF', black: '#000000', transparent: 'transparent' }, exports.SOCIAL);
// Semantic color tokens for dark mode
exports.DARK_COLORS = __assign({ 
    // Semantic background colors
    background: '#161D28', surface: '#1F2937', surfaceVariant: '#2A3441', 
    // Semantic text colors
    text: '#FFFFFF', textSecondary: '#D1D5DB', textTertiary: '#9CA3AF', 
    // Colors for text on branded backgrounds (same as light)
    onPrimary: '#FFFFFF', onSuccess: '#FFFFFF', onError: '#FFFFFF', onWarning: '#FFFFFF', onInfo: '#FFFFFF', onBackground: '#FFFFFF', onSurface: '#FFFFFF', 
    // Semantic state colors (slightly brighter for dark mode)
    primary: exports.BRAND_COLORS.primaryLight, primaryHover: exports.BRAND_COLORS.primary, primaryActive: exports.BRAND_COLORS.primary, success: exports.BRAND_COLORS.successLight, successHover: exports.BRAND_COLORS.success, error: exports.BRAND_COLORS.dangerLight, errorHover: exports.BRAND_COLORS.danger, warning: exports.BRAND_COLORS.warningLight, warningHover: exports.BRAND_COLORS.warning, info: exports.BRAND_COLORS.infoLight, infoHover: exports.BRAND_COLORS.info, 
    // UI element colors
    border: '#374151', borderHover: '#4B5563', divider: '#2A3441', 
    // Component-specific defaults
    input: '#9CA3AF', inputBackground: '#1F2937', inputBorder: '#374151', placeholder: '#6B7280', disabled: '#374151', disabledText: '#6B7280', 
    // Utility colors
    white: '#FFFFFF', black: '#000000', transparent: 'transparent' }, exports.SOCIAL);
// Legacy exports for backward compatibility
// These maintain the old API structure but use new semantic tokens
exports.THEME = exports.BRAND_COLORS;
exports.COMPONENTS = {
    input: '#808080',
    placeholder: '#9FA5AA',
    navbar: '#F9F9F9',
    block: '#808080',
    icon: '#000000',
};
exports.BASE = {
    white: '#FFFFFF',
    black: '#000000',
    grey: '#898989',
    muted: '#9FA5AA',
    transparent: 'transparent',
    neutral: function (opacity) {
        if (opacity === void 0) { opacity = 0.65; }
        return "rgba(255,255,255, ".concat(opacity, ")");
    },
};
// Legacy LIGHT_MODE and DARK_MODE - deprecated but kept for compatibility
exports.LIGHT_MODE = __assign(__assign(__assign(__assign(__assign({}, exports.BASE), { background: exports.LIGHT_COLORS.background, text: exports.LIGHT_COLORS.text }), exports.COMPONENTS), exports.THEME), exports.SOCIAL);
exports.DARK_MODE = __assign(__assign(__assign(__assign(__assign({}, exports.BASE), { background: exports.DARK_COLORS.background, text: exports.DARK_COLORS.text }), exports.COMPONENTS), exports.THEME), exports.SOCIAL);
// Default export with both modern and legacy structures
exports.default = {
    LIGHT_MODE: exports.LIGHT_MODE,
    DARK_MODE: exports.DARK_MODE,
    SHADOWS: exports.SHADOWS,
    // New semantic exports
    LIGHT_COLORS: exports.LIGHT_COLORS,
    DARK_COLORS: exports.DARK_COLORS,
    BRAND_COLORS: exports.BRAND_COLORS,
};
//# sourceMappingURL=colors.js.map