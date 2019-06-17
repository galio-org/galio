import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Block, Icon, Text } from '.';
import GalioTheme, { withGalio } from './theme';

class Card extends Component {
  renderImage() {
    const { image, imageBlockStyle, imageStyle, styles } = this.props;
    if (!image) return null;

    return (
      <Block card style={[styles.imageBlock, imageBlockStyle]}>
        <Image source={{ uri: image }} style={[styles.image, imageStyle]} />
      </Block>
    );
  }

  renderAvatar() {
    const { avatar, styles } = this.props;
    if (!avatar) return null;

    return <Image source={{ uri: avatar }} style={styles.avatar} />;
  }

  renderLocation() {
    const { location, locationColor, theme } = this.props;
    if (!location) return null;

    if (typeof location !== 'string') {
      return location;
    }

    return (
      <Block row right>
        <Icon
          name="map-pin"
          family="feather"
          color={locationColor || theme.COLORS.MUTED}
          size={theme.SIZES.FONT}
        />
        <Text
          muted
          size={theme.SIZES.FONT * 0.875}
          color={locationColor || theme.COLORS.MUTED}
          style={{ marginLeft: theme.SIZES.BASE * 0.25 }}>
          {location}
        </Text>
      </Block>
    );
  }

  renderAuthor() {
    const { title, titleColor, caption, captionColor, footerStyle, theme, styles } = this.props;

    return (
      <Block flex row style={[styles.footer, footerStyle]} space="between">
        <Block flex={0.3}>{this.renderAvatar()}</Block>
        <Block flex={1.7}>
          <Block style={styles.title}>
            <Text size={theme.SIZES.FONT * 0.875} color={titleColor}>
              {title}
            </Text>
          </Block>
          <Block row space="between">
            <Block row right>
              <Text p muted size={theme.SIZES.FONT * 0.875} color={captionColor}>
                {caption}
              </Text>
            </Block>
            {this.renderLocation()}
          </Block>
        </Block>
      </Block>
    );
  }

  render() {
    const { card, shadow, borderless, style, ...props } = this.props;

    const styleCard = [borderless && { borderWidth: 0 }, style];

    return (
      <Block {...props} card={card} shadow={shadow} style={styleCard}>
        {this.renderImage()}
        {this.renderAuthor()}
        {props.children}
      </Block>
    );
  }
}

Card.defaultProps = {
  card: true,
  shadow: true,
  borderless: false,
  styles: {},
  theme: GalioTheme,
};

Card.propTypes = {
  card: PropTypes.bool,
  shadow: PropTypes.bool,
  borderless: PropTypes.bool,
  styles: PropTypes.any,
  theme: PropTypes.any,
};

const styles = theme =>
  StyleSheet.create({
    card: {
      borderWidth: 0,
      backgroundColor: theme.COLORS.WHITE,
      width: theme.SIZES.CARD_WIDTH,
      marginVertical: theme.SIZES.CARD_MARGIN_VERTICAL,
    },
    footer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: theme.SIZES.CARD_FOOTER_HORIZONTAL,
      paddingVertical: theme.SIZES.CARD_FOOTER_VERTICAL,
      backgroundColor: theme.COLORS.TRANSPARENT,
      zIndex: 1,
    },
    avatar: {
      width: theme.SIZES.CARD_AVATAR_WIDTH,
      height: theme.SIZES.CARD_AVATAR_HEIGHT,
      borderRadius: theme.SIZES.CARD_AVATAR_RADIUS,
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
      height: theme.SIZES.CARD_IMAGE_HEIGHT,
    },
    round: {
      borderRadius: theme.SIZES.CARD_ROUND,
    },
    rounded: {
      borderRadius: theme.SIZES.CARD_ROUNDED,
    },
  });

export default withGalio(Card, styles);
