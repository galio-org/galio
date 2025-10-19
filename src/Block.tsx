import React from 'react';
import type { JSX } from 'react';
import { ViewStyle, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, useColors } from './theme';

// Enhanced type definitions for better type safety

/**
 * Semantic shadow levels for cross-platform consistency.
 */
type ShadowLevel = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SpaceType = 'between' | 'around' | 'evenly' | 'left' | 'right' | 'center' | null;

interface BlockProps {
  /**
   * Layout direction: row (horizontal)
   */
  row?: boolean;
  /**
   * Flex value or enable flex: 1
   */
  flex?: boolean | number;
  /**
   * Center content horizontally
   */
  center?: boolean;
  /**
   * Center content vertically and horizontally
   */
  middle?: boolean;
  /**
   * Align content to top
   */
  top?: boolean;
  /**
   * Align content to bottom
   */
  bottom?: boolean;
  /**
   * Align content to right
   */
  right?: boolean;
  /**
   * Align content to left
   */
  left?: boolean;
  /**
   * Space distribution
   */
  space?: SpaceType;
  /**
   * Fluid width (auto)
   */
  fluid?: boolean;
  /**
   * Height override
   */
  height?: number | null;
  /**
   * Width override
   */
  width?: number | null;
  /**
   * Semantic shadow level: 'none', 'xs', 'sm', 'md', 'lg', 'xl'. If not set, no shadow is applied.
   */
  shadow?: ShadowLevel | boolean;
  /**
   * Custom shadow color (overrides default)
   */
  shadowColor?: string | null;
  /**
   * Card style (border, radius)
   */
  card?: boolean;
  /**
   * Use SafeAreaView
   */
  safe?: boolean;
  /**
   * Custom background color
   */
  background?: string | null;
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * Custom style(s)
   */
  style?: ViewStyle | ViewStyle[];

}

// Extract specific props that aren't part of React Native's ViewStyle
// No longer needed: all props are now documented in BlockProps

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
    shadow: shadowProp,
    shadowColor,
    card,
    safe,
    background,
    children,
    style,
    ...rest
  } = props;

  // Backward compatibility: coerce boolean shadow to semantic value
  let shadow = shadowProp;
  if (typeof shadow === 'boolean') {
    if (shadow) {
      shadow = 'md';
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[Block] Passing shadow as boolean is deprecated. Use semantic values (xs, sm, md, lg, xl) instead.');
      }
    } else {
      shadow = undefined;
    }
  }
  const theme = useTheme();
  const colors = useColors();

  // Build styles using composition pattern for better maintainability
  const blockStyles = useBlockStyles({
    theme,
    colors,
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

// Custom hook for building block styles - now supports semantic shadow levels
function useBlockStyles({
  theme,
  colors,
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
  theme: ReturnType<typeof useTheme>;
  colors: ReturnType<typeof useColors>;
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
  shadow?: ShadowLevel;
  shadowColor?: string | null;
  card?: boolean;
  background?: string | null;
  customStyle?: ViewStyle | ViewStyle[];
}) {

  // Base block styles with theme integration
  const baseStyles = {
    flexDirection: 'column' as const,
    backgroundColor: background || 'transparent',
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

    // Visual effects: semantic shadow
    (typeof shadow === 'string' && shadow !== 'none') ? getSemanticShadowStyles(theme, shadow, shadowColor) : undefined,
    card && getCardStyles(theme, colors),

    // Custom shadow color override
    shadowColor && { shadowColor },

    // Custom styles (can override anything)
    ...(Array.isArray(customStyle) ? customStyle : [customStyle]),
  ].filter(Boolean) as ViewStyle[];

  return styles;
}


// Semantic shadow style builder
function getSemanticShadowStyles(theme: ReturnType<typeof useTheme>, level: ShadowLevel, shadowColor?: string | null) {
  if (level === 'none') return {};
  const def = theme.shadows?.[level as keyof typeof theme.shadows] || {};
  const neutralShadowColor = '#b0b0b0';
  let nativeShadow = Platform.select({
    ios: {
      ...(def.ios || {}),
      shadowColor: shadowColor || (def.ios && def.ios.shadowColor) || neutralShadowColor,
    },
    android: {
      ...(def.android || {}),
      shadowColor: shadowColor || (def.android && def.android.shadowColor) || neutralShadowColor,
    },
  }) || {};
  // For web, merge boxShadow if present
  if (Platform.OS === 'web' && def.web) {
    return { ...nativeShadow, ...def.web };
  }
  // Always add elevation for Android
  if (Platform.OS === 'android') {
    const elevation = (def.android && typeof def.android.elevation === 'number') ? def.android.elevation : 0;
    nativeShadow = { ...nativeShadow, elevation };
  }
  return nativeShadow;
}

function getCardStyles(theme: ReturnType<typeof useTheme>, colors: ReturnType<typeof useColors>) {
  return {
    borderRadius: theme.sizes.CARD_BORDER_RADIUS,
    borderWidth: theme.sizes.CARD_BORDER_WIDTH,
    borderColor: colors.border,
  };
}

export default Block;
