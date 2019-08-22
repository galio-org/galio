import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import { LinearGradient as Gradient } from 'expo';
import * as shape from 'd3-shape';

// galio components
import { Text, Block } from 'galio-framework';

// theme
import theme from '../../theme';

// Components
import ChartGradient from '../../helpers/chartGradient';

const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];

export default class CashStats extends React.Component {
  constructor() {
    super();
  }
  render() {
    const data = [50, 80, 60, 95, 120];
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
              svg={{ stroke: '#ffffff', strokeWidth: 4 }}
              curve={shape.curveNatural}
              contentInset={{ top: 20, bottom: 20 }}
            ></LineChart>
          </Gradient>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
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
    borderRadius: 3,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
