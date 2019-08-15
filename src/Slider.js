import React, { PureComponent } from 'react';
import { View, Animated, StyleSheet, PanResponder } from 'react-native';
import PropTypes from 'prop-types';
import GalioTheme, { withGalio } from './theme';

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      containerSize: { width: 0, height: 0 },
      trackSize: { width: 0, height: 0 },
      thumbSize: { width: 0, height: 0 },
      measured: false, //hide the UI until we measure the View
    };

    this.position = new Animated.Value(props.value); //recieve value from user
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this._previousLeft = this._getThumbLeft(this._getCurrentVal());
        this._fireChangeEvent('onSlidingStart');
      },
      onPanResponderMove: (e, gestureState) => {
        if (props.disabled) {
          return;
        }

        this._setCurrentValue(this._getValue(gestureState));
        this._fireChangeEvent('onValueChange');
      },
      onPanResponderRelease: (e, gestureState) => {
        if (props.disabled) {
          return;
        }

        this._setCurrentValue(this._getValue(gestureState));
        this._fireChangeEvent('onSlidingComplete');
      },
    });
  }

  _getRatio = value =>
    (value - this.props.minimumValue) / (this.props.maximumValue - this.props.minimumValue);

  _getThumbLeft = value =>
    this._getRatio(value) * (this.state.containerSize.width - this.state.thumbSize.width);

  _getCurrentVal = () => this.position.__getValue();

  _setCurrentValue = value => this.position.setValue(value);

  _getValue = gestureState => {
    const length = this.state.containerSize.width - this.state.thumbSize.width;
    const thumbLeft = this._previousLeft + gestureState.dx;

    const ratio = thumbLeft / length;

    if (this.props.step) {
      return Math.max(
        this.props.minimumValue,
        Math.min(
          this.props.maximumValue,
          this.props.minimumValue +
            Math.round(
              (ratio * (this.props.maximumValue - this.props.minimumValue)) / this.props.step
            ) *
              this.props.step
        )
      );
    }
    return Math.max(
      this.props.minimumValue,
      Math.min(
        this.props.maximumValue,
        ratio * (this.props.maximumValue - this.props.minimumValue) + this.props.minimumValue
      )
    );
  };
  // container size
  _measureContainer = x => {
    this._handleMeasure('containerSize', x);
  };
  // track size
  _measureTrack = x => {
    this._handleMeasure('trackSize', x);
  };
  // thumb size
  _measureThumb = x => {
    this._handleMeasure('thumbSize', x);
  };
  // calculate all of them
  _handleMeasure = (name, x) => {
    const { width, height } = x.nativeEvent.layout;
    const size = { width, height };

    const storeName = `_${name}`;
    const currentSize = this[storeName];
    if (currentSize && width === currentSize.width && height === currentSize.height) {
      return;
    }
    this[storeName] = size; // initialize a new var with the current sizes
    if (this._containerSize && this._trackSize && this._thumbSize) {
      this.setState({
        containerSize: this._containerSize,
        trackSize: this._trackSize,
        thumbSize: this._thumbSize,
        measured: true,
      });
    }
  };

  _fireChangeEvent = event => {
    if (this.props[event]) {
      this.props[event](this._getCurrentVal());
    }
  };

  render() {
    const {
      minimumValue,
      maximumValue,
      trackStyle,
      thumbStyle,
      activeColor,
      disabled,
      theme,
      styles,
    } = this.props;
    const { containerSize, thumbSize, measured } = this.state;

    const thumbLeft = this.position.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: [0, containerSize.width - thumbSize.width],
    });

    const minimumTrackWidth = this.position.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: [0, containerSize.width - thumbSize.width],
    });

    const visibleStyle = {};
    if (!measured) visibleStyle.opacity = 0;

    const minimumTrackStyle = {
      position: 'absolute',
      width: Animated.add(minimumTrackWidth, thumbSize.width / 2),
      backgroundColor: activeColor || theme.COLORS.PRIMARY,
      ...visibleStyle,
    };

    const containerStyles = [styles.container, styles];

    return (
      <View style={containerStyles} onLayout={this._measureContainer}>
        <View
          renderToHardwareTextureAndroid
          style={[styles.track, trackStyle]}
          onLayout={this._measureTrack}
        />
        <Animated.View renderToHardwareTextureAndroid style={[styles.track, minimumTrackStyle]} />
        <Animated.View
          renderToHardwareTextureAndroid
          style={[
            styles.thumb,
            thumbStyle,
            disabled && styles.disabled,
            {
              transform: [{ translateX: thumbLeft }, { translateY: 0 }],
              ...visibleStyle,
            },
          ]}
          {...this._panResponder.panHandlers}
          onLayout={this._measureThumb}
        />
      </View>
    );
  }
}

Slider.defaultProps = {
  disabled: false,
  minimumValue: 0,
  maximumValue: 100,
  trackStyle: {},
  thumbStyle: {},
  value: 0,
  step: 0,
  style: null,
  theme: GalioTheme,
  onSlidingComplete: () => {},
  onSlidingStart: () => {},
  onValueChange: () => {},
};

Slider.propTypes = {
  value: PropTypes.number,
  disabled: PropTypes.bool,
  minimumValue: PropTypes.number,
  maximumValue: PropTypes.number,
  trackStyle: PropTypes.any,
  thumbStyle: PropTypes.any,
  step: PropTypes.number,
  styles: PropTypes.any,
  onSlidingComplete: PropTypes.func,
  onSlidingStart: PropTypes.func,
  onValueChange: PropTypes.func,
};

const styles = theme =>
  StyleSheet.create({
    container: {
      height: 40,
      justifyContent: 'center',
    },
    track: {
      height: theme.SIZES.TRACK_SIZE,
      width: '100%',
      borderRadius: theme.SIZES.TRACK_SIZE / 2,
      position: 'absolute',
      backgroundColor: theme.COLORS.GREY,
    },
    thumb: {
      width: theme.SIZES.THUMB_SIZE,
      height: theme.SIZES.THUMB_SIZE,
      borderRadius: theme.SIZES.THUMB_SIZE / 2,
      borderWidth: 2,
      borderColor: theme.COLORS.PRIMARY,
      backgroundColor: theme.COLORS.WHITE,
    },
    disabled: {
      backgroundColor: theme.COLORS.MUTED,
    },
  });

export default withGalio(Slider, styles);
