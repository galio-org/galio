import React from 'react';
import { ViewStyle } from 'react-native';
import { useColors } from './theme';
interface SwitchProps {
    value?: boolean;
    onValueChange?: (value: boolean) => void;
    color?: keyof ReturnType<typeof useColors> | string;
    disabled?: boolean;
    trackColor?: {
        false?: string;
        true?: string;
    };
    iosBackgroundColor?: string;
    containerStyle?: ViewStyle;
    accessibilityLabel?: string;
    accessibilityHint?: string;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
//# sourceMappingURL=Switch.d.ts.map