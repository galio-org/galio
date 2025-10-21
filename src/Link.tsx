import React, { forwardRef, useImperativeHandle} from 'react';
import type { JSX } from 'react';
import Typography from './Text';
import { useColors } from './theme';
import { TextStyle, Pressable, ViewStyle, Platform } from 'react-native';

export interface LinkProps {
    children?: React.ReactNode;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    color?: string;
    disabled?: boolean;
    activeOpacity?: number;
}

export interface linkRef {
    press: () => void;
}

const Link = forwardRef<linkRef, LinkProps>(({
    children,
    onPress,
    style,
    textStyle,
    color,
    disabled = false,
    activeOpacity = 0.7,
    ...rest
}, ref): JSX.Element => {
    const colors = useColors();

    const handlePress = () => {
        if (!disabled && onPress) {
            onPress();
        }
    };

    useImperativeHandle(ref, ()=> ({
        press: handlePress,
    }));

    const pressableStyle = [
        style,
        Platform.OS === 'web' && {
            cursor: disabled ? 'not-allowed' : 'pointer',
            userSelect: 'none',
        } as any,
    ];

    // Support theme palette keys for color and textStyle.color
    let resolvedColor = color;
    if (resolvedColor && colors[resolvedColor as keyof typeof colors]) {
        resolvedColor = colors[resolvedColor as keyof typeof colors];
    }
    let resolvedTextColor = textStyle && (textStyle as any).color;
    if (resolvedTextColor && colors[resolvedTextColor as keyof typeof colors]) {
        resolvedTextColor = colors[resolvedTextColor as keyof typeof colors];
    }

    return (
        <Pressable
            onPress={handlePress}
            style={pressableStyle}
            disabled={disabled}
            android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
            accessibilityRole="link"
            accessibilityState={{ disabled }}
        >
            <Typography
                color={resolvedTextColor || resolvedColor || colors.primary}
                style={[
                    {
                        textDecorationLine: 'underline',
                        opacity: disabled ? 0.5 : 1,
                    },
                    textStyle,
                ]}
            >
                {children}
            </Typography>
        </Pressable>
    );
});

export default Link;
