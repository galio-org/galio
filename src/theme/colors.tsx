// Semantic Color Tokens - Modern React Native Theming (2025)

// Base color palette - shared across modes
export const SOCIAL = {
  facebook: '#3B5998',
  twitter: '#5BC0DE',
  dribbble: '#EA4C89',
};

// NEUTRAL DEFAULTS - Users should override these with their brand colors
// Define your brand colors in your application's theme file and pass via GalioProvider
export const NEUTRAL_DEFAULTS = {
  primary: '#6B7280',      // Neutral gray - override with your brand primary
  primaryDark: '#4B5563',
  primaryLight: '#9CA3AF',
  
  info: '#60A5FA',         // Neutral blue - override with your brand info
  infoDark: '#3B82F6',
  infoLight: '#93C5FD',
  
  danger: '#F87171',       // Neutral red - override with your brand error
  dangerDark: '#EF4444',
  dangerLight: '#FCA5A5',
  
  warning: '#FBBF24',      // Neutral orange - override with your brand warning
  warningDark: '#F59E0B',
  warningLight: '#FCD34D',
  
  success: '#34D399',      // Neutral green - override with your brand success
  successDark: '#10B981',
  successLight: '#6EE7B7',
};

export const SHADOWS = {
  xs: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 1.5,
    },
    android: {
      elevation: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 1.5,
    },
    web: {
      boxShadow: '0px 1px 2px rgba(0,0,0,0.08)',
    },
  },
  sm: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.10,
      shadowRadius: 2.5,
    },
    android: {
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.10,
      shadowRadius: 2.5,
    },
    web: {
      boxShadow: '0px 2px 4px rgba(0,0,0,0.10)',
    },
  },
  md: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.13,
      shadowRadius: 4.65,
    },
    android: {
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.13,
      shadowRadius: 4.65,
    },
    web: {
      boxShadow: '0px 4px 8px rgba(0,0,0,0.13)',
    },
  },
  lg: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.18,
      shadowRadius: 8,
    },
    android: {
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.18,
      shadowRadius: 8,
    },
    web: {
      boxShadow: '0px 8px 16px rgba(0,0,0,0.18)',
    },
  },
  xl: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 16 },
      shadowOpacity: 0.22,
      shadowRadius: 16,
    },
    android: {
      elevation: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 16 },
      shadowOpacity: 0.22,
      shadowRadius: 16,
    },
    web: {
      boxShadow: '0px 16px 32px rgba(0,0,0,0.22)',
    },
  },
  // For backward compatibility
  default: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4.65,
    },
    android: {
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4.65,
    },
    web: {
      boxShadow: '0px 4px 4.65px rgba(0,0,0,0.1)',
    },
  },
  strong: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 6.27,
    },
    android: {
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 6.27,
    },
    web: {
      boxShadow: '0px 8px 6.27px rgba(0,0,0,0.1)',
    },
  },
};

// Semantic color tokens for light mode
export const LIGHT_COLORS = {
  // Semantic background colors
  background: '#FFFFFF',
  surface: '#F9F9F9',
  surfaceVariant: '#F5F5F5',
  
  // Semantic text colors
  text: '#161D28',
  textSecondary: '#666666',
  textTertiary: '#9FA5AA',
  
  // Colors for text on branded backgrounds
  onPrimary: '#FFFFFF',
  onSuccess: '#FFFFFF',
  onError: '#FFFFFF',
  onWarning: '#FFFFFF',
  onInfo: '#FFFFFF',
  onBackground: '#161D28',
  onSurface: '#161D28',
  
  // Semantic state colors (neutral defaults - users override via GalioProvider)
  primary: NEUTRAL_DEFAULTS.primary,
  primaryHover: NEUTRAL_DEFAULTS.primaryDark,
  primaryActive: NEUTRAL_DEFAULTS.primaryDark,
  
  success: NEUTRAL_DEFAULTS.success,
  successHover: NEUTRAL_DEFAULTS.successDark,
  
  error: NEUTRAL_DEFAULTS.danger,
  errorHover: NEUTRAL_DEFAULTS.dangerDark,
  
  warning: NEUTRAL_DEFAULTS.warning,
  warningHover: NEUTRAL_DEFAULTS.warningDark,
  
  info: NEUTRAL_DEFAULTS.info,
  infoHover: NEUTRAL_DEFAULTS.infoDark,
  
  // UI element colors
  border: '#E0E0E0',
  borderHover: '#CCCCCC',
  divider: '#EEEEEE',
  
  // Component-specific defaults
  input: '#808080',
  inputBackground: '#FFFFFF',
  inputBorder: '#E0E0E0',
  placeholder: '#9FA5AA',
  
  disabled: '#E0E0E0',
  disabledText: '#9FA5AA',
  
  // Utility colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  
  // Social (kept for backward compatibility)
  ...SOCIAL,
};

// Semantic color tokens for dark mode
export const DARK_COLORS = {
  // Semantic background colors
  background: '#161D28',
  surface: '#1F2937',
  surfaceVariant: '#2A3441',
  
  // Semantic text colors
  text: '#FFFFFF',
  textSecondary: '#D1D5DB',
  textTertiary: '#9CA3AF',
  
  // Colors for text on branded backgrounds (same as light)
  onPrimary: '#FFFFFF',
  onSuccess: '#FFFFFF',
  onError: '#FFFFFF',
  onWarning: '#FFFFFF',
  onInfo: '#FFFFFF',
  onBackground: '#FFFFFF',
  onSurface: '#FFFFFF',
  
  // Semantic state colors (slightly brighter for dark mode)
  primary: NEUTRAL_DEFAULTS.primaryLight,
  primaryHover: NEUTRAL_DEFAULTS.primary,
  primaryActive: NEUTRAL_DEFAULTS.primary,
  
  success: NEUTRAL_DEFAULTS.successLight,
  successHover: NEUTRAL_DEFAULTS.success,
  
  error: NEUTRAL_DEFAULTS.dangerLight,
  errorHover: NEUTRAL_DEFAULTS.danger,
  
  warning: NEUTRAL_DEFAULTS.warningLight,
  warningHover: NEUTRAL_DEFAULTS.warning,
  
  info: NEUTRAL_DEFAULTS.infoLight,
  infoHover: NEUTRAL_DEFAULTS.info,
  
  // UI element colors
  border: '#374151',
  borderHover: '#4B5563',
  divider: '#2A3441',
  
  // Component-specific defaults
  input: '#9CA3AF',
  inputBackground: '#1F2937',
  inputBorder: '#374151',
  placeholder: '#6B7280',
  
  disabled: '#374151',
  disabledText: '#6B7280',
  
  // Utility colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  
  // Social (kept for backward compatibility)
  ...SOCIAL,
};

// Legacy exports for backward compatibility
// These maintain the old API structure but use neutral defaults
export const THEME = NEUTRAL_DEFAULTS;

export const COMPONENTS = {
  input: '#808080',
  placeholder: '#9FA5AA',
  navbar: '#F9F9F9',
  block: '#808080',
  icon: '#000000',
};

export const BASE = {
  white: '#FFFFFF',
  black: '#000000',
  grey: '#898989',
  muted: '#9FA5AA',
  transparent: 'transparent',
  neutral: (opacity = 0.65) => `rgba(255,255,255, ${opacity})`,
};

// Legacy LIGHT_MODE and DARK_MODE - deprecated but kept for compatibility
export const LIGHT_MODE = {
  ...BASE,
  background: LIGHT_COLORS.background,
  text: LIGHT_COLORS.text,
  ...COMPONENTS,
  ...THEME,
  ...SOCIAL,
};

export const DARK_MODE = {
  ...BASE,
  background: DARK_COLORS.background,
  text: DARK_COLORS.text,
  ...COMPONENTS,
  ...THEME,
  ...SOCIAL,
};

// Default export with both modern and legacy structures
export default { 
  LIGHT_MODE, 
  DARK_MODE, 
  SHADOWS,
  // New semantic exports
  LIGHT_COLORS,
  DARK_COLORS,
  NEUTRAL_DEFAULTS,
};
