import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

// galio components
import { Block, Text, Icon, NavBar } from '..';
import theme from '../theme';

const { width, height } = Dimensions.get('screen');

const bgImage = 'https://images.unsplash.com/photo-1516651029879-bcd191e7d33b?fit=crop&w=330&q=80';

const Article = props => (
  <Block>
    <StatusBar hidden={false} barStyle="light-content" />
    <Block style={styles.navbar}>
      <NavBar transparent leftIconColor={theme.COLORS.WHITE} onLeftPress={() => props.navigation.openDrawer()} />
    </Block>

    <Image source={{ uri: bgImage }} resizeMode="cover" style={{ width, height: height * 0.55 }} />

    <Block center style={{ marginTop: -theme.SIZES.BASE * 2 }}>
      <Block flex style={styles.header}>
        <Block>
          <Text h3>I would happily watch a TV show about crabs</Text>
          <Text muted style={{ marginTop: theme.SIZES.BASE, fontWeight: '500' }}>
            InterBlocking this super star
          </Text>
        </Block>
        <Block space="between" row style={styles.stats}>
          <Block flex={0.25}>
            <Image source={{ uri: 'http://i.pravatar.cc/100' }} style={styles.avatar} />
          </Block>
          <Block flex={0.7} style={styles.middle}>
            <Text style={{ fontWeight: '500' }}>Galio Framework</Text>
            <Text p muted>16 minutes ago</Text>
          </Block>
          <Block flex={0.5} row middle space="around">
            <Block row middle>
              <Icon name="eye" family="MaterialCommunityIcons" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
              <Text p muted style={{ marginLeft: theme.SIZES.BASE * 0.25 }}>25.6k</Text>
            </Block>
            <Block row middle>
              <Icon name="heart-outline" family="MaterialCommunityIcons" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
              <Text p muted style={{ marginLeft: theme.SIZES.BASE * 0.25 }}>936</Text>
            </Block>
          </Block>
        </Block>
        <ScrollView>
          <Text style={{ lineHeight: theme.SIZES.FONT * 1.3 }}>
            You should totally like check this out, ok? Why would you use another UI
            library when you have so many components written by Creative Tim and the
            whole React Native community. Galio was created by developers for
            developers.
          </Text>
          <Text style={{ lineHeight: theme.SIZES.FONT * 1.3 }}>
          A lot of Bacon. I'd really like to eat like a LOT of Bacon :(.
          </Text>
        </ScrollView>
      </Block>
    </Block>
  </Block>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.COLORS.WHITE,
    borderTopLeftRadius: theme.SIZES.BASE * 2,
    borderTopRightRadius: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE * 1.5,
    width,
  },
  navbar: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    position: 'absolute',
  },
  stats: {
    marginVertical: theme.SIZES.BASE * 2,
  },
  avatar: {
    width: theme.SIZES.BASE * 3,
    height: theme.SIZES.BASE * 3,
    borderRadius: theme.SIZES.BASE * 1.5,
  },
  middle: {
    justifyContent: 'center',
  },
});

export default Article;
