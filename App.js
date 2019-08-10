import React from 'react';
import { View, StatusBar } from 'react-native';
import GalioApp from './routes';
import * as Font from 'expo-font';
//fonts
import Galio from './assets/fonts/galio.ttf';


export default class App extends React.Component {
  async componentWillMount() {
    try {
      await Font.loadAsync({
        Galio
      });

    } catch (error) {
      console.log('error loading Galio font', error);
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} />
        <GalioApp />
      </View>
    );
  }
}
