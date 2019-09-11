import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';
import PropTypes from 'prop-types';

import Block from './Block';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

function DeckSwiper({
  onSwipeRight,
  onSwipeLeft,
  focusedElementStyle,
  nextElementStyle,
  components,
  style
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const position = new Animated.ValueXY();

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp"
  });

  const rotateAndTranslate = {
    transform: [
      {
        rotate: rotate
      },
      ...position.getTranslateTransform()
    ]
  };

  const nextCardOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: "clamp"
  });

  const nextCardScale = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp"
  });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      position.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      if(gestureState.dx > 110) {
        Animated.spring(position, {
          toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
        }).start(() => {
          setCurrentIndex(currentIndex + 1);
        });
       if(onSwipeRight) onSwipeRight();
      }else if(gestureState.dx < -110) {
        Animated.spring(position, {
          toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
        }).start(() => {
          setCurrentIndex(currentIndex + 1);
        });
        if(onSwipeLeft) onSwipeLeft();
      }else{
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          friction: 4
        }).start();
      }
    },
  });

  React.useEffect(() => {
    position.setValue({ x: 0, y: 0 });
  }, [currentIndex]);

  function renderComponents(components) {
    return components.map((item, i) => {
      if(i < currentIndex) {
        return null
      }else if(i == currentIndex){
        return (
          <Animated.View
            key={i}
            style={[
              rotateAndTranslate,
              {
                ...StyleSheet.absoluteFillObject
              },
              focusedElementStyle
            ]}
            {...panResponder.panHandlers}
          >
            {item}
          </Animated.View>
        );
      }else{
        return (
          <Animated.View
            key={i}
            style={[{
              opacity: nextCardOpacity,
              transform: [{ scale: nextCardScale }],
              ...StyleSheet.absoluteFillObject
            }, nextElementStyle]}
          >
            {item}
          </Animated.View>
        );
      }
    }).reverse();
  }
  return (
    <Block flex center style={[{ width: SCREEN_WIDTH * 0.7 }, style]}>
        {renderComponents(components)}
    </Block>
  );
}

DeckSwiper.propTypes = {
  components: PropTypes.array.isRequired,
  onSwipeRight: PropTypes.func, 
  onSwipeLeft: PropTypes.func,
  focusedElementStyle: PropTypes.any,
  nextElementStyle: PropTypes.any,
  style: PropTypes.any
}

export default DeckSwiper;