import React, { ReactNode } from 'react';
import {
  TouchableOpacityProps,
  ImageStyle,
  ViewStyle,
  TextStyle,
  SwitchProps as RNSwitchProps,
} from 'react-native';

declare module 'galio-framework' {
  type IconFamilyType =
    | 'Galio'
    | 'antdesign'
    | 'FontAwesome'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome5'
    | 'FontAwesome5Brands'
    | 'Fontisto'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'SimpleLineIcons'
    | 'Octicons'
    | 'Zocial';

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
    space?: string;
    top?: boolean;
    width?: number;
  }
  export class Block extends React.Component<BlockProps> {}

  export interface ButtonProps extends TouchableOpacityProps, BaseProps {
    capitalize?: boolean;
    color?: ButtonColorType;
    disabled?: boolean;
    icon?: boolean;
    iconColor?: boolean | string;
    iconFamily?: boolean | string;
    iconSize?: number;
    loading?: boolean;
    loadingSize?: 'small' | 'large';
    lowercase?: boolean;
    onlyIcon?: boolean;
    opacity?: number;
    radius?: number;
    shadowColor?: boolean | string;
    shadowless?: boolean;
    size?: 'small' | 'large';
    uppercase?: boolean;
  }
  export class Button extends React.Component<ButtonProps> {}

  export interface CardProps extends BaseProps {
    card?: boolean;
    shadow?: boolean;
    borderless?: boolean;
    image?: string;
    imageBlockStyle?: strubg;
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

  export interface Icon extends BaseProps {
    name?: string;
    family?: IconFamilyType;
    size?: number;
    color?: string;
  }
  export class Icon extends React.Component<IconProps> {}

  export interface InputProps extends BaseProps {
    type?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
    password?: boolean;
    placeholderTextColor?: string;
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
    placeholder?: string;
    iconSize?: number;
    onChangeText?: (text: string) => void;
  }
  export class Input extends React.Component<InputProps> {}

  export interface NavBarProps extends BaseProps {
    back?: boolean;
    transparent?: boolean;
    title?: ReactNode;
    titleStyle?: ViewStyle;
    left?: ReactNode;
    leftStyle?: ViewStyle;
    leftIconColor?: string;
    right?: ReactNode;
    rightStyle?: ViewStyle;
    onLeftPress?: () => void;
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
}
