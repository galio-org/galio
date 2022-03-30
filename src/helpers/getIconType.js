/****************************************************/
/**** INSPIRED BY react-native-elements*************/
/**************************************************/
import ZocialIcon from 'react-native-vector-icons/Zocial';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default type => {
  switch (type.toLowerCase()) {
    case 'zocial':
      return ZocialIcon;
    case 'octicons':
      return OcticonIcon;
    case 'materialicons':
      return MaterialIcon;
    case 'materialcommunityicons':
      return MaterialCommunityIcon;
    case 'ionicons':
      return Ionicon;
    case 'foundation':
      return FoundationIcon;
    case 'evilicons':
      return EvilIcon;
    case 'entypo':
      return EntypoIcon;
    case 'fontawesome':
      return FAIcon;
    case 'fontawesome5':
      return FA5Icon;
    case 'simplelineicons':
      return SimpleLineIcon;
    case 'feather':
      return FeatherIcon;
    case 'antdesign':
      return AntIcon;
    default:
      return Fontisto;
  }
};
