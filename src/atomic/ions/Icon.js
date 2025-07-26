import React from 'react';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome, FontAwesome5, AntDesign, Feather, Entypo, EvilIcons, Foundation, SimpleLineIcons, Octicons, Zocial, Fontisto } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import GalioTheme, { withGalio } from '../../theme';
import getIconType from '../../helpers/getIconType';
import galioConfig from '../../config/galio.json';

// Note: Galio custom icons would need to be handled differently with Expo
// For now, we'll use a fallback approach

function Icon({
  name,
  family,
  size,
  color,
  styles,
  theme,
  medium,
  large,
  ...rest
}) {
  if (family === 'Galio') {
    // For Galio custom icons, we'll use a fallback to MaterialIcons for now
    // In a real implementation, you'd need to create a custom icon font or use a different approach
    console.warn('Galio custom icons are not yet supported with the new vector icons system. Using fallback.');
    return (
      <MaterialIcons
        name={name}
        size={size || (medium ? theme.SIZES.ICON_MEDIUM : (large ? theme.SIZES.ICON_LARGE : theme.SIZES.ICON))}
        color={color || theme.COLORS.BLACK}
        {...rest}
      />
    );
  } else {
    const IconInstance = getIconType(family);
    if (name && IconInstance) {
      return (
        <IconInstance
          name={name}
          size={size || (medium ? theme.SIZES.ICON_MEDIUM : (large ? theme.SIZES.ICON_LARGE : theme.SIZES.ICON))}
          color={color || theme.COLORS.BLACK}
          {...rest}
        />
      );
    }
  }

  return null;
}

Icon.defaultProps = {
  name: null,
  family: null,
  size: null,
  color: null,
  styles: {},
  theme: GalioTheme,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  styles: PropTypes.any,
  theme: PropTypes.any,
};

export default withGalio(Icon);
