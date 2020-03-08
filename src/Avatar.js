import React from 'react';
import { View, Text, StyleSheet, Image, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { withGalio } from 'theme';

const Avatar = ({
  source,
  size,
  label,
  labelColor,
  backgroundColor,
  labelStyle,
  imageProps,
  imageStyle,
  containerStyle,
  styles,
  theme,
}) => {
  const getContainerStyle = () => {
    return {
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: size / 2,
    };
  };

  const getLabelContainerStyle = () => {
    return {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: size / 2,
    };
  };

  const renderImage = () => {
    if (source) {
      return (
        <Image
          style={[getContainerStyle(), StyleSheet.absoluteFillObject, imageStyle]}
          {...{ source }}
          {...imageProps}
        />
      );
    }
    return null;
  };

  const labelContainerStyle = [
    getLabelContainerStyle(),
    source && styles.labelContainerWithInset,
    { backgroundColor: backgroundColor || theme.COLORS.MUTED },
  ];

  const labelTextStyle = [
    { fontSize: size * 0.32 },
    styles.labelText,
    labelColor && { color: labelColor },
    labelStyle || {},
  ];

  return (
    <View style={[getContainerStyle(), containerStyle]}>
      <View style={labelContainerStyle}>
        {label && (
          <Text numberOfLines={1} style={labelTextStyle}>
            {label}
          </Text>
        )}
      </View>
      {renderImage()}
    </View>
  );
};

Avatar.defaultProps = {
  size: 50,
};

Avatar.propTypes = {
  label: PropTypes.string,
  labelColor: PropTypes.string,
  size: PropTypes.number,
  source: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  backgroundColor: PropTypes.string,
  imageProps: PropTypes.object,
  imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),
  containerStyle: ViewPropTypes.style,
  styles: PropTypes.any,
  theme: PropTypes.any,
};

const styles = theme =>
  StyleSheet.create({
    labelContainerWithInset: {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1,
    },
    labelText: {
      color: theme.COLORS.BLACK,
      backgroundColor: 'transparent',
    },
  });

export default withGalio(Avatar, styles);
