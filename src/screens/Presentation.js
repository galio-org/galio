import React from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import { LinearGradient } from 'expo';
// galio components
import { Typography, Button } from '../index';

const Presentation = props => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <StatusBar hidden={false} barStyle="light-content" />
    <LinearGradient
      colors={['#ad5389', '#3c1053']}
      end={[0.5, 0.9]}
      style={styles.backgroundGradient}
    />
    <View style={styles.container}>
      <Typography h2 color="rgb(255,255,255)" style={{ marginBottom: 15 }}>
        Check this out
      </Typography>
      <Typography p center color="rgb(255,255,255)" style={{ marginBottom: 30 }}>
        This is created and was created just for your eyes only. Oh yeah, you really want a piece of this cool UI kit.
      </Typography>
      <Button size="big" color="transparent" round>
        Get Started
      </Button>
    </View>
    <Image
        source={{ uri: 'http://pngimg.com/uploads/iphone/iphone_PNG5744.png' }}
        style={{ width: '100%', height: '100%', position: 'absolute', bottom: -400  }}
        resizeMethod="resize"
        resizeMode='contain'
      />
  </View>
);

const styles = StyleSheet.create({
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 0,
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: '30%',
    paddingBottom: '30%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
});

export default Presentation;
