/****************************************************/
/**** INSPIRED BY react-native-elements*************/
/**************************************************/
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';

export type IconFamily =
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