import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Animated, View } from 'react-native';
import { useGalioTheme } from './theme';
import Text from './atomic/ions/text';

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
    const theme = useGalioTheme();
    const [internalIsShow, setInternalIsShow] = useState(isShow);
    const [opacity, setOpacity] = useState(0);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const animationRef = useRef<Animated.CompositeAnimation | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const getThemeColor = (colorName?: string) => {
        if (!colorName) return theme.COLORS.LIGHT_MODE.primary;
        
        if (typeof colorName === 'string' && colorName.startsWith('#')) {
            return colorName;
        }
        
        const colorMap: { [key: string]: string } = {
            'primary': theme.COLORS.LIGHT_MODE.primary,
            'success': theme.COLORS.LIGHT_MODE.success,
            'warning': theme.COLORS.LIGHT_MODE.warning,
            'error': theme.COLORS.LIGHT_MODE.danger,
            'danger': theme.COLORS.LIGHT_MODE.danger,
            'info': theme.COLORS.LIGHT_MODE.info,
        };
        
        return colorMap[colorName] || theme.COLORS.LIGHT_MODE.primary;
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
            console.log('Showing toast');
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
            return <Text style={[styles(theme).text, textStyle]}>{children}</Text>;
        }
        return children;
    };

   

    const backgroundColor = getThemeColor(color);
    const borderRadius = round ? theme.SIZES.BASE * 2 : theme.SIZES.BASE;
    const topPosition = getTopPosition();
    
   
    
    const toastStyles = [
        styles(theme).toast,
        { 
            backgroundColor,
            top: topPosition,
            opacity: opacity,
            borderRadius,
        },
        style,
    ];

    return (
        <View style={styles(theme).overlay} pointerEvents="none">
            <Animated.View style={toastStyles}>
                {renderContent()}
            </Animated.View>
        </View>
    );
}

const styles = (theme: ReturnType<typeof useGalioTheme>) =>
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
            padding: theme.SIZES.BASE * 1.5,
            position: 'absolute',
            left: theme.SIZES.BASE,
            right: theme.SIZES.BASE,
            shadowColor: theme.COLORS.LIGHT_MODE.black,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 15,
            minHeight: 60,
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.3)',
        },
        text: {
            fontSize: theme.SIZES.FONT,
            color: theme.COLORS.LIGHT_MODE.white,
            textAlign: 'center',
            fontWeight: '600',
        },
    });

export default Toast;
