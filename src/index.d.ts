import React, { ReactNode, ComponentType, FC, PropsWithChildren } from 'react';
import {
  TouchableOpacityProps,
  ImageStyle,
  ViewStyle,
  TextStyle,
  SwitchProps as RNSwitchProps,
  TextInputProps,
  ImageSourcePropType,
} from 'react-native';

declare module 'galio-framework' {
  type IconFamilyType =
    | 'fontisto'
    | 'Galio'
    | 'zocial'
    | 'octicon'
    | 'material'
    | 'material-community'
    | 'ionicon'
    | 'foundation'
    | 'evilicons'
    | 'entypo'
    | 'font-awesome'
    | 'font-awesome-5'
    | 'simple-line-icon'
    | 'feather'
    | 'antdesign';

  type BaseColorType = string;
  type ButtonColorType = string;

  interface BaseProps {
    children?: ReactNode;
    [key: string]: any;
  }

  export interface AccordionProps extends BaseProps {
    style?: ViewStyle | ViewStyle[];
    title?: string;
    titleStyle?: TextStyle;
    icon?: string;
    iconFamily?: IconFamilyType;
    iconSize?: number;
    iconColor?: string;
    expanded?: boolean;
    onPress?: () => void;
  }
  export const Accordion: FC<AccordionProps>;

  export interface AvatarProps extends BaseProps {
    style?: ViewStyle | ViewStyle[];
    source?: ImageSourcePropType;
    size?: number;
    imageStyle?: ImageStyle;
    color?: string;
    name?: string;
    family?: IconFamilyType;
    icon?: string;
    iconSize?: number;
    iconColor?: string;
    rounded?: boolean;
    borderColor?: string;
    borderWidth?: number;
  }
  export const Avatar: FC<AvatarProps>;

  export interface BlockProps extends BaseProps {
    style?: ViewStyle | ViewStyle[];
    bottom?: boolean;
    card?: boolean;
    center?: boolean;
    flex?: boolean | number;
    fluid?: boolean;
    height?: number;
    left?: boolean;
    middle?: boolean;
    right?: boolean;
    row?: boolean;
    safe?: boolean;
    shadow?: boolean;
    shadowColor?: boolean;
    space?: 'between' | 'around' | 'evenly';
    top?: boolean;
    width?: number;
  }
  export const Block: FC<BlockProps>;

  export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'>, BaseProps {
    style?: ViewStyle | ViewStyle[];
    capitalize?: boolean;
    color?: ButtonColorType;
    disabled?: boolean;
    icon?: string;
    iconColor?: boolean | string;
    iconFamily?: boolean | string;
    iconSize?: number;
    loading?: boolean;
    loadingSize?: 'small' | 'large';
    loadingColor?: string;
    lowercase?: boolean;
    onlyIcon?: boolean;
    opacity?: number;
    round?: boolean;
    shadowColor?: boolean | string;
    shadowless?: boolean;
    size?: 'small' | 'large' | number;
    uppercase?: boolean;
  }
  export const Button: FC<ButtonProps>;

  export interface CardProps extends BaseProps {
    style?: ViewStyle | ViewStyle[];
    card?: boolean;
    shadow?: boolean;
    borderless?: boolean;
    image?: string;
    imageBlockStyle?: string;
    imageStyle?: ImageStyle;
    avatar?: string;
    location?: string;
    locationColor?: boolean | string;
    title?: string;
    titleColor?: string;
    caption?: string;
    captionColor?: string;
    footerStyle?: ViewStyle;
  }
  export const Card: FC<CardProps>;

  export interface CheckboxProps extends BaseProps {
    style?: ViewStyle | ViewStyle[];
    checkboxStyle?: ViewStyle;
    disabled?: boolean;
    flexDirection?: ViewStyle['flexDirection'];
    iconName?: string;
    iconSize?: number;
    iconFamily?: IconFamilyType;
    image?: string;
    imageStyle?: ImageStyle;
    initialValue?: boolean;
    label?: string;
    labelStyle?: TextStyle;
    onChange?: () => void;
  }
  export const Checkbox: FC<CheckboxProps>;

  export interface DeckSwiperProps extends BaseProps {
    style?: ViewStyle | ViewStyle[];
    components?: ReactNode[];
    onSwipeRight?: () => void;
    onSwipeLeft?: () => void;
    focusedElementStyle?: ViewStyle;
    nextElementStyle?: ViewStyle;
  }
  export const DeckSwiper: FC<DeckSwiperProps>;

  export interface IconProps extends BaseProps {
    style?: ViewStyle | ViewStyle[];
    name?: string;
    family?: IconFamilyType;
    size?: number;
    color?: string;
  }
  export const Icon: FC<IconProps>;

  export interface InputProps
    extends Omit<
        TextInputProps,
        | 'style'
        | 'keyboardType'
        | 'secureTextEntry'
        | 'placeholderTextColor'
        | 'underlineColorAndroid'
      >,
      BaseProps {
    style?: ViewStyle | ViewStyle[];
    type?: TextInputProps['keyboardType'];
    password?: boolean;
    label?: string;
    bgColor?: string;
    rounded?: boolean;
    borderless?: boolean;
    viewPass?: boolean;
    icon?: string;
    iconColor?: string;
    family?: IconFamilyType;
    color?: string;
    help?: string;
    left?: boolean;
    right?: boolean;
    topHelp?: boolean;
    bottomHelp?: boolean;
    iconSize?: number;
  }
  export const Input: FC<InputProps>;

  export interface LinkProps extends Omit<TouchableOpacityProps, 'style'>, BaseProps {
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle;
    color?: string;
    size?: number;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
  }
  export const Link: FC<LinkProps>;

  export interface NavBarProps extends BaseProps {
    style?: ViewStyle | ViewStyle[];
    back?: boolean;
    hideLeft?: boolean;
    hideRight?: boolean;
    left?: ReactNode;
    leftIconColor?: string;
    leftIconFamily?: string;
    leftIconName?: string;
    leftIconSize?: number;
    leftStyle?: ViewStyle;
    onLeftPress?: () => void;
    right?: ReactNode;
    rightStyle?: ViewStyle;
    title?: ReactNode;
    titleNumberOfLines?: number;
    titleStyle?: ViewStyle;
    transparent?: boolean;
  }
  export const NavBar: FC<NavBarProps>;

  export interface RadioProps extends BaseProps {
    style?: ViewStyle | ViewStyle[];
    color?: string;
    containerStyle?: ViewStyle;
    radioOuterStyle?: ViewStyle;
    radioInnerStyle?: ViewStyle;
    flexDirection?: ViewStyle['flexDirection'];
    initialValue?: boolean;
    label?: string;
    labelStyle?: TextStyle;
    onChange?: () => void;
    value?: boolean;
  }
  export const Radio: FC<RadioProps>;

  export interface SliderProps extends BaseProps {
    style?: ViewStyle | ViewStyle[];
    activeColor?: string;
    value?: number;
    disabled?: boolean;
    minimumValue?: number;
    maximumValue?: number;
    trackStyle?: ViewStyle;
    thumbStyle?: ViewStyle;
    step?: number;
    onSlidingComplete?: () => void;
    onSlidingStart?: () => void;
    onValueChange?: () => void;
  }
  export const Slider: FC<SliderProps>;

  export interface SwitchProps extends Omit<RNSwitchProps, 'style'>, BaseProps {
    style?: ViewStyle | ViewStyle[];
    color?: BaseColorType;
    disabled?: boolean;
    initialValue?: boolean;
    trackColor?: {
      false: string;
      true: string;
    };
    ios_backgroundColor?: string;
    onChange?: () => void;
  }
  export const Switch: FC<SwitchProps>;

  export interface TextProps extends BaseProps {
    style?: ViewStyle | ViewStyle[];
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    p?: boolean;
    size?: number;
    color?: string;
    muted?: boolean;
    bold?: boolean;
    italic?: boolean;
  }
  export const Text: FC<TextProps>;

  export interface ToastProps extends BaseProps {
    style?: ViewStyle | ViewStyle[];
    isShow?: boolean;
    positionIndicator?: 'top' | 'center' | 'bottom';
    positionOffset?: number;
    fadeInDuration?: number;
    fadeOutDuration?: number;
    color?: BaseColorType;
    round?: boolean;
    textStyle?: TextStyle;
    useNativeDriver?: boolean;
  }
  export const Toast: FC<ToastProps>;

  interface ThemeType {
    SIZES?: {
      BASE?: number;
      FONT?: number;
      ICON?: number;
      OPACITY?: number;
      BORDER_RADIUS?: number;
      BORDER_WIDTH?: number;
      BUTTON_WIDTH?: number;
      BUTTON_HEIGHT?: number;
      BUTTON_SHADOW_RADIUS?: number;
      BLOCK_SHADOW_OPACITY?: number;
      BLOCK_SHADOW_RADIUS?: number;
      ANDROID_ELEVATION?: number;
      CARD_BORDER_RADIUS?: number;
      CARD_BORDER_WIDTH?: number;
      CARD_WIDTH?: number;
      CARD_MARGIN_VERTICAL?: number;
      CARD_FOOTER_HORIZONTAL?: number;
      CARD_FOOTER_VERTICAL?: number;
      CARD_AVATAR_WIDTH?: number;
      CARD_AVATAR_HEIGHT?: number;
      CARD_AVATAR_RADIUS?: number;
      CARD_IMAGE_HEIGHT?: number;
      CARD_ROUND?: number;
      CARD_ROUNDED?: number;
      INPUT_BORDER_RADIUS?: number;
      INPUT_BORDER_WIDTH?: number;
      INPUT_HEIGHT?: number;
      INPUT_HORIZONTAL?: number;
      INPUT_TEXT?: number;
      INPUT_LABEL_TEXT?: number;
      INPUT_LABEL_BOTTOM?: number;
      INPUT_HELP_TEXT?: number;
      INPUT_ROUNDED?: number;
      NAVBAR_HEIGHT?: number;
      NAVBAR_VERTICAL?: number;
      NAVBAR_TITLE_FLEX?: number;
      NAVBAR_TITLE_HEIGHT?: number;
      NAVBAR_TITLE_TEXT?: number;
      NAVBAR_LEFT_FLEX?: number;
      NAVBAR_LEFT_HEIGHT?: number;
      NAVBAR_LEFT_MARGIN?: number;
      NAVBAR_RIGHT_FLEX?: number;
      NAVBAR_RIGHT_HEIGHT?: number;
      NAVBAR_RIGHT_MARGIN?: number;
      [key: string]: number | undefined;
    };
    COLORS?: {
      FACEBOOK?: string;
      TWITTER?: string;
      DRIBBBLE?: string;
      THEME?: string;
      PRIMARY?: string;
      INFO?: string;
      ERROR?: string;
      WARNING?: string;
      INPUT?: string;
      PLACEHOLDER?: string;
      NAVBAR?: string;
      BLOCK?: string;
      ICON?: string;
      WHITE?: string;
      BLACK?: string;
      GREY?: string;
      MUTED?: string;
      TRANSPARENT?: string;
      NEUTRAL?: string;
      [key: string]: string | undefined;
    };
  }
  
  export const theme: ThemeType;
  
  // Semantic color types (modern API)
  export interface SemanticColors {
    background: string;
    surface: string;
    surfaceVariant: string;
    text: string;
    textSecondary: string;
    textTertiary: string;
    onPrimary: string;
    onSuccess: string;
    onError: string;
    onWarning: string;
    onInfo: string;
    onBackground: string;
    onSurface: string;
    primary: string;
    primaryHover: string;
    primaryActive: string;
    success: string;
    successHover: string;
    error: string;
    errorHover: string;
    warning: string;
    warningHover: string;
    info: string;
    infoHover: string;
    border: string;
    borderHover: string;
    divider: string;
    input: string;
    inputBackground: string;
    inputBorder: string;
    placeholder: string;
    disabled: string;
    disabledText: string;
    white: string;
    black: string;
    transparent: string;
    [key: string]: string;
  }

  // Modern theme interface
  export interface ModernTheme {
    colors: SemanticColors;
    sizes: ThemeType['SIZES'];
    mode: 'light' | 'dark';
    // Legacy props for backward compatibility
    COLORS?: ThemeType['COLORS'];
    SIZES?: ThemeType['SIZES'];
    [key: string]: any;
  }
  
  export interface GalioProviderProps extends PropsWithChildren<{
    mode?: 'light' | 'dark' | 'auto';
    theme?: {
      // Modern API (recommended)
      colors?: Partial<SemanticColors>;
      sizes?: Partial<ThemeType['SIZES']>;
      // Legacy API (deprecated)
      COLORS?: Partial<ThemeType['COLORS']>;
      SIZES?: Partial<ThemeType['SIZES']>;
      customTheme?: Record<string, any>;
    };
  }> {}
  
  export const GalioProvider: FC<GalioProviderProps>;

  type NamedStyles = ViewStyle | TextStyle | ImageStyle;
  
  export function withGalio<T extends ComponentType<any>>(
    Component: T,
    styles: NamedStyles
  ): ComponentType<any>;

  // Modern hooks (recommended)
  export function useTheme(): ModernTheme;
  export function useColors(): SemanticColors;
  
  // Legacy hooks (deprecated)
  export function useGalioTheme(): ThemeType;
  export function useThemeColors(): Record<string, string>;
  export function useGalioStyles<T>(styleFactory?: (theme: ModernTheme) => T): T | undefined;
}

declare module '*.ttf' {
  const content: any;
  export default content;
}
