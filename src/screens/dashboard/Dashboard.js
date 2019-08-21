import React from 'react';
import { StyleSheet, Platform, View, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { LinearGradient as Gradient } from 'expo';
import * as shape from 'd3-shape';

import Carousel,{ Pagination } from 'react-native-snap-carousel';

import theme from '../../theme';

// galio components
import { Text, Button, Block, NavBar, Icon } from 'galio-framework';

import Transactions from './Transactions';

const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_BLUE = '#D442F8';
const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(85);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const LineGradient = ({ index }) => (
  <Defs key={index}>
    <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
      <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.8} />
      <Stop offset={'100%'} stopColor={'rgb(254, 70, 207)'} stopOpacity={0.2} />
    </LinearGradient>
  </Defs>
);
const Header = ({}) => (
  <Block left>
    <Text color={theme.COLORS.GREY} h5>
      Balance
    </Text>
    <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h3>
      $ 346.932
    </Text>
  </Block>
);

const BalanceCard = ({ data, labels }) => {
  return (
    <View style={styles.card}>
      <Header />
      <LineChart
        style={{ height: 100 }}
        data={data}
        belowChart={true}
        contentInset={{ top: 30, bottom: 10, left: 0, right: 10 }}
        curve={shape.curveNatural}
        svg={{ stroke: 'url(#gradient)', strokeWidth: 4 }}
      >
        <LineGradient />
      </LineChart>
      <Block row space="evenly" style={{ marginTop: BASE_SIZE }}>
        <Labels data={labels} />
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

export default class Dashbord extends React.Component {
  constructor() {
    super();
    this.state = {
      slider1ActiveSlide: 0,
      entries: [
        { title: 'hello' },
      { title: 'world' },
      { title: 'hello' },

    ],
    }
  }
  _renderItem ({item, index}) {
    const data = [50, 80, 60, 95, 120];
    const labels = ['04/11', '05/11', '06/11', '07/11', '08/11'];
    return (
      <BalanceCard data={data} labels={labels}/>
  );}

  render() {


    return (
      <Block safe flex>
        <NavBar
          title="Dashboard"
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
            {/* <BalanceCard data={data} labels={labels} />
            <Transactions /> */}
            <Carousel
              ref={c => this._slider1Ref = c}
             data={this.state.entries}
             renderItem={this._renderItem}
             sliderWidth={slideWidth}
             sliderHeight={slideHeight}
             itemWidth={itemWidth}
             containerCustomStyle={styles.slider}
             contentContainerCustomStyle={styles.sliderContentContainer}

             onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
            />
             <Pagination
                  dotsLength={this.state.entries.length}
                  carouselRef={this._slider1Ref}
                  activeDotIndex={this.state.slider1ActiveSlide}
                  dotStyle={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  marginHorizontal: 3,
                  backgroundColor: '#D442F8'
              }}
              inactiveDotStyle={{
                  borderColor:'#D442F8',
                  borderWidth:2,
                  backgroundColor:"#fff"
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}


                />
            {/* <Block flex row space="between">
              <Block flex={1} style={{ padding: 10 }}>
                <View style={styles.card}>
                  <Text muted h6>
                    Cash out
                  </Text>
                  <Text color={theme.COLORS.BLACK} h5>
                    $36.977
                  </Text>
                  <LineChart
                    style={{ height: 100 }}
                    data={data}
                    belowChart={true}
                    contentInset={{ top: 30, bottom: 10, left: 0, right: 10 }}
                    curve={shape.curveNatural}
                    svg={{ stroke: 'url(#gradient)', strokeWidth: 4 }}
                  >
                    <LineGradient />
                  </LineChart>
                </View>
              </Block>
              <Block flex={1} style={{ padding: 5 }}>
                <Gradient
                  start={[0.45, 0.45]}
                  end={[0.8, 0.8]}
                  colors={GRADIENT_PINK}
                  style={[styles.card, styles.pendingCashCard]}
                >
                  <Text color={theme.COLORS.WHITE} h6>
                    Pending Cash
                  </Text>
                  <Text color={theme.COLORS.WHITE} h5>
                    $29.042
                  </Text>
                  <LineChart
                    style={styles.chart}
                    data={data}
                    height={100}
                    svg={{ stroke: '#ffffff', strokeWidth: 4 }}
                    curve={shape.curveNatural}
                    contentInset={{ top: 20, bottom: 20 }}
                  ></LineChart>
                </Gradient>
              </Block>
            </Block> */}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:14,
    justifyContent: 'flex-start',
    backgroundColor: theme.COLORS.WHITE,
  },
  card: {
    borderColor:theme.COLORS.GREY,
    borderWidth: 1,
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.24,
  },
  chart: {
    height: 100,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.24,
  },
  pendingCashCard: {
    marginTop: 5,
  },
  paginationContainer: {
    paddingVertical: 8
},
paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
},
card: {
  padding: 14,
  marginLeft: 5,
  backgroundColor: '#fff',
  borderTopLeftRadius: 3,
  borderTopRightRadius: 3,
  borderColor:theme.COLORS.GREY,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowRadius: 5,
  shadowOpacity: 0.24,
  borderRadius: 5,
},
avatar: {
  width: 40,
  height: 40,
  borderRadius: 20,
},
slider: {

  overflow: 'visible' // for custom animations
},
sliderContentContainer: {

  paddingHorizontal: itemHorizontalMargin,
},
});
