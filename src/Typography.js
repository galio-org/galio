import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import normalize from './helpers/normalize';

const Typography = props => {
  const { style, h1, h2, h3, h4, h5, p, muted, bold,children, ...rest } = props;
  return (
    <Text
      style={[
        h1 && { fontSize: normalize(38) },
        h2 && { fontSize: normalize(32) },
        h3 && { fontSize: normalize(26) },
        h4 && { fontSize: normalize(20) },
        h5 && { fontSize: normalize(16) },
        p && { fontSize: normalize(12) },
        muted && { color: 'rgba(108,117,125,0.65)' },
        bold && { fontWeight: 'bold' },
        style && style
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

Typography.propTypes = {
  ...Text.propTypes,
  children: PropTypes.any,
  style: PropTypes.any,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  p: PropTypes.bool,
  muted: PropTypes.bool,
  bold: PropTypes.bool,
};

export default Typography;
