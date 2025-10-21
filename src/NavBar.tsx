import React, { JSX, useMemo, useCallback } from "react";
import {
  TextProps,
  TextStyle,
  View,
  StyleSheet,
  Pressable,
  Platform,
  Dimensions,
  ViewStyle,
} from "react-native";

import { useTheme, useColors } from "./theme";
import Text from "./Text";
import Icon from "./Icon";
import Block from "./Block";

const { height } = Dimensions.get("screen");

interface NavBarProps {
  back?: boolean;
  hideLeft?: boolean;
  hideRight?: boolean;
  left?: React.ReactNode;
  leftStyle?: ViewStyle;
  leftIconColor?: string;
  leftHitSlop?: number;
  leftIconSize?: number;
  leftIconName?: string;
  leftIconFamily?: string;
  onLeftPress?: () => void;
  right?: React.ReactNode;
  rightStyle?: ViewStyle;
  style?: ViewStyle;
  transparent?: boolean;
  title?: React.ReactNode;
  titleStyle?: TextStyle;
  titleNumberOfLines?: number;
  titleTextProps?: TextProps;
  accessibilityLabel?: string;
}

function NavBar({
  back = false,
  hideLeft,
  hideRight,
  left,
  leftIconColor,
  leftHitSlop,
  leftIconSize,
  leftIconName,
  leftStyle,
  leftIconFamily,
  onLeftPress = () => {},
  right,
  rightStyle,
  style,
  transparent = false,
  title,
  titleStyle,
  titleNumberOfLines,
  titleTextProps,
  accessibilityLabel,
}: NavBarProps): JSX.Element {
  const theme = useTheme();
  const colors = useColors();

  const renderTitle = useCallback(() => {
    if (typeof title === "string") {
      return (
        <View style={styles(theme, colors).title}>
          <Text
            numberOfLines={titleNumberOfLines || 1}
            style={[styles(theme, colors).titleTextStyle, titleStyle]}
            {...titleTextProps}
          >
            {title}
          </Text>
        </View>
      );
    }
    if (!title) return null;
    return title;
  }, [title, titleStyle, titleNumberOfLines, titleTextProps, theme, colors]);

  const renderLeft = useCallback(() => {
    if (!hideLeft) {
      if (leftIconName || (back && !left)) {
        return (
          <View style={[styles(theme, colors).left, leftStyle]}>
            <Pressable
              onPress={onLeftPress}
              hitSlop={leftHitSlop}
              accessibilityRole="button"
              accessibilityLabel={accessibilityLabel || "Back button"}
            >
              <Icon
                name={leftIconName || (back ? "chevron-left" : "navicon")}
                family={leftIconFamily || "material"}
                color={leftIconColor || colors.text}
                size={leftIconSize || theme.sizes.BASE * 2.2} 
              />
            </Pressable>
          </View>
        );
      }
      return <View style={[styles(theme, colors).left, leftStyle]}>{left}</View>;
    }
    return <View style={styles(theme, colors).left} />;
  }, [
    hideLeft,
    leftIconName,
    back,
    left,
    leftStyle,
    onLeftPress,
    leftHitSlop,
    accessibilityLabel,
    leftIconFamily,
    leftIconColor,
    leftIconSize,
    theme,
    colors,
  ]);

  const renderRight = useCallback(() => {
    const hasIcons = React.Children.count(right) > 1;
    const rightStyles = { ...styles(theme, colors).right, ...rightStyle };

    if (!hideRight) {
      return (
        <View style={rightStyles}>
          {hasIcons ? (
            <View style={styles(theme, colors).rightIconsContainer}>{right}</View>
          ) : (
            right
          )}
        </View>
      );
    }
    return <View style={styles(theme, colors).right} />;
  }, [hideRight, right, rightStyle, theme, colors]);

  const navStyles = useMemo((): ViewStyle => {
    const defaultStyles = styles(theme, colors).navBar;
    const transparentStyles = transparent ? styles(theme, colors).transparent : {};
    const merged = StyleSheet.flatten([
      defaultStyles,
      transparentStyles,
      style ? style : [],
    ]) as ViewStyle;

    if (!merged.height || (typeof merged.height === "number" && merged.height <= 0)) {
      merged.height = defaultStyles.height;
    }
    return merged;
  }, [theme, colors, transparent, style]);

  return (
    <Block style={navStyles}>
      {renderLeft()}
      {renderTitle()}
      {renderRight()}
    </Block>
  );
}

const styles = (theme: ReturnType<typeof useTheme>, colors: ReturnType<typeof useColors>) =>
  StyleSheet.create({
    navBar: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: colors.white,
      paddingVertical: theme.sizes.BASE * 0.5,
      height: theme.sizes.BASE * 4.125,
      width: "auto",
      borderBottomWidth: 1,
      borderBottomColor: colors.border || "#f0f0f0",
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
        },
        android: {
          elevation: 4,
        },
        web: {
          boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.08)",
        },
      }),
    },
    title: {
      flex: 2,
      height: height * 0.07,
      alignItems: "center",
      justifyContent: "center",
    },
    titleTextStyle: {
      fontWeight: "700",
      fontSize: theme.sizes.FONT * 0.875,
      color: colors.black,
      textAlign: "center",
      letterSpacing: 0.3,
    },
    left: {
      height: height * 0.07,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: theme.sizes.BASE,
    },
    right: {
      height: height * 0.07,
      alignItems: "center",
      justifyContent: "center",
      marginRight: theme.sizes.BASE,
    },
    transparent: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      borderWidth: 0,
      shadowOpacity: 0,
      elevation: 0,
    },
    rightIconsContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
  });

export default NavBar;
