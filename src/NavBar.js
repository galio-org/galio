import React from 'react';
import {
  View, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';

// galio components
import { Text, Icon } from '.';

const { height, width } = Dimensions.get('screen');
const BASE_SIZE = 14;
const COLOR_BACKGROUND = '#F9F9F9';
const COLOR_DEFAULT = '#000000';

class NavBar extends React.Component {
  static defaultProps = {
    back: false,
    borderless: false,
    transparent: false,
    title: null, // '🍑',
    titleStyle: null,
    left: null,
    leftStyle: null,
    leftIconColor: COLOR_DEFAULT,
    onLeftPress: () => {},
    right: null,
    rightStyle: null,
  };

  renderTitle = () => {
    const { title, titleStyle } = this.props;
    const hasExtraStyles = titleStyle;

    if (typeof title === 'string') {
      return (
        <View style={styles.title}>
          <Text h5={!hasExtraStyles} style={[{ color: COLOR_DEFAULT }, titleStyle]}>{title}</Text>
        </View>
      );
    }

    return title;
  }

  renderLeft = () => {
    const {
      back, left, leftStyle, leftIconColor, onLeftPress,
    } = this.props;

    if (left) {
      return (
        <View style={[styles.left, leftStyle]}>{left}</View>
      );
    }

    return (
      <View style={[styles.left, leftStyle]}>
        <TouchableOpacity onPress={() => onLeftPress && onLeftPress()}>
          <Icon name={back ? 'chevron-left' : 'menu'} family="Entypo" size={BASE_SIZE * 1.75} color={leftIconColor} />
        </TouchableOpacity>
      </View>
    );
  }

  renderRight = () => {
    const { right, rightStyle } = this.props;

    return <View style={[styles.right, rightStyle]}>{right}</View>;
  }

  render() {
    const { borderless, transparent, style } = this.props;
    const navStyles = [
      styles.navBar,
      borderless && styles.borderless,
      transparent && styles.transparent,
      style,
    ];

    return (
      <SafeAreaView style={navStyles}>
        {this.renderLeft()}
        {this.renderTitle()}
        {this.renderRight()}
      </SafeAreaView>
    );
  }
}

NavBar.propTypes = {
  back: PropTypes.bool,
  borderless: PropTypes.bool,
  transparent: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  titleStyle: PropTypes.any,
  left: PropTypes.node,
  leftStyle: PropTypes.any,
  leftIconColor: PropTypes.string,
  onLeftPress: PropTypes.func,
  right: PropTypes.node,
  rightStyle: PropTypes.any,
};

const styles = StyleSheet.create({
  navBar: {
    width,
    // height: height * 0.075,
    backgroundColor: COLOR_BACKGROUND,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: COLOR_DEFAULT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    flex: 2,
    height: height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    flex: 1,
    height: height * 0.07,
    justifyContent: 'center',
    marginLeft: BASE_SIZE,
  },
  right: {
    flex: 1,
    height: height * 0.07,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: BASE_SIZE,
  },
  borderless: {
    borderColor: 'transparent',
    borderWidth: 0,
  },
  transparent: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
  },
});

export default NavBar;
