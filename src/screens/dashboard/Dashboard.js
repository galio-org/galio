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

const Dashboard = (props) => {
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
           <BalanceStatsCarousel/>
           <Transactions />
           <CashStats/>
          </Block>
        </ScrollView>
      </Block>
    );
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

export default Dashboard;
