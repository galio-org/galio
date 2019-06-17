import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

// galio components
import { Block, Text, Icon } from '.';
import GalioTheme, { withGalio } from './theme';

const { height } = Dimensions.get('screen');

class NavBar extends React.Component {
  renderTitle = () => {
    const { title, titleStyle, styles } = this.props;

    if (typeof title === 'string') {
      return (
        <View style={styles.title}>
          <Text style={[styles.titleTextStyle, titleStyle]}>{title}</Text>
        </View>
      );
    }

    if (!title) return null;

    return title;
  };

  renderLeft = () => {
    const { back, left, leftStyle, leftIconColor, onLeftPress, theme, styles } = this.props;

    if (left) {
      return <View style={[styles.left, leftStyle]}>{left}</View>;
    }

    return (
      <View style={[styles.left, leftStyle]}>
        <TouchableOpacity onPress={() => onLeftPress && onLeftPress()}>
          <Icon
            family="evilicons"
            color={leftIconColor || theme.COLORS.ICON}
            size={theme.SIZES.BASE * 1.0625}
            name={back ? 'chevron-left' : 'navicon'}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderRight = () => {
    const { right, rightStyle, styles } = this.props;
    const hasIcons = React.Children.count(right) > 1;
    const rightStyles = [styles.right, rightStyle];

    return (
      <Block right row={hasIcons} style={rightStyles}>
        {right}
      </Block>
    );
  };

  render() {
    const { transparent, style, styles } = this.props;
    const navStyles = [styles.navBar, transparent && styles.transparent, style];

    return (
      <Block style={navStyles}>
        {this.renderLeft()}
        {this.renderTitle()}
        {this.renderRight()}
      </Block>
    );
  }
}

NavBar.defaultProps = {
  back: false,
  transparent: false,
  title: null,
  titleStyle: null,
  left: null,
  leftStyle: null,
  leftIconColor: null,
  onLeftPress: () => {},
  right: null,
  rightStyle: null,
  style: null,
  styles: {},
  theme: GalioTheme,
};

NavBar.propTypes = {
  back: PropTypes.bool,
  transparent: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  titleStyle: PropTypes.any,
  left: PropTypes.node,
  leftStyle: PropTypes.any,
  leftIconColor: PropTypes.string,
  onLeftPress: PropTypes.func,
  right: PropTypes.node,
  rightStyle: PropTypes.any,
  style: PropTypes.any,
  styles: PropTypes.any,
  theme: PropTypes.any,
};

const styles = theme =>
  StyleSheet.create({
    navBar: {
      width: 'auto',
      height: theme.SIZES.BASE * 4.125,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: theme.COLORS.WHITE,
      paddingVertical: theme.SIZES.BASE,
    },
    title: {
      flex: 2,
      height: height * 0.07,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleTextStyle: {
      fontWeight: '400',
      fontSize: theme.SIZES.FONT * 0.875,
      color: theme.COLORS.BLACK,
    },
    left: {
      flex: 0.5,
      height: height * 0.07,
      justifyContent: 'center',
      marginLeft: theme.SIZES.BASE,
    },
    right: {
      flex: 0.5,
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

export default withGalio(NavBar, styles);
