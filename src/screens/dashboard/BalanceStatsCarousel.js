import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Animated,
  Image,
} from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ChartGradient from '../../helpers/chartGradient';

import * as shape from 'd3-shape';
import theme from '../../theme';

// galio components
import { Block, Text } from 'galio-framework';

const BASE_SIZE = theme.SIZES.BASE;
const { width } = Dimensions.get('screen');
const cardWidth = width - theme.SIZES.BASE * 1.5;

const Header = ({ balance }) => (
  <Block left>
    <Text color={theme.COLORS.GREY} h5>
      Balance
    </Text>
    <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h3>
      $ {balance}
    </Text>
  </Block>
);
const BalanceCard = ({ chartData, balance, chartLabels }) => {
  return (
    <View
      style={[styles.card, styles.borderCard]}
    >
      <Header balance={balance} />
      <LineChart
        style={{ height: 100 }}
        data={chartData}
        belowChart={true}
        contentInset={{ top: 30, bottom: 10, left: 0, right: 10 }}
        curve={shape.curveNatural}
        svg={{ stroke: 'url(#gradient)', strokeWidth: 4 }}
      >
        <ChartGradient />
      </LineChart>
      <Block row space="evenly" style={{ marginTop: BASE_SIZE }}>
        <Labels data={chartLabels} />
      </Block>
    </View>
  );
};
const Labels = ({ data }) =>
  data.map((item, index) => (
    <Text
      key={index}
      size={theme.SIZES.FONT * 0.85}
      color={theme.COLORS.GREY}
      alignmentBaseline={'middle'}
      style={{ padding: 10 }}
    >
      {item}
    </Text>
  ));
const DotsIndicators = ({ data, position }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {data.map((_, i) => {
        let opacity = position.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={i}
            style={{
              opacity,
              ...styles.paginationDot,
            }}
          />
        );
      })}
    </View>
  );
};
export default class BalanceStatsCarousel extends React.Component {
  scrollX = new Animated.Value(0);

  renderCard(item, index) {
    return (
      <BalanceCard
        chartData={item.data}
        balance={item.amount}
        index={index}
        key={index}
        chartLabels={item.labels}
      />
    );
  }
  render() {
    let position = Animated.divide(this.scrollX, width);
    const chartData = [
      {
        amount: '250.563',
        data: [50, 80, 60, 95, 120],
        labels: ['04/11', '05/11', '06/11', '07/11', '08/11'],
      },
      {
        amount: '234.567',
        data: [50, 80, 60, 95, 120],
        labels: ['04/11', '05/11', '06/11', '07/11', '08/11'],
      },
      {
        amount: '213.456',
        data: [50, 80, 60, 95, 120],
        labels: ['04/11', '05/11', '06/11', '07/11', '08/11'],
      },
      {
        amount: '234.567',
        data: [50, 80, 60, 95, 120],
        labels: ['04/11', '05/11', '06/11', '07/11', '08/11'],
      },
      {
        amount: '234.567',
        data: [50, 80, 60, 95, 120],
        labels: ['04/11', '05/11', '06/11', '07/11', '08/11'],
      },
    ];

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ marginTop: 15 }}>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: this.scrollX } } },
            ])}
            contentContainerStyle={{
              paddingHorizontal: 5
            }}
            scrollEventThrottle={16}
          >
            {chartData.map((item, index) => {
              return this.renderCard(item, index);
            })}
          </ScrollView>
        </View>
        <DotsIndicators data={chartData} position={position} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    padding: 14,
    backgroundColor: theme.COLORS.WHITE,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.24,
    borderRadius: 5,
  },
  borderCard: {
    borderColor: theme.COLORS.GREY,
    borderWidth: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  paginationDot: {
    height: 10,
    width: 10,
    backgroundColor: '#D442F8',
    margin: 8,
    borderRadius: 5,
  },
});
