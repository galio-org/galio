import React from 'react';
import { StyleSheet, Platform, View, ScrollView } from 'react-native';

import { LinearGradient as Gradient } from 'expo';
import theme from '../../theme';

import Timeline from 'react-native-timeline-feed';

// galio components
import { Button, Block, NavBar } from 'galio-framework';


const transparent = 'rgb(255, 255, 255)';
const LINE_COLOR = '#efefef';
const TEXT_COLOR = '#333';
const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];

export default class Activity extends React.Component {
  data = [
    {
      time: '09:00',
      title: 'July 17, 2019',
      description:
        'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
    },
    {
      time: '10:45',
      title: 'May 24, 2019',
      description:
        'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
    },
    { time: '12:00', title: 'April 02, 2019' },
    {
      time: '14:00',
      title: 'February 17, 2019',
      description:
        'Team sport played between two teams of eleven players with a spherical ball. ',
    },
    {
      time: '16:30',
      title: 'January 10, 2019',
      description: 'Look out for the Best Gym & Fitness Centers around me :)',
    },
    {
      time: '16:30',
      title: 'January 10, 2019',
      description: 'Look out for the Best Gym & Fitness Centers around me :)',
    },
    {
      time: '16:30',
      title: 'January 10, 2019',
      description: 'Look out for the Best Gym & Fitness Centers around me :)',
    },
    {
      time: '16:30',
      title: 'January 10, 2019',
      description: 'Look out for the Best Gym & Fitness Centers around me :)',
    },
  ];

  render() {
    return (
      <Block safe flex>
        <NavBar
          title="Activity"
          onLeftPress={() => this.props.navigation.openDrawer()}
          leftIconColor={theme.COLORS.MUTED}
          right={
            <Button
              color="transparent"
              style={styles.settings}
              onPress={() => this.props.navigation.openDrawer()}
            ></Button>
          }
          style={
            Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null
          }
        />
        <ScrollView style={{ flex: 1 }}>
          <Block style={styles.container}>
            <Timeline
              data={this.data}
              endWithCircle
              renderItem={this.renderItem}
            />
          </Block>
        </ScrollView>
      </Block>
    );
  }

  renderItem = ({ item, index }) => {
    return (
      <Timeline.Row >
        <Timeline.VerticalSeparator>
          <Timeline.Circle color={transparent}>
            <Gradient
              start={[0.45, 0.45]}
              end={[0.8, 0.8]}
              colors={GRADIENT_PINK}
              style={[styles.circleGradient]}
            />
          </Timeline.Circle>
          <Timeline.Line color={LINE_COLOR} />
        </Timeline.VerticalSeparator>
        <Timeline.Event style={styles.event} keyExtractor={(item, index) => index.toString()}>
          <View style={[styles.card, styles.titleAndTimeContainer]}>
            <Timeline.Title textStyle={styles.title}>
              {item.title}
            </Timeline.Title>

            <Timeline.Description textStyle={styles.description}>
              {item.description}
            </Timeline.Description>
          </View>
        </Timeline.Event>
      </Timeline.Row>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    justifyContent: 'flex-start',
    backgroundColor: theme.COLORS.WHITE,
  },
  time: {
    color: TEXT_COLOR,
  },
  event: {
    paddingBottom: 20,
  },
  title: {
    color: theme.COLORS.GREY,
    fontWeight: '400',
  },
  description: {
    color: TEXT_COLOR,
  },
  card: {
    marginLeft: 5,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 3,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.24,
    borderRadius: 5,
  },
  circleGradient: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


