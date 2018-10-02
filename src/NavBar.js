import React from 'react';
import {
  View, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';

// galio components
import { Text, Icon } from '.';
import theme from './theme';

const { height, width } = Dimensions.get('screen');

class NavBar extends React.Component {
  static defaultProps = {
    back: false,
    transparent: false,
    title: null, // '🍑',
    titleStyle: null,
    left: null,
    leftStyle: null,
    leftIconColor: theme.COLORS.MUTED,
    onLeftPress: () => {},
    right: null,
    rightStyle: null,
    style: null,
  };

  renderTitle = () => {
    const { title, titleStyle } = this.props;

    if (typeof title === 'string') {
      return (
        <View style={styles.title}>
          <Text style={[styles.titleTextStyle, titleStyle]}>
            {title}
          </Text>
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
          <Icon name={back ? 'chevron-left' : 'menu'} family="Entypo" size={theme.SIZES.BASE * 1.75} color={leftIconColor} />
        </TouchableOpacity>
      </View>
    );
  }

  renderRight = () => {
    const { right, rightStyle } = this.props;
    const hasIcons = React.Children.count(right) > 1;
    const rightStyles = [
      styles.right,
      hasIcons ? { flexDirection: 'row', justifyContent: 'flex-end' } : null,
      rightStyle,
    ];

    return <View style={rightStyles}>{right}</View>;
  }

  render() {
    const { transparent, style } = this.props;
    const navStyles = [
      styles.navBar,
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
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  navBar: {
    width: 'auto',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: theme.COLORS.WHITE,
  },
  title: {
    flex: 2,
    height: height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: theme.COLORS.BLACK,
    fontWeight: '400',
  },
  left: {
    flex: 1,
    height: height * 0.07,
    justifyContent: 'center',
    marginLeft: theme.SIZES.BASE,
  },
  right: {
    flex: 1,
    height: height * 0.07,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: theme.SIZES.BASE,
  },
  transparent: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
  },
});

export default NavBar;
