import React from 'react';
import {
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';

// galio components
import { Button, Block, NavBar } from 'galio-framework';

// theme
import theme from '../../theme';

// Components
import Transactions from './Transactions';
import CashStats from './CashStats';
import BalanceStatsCarousel from './BalanceStatsCarousel'

export default class Dashbord extends React.Component {
  constructor() {
    super();
    this.state = {
      slider1ActiveSlide: 0,
      entries: [{ title: 'hello' }, { title: 'world' }, { title: 'hello' }],
    };
  }
  _renderItem() {
    const data = [50, 80, 60, 95, 120];
    const labels = ['04/11', '05/11', '06/11', '07/11', '08/11'];
    return <BalanceCard data={data} labels={labels} />;
  }

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
           <BalanceStatsCarousel/>
           <Transactions />
           <CashStats/>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

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

});
