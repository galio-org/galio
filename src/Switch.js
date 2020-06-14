import React from 'react';
import { Switch as Switcher } from 'react-native';
import PropTypes from 'prop-types';
import GalioTheme, { withGalio } from './theme';

function Switch({
  initialValue,
  onChange,
  color,
  disabled,
  trackColor,
  ios_backgroundColor,
  ...rest
}) {
  const [switchValue, setSwitchValue] = React.useState(initialValue);
  function onPressSwitch() {
    setSwitchValue(!switchValue);
    return null;
  }

  // trackColor.true = color === 'primary' ? GalioTheme.COLORS.PRIMARY : color;

  return (
    <Switcher
      disabled={disabled}
      trackColor={{ ...trackColor }}
      ios_backgroundColor={trackColor.false || ios_backgroundColor}
      value={switchValue}
      onValueChange={() => {
        onPressSwitch();
      }}
      onChange={() => onChange()}
      {...rest}
    />
  );
}

Switch.defaultProps = {
  color: GalioTheme.COLORS.PRIMARY,
  ios_backgroundColor: GalioTheme.COLORS.GREY,
  trackColor: {
    false: GalioTheme.COLORS.GREY,
    true: GalioTheme.COLORS.PRIMARY,
  },
  disabled: false,
  initialValue: false,
};

Switch.propTypes = {
  ...Switcher.propTypes,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'theme', 'error', 'warning', 'success', 'info']),
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  initialValue: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default withGalio(Switch);
