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
exports.useGalioTheme = useGalioTheme;
exports.GalioProvider = GalioProvider;
exports.useThemeColors = useThemeColors;
exports.useGalioStyles = useGalioStyles;
exports.withGalio = withGalio;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var colors_1 = __importDefault(require("./colors"));
var sizes_1 = __importDefault(require("./sizes"));
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
var DEFAULT_THEME = {
    COLORS: colors_1.default,
    SIZES: sizes_1.default,
    mode: 'light',
};
var GalioContext = (0, react_1.createContext)(null);
function useGalioTheme() {
    var theme = (0, react_1.useContext)(GalioContext);
    if (!theme) {
        if (!global.__GALIO_WARNED_NO_PROVIDER__) {
            global.__GALIO_WARNED_NO_PROVIDER__ = true;
            console.warn('useGalioTheme: No GalioProvider found, using default theme');
        }
        return DEFAULT_THEME;
    }
    return theme;
}
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
            return __assign({ COLORS: deepMerge(DEFAULT_THEME.COLORS, (theme === null || theme === void 0 ? void 0 : theme.COLORS) || {}), SIZES: deepMerge(DEFAULT_THEME.SIZES, (theme === null || theme === void 0 ? void 0 : theme.SIZES) || {}), mode: currentMode }, theme === null || theme === void 0 ? void 0 : theme.customTheme);
        }
        catch (error) {
            console.warn('GalioProvider: Error merging themes, falling back to default', error);
            return __assign(__assign({}, DEFAULT_THEME), { mode: currentMode });
        }
    }, [theme, currentMode]);
    return (<GalioContext.Provider value={providerTheme}>
            {children}
        </GalioContext.Provider>);
}
function useThemeColors() {
    var theme = useGalioTheme();
    var modeKey = theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE';
    return theme.COLORS[modeKey];
}
function useGalioStyles(styleFactory) {
    var theme = useGalioTheme();
    return (0, react_1.useMemo)(function () {
        return styleFactory ? styleFactory(theme) : undefined;
    }, [styleFactory, theme]);
}
function withGalio(Component, styleFactory) {
    if (!styleFactory) {
        return Component;
    }
    var WrappedComponent = function (props) {
        var theme = useGalioTheme();
        var styles = (0, react_1.useMemo)(function () { return styleFactory(theme); }, [theme]);
        return <Component {...props} styles={styles}/>;
    };
    WrappedComponent.displayName = "withGalio(".concat(Component.displayName || Component.name, ")");
    return WrappedComponent;
}
exports.default = DEFAULT_THEME;
//# sourceMappingURL=index.js.map