"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleFont = exports.moderateScale = exports.verticalScale = exports.normalize = void 0;
var react_native_1 = require("react-native");
var _a = react_native_1.Dimensions.get('window'), SCREEN_WIDTH = _a.width, SCREEN_HEIGHT = _a.height;
var BASE_WIDTH = 375;
var BASE_HEIGHT = 667;
function normalize(size) {
    return (SCREEN_WIDTH / BASE_WIDTH) * size;
}
exports.normalize = normalize;
function verticalScale(size) {
    return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
}
exports.verticalScale = verticalScale;
function moderateScale(size, factor) {
    if (factor === void 0) { factor = 0.5; }
    return size + (normalize(size) - size) * factor;
}
exports.moderateScale = moderateScale;
function scaleFont(size) {
    var newSize = normalize(size);
    return Math.round(react_native_1.PixelRatio.roundToNearestPixel(newSize));
}
exports.scaleFont = scaleFont;
//# sourceMappingURL=normalize.js.map