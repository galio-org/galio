import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
// galio component
import {
  Block, Button, Input, Text, NavBar,
} from 'galio-framework';
import theme from '../theme';

const { width } = Dimensions.get('window');

const MARGIN_LEFT = '5%';
const SOCIAL_ICON_SIZE = theme.SIZES.BASE * 1.5;
const SOCIAL_BTN_SIZE = theme.SIZES.BASE * 3;

class Registerv2 extends React.Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  handleGoBack = () => this.props.navigation.openDrawer();

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleOnPressSocial = () => Alert.alert('Oops', 'Not Implementated');

  handleSignUp = () => {
    const {
      name, lastName, email, password,
    } = this.state;

    Alert.alert('Sign up action', `Name: ${name}
    Last Name: ${lastName}
    Email: ${email}
    Password: ${password}`);
  }

  handleSignIn = () => this.props.navigation.navigate('Login')

  render() {
    return (
      <Block safe flex style={styles.container}>
        <NavBar
          transparent
          back
          leftStyle={{ marginLeft: MARGIN_LEFT }}
          leftIconColor={theme.COLORS.GREY}
          onLeftPress={this.handleGoBack}
        />
        <ScrollView style={styles.flex} keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={5}
          >
            <Header title="Create new account" />
            <Block flex>
              <SocialButtons
                onPressFacebook={this.handleOnPressSocial}
                onPressTwitter={this.handleOnPressSocial}
                onPressInstagram={this.handleOnPressSocial}
              />
              <Text muted center size={theme.SIZES.FONT * 0.875}>
                or Sign Up with email
              </Text>
            </Block>
            <Block flex middle>
              <Form handleChange={this.handleChange} />
              <SignButtons
                handleSignIn={this.handleSignIn}
                handleSignUp={this.handleSignUp}
              />
            </Block>
          </KeyboardAvoidingView>
        </ScrollView>
      </Block>
    );
  }
}

const Header = ({ title }) => (
  <Block left style={styles.header}>
    <Text h3>{title}</Text>
  </Block>
);

const SocialButtons = ({
  onPressFacebook,
  onPressTwitter,
  onPressInstagram,
}) => (
  <Block
    row
    center
    space="between"
    style={styles.socialContainer}
  >
    <Block flex middle right>
      <Button
        round
        onlyIcon
        iconSize={SOCIAL_ICON_SIZE}
        icon="facebook"
        iconFamily="FontAwesome"
        onPress={onPressFacebook}
        color={theme.COLORS.FACEBOOK}
        shadowColor={theme.COLORS.FACEBOOK}
        iconColor={theme.COLORS.WHITE}
        style={styles.social}
      />
    </Block>
    <Block flex middle center>
      <Button
        round
        onlyIcon
        iconSize={SOCIAL_ICON_SIZE}
        icon="twitter"
        iconFamily="FontAwesome"
        onPress={onPressTwitter}
        color={theme.COLORS.TWITTER}
        shadowColor={theme.COLORS.TWITTER}
        iconColor={theme.COLORS.WHITE}
        style={styles.social}
      />
    </Block>
    <Block flex middle left>
      <Button
        round
        onlyIcon
        iconSize={SOCIAL_ICON_SIZE}
        icon="instagram"
        iconFamily="FontAwesome"
        onPress={onPressInstagram}
        color={theme.COLORS.DRIBBBLE}
        shadowColor={theme.COLORS.DRIBBBLE}
        iconColor={theme.COLORS.WHITE}
        style={styles.social}
      />
    </Block>
  </Block>
);


const Form = ({ handleChange }) => (
  <Block style={{ marginBottom: 20 }}>
    <Input
      borderless
      placeholder="Name"
      style={styles.input}
      onChangeText={text => handleChange('name', text)}
    />
    <Input
      borderless
      placeholder="Last name"
      style={styles.input}
      onChangeText={text => handleChange('lastName', text)}
    />
    <Input
      borderless
      type="email-address"
      placeholder="Email"
      autoCapitalize="none"
      style={styles.input}
      onChangeText={text => handleChange('email', text)}
    />
    <Input
      borderless
      password
      viewPass
      placeholder="Password"
      style={styles.input}
      onChangeText={text => handleChange('password', text)}
    />
  </Block>
);

const SignButtons = ({ handleSignUp, handleSignIn }) => (
  <Block flex center style={{ marginBottom: 20 }}>
    <Button
      shadowless
      style={styles.button}
      round
      color="info"
      onPress={handleSignUp}
    >
      Sign up
    </Button>
    <Button
      round
      color="transparent"
      style={[styles.button, styles.borderColor]}
      onPress={handleSignIn}
    >
      <Text center color={theme.COLORS.BLACK}>
        Sign In
      </Text>
    </Button>
  </Block>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE,
    paddingTop: 15,
  },
  flex: {
    flex: 1,
  },
  social: {
    width: SOCIAL_BTN_SIZE,
    height: SOCIAL_BTN_SIZE,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
  socialContainer: {
    marginVertical: theme.SIZES.BASE * 1.875,
  },
  input: {
    alignSelf: 'center',
    width: width * 0.89,
    borderBottomColor: theme.COLORS.BLACK,
    borderWidth: theme.SIZES.BASE * 0.04,
    borderRadius: 0,
    paddingHorizontal: 0,
  },
  button: {
    marginVertical: 10,
    width: width * 0.89,
  },
  borderColor: {
    borderColor: theme.COLORS.GREY,
  },
  header: {
    width: '50%',
    marginLeft: MARGIN_LEFT,
  },
});

export default Registerv2;
