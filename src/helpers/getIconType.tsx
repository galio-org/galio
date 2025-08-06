/****************************************************/
/**** INSPIRED BY react-native-elements*************/
/**************************************************/
import { Fontisto } from '@react-native-vector-icons/fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Zocial from '@expo/vector-icons/Zocial';

export type IconFamily =
  | 'fontisto'
  | 'antdesign'
  | 'entypo'
  | 'evilicons'
  | 'feather'
  | 'fontawesome'
  | 'fontawesome5'
  | 'foundation'
  | 'ionicons'
  | 'materialcommunityicons'
  | 'materialicons'
  | 'octicons'
  | 'simplelineicons'
  | 'zocial';

  const ICON_REGISTRY: Record<IconFamily, any> = {
    fontisto: Fontisto,
    antdesign: AntDesign,
    entypo: Entypo,
    evilicons: EvilIcons,
    feather: Feather,
    fontawesome: FontAwesome,
    fontawesome5: FontAwesome5,
    foundation: Foundation,
    ionicons: Ionicons,
    materialcommunityicons: MaterialCommunityIcons,
    materialicons: MaterialIcons,
    octicons: Octicons,
    simplelineicons: SimpleLineIcons,
    zocial: Zocial,
  };

  export default function getIconType(type: string): any {
    const normalizedType = type.toLowerCase() as IconFamily;
    return ICON_REGISTRY[normalizedType] || MaterialIcons;
  }