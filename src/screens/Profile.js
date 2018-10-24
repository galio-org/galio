import React from 'react';
import {
  Alert, Dimensions, StyleSheet, Platform, Text,
} from 'react-native';
import { LinearGradient } from 'expo';

// galio component
import { Block, Button, NavBar } from 'galio-framework';
import theme from '../theme';

const { height, width } = Dimensions.get('window');

class Profile extends React.Component {
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { navigation } = this.props;
    return (
      <Block flex>
        <Block flex={2}>
          <LinearGradient
            colors={['#F6FFF7', '#DBE8DC']}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text>HI THERE</Text>
          </LinearGradient>
        </Block>

        <Block flex={3} style={{ backgroundColor: 'red' }}>
          <Text>hi</Text>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default Profile;
