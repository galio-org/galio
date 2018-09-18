import React from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';

const Article = props => (
  <View style={{ flex: 1 }}>
    <StatusBar hidden={false} barStyle="light-content" />
    <Image
      style={{ width: '100%', height: '35%' }}
      source={{
        uri:
          'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc7f17d00c13cf50d62f4ebd5743a9bc&auto=format&fit=crop&w=1950&q=80',
      }}
    />
    <View
      style={{
        position: 'absolute',
        top: '30%',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgb(250,250,250)',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
    />
  </View>
);

const styles = StyleSheet.create({});

export default Article;
