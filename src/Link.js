import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text } from './';
import GalioTheme, { withGalio } from './theme';

function Link({
    children,
    onPress,
    theme,
    style,
    styles,
    ...rest
  }) {
    return (
    <Text
        color={theme.COLORS.PRIMARY}
        onPress={() => onPress()}
        {...rest}>
        {children}
    </Text>
    );
  }

  Link.defaultProps = {
    children: null,
    style: true,
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

  const styles = theme => StyleSheet.create({
    linkDefault: {
      fontSize: 16,
      color: theme.COLORS.PRIMARY
  }
})
export default withGalio(Link, styles);