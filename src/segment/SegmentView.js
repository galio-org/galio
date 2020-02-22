import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { withGalio } from '../theme';
import OptionBar from './OptionBar';
import ViewPager from './ViewPager';

class OptionViewChildren {
  options = [];
  content = [];
}

class SegmentView extends React.Component {
  static defaultProps = {
    selectedIndex: 0,
  };

  viewPagerRef = React.createRef();
  optionBarRef = React.createRef();

  onBarSelect = index => {
    const { current: viewPager } = this.viewPagerRef;
    if (viewPager) {
      viewPager.scrollToIndex({ index, animated: true });
    }
  };

  onPagerOffsetChange = offset => {
    const { current: optionBar } = this.optionBarRef;
    if (optionBar) {
      // const optionCount = React.Children.count(optionBar.props.children);
      optionBar.scrollToOffset({ offset: offset / 5 });
    }
  };

  onPagerSelect = selectedIndex => {
    if (this.props.onSelect) {
      this.props.onSelect(selectedIndex);
    }
  };

  renderChild = (element, index) => {
    return {
      option: React.cloneElement(element, { key: index }),
      content: element.props.children,
    };
  };

  renderChildren = source => {
    return React.Children.toArray(source).reduce((acc, element, index) => {
      const { option, content } = this.renderChild(element, index);
      return {
        options: [...acc.options, option],
        content: [...acc.content, content],
      };
    }, new OptionViewChildren());
  };

  render() {
    const {
      style,
      selectedIndex,
      children,
      optionBarStyle,
      indicatorStyle,
      theme,
      ...rest
    } = this.props;

    const { options, content } = this.renderChildren(children);

    return (
      <View style={[styles.container, style]} {...rest}>
        <OptionBar
          style={optionBarStyle}
          ref={this.optionBarRef}
          selectedIndex={selectedIndex}
          indicatorStyle={indicatorStyle}
          onSelect={this.onBarSelect}
          theme={theme}>
          {options}
        </OptionBar>
        <ViewPager
          ref={this.viewPagerRef}
          {...rest}
          style={[styles.container, styles.viewPager, style]}
          selectedIndex={selectedIndex}
          shouldLoadComponent={this.props.shouldLoadComponent}
          onOffsetChange={this.onPagerOffsetChange}
          onSelect={this.onPagerSelect}>
          {content}
        </ViewPager>
      </View>
    );
  }
}

SegmentView.propTypes = {
  style: PropTypes.any,
  selectedIndex: PropTypes.number,
  children: PropTypes.node,
  optionBarStyle: PropTypes.any,
  indicatorStyle: PropTypes.any,
  shouldLoadComponent: PropTypes.func,
  theme: PropTypes.any,
  rest: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export default withGalio(SegmentView);
