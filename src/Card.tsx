import { JSX } from "react";
import { Image, ImageStyle, StyleSheet, ViewStyle, Platform, TouchableOpacity } from "react-native";
import Block from "./Block";
import { useGalioTheme, useThemeColors } from "./theme";
import Icon from "./Icon";
import Text from "./Text";

interface ImageProps {
    image?: string;
    imageBlockStyle?: ViewStyle;
    imageStyle?: ImageStyle;
}

function renderImage({
    image,
    imageBlockStyle,
    imageStyle,
}: ImageProps): JSX.Element | null {
    const theme = useGalioTheme();
    if (!image) return null;
    return (
        <Block card style={[styles(theme).imageBlock, imageBlockStyle] as any}>
            <Image source={{uri: image}} style={[styles(theme).image, imageStyle] as any}/>
        </Block>
    );
}

interface AvatarProps {
    avatar?: string;
}

function renderAvatar({
    avatar,
}: AvatarProps): JSX.Element | null {
    const theme = useGalioTheme();
    if (!avatar) return null;
    return <Image source={{uri: avatar}} style={styles(theme).avatar}/>;
}

interface LocationProps {
    location?: string;
    locationColor?: string;
}

function renderLocation({
    location,
    locationColor,
}: LocationProps): JSX.Element | null {
    const theme = useGalioTheme();
    const colors = useThemeColors();
    if (!location) return null;
    if (typeof location !== 'string') {
        return location as JSX.Element;
    }
    return (
        <Block row style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
            <Icon 
                name="map-pin" 
                family="feather" 
                color={locationColor || colors.muted} 
                size={theme.SIZES.FONT * 0.75}
            />
            <Text 
                muted 
                size={theme.SIZES.FONT * 0.75} 
                color={locationColor || colors.muted} 
                style={{
                    marginLeft: theme.SIZES.BASE * 0.25,
                    textAlign: 'right',
                    flexShrink: 1
                }}
                numberOfLines={1}
            >
                {location}
            </Text>
        </Block>
    );
}

interface AuthorProps {
    avatar?: string;
    title?: string;
    titleColor?: string;
    caption?: string;
    captionColor?: string;
    location?: string;
    locationColor?: string;
    footerStyle?: ViewStyle;
    rightSideComponent?: React.ReactNode;
}

function renderAuthor({
    avatar,
    title,
    titleColor,
    caption,
    captionColor,
    location,
    locationColor,
    footerStyle,
    rightSideComponent,
}: AuthorProps): JSX.Element | null {
    const theme = useGalioTheme();
    const colors = useThemeColors();

    if (!title && !caption) return null;

    return (
        <Block flex style={[styles(theme).footer, footerStyle] as any}>
            <Block row space="between" style={{ marginBottom: 4 }}>
                <Block flex={0.2} style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                    {renderAvatar({avatar})}
                </Block>
                <Block flex={1.8} style={{ paddingLeft: 8 }}>
                    {title && (
                        <Block style={styles(theme).title}>
                            <Text size={theme.SIZES.FONT * 0.875} color={titleColor} numberOfLines={1}>
                                {title}
                            </Text>
                        </Block>
                    )}
                </Block>
                {rightSideComponent && (
                    <Block flex={0.5} style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                        {rightSideComponent}
                    </Block>
                )}
            </Block>
            
            <Block row space="between" style={{ alignItems: 'flex-end' }}>
                {caption && (
                    <Block flex={1} style={{ marginRight: 8 }}>
                        <Text
                            p 
                            muted
                            size={theme.SIZES.FONT * 0.875}
                            color={captionColor || colors.muted}
                            numberOfLines={2}
                        >
                            {caption}
                        </Text>
                    </Block>
                )}
                {location && (
                    <Block style={{ alignItems: 'flex-end', justifyContent: 'flex-end', minWidth: 0 }}>
                        {renderLocation({location, locationColor})}
                    </Block>
                )}
            </Block>
        </Block>
    );
}

interface CardProps {
    avatar?: string;
    title?: string;
    titleColor?: string;
    caption?: string;
    captionColor?: string;
    location?: string;
    locationColor?: string;
    footerStyle?: ViewStyle;
    image?: string;
    imageBlockStyle?: ViewStyle;
    imageStyle?: ImageStyle;
    borderless?: boolean;
    card?: boolean;
    shadow?: boolean;
    children?: React.ReactNode;
    style?: ViewStyle;
    // Additional props for compatibility
    neutral?: boolean;
    fullBackgroundImage?: boolean;
    authorImageSrc?: string;
    authorTitle?: string;
    authorSubTitle?: string;
    onPress?: () => void;
    rightSideComponent?: React.ReactNode;
    flex?: boolean;
    shadowColor?: string;
}

function Card({
    avatar,
    title,
    titleColor,
    caption,
    captionColor,
    location,
    locationColor,
    borderless = false,
    footerStyle,
    image,
    imageBlockStyle,
    imageStyle,
    children,
    card = true,
    shadow = true,
    style,
    neutral = false,
    fullBackgroundImage = false,
    authorImageSrc,
    authorTitle,
    authorSubTitle,
    onPress,
    rightSideComponent,
    flex = false,
    shadowColor,
}: CardProps): JSX.Element {
    const theme = useGalioTheme();
    const colors = useThemeColors();
    
    // Use authorImageSrc as avatar if provided
    const finalAvatar = authorImageSrc || avatar;
    // Use authorTitle as title if provided
    const finalTitle = authorTitle || title;
    // Use authorSubTitle as caption if provided
    const finalCaption = authorSubTitle || caption;
    
    const styleCard = [
        borderless && { borderWidth: 0 },
        neutral && { backgroundColor: 'transparent', borderWidth: 0 },
        fullBackgroundImage && { 
            backgroundColor: 'transparent', 
            borderWidth: 0,
            overflow: 'hidden',
            borderRadius: 0,
        },
        flex && { flex: 1 },
        {
            borderWidth: 0.5, 
            borderColor: '#E5E5E5', 
            borderRadius: 12, 
            backgroundColor: colors.white,
            marginVertical: 8,
            ...Platform.select({
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
            }),
        },
        style
    ].filter(Boolean) as any;

    const cardContent = (
        <Block 
            card={false} 
            shadow={false} 
            style={styleCard}
        >
            {fullBackgroundImage && image && (
                <Image 
                    source={{ uri: image }} 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        height: '100%',
                    }}
                    resizeMode="cover"
                />
            )}
            {!fullBackgroundImage && renderImage({image, imageBlockStyle, imageStyle})}
            {renderAuthor({
                avatar: finalAvatar, 
                title: finalTitle, 
                titleColor, 
                caption: finalCaption, 
                captionColor, 
                location, 
                locationColor, 
                footerStyle,
                rightSideComponent,
            })}
            {children}
        </Block>
    );

    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress}>
                {cardContent}
            </TouchableOpacity>
        );
    }

    return cardContent;
}

const styles = (theme: ReturnType<typeof useGalioTheme>) => {
  const modeKey = theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE';
  const colors = theme.COLORS[modeKey];
  
  return StyleSheet.create({
    card: {
      borderWidth: 0,
      backgroundColor: colors.white,
      width: theme.SIZES.CARD_WIDTH,
      marginVertical: theme.SIZES.CARD_MARGIN_VERTICAL,
      ...Platform.select({
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
      }),
    },
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

export default Card;