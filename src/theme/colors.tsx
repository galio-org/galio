// Semantic Color Tokens - Modern React Native Theming (2025)

// Base color palette - shared across modes
export const SOCIAL = {
  facebook: '#3B5998',
  twitter: '#5BC0DE',
  dribbble: '#EA4C89',
};

export const BRAND_COLORS = {
  primary: '#FE2472',
  primaryDark: '#F4075C',
  primaryLight: '#FF8AB9',
  
  info: '#0E2ADD',
  infoDark: '#0520D0',
  infoLight: '#8794FF',
  
  danger: '#FF3F31',
  dangerDark: '#F43324',
  dangerLight: '#FF7167',
  
  warning: '#FF9C09',
  warningDark: '#EE8E00',
  warningLight: '#FFCC76',
  
  success: '#18CE0F',
  successDark: '#24AD12',
  successLight: '#88F38E',
};

export const SHADOWS = {
  default: {
    boxShadow: '0px 4px 4.65px rgba(0,0,0,0.1)',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
  },
  strong: {
    boxShadow: '0px 8px 6.27px rgba(0,0,0,0.1)',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 6.27,
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
  
  // Semantic state colors (use brand colors)
  primary: BRAND_COLORS.primary,
  primaryHover: BRAND_COLORS.primaryDark,
  primaryActive: BRAND_COLORS.primaryDark,
  
  success: BRAND_COLORS.success,
  successHover: BRAND_COLORS.successDark,
  
  error: BRAND_COLORS.danger,
  errorHover: BRAND_COLORS.dangerDark,
  
  warning: BRAND_COLORS.warning,
  warningHover: BRAND_COLORS.warningDark,
  
  info: BRAND_COLORS.info,
  infoHover: BRAND_COLORS.infoDark,
  
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
  primary: BRAND_COLORS.primaryLight,
  primaryHover: BRAND_COLORS.primary,
  primaryActive: BRAND_COLORS.primary,
  
  success: BRAND_COLORS.successLight,
  successHover: BRAND_COLORS.success,
  
  error: BRAND_COLORS.dangerLight,
  errorHover: BRAND_COLORS.danger,
  
  warning: BRAND_COLORS.warningLight,
  warningHover: BRAND_COLORS.warning,
  
  info: BRAND_COLORS.infoLight,
  infoHover: BRAND_COLORS.info,
  
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
// These maintain the old API structure but use new semantic tokens
export const THEME = BRAND_COLORS;

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
  BRAND_COLORS,
};
