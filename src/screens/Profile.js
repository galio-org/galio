import React from 'react';
import { StyleSheet, ScrollView, Platform } from 'react-native';
import { LinearGradient as Gradient } from 'expo';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

// galio components
import { Button, Block, Icon, Text, NavBar } from 'galio-framework';
import theme from '../theme';

const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_BLUE = ['#6B84CA', '#8F44CE'];
const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED; // '#D8DDE1';

// mock data
const cards = [
  {
    title: 'Tasks',
    subtitle: '15 completed tasks',
    icon: 'list-bullet',
    iconFamily: 'Galio',
  },

  {
    title: 'Aquisitions',
    subtitle: '15 completed tasks',
    icon: 'bag-17',
    iconFamily: 'Galio',
  },
  {
    title: 'Cards',
    subtitle: '15 completed tasks',
    icon: 'credit-card',
    iconFamily: 'Galio',
  },

  {
    title: 'Settings',
    subtitle: '15 completed tasks',
    icon: 'settings-gear-65',
    iconFamily: 'Galio',
  },
];
const statsTitles = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov'];

class Profile extends React.Component {
  renderHeader = () => (
    <NavBar
      title="Social Profile"
      onLeftPress={() => this.props.navigation.openDrawer()}
      leftIconColor={theme.COLORS.MUTED}
      right={
        <Button
          color="transparent"
          style={styles.settings}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Icon
            size={BASE_SIZE}
            name="heart-2"
            family="Galio"
            color={theme.COLORS.MUTED}
          />
        </Button>
      }
      style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
    />
  );

 

  render() {
    return (
      <Block safe flex>
        {/* header */}
        {this.renderHeader()}

      </Block>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderColor: 'transparent',
    marginHorizontal: BASE_SIZE,
    marginVertical: BASE_SIZE / 2,
    padding: BASE_SIZE,
    backgroundColor: COLOR_WHITE,
    shadowOpacity: 0.4,
  },
  menu: {
    width: BASE_SIZE * 2,
    borderColor: 'transparent',
  },
  settings: {
    width: BASE_SIZE * 2,
    borderColor: 'transparent',
  },
  left: {
    marginRight: BASE_SIZE,
  },
  right: {
    width: BASE_SIZE * 2,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  gradient: {
    width: BASE_SIZE * 3.25,
    height: BASE_SIZE * 3.25,
    borderRadius: BASE_SIZE * 3.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
