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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIGHT_MODE = exports.DARK_MODE = exports.BASE = exports.SHADOWS = exports.COMPONENTS = exports.THEME = exports.SOCIAL = void 0;
// theme/colors.js
exports.SOCIAL = {
    facebook: '#3B5998',
    twitter: '#5BC0DE',
    dribbble: '#EA4C89',
};
exports.THEME = {
    primary: '#FE2472',
    primaryDark: '#F4075C',
    primaryLight: '#FF8AB9',
    primaryBright: '#FFD1E4',
    info: '#0E2ADD',
    infoDark: '#0520D0',
    infoLight: '#8794FF',
    infoBright: '#D1D6FF',
    danger: '#FF3F31',
    dangerDark: '#F43324',
    dangerLight: '#FF7167',
    dangerBright: '#FFCAC6',
    warning: '#FF9C09',
    warningDark: '#EE8E00',
    warningLight: '#FFCC76',
    warningBright: '#FFEBCB',
    success: '#18CE0F',
    successDark: '#24AD12',
    successLight: '#88F38E',
    successBright: '#D2FBD3',
};
exports.COMPONENTS = {
    input: '#808080',
    placeholder: '#9FA5AA',
    navbar: '#F9F9F9',
    block: '#808080',
    icon: '#000000',
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
exports.DARK_MODE = __assign(__assign(__assign(__assign(__assign({}, exports.BASE), { background: '#161D28', text: '#FFFFFF' }), exports.COMPONENTS), exports.THEME), exports.SOCIAL);
exports.LIGHT_MODE = __assign(__assign(__assign(__assign(__assign({}, exports.BASE), { background: '#FFFFFF', text: '#161D28' }), exports.COMPONENTS), exports.THEME), exports.SOCIAL);
exports.default = { LIGHT_MODE: exports.LIGHT_MODE, DARK_MODE: exports.DARK_MODE, SHADOWS: exports.SHADOWS };
//# sourceMappingURL=colors.js.map