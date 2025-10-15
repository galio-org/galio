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
var Block_1 = __importDefault(require("./Block"));
var theme_1 = require("./theme");
var Icon_1 = __importDefault(require("./Icon"));
var Text_1 = __importDefault(require("./Text"));
function renderImage(_a) {
    var image = _a.image, imageBlockStyle = _a.imageBlockStyle, imageStyle = _a.imageStyle;
    var theme = (0, theme_1.useGalioTheme)();
    if (!image)
        return null;
    return (<Block_1.default card style={[styles(theme).imageBlock, imageBlockStyle]}>
            <react_native_1.Image source={{ uri: image }} style={[styles(theme).image, imageStyle]}/>
        </Block_1.default>);
}
function renderAvatar(_a) {
    var avatar = _a.avatar;
    var theme = (0, theme_1.useGalioTheme)();
    if (!avatar)
        return null;
    return <react_native_1.Image source={{ uri: avatar }} style={styles(theme).avatar}/>;
}
function renderLocation(_a) {
    var location = _a.location, locationColor = _a.locationColor;
    var theme = (0, theme_1.useGalioTheme)();
    var colors = (0, theme_1.useThemeColors)();
    if (!location)
        return null;
    if (typeof location !== 'string') {
        return location;
    }
    return (<Block_1.default row style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
            <Icon_1.default name="map-pin" family="feather" color={locationColor || colors.muted} size={theme.SIZES.FONT * 0.75}/>
            <Text_1.default muted size={theme.SIZES.FONT * 0.75} color={locationColor || colors.muted} style={{
            marginLeft: theme.SIZES.BASE * 0.25,
            textAlign: 'right',
            flexShrink: 1
        }} numberOfLines={1}>
                {location}
            </Text_1.default>
        </Block_1.default>);
}
function renderAuthor(_a) {
    var avatar = _a.avatar, title = _a.title, titleColor = _a.titleColor, caption = _a.caption, captionColor = _a.captionColor, location = _a.location, locationColor = _a.locationColor, footerStyle = _a.footerStyle, rightSideComponent = _a.rightSideComponent;
    var theme = (0, theme_1.useGalioTheme)();
    var colors = (0, theme_1.useThemeColors)();
    if (!title && !caption)
        return null;
    return (<Block_1.default flex style={[styles(theme).footer, footerStyle]}>
            <Block_1.default row space="between" style={{ marginBottom: 4 }}>
                <Block_1.default flex={0.2} style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                    {renderAvatar({ avatar: avatar })}
                </Block_1.default>
                <Block_1.default flex={1.8} style={{ paddingLeft: 8 }}>
                    {title && (<Block_1.default style={styles(theme).title}>
                            <Text_1.default size={theme.SIZES.FONT * 0.875} color={titleColor} numberOfLines={1}>
                                {title}
                            </Text_1.default>
                        </Block_1.default>)}
                </Block_1.default>
                {rightSideComponent && (<Block_1.default flex={0.5} style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                        {rightSideComponent}
                    </Block_1.default>)}
            </Block_1.default>
            
            <Block_1.default row space="between" style={{ alignItems: 'flex-end' }}>
                {caption && (<Block_1.default flex={1} style={{ marginRight: 8 }}>
                        <Text_1.default p muted size={theme.SIZES.FONT * 0.875} color={captionColor || colors.muted} numberOfLines={2}>
                            {caption}
                        </Text_1.default>
                    </Block_1.default>)}
                {location && (<Block_1.default style={{ alignItems: 'flex-end', justifyContent: 'flex-end', minWidth: 0 }}>
                        {renderLocation({ location: location, locationColor: locationColor })}
                    </Block_1.default>)}
            </Block_1.default>
        </Block_1.default>);
}
function Card(_a) {
    var avatar = _a.avatar, title = _a.title, titleColor = _a.titleColor, caption = _a.caption, captionColor = _a.captionColor, location = _a.location, locationColor = _a.locationColor, _b = _a.borderless, borderless = _b === void 0 ? false : _b, footerStyle = _a.footerStyle, image = _a.image, imageBlockStyle = _a.imageBlockStyle, imageStyle = _a.imageStyle, children = _a.children, _c = _a.card, card = _c === void 0 ? true : _c, _d = _a.shadow, shadow = _d === void 0 ? true : _d, style = _a.style, _e = _a.neutral, neutral = _e === void 0 ? false : _e, _f = _a.fullBackgroundImage, fullBackgroundImage = _f === void 0 ? false : _f, authorImageSrc = _a.authorImageSrc, authorTitle = _a.authorTitle, authorSubTitle = _a.authorSubTitle, onPress = _a.onPress, rightSideComponent = _a.rightSideComponent, _g = _a.flex, flex = _g === void 0 ? false : _g, shadowColor = _a.shadowColor;
    var theme = (0, theme_1.useGalioTheme)();
    var colors = (0, theme_1.useThemeColors)();
    // Use authorImageSrc as avatar if provided
    var finalAvatar = authorImageSrc || avatar;
    // Use authorTitle as title if provided
    var finalTitle = authorTitle || title;
    // Use authorSubTitle as caption if provided
    var finalCaption = authorSubTitle || caption;
    var styleCard = [
        borderless && { borderWidth: 0 },
        neutral && { backgroundColor: 'transparent', borderWidth: 0 },
        fullBackgroundImage && {
            backgroundColor: 'transparent',
            borderWidth: 0,
            overflow: 'hidden',
            borderRadius: 0,
        },
        flex && { flex: 1 },
        __assign({ borderWidth: 0.5, borderColor: '#E5E5E5', borderRadius: 12, backgroundColor: colors.white, marginVertical: 8 }, react_native_1.Platform.select({
            ios: {
                shadowColor: shadowColor || '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
            web: {
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            },
        })),
        style
    ].filter(Boolean);
    var cardContent = (<Block_1.default card={false} shadow={false} style={styleCard}>
            {fullBackgroundImage && image && (<react_native_1.Image source={{ uri: image }} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
            }} resizeMode="cover"/>)}
            {!fullBackgroundImage && renderImage({ image: image, imageBlockStyle: imageBlockStyle, imageStyle: imageStyle })}
            {renderAuthor({
            avatar: finalAvatar,
            title: finalTitle,
            titleColor: titleColor,
            caption: finalCaption,
            captionColor: captionColor,
            location: location,
            locationColor: locationColor,
            footerStyle: footerStyle,
            rightSideComponent: rightSideComponent,
        })}
            {children}
        </Block_1.default>);
    if (onPress) {
        return (<react_native_1.TouchableOpacity onPress={onPress}>
                {cardContent}
            </react_native_1.TouchableOpacity>);
    }
    return cardContent;
}
var styles = function (theme) {
    var modeKey = theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE';
    var colors = theme.COLORS[modeKey];
    return react_native_1.StyleSheet.create({
        card: __assign({ borderWidth: 0, backgroundColor: colors.white, width: theme.SIZES.CARD_WIDTH, marginVertical: theme.SIZES.CARD_MARGIN_VERTICAL }, react_native_1.Platform.select({
            ios: {
                shadowColor: colors.block,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
            web: {
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            },
        })),
        footer: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingHorizontal: theme.SIZES.CARD_FOOTER_HORIZONTAL,
            paddingVertical: theme.SIZES.CARD_FOOTER_VERTICAL,
            backgroundColor: colors.transparent,
            zIndex: 1,
        },
        avatar: {
            width: theme.SIZES.CARD_AVATAR_WIDTH,
            height: theme.SIZES.CARD_AVATAR_HEIGHT,
            borderRadius: theme.SIZES.CARD_AVATAR_RADIUS,
        },
        title: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        imageBlock: {
            borderWidth: 0,
            overflow: 'hidden',
        },
        image: {
            width: 'auto',
            height: theme.SIZES.CARD_IMAGE_HEIGHT,
        },
        round: {
            borderRadius: theme.SIZES.CARD_ROUND,
        },
        rounded: {
            borderRadius: theme.SIZES.CARD_ROUNDED,
        },
    });
};
exports.default = Card;
//# sourceMappingURL=Card.js.map