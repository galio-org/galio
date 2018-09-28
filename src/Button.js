import React from 'react';
import {
  ActivityIndicator, Dimensions, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';

const { width } = Dimensions.get('window');
const BASE_SIZE = 14;
const COLORS = {
  PRIMARY: '#102EFF',
  THEME: '#A833FE',
  ERROR: '#FF2664',
  WARNING: '#FF970C',
  SUCCESS: '#3DDA2B',
  TRANSPARENT: 'transparent',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
};

class Button extends React.Component {
  static defaultProps = {
    color: 'primary',
    size: 'large',
    disabled: false,
    radius: 0,
    uppercase: false,
    lowercase: false,
    capitalize: false,
    shadowless: false,
    onlyIcon: false,
    icon: false,
    iconFamily: false,
    iconSize: 14,
    loading: false,
    loadingSize: 'small',
    opacity: 0.8,
    iconColor: COLORS.BLACK,
  };

  renderContent = () => {
    const {
      loading,
      loadingSize,
      children,
      onlyIcon,
      icon,
      iconFamily,
      iconSize,
      iconColor,
      uppercase,
      lowercase,
      capitalize,
      textStyle,
    } = this.props;

    const textStyles = [
      styles.customText,
      textStyle,
    ];

    // workaround for textTransform not supported on Expo SDK 29.0.0 or 30.0.0
    // More info: https://docs.expo.io/versions/latest/sdk/index.html#sdk-version
    // waiting for Expo SDK to support react-native 56.0.0

    let content = children;
    const isString = children && typeof children === 'string';

    if (uppercase && isString) content = children.toUpperCase();
    if (lowercase && isString) content = children.toLowerCase();
    if (capitalize && isString) content = `${children.charAt(0).toUpperCase()}${children.slice(1)}`;

    if (onlyIcon) content = <Icon name={icon} family={iconFamily} size={iconSize} color={iconColor} />;
    else content = <Text style={textStyles}>{content}</Text>;

    if (loading) content = <ActivityIndicator size={loadingSize} color={COLORS.WHITE} />;

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
      opacity,
      shadowless,
      ...rest
    } = this.props;

    const colorStyle = styles[`${color}Color`];

    const buttonStyles = [
      styles.defaultButton,
      color && colorStyle,
      color && !colorStyle && { backgroundColor: color }, // color set & no styles for that color
      color === 'transparent' || styles.androidShadow,
      color === 'transparent' && { borderWidth: 1, borderColor: COLORS.WHITE },
      size === 'large' ? { width: width * 0.9 } : { width: width * 0.5 },
      round && { borderRadius: 24 },
      onlyIcon && {
        width: iconSize * 2, height: iconSize * 2, borderWidth: 0, borderRadius: iconSize,
      },
      radius && { borderRadius: radius },
      !shadowless && styles.shadow,
      { shadowColor: COLORS[color.toUpperCase()] },
      { zIndex: 2 },
      style,
    ];

    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={opacity}
        style={buttonStyles}
        {...rest}
      >
        {this.renderContent()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultButton: {
    width: BASE_SIZE * 9,
    height: BASE_SIZE * 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  customText: {
    fontSize: 18,
    color: COLORS.WHITE,
    fontWeight: '800',
  },
  primaryColor: {
    backgroundColor: COLORS.PRIMARY,
  },
  themeColor: {
    backgroundColor: COLORS.THEME,
  },
  errorColor: {
    backgroundColor: COLORS.ERROR,
  },
  warningColor: {
    backgroundColor: COLORS.WARNING,
  },
  successColor: {
    backgroundColor: COLORS.SUCCESS,
  },
  transparentColor: {
    backgroundColor: COLORS.TRANSPARENT,
  },
  androidShadow: {
    elevation: 1,
  },
});

Button.propTypes = {
  ...TouchableOpacity.propTypes,
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
      'large', 'small',
    ]),
    PropTypes.number,
  ]),
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  radius: PropTypes.number,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  loading: PropTypes.bool,
  loadingSize: PropTypes.oneOf([
    'small', 'large',
  ]),
  opacity: PropTypes.number,
  shadowless: PropTypes.bool,
};

export default Button;
