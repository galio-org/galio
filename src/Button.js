import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
// galio components
import { Icon } from './';
import GalioTheme, { withGalio } from './theme';

const { width } = Dimensions.get('window');

function Button({
    color,
    children,
    capitalize,
    disabled,
    iconSize,
    icon,
    iconFamily,
    iconColor,
    loading,
    loadingSize,
    lowercase,
    onlyIcon,
    opacity,
    round,
    radius,
    style,
    size,
    shadowless,
    shadowColor,
    styles,
    theme,
    textStyle,
    uppercase,
    ...rest
}) {
  function renderContent() {
    const textStyles = [styles.customText, textStyle];

    // workaround for textTransform not supported on Expo SDK 29.0.0 or 30.0.0
    // More info: https://docs.expo.io/versions/latest/sdk/index.html#sdk-version
    // waiting for Expo SDK to support react-native 56.0.0

    let content = children;
    const isString = children && typeof children === 'string';

    if (uppercase && isString) content = children.toUpperCase();
    if (lowercase && isString) content = children.toLowerCase();
    if (capitalize && isString) {
      content = `${children.charAt(0).toUpperCase()}${children.slice(1)}`;
    }

    if (onlyIcon) {
      content = (
        <Icon
          name={icon}
          family={iconFamily}
          size={iconSize}
          color={iconColor || theme.COLORS.BLACK}
        />
      );
    } else if (isString) {
      content = <Text style={textStyles}>{content}</Text>;
    }

    if (loading) {
      content = <ActivityIndicator size={loadingSize} color={theme.COLORS.WHITE} />;
    }

    return content;
  }

  const colorStyle = styles[color];

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
    <TouchableOpacity disabled={disabled} activeOpacity={opacity} style={buttonStyles} {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
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
  iconColor: null,
  styles: {},
  theme: GalioTheme,
};

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'theme', 
      'primary', 'dark_primary', 'light_primary', 'bright_primary', 
      'info', 'dark_info', 'light_info', 'bright_info', 
      'danger', 'dark_danger', 'light_danger', 'bright_danger', 
      'warning', 'dark_warning', 'light_warning', 'bright_warning', 
      'success', 'dark_success', 'light_success', 'bright_success', 
      'black', 'dark_black', 'light_black', 'bright_black', 
      'grey', 'dark_grey', 'light_grey', 'bright_grey', 
      'secondary', 'dark_secondary', 'light_secondary', 'bright_secondary', 
      'transparent', 'white', 
    ]),
    PropTypes.string,
  ]),
  size: PropTypes.oneOfType([PropTypes.oneOf(['large', 'small']), PropTypes.number]),
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  radius: PropTypes.number,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  loading: PropTypes.bool,
  loadingSize: PropTypes.oneOf(['small', 'large']),
  opacity: PropTypes.number,
  shadowless: PropTypes.bool,
  shadowColor: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onlyIcon: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconFamily: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconSize: PropTypes.number,
  styles: PropTypes.any,
  theme: PropTypes.any,
};

const styles = theme =>
  StyleSheet.create({
    defaultButton: {
      borderRadius: 4,
      width: theme.SIZES.BUTTON_WIDTH,
      height: theme.SIZES.BUTTON_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
    },
    shadow: {
      shadowColor: theme.COLORS.BLOCK,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: theme.SIZES.OPACITY,
      shadowRadius: theme.SIZES.BUTTON_SHADOW_RADIUS,
    },
    customText: {
      fontSize: theme.SIZES.FONT,
      color: theme.COLORS.WHITE,
    },
    theme: {
      backgroundColor: theme.COLORS.THEME,
    },
    primary: {
      backgroundColor: theme.COLORS.PRIMARY,
    },
    dark_primary: {
      backgroundColor: theme.COLORS.DARK_PRIMARY,
    },
    light_primary: {
      backgroundColor: theme.COLORS.LIGHT_PRIMARY,
    },
    bright_primary: {
      backgroundColor: theme.COLORS.BRIGHT_PRIMARY,
    },
    info: {
      backgroundColor: theme.COLORS.INFO,
    },
    dark_info: {
      backgroundColor: theme.COLORS.DARK_INFO,
    },
    light_info: {
      backgroundColor: theme.COLORS.LIGHT_INFO,
    },
    bright_info: {
      backgroundColor: theme.COLORS.BRIGHT_INFO,
    },
    danger: {
      backgroundColor: theme.COLORS.DANGER,
    },
    dark_danger: {
      backgroundColor: theme.COLORS.DARK_DANGER,
    },
    light_danger: {
      backgroundColor: theme.COLORS.LIGHT_DANGER,
    },
    bright_danger: {
      backgroundColor: theme.COLORS.BRIGHT_DANGER,
    },
    warning: {
      backgroundColor: theme.COLORS.WARNING,
    },
    dark_warning: {
      backgroundColor: theme.COLORS.DARK_WARNING,
    },
    light_warning: {
      backgroundColor: theme.COLORS.LIGHT_WARNING,
    },
    bright_warning: {
      backgroundColor: theme.COLORS.BRIGHT_WARNING,
    },
    success: {
      backgroundColor: theme.COLORS.SUCCESS,
    },
    dark_success: {
      backgroundColor: theme.COLORS.DARK_SUCCESS,
    },
    light_success: {
      backgroundColor: theme.COLORS.LIGHT_SUCCESS,
    },
    bright_success: {
      backgroundColor: theme.COLORS.BRIGHT_SUCCESS,
    },
    white: {
      backgroundColor: theme.COLORS.WHITE,
    },
    black: {
      backgroundColor: theme.COLORS.BLACK,
    },
    dark_black: {
      backgroundColor: theme.COLORS.DARK_BLACK,
    },
    light_black: {
      backgroundColor: theme.COLORS.LIGHT_BLACK,
    },
    bright_black: {
      backgroundColor: theme.COLORS.BRIGHT_BLACK,
    },
    secondary: {
      backgroundColor: theme.COLORS.SECONDARY,
    },
    dark_secondary: {
      backgroundColor: theme.COLORS.DARK_SECONDARY,
    },
    light_secondary: {
      backgroundColor: theme.COLORS.LIGHT_SECONDARY,
    },
    bright_secondary: {
      backgroundColor: theme.COLORS.BRIGHT_SECONDARY,
    },
    grey: {
      backgroundColor: theme.COLORS.GREY,
    },
    dark_grey: {
      backgroundColor: theme.COLORS.DARK_GREY,
    },
    light_grey: {
      backgroundColor: theme.COLORS.LIGHT_GREY,
    },
    bright_grey: {
      backgroundColor: theme.COLORS.BRIGHT_GREY,
    },
    transparent: {
      backgroundColor: theme.COLORS.TRANSPARENT,
    },
    androidShadow: {
      elevation: theme.SIZES.ANDROID_ELEVATION,
    },
  });

export default withGalio(Button, styles);
