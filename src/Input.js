import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const BASE_SIZE = 14;
const COLOR_DEFAULT = `#293042`;
const COLOR_BACKGROUND = `#FFFFFF`;

class Input extends React.Component {
  static defaultProps = {
    type: 'default',
    password: false,
    placeholderTextColor: 'rgb(0,0,0)',
  };

  render() {
    const { type, password, placeholderTextColor, ...props } = this.props;
    
    return (
      <TextInput
        style={styles.inputStyle}
        keyboardType={type}
        secureTextEntry={password}
        placeholderTextColor={placeholderTextColor}
        underlineColorAndroid={'transparent'}
        {...props}
      />
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
    color: COLOR_DEFAULT,
    fontSize: BASE_SIZE,
    textDecorationColor: `transparent`,
    textShadowColor: `transparent`,
  }
});

Input.propTypes = {
  type: PropTypes.string,
  password: PropTypes.bool,
  placeholderTextColor: PropTypes.string,
};

export default Input;
