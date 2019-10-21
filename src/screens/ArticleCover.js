import React from 'react';
import {
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Constants from 'expo-constants';

// galio components
import {
  Block, Icon, Text, NavBar,
} from 'galio-framework';

import theme from '../theme';

const ArticleCover = props => (
  <Block flex>
    <StatusBar hidden={false} barStyle="light-content" />
    <Image
      style={styles.backgroundImage}
      source={{ uri: 'https://images.unsplash.com/photo-1537005081207-04f90e3ba640?fit=crop&w=764&q=80' }}
    />
    <Block flex space="between" center style={styles.absolute}>
      <NavBar transparent leftIconColor={theme.COLORS.WHITE} onLeftPress={() => props.navigation.openDrawer()} />
      <Block style={styles.articleSummary}>
        <Block row style={{ marginBottom: theme.SIZES.BASE }}>
          <Block row middle style={{ marginRight: theme.SIZES.BASE }}>
            <Icon name="eye" family="font-awesome" color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.875} />
            <Text
              p
              color={theme.COLORS.WHITE}
              size={theme.SIZES.FONT * 0.875}
              style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
            >
            25.6k
            </Text>
          </Block>
          <Block row middle>
            <Icon name="heart" family="font-awesome" color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.875} />
            <Text
              p
              color={theme.COLORS.WHITE}
              size={theme.SIZES.FONT * 0.875}
              style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
            >
            936
            </Text>
          </Block>
        </Block>

        <Block>
          <Text
            color={theme.COLORS.WHITE}
            size={theme.SIZES.FONT * 0.875}
            style={{ marginBottom: theme.SIZES.BASE, fontWeight: '400' }}
          >
            {"Why is 'The Thing' always looking at you?"}
          </Text>
          <Text
            size={theme.SIZES.FONT * 0.875}
            color={theme.COLORS.WHITE}
            style={{ marginBottom: theme.SIZES.BASE, fontWeight: '500', lineHeight: theme.SIZES.FONT * 1.3 }}
          >
            Just small talk from the Fantastic Four.
          </Text>
          <Text
            size={theme.SIZES.FONT * 0.875}
            color={theme.COLORS.WHITE}
            style={{ marginBottom: theme.SIZES.BASE / 2, fontWeight: '500', lineHeight: theme.SIZES.FONT * 1.3 }}
          >
            So... Did you ever think about this bus? Like... How could this bus
            have all these weird colors. This purple is really cute though.
          </Text>
        </Block>
        <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.7)']} style={styles.gradient} />
      </Block>
    </Block>
  </Block>
);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  absolute: {
    position: 'absolute',
    bottom: 0,
    top: Constants.statusBarHeight,
    left: 0,
    right: 0,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
  },
  articleSummary: {
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: '10%',
  },
});

export default ArticleCover;
