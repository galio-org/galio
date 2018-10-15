import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Block, Icon, Text } from '.';
import theme from './theme';

const { width } = Dimensions.get('screen');

export default class Card extends Component {
  static defaultProps = {
    card: true,
    shadow: true,
    borderless: false,
  }

  renderImage() {
    const { image, imageBlockStyle, imageStyle } = this.props;
    if (!image) return null;

    return (
      <Block card style={[styles.imageBlock, imageBlockStyle]}>
        <Image source={{ uri: image }} style={[styles.image, imageStyle]} />
      </Block>
    );
  }

  renderAvatar() {
    const { avatar } = this.props;
    if (!avatar) return null;

    return (
      <Image source={{ uri: avatar }} style={styles.avatar} />
    );
  }

  renderLocation() {
    const { location, locationColor } = this.props;
    if (!location) return null;

    if (typeof location !== 'string') {
      return location;
    }

    return (
      <Block row right>
        <Icon name="pin-3" family="Galio" color={locationColor || theme.COLORS.MUTED} size={theme.SIZES.FONT} />
        <Text
          muted
          size={theme.SIZES.FONT * 0.875}
          color={locationColor || theme.COLORS.MUTED}
          style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
        >
          {location}
        </Text>
      </Block>
    );
  }

  renderAuthor() {
    const {
      title, titleColor, caption, captionColor, footerStyle,
    } = this.props;

    return (
      <Block flex row style={[styles.footer, footerStyle]} space="between">
        <Block flex={0.3}>
          {this.renderAvatar()}
        </Block>
        <Block flex={1.7}>
          <Block style={styles.title}>
            <Text size={theme.SIZES.FONT * 0.875} color={titleColor}>{title}</Text>
          </Block>
          <Block row space="between">
            <Block row right>
              <Text p muted size={theme.SIZES.FONT * 0.875} color={captionColor}>{caption}</Text>
            </Block>
            {this.renderLocation()}
          </Block>
        </Block>
      </Block>
    );
  }

  render() {
    const {
      card,
      shadow,
      borderless,
      style,
      ...props
    } = this.props;

    const styleCard = [
      borderless && { borderWidth: 0 },
      style,
    ];

    return (
      <Block card={card} shadow={shadow} style={styleCard} {...props}>
        {this.renderImage()}
        {this.renderAuthor()}
        {props.children}
      </Block>
    );
  }
}

Card.propTypes = {
  card: PropTypes.bool,
  shadow: PropTypes.bool,
  borderless: PropTypes.bool,
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
  },
  footer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: theme.SIZES.BASE * 0.75,
    paddingVertical: theme.SIZES.BASE * 0.75,
    backgroundColor: theme.COLORS.TRANSPARENT,
    zIndex: 1,
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  title: {
    justifyContent: 'center',
  },
  imageBlock: {
    borderWidth: 0,
    overflow: 'hidden',
  },
  image: {
    width: 'auto',
    height: theme.SIZES.BASE * 12.5,
  },
  round: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.5,
  },
});
