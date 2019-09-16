import React from 'react';
import { StyleSheet, Platform, View, ScrollView } from 'react-native';
import Timeline from 'react-native-timeline-feed';
import { LinearGradient as Gradient } from 'expo';

import theme from '../theme';

// galio components
import { Button, Block, NavBar } from 'galio-framework';

const LINE_COLOR = '#efefef';
const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];
const data = [
  {
    id: '0',
    title: 'July 17, 2019',
    description: 'Get a 2% discount on your next order! Receive it',
  },
  {
    id: '1',
    title: 'May 24, 2019',
    description: 'We fixed latest issue with profile & activity screens',
  },
  {
    id: '2',
    title: 'February 17, 2019',
    description: 'Lucy’s Closet is now open  until 8pm. Find you',
  },
  {
    id: '3',
    title: 'February 17, 2019',
    description: 'All your favourite books at your reach, Bookstore',
  },
  {
    id: '4',
    title: 'January 10, 2019',
    description: 'Be the first to know about discounts and offers',
  },
];
export default class Activity extends React.Component {
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
              data={data}
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
      <Timeline.Row key="origin">
        <Timeline.VerticalSeparator  style={{marginTop:40}}>
          <Timeline.Circle color={theme.COLORS.NEUTRAL}>
            <Gradient
              start={[0.45, 0.45]}
              end={[0.8, 0.8]}
              colors={GRADIENT_PINK}
              style={[styles.circleGradient, styles.dotStyle]}
            />
          </Timeline.Circle>
          <Timeline.Line color={LINE_COLOR} />
        </Timeline.VerticalSeparator>
        <Timeline.Event
          style={styles.event}
        >
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
    paddingHorizontal: 14,
    justifyContent: 'flex-start',
    backgroundColor: theme.COLORS.WHITE,
  },
  time: {
    color: theme.COLORS.BLACK,
  },
  event: {
    paddingBottom: 20,
  },
  title: {
    color: theme.COLORS.GREY,
    fontWeight: '400',
  },
  description: {
    color: theme.COLORS.BLACK,
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
  },
  circleGradient: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotStyle:{
    marginHorizontal : 20
  },
  lineStyle:{
    marginTop:40
  }
});
