import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo';
// galio components
import { Block, Text, NavBar } from '..';
import theme from '../theme';

// space-between view and another view for the back button

const ArticleCover = props => (
  <Block flex>
    <StatusBar hidden={false} barStyle="light-content" />
    <Image
      style={styles.backgroundImage}
      source={{ uri: 'https://images.unsplash.com/photo-1537005081207-04f90e3ba640?fit=crop&w=764&q=80' }}
    />
    <LinearGradient colors={['transparent', theme.COLORS.BLACK]} style={styles.gradient} />
    <Block flex space="between" center style={styles.absolute}>
      <NavBar transparent leftIconColor={theme.COLORS.WHITE} onLeftPress={() => props.navigation.openDrawer()} />
      <Block style={styles.articleSummary}>
        <Text h4 color={theme.COLORS.WHITE} style={{ marginBottom: 15, fontWeight: '300' }}>
          {"Why is 'The Thing' always looking at you?"}
        </Text>
        <Text color={theme.COLORS.WHITE} style={{ marginBottom: 15, fontWeight: '300' }}>
          Just small talk from the Fantastic Four.
        </Text>
        <Text size={theme.SIZES.FONT * 0.75} color={theme.COLORS.WHITE} style={{ marginBottom: 5, fontWeight: '300' }}>
          So... Did you ever think about this bus? Like... How could this bus
          have all these weird colors. This purple is really cute though.
        </Text>
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
    top: 0,
    left: 0,
    right: 0,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '90%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 6,
  },
  articleSummary: {
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: '10%',
  },
});

export default ArticleCover;
