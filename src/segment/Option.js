import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import PropTypes from "prop-types";

const { width: deviceWidth } = Dimensions.get("window");

class Option extends React.Component {
  static defaultProps = {
    selected: false
  };

  onPress = () => {
    if (this.props.onSelect) {
      this.props.onSelect(!this.props.selected);
    }
  };

  isValidString = value => {
    if (value && value.length > 0) {
      return true;
    }
    return false;
  };

  getComponentStyle = () => {
    // const optionWidth = deviceWidth / this.props.optionsCount;
    const optionWidth = deviceWidth / 5;
    return {
      width: optionWidth
    };
  };

  renderTitle = style => {
    const { title, titleStyle } = this.props;

    const titleColor = this.props.selected
      ? (this.props.indicatorStyle && this.props.indicatorStyle.color) ||
        this.props.theme.COLORS.BLACK
      : this.props.theme.COLORS.MUTED;

    return (
      <Text
        key={1}
        style={[
          style,
          {
            color: titleColor,
            fontSize: this.props.theme.SIZES.FONT,
            lineHeight: this.props.theme.SIZES.BASE
          },
          titleStyle
        ]}
      >
        {title}
      </Text>
    );
  };

  renderIcon = style => {
    const iconElement = this.props.icon(style);

    return React.cloneElement(iconElement, {
      key: 2,
      style: [style, iconElement.props.style]
    });
  };

  renderChildren = style => {
    const { title, icon } = this.props;

    return [
      icon && this.renderIcon(style.icon),
      this.isValidString(title) && this.renderTitle(style.title)
    ];
  };

  render() {
    const { style, ...rest } = this.props;
    const componentStyle = this.getComponentStyle();
    const [iconElement, titleElement] = this.renderChildren({
      icon: styles.icon,
      title: styles.title
    });

    return (
      <TouchableOpacity
        activeOpacity={1.0}
        {...rest}
        style={[styles.container, componentStyle, style]}
        onPress={this.onPress}
      >
        {iconElement}
        {titleElement}
      </TouchableOpacity>
    );
  }
}

Option.propTypes = {
  style: PropTypes.any,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  optionsCount: PropTypes.number,
  indicatorStyle: PropTypes.object,
  theme: PropTypes.any,
  rest: PropTypes.any
};

export default Option;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 24,
    marginVertical: 2,
    tintColor: "#8F9BB3",
    width: 24
  },
  title: {
    fontWeight: "bold",
    marginVertical: 2
  }
});
