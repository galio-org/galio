import React from 'react';
import { View, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
// galio components
import { Typography } from '../';

// space-between view and another view for the back button

const ArticleCover = props => (
  <View style={{ flex: 1 }}>
    <StatusBar hidden={false} barStyle="light-content" />
    <Image
      source={{
        uri:
          'https://images.unsplash.com/photo-1537005081207-04f90e3ba640?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffb71f2a2843e802e238c5ff8e4bbb8c&auto=format&fit=crop&w=764&q=80',
      }}
      style={styles.backgroundImage}
    />
    <LinearGradient
      colors={['transparent', 'rgb(0,0,0)']}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '90%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 6,
      }}
    />
    <View
      style={{
        flex: 1,
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
    <View style={{ alignSelf: 'flex-start', marginTop: '7%', marginLeft: '5%' }}>
      <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: '#A833FE' }}
            onPress={() => props.navigation.openDrawer()} />
    </View>
      <View style={styles.articleSummary}>
        <Typography h3 style={[styles.textColor, styles.headline]}>
          Why is 'The Thing' always looking at you?
        </Typography>
        <Typography h5 style={[styles.textColor, styles.subHeadline]}>
          Just small talk from the Fantastic Four.
        </Typography>
        <Typography h5 style={[styles.textColor, styles.summary]}>
          So... Did you ever think about this bus? Like... How could this bus
          have all these weird colors. This purple is really cute though.
        </Typography>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  articleSummary: {
    /*position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    */
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: '10%',
  },
  textColor: {
    color: 'rgba(255,255,255,0.9)',
  },
  headline: {
    marginBottom: 15,
  },
  subHeadline: {
    marginBottom: 15,
  },
  summary: {
    marginBottom: 5,
  },
});

export default ArticleCover;
