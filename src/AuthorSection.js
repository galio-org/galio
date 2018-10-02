import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// galio components
import { Block, Text } from '.';
import theme from './theme';

const AuthorSection = ({
  style,
  imageSource,
  title,
  subTitle,
  fixed,
  optionalComponent,
  reverseColor,
  neutral,
}) => (
  <Block flex row style={[styles.container, fixed && styles.fixed, style]}>
    <Block flex row>
      <Image source={{ uri: imageSource }} style={styles.authorAvatar} />
      <Block style={styles.authorInfo}>
        <Text style={reverseColor && styles.titleWhite}>{title}</Text>
        <Text muted neutral={neutral} size={theme.SIZES.FONT * 0.75}>{subTitle}</Text>
      </Block>
    </Block>
    {optionalComponent && <Block>{optionalComponent}</Block>}
  </Block>
);

AuthorSection.defaultProps = {
  style: null,
  imageSource: null,
  title: null,
  subTitle: null,
  fixed: false,
  optionalComponent: null,
  reverseColor: false,
  neutral: false,
};

AuthorSection.propTypes = {
  style: PropTypes.any,
  imageSource: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  fixed: PropTypes.bool,
  optionalComponent: PropTypes.any,
  reverseColor: PropTypes.bool,
  neutral: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE / 2,
    backgroundColor: theme.COLORS.TRANSPARENT,
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  authorInfo: {
    marginLeft: 15,
    alignSelf: 'center',
  },
  titleWhite: {
    color: theme.COLORS.WHITE,
  },
  fixed: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    right: 20,
    shadowColor: '#F2F2F2',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 5,
    backgroundColor: theme.COLORS.WHITE,
    elevation: 1,
  },
});

export default AuthorSection;
