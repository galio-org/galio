import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, StyleSheet, ScrollView, SafeAreaView, Platform,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItems,
} from 'react-navigation';

// screens
import SignUp from "./src/screens/SignUp"
import Dashboard from "./src/screens/dashboard/Dashboard"
import Activity from './src/screens/activity/Activity'

import theme from './src/theme';
import { Block, Icon, Text } from 'galio-framework';

const GalioDrawer = props => (
  <SafeAreaView style={styles.drawer} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Block space="between" row style={styles.header}>
      <Block flex={0.3}><Image source={{ uri: 'http://i.pravatar.cc/100' }} style={styles.avatar} /></Block>
      <Block flex style={styles.middle}>
        <Text size={theme.SIZES.FONT * 0.875}>Galio Framework</Text>
        <Text muted size={theme.SIZES.FONT * 0.875}>React Native</Text>
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
    paddingTop: theme.SIZES.BASE * 0.6875,
    paddingBottom: theme.SIZES.BASE * 1.6875,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 0.5,
    marginTop: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : null,
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  middle: {
    justifyContent: 'center',
  },
});

const MenuIcon = ({ name, family, focused }) => (
  <Icon
    name={name}
    family={family}
    size={theme.SIZES.FONT}
    color={focused ? theme.COLORS.WHITE : '#5D5D5D'}
  />
);

MenuIcon.defaultProps = {
  name: null,
  family: null,
  focused: false,
};

MenuIcon.propTypes = {
  name: PropTypes.string,
  family: PropTypes.string,
  focused: PropTypes.bool,
};

const screens = {
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      drawerLabel: 'SignUp',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  Activity:{
    screen: Activity,
    navigationOptions: {
      drawerLabel: 'Activity',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  }
};

const options = {
  contentComponent: props => <GalioDrawer {...props} />,
  contentOptions: {
    labelStyle: {
      fontWeight: '500',
      color: theme.COLORS.GREY,
      fontSize: theme.SIZES.FONT * 0.875,
      marginLeft: theme.SIZES.BASE * 0.75,
    },
    activeLabelStyle: {
      color: theme.COLORS.WHITE,
    },
    activeBackgroundColor: theme.COLORS.THEME,
    itemsContainerStyle: {
      paddingVertical: 0,
    },
    iconContainerStyle: {
      marginHorizontal: 0,
      marginLeft: theme.SIZES.BASE * 1.65,
      // marginRight: theme.SIZES.BASE * 0.76,
    },
  },
};

const GalioApp = createDrawerNavigator(screens, options);

export default GalioApp;
