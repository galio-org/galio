import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo';

// galio components
import { Block, Text, AuthorSection, NavBar } from '..';

import theme from '../theme';

const bgImage = 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?fit=crop&w=760&q=80';

const Article = props => (
  <ImageBackground source={{ uri: bgImage }} style={{ width: '100%', height: '100%' }}>
    <Block flex style={styles.bottom}>
      <StatusBar hidden={false} barStyle="light-content" />
      <Block style={styles.navbar}>
        <NavBar transparent leftIconColor={theme.COLORS.WHITE} onLeftPress={() => props.navigation.openDrawer()} />
      </Block>

      <Block style={styles.articleContainer}>
        <Block flex style={{ marginBottom: theme.SIZES.BASE }}>
          <Text h3>I would happily watch a TV show about crabs</Text>
          <Text muted size={theme.SIZES.FONT} style={{ marginTop: theme.SIZES.BASE, fontWeight: '600' }}>
            InterBlocking this super star
          </Text>
        </Block>
        <Block flex>
          <AuthorSection
            imageSource="http://i.pravatar.cc/100"
            title="Alin Gheorghe"
            subTitle="420 minutes ago"
            style={{ paddingHorizontal: 0 }}
          />
        </Block>
        <Block flex>
          <Text style={{ marginTop: 10, lineHeight: theme.SIZES.FONT * 1.4 }}>
            You should totally like check this out, ok? Why would you use another UI
            library when you have so many components written by Creative Tim and the
            whole React Native community. Galio was created by developers for
            developers.
          </Text>
          <Text style={{ marginTop: 10 }}>
            A lot of Bacon. I'd really like to eat like a LOT of Bacon :(.
          </Text>
        </Block>
        <LinearGradient
          colors={['rgba(255,255,255,0.25)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.9)']}
          style={styles.gradient}
        />
      </Block>
    </Block>
  </ImageBackground>
);

const styles = StyleSheet.create({
  articleContainer: {
    backgroundColor: theme.COLORS.WHITE,
    borderTopLeftRadius: theme.SIZES.BASE * 2,
    borderTopRightRadius: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingTop: theme.SIZES.BASE * 2,
    paddingBottom: theme.SIZES.BASE * 5,
    height: '58%',
  },
  navbar: {
    position: 'absolute',
    top: theme.SIZES.BASE,
    left: 0,
    right: 0,
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    height: theme.SIZES.BASE * 12,
  },
});

export default Article;
