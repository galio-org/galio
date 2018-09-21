import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';

const { width } = Dimensions.get('window');

/*
 Props buton:
  - color: blue, purple, red, orange, green, transparent
  - onlyIcon: boolean
  - icon: name of the icon from font family, e.g.: menu
  - iconFamily: name of the icon font family, e.g.: FontAwesome
  - iconSize: size of the icon using number, e.g: 12, 21 or 42
  - size: 'small', 'big' or any number
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
    onlyIcon: false,
    icon: false,
    iconFamily: false,
    iconSize: 14,
  };

  onPress() {
    const { onPress } = this.props;
    onPress && onPress();
  }

  renderContent = () => {
    const {
      children,
      onlyIcon,
      icon,
      iconFamily,
      iconSize,
      uppercase,
      lowercase,
      capitalize,
      textStyle,
    } = this.props;

    const textStyles = [
      styles.customText,
      textStyle
    ];

    // workaround for textTransform not supported on Expo SDK 29.0.0 or 30.0.0
    // More info: https://docs.expo.io/versions/latest/sdk/index.html#sdk-version
    // waiting for Expo SDK to support react-native 56.0.0

    let content = children;
    const isString = children && typeof children === 'string';

    if (uppercase && isString) content = children.toUpperCase();
    if (lowercase && isString) content = children.toLowerCase();
    if (capitalize && isString) content = `${children.charAt(0).toUpperCase()}${children.slice(1)}`;

    if (onlyIcon) content = <Icon name={icon} family={iconFamily} size={iconSize} />;
    else content = <Text style={textStyles}>{content}</Text>;

    return content;
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
      textStyle,
      onlyIcon,
      iconSize,
      ...rest
    } = this.props;

    const colorStyle = styles[`${color}Color`];

    const buttonStyles = [
      styles.defaultButton,
      color && colorStyle,
      color && !colorStyle && { backgroundColor: color }, // color set & no styles for that color
      color === 'transparent' || styles.androidShadow,
      color === 'transparent' && { borderWidth: 1, borderColor: 'rgb(250,250,250)' },
      size === 'big' ? { width: width * 0.9 } : { width: width * 0.5 },
      round && { borderRadius: 24 },
      radius && { borderRadius: radius },
      onlyIcon && { width: iconSize * 2, borderWidth: 0, },
      { zIndex: 2 },
      style,
    ];

    return (
        <TouchableOpacity disabled={disabled} onPress={() => this.onPress} style={buttonStyles} {...rest}>
          {this.renderContent()}
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

  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'theme',
      'error',
      'warning',
      'success',
      'transparent',
    ]),
    PropTypes.string,
  ]),

  size: PropTypes.oneOfType([
    PropTypes.oneOf([
      'big', 'small',
    ]),
    PropTypes.number,
  ]),

  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  radius: PropTypes.number,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
};

export default Button;
