/****************************************************/
/**** INSPIRED BY react-native-elements*************/
/**************************************************/
import { 
  Zocial, 
  Octicons, 
  MaterialIcons, 
  MaterialCommunityIcons, 
  Ionicons, 
  Foundation, 
  EvilIcons, 
  Entypo, 
  FontAwesome, 
  FontAwesome5, 
  SimpleLineIcons, 
  Feather, 
  AntDesign, 
  Fontisto 
} from '@expo/vector-icons';

export default type => {
  if (!type) return Fontisto;
  switch (type.toLowerCase()) {
    case 'zocial':
      return Zocial;
    case 'octicons':
      return Octicons;
    case 'materialicons':
      return MaterialIcons;
    case 'material':
      return MaterialIcons;
    case 'materialcommunityicons':
      return MaterialCommunityIcons;
    case 'ionicons':
      return Ionicons;
    case 'foundation':
      return Foundation;
    case 'evilicons':
      return EvilIcons;
    case 'entypo':
      return Entypo;
    case 'fontawesome':
      return FontAwesome;
    case 'fontawesome5':
      return FontAwesome5;
    case 'simplelineicons':
      return SimpleLineIcons;
    case 'feather':
      return Feather;
    case 'antdesign':
      return AntDesign;
    default:
      return Fontisto;
  }
};
