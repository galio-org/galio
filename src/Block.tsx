import React from 'react';
import type { JSX } from 'react';
import { ViewStyle, View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { useGalioTheme } from './theme';

// Enhanced type definitions for better type safety
type SpaceType = 'between' | 'around' | 'evenly' | 'left' | 'right' | 'center' | null;

interface BlockProps extends Omit<ViewStyle, keyof BlockSpecificProps> {
  // Layout props
  row?: boolean;
  flex?: boolean | number;
  center?: boolean;
  middle?: boolean;
  top?: boolean;
  bottom?: boolean;
  right?: boolean;
  left?: boolean;

  // Spacing and sizing
  space?: SpaceType;
  fluid?: boolean;
  height?: number | null;
  width?: number | null;

  // Visual effects
  shadow?: boolean;
  shadowColor?: string | null;
  card?: boolean;
  safe?: boolean;

  // Custom background
  background?: string | null;

  // Content
  children?: React.ReactNode;

  // Override styles
  style?: ViewStyle | ViewStyle[];
}

// Extract specific props that aren't part of React Native's ViewStyle
interface BlockSpecificProps {
  row?: boolean;
  flex?: boolean | number;
  center?: boolean;
  middle?: boolean;
  top?: boolean;
  bottom?: boolean;
  right?: boolean;
  left?: boolean;
  space?: SpaceType;
  fluid?: boolean;
  height?: number | null;
  width?: number | null;
  shadow?: boolean;
  shadowColor?: string | null;
  card?: boolean;
  safe?: boolean;
  background?: string | null;
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

function Block(props: BlockProps): JSX.Element {
  const {
    row,
    flex,
    center,
    middle,
    top,
    bottom,
    right,
    left,
    space,
    fluid,
    height,
    width,
    shadow,
    shadowColor,
    card,
    safe,
    background,
    children,
    style,
    ...rest
  } = props;

  const theme = useGalioTheme();

  // Build styles using composition pattern for better maintainability
  const blockStyles = useBlockStyles({
    theme,
    row,
    flex,
    center,
    middle,
    top,
    bottom,
    right,
    left,
    space,
    fluid,
    height,
    width,
    shadow,
    shadowColor,
    card,
    background,
    customStyle: style,
  });

  // Render with SafeAreaView if needed
  if (safe) {
    return (
      <SafeAreaView style={blockStyles} {...rest}>
        {children}
      </SafeAreaView>
    );
  }

  return (
    <View style={blockStyles} {...rest}>
      {children}
    </View>
  );
}

// Custom hook for building block styles - improves testability and reusability
function useBlockStyles({
  theme,
  row,
  flex,
  center,
  middle,
  top,
  bottom,
  right,
  left,
  space,
  fluid,
  height,
  width,
  shadow,
  shadowColor,
  card,
  background,
  customStyle,
}: {
  theme: ReturnType<typeof useGalioTheme>;
  row?: boolean;
  flex?: boolean | number;
  center?: boolean;
  middle?: boolean;
  top?: boolean;
  bottom?: boolean;
  right?: boolean;
  left?: boolean;
  space?: SpaceType;
  fluid?: boolean;
  height?: number | null;
  width?: number | null;
  shadow?: boolean;
  shadowColor?: string | null;
  card?: boolean;
  background?: string | null;
  customStyle?: ViewStyle | ViewStyle[];
}) {
  const modeKey = theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE';
  const colors = theme.COLORS[modeKey];

  // Base block styles with theme integration
  const baseStyles = {
    flexDirection: 'column' as const,
    backgroundColor: background || colors.background,
  };

  // Compose all styles using a more functional approach
  const styles = [
    baseStyles,

    // Layout styles
    row && { flexDirection: 'row' as const },
    flex && { flex: flex === true ? 1 : flex },
    center && {
      alignItems: 'center' as const,
      alignSelf: 'center' as const,
    },
    middle && {
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    },
    top && {
      alignItems: 'flex-start' as const,
      alignSelf: 'flex-start' as const,
    },
    bottom && {
      alignItems: 'flex-end' as const,
      alignSelf: 'flex-end' as const,
    },
    right && { alignItems: 'flex-end' as const },
    left && { alignItems: 'flex-start' as const },

    // Spacing
    space && { justifyContent: `space-${space}` as any },

    // Sizing
    fluid && { width: 'auto' as const },
    height && { height },
    width && { width },

    // Visual effects
    shadow && getShadowStyles(theme, colors),
    card && getCardStyles(theme, colors),

    // Custom shadow color override
    shadowColor && { shadowColor },

    // Custom styles (can override anything)
    ...(Array.isArray(customStyle) ? customStyle : [customStyle]),
  ].filter(Boolean) as ViewStyle[];

  return styles;
}

// Extracted style builders for better organization
function getShadowStyles(theme: ReturnType<typeof useGalioTheme>, colors: any) {
  return Platform.select({
    ios: {
      shadowColor: colors.block,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: theme.SIZES.BLOCK_SHADOW_OPACITY,
      shadowRadius: theme.SIZES.BLOCK_SHADOW_RADIUS,
    },
    android: {
      elevation: theme.SIZES.ANDROID_ELEVATION,
    },
    web: {
      boxShadow: `0px 3px ${theme.SIZES.BLOCK_SHADOW_RADIUS}px rgba(0, 0, 0, ${theme.SIZES.BLOCK_SHADOW_OPACITY})`,
    },
  });
}

function getCardStyles(theme: ReturnType<typeof useGalioTheme>, colors: any) {
  return {
    borderRadius: theme.SIZES.CARD_BORDER_RADIUS,
    borderWidth: theme.SIZES.CARD_BORDER_WIDTH,
    borderColor: colors.block,
  };
}

export default Block;
