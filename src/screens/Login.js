import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,
} from '..';
import theme from '../theme';

const { width } = Dimensions.get('window');

class Login extends React.Component {
  state = {
    email: '-',
    password: '-',
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <Block flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar back transparent onLeftPress={() => navigation.openDrawer()} />
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Block flex center style={{ marginTop: theme.SIZES.BASE }}>
            <Text h5 center>Galio - react native kit</Text>
            <Text muted center size={theme.SIZES.FONT * 0.8} style={{ padding: theme.SIZES.BASE }}>
              This is the perfect place to write a short description
              of this step and even the next steps ahead
            </Text>
          </Block>

          <Block flex={2} space="evenly" center>
            <Block>
              <Input
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('email', text)}
              />
              <Input
                password
                viewPass
                placeholder="Password"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('password', text)}
              />
              <Text
                color={theme.COLORS.ERROR}
                size={theme.SIZES.FONT * 0.75}
                onPress={() => Alert.alert('Not implemented')}
                style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }}
              >
                Forgot your password?
              </Text>
            </Block>
            <Block>
              <Button
                round
                color="error"
                onPress={() => Alert.alert(
                  'Sign in action',
                  `Email: ${email}
Password: ${password}`,
                )}
              >
                Sign in
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('Register')}>
                <Text center color={theme.COLORS.ERROR} size={theme.SIZES.FONT}>
                  Don't have an account? Sign up
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
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
});

export default Login;
