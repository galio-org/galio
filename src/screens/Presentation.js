import React from 'react';
import {
  Dimensions, StyleSheet, StatusBar, Image,
} from 'react-native';
import { LinearGradient } from 'expo';
import Constants from 'expo-constants';
// galio components
import {
  Text, Button, Block, NavBar,
} from 'galio-framework';
import theme from '../theme';

const { width } = Dimensions.get('screen');
const iphoneImage = require('../../assets/iphone.png');

const Presentation = props => (
  <Block flex>
    <StatusBar hidden={false} barStyle="light-content" />
    <Block style={styles.navbar}>
      <NavBar
        transparent
        leftIconColor={theme.COLORS.WHITE}
        onLeftPress={() => props.navigation.openDrawer()}
      />
    </Block>

    <LinearGradient
      colors={['#ad5389', '#3c1053']}
      end={[0.5, 0.9]}
      style={styles.backgroundGradient}
    />
    <Block flex center style={styles.container}>
      <Block flex middle style={{ justifyContent: 'flex-end', marginBottom: theme.SIZES.BASE * 2.5 }}>
        <Text center size={theme.SIZES.FONT * 2.375} color={theme.COLORS.WHITE} style={{ marginBottom: theme.SIZES.BASE }}>
          Check this out
        </Text>
        <Text center size={theme.SIZES.FONT * 0.875} color={theme.COLORS.WHITE} style={{ marginBottom: theme.SIZES.BASE * 1.875, paddingHorizontal: theme.SIZES.BASE * 2 }}>
          You should totally read this stuf, like
          seriously all yo homies love sneak dissing
          but at least u’re true, right?
        </Text>
        <Button size="large" color="transparent" round onPress={() => props.navigation.openDrawer()}>
          Get Started
        </Button>
      </Block>
      <Block flex style={{ marginBottom: -Constants.statusBarHeight * 2 }}>
        <Image source={iphoneImage} style={{ width }} />
      </Block>
    </Block>
  </Block>
);

const styles = StyleSheet.create({
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 0,
  },
  container: {
    paddingHorizontal: theme.SIZES.BASE,
  },
  navbar: {
    top: Constants.statusBarHeight,
    left: 0,
    right: 0,
    zIndex: 9999,
    position: 'absolute',
  },
});

export default Presentation;
