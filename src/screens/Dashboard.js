import React from 'react';
import {
  View, StyleSheet, StatusBar, ScrollView,
} from 'react-native';
import { Constants } from 'expo';
import Gradient from 'expo/src/effects/LinearGradient';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

// galio components
import { Button, Icon, Text, NavBar } from '../';

const BASE_SIZE = 14;
const GRADIENT_BLUE = ['#6C3CF7', '#4F3DF2', '#2734EF'];
const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];
const COLOR_WHITE = '#FFFFFF';
const COLOR_BLACK = '#000000';
const COLOR_GREY = '#D8DDE1';

// mock data
const cards = [
  {
    title: 'Settings',
    subtitle: '15 completed tasks',
    icon: 'settings',
    iconFamily: 'MaterialIcons',
  },

  {
    title: 'Locations',
    subtitle: '14 completed tasks',
    icon: 'location-pin',
    iconFamily: 'SimpleLineIcons',
  },
  {
    title: 'Credit cards',
    subtitle: '7 completed tasks',
    icon: 'credit-card',
    iconFamily: 'MaterialIcons',
  },

  {
    title: 'Comments',
    subtitle: '7 completed tasks',
    icon: 'comment-text-outline',
    iconFamily: 'MaterialCommunityIcons',
  },
  {
    title: 'Statistics',
    subtitle: '11 completed tasks',
    icon: 'bar-chart',
    iconFamily: 'FontAwesome',
  },

];
const statsActive = [
  1.5, 1, 1.4, 1.5, 1.8, 1.35, 1.84, 1.83, 1.9, 1.05, 1.06, 1.7, 1.35, 1.35, 1.5,
];
const statsInactive = [
  2, 1.7, 1.65, 1.1, 1.06, 1.05, 1.3, 1, 1.84, 1.8, 1.85, 1.75, 1.74, 1.7, 1.5,
];
const statsTitles = ['04/18', '05/18', '06/18', '07/18', '08/18'];

class Dashboard extends React.Component {
  renderHeader = () => (
    <NavBar
      transparent
      title="Dashboard"
      left={(
        <Button
          color="transparent"
          style={styles.menu}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Icon size={BASE_SIZE * 2} name="menu" family="Entypo" color={COLOR_GREY} />
        </Button>
)}
      right={(
        <Button
          color="transparent"
          style={styles.settings}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Icon size={BASE_SIZE * 1.5} name="ios-options" family="Ionicons" color={COLOR_GREY} />
        </Button>
)}
    />
  )

  renderStats = () => {
    const Gradient = () => (
      <Defs key="gradient">
        <LinearGradient id="gradient" x1="0" y="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#9B40F8" />
          <Stop offset="100%" stopColor="#6C3CF7" />
        </LinearGradient>
      </Defs>
    );

    return (
      <View style={{ marginBottom: BASE_SIZE * 3 }}>
        <AreaChart
          yMin={0}
          yMax={3}
          data={statsInactive}
          curve={shape.curveNatural}
          style={[StyleSheet.absoluteFill]}
          contentInset={{ bottom: -BASE_SIZE * 0.15, right: -BASE_SIZE * 0.15, left: -BASE_SIZE * 0.15 }}
          svg={{ strokeWidth: BASE_SIZE * 0.15, stroke: COLOR_GREY }}
        >
          <Gradient />
        </AreaChart>
        <AreaChart
          yMin={0}
          yMax={3}
          data={statsActive}
          curve={shape.curveNatural}
          style={{ height: BASE_SIZE * 7 }}
          contentInset={{ bottom: -BASE_SIZE * 0.21, right: -BASE_SIZE * 0.21, left: -BASE_SIZE * 0.21 }}
          svg={{ strokeWidth: BASE_SIZE * 0.21, stroke: 'url(#gradient)' }}
        >
          <Gradient />
        </AreaChart>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: BASE_SIZE }}>
          {statsTitles.map(title => <Text key={title} muted>{title}</Text>)}
        </View>
      </View>
    );
  }

  renderCard = (props, index) => {
    const gradientColors = index % 2 ? GRADIENT_PINK : GRADIENT_BLUE;

    return (
      <View key={props.title} style={[styles.card, styles.shadow]}>
        <Gradient
          start={[0.45, 0.45]}
          end={[0.90, 0.90]}
          colors={gradientColors}
          style={[styles.gradient, styles.left]}
        >
          <Icon
            size={BASE_SIZE * 1.5}
            name={props.icon}
            family={props.iconFamily}
            color={COLOR_WHITE}
          />
        </Gradient>

        <View style={{ flex: 1 }}>
          <Text h5>{props.title}</Text>
          <Text muted>{props.subtitle}</Text>
        </View>
        <Button style={styles.right}>
          <Icon size={BASE_SIZE * 2} name="ios-arrow-forward" family="Ionicons" color={COLOR_GREY} />
        </Button>
      </View>
    );
  }

  renderCards = () => cards.map((card, index) => this.renderCard(card, index))

  render() {
    return (
      <View style={{ marginTop: Constants.statusBarHeight * 1.25, flex: 1, flexDirection: 'column' }}>
        <StatusBar hidden={false} />
        {/* header */}
        {this.renderHeader()}

        {/* stats */}
        {this.renderStats()}

        {/* cards */}
        <ScrollView style={{ flex: 1 }}>
          {this.renderCards()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: BASE_SIZE * 0.35,
    marginHorizontal: BASE_SIZE,
    marginVertical: BASE_SIZE / 1.25,
    padding: BASE_SIZE,
    backgroundColor: COLOR_WHITE,
  },
  shadow: {
    shadowColor: COLOR_BLACK,
    shadowOffset: { width: 0, height: BASE_SIZE * 0.28 },
    shadowOpacity: 0.1,
    shadowRadius: BASE_SIZE * 0.57,
    elevation: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menu: {
    width: BASE_SIZE * 2,
    borderColor: 'transparent',
  },
  settings: {
    width: BASE_SIZE * 2,
    borderColor: 'transparent',
    transform: [{ rotate: '90deg' }],
  },
  left: {
    marginRight: BASE_SIZE,
  },
  right: {
    width: BASE_SIZE * 2,
    backgroundColor: 'transparent',
  },
  gradient: {
    width: BASE_SIZE * 4,
    height: BASE_SIZE * 4,
    borderRadius: BASE_SIZE * 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
