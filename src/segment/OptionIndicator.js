import React from "react";
import {
  Animated,
  Easing,
  I18nManager,
  Dimensions,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";

const { width: deviceWidth } = Dimensions.get("window");

class TabIndicator extends React.Component {
  static defaultProps = {
    selectedPosition: 0,
    animationDuration: 200
  };

  indicatorWidth;
  contentOffset = new Animated.Value(0);

  componentDidMount() {
    this.contentOffset.addListener(this.onContentOffsetAnimationStateChanged);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.selectedPosition !== nextProps.selectedPosition;
  }

  componentDidUpdate() {
    const { selectedPosition: index } = this.props;

    this.scrollToIndex({ index, animated: true });
  }

  componentWillUnmount() {
    this.contentOffset.removeAllListeners();
  }

  scrollToIndex(params) {
    const { index, ...rest } = params;
    const offset = this.indicatorWidth * index;

    this.scrollToOffset({ offset, ...rest });
  }

  scrollToOffset(params) {
    this.createOffsetAnimation(params).start(
      this.onContentOffsetAnimationStateEnd
    );
  }

  onContentOffsetAnimationStateChanged = state => {};

  onContentOffsetAnimationStateEnd = result => {};

  createOffsetAnimation = params => {
    const animationDuration = params.animated
      ? this.props.animationDuration
      : 0;

    return Animated.timing(this.contentOffset, {
      toValue: I18nManager.isRTL ? -params.offset : params.offset,
      duration: animationDuration,
      easing: Easing.linear
    });
  };

  onLayout = event => {
    this.indicatorWidth = event.nativeEvent.layout.width;

    this.scrollToOffset({
      offset: this.indicatorWidth * this.props.selectedPosition,
      animated: false
    });
  };

  getComponentStyle = () => {
    // const indicatorWidth = deviceWidth / this.props.positions;
    const indicatorWidth = deviceWidth / 5;

    return {
      width: indicatorWidth,
      transform: [{ translateX: this.contentOffset }]
    };
  };

  render() {
    const { style, ...rest } = this.props;
    const componentStyle = this.getComponentStyle();

    return (
      <Animated.View
        {...rest}
        onLayout={this.onLayout}
        style={[styles.container, style, componentStyle]}
      />
    );
  }
}

TabIndicator.propTypes = {
  style: PropTypes.any,
  selectedPosition: PropTypes.number,
  animationDuration: PropTypes.number,
  rest: PropTypes.any
};

export default TabIndicator;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0
  }
});
