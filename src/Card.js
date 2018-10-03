import React from 'react';
import {
  Image, StyleSheet, TouchableOpacity,
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
    onPress: () => {},
    style: null,
    image: null,
    neutral: false,
    authorImageSrc: null,
    authorTitle: null,
    authorSubTitle: null,
    authorStyle: null,
    rightSideComponent: null,
    fullBackgroundImage: false,
  };

  render() {
    const {
      style,
      image,
      neutral,
      authorImageSrc,
      authorStyle,
      authorSubTitle,
      authorTitle,
      rightSideComponent,
      fullBackgroundImage,
      onPress,
    } = this.props;

    return (
      <Block shadow style={[styles.container, style]}>
        <TouchableOpacity onPress={() => onPress && onPress()} activeOpacity={0.8}>
          <Image
            source={{ uri: image }}
            style={[
              styles.thumbnailImage,
              fullBackgroundImage && styles.fullBackgroundImage,
            ]}
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
            neutral={neutral}
            title={authorTitle}
            subTitle={authorSubTitle}
            imageSource={authorImageSrc}
            reverseColor={fullBackgroundImage}
            optionalComponent={rightSideComponent}
            style={[authorStyle, fullBackgroundImage && styles.authorFullBackground]}
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
    paddingBottom: 0,
    marginBottom: theme.SIZES.BASE * 2,
    backgroundColor: theme.COLORS.WHITE,
  },
  thumbnailImage: {
    width: '100%',
    height: 200,
    borderRadius: theme.SIZES.BASE * 0.5,
  },
  fullBackgroundImage: {
    flex: 1,
    width: '100%',
    height: 220,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
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
  neutral: PropTypes.bool,
};

export default Card;
