import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ChartGradient from '../../helpers/chartGradient';

import * as shape from 'd3-shape';
import theme from '../../theme';

// galio components
import { Block, Text } from 'galio-framework';

const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_BLUE = '#D442F8';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(85);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;


const Header = ({balance}) => (
  <Block left>
    <Text color={theme.COLORS.GREY} h5>
      Balance
    </Text>
    <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h3>
      $ {balance.amount}
    </Text>
  </Block>
);
const BalanceCard = ({ chartData, balance , chartLabels }) => {
  return (
    <View style={[styles.card, styles.borderCard]}>
      <Header balance={balance}/>
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
export default class BalanceStatsCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      slider1ActiveSlide: 0,
      balanceStats: [
        { amount: "250.563" },
        { amount: "234.567" },
        { amount: '213.456' },
      ],
    };
  }

  _renderItem({ item }) {
    const chartData = [50, 80, 60, 95, 120];
    const chartLabels = ['04/11', '05/11', '06/11', '07/11', '08/11'];
    return <BalanceCard chartData={chartData} balance={item} chartLabels={chartLabels} />;
  }

  render() {
    return (
      <Block>
        <Carousel
          ref={c => (this.balanceCarousel = c)}
          data={this.state.balanceStats}
          renderItem={this._renderItem}
          sliderWidth={slideWidth}
          sliderHeight={slideHeight}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
        />
        <Pagination
          dotsLength={this.state.balanceStats.length}
          carouselRef={this.balanceCarousel}
          activeDotIndex={this.state.slider1ActiveSlide}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.inactiveDotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        ></Pagination>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 8,
    backgroundColor: GRADIENT_BLUE,
  },
  paginationDotInactive: {
    borderColor: GRADIENT_BLUE,
    borderWidth: 2,
    backgroundColor: theme.COLORS.WHITE,
  },
  card: {
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
  slider: {
    overflow: 'visible',
  },
  sliderContentContainer: {
    paddingHorizontal: itemHorizontalMargin,
  },
  inactiveDotStyle: {
    borderColor: '#D442F8',
    borderWidth: 2,
    backgroundColor: theme.COLORS.WHITE,
  },
});
