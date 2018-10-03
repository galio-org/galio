import React from 'react';
import { Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  DrawerItems,
} from 'react-navigation';

// screens
import Article from './src/screens/Article';
import ArticleCover from './src/screens/ArticleCover';
import ArticleFeed1 from './src/screens/ArticleFeedv1';
import ArticleFeed2 from './src/screens/ArticleFeedv2';
import Components from './src/screens/Components';
import Login from './src/screens/Login';
import News from './src/screens/News';
import Presentation from './src/screens/Presentation';
import Dashboard from './src/screens/Dashboard';
import Register from './src/screens/Register';
import Grid from './src/screens/Grid';

import theme from './src/theme';
import { Block, Icon, Text } from './src';

const GalioDrawer = props => (
  <SafeAreaView style={styles.drawer} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Block space="between" row style={styles.header}>
      <Block flex={0.3}><Image source={{ uri: 'http://i.pravatar.cc/100' }} style={styles.avatar} /></Block>
      <Block flex style={styles.middle}>
        <Text>Galio Framework</Text>
        <Text p muted>React Native</Text>
      </Block>
    </Block>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
    // borderBottomColor: theme.COLORS.BLOCK,
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  middle: {
    justifyContent: 'center',
  },
});

const MenuIcon = ({name, family, focused}) => (
  <Icon
    name={name}
    family={family}
    size={theme.SIZES.FONT * 1.25}
    color={theme.COLORS[focused ? 'WHITE' : 'GREY']} />
);

const ArticleFeed = createStackNavigator({
  ArticleCard: {
    screen: ArticleFeed1,
    navigationOptions: {
      header: null,
    },
  },
  News: {
    screen: News,
    navigationOptions: {
      header: null,
    },
  },
});

const screens = {
  Home: {
    screen: Components,
    navigationOptions: {
      drawerLabel: 'Components',
      drawerIcon: props => <MenuIcon name="home" family="MaterialCommunityIcons" focused={props.focused} />,
    },
  },
  ArticleFull: {
    screen: ArticleFeed,
    navigationOptions: {
      drawerLabel: 'Full Background Cards',
      drawerIcon: props => <MenuIcon name="view-grid" family="MaterialCommunityIcons" focused={props.focused} />,
    },
  },
  ArticleHalf: {
    screen: ArticleFeed2,
    navigationOptions: {
      drawerLabel: 'Normal Cards',
      drawerIcon: props => <MenuIcon name="grid-large" family="MaterialCommunityIcons" focused={props.focused} />,
    },
  },
  Article: {
    screen: Article,
    navigationOptions: {
      drawerLabel: 'Article Screen',
      drawerIcon: props => <MenuIcon name="ios-paper-outline" family="Ionicons" focused={props.focused} />,
    },
  },
  ArticleCover: {
    screen: ArticleCover,
    navigationOptions: {
      drawerLabel: 'Article Cover',
      drawerIcon: props => <MenuIcon name="ios-paper" family="Ionicons" focused={props.focused} />,
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard screen',
      drawerIcon: props => <MenuIcon name="dashboard" family="FontAwesome" focused={props.focused} />,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: 'Login Screen',
      drawerIcon: props => <MenuIcon name="login-variant" family="MaterialCommunityIcons" focused={props.focused} />,
    },
  },
  News: {
    screen: News,
    navigationOptions: {
      drawerLabel: 'News Screen',
      drawerIcon: props => <MenuIcon name="newspaper-o" family="FontAwesome" focused={props.focused} />,
    },
  },
  Presentation: {
    screen: Presentation,
    navigationOptions: {
      drawerLabel: 'Presentation Screen',
      drawerIcon: props => <MenuIcon name="presentation" family="MaterialCommunityIcons" focused={props.focused} />,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      drawerLabel: 'Register Screen',
      drawerIcon: props => <MenuIcon name="registered" family="FontAwesome" focused={props.focused} />,
    },
  },
  Grid: {
    screen: Grid,
    navigationOptions: {
      drawerLabel: 'Grid Screen',
      drawerIcon: props => <MenuIcon name="grid" family="Feather" focused={props.focused} />,
    },
  },
};

const options = {
  contentComponent: props => <GalioDrawer {...props} />,
  contentOptions: {
    labelStyle: {
      fontWeight: '500',
      color: theme.COLORS.BLOCK,
      fontSize: theme.SIZES.FONT * 0.85,
    },
    activeLabelStyle: {
      color: theme.COLORS.WHITE,
    },
    activeBackgroundColor: theme.COLORS.THEME,
    itemStyle: {
      borderBottomColor: theme.COLORS.BLOCK,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    iconContainerStyle: {
      marginHorizontal: 0,
      marginLeft: theme.SIZES.BASE * 0.75,
    },
  },
};

const GalioApp = createDrawerNavigator(screens, options);

export default GalioApp;
