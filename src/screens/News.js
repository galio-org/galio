import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert, Image, StyleSheet, ScrollView,
} from 'react-native';

// Galio components
import {
  Button, Block, Text, Icon, NavBar,
} from '..';
import theme from '../theme';

const Author = props => (
  <Block row shadow middle space="between" style={styles.author}>
    <Block flex={0.25}>
      <Image source={{ uri: props.avatar }} style={styles.avatar} />
    </Block>
    <Block flex={0.7} style={styles.middle}>
      <Text style={{ fontWeight: '500' }}>{props.title}</Text>
      <Text p muted>{props.caption}</Text>
    </Block>
    <Block flex={0.5} row middle space="around">
      <Block row middle>
        <Icon name="eye" family="MaterialCommunityIcons" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
        <Text size={theme.SIZES.FONT * 0.7} p muted style={{ marginLeft: theme.SIZES.FONT * 0.25 }}>25.6k</Text>
      </Block>
      <Block row middle>
        <Icon name="heart-outline" family="MaterialCommunityIcons" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
        <Text size={theme.SIZES.FONT * 0.7} p muted style={{ marginLeft: theme.SIZES.FONT * 0.25 }}>936</Text>
      </Block>
    </Block>
  </Block>
);

Author.defaultProps = {
  author: null,
  title: null,
  caption: null,
};

Author.propsTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
};


const News = props => (
  <Block flex>
    <NavBar
      back
      title="News"
      titleStyle={{ alignSelf: 'flex-start' }}
      onLeftPress={() => props.navigation.goBack()}
      leftIconColor={theme.COLORS.MUTED}
      right={[
        <Button
          key="right-options"
          color="transparent"
          style={styles.button}
          onPress={() => props.navigation.openDrawer()}
        >
          <Icon size={theme.SIZES.BASE * 1.0625} name="preferences-circle-rotate" family="Galio" color={theme.COLORS.MUTED} />
        </Button>,
        <Button
          key="right-search"
          color="transparent"
          style={styles.button}
          onPress={() => props.navigation.openDrawer()}
        >
          <Icon size={theme.SIZES.BASE * 1.0625} name="zoom-split" family="Galio" color={theme.COLORS.MUTED} />
        </Button>,
      ]}
    />

    <ScrollView style={{ flex: 1 }}>
      <Block flex style={styles.news}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1514518926461-30c892e455ee?fit=crop&w=1300&q=80' }}
          style={styles.articleImage}
        />
        <Block style={styles.article}>
          <Text h4>
            I would happily watch a TV show about crabs
          </Text>
          <Text muted style={[styles.text, { marginVertical: theme.SIZES.BASE * 1.3 }]}>
            InterBlocking is super star
          </Text>
          <Text style={styles.text}>
            You should totally read this sutuff, like seriously all yo homies
            love sneak dissing but at least u’re true, right?
          </Text>
          <Text muted style={styles.text}>
            Spicy jalapeno bacon ipsum dolor amet short loin cupidatat est, pork
            pancetta velit kevin occaecat ipsum aliqua ham tri-tip incididunt.
          </Text>
          <Text muted style={styles.text}>
            Irure sirloin nostrud filet mignon capicola strip
            steak, sink pork dolore pig shirt ribs. Et pariatur
            sunt, ribeye esse frankfurter biltong nostrud. Elit
            do filet mignon turkey, temport pastrami ea bacon. In
            tritip id cupim tail ham irure. Drumstick esse ut
            andouille strip steak. Et pariatur sunt, ribeye esse
            frankfurter biltong nostrud. Elit do filet mignon
            turkey, temport pastrami ea bacon. In tritip id
            cupim tail ham irure. Drumstick esse ut andouille
            strip steak.
          </Text>
        </Block>
      </Block>
    </ScrollView>

    <Block card shadow row style={[styles.cardFooter, styles.author]}>
      <Block flex={1.2} row>
        <Image source={{ uri: 'http://i.pravatar.cc/100' }} style={styles.cardAvatar} />
        <Block style={styles.cardTitle}>
          <Text size={theme.SIZES.FONT * 0.875}>Christopher Moon</Text>
          <Text p muted size={theme.SIZES.FONT * 0.875}>138 minutes ago</Text>
        </Block>
      </Block>
      <Block flex row middle space="around">
        <Block row middle style={{ marginHorizontal: theme.SIZES.BASE }}>
          <Icon name="eye" family="Galio" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.875} />
          <Text
            p
            color={theme.COLORS.MUTED}
            size={theme.SIZES.FONT * 0.875}
            style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
          >
            25.6k
          </Text>
        </Block>
        <Block row middle>
          <Icon name="heart-2" family="Galio" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.875} />
          <Text
            p
            color={theme.COLORS.MUTED}
            size={theme.SIZES.FONT * 0.875}
            style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
          >
            936
          </Text>
        </Block>
      </Block>
    </Block>
  </Block>
);

const styles = StyleSheet.create({
  article: {
    marginTop: theme.SIZES.BASE * 1.75,
  },
  articleImage: {
    borderRadius: theme.SIZES.BASE / 2,
    height: theme.SIZES.BASE * 13.75,
  },
  news: {
    marginTop: theme.SIZES.BASE / 2,
    paddingBottom: theme.SIZES.BASE / 2,
    justifyContent: 'flex-start',
    paddingHorizontal: theme.SIZES.BASE,
  },
  button: {
    width: theme.SIZES.BASE * 2,
    borderColor: 'transparent',
  },
  author: {
    position: 'absolute',
    right: theme.SIZES.BASE,
    left: theme.SIZES.BASE,
    bottom: theme.SIZES.BASE * 1.56,
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: theme.SIZES.BASE * 0.5,
  },
  cardFooter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 0.625,
    borderColor: theme.COLORS.TRANSPARENT,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 16,
  },
  cardAvatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  cardTitle: {
    justifyContent: 'center',
    paddingLeft: theme.SIZES.BASE / 2,
  },
  text: {
    fontWeight: '400',
    fontSize: theme.SIZES.FONT * 0.875,
    lineHeight: theme.SIZES.BASE * 1.25,
    letterSpacing: 0.3,
    marginBottom: theme.SIZES.BASE,
  },
});

export default News;
