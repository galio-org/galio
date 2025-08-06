"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************/
/**** INSPIRED BY react-native-elements*************/
/**************************************************/
var vector_icons_1 = require("@expo/vector-icons");
var ICON_REGISTRY = {
    antdesign: vector_icons_1.AntDesign,
    entypo: vector_icons_1.Entypo,
    evilicons: vector_icons_1.EvilIcons,
    feather: vector_icons_1.Feather,
    fontawesome: vector_icons_1.FontAwesome,
    fontawesome5: vector_icons_1.FontAwesome5,
    foundation: vector_icons_1.Foundation,
    ionicons: vector_icons_1.Ionicons,
    materialcommunityicons: vector_icons_1.MaterialCommunityIcons,
    materialicons: vector_icons_1.MaterialIcons,
    octicons: vector_icons_1.Octicons,
    simplelineicons: vector_icons_1.SimpleLineIcons,
    zocial: vector_icons_1.Zocial,
};
function getIconType(type) {
    var normalizedType = type.toLowerCase();
    return ICON_REGISTRY[normalizedType] || vector_icons_1.MaterialIcons;
}
exports.default = getIconType;
//# sourceMappingURL=getIconType.js.map