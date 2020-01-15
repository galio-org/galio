import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text } from './src';

import GalioTheme, { withGalio } from './theme';

function Link({
    props,
    color,
    onPress,
    ...rest
  }) {
    return (
    <Text 
        color={color} 
        onPress={() => onPress()}
        {...rest}>
        {children}>
        Google
    </Text>

    );
  }
  
  Link.defaultProps = {
    children: null,
    style: true,
    size: 0,
    color: theme.COLORS.PRIMARY,
    styles: {},
    theme: GalioTheme,
  };
  
  Link.propTypes = {
    children: PropTypes.any,
    style: PropTypes.any,
    size: PropTypes.number,
    color: PropTypes.string,
    styles: PropTypes.any,
    theme: PropTypes.any,
  };

const styles = StyleSheet.create({
    primary: {
        color: theme.COLORS.PRIMARY,
      }
})

  
  export default withGalio(Link, styles);
  