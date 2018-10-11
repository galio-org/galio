import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert, Image, StyleSheet, ScrollView,
} from 'react-native';

import { LinearGradient } from 'expo';

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
      rightStyle={{ flexDirection: 'row' }}
      leftStyle={{ flex: 0.5 }}
      right={[
        <Button
          key="right-options"
          onlyIcon
          icon="ios-options"
          iconFamily="Ionicons"
          color="transparent"
          iconColor={theme.COLORS.MUTED}
          iconSize={theme.SIZES.BASE * 1.6}
          style={{ transform: [{ rotate: '90deg' }], marginRight: theme.SIZES.BASE }}
          onPress={() => Alert.alert('Settings')}
        />,
        <Button
          key="right-search"
          onlyIcon
          icon="ios-search"
          color="transparent"
          iconFamily="Ionicons"
          iconColor={theme.COLORS.MUTED}
          iconSize={theme.SIZES.BASE * 1.6}
          onPress={() => Alert.alert('Search')}
        />,
      ]}
    />

    <ScrollView style={{ flex: 1 }}>
      <Block flex style={styles.news}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1536523552737-74ded3c0591c?fit=crop&w=1300&q=80', }}
          style={styles.articleThumbnail}
        />
        <Block style={styles.article}>
          <Text h4>
            What's going on with this little Cactus? Is he going crazy?
          </Text>
          <Text muted style={[styles.text, { marginVertical: theme.SIZES.BASE * 1.3 }]}>
            A chat with a little Cactus.
          </Text>
          <Text style={styles.text}>
            You should totally read this stuff, like seriously all yo homies
            love sneak dissing but at least u're true, right?
          </Text>
          <Text muted style={styles.text}>
            Spicy jalapeno bacon ipsum dolor amet short loin cupidatat est, pork
            pancetta velit kevin occaecat ipsum aliqua ham tri-tip incididunt.
          </Text>
          <Text muted style={styles.text}>
            Irure sirloin nostrud filet mignon capicola strip steak, sint pork
            dolore pig short ribs. Et pariatur sunt, ribeye esse frankfurter
            biltong nostrud. Elit do filet mignon turkey, tempor pastrami ea
            bacon. In tri-tip id cupim tail ham irure. Drumstick esse ut
            andouille strip steak.
          </Text>
        </Block>
      </Block>
    </ScrollView>

    <LinearGradient colors={['transparent', theme.COLORS.WHITE]} style={styles.gradient} />

    <Author
      title="Galio Framework"
      caption="27 minutes ago"
      avatar="https://api.adorable.io/avatars/100/galio.io.png"
    />

  </Block>
);

const styles = StyleSheet.create({
  articleThumbnail: {
    borderRadius: theme.SIZES.BASE / 2,
    height: theme.SIZES.BASE * 16,
  },
  article: {
    marginTop: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
  },
  news: {
    marginTop: theme.SIZES.BASE / 2,
    paddingBottom: theme.SIZES.BASE / 2,
    justifyContent: 'flex-start',
    paddingHorizontal: theme.SIZES.BASE,
  },
  author: {
    position: 'absolute',
    right: theme.SIZES.BASE,
    left: theme.SIZES.BASE,
    bottom: theme.SIZES.BASE * 1.75,
    backgroundColor: theme.COLORS.WHITE,
    padding: theme.SIZES.BASE * 0.8,
    borderRadius: theme.SIZES.BASE / 3,
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  text: {
    fontWeight: '500',
    fontSize: theme.SIZES.FONT,
    lineHeight: theme.SIZES.FONT * 1.4,
    marginBottom: theme.SIZES.BASE,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: theme.SIZES.BASE * 6,
  },
});

export default News;
