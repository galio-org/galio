import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import normalize from './helpers/normalize';
import theme from './theme';

const Typography = (props) => {
  const {
    style, h1, h2, h3, h4, h5, p, muted, size, color, bold, italic, center, children, ...rest
  } = props;
  return (
    <Text
      style={[
        h1 && { fontSize: normalize(38) },
        h2 && { fontSize: normalize(32) },
        h3 && { fontSize: normalize(26) },
        h4 && { fontSize: normalize(20) },
        h5 && { fontSize: normalize(16) },
        p && { fontSize: normalize(12) },
        muted && { color: theme.COLORS.MUTED },
        size && { fontSize: normalize(size) },
        color && { color },
        italic && { fontStyle: 'italic' },
        bold && { fontWeight: 'bold' },
        center && { textAlign: 'center' },
        style && style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  children: null,
  style: null,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  p: false,
  size: 0,
  color: null,
  muted: false,
  bold: false,
  italic: false,
};

Typography.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  p: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  muted: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
};

export default Typography;
