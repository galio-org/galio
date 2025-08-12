import React, { JSX, useMemo, useCallback } from "react";
import { TextProps, TextStyle, View, StyleSheet, Pressable, Platform } from "react-native";
import { Dimensions, ViewStyle } from "react-native";
import { useGalioTheme } from "./theme";
import Text from "./atomic/ions/text";
import Icon from "./atomic/ions/icon";
import Block from "./Block";

const { height } = Dimensions.get('screen')

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
    const theme = useGalioTheme();

    const renderTitle = useCallback(() => {
        if (typeof title === 'string') {
            return (
                <View style={styles(theme).title}>
                    <Text 
                        numberOfLines={titleNumberOfLines || 1} 
                        style={[styles(theme).titleTextStyle, titleStyle]} 
                        {...titleTextProps}
                    >
                        {title}
                    </Text>
                </View>
            )
        }
        if (!title) return null;
        return title;
    }, [title, titleStyle, titleNumberOfLines, titleTextProps, theme]);

    const renderLeft = useCallback(() => {
        if (!hideLeft) {
            if (leftIconName || (back && !left)) {
                return (
                    <View style={[styles(theme).left, leftStyle]}>
                        <Pressable
                            onPress={onLeftPress}
                            hitSlop={leftHitSlop}
                            accessibilityRole="button"
                            accessibilityLabel={accessibilityLabel || "Back button"}
                        >
                            <Icon
                                name={leftIconName || (back ? 'chevron-left' : 'navicon')}
                                family={leftIconFamily || 'evilicons'}
                                color={leftIconColor || theme.COLORS.LIGHT_MODE.icon}
                                size={leftIconSize || theme.SIZES.BASE * 1.0625}
                            />
                        </Pressable>
                    </View>
                );
            }
            return <View style={[styles(theme).left, leftStyle]}>{left}</View>;
        }
        return <View style={styles(theme).left} />;
    }, [hideLeft, leftIconName, back, left, leftStyle, onLeftPress, leftHitSlop, accessibilityLabel, leftIconFamily, leftIconColor, leftIconSize, theme]);

    const renderRight = useCallback(() => {
        const hasIcons = React.Children.count(right) > 1;
        const rightStyles = { ...styles(theme).right, ...rightStyle };
        
        if (!hideRight) {
            return (
                <View style={rightStyles}>
                    {hasIcons ? (
                        <View style={styles(theme).rightIconsContainer}>
                            {right}
                        </View>
                    ) : (
                        right
                    )}
                </View>
            );
        }
        return <View style={styles(theme).right} />;
    }, [hideRight, right, rightStyle, theme]);

    const navStyles = useMemo(() => {
        const baseStyle = styles(theme).navBar;
        const transparentStyle = transparent ? styles(theme).transparent : {};
        return { ...baseStyle, ...transparentStyle, ...style };
    }, [theme, transparent, style]);
    
    return (
        <Block style={navStyles}>
            {renderLeft()}
            {renderTitle()}
            {renderRight()}
        </Block>        
    );
}

const styles = (theme: ReturnType<typeof useGalioTheme>) => 
    StyleSheet.create({
    navBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.COLORS.LIGHT_MODE.white,
      paddingVertical: theme.SIZES.BASE * 1,
      paddingHorizontal: theme.SIZES.BASE * 1,
      height: 56,
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: theme.COLORS.LIGHT_MODE.grey || '#f0f0f0',
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
        },
        android: {
          elevation: 4,
        },
        web: {
          boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.08)',
        },
      }),
    },
    title: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: theme.SIZES.BASE * 0.5,
    },
    titleTextStyle: {
      fontWeight: '700',
      fontSize: theme.SIZES.FONT * 1.1,
      color: theme.COLORS.LIGHT_MODE.black,
      textAlign: 'center',
      letterSpacing: 0.3,
    },
    left: {
      minWidth: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.SIZES.BASE * 0.25,
      borderRadius: 20,
      backgroundColor: 'transparent',
    },
    right: {
      minWidth: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: theme.SIZES.BASE * 0.25,
      borderRadius: 20,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
    transparent: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: 0,
      shadowOpacity: 0,
      elevation: 0,
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default NavBar;
