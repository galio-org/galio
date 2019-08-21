import React from 'react';
import { StyleSheet, Platform, View, Image } from 'react-native';

import theme from '../theme';

import AlphabetListView from 'react-native-alphabetlistview';
// galio components
import { Text, Block, NavBar, Button } from 'galio-framework';

export default class Contacts extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: {
        A: [
            {
                avatar: 'http://i.pravatar.cc/100',
                name:'Antony Dorothy',
                phoneNumber:'+ 1 9983 2849 2312'
            }
        ],
        B: ['some'],
        C: ['some'],
        D: ['some'],
        E: ['some'],
        F: ['some'],
        G: ['some'],
        H: ['some'],
        I: ['some'],
        J: ['some'],
        K: ['some'],
        L: ['some'],
        M: ['some'],
        N: ['some'],
        O: ['some'],
        P: ['some'],
        Q: ['some'],
        R: ['some'],
        S: ['some'],
        T: ['some'],
        U: ['some'],
        V: ['some'],
        W: ['some'],
        X: ['some'],
        Y: ['some'],
        Z: ['some'],
      },
    };
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
          data={this.state.data}
          cell={Cell}
          cellHeight={30}
          sectionListItem={SectionItem}
          sectionHeader={SectionHeader}
          sectionHeaderHeight={30}
        />
      </Block>
    );
  }
}

class SectionHeader extends React.Component {
  render() {
    // inline styles used for brevity, use a stylesheet when possible
    var textStyle = {
      textAlign: 'left',
      color: '#000',
      fontSize: 22,

    };

    var viewStyle = {
      //   backgroundColor: '#fff',
    };
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

class SectionItem extends React.Component {
  render() {
    return <Text  size={theme.SIZES.FONT * 0.675}  muted style={{padding:5,  }}>{this.props.title}</Text>;
  }
}

class Cell extends React.Component {
  renderAvatar() {
    const { avatar } = this.props;
    if (!avatar) return null;

    return <Image source={{ uri: avatar }} style={styles.avatar} />;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Block flex row space="between">
            <Block flex={0.3}>
              <Image
                source={{ uri: this.props.avatar }}
                style={[styles.avatar]}
              />
            </Block>

            <Block flex={1}>
            <Text size={theme.SIZES.FONT * 0.875} color={theme.COLORS.BLACK}>
            Anthony Dorothy
            </Text>
            <Text size={theme.SIZES.FONT * 0.675} muted>
            + 1 9983 2849 2312
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
    padding: 14,
    justifyContent: 'flex-start',
    backgroundColor: theme.COLORS.WHITE,
  },
  event: {
    paddingBottom: 20,
  },
  title: {
    color: theme.COLORS.GREY,
    fontWeight: '400',
  },
  card: {
    marginLeft: 5,
    padding: 14,
    height: 400,
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

