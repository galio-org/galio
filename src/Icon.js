import React from 'react';
import { Font } from 'expo';
import Icons, { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import PropTypes from 'prop-types';

import { withGalio } from './theme/';
import galioConfig from './fonts/galio';

Icons.Galio = createIconSetFromIcoMoon(galioConfig, 'Galio');
const GalioFont = require('./fonts/galio.ttf');

class Icon extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      Galio: GalioFont,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const {
      name, family, size, color, theme, ...rest
    } = this.props;
    const { fontLoaded } = this.state;
    const { [family]: IconInstance } = Icons;

    if (name && IconInstance && fontLoaded) {
      return (
        <IconInstance
          name={name}
          size={size || theme.SIZES.BASE}
          color={color || theme.COLORS.BLACK}
          {...rest}
        />
      );
    }

    return null;
  }
}

Icon.defaultProps = {
  name: null,
  family: null,
  size: null,
  color: null,
};

Icon.propTypes = {
  name: PropTypes.string,
  family: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default withGalio(Icon);
