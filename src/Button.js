import React from 'react';
import {
  ActivityIndicator, Dimensions, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import PropTypes from 'prop-types';
// galio components
import { Icon } from '.';
import theme from './theme';

const { width } = Dimensions.get('window');

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
    shadowColor: false,
    onlyIcon: false,
    loading: false,
    loadingSize: 'small',
    opacity: 0.8,
    icon: false,
    iconFamily: false,
    iconSize: 14,
    iconColor: theme.COLORS.BLACK,
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

    if (onlyIcon) {
      content = <Icon name={icon} family={iconFamily} size={iconSize} color={iconColor} />;
    } else if (isString) {
      content = <Text style={textStyles}>{content}</Text>;
    }

    if (loading) content = <ActivityIndicator size={loadingSize} color={theme.COLORS.WHITE} />;

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
      shadowColor,
      ...rest
    } = this.props;

    const colorStyle = styles[`${color}Color`];

    const buttonStyles = [
      styles.defaultButton,
      color && colorStyle,
      color && !colorStyle && { backgroundColor: color }, // color set & no styles for that color
      color === 'transparent' || styles.androidShadow,
      color === 'transparent' && !shadowless && { borderWidth: 1, borderColor: theme.COLORS.WHITE },
      size === 'large' ? { width: width * 0.9 } : { width: width * 0.5 },
      round && { borderRadius: theme.SIZES.BASE * 2 },
      onlyIcon && {
        width: iconSize * 1.25,
        height: iconSize * 2,
        borderWidth: 0,
        borderRadius: iconSize,
      },
      radius && { borderRadius: radius },
      !shadowless && styles.shadow,
      { shadowColor: shadowColor || theme.COLORS[color.toUpperCase()] },
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
    borderRadius: 3,
    width: theme.SIZES.BASE * 9,
    height: theme.SIZES.BASE * 2.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: theme.COLORS.BLOCK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  customText: {
    fontSize: theme.SIZES.FONT,
    color: theme.COLORS.WHITE,
  },
  primaryColor: {
    backgroundColor: theme.COLORS.PRIMARY,
  },
  themeColor: {
    backgroundColor: theme.COLORS.THEME,
  },
  infoColor: {
    backgroundColor: theme.COLORS.INFO,
  },
  errorColor: {
    backgroundColor: theme.COLORS.ERROR,
  },
  warningColor: {
    backgroundColor: theme.COLORS.WARNING,
  },
  successColor: {
    backgroundColor: theme.COLORS.SUCCESS,
  },
  transparentColor: {
    backgroundColor: theme.COLORS.TRANSPARENT,
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
  shadowColor: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onlyIcon: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconFamily: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconSize: PropTypes.number,
};

export default Button;
