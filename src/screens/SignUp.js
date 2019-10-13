import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Dimensions
} from 'react-native';

// galio component
import { Block, Button, Input, Text } from 'galio-framework';
import theme from '../theme';

const { width } = Dimensions.get('screen');
const avatarPhoto =
  'https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';

export default class SignUp extends React.Component {
  render() {
    return (
      <Block safe flex>
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

      </Block>
    );
  }
}

const LoginForm = () => {
  handleChange = () => {
    console.log('handle change');
  };
  return (
    <Block style={styles.marginTop}>
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
    <Block center style={styles.marginTop}>
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
    <Block left style={styles.headerContainer}>
      <Image
        source={{
          uri: avatarPhoto,
        }}
        style={styles.avatar}
      />
      <Text style={{ marginVertical: theme.SIZES.FONT / 4 }} h3>
        {title}
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
    width: width - theme.SIZES.BASE * 12,
    height: width - theme.SIZES.BASE * 12,
    borderRadius: (width - theme.SIZES.BASE * 12)/2,
    marginBottom: 10,
    marginLeft: 10,
  },
  headerContainer: {
    marginTop: 10,
  },
  subHeader: {
    color: theme.COLORS.GREY,
  },
  marginTop :{
    marginTop: 40
  },
  highlight: {
    color: theme.COLORS.GREY,
    fontWeight: 'bold'
  },
  loginBtn: {
    marginTop: 30
  },

});
