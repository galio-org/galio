import React from 'react';
import PropTypes from 'prop-types';
import Text from '../ions/Text';
import GalioTheme, { withGalio } from '../../theme';

function Link({
  onPress,
  children = null,
  theme = GalioTheme,
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

  Link.propTypes = {
    children: PropTypes.any,
    theme: PropTypes.any,
    onPress: PropTypes.func.isRequired,
  };

export default withGalio(Link);