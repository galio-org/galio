import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const BASE_SIZE = 14;
const COLOR_BACKGROUND = '#FFFFFF';
const COLOR_DEFAULT = '#808080';

export default class Block extends Component {
  static defaultProps = {
    row: false,
    flex: false,
    center: false,
    middle: false,
    top: false,
    bottom: false,
    right: false,
    left: false,
    card: false,
    shadow: false,
    space: false,
    fluid: false,
    height: false,
    width: false,
    shadowColor: false,
  }

  render() {
    const {
      row,
      flex,
      center,
      middle,
      top,
      bottom,
      right,
      left,
      shadow,
      space,
      fluid,
      height,
      shadowColor,
      card,
      width,
      children,
      style,
      ...props
    } = this.props;

    const styleBlock = [
      styles.block,
      row && styles.row,
      flex && { flex: flex === true ? 1 : flex },
      center && styles.center,
      middle && styles.middle,
      top && styles.top,
      bottom && styles.bottom,
      right && styles.right,
      left && styles.left,
      space && { justifyContent: `space-${space}` },
      shadow && styles.shadow,
      fluid && styles.fluid,
      card && styles.card,
      height && { height },
      width && { width },
      shadowColor && { shadowColor },
      style,
    ];

    return (
      <View style={styleBlock} {...props}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignSelf: 'center',
  },
  top: {
    alignSelf: 'flex-start',
  },
  bottom: {
    alignSelf: 'flex-end',
  },
  card: {
    borderRadius: BASE_SIZE * 0.4,
    borderWidth: BASE_SIZE * 0.05,
    borderColor: COLOR_DEFAULT,
  },
  shadow: {
    shadowColor: COLOR_DEFAULT,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 1,
  },
  fluid: {
    width: 'auto',
  },
});
