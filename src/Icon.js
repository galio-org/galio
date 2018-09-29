import React from 'react';
import Icons from '@expo/vector-icons';
import PropTypes from 'prop-types';
import theme from './theme';

class Icon extends React.Component {
  static defaultProps = {
    name: null,
    family: null,
    size: theme.SIZES.BASE,
    color: theme.COLORS.BLACK,
  };

  render() {
    const {
      name, family, size, color, ...rest
    } = this.props;
    const { [family]: IconInstance } = Icons;

    return name && IconInstance ? <IconInstance size={size} name={name} color={color} {...rest} /> : null;
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  family: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
