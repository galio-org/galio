import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
// galio components
import { Typography, Button } from '../index';

const Presentation = props => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <StatusBar hidden={false} barStyle="light-content"/>
    <LinearGradient 
      colors={['#ad5389', '#3c1053']}
      end={[0.5,0.9]}
      style={styles.backgroundGradient}
    />
    <View style={styles.container}>
      <Typography h2>Check this out</Typography>
      <Typography p color="red">This is created and was created just for your eyes only.</Typography>
    </View>
  </View>
);

const styles = StyleSheet.create({
  backgroundGradient: {
    position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 0
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Presentation;
