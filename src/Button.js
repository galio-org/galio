import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

/*
 Props buton:
  - color: blue, purple, red, orange, green, transparent
  - onlyIcon: boolean
  - icon: FontAwesome
  - size: 'small' / 'big'
  - children prop should be changed or NOT -- IT DEPENDS ON HOW I WANT THEM TO PUT ICONS
*/

class Button extends React.Component {
  static defaultProps = {
    color: 'primary',
    size: 'big',
    disabled: false,
  };

  onPress() {
    const { onPress } = this.props;

    onPress();
  }

  render() {
    const { style, color, size, children, disabled, ...rest } = this.props;

    return (
        <TouchableOpacity
          disabled={disabled}
          onPress={() => this.onPress}
          style={[
            styles.defaultButton,
            color && styles[`${color}Color`],
            color === 'transparent' || styles.androidShadow,
            size === 'big' ? { width: '90%' } : { width: 140 },
            { zIndex: 2 },
            style && style,
          ]}
          {...rest}
        >
          <Text style={styles.customText}>{children}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultButton: {
    width: 130,
    height: 42,
    shadowColor: 'rgba(209,0,125,10)',
    borderRadius: 24,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '800',
  },
  primaryColor: {
    backgroundColor: '#102EFF',
  },
  themeColor: {
    backgroundColor: '#A833FE',
  },
  errorColor: {
    backgroundColor: '#FF2664',
  },
  warningColor: {
    backgroundColor: '#FF970C',
  },
  successColor: {
    backgroundColor: '#3DDA2B',
  },
  transparentColor: {
    backgroundColor: 'transparent',
  },
  androidShadow: {
    elevation: 1,
  },
});

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  children: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'theme',
    'error',
    'warning',
    'success',
    'transparent',
  ]),
  size: PropTypes.oneOf(['big', 'small']),
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
