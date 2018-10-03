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
    user: '-',
    email: '-',
    password: '-',
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;
    const { user, email, password } = this.state;

    return (
      <Block flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar back transparent onLeftPress={() => navigation.openDrawer()} />
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Block flex center style={{ marginTop: theme.SIZES.BASE }}>
            <Block row center space="between">
              <Block flex middle right>
                <Button
                  round
                  onlyIcon
                  shadowless
                  iconSize={28}
                  icon="facebook"
                  iconFamily="FontAwesome"
                  onPress={() => Alert.alert('Not implemented')}
                  color={theme.COLORS.FACEBOOK}
                  iconColor={theme.COLORS.WHITE}
                  style={{ width: theme.SIZES.BASE * 4 }}
                />
              </Block>
              <Block flex middle center>
                <Button
                  round
                  onlyIcon
                  shadowless
                  iconSize={28}
                  icon="twitter"
                  iconFamily="FontAwesome"
                  onPress={() => Alert.alert('Not implemented')}
                  color={theme.COLORS.TWITTER}
                  iconColor={theme.COLORS.WHITE}
                  style={{ width: theme.SIZES.BASE * 4 }}
                />
              </Block>
              <Block flex middle left>
                <Button
                  round
                  onlyIcon
                  shadowless
                  iconSize={28}
                  icon="dribbble"
                  iconFamily="FontAwesome"
                  onPress={() => Alert.alert('Not implemented')}
                  color={theme.COLORS.DRIBBBLE}
                  iconColor={theme.COLORS.WHITE}
                  style={{ width: theme.SIZES.BASE * 4 }}
                />
              </Block>
            </Block>
            <Text muted center style={{ padding: theme.SIZES.BASE }}>
              or be classical
            </Text>
          </Block>

          <Block flex={2} space="evenly" center>
            <Block>
              <Input
                rounded
                placeholder="Username"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                right
                icon="user"
                family="Feather"
                onChangeText={text => this.handleChange('user', text)}
              />
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                right
                icon="mail"
                family="Feather"
                onChangeText={text => this.handleChange('email', text)}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Password"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('password', text)}
              />
            </Block>
            <Block>
              <Button
                round
                color="error"
                onPress={() => Alert.alert(
                  'Sign up action',
                  `
Username: ${user}
Email: ${email}
Password: ${password}`,
                )}
              >
                Sign up
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
