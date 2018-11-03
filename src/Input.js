import React from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
// galio components
import { GaIcon } from '.';
import theme from './theme';

// TO-DO:
// 1. State functionality for Redux/Context/basic state stuff
// 2. Maybe options for changind the View text for the viewPass button
// 3. Idk. What else should we do in order to make this even more reusable.

class Input extends React.Component {
  static defaultProps = {
    type: 'default',
    password: false,
    placeholderTextColor: theme.COLORS.PLACEHOLDER,
    label: null,
    help: null,
    rounded: false,
    left: true,
    right: false,
    viewPass: false,
    topHelp: true,
    bottomHelp: false,
    style: null,
    borderless: false,
    bgColor: null,
    iconColor: null,
    icon: null,
    family: null,
    color: null,
  };

  state = {
    isPassword: false,
  };

  componentDidMount() {
    const { password } = this.props;
    this.setState({ isPassword: password });
  }

  render() {
    const {
      style,
      type,
      password,
      placeholderTextColor,
      label,
      color,
      help,
      bgColor,
      borderless,
      viewPass,
      rounded,
      icon,
      family,
      left,
      right,
      iconColor,
      topHelp,
      bottomHelp,
      ...props
    } = this.props;

    const inputViewStyles = [
      styles.inputStyle,
      styles.inputContainer,
      bgColor && { backgroundColor: bgColor },
      rounded && styles.rounded,
      borderless && styles.borderless,
      style,
    ];

    const inputStyles = [
      styles.inputView,
      borderless && icon && styles.inputIcon,
      styles.inputText,
      color && { color },
    ];

    const iconContent = icon ? (
      <GaIcon
        name={icon}
        family={family}
        size={theme.SIZES.BASE * 1.0625}
        style={{ marginRight: left && !right ? theme.SIZES.BASE * 0.2 : 0 }}
        color={iconColor || placeholderTextColor}
      />
    ) : null;

    const { isPassword } = this.state;
    const viewPassElement = password
      && viewPass && (
        <TouchableOpacity
          style={{ marginLeft: 2 }}
          onPress={() => this.setState({ isPassword: !isPassword })}
        >
          <GaIcon
            size={theme.SIZES.BASE * 1.0625}
            color={theme.COLORS.BLACK}
            name="eye-17"
            family="Galio"
          />
        </TouchableOpacity>
    );
    const lebelContent = label && <Text style={styles.label}>{label}</Text>;
    const helpContent = help && <Text style={styles.helpText}>{help}</Text>;

    return (
      <View style={{ marginVertical: theme.SIZES.BASE / 2, alignContent: 'center' }}>
        {lebelContent}
        {topHelp && !bottomHelp && helpContent}
        <View style={inputViewStyles}>
          {left && !right && iconContent}
          <TextInput
            style={inputStyles}
            keyboardType={type}
            secureTextEntry={isPassword}
            placeholderTextColor={placeholderTextColor}
            underlineColorAndroid="transparent"
            {...props}
          />
          {right && iconContent}
          {viewPassElement}
        </View>
        {bottomHelp && helpContent}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: theme.SIZES.BASE * 0.5,
    borderWidth: theme.SIZES.BASE * 0.05,
    borderColor: theme.COLORS.INPUT,
    height: theme.SIZES.BASE * 2.75,
    paddingHorizontal: theme.SIZES.BASE,
    width: '100%',
  },
  inputText: {
    color: theme.COLORS.INPUT,
    fontSize: theme.SIZES.FONT * 0.875,
    textDecorationColor: 'transparent',
    textShadowColor: 'transparent',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    flex: 1,
  },
  inputIcon: {
    marginHorizontal: theme.SIZES.BASE,
  },
  label: {
    fontWeight: '500',
    fontSize: theme.SIZES.BASE * 0.9,
    marginBottom: theme.SIZES.BASE / 4,
  },
  helpText: {
    fontSize: theme.SIZES.BASE * 0.8,
    fontStyle: 'italic',
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 1.7,
  },
  borderless: {
    borderColor: 'transparent',
    borderWidth: 0,
  },
});

Input.propTypes = {
  style: PropTypes.any,
  type: PropTypes.string,
  password: PropTypes.bool,
  placeholderTextColor: PropTypes.string,
  label: PropTypes.string,
  bgColor: PropTypes.string,
  rounded: PropTypes.bool,
  borderless: PropTypes.bool,
  viewPass: PropTypes.bool,
  iconColor: PropTypes.string,
  icon: PropTypes.string,
  family: PropTypes.string,
  color: PropTypes.string,
  help: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  topHelp: PropTypes.bool,
  bottomHelp: PropTypes.bool,
};

export default Input;
