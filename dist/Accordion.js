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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_2 = require("react-native");
var Text_1 = __importDefault(require("./Text"));
var Block_1 = __importDefault(require("./Block"));
var Icon_1 = __importDefault(require("./Icon"));
var theme_1 = require("./theme");
var width = react_native_2.Dimensions.get('screen').width;
function AccordionContent(_a) {
    var content = _a.content, contentStyle = _a.contentStyle;
    var theme = (0, theme_1.useTheme)();
    var colors = (0, theme_1.useColors)();
    return <Text_1.default style={[styles(theme, colors).content, contentStyle]}>{content}</Text_1.default>;
}
function AccordionHeader(_a) {
    var expanded = _a.expanded, expandedIcon = _a.expandedIcon, headerStyle = _a.headerStyle, icon = _a.icon, title = _a.title, chapterIcon = _a.chapterIcon;
    var colors = (0, theme_1.useColors)();
    return (<Block_1.default row middle style={[{ padding: 6 }, headerStyle]}>
            {chapterIcon ? (<Icon_1.default name={chapterIcon.name} family={chapterIcon.family} size={chapterIcon.size || 14} color={chapterIcon.color || colors.primary} style={chapterIcon.style || { marginRight: 5 }}/>) : null}
            <Block_1.default row space="between" middle flex>
                <Text_1.default size={16}>{title}</Text_1.default>
                {expanded
            ? (expandedIcon ? (<Icon_1.default name={expandedIcon.name} family={expandedIcon.family} size={expandedIcon.size || 16} color={expandedIcon.color || colors.textSecondary}/>) : (<Icon_1.default name="keyboard-arrow-up" family="material" size={16} color={colors.textSecondary}/>)) : (icon ? (<Icon_1.default name={icon.name} family={icon.family} size={icon.size || 16} color={icon.color || colors.textSecondary}/>) : (<Icon_1.default name="keyboard-arrow-down" family="material" size={16} color={colors.textSecondary}/>))}
            </Block_1.default>
        </Block_1.default>);
}
function AccordionAnimation(_a) {
    var children = _a.children, style = _a.style;
    var fade = (0, react_1.useState)(new react_native_1.Animated.Value(0.3))[0];
    (0, react_1.useEffect)(function () {
        react_native_1.Animated.timing(fade, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true
        }).start();
    }, [fade]);
    return (<react_native_1.Animated.View style={__assign(__assign({}, style), { opacity: fade })}>
            {children}
        </react_native_1.Animated.View>);
}
function AccordionItem(_a) {
    var expanded = _a.expanded, expandedIcon = _a.expandedIcon, headerStyle = _a.headerStyle, contentStyle = _a.contentStyle, icon = _a.icon, index = _a.index, item = _a.item, onAccordionClose = _a.onAccordionClose, onAccordionOpen = _a.onAccordionOpen, setSelected = _a.setSelected;
    return (<Block_1.default>
            <react_native_1.Pressable onPress={function () {
            if (index !== undefined) {
                if (!expanded && onAccordionOpen) {
                    onAccordionOpen(item, index);
                }
                if (expanded && onAccordionClose) {
                    onAccordionClose(item, index);
                }
                setSelected === null || setSelected === void 0 ? void 0 : setSelected(index);
            }
        }}>
                <Block_1.default>
                    <AccordionHeader expanded={expanded} expandedIcon={expandedIcon} headerStyle={headerStyle} icon={icon} title={item === null || item === void 0 ? void 0 : item.title} chapterIcon={item === null || item === void 0 ? void 0 : item.icon}/>
                </Block_1.default>
            </react_native_1.Pressable>
            {expanded ? (<AccordionAnimation style={contentStyle}>
                    <AccordionContent content={(item === null || item === void 0 ? void 0 : item.content) || ''} contentStyle={contentStyle}/>
                </AccordionAnimation>) : null}
        </Block_1.default>);
}
function Accordion(_a) {
    var dataArray = _a.dataArray, icon = _a.icon, expandedIcon = _a.expandedIcon, headerStyle = _a.headerStyle, contentStyle = _a.contentStyle, opened = _a.opened, onAccordionOpen = _a.onAccordionOpen, onAccordionClose = _a.onAccordionClose, listStyle = _a.listStyle, style = _a.style;
    var theme = (0, theme_1.useTheme)();
    var colors = (0, theme_1.useColors)();
    var _b = (0, react_1.useState)(opened), selected = _b[0], setSelected = _b[1];
    return (<Block_1.default style={[styles(theme, colors).container, style]}>
            <react_native_1.View style={listStyle}>
                {dataArray === null || dataArray === void 0 ? void 0 : dataArray.map(function (item, index) { return (<AccordionItem key={String(index)} expanded={selected === index} expandedIcon={expandedIcon} icon={icon} headerStyle={headerStyle} contentStyle={contentStyle} onAccordionOpen={onAccordionOpen} onAccordionClose={onAccordionClose} item={item} index={index} setSelected={function (s) { return setSelected(selected === s ? undefined : s); }}/>); })}
            </react_native_1.View>
        </Block_1.default>);
}
// Semantic version: use theme.sizes and theme.shadows if available
var styles = function (theme, colors) {
    var _a, _b, _c, _d, _e, _f;
    // Prefer semantic theme values if present, fallback to old values
    var borderRadius = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _a === void 0 ? void 0 : _a.CARD_BORDER_RADIUS) !== null && _b !== void 0 ? _b : 16;
    var padding = 8;
    var headerPadding = 6;
    var contentPadding = 10;
    // Use semantic shadow (md) for Accordion
    var shadow = (_f = (_d = (_c = theme === null || theme === void 0 ? void 0 : theme.shadows) === null || _c === void 0 ? void 0 : _c.md) !== null && _d !== void 0 ? _d : (_e = theme === null || theme === void 0 ? void 0 : theme.shadows) === null || _e === void 0 ? void 0 : _e.default) !== null && _f !== void 0 ? _f : {
        ios: {
            shadowColor: colors.border,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
        },
        android: {
            elevation: 4,
        },
        web: {
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
        },
    };
    var baseShadow = react_native_2.Platform.select({
        ios: shadow.ios,
        android: shadow.android,
    });
    var webShadow = react_native_2.Platform.OS === 'web' ? shadow.web : {};
    return react_native_1.StyleSheet.create({
        container: __assign(__assign({ flex: 1, width: width * 0.8, borderRadius: borderRadius, padding: padding, backgroundColor: colors.surface }, baseShadow), webShadow),
        header: {
            padding: headerPadding,
        },
        content: {
            padding: contentPadding,
        },
    });
};
exports.default = Accordion;
//# sourceMappingURL=Accordion.js.map