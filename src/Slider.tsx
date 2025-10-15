import React, { useRef, useEffect, JSX, useState } from 'react';
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
  activeColor?: string;
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
}: SliderProps):JSX.Element => {
  
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
        const thumbRadius = (theme?.SIZES?.THUMB_SIZE || 25) / 2;
        const clampedX = Math.max(thumbRadius, Math.min(relativeX, trackWidth.current - thumbRadius));
        currentThumbPosition.current = clampedX;
        thumbX.setValue(clampedX);
      },
      onPanResponderMove: (_, gestureState) => {
        if (disabled) return;
        
        const relativeX = gestureState.moveX - trackLayout.current.x;
        const thumbRadius = (theme?.SIZES?.THUMB_SIZE || 25) / 2;
        const clampedX = Math.max(thumbRadius, Math.min(relativeX, trackWidth.current - thumbRadius));
        
        currentThumbPosition.current = clampedX;
        thumbX.setValue(clampedX);
        
        const newValue = positionToValue(clampedX);
        if (newValue !== currentValue.current) {
          currentValue.current = newValue;
          onValueChange?.(newValue);
        }
      },
      onPanResponderRelease: () => {
      },
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


  return (
    <View
        style={[styles(theme, colors).container, containerStyle]}
        onLayout={handleContainerLayout}
    >
        <View 
            onLayout={onTrackLayout}
            style = {[styles(theme, colors).track, trackStyle]}
            ></View>
        <View style={[
            styles(theme, colors).track,
            {
                position: 'absolute',
                width: trackWidth.current,
                backgroundColor: activeColor || theme?.COLORS?.LIGHT_MODE?.primary || '#007AFF',
            }
        ]} 
        >
            <Animated.View
                style={[
                    styles(theme, colors).thumb,
                    thumbStyle,
                    disabled && styles(theme, colors).disabled,
                    {transform: [{ translateX: thumbX }]},
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
            height: theme?.SIZES?.TRACK_SIZE || 4,
            width: '100%',
            borderRadius: (theme?.SIZES?.TRACK_SIZE || 4) / 2,
            position: 'absolute',
            backgroundColor: theme?.COLORS?.LIGHT_MODE?.grey || '#E0E0E0',
        },
        thumb: {
            width: theme?.SIZES?.THUMB_SIZE || 25,
            height: theme?.SIZES?.THUMB_SIZE || 25,
            borderRadius: (theme?.SIZES?.THUMB_SIZE || 25) / 2,
            borderWidth: 2,
            borderColor: theme?.COLORS?.LIGHT_MODE?.primary || '#007AFF',
            backgroundColor: theme?.COLORS?.LIGHT_MODE?.white || '#FFFFFF',
            position: 'absolute',
            marginTop: -10,
        },
        disabled: {
            backgroundColor: theme?.COLORS?.LIGHT_MODE?.muted || '#999999',
            borderColor: theme?.COLORS?.LIGHT_MODE?.muted || '#999999',
        },
    });

export default Slider;