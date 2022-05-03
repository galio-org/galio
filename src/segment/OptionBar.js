import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import OptionIndicator from "./OptionIndicator";

class OptionsBar extends React.Component {
  static defaultProps = {
    selectedIndex: 0
  };

  optionIndicatorRef = React.createRef();

  onOptionSelect = index => {
    if (this.props.onSelect) {
      this.props.onSelect(index);
    }
  };

  scrollToIndex(params) {
    const { current: optionIndicator } = this.optionIndicatorRef;
    optionIndicator.scrollToIndex(params);
  }

  scrollToOffset(params) {
    const { current: optionIndicator } = this.optionIndicatorRef;
    optionIndicator.scrollToOffset(params);
  }

  isOptionSelected = index => {
    return index === this.props.selectedIndex;
  };

  renderOption = (element, index) => {
    return React.cloneElement(element, {
      key: index,
      style: [styles.item, element.props.style],
      selected: this.isOptionSelected(index),
      onSelect: () => this.onOptionSelect(index),
      optionsCount: React.Children.count(this.props.children),
      indicatorStyle: this.props.indicatorStyle,
      theme: this.props.theme
    });
  };

  renderOptions = source => {
    return React.Children.map(source, this.renderOption);
  };

  render() {
    const {
      style,
      indicatorStyle,
      selectedIndex,
      children,
      theme,
      ...rest
    } = this.props;

    const options = this.renderOptions(children);

    return (
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{
            flexGrow: 1
          }}
          {...rest}
        >
          <View
            style={[
              styles.optionsWrapper,
              {
                borderBottomColor: theme.COLORS.MUTED,
                borderBottomWidth: StyleSheet.hairlineWidth
              },
              style
            ]}
          >
            {options}
          </View>
          <OptionIndicator
            ref={this.optionIndicatorRef}
            style={[
              styles.indicator,
              { backgroundColor: theme.COLORS.BLACK },
              indicatorStyle
            ]}
            selectedPosition={selectedIndex}
            positions={options.length}
          />
        </ScrollView>
      </View>
    );
  }
}

OptionsBar.propTypes = {
  style: PropTypes.any,
  indicatorStyle: PropTypes.any,
  selectedIndex: PropTypes.number,
  children: PropTypes.node,
  onSelect: PropTypes.func,
  theme: PropTypes.any,
  rest: PropTypes.any
};

export default OptionsBar;

const styles = StyleSheet.create({
  optionsWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 4
  },
  item: {
    flex: 1
  },
  indicator: {
    borderRadius: 2,
    height: 2
  }
});
