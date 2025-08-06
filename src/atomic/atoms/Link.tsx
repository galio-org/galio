import React, { forwardRef, useImperativeHandle} from 'react';
import type { JSX } from 'react';
import Typography from '../ions/text';
import { useGalioTheme } from '../../theme';
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
    const theme = useGalioTheme();

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
                color={color || theme.COLORS.LIGHT_MODE.primary}
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