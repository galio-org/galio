import React from 'react';
import { View, StatusBar } from 'react-native';
import GalioApp from './routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} />
        <GalioApp />
      </View>
    );
  }
}
