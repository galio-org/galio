import { ViewStyle, TextStyle } from "react-native";
import { type JSX } from "react";
interface MainAccordionProps {
    dataArray?: any[];
    icon?: any;
    expandedIcon?: any;
    headerStyle?: ViewStyle;
    contentStyle?: TextStyle;
    opened?: number;
    onAccordionOpen?: (item: any, index: number) => void;
    onAccordionClose?: (item: any, index: number) => void;
    listStyle?: ViewStyle;
    style?: ViewStyle;
}
declare function Accordion({ dataArray, icon, expandedIcon, headerStyle, contentStyle, opened, onAccordionOpen, onAccordionClose, listStyle, style }: MainAccordionProps): JSX.Element;
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map