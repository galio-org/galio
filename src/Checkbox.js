import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
// galio dependency
import { Icon } from "../galio";
import GalioTheme, { withGalio } from "../galio/theme";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.initialValue
    };

    this.renderChecked = this.renderChecked.bind(this);
    this.spaceAround = this.spaceAround.bind(this);
  }

  // adding the necessary margins depending on the flexDirection
  spaceAround(direction) {
    switch (direction) {
      case "row":
        return { marginLeft: 10 };
      case "row-reverse":
        return { marginRight: 10 };
      case "column":
        return { marginTop: 10 };
      case "column-reverse":
        return { marginBottom: 10 };
      default:
        return { marginLeft: 10 };
    }
  }

  // rendering the image/text for the checkbox
  renderLabel() {
    const {
      label,
      disabled,
      flexDirection,
      image,
      labelStyle,
      imageStyle,
      styles
    } = this.props;

    const textStyle = [
      styles.textStyles,
      disabled && { color: "#707070", opacity: 0.7 },
      labelStyle,
      flexDirection && this.spaceAround(flexDirection)
    ];
    const imageStyles = [
      styles.imgStyles,
      imageStyle,
      flexDirection && this.spaceAround(flexDirection)
    ];

    if (image && !label)
      return <Image style={imageStyles} source={{ uri: image }} />;
    if (!image && label) return <Text style={textStyle}>{label}</Text>;
    if (!label && !image) return null;
  }

  // adding the check icon
  renderChecked() {
    const { iconName, iconFamily, iconColor, iconSize } = this.props;

    if (this.state.checked)
      return <Icon name={iconName} family={iconFamily} color={iconColor} size={iconSize} />;
  }

  // onPress function that changes the component's state and callbacks the onChange prop
  _onPress() {
    this.setState({ checked: !this.state.checked }, () =>
      this.props.onChange(this.state.checked)
    );
  }

  render() {
    const { props, state } = this;
    const { style, styles, disabled, flexDirection, checkboxStyle } = props;

    const checkBoxContainerStyle = [
      styles.container,
      flexDirection && { flexDirection },
      style
    ];
    const checkBoxViewStyles = [
      styles.checkBoxView,
      styles.uncheckedBoxView,
      state.checked && styles.checkedBoxView, //apply the ckecked styling
      disabled && styles.disabledCheckBoxView,
      checkboxStyle
    ];

    return (
      <TouchableOpacity
        onPress={() => this._onPress()}
        style={checkBoxContainerStyle}
        activeOpacity={0.8}
        disabled={disabled}
      >
        <View style={checkBoxViewStyles}>{this.renderChecked()}</View>
        {this.renderLabel()}
      </TouchableOpacity>
    );
  }
}

const styles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    checkBoxView: {
      width: theme.SIZES.CHECKBOX_WIDTH,
      height: theme.SIZES.CHECKBOX_HEIGHT,
      borderWidth: theme.SIZES.BORDER_WIDTH,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: theme.SIZES.BORDER_RADIUS
    },
    uncheckedBoxView: {
      backgroundColor: theme.COLORS.TRANSPARENT,
      borderColor: theme.COLORS.GREY
    },
    checkedBoxView: {
      backgroundColor: theme.COLORS.THEME,
      borderColor: theme.COLORS.THEME
    },
    disabledCheckBoxView: {
      borderColor: theme.COLORS.MUTED,
      opacity: theme.SIZES.OPACITY
    },
    textStyles: {
      color: theme.COLORS.BLACK
    },
    imgStyles: {
      width: 200,
      height: 200
    }
  });

Checkbox.defaultProps = {
  checkboxStyle: null,
  disabled: false,
  flexDirection: "row",
  iconColor: '#fff',
  iconName: "check",
  iconSize: 15,
  iconFamily: 'FontAwesome',
  image: null,
  imageStyle: null,
  initialValue: false,
  label: null,
  labelStyle: null,
  onChange: () => {},
  styles: {},
  theme: GalioTheme
};

Checkbox.propTypes = {
  checkboxStyle: PropTypes.any,
  disabled: PropTypes.bool,
  flexDirection: PropTypes.oneOfType([
    PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
    PropTypes.string
  ]),
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconFamily: PropTypes.string,
  image: PropTypes.string,
  imageStyle: PropTypes.any, //style the image
  initialValue: PropTypes.bool,
  label: PropTypes.string,
  labelStyle: PropTypes.any, //style the text
  onChange: PropTypes.func,
  styles: PropTypes.any, //style the whole View element,
  theme: PropTypes.any
};

export default withGalio(Checkbox, styles);
