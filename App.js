import React from 'react';

import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import GalioApp from './routes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.onBurgerPress = this.onBurgerPress.bind(this);
  }
  onBurgerPress(){
    this.props.openDrawer();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <GalioApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 50,
    width: '100%',
    backgroundColor: '#F9F9F9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  burgerButton: {
    width: 20,
    height: 20,
    backgroundColor: 'red'
  }
});
