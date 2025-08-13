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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withGalio = exports.useGalioStyles = exports.GalioProvider = exports.useGalioTheme = void 0;
var react_1 = __importStar(require("react"));
var colors_1 = __importDefault(require("./colors"));
var sizes_1 = __importDefault(require("./sizes"));
var DEFAULT_THEME = {
    COLORS: colors_1.default,
    SIZES: sizes_1.default,
};
var GalioContext = (0, react_1.createContext)(DEFAULT_THEME);
function useGalioTheme() {
    var theme = (0, react_1.useContext)(GalioContext);
    if (!theme) {
        throw new Error('useGalioTheme must be used within a GalioProvider');
    }
    return theme;
}
exports.useGalioTheme = useGalioTheme;
function GalioProvider(_a) {
    var _b = _a.theme, theme = _b === void 0 ? {} : _b, children = _a.children;
    var providerTheme = (0, react_1.useMemo)(function () { return (__assign({ COLORS: __assign(__assign({}, DEFAULT_THEME.COLORS), theme === null || theme === void 0 ? void 0 : theme.COLORS), SIZES: __assign(__assign({}, DEFAULT_THEME.SIZES), theme === null || theme === void 0 ? void 0 : theme.SIZES) }, theme === null || theme === void 0 ? void 0 : theme.customTheme)); }, [theme]);
    return (<GalioContext.Provider value={providerTheme}>
            {children}
        </GalioContext.Provider>);
}
exports.GalioProvider = GalioProvider;
function useGalioStyles(styles) {
    var theme = useGalioTheme();
    return styles ? styles(theme) : undefined;
}
exports.useGalioStyles = useGalioStyles;
function withGalio(Component, styles) {
    return Component;
}
exports.withGalio = withGalio;
exports.default = DEFAULT_THEME;
//# sourceMappingURL=index.js.map