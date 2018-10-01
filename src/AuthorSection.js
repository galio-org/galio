import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// galio components
import { Text } from '.';
import theme from './theme';

const AuthorSection = ({
  style,
  imageSource,
  title,
  subTitle,
  fixed,
  optionalComponent,
  reverseColor,
}) => (
  <View style={[styles.container, fixed && styles.fixed, style]}>
    <View style={styles.authorFullSpace}>
      <Image source={{ uri: imageSource }} style={styles.authorAvatar} />
      <View style={styles.authorInfo}>
        <Text h5 style={reverseColor && styles.titleWhite}>{title}</Text>
        <Text p muted>
          {subTitle}
        </Text>
      </View>
    </View>
    {optionalComponent && <View style={{ flex: 2 }}>{optionalComponent}</View>}
  </View>
);

AuthorSection.defaultProps = {
  style: null,
  imageSource: null,
  title: null,
  subTitle: null,
  fixed: false,
  optionalComponent: null,
  reverseColor: false,
};

AuthorSection.propTypes = {
  style: PropTypes.any,
  imageSource: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  fixed: PropTypes.bool,
  optionalComponent: PropTypes.any,
  reverseColor: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    marginBottom: 5,
    marginTop: 5,
    // flex: 1,
    backgroundColor: theme.COLORS.TRANSPARENT,
  },
  authorFullSpace: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  authorInfo: {
    marginLeft: 15,
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
