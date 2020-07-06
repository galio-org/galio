/* eslint-disable object-curly-newline */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// galio components
import Block from './Block';
import Text from './atomic/ions/Text';
import Icon from './atomic/ions/Icon';
import GalioTheme, { withGalio } from './theme';

function Card({
  avatar,
  borderless, 
  caption, 
  captionColor,
  card, 
  children,
  footerStyle,
  image,
  imageBlockStyle,
  imageStyle,
  location, 
  locationColor, 
  shadow,
  style, 
  styles,
  title, 
  titleColor,
  theme,
  ...props 
}) {
  function renderImage() {
    if (!image) return null;
    return (
      <Block card style={[styles.imageBlock, imageBlockStyle]}>
        <Image source={{ uri: image }} style={[styles.image, imageStyle]} />
      </Block>
    );
  }

  function renderAvatar() {
    if (!avatar) return null;
    return <Image source={{ uri: avatar }} style={styles.avatar} />;
  }

  function renderLocation() {
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

  function renderAuthor() {
    return (
      <Block flex row style={[styles.footer, footerStyle]} space="between">
        <Block flex={0.3}>{renderAvatar()}</Block>
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
            {renderLocation()}
          </Block>
        </Block>
      </Block>
    );
  }


  const styleCard = [borderless && { borderWidth: 0 }, style];

  return (
    <Block {...props} card={card} shadow={shadow} style={styleCard}>
      {renderImage()}
      {renderAuthor()}
      {children}
    </Block>
  );
}

Card.defaultProps = {
  card: true,
  shadow: true,
  borderless: false,
  styles: {},
  theme: GalioTheme,
  title: '',
  titleColor: '',
  caption: '',
  captionColor: '',
  footerStyle: {},
  avatar: '',
};

Card.propTypes = {
  card: PropTypes.bool,
  shadow: PropTypes.bool,
  borderless: PropTypes.bool,
  styles: PropTypes.any,
  theme: PropTypes.any,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  caption: PropTypes.string,
  captionColor: PropTypes.string,
  avatar: PropTypes.string,
  footerStyle: PropTypes.object,
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
