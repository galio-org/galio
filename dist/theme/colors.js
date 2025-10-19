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
exports.DARK_MODE = exports.LIGHT_MODE = exports.BASE = exports.COMPONENTS = exports.THEME = exports.DARK_COLORS = exports.LIGHT_COLORS = exports.SHADOWS = exports.NEUTRAL_DEFAULTS = exports.SOCIAL = void 0;
// Base color palette - shared across modes
exports.SOCIAL = {
    facebook: '#3B5998',
    twitter: '#5BC0DE',
    dribbble: '#EA4C89',
};
// NEUTRAL DEFAULTS - Users should override these with their brand colors
// Define your brand colors in your application's theme file and pass via GalioProvider
exports.NEUTRAL_DEFAULTS = {
    primary: '#6B7280', // Neutral gray - override with your brand primary
    primaryDark: '#4B5563',
    primaryLight: '#9CA3AF',
    info: '#60A5FA', // Neutral blue - override with your brand info
    infoDark: '#3B82F6',
    infoLight: '#93C5FD',
    danger: '#F87171', // Neutral red - override with your brand error
    dangerDark: '#EF4444',
    dangerLight: '#FCA5A5',
    warning: '#FBBF24', // Neutral orange - override with your brand warning
    warningDark: '#F59E0B',
    warningLight: '#FCD34D',
    success: '#34D399', // Neutral green - override with your brand success
    successDark: '#10B981',
    successLight: '#6EE7B7',
};
exports.SHADOWS = {
    xs: {
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.08,
            shadowRadius: 1.5,
        },
        android: {
            elevation: 1,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.08,
            shadowRadius: 1.5,
        },
        web: {
            boxShadow: '0px 1px 2px rgba(0,0,0,0.08)',
        },
    },
    sm: {
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.10,
            shadowRadius: 2.5,
        },
        android: {
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.10,
            shadowRadius: 2.5,
        },
        web: {
            boxShadow: '0px 2px 4px rgba(0,0,0,0.10)',
        },
    },
    md: {
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.13,
            shadowRadius: 4.65,
        },
        android: {
            elevation: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.13,
            shadowRadius: 4.65,
        },
        web: {
            boxShadow: '0px 4px 8px rgba(0,0,0,0.13)',
        },
    },
    lg: {
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.18,
            shadowRadius: 8,
        },
        android: {
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.18,
            shadowRadius: 8,
        },
        web: {
            boxShadow: '0px 8px 16px rgba(0,0,0,0.18)',
        },
    },
    xl: {
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 16 },
            shadowOpacity: 0.22,
            shadowRadius: 16,
        },
        android: {
            elevation: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 16 },
            shadowOpacity: 0.22,
            shadowRadius: 16,
        },
        web: {
            boxShadow: '0px 16px 32px rgba(0,0,0,0.22)',
        },
    },
    // For backward compatibility
    default: {
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 4.65,
        },
        android: {
            elevation: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 4.65,
        },
        web: {
            boxShadow: '0px 4px 4.65px rgba(0,0,0,0.1)',
        },
    },
    strong: {
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.2,
            shadowRadius: 6.27,
        },
        android: {
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.2,
            shadowRadius: 6.27,
        },
        web: {
            boxShadow: '0px 8px 6.27px rgba(0,0,0,0.1)',
        },
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
    // Semantic state colors (neutral defaults - users override via GalioProvider)
    primary: exports.NEUTRAL_DEFAULTS.primary, primaryHover: exports.NEUTRAL_DEFAULTS.primaryDark, primaryActive: exports.NEUTRAL_DEFAULTS.primaryDark, success: exports.NEUTRAL_DEFAULTS.success, successHover: exports.NEUTRAL_DEFAULTS.successDark, error: exports.NEUTRAL_DEFAULTS.danger, errorHover: exports.NEUTRAL_DEFAULTS.dangerDark, warning: exports.NEUTRAL_DEFAULTS.warning, warningHover: exports.NEUTRAL_DEFAULTS.warningDark, info: exports.NEUTRAL_DEFAULTS.info, infoHover: exports.NEUTRAL_DEFAULTS.infoDark, 
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
    primary: exports.NEUTRAL_DEFAULTS.primaryLight, primaryHover: exports.NEUTRAL_DEFAULTS.primary, primaryActive: exports.NEUTRAL_DEFAULTS.primary, success: exports.NEUTRAL_DEFAULTS.successLight, successHover: exports.NEUTRAL_DEFAULTS.success, error: exports.NEUTRAL_DEFAULTS.dangerLight, errorHover: exports.NEUTRAL_DEFAULTS.danger, warning: exports.NEUTRAL_DEFAULTS.warningLight, warningHover: exports.NEUTRAL_DEFAULTS.warning, info: exports.NEUTRAL_DEFAULTS.infoLight, infoHover: exports.NEUTRAL_DEFAULTS.info, 
    // UI element colors
    border: '#374151', borderHover: '#4B5563', divider: '#2A3441', 
    // Component-specific defaults
    input: '#9CA3AF', inputBackground: '#1F2937', inputBorder: '#374151', placeholder: '#6B7280', disabled: '#374151', disabledText: '#6B7280', 
    // Utility colors
    white: '#FFFFFF', black: '#000000', transparent: 'transparent' }, exports.SOCIAL);
// Legacy exports for backward compatibility
// These maintain the old API structure but use neutral defaults
exports.THEME = exports.NEUTRAL_DEFAULTS;
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
    NEUTRAL_DEFAULTS: exports.NEUTRAL_DEFAULTS,
};
//# sourceMappingURL=colors.js.map