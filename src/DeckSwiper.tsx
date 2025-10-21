import { JSX, useEffect, useState, useMemo, useCallback } from "react";
import { Animated, Dimensions, PanResponder, StyleSheet, ViewStyle, StyleProp } from "react-native";
import { useTheme, useColors } from "./theme";
import Block from "./Block";

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

interface DeckSwiperProps {
    onSwipeRight?: () => void;
    onSwipeLeft?: () => void;
    focusedElementStyle?: StyleProp<ViewStyle>;
    nextElementStyle?: StyleProp<ViewStyle>;
    components: React.ReactNode[];
    style?: StyleProp<ViewStyle>;
    swipeThreshold?: number;
    cardWidth?: number;
    cardContainerStyle?: StyleProp<ViewStyle>;
    cardShadow?: keyof ReturnType<typeof useTheme>["shadows"] | ViewStyle;
    cardBackgroundColor?: string;
    nextCardBackgroundColor?: string;
    nextCardShadow?: keyof ReturnType<typeof useTheme>["shadows"] | ViewStyle;
    borderRadius?: number;
    showNextCard?: boolean;
}

function DeckSwiper({
    onSwipeRight,
    onSwipeLeft,
    focusedElementStyle = {},
    nextElementStyle = {},
    components,
    style,
    swipeThreshold = 110,
    cardWidth = SCREEN_WIDTH * 0.7,
    cardContainerStyle = {},
    cardShadow = 'md',
    cardBackgroundColor,
    nextCardBackgroundColor,
    nextCardShadow = 'sm',
    borderRadius,
    showNextCard = true,
}: DeckSwiperProps): JSX.Element {
    const theme = useTheme();
    const colors = useColors();
    const [currentIndex, setCurrentIndex] = useState(0);
    const position = useMemo(() => new Animated.ValueXY(), []);

    const rotate = useMemo(() => position.x.interpolate({
        inputRange: [-cardWidth / 2, 0, cardWidth / 2],
        outputRange: ["-10deg", "0deg", "10deg"],
        extrapolate: "clamp"
    }), [position.x, cardWidth]);
    
    const rotateAndTranslate = useMemo(() => ({
        transform: [
            { rotate },
            ...position.getTranslateTransform()
        ]
    }), [rotate, position]);
    
    const nextCardOpacity = useMemo(() => position.x.interpolate({
        inputRange: [-cardWidth / 2, 0, cardWidth / 2],
        outputRange: [1, 0, 1],
        extrapolate: "clamp"
    }), [position.x, cardWidth]);
    
    const nextCardScale = useMemo(() => position.x.interpolate({
        inputRange: [-cardWidth / 2, 0, cardWidth / 2],
        outputRange: [1, 0.8, 1],
        extrapolate: "clamp"
    }), [position.x, cardWidth]);

    const nextCardAnimatedStyle = useMemo(() => ({
        opacity: nextCardOpacity,
        transform: [{ scale: nextCardScale }],
        ...StyleSheet.absoluteFillObject
    }), [nextCardOpacity, nextCardScale]);

    const handleSwipeRight = useCallback(() => {
        if (currentIndex < components.length - 1) {
            setCurrentIndex(prev => prev + 1);
            onSwipeRight?.();
        }
    }, [currentIndex, components.length, onSwipeRight]);

    const handleSwipeLeft = useCallback(() => {
        if (currentIndex < components.length - 1) {
            setCurrentIndex(prev => prev + 1);
            onSwipeLeft?.();
        }
    }, [currentIndex, components.length, onSwipeLeft]);

    const panResponder = useMemo(() => PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            position.setValue({ x: gestureState.dx, y: gestureState.dy });
        },
        onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dx > swipeThreshold) {
                Animated.spring(position, {
                    toValue: { x: cardWidth + 100, y: gestureState.dy },
                    useNativeDriver: false
                }).start(handleSwipeRight);
            } else if (gestureState.dx < -swipeThreshold) {
                Animated.spring(position, {
                    toValue: { x: -cardWidth - 100, y: gestureState.dy },
                    useNativeDriver: false
                }).start(handleSwipeLeft);
            } else {
                Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    friction: 4,
                    useNativeDriver: false
                }).start();
            }
        },
    }), [position, swipeThreshold, cardWidth, handleSwipeRight, handleSwipeLeft]);

    useEffect(() => {
        position.setValue({ x: 0, y: 0 });
    }, [currentIndex, position]);

    const renderComponents = useCallback((componentsArray: React.ReactNode[]) => {
        return componentsArray.map((item, i) => {
            if (i < currentIndex) {
                return null;
            } else if (i === currentIndex) {
                return (
                    <Animated.View
                        key={i}
                        style={[
                            rotateAndTranslate,
                            StyleSheet.absoluteFillObject,
                            {
                                backgroundColor: cardBackgroundColor || colors.surface,
                                borderRadius: borderRadius ?? theme.sizes.CARD_BORDER_RADIUS,
                                ...(typeof cardShadow === 'string' ? theme.shadows[cardShadow] : cardShadow),
                            },
                            cardContainerStyle,
                            focusedElementStyle,
                        ]}
                        {...panResponder.panHandlers}
                    >
                        {item}
                    </Animated.View>
                );
            } else if (showNextCard && i === currentIndex + 1) {
                return (
                    <Animated.View
                        key={i}
                        style={[
                            nextCardAnimatedStyle,
                            {
                                backgroundColor: nextCardBackgroundColor || colors.background,
                                borderRadius: borderRadius ?? theme.sizes.CARD_BORDER_RADIUS,
                                ...(typeof nextCardShadow === 'string' ? theme.shadows[nextCardShadow] : nextCardShadow),
                            },
                            nextElementStyle,
                        ]}
                    >
                        {item}
                    </Animated.View>
                );
            } else {
                return null;
            }
        }).reverse();
    }, [currentIndex, rotateAndTranslate, focusedElementStyle, nextCardAnimatedStyle, cardBackgroundColor, nextCardBackgroundColor, cardShadow, nextCardShadow, cardContainerStyle, nextElementStyle, borderRadius, theme, colors, showNextCard, panResponder.panHandlers]);

    useEffect(() => {
        setCurrentIndex(0);
    }, [components.length]);

    const blockStyle: ViewStyle = {
        width: cardWidth,
        ...(Array.isArray(style) ? Object.assign({}, ...style) : (style || {})),
    };

    if (components.length === 0) {
        return <Block flex center style={blockStyle} />;
    }

    return (
        <Block flex center style={blockStyle}>
            {renderComponents(components)}
        </Block>
    );
}

export default DeckSwiper;