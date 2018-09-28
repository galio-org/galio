import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
// galio component
import {
  NavBar, Text, Input, Button,
} from '..';

class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavBar onLeftPress={() => this.props.navigation.openDrawer()} />
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text h3 center>
              Galio - react native kit
            </Text>
            <Text p muted center style={{ paddingHorizontal: 12 }}>
              This is the perfect place to write a short description of this
              step and even the next steps ahead.
            </Text>
          </View>

          <View
            style={{
              flex: 2,
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <View>
              <Input
                style={styles.inputStyles}
                borderless
                bgColor="transparent"
                type="email-address"
                placeholder="kanyewest@thegreatkanye.com"
                label="Email"
                placeholderTextColor="#757575"
              />
              <Input
                style={styles.inputStyles}
                borderless
                bgColor="transparent"
                placeholder="My awesome password"
                label="Password"
                help="Your password must have between 6 and 9 characters"
                bottomHelp
                placeholderTextColor="#757575"
                password
                viewPass
              />
              <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity>
                  <Text size={10} color="rgb(209,0,125)">
                    Forgot your password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Button color="error" round>
                Sign in
              </Button>
              <TouchableOpacity>
                <Text
                  size={14}
                  center
                  color="rgb(209,0,125)"
                  style={{ marginTop: 10 }}
                >
                  Don't have an account? Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyles: {
    borderBottomWidth: 2,
    borderColor: '#212121',
    borderRadius: 0,
  },
  container: {
    paddingTop: 3,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Login;
