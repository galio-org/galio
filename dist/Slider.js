"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var theme_1 = require("./theme");
var Slider = function (_a) {
    var _b, _c;
    var _d = _a.value, value = _d === void 0 ? 0 : _d, _e = _a.minimumValue, minimumValue = _e === void 0 ? 0 : _e, _f = _a.maximumValue, maximumValue = _f === void 0 ? 1 : _f, _g = _a.step, step = _g === void 0 ? 0.01 : _g, onValueChange = _a.onValueChange, _h = _a.disabled, disabled = _h === void 0 ? false : _h, trackStyle = _a.trackStyle, activeColor = _a.activeColor, containerStyle = _a.containerStyle, thumbStyle = _a.thumbStyle, accessibilityLabel = _a.accessibilityLabel, accessibilityHint = _a.accessibilityHint;
    var theme = (0, theme_1.useGalioTheme)();
    var _j = (0, react_1.useState)(0), containerWidth = _j[0], setContainerWidth = _j[1];
    var trackWidth = (0, react_1.useRef)(0);
    var thumbX = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    var currentValue = (0, react_1.useRef)(value);
    var currentThumbPosition = (0, react_1.useRef)(0);
    var trackLayout = (0, react_1.useRef)({ x: 0, y: 0, width: 0, height: 0 });
    var valueToPosition = function (val) {
        var clamped = Math.max(minimumValue, Math.min(val, maximumValue));
        var ratio = (clamped - minimumValue) / (maximumValue - minimumValue);
        return ratio * trackWidth.current;
    };
    var positionToValue = function (pos) {
        var ratio = pos / trackWidth.current;
        var rawValue = ratio * (maximumValue - minimumValue) + minimumValue;
        var steppedValue = step > 0 ? Math.round(rawValue / step) * step : rawValue;
        return Math.max(minimumValue, Math.min(steppedValue, maximumValue));
    };
    (0, react_1.useEffect)(function () {
        var pos = valueToPosition(value);
        react_native_1.Animated.timing(thumbX, {
            toValue: pos,
            duration: 150,
            useNativeDriver: false,
        }).start();
        currentThumbPosition.current = pos;
    }, [value]);
    var panResponder = (0, react_1.useRef)(react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: function () { return !disabled; },
        onMoveShouldSetPanResponder: function () { return !disabled; },
        onPanResponderGrant: function (_, gestureState) {
            var _a;
            if (disabled)
                return;
            var relativeX = gestureState.x0 - trackLayout.current.x;
            var thumbRadius = (((_a = theme === null || theme === void 0 ? void 0 : theme.SIZES) === null || _a === void 0 ? void 0 : _a.THUMB_SIZE) || 25) / 2;
            var clampedX = Math.max(thumbRadius, Math.min(relativeX, trackWidth.current - thumbRadius));
            currentThumbPosition.current = clampedX;
            thumbX.setValue(clampedX);
        },
        onPanResponderMove: function (_, gestureState) {
            var _a;
            if (disabled)
                return;
            var relativeX = gestureState.moveX - trackLayout.current.x;
            var thumbRadius = (((_a = theme === null || theme === void 0 ? void 0 : theme.SIZES) === null || _a === void 0 ? void 0 : _a.THUMB_SIZE) || 25) / 2;
            var clampedX = Math.max(thumbRadius, Math.min(relativeX, trackWidth.current - thumbRadius));
            currentThumbPosition.current = clampedX;
            thumbX.setValue(clampedX);
            var newValue = positionToValue(clampedX);
            if (newValue !== currentValue.current) {
                currentValue.current = newValue;
                onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newValue);
            }
        },
        onPanResponderRelease: function () {
        },
    })).current;
    var onTrackLayout = function (e) {
        var _a = e.nativeEvent.layout, width = _a.width, x = _a.x, y = _a.y;
        trackWidth.current = width;
        trackLayout.current = { x: x, y: y, width: width, height: e.nativeEvent.layout.height };
        thumbX.setValue(valueToPosition(currentValue.current));
    };
    var handleContainerLayout = function (event) {
        var width = event.nativeEvent.layout.width;
        setContainerWidth(Math.round(width));
    };
    return (<react_native_1.View style={[styles(theme).container, containerStyle]} onLayout={handleContainerLayout}>
        <react_native_1.View onLayout={onTrackLayout} style={[styles(theme).track, trackStyle]}></react_native_1.View>
        <react_native_1.View style={[
            styles(theme).track,
            {
                position: 'absolute',
                width: trackWidth.current,
                backgroundColor: activeColor || ((_c = (_b = theme === null || theme === void 0 ? void 0 : theme.COLORS) === null || _b === void 0 ? void 0 : _b.LIGHT_MODE) === null || _c === void 0 ? void 0 : _c.primary) || '#007AFF',
            }
        ]}>
            <react_native_1.Animated.View style={[
            styles(theme).thumb,
            thumbStyle,
            disabled && styles(theme).disabled,
            { transform: [{ translateX: thumbX }] },
        ]} {...panResponder.panHandlers}/>
        </react_native_1.View>
    </react_native_1.View>);
};
var styles = function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    return react_native_1.StyleSheet.create({
        container: {
            height: 40,
            justifyContent: 'center',
        },
        track: {
            height: ((_a = theme === null || theme === void 0 ? void 0 : theme.SIZES) === null || _a === void 0 ? void 0 : _a.TRACK_SIZE) || 4,
            width: '100%',
            borderRadius: (((_b = theme === null || theme === void 0 ? void 0 : theme.SIZES) === null || _b === void 0 ? void 0 : _b.TRACK_SIZE) || 4) / 2,
            position: 'absolute',
            backgroundColor: ((_d = (_c = theme === null || theme === void 0 ? void 0 : theme.COLORS) === null || _c === void 0 ? void 0 : _c.LIGHT_MODE) === null || _d === void 0 ? void 0 : _d.grey) || '#E0E0E0',
        },
        thumb: {
            width: ((_e = theme === null || theme === void 0 ? void 0 : theme.SIZES) === null || _e === void 0 ? void 0 : _e.THUMB_SIZE) || 25,
            height: ((_f = theme === null || theme === void 0 ? void 0 : theme.SIZES) === null || _f === void 0 ? void 0 : _f.THUMB_SIZE) || 25,
            borderRadius: (((_g = theme === null || theme === void 0 ? void 0 : theme.SIZES) === null || _g === void 0 ? void 0 : _g.THUMB_SIZE) || 25) / 2,
            borderWidth: 2,
            borderColor: ((_j = (_h = theme === null || theme === void 0 ? void 0 : theme.COLORS) === null || _h === void 0 ? void 0 : _h.LIGHT_MODE) === null || _j === void 0 ? void 0 : _j.primary) || '#007AFF',
            backgroundColor: ((_l = (_k = theme === null || theme === void 0 ? void 0 : theme.COLORS) === null || _k === void 0 ? void 0 : _k.LIGHT_MODE) === null || _l === void 0 ? void 0 : _l.white) || '#FFFFFF',
            position: 'absolute',
            marginTop: -10,
        },
        disabled: {
            backgroundColor: ((_o = (_m = theme === null || theme === void 0 ? void 0 : theme.COLORS) === null || _m === void 0 ? void 0 : _m.LIGHT_MODE) === null || _o === void 0 ? void 0 : _o.muted) || '#999999',
            borderColor: ((_q = (_p = theme === null || theme === void 0 ? void 0 : theme.COLORS) === null || _p === void 0 ? void 0 : _p.LIGHT_MODE) === null || _q === void 0 ? void 0 : _q.muted) || '#999999',
        },
    });
};
exports.default = Slider;
//# sourceMappingURL=Slider.js.map