"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var theme_1 = require("./theme");
var Block_1 = __importDefault(require("./Block"));
var SCREEN_WIDTH = react_native_1.Dimensions.get('screen').width;
function DeckSwiper(_a) {
    var onSwipeRight = _a.onSwipeRight, onSwipeLeft = _a.onSwipeLeft, _b = _a.focusedElementStyle, focusedElementStyle = _b === void 0 ? {} : _b, _c = _a.nextElementStyle, nextElementStyle = _c === void 0 ? {} : _c, components = _a.components, style = _a.style, _d = _a.swipeThreshold, swipeThreshold = _d === void 0 ? 110 : _d, _e = _a.cardWidth, cardWidth = _e === void 0 ? SCREEN_WIDTH * 0.7 : _e, _f = _a.cardContainerStyle, cardContainerStyle = _f === void 0 ? {} : _f, _g = _a.cardShadow, cardShadow = _g === void 0 ? 'md' : _g, cardBackgroundColor = _a.cardBackgroundColor, nextCardBackgroundColor = _a.nextCardBackgroundColor, _h = _a.nextCardShadow, nextCardShadow = _h === void 0 ? 'sm' : _h, borderRadius = _a.borderRadius, _j = _a.showNextCard, showNextCard = _j === void 0 ? true : _j;
    var theme = (0, theme_1.useTheme)();
    var colors = (0, theme_1.useColors)();
    var _k = (0, react_1.useState)(0), currentIndex = _k[0], setCurrentIndex = _k[1];
    var position = (0, react_1.useMemo)(function () { return new react_native_1.Animated.ValueXY(); }, []);
    var rotate = (0, react_1.useMemo)(function () { return position.x.interpolate({
        inputRange: [-cardWidth / 2, 0, cardWidth / 2],
        outputRange: ["-10deg", "0deg", "10deg"],
        extrapolate: "clamp"
    }); }, [position.x, cardWidth]);
    var rotateAndTranslate = (0, react_1.useMemo)(function () { return ({
        transform: __spreadArray([
            { rotate: rotate }
        ], position.getTranslateTransform(), true)
    }); }, [rotate, position]);
    var nextCardOpacity = (0, react_1.useMemo)(function () { return position.x.interpolate({
        inputRange: [-cardWidth / 2, 0, cardWidth / 2],
        outputRange: [1, 0, 1],
        extrapolate: "clamp"
    }); }, [position.x, cardWidth]);
    var nextCardScale = (0, react_1.useMemo)(function () { return position.x.interpolate({
        inputRange: [-cardWidth / 2, 0, cardWidth / 2],
        outputRange: [1, 0.8, 1],
        extrapolate: "clamp"
    }); }, [position.x, cardWidth]);
    var nextCardAnimatedStyle = (0, react_1.useMemo)(function () { return (__assign({ opacity: nextCardOpacity, transform: [{ scale: nextCardScale }] }, react_native_1.StyleSheet.absoluteFillObject)); }, [nextCardOpacity, nextCardScale]);
    var handleSwipeRight = (0, react_1.useCallback)(function () {
        if (currentIndex < components.length - 1) {
            setCurrentIndex(function (prev) { return prev + 1; });
            onSwipeRight === null || onSwipeRight === void 0 ? void 0 : onSwipeRight();
        }
    }, [currentIndex, components.length, onSwipeRight]);
    var handleSwipeLeft = (0, react_1.useCallback)(function () {
        if (currentIndex < components.length - 1) {
            setCurrentIndex(function (prev) { return prev + 1; });
            onSwipeLeft === null || onSwipeLeft === void 0 ? void 0 : onSwipeLeft();
        }
    }, [currentIndex, components.length, onSwipeLeft]);
    var panResponder = (0, react_1.useMemo)(function () { return react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: function () { return true; },
        onPanResponderMove: function (_, gestureState) {
            position.setValue({ x: gestureState.dx, y: gestureState.dy });
        },
        onPanResponderRelease: function (_, gestureState) {
            if (gestureState.dx > swipeThreshold) {
                react_native_1.Animated.spring(position, {
                    toValue: { x: cardWidth + 100, y: gestureState.dy },
                    useNativeDriver: false
                }).start(handleSwipeRight);
            }
            else if (gestureState.dx < -swipeThreshold) {
                react_native_1.Animated.spring(position, {
                    toValue: { x: -cardWidth - 100, y: gestureState.dy },
                    useNativeDriver: false
                }).start(handleSwipeLeft);
            }
            else {
                react_native_1.Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    friction: 4,
                    useNativeDriver: false
                }).start();
            }
        },
    }); }, [position, swipeThreshold, cardWidth, handleSwipeRight, handleSwipeLeft]);
    (0, react_1.useEffect)(function () {
        position.setValue({ x: 0, y: 0 });
    }, [currentIndex, position]);
    var renderComponents = (0, react_1.useCallback)(function (componentsArray) {
        return componentsArray.map(function (item, i) {
            if (i < currentIndex) {
                return null;
            }
            else if (i === currentIndex) {
                return (<react_native_1.Animated.View key={i} style={[
                        rotateAndTranslate,
                        react_native_1.StyleSheet.absoluteFillObject,
                        __assign({ backgroundColor: cardBackgroundColor || colors.surface, borderRadius: borderRadius !== null && borderRadius !== void 0 ? borderRadius : theme.sizes.CARD_BORDER_RADIUS }, (typeof cardShadow === 'string' ? theme.shadows[cardShadow] : cardShadow)),
                        cardContainerStyle,
                        focusedElementStyle,
                    ]} {...panResponder.panHandlers}>
                        {item}
                    </react_native_1.Animated.View>);
            }
            else if (showNextCard && i === currentIndex + 1) {
                return (<react_native_1.Animated.View key={i} style={[
                        nextCardAnimatedStyle,
                        __assign({ backgroundColor: nextCardBackgroundColor || colors.background, borderRadius: borderRadius !== null && borderRadius !== void 0 ? borderRadius : theme.sizes.CARD_BORDER_RADIUS }, (typeof nextCardShadow === 'string' ? theme.shadows[nextCardShadow] : nextCardShadow)),
                        nextElementStyle,
                    ]}>
                        {item}
                    </react_native_1.Animated.View>);
            }
            else {
                return null;
            }
        }).reverse();
    }, [currentIndex, rotateAndTranslate, focusedElementStyle, nextCardAnimatedStyle, cardBackgroundColor, nextCardBackgroundColor, cardShadow, nextCardShadow, cardContainerStyle, nextElementStyle, borderRadius, theme, colors, showNextCard, panResponder.panHandlers]);
    (0, react_1.useEffect)(function () {
        setCurrentIndex(0);
    }, [components.length]);
    var blockStyle = __assign({ width: cardWidth }, (Array.isArray(style) ? Object.assign.apply(Object, __spreadArray([{}], style, false)) : (style || {})));
    if (components.length === 0) {
        return <Block_1.default flex center style={blockStyle}/>;
    }
    return (<Block_1.default flex center style={blockStyle}>
            {renderComponents(components)}
        </Block_1.default>);
}
exports.default = DeckSwiper;
//# sourceMappingURL=DeckSwiper.js.map