import React from 'react';
import { ViewStyle } from 'react-native';
interface SliderProps {
    value?: number;
    minimumValue?: number;
    maximumValue?: number;
    step?: number;
    disabled?: boolean;
    trackStyle?: ViewStyle;
    activeColor?: string;
    thumbStyle?: ViewStyle;
    containerStyle?: ViewStyle;
    onValueChange?: (value: number) => void;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
//# sourceMappingURL=Slider.d.ts.map