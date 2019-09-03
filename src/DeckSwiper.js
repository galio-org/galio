import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder
} from 'react-native';
import PropTypes from 'prop-types';

import Block from './Block';

const { height, width } = Dimensions.get('screen');

function DeckSwiper(props) {
  return <Block />
}

export default DeckSwiper;