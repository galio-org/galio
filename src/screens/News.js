import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, StyleSheet, ScrollView, Platform, TouchableOpacity
} from 'react-native';

import Constants from 'expo-constants';

// Galio components
import {
  Button, Block, Card, Text, Icon, NavBar,
} from 'galio-framework';
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
        <Icon name="eye" family="material-community" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
        <Text size={theme.SIZES.FONT * 0.7} p muted style={{ marginLeft: theme.SIZES.FONT * 0.25 }}>25.6k</Text>
      </Block>
      <Block row middle>
        <Icon name="heart-outline" family="material-community" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
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
  <Block safe flex>
    <NavBar
      title="News"
      titleStyle={{ alignSelf: 'flex-start' }}
      leftIconColor={theme.COLORS.MUTED}
      left={(
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Icon 
            name="menu"
            family="feather"
            size={theme.SIZES.BASE}
            color={theme.COLORS.ICON}
          />
        </TouchableOpacity>
      )}
      style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
      right={[
        <Button
          key="right-options"
          color="transparent"
          style={styles.button}
          onPress={() => props.navigation.openDrawer()}
        >
          <Icon size={theme.SIZES.BASE * 1.0625} name="fire" family="font-awesome" color={theme.COLORS.MUTED} />
        </Button>,
        <Button
          key="right-search"
          color="transparent"
          style={styles.button}
          onPress={() => props.navigation.openDrawer()}
        >
          <Icon size={theme.SIZES.BASE * 1.0625} name="leaf" family="font-awesome" color={theme.COLORS.MUTED} />
        </Button>,
      ]}
    />

    <ScrollView style={{ flex: 1 }}>
      <Block flex style={styles.news}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1535649168324-4198731b2252?fit=crop&w=1300&q=80' }}
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

    <Card
      flex
      borderless
      shadowColor={theme.COLORS.BLACK}
      style={styles.author}
      title="Christopher Moon"
      caption="139 minutes ago"
      avatar="http://i.pravatar.cc/100?id=article"
      location={(
        <Block row right>
          <Block row middle style={{ marginHorizontal: theme.SIZES.BASE }}>
            <Icon name="eye" family="font-awesome" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.875} />
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
            <Icon name="heart" family="font-awesome" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.875} />
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
      )}
    />
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
    bottom: Constants.statusBarHeight,
    backgroundColor: theme.COLORS.WHITE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: theme.SIZES.BASE / 2,
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
