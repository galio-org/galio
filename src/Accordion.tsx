import { Animated, FlatList, StyleSheet, TouchableWithoutFeedback, ViewStyle, TextStyle, Pressable, View } from "react-native";
import { useEffect, useState, type JSX } from "react";
import { Dimensions, Platform } from "react-native";
import Text from "./Text";
import Block from "./Block";
import Icon from "./Icon";
import { useTheme, useColors } from "./theme";

const { width } = Dimensions.get('screen');

interface AccordionContentProps {
    content: string;
    contentStyle?: TextStyle;
}

function AccordionContent({ content, contentStyle }: AccordionContentProps): JSX.Element {
    const theme = useTheme();
    const colors = useColors();
    return <Text style={[styles(theme, colors).content, contentStyle]}>{content}</Text>;
}

interface AccordionHeaderProps {
    expanded?: boolean;
    expandedIcon?: any;
    headerStyle?: ViewStyle;
    icon?: any;
    title?: string;
    chapterIcon?: any;
    titleStyle?: TextStyle;
}

function AccordionHeader({
    expanded,
    expandedIcon,
    headerStyle,
    icon,
    title,
    chapterIcon,
    titleStyle
}: AccordionHeaderProps): JSX.Element {
    const colors = useColors();
    return (
        <Block row middle style={[{ padding: 6 }, headerStyle] as any}>
            {chapterIcon ? (
                <Icon
                    name={chapterIcon.name}
                    family={chapterIcon.family}
                    size={chapterIcon.size || 14}
                    color={chapterIcon.color || colors.primary}
                    style={chapterIcon.style || { marginRight: 5 }}
                />
            ) : null}
            <Block row space="between" middle flex>
                <Text size={16} style={titleStyle}>{title}</Text>
                {expanded
                    ? (expandedIcon ? (
                        <Icon
                            name={expandedIcon.name}
                            family={expandedIcon.family}
                            size={expandedIcon.size || 16}
                            color={expandedIcon.color || colors.textSecondary}
                        />
                    ) : (
                        <Icon
                            name="keyboard-arrow-up"
                            family="material"
                            size={16}
                            color={colors.textSecondary}
                        />
                    )) : (icon ? (
                        <Icon
                            name={icon.name}
                            family={icon.family}
                            size={icon.size || 16}
                            color={icon.color || colors.textSecondary}
                        />
                    ) : (
                        <Icon
                            name="keyboard-arrow-down"
                            family="material"
                            size={16}
                            color={colors.textSecondary}
                        />
                    ))}
            </Block>
        </Block>
    );
}

interface AccordionAnimationProps {
    children: JSX.Element;
    style?: ViewStyle;
}

function AccordionAnimation({ children, style }: AccordionAnimationProps): JSX.Element {
    const [fade] = useState(new Animated.Value(0.3));

    useEffect(() => {
        Animated.timing(fade, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true
        }).start();
    }, [fade]);

    return (
        <Animated.View style={{ ...style, opacity: fade }}>
            {children}
        </Animated.View>
    );
}

interface AccordionItemProps {
    expanded?: boolean;
    expandedIcon?: any;
    headerStyle?: ViewStyle;
    contentStyle?: TextStyle;
    icon?: any;
    index?: number;
    item?: any;
    onAccordionClose?: (item: any, index: number) => void;
    onAccordionOpen?: (item: any, index: number) => void;
    setSelected?: (index: number) => void;
    titleStyle?: TextStyle;
}

function AccordionItem({
    expanded,
    expandedIcon,
    headerStyle,
    contentStyle,
    icon,
    index,
    item,
    onAccordionClose,
    onAccordionOpen,
    setSelected,
    titleStyle
}: AccordionItemProps): JSX.Element {
    return (
        <Block>
            <Pressable
                onPress={() => {
                    if (index !== undefined) {
                        if (!expanded && onAccordionOpen) {
                            onAccordionOpen(item, index);
                        }
                        if (expanded && onAccordionClose) {
                            onAccordionClose(item, index);
                        }
                        setSelected?.(index);
                    }
                }}
            >
                <Block>
                    <AccordionHeader
                        expanded={expanded}
                        expandedIcon={expandedIcon}
                        headerStyle={headerStyle}
                        icon={icon}
                        title={item?.title}
                        chapterIcon={item?.icon}
                        titleStyle={item?.titleStyle || titleStyle}
                    />
                </Block>
            </Pressable>
            {expanded ? (
                <AccordionAnimation style={contentStyle as any}>
                    <AccordionContent
                        content={item?.content || ''}
                        contentStyle={contentStyle}
                    />
                </AccordionAnimation>
            ) : null}
        </Block>
    );
}

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
    titleStyle?: TextStyle;
    /**
     * Semantic shadow level: 'none', 'xs', 'sm', 'md', 'lg', 'xl'.
     * If not set, no shadow is applied.
     */
    shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function Accordion({
    dataArray,
    icon,
    expandedIcon,
    headerStyle,
    contentStyle,
    opened,
    onAccordionOpen,
    onAccordionClose,
    listStyle,
    style,
    titleStyle,
    shadow = 'md',
}: MainAccordionProps): JSX.Element {
    const theme = useTheme();
    const colors = useColors();
    const [selected, setSelected] = useState<number | undefined>(opened);

    // Default styles for light/dark mode
    const defaultHeaderStyle: ViewStyle = {
        padding: theme.sizes?.BASE ?? 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.mode === 'dark' ? colors.borderHover : colors.border,
        backgroundColor: theme.mode === 'dark' ? colors.primary : colors.primary,
        borderTopLeftRadius: theme.sizes?.CARD_BORDER_RADIUS ?? 16,
        borderTopRightRadius: theme.sizes?.CARD_BORDER_RADIUS ?? 16,
    };
    const defaultContentStyle: TextStyle = {
        fontSize: theme.sizes?.FONT ?? 16,
        backgroundColor: theme.mode === 'dark' ? colors.surface : colors.surface,
        color: theme.mode === 'dark' ? colors.onPrimary : colors.text,
        borderBottomLeftRadius: theme.sizes?.CARD_BORDER_RADIUS ?? 16,
        borderBottomRightRadius: theme.sizes?.CARD_BORDER_RADIUS ?? 16,
        minHeight: 48,
        borderTopWidth: theme.mode === 'dark' ? 1 : 0,
        borderTopColor: theme.mode === 'dark' ? colors.borderHover : undefined,
    };
    // Use semantic shadow prop for all platforms
    let shadowStyle: ViewStyle = {};
    if (shadow && shadow !== 'none') {
        const shadowDef = theme.shadows?.[shadow] || {};
        shadowStyle = Platform.select({
            ios: shadowDef.ios || {},
            android: shadowDef.android || {},
        }) || {};
        if (Platform.OS === 'web' && shadowDef.web) {
            shadowStyle = { ...shadowDef.web };
        }
    }
    // Only apply overflow: 'visible' if shadow is present, otherwise let user override
    const defaultContainerStyle: ViewStyle = {
        ...shadowStyle,
        borderRadius: theme.sizes?.CARD_BORDER_RADIUS ?? 16,
        marginBottom: theme.sizes?.BASE ?? 16,
        backgroundColor: 'transparent',
        ...(shadow && shadow !== 'none' ? { overflow: 'visible' } : {}),
    };
    return (
        <Block style={[styles(theme, colors).container, defaultContainerStyle, style] as any}>
            <View style={listStyle}>
                {dataArray?.map((item, index) => (
                    <AccordionItem
                        key={String(index)}
                        expanded={selected === index}
                        expandedIcon={expandedIcon}
                        icon={icon}
                        headerStyle={headerStyle ?? defaultHeaderStyle}
                        contentStyle={contentStyle ?? defaultContentStyle}
                        onAccordionOpen={onAccordionOpen}
                        onAccordionClose={onAccordionClose}
                        item={item}
                        index={index}
                        setSelected={(s) => setSelected(selected === s ? undefined : s)}
                        titleStyle={titleStyle}
                    />
                ))}
            </View>
        </Block>
    );
}

// Semantic version: use theme.sizes and theme.shadows if available
const styles = (theme: ReturnType<typeof useTheme>, colors: ReturnType<typeof useColors>) => {
    // Prefer semantic theme values if present, fallback to old values
    const borderRadius = theme?.sizes?.CARD_BORDER_RADIUS ?? 16;
    const padding = 8;
    const headerPadding = 6;
    const contentPadding = 10;
    // Use semantic shadow (md) for Accordion
    const shadow = theme?.shadows?.md ?? theme?.shadows?.default ?? {
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
    const baseShadow = Platform.select({
        ios: shadow.ios,
        android: shadow.android,
    });
    const webShadow = Platform.OS === 'web' ? shadow.web : {};
    return StyleSheet.create({
        container: {
            flex: 1,
            width: width * 0.8,
            borderRadius,
            padding,
            backgroundColor: colors.surface,
            ...baseShadow,
            ...webShadow,
        },
        header: {
            padding: headerPadding,
        },
        content: {
            padding: contentPadding,
        },
    });
};

export default Accordion;
