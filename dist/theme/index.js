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
exports.useTheme = useTheme;
exports.useGalioTheme = useGalioTheme;
exports.useColors = useColors;
exports.GalioProvider = GalioProvider;
exports.useThemeColors = useThemeColors;
exports.useGalioStyles = useGalioStyles;
exports.withGalio = withGalio;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var colors_1 = __importStar(require("./colors"));
var sizes_1 = __importDefault(require("./sizes"));
// Deep merge utility for theme customization
function deepMerge(target, source) {
    var output = __assign({}, target);
    if (!source)
        return output;
    Object.keys(source).forEach(function (key) {
        var sourceValue = source[key];
        var targetValue = output[key];
        if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
            if (targetValue && typeof targetValue === 'object' && !Array.isArray(targetValue)) {
                output[key] = deepMerge(targetValue, sourceValue);
            }
            else {
                output[key] = sourceValue;
            }
        }
        else if (sourceValue !== undefined) {
            output[key] = sourceValue;
        }
    });
    return output;
}
// Get semantic colors based on current mode
function getSemanticColors(mode, customColors) {
    var baseColors = mode === 'dark' ? colors_1.DARK_COLORS : colors_1.LIGHT_COLORS;
    return customColors ? deepMerge(baseColors, customColors) : baseColors;
}
var DEFAULT_THEME = {
    COLORS: colors_1.default,
    SIZES: sizes_1.default,
    colors: colors_1.LIGHT_COLORS,
    sizes: sizes_1.default,
    shadows: colors_1.SHADOWS,
    mode: 'light',
};
var GalioContext = (0, react_1.createContext)(null);
/**
 * Main theme hook - returns the complete theme object
 * @returns {GalioTheme} Complete theme with colors, sizes, and mode
 *
 * @example
 * const { colors, mode, sizes } = useTheme();
 * <View style={{ backgroundColor: colors.background }}>
 *   <Text style={{ color: colors.text }}>Hello</Text>
 * </View>
 */
function useTheme() {
    var theme = (0, react_1.useContext)(GalioContext);
    if (!theme) {
        if (!global.__GALIO_WARNED_NO_PROVIDER__) {
            global.__GALIO_WARNED_NO_PROVIDER__ = true;
            console.warn('useTheme: No GalioProvider found, using default theme');
        }
        return DEFAULT_THEME;
    }
    return theme;
}
/**
 * Legacy hook - use useTheme() instead
 * @deprecated Use useTheme() for better TypeScript support and semantic colors
 */
function useGalioTheme() {
    if (!global.__GALIO_WARNED_DEPRECATED_HOOK__) {
        global.__GALIO_WARNED_DEPRECATED_HOOK__ = true;
        console.warn('useGalioTheme is deprecated. Use useTheme() instead for modern semantic colors.');
    }
    return useTheme();
}
/**
 * Convenience hook - returns just semantic colors for current mode
 * @returns {SemanticColors} Semantic colors (background, text, primary, etc.)
 *
 * @example
 * const colors = useColors();
 * <Text style={{ color: colors.text }}>Auto adapts to theme mode!</Text>
 */
function useColors() {
    var theme = useTheme();
    return theme.colors;
}
/**
 * GalioProvider - Wrap your app with this to enable theming
 *
 * @param mode - 'light', 'dark', or 'auto' (follows system preference)
 * @param theme - Custom theme overrides
 *
 * @example
 * // Simple: Auto light/dark mode
 * <GalioProvider>
 *   <App />
 * </GalioProvider>
 *
 * @example
 * // Custom brand colors
 * <GalioProvider theme={{ colors: { primary: '#FF6B6B' } }}>
 *   <App />
 * </GalioProvider>
 *
 * @example
 * // Controlled mode switching
 * const [mode, setMode] = useState('light');
 * <GalioProvider mode={mode}>
 *   <Button onPress={() => setMode(mode === 'light' ? 'dark' : 'light')}>
 *     Toggle Theme
 *   </Button>
 * </GalioProvider>
 */
function GalioProvider(_a) {
    var _b = _a.mode, mode = _b === void 0 ? 'auto' : _b, _c = _a.theme, theme = _c === void 0 ? {} : _c, children = _a.children;
    var systemColorScheme = (0, react_native_1.useColorScheme)();
    var _d = (0, react_1.useState)(function () {
        if (mode === 'auto') {
            return systemColorScheme === 'dark' ? 'dark' : 'light';
        }
        return mode;
    }), currentMode = _d[0], setCurrentMode = _d[1];
    (0, react_1.useEffect)(function () {
        if (mode === 'auto') {
            setCurrentMode(systemColorScheme === 'dark' ? 'dark' : 'light');
        }
        else {
            setCurrentMode(mode);
        }
    }, [mode, systemColorScheme]);
    var providerTheme = (0, react_1.useMemo)(function () {
        try {
            // Check if using new API (colors) or legacy API (COLORS)
            var isLegacyAPI = theme.COLORS && !theme.colors;
            if (isLegacyAPI && !global.__GALIO_WARNED_LEGACY_API__) {
                global.__GALIO_WARNED_LEGACY_API__ = true;
                console.warn('GalioProvider: Legacy theme API detected. Consider migrating to the new API:\n' +
                    '  Old: theme={{ COLORS: {...}, SIZES: {...} }}\n' +
                    '  New: theme={{ colors: {...}, sizes: {...} }}');
            }
            // Merge custom colors with base colors for current mode
            var customColors = theme.colors || {};
            var semanticColors = getSemanticColors(currentMode, customColors);
            // Merge sizes
            var customSizes = theme.sizes || theme.SIZES || {};
            var mergedSizes = customSizes ? deepMerge(sizes_1.default, customSizes) : sizes_1.default;
            // Merge shadows (allow override via theme.shadows)
            var mergedShadows = theme.shadows ? deepMerge(colors_1.SHADOWS, theme.shadows) : colors_1.SHADOWS;
            return __assign({ 
                // Legacy structure (for backward compatibility)
                COLORS: deepMerge(colors_1.default, (theme === null || theme === void 0 ? void 0 : theme.COLORS) || {}), SIZES: mergedSizes, 
                // Modern structure
                colors: semanticColors, sizes: mergedSizes, shadows: mergedShadows, mode: currentMode }, theme === null || theme === void 0 ? void 0 : theme.customTheme);
        }
        catch (error) {
            console.warn('GalioProvider: Error merging themes, falling back to default', error);
            return __assign(__assign({}, DEFAULT_THEME), { mode: currentMode, colors: getSemanticColors(currentMode) });
        }
    }, [theme, currentMode]);
    return (<GalioContext.Provider value={providerTheme}>
            {children}
        </GalioContext.Provider>);
}
/**
 * Legacy hook for getting mode-specific colors
 * @deprecated Use useColors() instead for automatic mode adaptation
 */
function useThemeColors() {
    if (!global.__GALIO_WARNED_THEME_COLORS__) {
        global.__GALIO_WARNED_THEME_COLORS__ = true;
        console.warn('useThemeColors is deprecated. Use useColors() for modern semantic color tokens.');
    }
    var theme = useTheme();
    var modeKey = theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE';
    return theme.COLORS[modeKey];
}
/**
 * Create styles based on theme
 * @deprecated Use useColors() and create styles directly for better performance
 */
function useGalioStyles(styleFactory) {
    var theme = useTheme();
    return (0, react_1.useMemo)(function () {
        return styleFactory ? styleFactory(theme) : undefined;
    }, [styleFactory, theme]);
}
/**
 * HOC for injecting theme into components
 * @deprecated Use useTheme() or useColors() hooks instead
 */
function withGalio(Component, styleFactory) {
    if (!styleFactory) {
        return Component;
    }
    var WrappedComponent = function (props) {
        var theme = useTheme();
        var styles = (0, react_1.useMemo)(function () { return styleFactory(theme); }, [theme]);
        return <Component {...props} styles={styles}/>;
    };
    WrappedComponent.displayName = "withGalio(".concat(Component.displayName || Component.name, ")");
    return WrappedComponent;
}
exports.default = DEFAULT_THEME;
//# sourceMappingURL=index.js.map