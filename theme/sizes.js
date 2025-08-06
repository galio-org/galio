"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE = void 0;
var react_native_1 = require("react-native");
var _a = react_native_1.Dimensions.get('screen'), height = _a.height, width = _a.width;
exports.BASE = 16;
var SIZES = {
    BASE: exports.BASE,
    FONT: exports.BASE,
    OPACITY: 0.6,
    BORDER_RADIUS: 4,
    BORDER_WIDTH: 0.8,
    // Typography
    H1: exports.BASE * 2.75,
    H2: exports.BASE * 2.375,
    H3: exports.BASE * 1.875,
    H4: exports.BASE * 1.5,
    H5: exports.BASE * 1.3125,
    H6: exports.BASE * 1.125,
    BODY: exports.BASE * 0.875,
    SMALL: exports.BASE * 0.75,
    // Icons
    ICON: exports.BASE,
    ICON_MEDIUM: exports.BASE * 1.5,
    ICON_LARGE: exports.BASE * 2,
    // Button styles
    BUTTON_WIDTH: exports.BASE * 9,
    BUTTON_HEIGHT: exports.BASE * 2.75,
    BUTTON_SHADOW_RADIUS: 3,
    // Block styles
    BLOCK_SHADOW_OPACITY: 0.15,
    BLOCK_SHADOW_RADIUS: 8,
    ANDROID_ELEVATION: 1,
    // Card styles
    CARD_BORDER_RADIUS: exports.BASE * 0.4,
    CARD_BORDER_WIDTH: exports.BASE * 0.05,
    CARD_WIDTH: width - (exports.BASE * 2),
    CARD_MARGIN_VERTICAL: exports.BASE * 0.875,
    CARD_FOOTER_HORIZONTAL: exports.BASE * 0.75,
    CARD_FOOTER_VERTICAL: exports.BASE * 0.75,
    CARD_AVATAR_WIDTH: exports.BASE * 2.5,
    CARD_AVATAR_HEIGHT: exports.BASE * 2.5,
    CARD_AVATAR_RADIUS: exports.BASE * 1.25,
    CARD_IMAGE_HEIGHT: exports.BASE * 12.5,
    CARD_ROUND: exports.BASE * 0.1875,
    CARD_ROUNDED: exports.BASE * 0.5,
    // Input styles
    INPUT_BORDER_RADIUS: exports.BASE * 0.5,
    INPUT_BORDER_WIDTH: exports.BASE * 0.05,
    INPUT_HEIGHT: exports.BASE * 2.75,
    INPUT_HORIZONTAL: exports.BASE,
    INPUT_VERTICAL_TEXT: 14,
    INPUT_VERTICAL_LABEL: exports.BASE / 2,
    INPUT_TEXT: exports.BASE * 0.875,
    INPUT_ROUNDED: exports.BASE * 1.5,
    // NavBar styles
    NAVBAR_HEIGHT: exports.BASE * 4.125,
    NAVBAR_VERTICAL: exports.BASE,
    NAVBAR_TITLE_FLEX: 2,
    NAVBAR_TITLE_HEIGHT: height * 0.07,
    NAVBAR_TITLE_TEXT: exports.BASE * 0.875,
    NAVBAR_LEFT_FLEX: 0.5,
    NAVBAR_LEFT_HEIGHT: height * 0.07,
    NAVBAR_LEFT_MARGIN: exports.BASE,
    NAVBAR_RIGHT_FLEX: 0.5,
    NAVBAR_RIGHT_HEIGHT: height * 0.07,
    NAVBAR_RIGHT_MARGIN: exports.BASE,
    // Checkbox
    CHECKBOX_WIDTH: 20,
    CHECKBOX_HEIGHT: 20,
    // Slider
    TRACK_SIZE: 4,
    THUMB_SIZE: 25,
    // Radio Button
    RADIO_WIDTH: 24,
    RADIO_HEIGHT: 24,
    RADIO_THICKNESS: 2,
};
exports.default = SIZES;
//# sourceMappingURL=sizes.js.map