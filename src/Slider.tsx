import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Animated,
  PanResponder,
  StyleSheet,
  LayoutChangeEvent,
  ViewStyle,
} from 'react-native';
import { useTheme, useColors } from './theme';

interface SliderProps {
  value?: number;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  disabled?: boolean;
  trackStyle?: ViewStyle;
  activeColor?: keyof ReturnType<typeof useColors> | string;
  thumbStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  onValueChange?: (value: number) => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

const Slider: React.FC<SliderProps> = ({
  value = 0,
  minimumValue = 0,
  maximumValue = 1,
  step = 0.01,
  onValueChange,
  disabled = false,
  trackStyle,
  activeColor,
  containerStyle,
  thumbStyle,
  accessibilityLabel,
  accessibilityHint,
}) => {
  const theme = useTheme();
  const colors = useColors();
  const [containerWidth, setContainerWidth] = useState(0);
  const trackWidth = useRef(0);
  const thumbX = useRef(new Animated.Value(0)).current;
  const currentValue = useRef(value);
  const currentThumbPosition = useRef(0);
  const trackLayout = useRef({ x: 0, y: 0, width: 0, height: 0 });

  const valueToPosition = (val: number) => {
    const clamped = Math.max(minimumValue, Math.min(val, maximumValue));
    const ratio = (clamped - minimumValue) / (maximumValue - minimumValue);
    return ratio * trackWidth.current;
  };

  const positionToValue = (pos: number) => {
    const ratio = pos / trackWidth.current;
    const rawValue = ratio * (maximumValue - minimumValue) + minimumValue;
    const steppedValue = step > 0 ? Math.round(rawValue / step) * step : rawValue;
    return Math.max(minimumValue, Math.min(steppedValue, maximumValue));
  };

  useEffect(() => {
    const pos = valueToPosition(value);
    Animated.timing(thumbX, {
      toValue: pos,
      duration: 150,
      useNativeDriver: false,
    }).start();
    currentThumbPosition.current = pos;
  }, [value]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !disabled,
      onMoveShouldSetPanResponder: () => !disabled,
      onPanResponderGrant: (_, gestureState) => {
        if (disabled) return;
        const relativeX = gestureState.x0 - trackLayout.current.x;
        const thumbRadius = (theme?.sizes?.THUMB_SIZE || 25) / 2;
        const clampedX = Math.max(thumbRadius, Math.min(relativeX, trackWidth.current - thumbRadius));
        currentThumbPosition.current = clampedX;
        thumbX.setValue(clampedX);
      },
      onPanResponderMove: (_, gestureState) => {
        if (disabled) return;
        const relativeX = gestureState.moveX - trackLayout.current.x;
        const thumbRadius = (theme?.sizes?.THUMB_SIZE || 25) / 2;
        const clampedX = Math.max(thumbRadius, Math.min(relativeX, trackWidth.current - thumbRadius));
        currentThumbPosition.current = clampedX;
        thumbX.setValue(clampedX);
        const newValue = positionToValue(clampedX);
        if (newValue !== currentValue.current) {
          currentValue.current = newValue;
          onValueChange?.(newValue);
        }
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  const onTrackLayout = (e: LayoutChangeEvent) => {
    const { width, x, y } = e.nativeEvent.layout;
    trackWidth.current = width;
    trackLayout.current = { x, y, width, height: e.nativeEvent.layout.height };
    thumbX.setValue(valueToPosition(currentValue.current));
  };

  const handleContainerLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(Math.round(width));
  };

  // Resolve theme palette key for activeColor
  const resolvedActiveColor = activeColor
    ? colors[activeColor as keyof typeof colors] || activeColor
    : colors.primary;

  return (
    <View
      style={[styles(theme, colors).container, containerStyle]}
      onLayout={handleContainerLayout}
    >
      <View
        onLayout={onTrackLayout}
        style={[styles(theme, colors).track, trackStyle]}
      />
      <View
        style={[styles(theme, colors).activeTrack, { width: trackWidth.current, backgroundColor: resolvedActiveColor }]}
      >
        <Animated.View
          style={[
            styles(theme, colors).thumb,
            thumbStyle,
            disabled && styles(theme, colors).disabled,
            { transform: [{ translateX: thumbX }] },
          ]}
          {...panResponder.panHandlers}
        />
      </View>
    </View>
  );
};

const styles = (theme: ReturnType<typeof useTheme>, colors: ReturnType<typeof useColors>) =>
  StyleSheet.create({
    container: {
      height: 40,
      justifyContent: 'center',
    },
    track: {
      height: theme?.sizes?.TRACK_SIZE || 4,
      width: '100%',
      borderRadius: (theme?.sizes?.TRACK_SIZE || 4) / 2,
      position: 'absolute',
      backgroundColor: colors.surface || colors.background || '#E0E0E0',
    },
    activeTrack: {
      height: theme?.sizes?.TRACK_SIZE || 4,
      position: 'absolute',
      borderRadius: (theme?.sizes?.TRACK_SIZE || 4) / 2,
    },
    thumb: {
      width: theme?.sizes?.THUMB_SIZE || 25,
      height: theme?.sizes?.THUMB_SIZE || 25,
      borderRadius: (theme?.sizes?.THUMB_SIZE || 25) / 2,
      borderWidth: 2,
      borderColor: colors.primary,
      backgroundColor: colors.white,
      position: 'absolute',
      marginTop: -10,
    },
    disabled: {
      backgroundColor: colors.surfaceVariant || colors.background || '#999999',
      borderColor: colors.surfaceVariant || colors.background || '#999999',
    },
  });

export default Slider;