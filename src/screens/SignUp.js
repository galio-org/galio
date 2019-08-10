import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';

// galio component
import { Block, Button, Input, Text } from 'galio-framework';
import theme from '../theme';

handleChange = () => {
  console.log('handle change');
};

class SignUp extends React.Component {
  render() {
    return (
      <Block safe flex style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={3}>
            <Block style={styles.container}>
              <Header
                title={'Hi Anthony'}
                subtitle={'Login into your account'}
              />
              <LoginForm handleChange={this.handleChange} />
              <Footer />
            </Block>
          </KeyboardAvoidingView>
        </ScrollView>
      </Block>
    );
  }
}

const LoginForm = () => {
  return (
    <Block style={styles.loginFormContainer}>
      <Input
        rounded
        placeholder="Email"
        placeholderTextColor={theme.COLORS.THEME}
        style={{ borderColor: theme.COLORS.THEME }}
      />
      <Input
        rounded
        password
        placeholder="Password"
        placeholderTextColor={theme.COLORS.THEME}
        style={{ borderColor: theme.COLORS.THEME }}
      />
      <Button style={styles.loginBtn} round>
        Login
      </Button>
    </Block>
  );
};

const Footer = () => {
  return (
    <Block center style={styles.footerContainer}>
      <Text h6 color={theme.COLORS.GREY}>
        Don’t have an account? <Text style={styles.highlight}>Singup</Text>
      </Text>
      <Text h6 color={theme.COLORS.GREY} style={{ marginTop: 30 }}>
        Not your account? <Text style={styles.highlight}>Login</Text>
      </Text>
    </Block>
  );
};

const Header = ({ title, subtitle }) => {
  return (
    <Block left style={[styles.headerContainer]}>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        }}
        style={[styles.avatar]}
      />
      <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h3>
        {title},
      </Text>
      <Text style={styles.subHeader} h6>
        {subtitle}
      </Text>
    </Block>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 14,
    justifyContent: 'flex-start',
    backgroundColor: theme.COLORS.WHITE,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    marginBottom: 10,
    marginLeft: 10,
  },
  headerContainer: {
    marginTop: 10,
  },
  subHeader: {
    color: theme.COLORS.GREY,
  },
  loginFormContainer: {
    marginTop: 40,
  },

  highlight: {
    color: theme.COLORS.GREY,
    fontWeight: 'bold',
  },
  loginBtn: {
    marginTop: 30,
  },
  footerContainer: {
    marginTop: 40,
  },
});

export default SignUp;
