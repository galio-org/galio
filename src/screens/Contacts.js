import React from 'react';
import { StyleSheet, Platform, View, Image } from 'react-native';
import AlphabetListView from 'react-native-alphabetlistview';

import theme from '../theme';

// galio components
import { Text, Block, NavBar, Button } from 'galio-framework';

const data = {
  A: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Antony Dorothy',
      phoneNumber: '+ 1 9983 2849 2312',
    },
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Anna Johnathen',
      phoneNumber: '+ 1 7234 8852 1200',
    },
  ],
  B: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Barbara',
      phoneNumber: '+ 1-135-659-3483',
    },
  ],
  C: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Carolyn',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  D: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Daniel',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  E: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Eveline',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  F: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Fabian',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  G: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'George',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  H: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Horatiu',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  I: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Inez',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  J: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Justin',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  K: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Kyle',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  L: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Laura',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  M: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Manuela',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  N: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Nathen',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  O: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Oprah',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  P: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Prince',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  Q: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Quincy',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  R: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Richard',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  S: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Sore',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  T: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Trey',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  U: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Uni',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  V: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Vine',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  W: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Wolfgang',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  X: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Xavier',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  Y: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Yates',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
  Z: [
    {
      avatar: 'http://i.pravatar.cc/100',
      name: 'Zayn',
      phoneNumber: '+ 1-684-120-4488',
    },
  ],
};

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Block safe flex>
        <NavBar
          title="Contacts"
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

        <AlphabetListView
          data={data}
          cell={Cell}
          cellHeight={30}
          sectionListItem={SectionItem}
          sectionHeader={SectionHeader}
          sectionHeaderHeight={30}
          renderRow={this._renderItem}
          enableEmptySections={true}
        />
      </Block>
    );
  }
}

class SectionHeader extends React.Component {
  render() {
    var textStyle = {
      textAlign: 'left',
      color: theme.COLORS.BLACK,
      fontSize: 22,
      padding: 10,
    };
    return (
      <View>
        <Text style={textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

class SectionItem extends React.Component {
  render() {
    return (
      <Text size={theme.SIZES.FONT * 0.675} muted style={{ padding: 5 }}>
        {this.props.title}
      </Text>
    );
  }
}

class Cell extends React.Component {
  renderAvatar(avatar) {
    if (!avatar) return null;
    return <Image source={{ uri: avatar }} style={styles.avatar} />;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Block flex row space="between">
            <Block flex={0.3}>
              {this.renderAvatar(this.props.item.avatar)}
            </Block>
            <Block flex={1}>
              <Text size={theme.SIZES.FONT * 0.875} color={theme.COLORS.BLACK}>
                {this.props.item.name}
              </Text>
              <Text size={theme.SIZES.FONT * 0.675} muted>
                {this.props.item.phoneNumber}
              </Text>
            </Block>
          </Block>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    justifyContent: 'flex-start',
    backgroundColor: theme.COLORS.WHITE,
  },
  title: {
    color: theme.COLORS.GREY,
    fontWeight: '400',
  },
  card: {
    marginVertical: 10,
    marginLeft: 5,
    padding: 14,
    width: '95%',
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 3,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.24,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
