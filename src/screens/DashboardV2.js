import React from 'react';
import {
  StyleSheet,
  Platform,
  ScrollView,
  FlatList,
  View,
  Dimensions,
  Animated,
} from 'react-native';

// galio components
import { Button, Block, NavBar, Text, Icon } from 'galio-framework';

// charts
import { LineChart } from 'react-native-svg-charts';
import { LinearGradient as Gradient } from 'expo';
import * as shape from 'd3-shape';
import ChartGradient from '../helpers/chartGradient';

// theme
import theme from '../theme';

const transactions = [
  {
    orderID: 886402,
    transactionName: 'Accesories',
    transactionCash: '115.897',
  },
  {
    orderID: 886403,
    transactionName: 'Apple Watch',
    transactionCash: '-94.824',
  },
];
const { width } = Dimensions.get('screen');
const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];
const data = [50, 80, 60, 95, 120];
const BASE_SIZE = theme.SIZES.BASE;

const cardWidth = width - theme.SIZES.BASE * 1.5;
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

/** Cash Stats */
const CashStats = () => {
  return (
    <Block flex row space="between">
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
            <ChartGradient />
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
            svg={{ stroke: theme.COLORS.WHITE, strokeWidth: 4 }}
            curve={shape.curveNatural}
            contentInset={{ top: 20, bottom: 20 }}
          ></LineChart>
        </Gradient>
      </Block>
    </Block>
  );
};

const TransactionsHeader = () => {
  return (
    <Block flex row style={{ padding: 15 }} space="between">
      <Block flex={1.5}>
        <Text size={theme.SIZES.FONT * 0.875} color={theme.COLORS.BLACK}>
          Transactions
        </Text>
      </Block>
      <Block right flex={0.5}>
        <Text size={theme.SIZES.FONT * 0.675} muted>
          View All
        </Text>
      </Block>
    </Block>
  );
};
renderTransaction = item => {
  return (
    <View style={styles.card}>
      <Block flex row space="between">
        <Block flex={0.3}>
          <Icon
            style={{ marginTop: 5 }}
            family="Galio"
            color={theme.COLORS.BLACK}
            size={theme.SIZES.BASE * 1.0625}
            name={'minimal-left'}
          />
        </Block>

        <Block flex={1}>
          <Text size={theme.SIZES.FONT * 0.875} color={theme.COLORS.BLACK}>
            {item.transactionName}
          </Text>
          <Text size={theme.SIZES.FONT * 0.675} muted>
            Order # {item.orderID}
          </Text>
        </Block>
        <Block right flex={0.7} style={{ marginTop: 5 }}>
          <Text size={theme.SIZES.FONT * 0.875} color={theme.COLORS.FACEBOOK}>
            $ {item.transactionCash}
          </Text>
        </Block>
      </Block>
    </View>
  );
};
renderTransactionsSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: '#efefef',
      }}
    />
  );
};
const Transactions = () => {
  return (
    <Block flex>
      <TransactionsHeader />
      <FlatList
        data={transactions}
        renderItem={({ item }) => this.renderTransaction(item)}
        ItemSeparatorComponent={this.renderTransactionsSeparator}
        keyExtractor={(item, index) => index.toString()}
      />
    </Block>
  );
};
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
    <View style={[styles.card, styles.cardCarousel, styles.borderCard]}>
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
renderCard = (item, index) => {
  return (
    <BalanceCard
      chartData={item.data}
      balance={item.amount}
      index={index}
      key={index}
      chartLabels={item.labels}
    />
  );
};
BalanceStatsCarousel = () => {
  scrollX = new Animated.Value(0);

  let position = Animated.divide(this.scrollX, width);

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
            paddingHorizontal: 5,
          }}
          scrollEventThrottle={16}
        >
          {chartData.map((item, index) => {
            return renderCard(item, index);
          })}
        </ScrollView>
      </View>
      <DotsIndicators data={chartData} position={position} />
    </View>
  );
};

const DashboardV2 = props => {
  return (
    <Block safe flex>
      <NavBar
        title="Dashboard"
        onLeftPress={() => props.navigation.openDrawer()}
        leftIconColor={theme.COLORS.MUTED}
        right={
          <Button
            color="transparent"
            style={styles.settings}
            onPress={() => props.navigation.openDrawer()}
          ></Button>
        }
        style={
          Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null
        }
      />
      <ScrollView style={{ flex: 1 }}>
        <Block style={styles.container}>
          <BalanceStatsCarousel />
          <Transactions />
          <CashStats />
        </Block>
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    justifyContent: 'flex-start',
    backgroundColor: theme.COLORS.WHITE,
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
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
  borderCard: {
    borderColor: theme.COLORS.GREY,
    borderWidth: 1,
  },
  paginationDot: {
    height: 10,
    width: 10,
    backgroundColor: '#D442F8',
    margin: 8,
    borderRadius: 5,
  },
  cardCarousel: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
  },
});

export default DashboardV2;
