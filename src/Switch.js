import React, { Component } from 'react';
import { Switch as Switcher } from 'react-native';
import PropTypes from 'prop-types';
import GalioTheme, { withGalio } from './theme';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: props.initialValue,
    };
  }

  onPressSwitch() {
    this.setState({ switchValue: !this.state.switchValue }, () =>
      this.props.onChange(this.state.switchValue)
    );
  }

  render() {
    const { initialValue, color, disabled, trackColor, ios_backgroundColor, ...rest } = this.props;

    trackColor.true = color === 'primary' ? GalioTheme.COLORS.PRIMARY : color;

    return (
      <Switcher
        disabled={disabled}
        trackColor={{ ...trackColor }}
        ios_backgroundColor={ios_backgroundColor}
        value={this.state.switchValue}
        onValueChange={() => {
          this.onPressSwitch();
        }}
        {...rest}
      />
    );
  }
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
};

export default withGalio(Switch);
