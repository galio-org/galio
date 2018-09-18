import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
// galio components
import { Typography } from './index';

class Navbar extends React.Component {
  static defaultProps = {
    title: '🍑',
  };
  render() {
    const { buttonFunction, title, rightSideComponent, style } = this.props;
    return (
      <View style={[styles.navBar, style]}>
        <TouchableOpacity
          onPress={() => buttonFunction && buttonFunction()}
        >
          <View style={styles.burgerButton} />
        </TouchableOpacity>
        <Typography h4>{title}</Typography>
        <View style={styles.rightSideComponent}>
          {rightSideComponent && rightSideComponent}
        </View>
      </View>
    );
  }
}

Navbar.propTypes = {
  style: PropTypes.any,
  buttonFunction: PropTypes.func,
  title: PropTypes.string,
  rightSideComponent: PropTypes.node,
};

const HEIGHT = Dimensions.get('screen').height;
const navHeight = HEIGHT * 0.075;

const styles = StyleSheet.create({
  navBar: {
    height: navHeight,
    width: '100%',
    backgroundColor: '#F9F9F9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgb(0,0,0)'
  },
  burgerButton: {
    width: 25,
    height: 25,
    backgroundColor: 'red',
  },
  rightSideComponent: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navbar;
