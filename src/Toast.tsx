import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Animated, View } from 'react-native';
import { useTheme, useColors } from './theme';
import Text from './Text';

const { height, width } = Dimensions.get('screen');

interface ToastProps {
    children: React.ReactNode;
    isShow: boolean;
    positionIndicator?: 'top' | 'center' | 'bottom';
    positionOffset?: number;
    fadeInDuration?: number;
    fadeOutDuration?: number;
    color?: string;
    round?: boolean;
    style?: any;
    textStyle?: any;
}

function Toast({
    children,
    isShow,
    positionIndicator = 'top',
    positionOffset = 120,
    fadeInDuration = 300,
    fadeOutDuration = 300,
    color = 'primary',
    round = false,
    style,
    textStyle,
}: ToastProps) {
    const theme = useTheme();
    const colors = useColors();
    const [internalIsShow, setInternalIsShow] = useState(isShow);
    const [opacity, setOpacity] = useState(0);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const animationRef = useRef<Animated.CompositeAnimation | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const getThemeColor = (colorName?: string) => {
        if (!colorName) return colors.primary;
        if (typeof colorName === 'string' && colorName.startsWith('#')) {
            return colorName;
        }
        // Explicit color map for theme safety
        const colorMap: { [key: string]: string } = {
            primary: colors.primary,
            success: colors.success,
            warning: colors.warning,
            error: colors.error,
            danger: colors.error,
            info: colors.info,
            white: colors.white,
            black: colors.black,
            onPrimary: colors.onPrimary,
        };
        return colorMap[colorName] || colors.primary;
    };

    const getTopPosition = () => {
        if (positionIndicator === 'top') {
            return positionOffset;
        }
        if (positionIndicator === 'bottom') {
            return height - positionOffset - 100;
        }
        return height / 2 - 50;
    };

    useEffect(() => {
        
        if (isShow && !internalIsShow) {
            
            setInternalIsShow(true);
            setOpacity(1);
            animationRef.current = Animated.timing(fadeAnim, {
                toValue: 1,
                duration: fadeInDuration,
                useNativeDriver: false,
            });
            
        }
        
        if (!isShow && internalIsShow) {
            console.log('Hiding toast');
            setOpacity(0); // Set opacity immediately for fallback
            
            animationRef.current = Animated.timing(fadeAnim, {
                toValue: 0,
                duration: fadeOutDuration,
                useNativeDriver: false,
            });
            
            
            timeoutRef.current = setTimeout(() => {
                setInternalIsShow(false);
            }, fadeOutDuration);
        }
        
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            if (animationRef.current) {
                animationRef.current.stop();
            }
        };
    }, [isShow, internalIsShow, fadeInDuration, fadeOutDuration, fadeAnim]);

    const renderContent = () => {
        if (typeof children === 'string') {
            return <Text style={[styles(theme, colors).text, textStyle]}>{children}</Text>;
        }
        return children;
    };

   

    const backgroundColor = getThemeColor(color);
    const borderRadius = round ? theme.sizes.BASE * 2 : theme.sizes.BASE;
    const topPosition = getTopPosition();
    
   
    
    const toastStyles = [
        styles(theme, colors).toast,
        {
            backgroundColor,
            top: topPosition,
            opacity: opacity,
            borderRadius,
            borderColor: colors.border || 'rgba(255,255,255,0.3)',
            shadowColor: colors.black,
        },
        style,
    ];

    return (
        <View style={styles(theme, colors).overlay} pointerEvents="none">
            <Animated.View style={toastStyles}>
                {renderContent()}
            </Animated.View>
        </View>
    );
}

const styles = (theme: ReturnType<typeof useTheme>, colors: ReturnType<typeof useColors>) =>
    StyleSheet.create({
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            pointerEvents: 'none',
        },
        toast: {
            padding: theme.sizes.BASE * 1.5,
            position: 'absolute',
            left: theme.sizes.BASE,
            right: theme.sizes.BASE,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 15,
            minHeight: 60,
            borderWidth: 1,
        },
        text: {
            fontSize: theme.sizes.FONT,
            color: colors.onPrimary || colors.white,
            textAlign: 'center',
            fontWeight: theme.fontWeights?.bold || '600',
        },
    });

export default Toast;
