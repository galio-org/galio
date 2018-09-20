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
  - radius: number
*/

class Button extends React.Component {
  static defaultProps = {
    color: 'primary',
    size: 'big',
    disabled: false,
    radius: 0,
    uppercase: false,
    lowercase: false,
    capitalize: false,
  };

  onPress() {
    const { onPress } = this.props;
    onPress && onPress();
  }

  render() {
    const {
      style,
      color,
      size,
      children,
      disabled,
      round,
      border,
      radius,
      uppercase,
      lowercase,
      capitalize,
      textStyle,
      ...rest
    } = this.props;

    const buttonStyles = [
      styles.defaultButton,
      color && styles[`${color}Color`],
      color === 'transparent' || styles.androidShadow,
      color === 'transparent' && { borderWidth: 1, borderColor: 'rgb(250,250,250)' },
      size === 'big' ? { width: '90%' } : { width: 140 },
      round && { borderRadius: 24 },
      radius && { borderRadius: radius },
      { zIndex: 2 },
      style,
    ];

    const textStyles = [
      styles.customText,
      textStyle
    ];

    // workaround for textTransform not supported on Expo SDK 29.0.0 or 30.0.0
    // More info: https://docs.expo.io/versions/latest/sdk/index.html#sdk-version
    // waiting for Expo SDK to support react-native 56.0.0

    let buttonContent = children;
    if (uppercase) buttonContent = children.toUpperCase();
    if (lowercase) buttonContent = children.toLowerCase();
    if (capitalize) buttonContent = `${children.charAt(0).toUpperCase()}${children.slice(1)}`;

    return (
        <TouchableOpacity
          disabled={disabled}
          onPress={() => this.onPress}
          style={buttonStyles}
          {...rest}>
          <Text style={textStyles}>{buttonContent}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultButton: {
    width: 130,
    height: 42,
    shadowColor: 'rgba(209,0,125,10)',
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
  
  textStyle: PropTypes.oneOfType([
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
  radius: PropTypes.number,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
};

export default Button;
