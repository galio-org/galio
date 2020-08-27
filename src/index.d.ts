import React, { ReactNode, ComponentType } from 'react';
import {
  TouchableOpacityProps,
  ViewStyle,
  SwitchProps as RNSwitchProps
} from 'react-native';

declare module 'galio-framework' {

  interface BaseProps {
    [key: string]: any;
  }

  // Button
  export interface ButtonProps extends TouchableOpacityProps, BaseProps {
    color?: 'theme' | 'primary' | 'info' | 'danger' | 'warning' | 'success' | 'black' | 'grey' | 'secondary' | 'transparent' | 'white' | string;
    size?: 'large' | 'default' | 'small' | number;
    iconColor?: string;
    disabled?: boolean;
    uppercase?: boolean;
    lowercase?: boolean;
    capitalize?: boolean;
    loading?: boolean;
    loadingSize?: 'small' | 'default' | 'large';
    opacity?: number;
    shadowless?: boolean;
    shadowColor?: boolean | string;
    onlyIcon?: boolean;
    icon?: boolean | string;
    iconRight?: string | boolean;
    iconFamily?: boolean | string;
    iconSize?: number;
    styles?: any;
    theme?: any;
  }
  export class Button extends React.Component<ButtonProps> {}

  // Input
  export interface InputProps extends BaseProps {
    style?: any;
    textInputStyle?: any;
    type?: string;
    password?: boolean;
    placeholderTextColor?: string;
    label?: string;
    bgColor?: string;
    rounded?: boolean;
    borderless?: boolean;
    viewPass?: boolean;
    iconColor?: string;
    icon?: string;
    family?: string;
    color?: string;
    help?: string;
    left?: boolean;
    right?: boolean;
    topHelp?: boolean;
    bottomHelp?: boolean;
    styles?: any;
    iconSize?: number;
    iconContent?: any;
    theme?: any;
    onRef?: () => void;
  }
  export class Input extends React.Component<InputProps> {}

  // Link
  export interface LinkProps extends BaseProps {
    children?: any;
    theme?: any;
    onPress: () => void;
  }
  export class Link extends React.Component<LinkProps> {}

  // Icon
  export interface IconProps extends BaseProps {
    name: string;
    family: string;
    size?: number;
    color?: string;
    styles?: any;
    theme?: any;
  }
  export class Icon extends React.Component<IconProps> {}

  // Text
  export interface TextProps extends BaseProps {
    children?: any;
    style?: any;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    p?: boolean;
    body?: boolean;
    small?: boolean;
    size?: number;
    color?: string;
    muted?: boolean;
    bold?: boolean;
    italic?: boolean;
    styles?: any;
    theme?: any;
  }
  export class Text extends React.Component<TextProps> {}

  // GalioProvider
  export interface GalioProviderProps extends BaseProps {
    children?: any;
    theme?: any;
  }
  export class GalioProvider extends React.Component<GalioProviderProps> {}

  // Accordion
  export interface AccordionProps extends BaseProps {
    theme?: any;
    dataArray?: [];
    opened?: number;
    listStyle?: any;
    style?: any;
    icon?: any;
    expandedIcon?: any;
    headerStyle?: any;
    contentStyle?: any;
    onAccordionClose?: () => void;
    onAccordionOpen?: () => void;
  }
  export class Accordion extends React.Component<AccordionProps> {}

  // Avatar
  export interface AvatarProps extends BaseProps {
    label?: string;
    labelColor?: string;
    size?: number;
    source?: object | number;
    backgroundColor?: string;
    imageProps?: object;
    imageStyle?: object | [] | number;
    containerStyle?: ViewStyle;
    styles?: any;
    theme?: any;
  }
  export class Avatar extends React.Component<AvatarProps> {}

  // Block
  export interface BlockProps extends BaseProps {
    row?: boolean;
    flex?: boolean | number;
    center?: boolean;
    middle?: boolean;
    top?: boolean;
    bottom?: boolean;
    right?: boolean;
    card?: boolean;
    left?: boolean;
    shadow?: boolean;
    space?: string;
    fluid?: boolean;
    height?: number;
    width?: number;
    shadowColor?: string;
    safe?: boolean;
    styles?: any;
    theme?: any;
  }
  export class Block extends React.Component<BlockProps> {}

  // Card
  export interface CardProps extends BaseProps {
    card?: boolean;
    shadow?: boolean;
    borderless?: boolean;
    styles?: any;
    theme?: any;
    title?: string;
    titleColor?: string;
    caption?: string;
    captionColor?: string;
    avatar?: string;
    footerStyle?: object;
  }
  export class Card extends React.Component<CardProps> {}

  // Checkbox
  export interface CheckboxProps extends BaseProps {
    checkboxStyle?: any;
    color?: 'primary' | 'theme' | 'error' | 'warning' | 'success' | 'transparent' | 'info' | string;
    disabled?: boolean;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | string;
    iconColor?: string;
    iconName?: string;
    iconSize?: number;
    iconFamily?: string;
    image?: string;
    imageStyle?: any;
    initialValue?: boolean;
    label: string;
    labelStyle?: any;
    onChange?: () => void;
    styles?: any;
    theme?: any;
  }
  export class Checkbox extends React.Component<CheckboxProps> {}

  // DeckSwiper
  export interface DeckSwiperProps extends BaseProps {
    components: [];
    onSwipeRight?: () => void;
    onSwipeLeft?: () => void;
    focusedElementStyle?: any;
    nextElementStyle?: any;
    style?: any;
  }
  export class DeckSwiper extends React.Component<DeckSwiperProps> {}

  // NavBar
  export interface NavBarProps extends BaseProps {
    back?: boolean;
    transparent?: boolean;
    title?: ReactNode | string;
    titleStyle?: any;
    left?: ReactNode;
    leftStyle?: any;
    leftIconColor?: string;
    onLeftPress?: () => void;
    leftHitSlop?: any;
    right?: ReactNode;
    rightStyle?: any;
    style?: any;
    styles?: any;
    theme?: any;
    leftIconName?: string;
    leftIconFamily?: string;
    hideLeft?: boolean;
    hideRight?: boolean;
  }
  export class NavBar extends React.Component<NavBarProps> {}

  // Radio
  export interface RadioProps extends BaseProps {
    color?: string;
    containerStyle?: any;
    radioOuterStyle?: any;
    radioInnerStyle?: any;
    disabled?: boolean;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | string;
    initialValue?: boolean;
    label: string;
    labelStyle?: any;
    onChange?: () => void;
    styles?: any;
    theme?: any;
  }
  export class Radio extends React.Component<RadioProps> {}

  // Slider
  export interface SliderProps extends BaseProps {
    value?: number;
    disabled?: boolean;
    minimumValue?: number;
    maximumValue?: number;
    trackStyle?: any;
    thumbStyle?: any;
    step?: number;
    styles?: any;
    onSlidingComplete?: () => void;
    onSlidingStart?: () => void;
    onValueChange?: () => void;
  }
  export class Slider extends React.Component<SliderProps> {}

  // Switch
  export interface SwitchProps extends RNSwitchProps, BaseProps {
    color?: 'primary' | 'theme' | 'error' | 'warning' | 'success' | 'info' | string;
    disabled?: boolean;
    initialValue?: boolean;
    onChange: () => void;
  }
  export class Switch extends React.Component<SwitchProps> {}

  // Toast
  export interface ToastProps extends BaseProps {
    children: ReactNode;
    isShow: boolean;
    positionIndicator: 'top' | 'center' | 'bottom';
    positionOffset?: number;
    fadeInDuration?: number;
    fadeOutDuration?: number;
    color?: 'primary' | 'theme' | 'info' | 'error' | 'warning' | 'success' | string;
    round?: boolean;
    style?: ViewStyle;
    textStyle?: ViewStyle;
    styles?: any;
    theme?: any;
  }
  export class Toast extends React.Component<ToastProps> {}

  // Social colors
  export interface SocialProps extends BaseProps {
    FACEBOOK?: string;
    TWITTER?: string;
    DRIBBBLE?: string;
  }

  // Theme colors
  export interface ThemeProps extends BaseProps {
    THEME?: string;
    PRIMARY?: string;
    DARK_PRIMARY?: string;
    LIGHT_PRIMARY?: string;
    BRIGHT_PRIMARY?: string;
    INFO?: string;
    DARK_INFO?: string;
    LIGHT_INFO?: string;
    BRIGHT_INFO?: string;
    DANGER?: string;
    DARK_DANGER?: string;
    LIGHT_DANGER?: string;
    BRIGHT_DANGER?: string;
    WARNING?: string;
    DARK_WARNING?: string;
    LIGHT_WARNING?: string;
    BRIGHT_WARNING?: string;
    SUCCESS?: string;
    DARK_SUCCESS?: string;
    LIGHT_SUCCESS?: string;
    BRIGHT_SUCCESS?: string;
    WHITE?: string;
    DARK_BLACK?: string;
    BLACK?: string;
    BRIGHT_BLACK?: string;
    LIGHT_BLACK?: string;
    DARK_SECONDARY?: string;
    SECONDARY?: string;
    BRIGHT_SECONDARY?: string;
    LIGHT_SECONDARY?: string;
    DARK_GREY?: string;
    GREY?: string;
    BRIGHT_GREY?: string;
    LIGHT_GREY?: string;
    NEUTRAL?: string;
  }

  // Components colors
  export interface ComponentsProps extends BaseProps {
    INPUT?: string;
    PLACEHOLDER?: string;
    NAVBAR?: string;
    BLOCK?: string;
    ICON?: string;
  }

  export type BASE = number;

  export interface GalioThemeProps extends BaseProps {
    COLORS: {
      WHITE?: string;
      BLACK?: string;
      GREY?: string;
      MUTED?: string;
      TRANSPARENT?: string;
      NEUTRAL?: string;
    } & ComponentsProps & ThemeProps & SocialProps;
    SIZES: {
      BASE?: BASE;
      FONT?: BASE,
      OPACITY?: number;
      BORDER_RADIUS?: number;
      BORDER_WIDTH?: number;

      // Typography
      H1?: number;
      H2?: number;
      H3?: number;
      H4?: number;
      H5?: number;
      H6?: number;
      BODY?: number;
      SMALL?: number;

      // Icons
      ICON?: BASE,
      ICON_MEDIUM?: number;
      ICON_LARGE?: number;

      // Button styles
      BUTTON_WIDTH?: number;
      BUTTON_HEIGHT?: number;
      BUTTON_SHADOW_RADIUS?: number;

      // Block styles
      BLOCK_SHADOW_OPACITY?: number;
      BLOCK_SHADOW_RADIUS?: number;
      ANDROID_ELEVATION?: number;

      // Card styles
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

      // Input styles
      INPUT_BORDER_RADIUS?: number;
      INPUT_BORDER_WIDTH?: number;
      INPUT_HEIGHT?: number;
      INPUT_HORIZONTAL?: number;
      INPUT_VERTICAL_TEXT?: number;
      INPUT_VERTICAL_LABEL?: number;
      INPUT_TEXT?: number;
      INPUT_ROUNDED?: number;

      // NavBar styles
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

      // Checkbox
      CHECKBOX_WIDTH?: number;
      CHECKBOX_HEIGHT?: number;

      // Slider
      TRACK_SIZE?: number;
      THUMB_SIZE?: number;

      // Radio Button
      RADIO_WIDTH?: number;
      RADIO_HEIGHT?: number;
      RADIO_THICKNESS?: number;
    }
  }

  // useGalioTheme
  export function useGalioTheme(): GalioThemeProps;

  // withGalio
  export function withGalio<T extends ComponentType<any>>(
    Component: T,
    styles: any
  ): ComponentType<any>;

  // Default Theme
  const GalioTheme: GalioThemeProps;
  export default GalioTheme;

}
