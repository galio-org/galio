import React from 'react';
import {
  Image, ScrollView, StyleSheet, Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo';

// Galio components
import {
  Card, Block, Icon, NavBar, Text,
} from '..';
import theme from '../theme';

const { width } = Dimensions.get('screen');

const cards = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503631285924-e1544dce8b28?&w=1200&h=1600&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    padded: true,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1490049350474-498de43bc885?&w=1600&h=900&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    padded: true,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1493612216891-65cbf3b5c420?&w=1500&h=900&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    full: true,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1506321806993-0e39f809ae59?&w=1500&h=1900&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    full: true,
  },
];

export default class Cards extends React.Component {
  renderCard = (card) => {
    const {
      id, image, title, caption, avatar, location, full, padded,
    } = card;

    const imageContent = image ? (
      <Image
        source={{ uri: image }}
        style={[
          styles.image,
          padded ? styles.rounded : null,
          full ? { height: theme.SIZES.BASE * 13.75 } : null,
        ]}
      />
    ) : null;

    const bodyContent = (
      <Block flex row style={[styles.footer, full ? styles.full : null]} space="around">
        <Block flex={1.2} row>
          <Image source={{ uri: `${avatar}?id=${id}` }} style={styles.avatar} />
          <Block style={styles.title}>
            <Text size={theme.SIZES.FONT * 0.875} color={full ? theme.COLORS.WHITE : null}>{title}</Text>
            <Text muted size={theme.SIZES.FONT * 0.875} color={full ? theme.COLORS.MUTED : null}>{caption}</Text>
          </Block>
        </Block>
        {!location ? null : (
          <Block flex row middle>
            <Icon name="pin-3" family="Galio" color={theme.COLORS.MUTED} size={theme.SIZES.FONT} />
            <Text
              muted
              size={theme.SIZES.FONT * 0.875}
              style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
            >
              {location}
            </Text>
          </Block>
        )}
      </Block>
    );
    const imageStyles = [
      styles.imageContainer,
      !full ? styles.noRadius : null,
      padded ? { padding: theme.SIZES.BASE / 2 } : null,
    ];

    return (
      <Card flex shadowColor={theme.COLORS.BLACK} style={styles.card} key={`card-${id}}`}>
        <Block card style={imageStyles}>
          {imageContent}
        </Block>
        {full ? <LinearGradient colors={['transparent', 'rgba(0,0,0, 0.8)']} style={styles.gradient} /> : null}
        {bodyContent}
      </Card>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar title="Cards" onLeftPress={() => navigation.openDrawer()} />
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {cards && cards.map(card => this.renderCard(card))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    borderWidth: 0,
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
  },
  footer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: theme.SIZES.BASE / 2,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE / 2,
    backgroundColor: theme.COLORS.TRANSPARENT,
  },
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  imageContainer: {
    borderWidth: 0,
    overflow: 'hidden',
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    justifyContent: 'center',
    paddingLeft: theme.SIZES.BASE / 2,
  },
  image: {
    width: 'auto',
    height: theme.SIZES.BASE * 12.5,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  extraMargin: {
    marginTop: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});
