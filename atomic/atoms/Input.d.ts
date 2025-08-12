import React from 'react';
import { TextInput, KeyboardTypeOptions, ViewStyle, TextStyle } from 'react-native';
export interface InputProps {
    style?: ViewStyle;
    textInputStyle?: TextStyle;
    type?: KeyboardTypeOptions;
    placeholderTextColor?: string;
    label?: string;
    labelStyles?: TextStyle;
    color?: string;
    help?: string;
    helpStyles?: TextStyle;
    bgColor?: string;
    borderless?: boolean;
    viewPass?: boolean;
    rounded?: boolean;
    icon?: string | boolean;
    family?: string;
    left?: boolean;
    right?: boolean;
    iconColor?: string;
    topHelp?: boolean;
    bottomHelp?: boolean;
    iconSize?: number;
    iconContent?: React.ReactNode;
    password?: boolean;
    error?: boolean;
    onRef?: (ref: TextInput) => void;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onSubmitEditing?: () => void;
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoCorrect?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
    maxLength?: number;
    editable?: boolean;
    selectTextOnFocus?: boolean;
    clearButtonMode?: 'never' | 'while-editing' | 'unless-editing' | 'always';
    keyboardType?: KeyboardTypeOptions;
    textContentType?: any;
    autoComplete?: any;
}
export interface InputRef {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    isFocused: () => boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>>;
export default Input;
//# sourceMappingURL=Input.d.ts.map