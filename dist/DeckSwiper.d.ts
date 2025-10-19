import { JSX } from "react";
import { ViewStyle, StyleProp } from "react-native";
import { useTheme } from "./theme";
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
declare function DeckSwiper({ onSwipeRight, onSwipeLeft, focusedElementStyle, nextElementStyle, components, style, swipeThreshold, cardWidth, cardContainerStyle, cardShadow, cardBackgroundColor, nextCardBackgroundColor, nextCardShadow, borderRadius, showNextCard, }: DeckSwiperProps): JSX.Element;
export default DeckSwiper;
//# sourceMappingURL=DeckSwiper.d.ts.map