import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
// galio components
import Icon from '../ions/Icon';
import GalioTheme, { withGalio } from '../../theme';

const { width } = Dimensions.get('window');

function Button({
    color,
    children,
    capitalize,
    disabled,
    iconSize,
    icon,
    iconRight,
    iconFamily,
    iconColor,
    loading,
    loadingSize,
    lowercase,
    onlyIcon,
    opacity,
    round,
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

    if (icon && !onlyIcon && !iconRight) {
      content = (
        <>
          <Icon
            name={icon}
            family={iconFamily}
            size={iconSize}
            color={iconColor || theme.COLORS.WHITE}
          />{' '}
          <Text>{content}</Text>
        </>
      );
    } ;
    if (iconRight && !onlyIcon) {
      content = (
        <>
          <Text>{content}</Text>{' '}
          <Icon
            name={icon}
            family={iconFamily}
            size={iconSize}
            color={iconColor || theme.COLORS.WHITE}
          />
        </>
      );
    };

    if (onlyIcon) {
      content = (
        <Icon
          name={icon}
          family={iconFamily}
          size={iconSize}
          color={iconColor || theme.COLORS.WHITE}
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
    size === 'large' ? { width: width * 0.9 } : ( size === "small" ? { width: width * 0.3 } : { width: width * 0.42 }),
    round && { borderRadius: theme.SIZES.BASE * 2 },

    onlyIcon && {
      width: iconSize * 2.75,
      height: iconSize * 2.75,
      borderWidth: 0,
      borderRadius: iconSize * 2,
    },
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
  size: 'default',
  disabled: false,
  uppercase: false,
  lowercase: false,
  capitalize: false,
  shadowless: false,
  shadowColor: false,
  onlyIcon: false,
  loading: false,
  loadingSize: 'small',
  opacity: .8,
  icon: false,
  iconRight: false,
  iconFamily: false,
  iconSize: 16,
  iconColor: null,
  styles: {},
  theme: GalioTheme,
};

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'theme', 'primary', 'info', 'danger', 'warning', 'success', 'black', 'grey', 'secondary', 'transparent', 'white', 
    ]),
    PropTypes.string,
  ]),
  size: PropTypes.oneOfType([PropTypes.oneOf(['large', 'default', 'small']), PropTypes.number]),
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  loading: PropTypes.bool,
  loadingSize: PropTypes.oneOf(['small', 'default', 'large']),
  opacity: PropTypes.number,
  shadowless: PropTypes.bool,
  shadowColor: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onlyIcon: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconRight: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
      margin: 8
    },
    shadow: {
      shadowColor: theme.COLORS.BLOCK,
      shadowOffset: { width: 0, height: 2 },
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
    info: {
      backgroundColor: theme.COLORS.INFO,
    },
    danger: {
      backgroundColor: theme.COLORS.DANGER,
    },
    warning: {
      backgroundColor: theme.COLORS.WARNING,
    },
    success: {
      backgroundColor: theme.COLORS.SUCCESS,
    },
    white: {
      backgroundColor: theme.COLORS.WHITE,
    },
    black: {
      backgroundColor: theme.COLORS.BLACK,
    },
    secondary: {
      backgroundColor: theme.COLORS.SECONDARY,
    },
    grey: {
      backgroundColor: theme.COLORS.GREY,
    },
    transparent: {
      backgroundColor: theme.COLORS.TRANSPARENT,
    },
    androidShadow: {
      elevation: theme.SIZES.ANDROID_ELEVATION,
    },
  });

export default withGalio(Button, styles);
