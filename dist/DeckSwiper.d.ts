import { JSX } from "react";
import { ViewStyle } from "react-native";
interface DeckSwiperProps {
    onSwipeRight?: () => void;
    onSwipeLeft?: () => void;
    focusedElementStyle?: ViewStyle;
    nextElementStyle?: ViewStyle;
    components: React.ReactNode[];
    style?: ViewStyle;
    swipeThreshold?: number;
    cardWidth?: number;
}
declare function DeckSwiper({ onSwipeRight, onSwipeLeft, focusedElementStyle, nextElementStyle, components, style, swipeThreshold, cardWidth, }: DeckSwiperProps): JSX.Element;
export default DeckSwiper;
//# sourceMappingURL=DeckSwiper.d.ts.map