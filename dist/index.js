"use strict";
/* eslint-disable import/no-cycle */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalioFont = exports.galioConfig = exports.withGalio = exports.useGalioStyles = exports.useThemeColors = exports.useGalioTheme = exports.useColors = exports.useTheme = exports.GalioProvider = exports.theme = exports.Text = exports.Icon = exports.Link = exports.Input = exports.Button = exports.Toast = exports.Switch = exports.Slider = exports.Radio = exports.NavBar = exports.DeckSwiper = exports.Checkbox = exports.Card = exports.Block = exports.Avatar = exports.Accordion = void 0;
// Core Components
var Accordion_1 = require("./Accordion");
Object.defineProperty(exports, "Accordion", { enumerable: true, get: function () { return __importDefault(Accordion_1).default; } });
var Avatar_1 = require("./Avatar");
Object.defineProperty(exports, "Avatar", { enumerable: true, get: function () { return __importDefault(Avatar_1).default; } });
var Block_1 = require("./Block");
Object.defineProperty(exports, "Block", { enumerable: true, get: function () { return __importDefault(Block_1).default; } });
var Card_1 = require("./Card");
Object.defineProperty(exports, "Card", { enumerable: true, get: function () { return __importDefault(Card_1).default; } });
var Checkbox_1 = require("./Checkbox");
Object.defineProperty(exports, "Checkbox", { enumerable: true, get: function () { return __importDefault(Checkbox_1).default; } });
var DeckSwiper_1 = require("./DeckSwiper");
Object.defineProperty(exports, "DeckSwiper", { enumerable: true, get: function () { return __importDefault(DeckSwiper_1).default; } });
var NavBar_1 = require("./NavBar");
Object.defineProperty(exports, "NavBar", { enumerable: true, get: function () { return __importDefault(NavBar_1).default; } });
var Radio_1 = require("./Radio");
Object.defineProperty(exports, "Radio", { enumerable: true, get: function () { return __importDefault(Radio_1).default; } });
var Slider_1 = require("./Slider");
Object.defineProperty(exports, "Slider", { enumerable: true, get: function () { return __importDefault(Slider_1).default; } });
var Switch_1 = require("./Switch");
Object.defineProperty(exports, "Switch", { enumerable: true, get: function () { return __importDefault(Switch_1).default; } });
var Toast_1 = require("./Toast");
Object.defineProperty(exports, "Toast", { enumerable: true, get: function () { return __importDefault(Toast_1).default; } });
// Atomic Components
var Button_1 = require("./Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return __importDefault(Button_1).default; } });
var Input_1 = require("./Input");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return __importDefault(Input_1).default; } });
var Link_1 = require("./Link");
Object.defineProperty(exports, "Link", { enumerable: true, get: function () { return __importDefault(Link_1).default; } });
var Icon_1 = require("./Icon");
Object.defineProperty(exports, "Icon", { enumerable: true, get: function () { return __importDefault(Icon_1).default; } });
var Text_1 = require("./Text");
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return __importDefault(Text_1).default; } });
// Theme and Utilities
var theme_1 = require("./theme");
Object.defineProperty(exports, "theme", { enumerable: true, get: function () { return __importDefault(theme_1).default; } });
Object.defineProperty(exports, "GalioProvider", { enumerable: true, get: function () { return theme_1.GalioProvider; } });
// Modern hooks (recommended)
Object.defineProperty(exports, "useTheme", { enumerable: true, get: function () { return theme_1.useTheme; } });
Object.defineProperty(exports, "useColors", { enumerable: true, get: function () { return theme_1.useColors; } });
// Legacy hooks (deprecated)
Object.defineProperty(exports, "useGalioTheme", { enumerable: true, get: function () { return theme_1.useGalioTheme; } });
Object.defineProperty(exports, "useThemeColors", { enumerable: true, get: function () { return theme_1.useThemeColors; } });
Object.defineProperty(exports, "useGalioStyles", { enumerable: true, get: function () { return theme_1.useGalioStyles; } });
Object.defineProperty(exports, "withGalio", { enumerable: true, get: function () { return theme_1.withGalio; } });
var galio_json_1 = require("./config/galio.json");
Object.defineProperty(exports, "galioConfig", { enumerable: true, get: function () { return __importDefault(galio_json_1).default; } });
// Fonts
var GalioFont = require('./fonts/galio.ttf');
exports.GalioFont = GalioFont;
//# sourceMappingURL=index.js.map