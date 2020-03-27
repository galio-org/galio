import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { withGalio } from './theme';

function Divider({ size, color, style }) {
  return (
    <View
      style={[
        styles.divider,
        size && { height: size },
        color && { backgroundColor: color },
        style && style,
      ]}
    />
  );
}

Divider.prototype = {
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth,
    margin: 5,
    backgroundColor: '#f8f8f8',
  },
});

export default withGalio(Divider);
