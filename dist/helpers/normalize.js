"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = normalize;
exports.verticalScale = verticalScale;
exports.moderateScale = moderateScale;
exports.scaleFont = scaleFont;
var react_native_1 = require("react-native");
var _a = react_native_1.Dimensions.get('window'), SCREEN_WIDTH = _a.width, SCREEN_HEIGHT = _a.height;
var BASE_WIDTH = 375;
var BASE_HEIGHT = 667;
function normalize(size) {
    return (SCREEN_WIDTH / BASE_WIDTH) * size;
}
function verticalScale(size) {
    return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
}
function moderateScale(size, factor) {
    if (factor === void 0) { factor = 0.5; }
    return size + (normalize(size) - size) * factor;
}
function scaleFont(size) {
    var newSize = normalize(size);
    return Math.round(react_native_1.PixelRatio.roundToNearestPixel(newSize));
}
//# sourceMappingURL=normalize.js.map