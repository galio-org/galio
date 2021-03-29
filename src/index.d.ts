import React, { ReactNode, ComponentType } from 'react';
import {
  TouchableOpacityProps,
  ImageStyle,
  ViewStyle,
  TextStyle,
  SwitchProps as RNSwitchProps,
  TextInputProps,
} from 'react-native';

declare module 'galio-framework' {
  type IconFamilyType =
    | 'Galio'
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Fontisto'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialIcons'
    | 'MaterialCommunityIcons'
    | 'Octicons'
    | 'Zocial'
    | 'SimpleLineIcons';

  type BaseColorType = string;

  type ButtonColorType = string;

  interface BaseProps {
    [key: string]: any;
  }

  export interface BlockProps extends BaseProps {
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
  export class Block extends React.Component<BlockProps> {}

  export interface ButtonProps extends TouchableOpacityProps, BaseProps {
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
  export class Button extends React.Component<ButtonProps> {}

  export interface CardProps extends BaseProps {
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
  export class Card extends React.Component<CardProps> {}

  export interface CheckBoxProps extends BaseProps {
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
  export class CheckBox extends React.Component<CheckBoxProps> {}

  export interface DeckSwiperProps extends BaseProps {
    style?: ViewStyle;
    components?: ReactNode[];
    onSwipeRight?: () => void;
    onSwipeLeft?: () => void;
    focusedElementStyle?: ViewStyle;
    nextElementStyle?: ViewStyle;
  }
  export class DeckSwiper extends React.Component<DeckSwiperProps> {}

  export interface IconProps extends BaseProps {
    name?: string;
    family?: IconFamilyType;
    size?: number;
    color?: string;
  }
  export class Icon extends React.Component<IconProps> {}

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
  export class Input extends React.Component<InputProps> {}

  export interface NavBarProps extends BaseProps {
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
  export class NavBar extends React.Component<NavBarProps> {}

  export interface RadioProps extends BaseProps {
    color?: string;
    containerStyle?: ViewStyle;
    radioOuterStyle?: ViewStyle;
    radioInnerStyle?: ViewStyle;
    flexDirection?: ViewStyle['flexDirection'];
    initialValue?: boolean;
    label?: string;
    labelStyle?: TextStyle;
    onChange?: () => void;
  }
  export class Radio extends React.Component<RadioProps> {}

  export interface TextProps extends BaseProps {
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
  export class Text extends React.Component<TextProps> {}

  export interface ToastProps extends BaseProps {
    style?: ViewStyle;
    children?: ReactNode;
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
  export class Toast extends React.Component<ToastProps> {}

  export interface SliderProps extends BaseProps {
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
  export class Slider extends React.Component<SliderProps> {}

  export interface SwitchProps extends RNSwitchProps, BaseProps {
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
  export class Switch extends React.Component<SwitchProps> {}

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
      [key: string]: number;
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
      [key: string]: string;
    };
  }
  export const theme: ThemeType = {};
  export interface GalioProviderProps extends BaseProps {
    theme: ThemeType;
  }
  export class GalioProvider extends React.Component<GalioProviderProps> {}

  type NamedStyles = ViewStyle | TextStyle | ImageStyle;
  export function withGalio<T extends ComponentType<any>>(
    Component: T,
    styles: NamedStyles
  ): ComponentType<any>;
}
