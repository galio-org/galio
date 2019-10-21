import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity
} from 'react-native';

// galio components
import {
  Text, Button, Block, NavBar, Icon
} from 'galio-framework';
import theme from '../theme';

const { height } = Dimensions.get('window');
const orderConfirmedImage = require('../../assets/order_confirmed.png');

class OrderConfirmed extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex>
        <NavBar
          title="Confirmed Order"
          left={(
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          )}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <Block flex center space="around" style={styles.container}>
          <Block center flex={2}>
            <Block center style={{ marginBottom: theme.SIZES.BASE * 2 }}>
              <Image
                source={orderConfirmedImage}
                style={{ marginBottom: theme.SIZES.BASE * 2 }}
              />
              <Text h4 color={theme.COLORS.BLACK}>
                Well done!
              </Text>
            </Block>
            <Text
              color={theme.COLORS.BLACK}
              style={{ marginBottom: theme.SIZES.BASE }}
            >
              <Text
                size={theme.SIZES.FONT * 1.675}
                bold
              >
                #45C23B&nbsp;
              </Text>
              <Text >
                is your order number
              </Text>
            </Text>
            <Text color={theme.COLORS.INFO}>
              Track your order
            </Text>
          </Block>
          <Button size="large" color="info" round onPress={() => navigation.openDrawer()}>
            Continue Shopping
          </Button>
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    marginTop: theme.SIZES.BASE * 1.875,
    marginBottom: height * 0.1
  }
});

export default OrderConfirmed;
