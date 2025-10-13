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
var fontisto_1 = require("@react-native-vector-icons/fontisto");
var vector_icons_1 = require("@expo/vector-icons");
var galio_json_1 = __importDefault(require("../../config/galio.json"));
var getIconType_1 = __importDefault(require("../../helpers/getIconType"));
var theme_1 = require("../../theme");
var Galio = (0, vector_icons_1.createIconSetFromIcoMoon)(galio_json_1.default, 'Galio', require('../../fonts/galio.ttf'));
function Icon(_a) {
    var name = _a.name, family = _a.family, size = _a.size, color = _a.color, _b = _a.medium, medium = _b === void 0 ? false : _b, _c = _a.large, large = _c === void 0 ? false : _c, rest = __rest(_a, ["name", "family", "size", "color", "medium", "large"]);
    var theme = (0, theme_1.useGalioTheme)();
    var colors = (0, theme_1.useThemeColors)();
    var iconSize = size ||
        (medium
            ? theme.SIZES.ICON_MEDIUM
            : large
                ? theme.SIZES.ICON_LARGE
                : theme.SIZES.ICON);
    var iconColor = color || colors.black;
    if (family === 'Galio') {
        return name ? <Galio name={name} size={iconSize} color={iconColor} {...rest}/> : null;
    }
    if (family === 'fontisto') {
        return name ? <fontisto_1.Fontisto name={name} size={iconSize} color={iconColor} {...rest}/> : null;
    }
    var IconInstance = (0, getIconType_1.default)(family);
    return name && IconInstance ? (<IconInstance name={name} size={iconSize} color={iconColor} {...rest}/>) : null;
}
exports.default = (0, react_1.memo)(Icon);
//# sourceMappingURL=icon.js.map