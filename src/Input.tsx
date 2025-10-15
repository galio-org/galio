import React,{forwardRef, useImperativeHandle, useRef, useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, KeyboardTypeOptions, ViewStyle, TextStyle, Platform } from 'react-native';
import Icon from './Icon';
import  { useTheme, useColors } from './theme';

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
  // TextInput props
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

const Input = forwardRef<InputRef, InputProps>(({
  style,
  textInputStyle,
  type = 'default',
  placeholderTextColor,
  label,
  labelStyles,
  color = 'primary',
  help,
  helpStyles,
  bgColor,
  borderless = false,
  viewPass = false,
  rounded = false,
  icon = false,
  family,
  left = true,
  right = false,
  iconColor = 'primary',
  topHelp = true,
  bottomHelp = false,
  iconSize = 16,
  iconContent,
  password = false,
  error,
  onRef,
  ...rest
}, ref)=> {
  const theme = useTheme();
  const colors = useColors();
  const [isPassword, setIsPassword] = useState(password);
  const inputRef = useRef<TextInput>(null)

  useImperativeHandle(ref, ()=> ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    clear: () => inputRef.current?.clear(),
    isFocused: () => inputRef.current?.isFocused() || false,
  }));

  useEffect(()=> {
    setIsPassword(password);
  },[password]);

  const inputViewStyles = [
    styles(theme, colors).inputStyle,
    styles(theme, colors).inputContainer,
    bgColor && { backgroundColor: bgColor},
    rounded && styles(theme, colors).rounded,
    borderless && styles(theme, colors).borderless,
    error && { borderColor: colors.error},
    rest.multiline && { minHeight: theme.sizes.INPUT_HEIGHT, height: 'auto' as any},
    style,
  ].filter(Boolean) as ViewStyle[];

  const inputStyles = [
    styles(theme, colors).inputView,
    borderless && icon && styles(theme, colors).inputIcon,
    styles(theme, colors).inputText,
    color && { color},
    rest.multiline && { textAlignVertical: 'top' as const },
    textInputStyle || {}
  ].filter(Boolean);

  const iconInstance = icon ? (
    <Icon
      name={icon as string}
      family={family as string}
      size={iconSize || theme.sizes.BASE * 1.0625}
      style={{ marginRight: left && !right ? 4 : 0 }}
      color={(error && colors.error) || iconColor || placeholderTextColor || colors.placeholder}
    />
  ) : (
    iconContent
  );

  const viewPassElement = password && viewPass && (
    <Pressable style={{ marginLeft: 2 }} onPress={() => setIsPassword(!isPassword)}>
      <Icon
        size={iconSize || theme.sizes.BASE * 1.0625}
        color={iconColor || colors.text}
        name="eye"
        family="entypo"
      />
    </Pressable>
  );

  const labelContent = label && label.length > 0 && (
    <Text style={[styles(theme, colors).label, labelStyles || {}]}>{label}</Text>
  );

  const helpContent = help && help.length > 0 && (
    <Text style={[styles(theme, colors).helpText, helpStyles || {}]}>{help}</Text>
  );

  return(
    <View
      style ={{
        marginVertical: theme.sizes.BASE /2,
        alignContent: 'center',
      }}
    >
      {labelContent}
      {topHelp && !bottomHelp && helpContent}
      <View style={inputViewStyles}>
        {left && !right && iconInstance}
        <TextInput
          ref={(r) => {
            if (r) {
              (inputRef as any).current = r;
              onRef?.(r);
            }
          }}
          style={inputStyles}
          keyboardType={type}
          secureTextEntry={isPassword}
          placeholderTextColor={placeholderTextColor}
          underlineColorAndroid="transparent"
          {...rest}
        />
        {right && iconInstance}
        {viewPassElement}
      </View>
      {bottomHelp && helpContent}
    </View>
  );
});

Input.displayName = 'Input';

const styles = (theme: ReturnType<typeof useTheme>, colors: ReturnType<typeof useColors>) => {
  return StyleSheet.create({
    inputStyle: {
      backgroundColor: colors.inputBackground,
      borderRadius: theme.sizes.INPUT_BORDER_RADIUS,
      borderWidth: theme.sizes.INPUT_BORDER_WIDTH,
      borderColor: colors.inputBorder,
      height: theme.sizes.INPUT_HEIGHT,
      paddingHorizontal: theme.sizes.INPUT_HORIZONTAL,
      width: '100%',
    },
    inputText: {
      color: colors.input,
      fontSize: theme.sizes.INPUT_TEXT,
      textDecorationColor: 'transparent',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView: {
      flex: 1,
    },
    inputIcon: {
      marginHorizontal: theme.sizes.BASE,
    },
    label: {
      fontWeight: '500',
      fontSize: theme.sizes.INPUT_TEXT,
      marginVertical: theme.sizes.INPUT_VERTICAL_LABEL,
      paddingHorizontal: theme.sizes.INPUT_HORIZONTAL
    },
    helpText: {
      color: colors.warning,
      fontSize: 14,
      marginVertical: 8,
      paddingHorizontal: 16,
    },
    rounded: {
      borderRadius: theme.sizes.INPUT_ROUNDED,
    },
    borderless: {
      borderColor: 'transparent',
      borderWidth: 0,
    }
  });
};

  export default Input;
