import React from 'react';
import { StyleSheet, Platform, View, Image, ScrollView } from 'react-native';
import { LinearGradient as Gradient } from 'expo';
import theme from '../theme';

// galio components
import { Text, Block, NavBar, Button } from 'galio-framework';
const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_BLUE = ['#6B84CA', '#8F44CE'];
const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];

export default class Ecommerce extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            <Text style={styles.title} center h3 color={theme.COLORS.BLACK}>
            Choose your shipping method
             </Text>
             <View style={styles.card}>

             <Block style={{position: 'absolute',
  bottom: 5}}>
                <Gradient
                  start={[0.45, 0.45]}
                  end={[0.8, 0.8]}
                  colors={GRADIENT_PINK}
                  style={[styles.card, styles.pendingCashCard]}
                >
                  <Text left color={theme.COLORS.WHITE} h6>
                    Free Shiping
                  </Text>
                  <Text right color={theme.COLORS.WHITE} h6>
                    $ 0.00
                  </Text>
                  <Text color={theme.COLORS.WHITE} h6>
                  The average delivery time for free shipping packages is 14 days.
                  </Text>

                </Gradient>
              </Block>
              </View>
            </ScrollView>
      </Block>


      </Block>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    padding: 14,
    justifyContent: 'flex-start',
    backgroundColor: theme.COLORS.WHITE,
  },

  title: {
    textAlign: 'center',
  },

  card: {
    marginLeft: 5,
    marginTop:20,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 3,
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
  circleGradient: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

