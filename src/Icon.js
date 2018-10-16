import React from 'react';
import { Font } from 'expo';
import Icons, { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import PropTypes from 'prop-types';

import theme from './theme';
import galioConfig from '../assets/fonts/galio';

Icons.Galio = createIconSetFromIcoMoon(galioConfig, 'Galio');
const GalioFont = require('../assets/fonts/galio.ttf');

class Icon extends React.Component {
  static defaultProps = {
    name: null,
    family: null,
    size: theme.SIZES.BASE,
    color: theme.COLORS.BLACK,
  };

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
      name, family, size, color, ...rest
    } = this.props;
    const { fontLoaded } = this.state;
    const { [family]: IconInstance } = Icons;

    if (name && IconInstance && fontLoaded) {
      return <IconInstance size={size} name={name} color={color} {...rest} />;
    }

    return null;
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  family: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
