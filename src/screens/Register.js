import React from 'react';
import { View, StyleSheet } from 'react-native';
// galio components
import { Typography, Navbar } from '../';

const Register = (props) => (
  <View style={{ flex: 1 }}>
    <Navbar buttonFunction={() => props.navigation.openDrawer()} />
  </View>
);

export default Register;
