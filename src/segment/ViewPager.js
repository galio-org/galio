import React from "react";
import {
  Animated,
  Easing,
  PanResponder,
  StyleSheet,
  View,
  I18nManager
} from "react-native";
import PropTypes from "prop-types";

export default class ViewPager extends React.Component {
  static defaultProps = {
    selectedIndex: 0,
    shouldLoadComponent: () => true
  };

  containerRef = React.createRef();
  contentWidth = 0;
  contentOffsetValue = 0;
  contentOffset = new Animated.Value(this.contentOffsetValue);
  panResponder = PanResponder.create(this);

  componentDidMount() {
    this.contentOffset.addListener(this.onContentOffsetAnimationStateChanged);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      const index = this.props.selectedIndex;
      this.scrollToIndex({ index, animated: true });
    }
  }

  componentWillUnmount() {
    this.contentOffset.removeAllListeners();
  }

  onMoveShouldSetPanResponder = (event, state) => {
    const isHorizontalMove =
      Math.abs(state.dx) > 0 && Math.abs(state.dx) > Math.abs(state.dy);

    if (isHorizontalMove) {
      const i18nOffset = I18nManager.isRTL ? -state.dx : state.dx;
      const nextSelectedIndex =
        this.props.selectedIndex - Math.sign(i18nOffset);

      return nextSelectedIndex >= 0 && nextSelectedIndex < this.getChildCount();
    }

    return false;
  };

  onPanResponderMove = (event, state) => {
    const i18nOffset = I18nManager.isRTL
      ? -this.contentWidth
      : this.contentWidth;
    const selectedPageOffset = this.props.selectedIndex * i18nOffset;

    this.contentOffset.setValue(state.dx - selectedPageOffset);
  };

  onPanResponderRelease = (event, state) => {
    if (
      Math.abs(state.vx) >= 0.5 ||
      Math.abs(state.dx) >= 0.5 * this.contentWidth
    ) {
      const i18nOffset = I18nManager.isRTL ? -state.dx : state.dx;
      const index =
        i18nOffset > 0
          ? this.props.selectedIndex - 1
          : this.props.selectedIndex + 1;
      this.scrollToIndex({ index, animated: true });
    } else {
      const index = this.props.selectedIndex;
      this.scrollToIndex({ index, animated: true });
    }
  };

  scrollToIndex(params) {
    const { index, ...rest } = params;

    const childCount = this.getChildCount() - 1;
    const offset =
      this.contentWidth *
      (index < 0 ? 0 : index > childCount ? childCount : index);
    this.scrollToOffset({ offset, ...rest });
  }

  scrollToOffset = params => {
    this.createOffsetAnimation(params).start(
      this.onContentOffsetAnimationStateEnd
    );
  };

  onLayout = event => {
    this.contentWidth = event.nativeEvent.layout.width / this.getChildCount();

    this.scrollToIndex({
      index: this.props.selectedIndex
    });
  };

  onContentOffsetAnimationStateChanged = state => {
    this.contentOffsetValue = I18nManager.isRTL ? state.value : -state.value;

    if (this.props.onOffsetChange) {
      this.props.onOffsetChange(this.contentOffsetValue);
    }
  };

  onContentOffsetAnimationStateEnd = result => {
    const selectedIndex = this.contentOffsetValue / this.contentWidth;

    if (selectedIndex !== this.props.selectedIndex && this.props.onSelect) {
      this.props.onSelect(Math.round(selectedIndex));
    }
  };

  createOffsetAnimation = params => {
    const animationDuration = params.animated ? 300 : 0;

    return Animated.timing(this.contentOffset, {
      toValue: I18nManager.isRTL ? params.offset : -params.offset,
      easing: Easing.linear,
      duration: animationDuration
    });
  };

  renderChild = (source, index) => {
    const contentView = this.props.shouldLoadComponent(index) ? source : null;

    return <View style={styles.contentContainer}>{contentView}</View>;
  };

  renderChildren = source => {
    return React.Children.map(source, this.renderChild);
  };

  getChildCount = () => {
    return React.Children.count(this.props.children);
  };

  getContainerStyle = () => {
    return {
      width: `${100 * this.getChildCount()}%`,
      transform: [{ translateX: this.contentOffset }]
    };
  };

  render() {
    const { style, children, ...rest } = this.props;

    return (
      <Animated.View
        {...rest}
        ref={this.containerRef}
        style={[styles.container, style, this.getContainerStyle()]}
        onLayout={this.onLayout}
        {...this.panResponder.panHandlers}
      >
        {this.renderChildren(children)}
      </Animated.View>
    );
  }
}

ViewPager.propTypes = {
  style: PropTypes.any,
  selectedIndex: PropTypes.number,
  shouldLoadComponent: PropTypes.func,
  onOffsetChange: PropTypes.func,
  onSelect: PropTypes.func,
  children: PropTypes.node,
  rest: PropTypes.any
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  contentContainer: {
    flex: 1,
    width: "100%"
  }
});
