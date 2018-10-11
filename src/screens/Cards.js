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
    image: 'https://images.unsplash.com/photo-1536523552737-74ded3c0591c?w=600&q=200',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Galio Framework',
    caption: '16 minutes ago',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1536396123481-991b5b636cbb?w=600&q=200',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Galio Framework',
    caption: '16 minutes ago',
    location: 'Los Angeles, CA',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1536567929406-c818f28ec428?w=600&q=200',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Galio Framework',
    caption: '16 minutes ago',
    padded: true,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?w=600&q=200',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Galio Framework',
    caption: '19 minutes ago',
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
        style={[styles.image, padded ? [styles.extraMargin, styles.rounded] : null]}
      />
    ) : null;

    const bodyContent = (
      <Block flex row style={[styles.footer, full ? styles.full : null]} space="around">
        <Block flex={1.2} row>
          <Image source={{ uri: `${avatar}?id=${id}` }} style={styles.avatar} />
          <Block style={styles.title}>
            <Text color={full ? theme.COLORS.WHITE : null}>{title}</Text>
            <Text
              muted
              color={full ? theme.COLORS.WHITE : null}
              size={theme.SIZES.FONT * 0.75}
            >
              {caption}
            </Text>
          </Block>
        </Block>
        {!location ? null : (
          <Block flex row middle>
            <Icon name="location-pin" family="Entypo" color={theme.COLORS.MUTED} size={theme.SIZES.FONT} />
            <Text muted>{location}</Text>
          </Block>
        )}
      </Block>
    );

    return (
      <Card flex shadowColor={theme.COLORS.BLACK} style={styles.card} key={`card-${id}}`}>
        <Block card style={[styles.imageContainer, !full ? styles.noRadius : null]}>
          {imageContent}
        </Block>
        {full ? <LinearGradient colors={['transparent', theme.COLORS.MUTED]} style={styles.gradient} /> : null}
        {bodyContent}
      </Card>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar transparent title="Cards" onLeftPress={() => navigation.openDrawer()} />
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
    backgroundColor: theme.COLORS.WHITE,
    borderWidth: 0,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE,
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
    paddingLeft: theme.SIZES.BASE,
  },
  image: {
    height: theme.SIZES.BASE * 15,
    borderTopRightRadius: theme.SIZES.BASE * 0.5,
    borderTopLeftRadius: theme.SIZES.BASE * 0.5,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.5,
  },
  extraMargin: {
    marginTop: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
  },
  avatar: {
    width: theme.SIZES.BASE * 3,
    height: theme.SIZES.BASE * 3,
    borderRadius: theme.SIZES.BASE * 1.5,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});
