import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

// galio components
import { Text, Icon, Block } from 'galio-framework';

import theme from '../../theme';

const Header = () => {
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
export default class Transactions extends React.Component {
  constructor() {
    super();
  }
  renderTransaction(item){
    return(
        <View style={styles.card}>
        <Block flex row space="between">
          <Block flex={0.3}>
            <Icon
              style={{marginTop:5}}
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
          <Block right flex={0.7}  style={{marginTop:5}}>
            <Text
              size={theme.SIZES.FONT * 0.875}
              color={theme.COLORS.FACEBOOK}
            >
              $ {item.transactionCash}
            </Text>
          </Block>
        </Block>
      </View>
    )
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#efefef",
        }}
      />
    );
  };
  render() {
    const data = [
        {
            orderID:886402,
            transactionName:"Accesories",
            transactionCash: "115.897"
        },
        {
            orderID:886403,
            transactionName:"Apple Watch",
            transactionCash: "-94.824"
        }
    ]
    return (
      <Block flex>
        <Header/>
        <FlatList
            data={data}
            renderItem={({item}) =>this.renderTransaction(item)}
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={(item, index) => index.toString()}
        />

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
  footer: {
    padding: 14,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: theme.SIZES.BASE * 0.75,
    paddingVertical: theme.SIZES.BASE * 0.75,
    backgroundColor: theme.COLORS.TRANSPARENT,
    zIndex: 1,
  },
  card: {
    padding: 14,
    backgroundColor: theme.COLORS.WHITE,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.24
  },
});
