import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// G A L I O - D E P E N D E N C Y
import Text from './atomic/ions/Text';
import GalioTheme, { withGalio } from './theme';

function Radio({
  color,
  containerStyle,
  disabled,
  flexDirection,
  initialValue,
  label,
  labelStyle,
  onChange,
  radioOuterStyle,
  radioInnerStyle,
  styles,
  theme,
}) {
  const [checked, setChecked] = React.useState(initialValue);

  // A D D I N G - R E Q U I R E D - S P A C E (S) - B A S E D - O N - F L E X - D I R E C T I O N
  function spaceAround(direction) {
    switch (direction) {
      case 'row-reverse':
        return { marginRight: 10 };
      case 'column':
        return { marginTop: 10 };
      case 'column-reverse':
        return { marginBottom: 10 };
      default:
        return { marginLeft: 10 };
    }
  }

  // R E N D E R - L A B E L
  function renderLabel() {
    const labelStyles = [
      styles.textStyles,
      disabled && styles.disabledLabel,
      labelStyle,
      flexDirection && spaceAround(flexDirection),
    ];

    if (label) {
      return <Text style={labelStyles}>{label}</Text>;
    }
    return null;
  }

  // O N - P R E S S - H A N D L E R
  function radioPressHandler() {
    const current = !checked;
    onChange(current);
    setChecked(current);
  }

  const containerStyles = [styles.container, flexDirection && { flexDirection }, containerStyle];

  const whichColor =
    color && theme.COLORS[color.toUpperCase()] ? theme.COLORS[color.toUpperCase()] : color;

  const radioButtonOuterStyles = [
    styles.radioOuterStyles,
    { borderColor: whichColor },
    disabled && styles.disabledRadioOuter,
    radioOuterStyle,
  ];

  const radioButtonInnerStyles = [
    styles.radioInnerStyles,
    { backgroundColor: whichColor },
    disabled && styles.disabledRadioInner,
    radioInnerStyle,
  ];

  return (
    <TouchableOpacity
      onPress={() => radioPressHandler()}
      style={containerStyles}
      activeOpacity={0.8}
      disabled={disabled}>
      <View style={radioButtonOuterStyles}>
        {checked ? <View style={radioButtonInnerStyles} /> : null}
      </View>
      {renderLabel()}
    </TouchableOpacity>
  );
}

const styles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    radioOuterStyles: {
      height: theme.SIZES.RADIO_HEIGHT,
      width: theme.SIZES.RADIO_WIDTH,
      borderRadius: theme.SIZES.RADIO_HEIGHT * 0.5,
      borderWidth: theme.SIZES.RADIO_THICKNESS,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioInnerStyles: {
      height: theme.SIZES.RADIO_HEIGHT * 0.5,
      width: theme.SIZES.RADIO_WIDTH * 0.5,
      borderRadius: theme.SIZES.RADIO_HEIGHT * 0.25,
    },
    disabledRadioOuter: {
      borderColor: theme.COLORS.MUTED,
    },
    disabledRadioInner: {
      backgroundColor: theme.COLORS.MUTED,
    },
    textStyles: {
      color: theme.COLORS.BLACK,
    },
    disabledLabel: {
      color: theme.COLORS.MUTED,
      opacity: theme.SIZES.OPACITY,
    },
  });

Radio.defaultProps = {
  color: 'primary',
  disabled: false,
  flexDirection: 'row',
  initialValue: false,
  label: null,
  labelStyle: null,
  onChange: () => {},
  styles: {},
  theme: GalioTheme,
};

Radio.propTypes = {
  color: PropTypes.string,
  containerStyle: PropTypes.any,
  radioOuterStyle: PropTypes.any,
  radioInnerStyle: PropTypes.any,
  disabled: PropTypes.bool,
  flexDirection: PropTypes.oneOfType([
    PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
    PropTypes.string,
  ]),
  initialValue: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.any,
  onChange: PropTypes.func,
  styles: PropTypes.any,
  theme: PropTypes.any,
};

export default withGalio(Radio, styles);
