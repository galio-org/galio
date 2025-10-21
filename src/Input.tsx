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
  /**
   * @deprecated Use iconProps.color instead. Will be removed in a future version.
   */
  iconColor?: string;
  /**
   * @deprecated Use iconProps.size instead. Will be removed in a future version.
   */
  iconSize?: number;
  iconProps?: {
    color?: string;
    size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    style?: any;
    family?: string;
    [key: string]: any;
  };
  topHelp?: boolean;
  bottomHelp?: boolean;
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
  iconColor = 'primary', // legacy
  iconSize = 16, // legacy
  iconProps = {},
  topHelp = true,
  bottomHelp = false,
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

  // Use theme color for bgColor if it's a theme key
  let resolvedBgColor = bgColor;
  if (resolvedBgColor && colors[resolvedBgColor as keyof typeof colors]) {
    resolvedBgColor = colors[resolvedBgColor as keyof typeof colors];
  }
  const inputViewStyles = [
    styles(theme, colors).inputStyle,
    styles(theme, colors).inputContainer,
    resolvedBgColor && { backgroundColor: resolvedBgColor },
    rounded && styles(theme, colors).rounded,
    borderless && styles(theme, colors).borderless,
    error && { borderColor: colors.error },
    rest.multiline && { minHeight: theme.sizes.INPUT_HEIGHT, height: 'auto' as any },
    style,
  ].filter(Boolean) as ViewStyle[];

  // Use theme color for text color if it's a theme key
  let resolvedTextColor = color;
  if (resolvedTextColor && colors[resolvedTextColor as keyof typeof colors]) {
    resolvedTextColor = colors[resolvedTextColor as keyof typeof colors];
  }
  const inputStyles = [
    styles(theme, colors).inputView,
    borderless && icon && styles(theme, colors).inputIcon,
    styles(theme, colors).inputText,
    resolvedTextColor && { color: resolvedTextColor },
    rest.multiline && { textAlignVertical: 'top' as const },
    textInputStyle || {}
  ].filter(Boolean);

  // Prefer new iconProps API, fallback to legacy iconColor/iconSize
  let resolvedIconColor = (error && colors.error)
    || iconProps.color
    || iconColor
    || placeholderTextColor
    || colors.placeholder;
  // If resolvedIconColor matches a theme color, use it
  if (resolvedIconColor && colors[resolvedIconColor as keyof typeof colors]) {
    resolvedIconColor = colors[resolvedIconColor as keyof typeof colors];
  }
  let resolvedIconSize = iconProps.size || iconSize || theme.sizes.BASE * 1.0625;
  // Warn if using legacy props
  useEffect(() => {
    if (iconColor !== undefined && iconProps.color === undefined) {
      // eslint-disable-next-line no-console
      console.warn('[Input] iconColor is deprecated. Use iconProps.color instead.');
    }
    if (iconSize !== undefined && iconProps.size === undefined) {
      // eslint-disable-next-line no-console
      console.warn('[Input] iconSize is deprecated. Use iconProps.size instead.');
    }
  }, [iconColor, iconSize, iconProps.color, iconProps.size]);

  // Use theme color for icon if it's a theme key
  let iconThemeColor = resolvedIconColor;
  if (iconThemeColor && colors[iconThemeColor as keyof typeof colors]) {
    iconThemeColor = colors[iconThemeColor as keyof typeof colors];
  }
  const iconInstance = icon ? (
    <Icon
      name={icon as string}
      family={iconProps.family || (family as string)}
      size={resolvedIconSize}
      style={{ marginRight: left && !right ? 4 : 0, ...(iconProps.style || {}) }}
      color={iconThemeColor}
      {...iconProps}
    />
  ) : (
    iconContent
  );

  // Use theme color for viewPass icon if it's a theme key
  let viewPassColor = iconProps.color || iconColor || colors.text;
  if (viewPassColor && colors[viewPassColor as keyof typeof colors]) {
    viewPassColor = colors[viewPassColor as keyof typeof colors];
  }
  const viewPassElement = password && viewPass && (
    <Pressable style={{ marginLeft: 2 }} onPress={() => setIsPassword(!isPassword)}>
      <Icon
        size={iconProps.size || iconSize || theme.sizes.BASE * 1.0625}
        color={viewPassColor}
        name="eye"
        family="entypo"
      />
    </Pressable>
  );

  // Use theme color for label if it's a theme key
  let resolvedLabelColor = labelStyles && (labelStyles as any).color;
  if (resolvedLabelColor && colors[resolvedLabelColor as keyof typeof colors]) {
    resolvedLabelColor = colors[resolvedLabelColor as keyof typeof colors];
  }
  const labelContent = label && label.length > 0 && (
    <Text style={[styles(theme, colors).label, labelStyles, resolvedLabelColor ? { color: resolvedLabelColor } : {}]}>{label}</Text>
  );

  // Use theme color for help text if it's a theme key
  let resolvedHelpColor = helpStyles && (helpStyles as any).color;
  if (resolvedHelpColor && colors[resolvedHelpColor as keyof typeof colors]) {
    resolvedHelpColor = colors[resolvedHelpColor as keyof typeof colors];
  }
  const helpContent = help && help.length > 0 && (
    <Text style={[styles(theme, colors).helpText, helpStyles, resolvedHelpColor ? { color: resolvedHelpColor } : {}]}>{help}</Text>
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
          placeholderTextColor={
            placeholderTextColor && colors[placeholderTextColor as keyof typeof colors]
              ? colors[placeholderTextColor as keyof typeof colors]
              : placeholderTextColor || colors.placeholder
          }
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
