import React from 'react';
// import { Font } from 'expo';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import PropTypes from 'prop-types';

import GalioTheme, { withGalio } from './theme';
import galioConfig from './fonts/galio.json';
import getIconType from './helpers/getIconType';

const Galio = createIconSetFromIcoMoon(galioConfig, 'Galio', './fonts/galio.ttf');
// const GalioFont = require('./fonts/galio.ttf');

class Icon extends React.Component {
  /*state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      Galio: GalioFont,
    });

    this.setState({ fontLoaded: true });
  }
*/
  render() {
    const { name, family, size, color, styles, theme, ...rest } = this.props;
    // const { fontLoaded } = this.state;
    if (family == 'Galio') {
      if (name) {
        return (
          <Galio
            name={name}
            size={size || theme.SIZES.BASE}
            color={color || theme.COLORS.BLACK}
            {...rest}
          />
        );
      }
    } else {
      const IconInstance = getIconType(family);
      if (name && IconInstance) {
        return (
          <IconInstance
            name={name}
            size={size || theme.SIZES.BASE}
            color={color || theme.COLORS.BLACK}
            {...rest}
          />
        );
      }
    }

    return null;
  }
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
