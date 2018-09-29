import React from 'react';
import {
  View, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';
// Galio components
import { AuthorSection, Block } from '.';
import theme from './theme';

// TO-DO CARD COMPONENT:
// 1. Refactor code -- we can address the 2 options in a cleaner way (w/ the styles object)
// 2. Add spacing for the AuthorSection component
// 3. Get Feedback on the gradient

class Card extends React.Component {
  static defaultProps = {
    fullBackgroundImage: false,
    onPress: () => {},
    style: null,
    image: null,
    authorImageSrc: null,
    authorTitle: null,
    authorSubTitle: null,
    authorStyle: null,
    rightSideComponent: null,
  };

  render() {
    const {
      style,
      image,
      authorImageSrc,
      authorStyle,
      authorSubTitle,
      authorTitle,
      rightSideComponent,
      fullBackgroundImage,
      onPress,
    } = this.props;

    return (
      <Block
        shadow={!fullBackgroundImage}
        style={[styles.container, style]}
      >
        <TouchableOpacity onPress={() => onPress && onPress()}>
          <Image
            source={{ uri: image }}
            style={
              (fullBackgroundImage && styles.fullBackgroundImage)
              || styles.thumbnailImage
            }
          />
          {fullBackgroundImage && (
            <LinearGradient
              colors={['transparent', theme.COLORS.BLACK]}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '80%',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                borderRadius: 6,
              }}
            />
          )}
          <AuthorSection
            reverseColor={fullBackgroundImage}
            imageSource={authorImageSrc}
            title={authorTitle}
            subTitle={authorSubTitle}
            style={[
              authorStyle,
              fullBackgroundImage && styles.authorFullBackground,
            ]}
            optionalComponent={rightSideComponent}
          />
        </TouchableOpacity>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '92.5%',
    borderRadius: 5,
    marginBottom: theme.SIZES.BASE * 2,
    padding: 7,
    paddingBottom: 0,
    backgroundColor: theme.COLORS.WHITE,
  },
  thumbnailImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  fullBackgroundImage: {
    flex: 1,
    width: '100%',
    height: 220,
    borderRadius: 5,
  },
  authorFullBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 5,
  },
});

Card.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  onPress: PropTypes.func,
  fullBackgroundImage: PropTypes.bool,
  image: PropTypes.string,
  authorImageSrc: PropTypes.string,
  authorTitle: PropTypes.string,
  authorSubTitle: PropTypes.string,
  authorStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  rightSideComponent: PropTypes.any,
};

export default Card;
