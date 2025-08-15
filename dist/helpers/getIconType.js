"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getIconType;
/****************************************************/
/**** INSPIRED BY react-native-elements*************/
/**************************************************/
var fontisto_1 = require("@react-native-vector-icons/fontisto");
var AntDesign_1 = __importDefault(require("@expo/vector-icons/AntDesign"));
var Entypo_1 = __importDefault(require("@expo/vector-icons/Entypo"));
var EvilIcons_1 = __importDefault(require("@expo/vector-icons/EvilIcons"));
var Feather_1 = __importDefault(require("@expo/vector-icons/Feather"));
var FontAwesome_1 = __importDefault(require("@expo/vector-icons/FontAwesome"));
var FontAwesome5_1 = __importDefault(require("@expo/vector-icons/FontAwesome5"));
var Foundation_1 = __importDefault(require("@expo/vector-icons/Foundation"));
var Ionicons_1 = __importDefault(require("@expo/vector-icons/Ionicons"));
var MaterialCommunityIcons_1 = __importDefault(require("@expo/vector-icons/MaterialCommunityIcons"));
var MaterialIcons_1 = __importDefault(require("@expo/vector-icons/MaterialIcons"));
var Octicons_1 = __importDefault(require("@expo/vector-icons/Octicons"));
var SimpleLineIcons_1 = __importDefault(require("@expo/vector-icons/SimpleLineIcons"));
var Zocial_1 = __importDefault(require("@expo/vector-icons/Zocial"));
var ICON_REGISTRY = {
    fontisto: fontisto_1.Fontisto,
    antdesign: AntDesign_1.default,
    entypo: Entypo_1.default,
    evilicons: EvilIcons_1.default,
    feather: Feather_1.default,
    fontawesome: FontAwesome_1.default,
    fontawesome5: FontAwesome5_1.default,
    foundation: Foundation_1.default,
    ionicons: Ionicons_1.default,
    materialcommunityicons: MaterialCommunityIcons_1.default,
    materialicons: MaterialIcons_1.default,
    octicons: Octicons_1.default,
    simplelineicons: SimpleLineIcons_1.default,
    zocial: Zocial_1.default,
};
var ICON_ALIASES = {
    'font-awesome': 'fontawesome',
    'font-awesome-5': 'fontawesome5',
    'material': 'materialicons',
    'material-community': 'materialcommunityicons',
    'ionicon': 'ionicons',
    'octicon': 'octicons',
    'simple-line-icon': 'simplelineicons',
};
function getIconType(type) {
    var normalized = type.toLowerCase();
    var mappedType = ICON_ALIASES[normalized] || normalized;
    return ICON_REGISTRY[mappedType] || MaterialIcons_1.default;
}
//# sourceMappingURL=getIconType.js.map