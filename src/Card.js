import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Block from './Block';
import theme from './theme';

export default class Card extends Component {
  static defaultProps = {
    card: true,
    shadow: true,
    borderless: false,
  }

  render() {
    const {
      card,
      shadow,
      borderless,
      children,
      style,
      ...props
    } = this.props;

    const styleCard = [
      borderless && { borderWidth: 0, borderColor: theme.COLORS.TRANSPARENT },
      style,
    ];

    return (
      <Block card={card} shadow={shadow} style={styleCard} {...props}>
        {children}
      </Block>
    );
  }
}

Block.propTypes = {
  card: PropTypes.bool,
  shadow: PropTypes.bool,
  borderless: PropTypes.bool,
};
