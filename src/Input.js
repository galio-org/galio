import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'expo';

// TO-DO:
// 1. State functionality for Redux/Context/basic state stuff
// 2. Maybe options for changind the View text for the viewPass button
// 3. Idk. What else should we do in order to make this even more reusable.

const { width } = Dimensions.get('window');

const BASE_SIZE = 14;
const COLOR_DEFAULT = `#293042`;
const COLOR_BACKGROUND = `#FFFFFF`;

class Input extends React.Component {
  static defaultProps = {
    type: 'default',
    password: false,
    placeholderTextColor: 'rgb(0,0,0)',
    label: null,
    help: null,
    rounded: false,
    left: true,
    right: false,
    viewPass: false
  };

  state = {
    password: false
  }

  componentDidMount() {
    this.setState({
      password: this.props.password
    })
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
      borderColor,
      viewPass,
      rounded,
      icon,
      family,
      left,
      right,
      ...props
    } = this.props;
    const inputViewStyles = [
      styles.inputStyle,
      styles.inputContainer,
      bgColor && { backgroundColor: bgColor },
      rounded && styles.rounded,
      borderless && styles.borderless,
      borderColor && { borderColor: borderColor},
      style,
    ];

    const inputStyles = [
      styles.inputView,
      styles.inputIcon,
      styles.inputText,
      color && { color }
    ];

    const { [family]: IconFamily } = Icon;
    const iconContent =
      icon && IconFamily ? (
        <IconFamily
          name={icon}
          size={BASE_SIZE * 2}
          color={placeholderTextColor}
        />
      ) : null;
    const viewPassElement = password && viewPass && <TouchableOpacity style={{ marginLeft: 2 }} onPress={() => this.setState({password: !this.state.password})}><Text style={styles.viewPass}>View</Text></TouchableOpacity>;
    const lebelContent = label && <Text style={styles.label}>{label}</Text>;
    const helpContent = help && <Text style={styles.helpText}>{help}</Text>;

    return (
      <View style={{ marginVertical: BASE_SIZE / 2 }}>
        {lebelContent}
        {helpContent}
        <View
          style={inputViewStyles}
        >
          {left && !right && iconContent}
          <TextInput
            style={inputStyles}
            keyboardType={type}
            secureTextEntry={this.state.password}
            placeholderTextColor={placeholderTextColor}
            underlineColorAndroid={'transparent'}
            {...props}
          />
          {right && iconContent}
          {viewPassElement}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: COLOR_BACKGROUND,
    borderRadius: BASE_SIZE * 0.5,
    borderWidth: BASE_SIZE * 0.05,
    borderColor: COLOR_DEFAULT,
    height: BASE_SIZE * 3,
    width: width * 0.8,
    paddingHorizontal: BASE_SIZE,
  },
  inputText: {
    color: COLOR_DEFAULT,
    fontSize: BASE_SIZE,
    textDecorationColor: `transparent`,
    textShadowColor: `transparent`,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputView: {
    flex: 1,
  },
  inputIcon: {
    marginHorizontal: BASE_SIZE / 2,
  },
  label: {
    marginBottom: BASE_SIZE / 4,
    fontWeight: 'bold',
  },
  helpText: {
    fontSize: BASE_SIZE * 0.8,
    fontStyle: 'italic',
  },
  rounded: {
    borderRadius: BASE_SIZE * 1.7,
  },
  borderless: {
    borderColor: 'transparent',
    borderWidth: 0,
  },
  viewPass: {
    fontSize: BASE_SIZE * 0.9,
    color: 'rgb(90,200,250)'
  }
});

Input.propTypes = {
  style: PropTypes.any,
  type: PropTypes.string,
  password: PropTypes.bool,
  placeholderTextColor: PropTypes.string,
  borderColor: PropTypes.string,
  label: PropTypes.string,
  bgColor: PropTypes.string,
  rounded: PropTypes.bool,
  borderless: PropTypes.bool,
  viewPass: PropTypes.bool
};

export default Input;
