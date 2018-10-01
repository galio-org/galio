import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
// galio components
import { Icon } from '.';
import theme from './theme';

// TO-DO:
// 1. State functionality for Redux/Context/basic state stuff
// 2. Maybe options for changind the View text for the viewPass button
// 3. Idk. What else should we do in order to make this even more reusable.

const { width } = Dimensions.get('window');

class Input extends React.Component {
  static defaultProps = {
    type: 'default',
    password: false,
    placeholderTextColor: theme.COLORS.BLACK,
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
      (!borderless || (borderless && icon)) && styles.inputIcon,
      styles.inputText,
      color && { color },
    ];

    const iconContent = icon ? (
      <Icon
        style={{ marginHorizontal: 1 }}
        name={icon}
        family={family}
        size={theme.SIZES.BASE * 2}
        color={iconColor || placeholderTextColor}
      />
    ) : null;

    const { isPassword } = this.state;
    const viewPassElement = password && viewPass
      && (
        <TouchableOpacity
          style={{ marginLeft: 2 }}
          onPress={() => this.setState({ isPassword: !isPassword })}
        >
          <Icon
            size={theme.SIZES.BASE}
            color={theme.COLORS.BLACK}
            name={`eye${isPassword ? '' : '-with-line'}`}
            family="Entypo"
          />
        </TouchableOpacity>
      );
    const lebelContent = label && <Text style={styles.label}>{label}</Text>;
    const helpContent = help && <Text style={styles.helpText}>{help}</Text>;

    return (
      <View style={{ marginVertical: theme.SIZES.BASE / 2 }}>
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
    height: theme.SIZES.BASE * 3,
    width: '100%',
  },
  inputText: {
    color: theme.COLORS.INPUT,
    fontSize: theme.SIZES.BASE,
    textDecorationColor: 'transparent',
    textShadowColor: 'transparent',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputView: {
    flex: 1,
  },
  inputIcon: {
    marginHorizontal: theme.SIZES.BASE / 2,
  },
  label: {
    marginBottom: theme.SIZES.BASE / 4,
    fontWeight: 'bold',
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
