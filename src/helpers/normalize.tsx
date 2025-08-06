import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const BASE_WIDTH = 375;
const BASE_HEIGHT = 667;

export function normalize(size: number) {
    return (SCREEN_WIDTH / BASE_WIDTH) *  size;
}

export function verticalScale(size: number) {
    return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
}

export function moderateScale(size: number, factor = 0.5) {
    return size + (normalize(size) - size) * factor;
}

export function scaleFont(size: number) {
    const newSize = normalize(size);
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}


