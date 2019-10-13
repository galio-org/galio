import React from 'react';
import { StyleSheet, Platform, View, ScrollView } from 'react-native';
import { LinearGradient as Gradient } from 'expo';
import { Text, Block, NavBar, Button } from 'galio-framework';
import theme from '../theme';


const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];

// Shipping Cards
const standardTitle = 'Standard Shipping';
const standardPrice = '4.95';
const standardDescription = 'The average delivery time for standard shipping packages is 7 days.';

const premiumTitle = 'Premium Shipping';
const premiumPrice = '8.95';
const premiumDescription = 'The average delivery time for standard shipping packages is 2 days.';


const ShippingCard = ({ title, price, description }) => (
  <View style={[styles.card, styles.shippingSection]}>
    <Block flex row space="between">
      <Block flex={0.7}>
        <Text size={theme.SIZES.FONT * 1.2} >{title}</Text>
      </Block>
      <Block flex={0.3}>
        <Text
          size={theme.SIZES.FONT * 1.2}
          color={theme.COLORS.BLACK}
          style={{ textAlign: 'right' }}
        >
          ${price}
        </Text>
      </Block>
    </Block>
    <Block flex={1} style={styles.description}>
      <Text size={theme.SIZES.FONT * 0.9} color={"#778087"}>
        {description}
      </Text>
    </Block>
  </View>
);

class FreeShipping extends React.Component {
  render() {
    return (
      <Gradient
        start={[0.45, 0.45]}
        end={[0.8, 0.8]}
        colors={GRADIENT_PINK}
        style={[styles.card, styles.shippingSection, styles.freeSection]}
      >
        <Block flex row space="between">
          <Block flex={0.7}>
            <Text color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 1.2}>
              Free Shipping
            </Text>
          </Block>
          <Block flex={0.3}>
            <Text
              size={theme.SIZES.FONT * 1.2}
              color={theme.COLORS.WHITE}
              style={{ textAlign: 'right' }}
            >
              $ 0.00
            </Text>
          </Block>
        </Block>
        <Block flex={1} style={styles.description}>
          <Text size={theme.SIZES.FONT * 0.9} color={theme.COLORS.WHITE}>
            The average delivery time for standard shipping packages is 14 days.
          </Text>
        </Block>
      </Gradient>
    );
  }
}
const Ecommerce = () => {

  return (
    <Block safe flex>
      <NavBar
        title="Ecommerce"
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
      <Block safe flex style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text size={30}>Choose your shipping method</Text>
            <View
              style={[
                styles.card,
                styles.cardShadow,
                styles.shippingContainer,
              ]}
            >
              <FreeShipping />
              <ShippingCard title={standardTitle} price={standardPrice} description={standardDescription} />
              <ShippingCard title={premiumTitle} price={premiumPrice} description={premiumDescription} />
            </View>
            <Button style={styles.footerBtn} round>
              Next
              </Button>
          </View>
        </ScrollView>
      </Block>
    </Block>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: 'flex-start',
    backgroundColor: theme.COLORS.WHITE,
  },
  title: {
    textAlign: 'center',
  },
  card: {
    padding: 18,
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 5,
  },
  cardShadow: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
    shadowColor: '#000',
  },
  shippingContainer: {
    marginTop: 40,
  },
  shippingSection: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#d6d7da',
    marginTop: 20,

  },
  freeSection: {
    marginTop: -30,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  circleGradient: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    // marginHorizontal: 8,
    paddingVertical: 20,
  },
  footerBtn: {
    marginTop: 20,
  },
});

export default Ecommerce;