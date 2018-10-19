import React from 'react';
import {
  Dimensions, StyleSheet, Platform
} from 'react-native';

import theme from '../theme';

// galio components
import {
  Text, Button, Block, NavBar,
} from 'galio-framework';

const { height, width } = Dimensions.get('window');
const orderConfirmed = require('../../assets/order_confirmed.svg');

class OrderConfirmed extends React.Component {
  render() {
    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Confirmed Order"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
      </Block>
    )
  }
}

export default OrderConfirmed;
