import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
// galio component
import { Navbar, Typography, Input, Button } from '../';

class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Navbar buttonFunction={() => this.props.navigation.openDrawer()} />
        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Typography h3 center>
              Galio - react native kit
            </Typography>
            <Typography p muted center style={{ paddingHorizontal: 12 }}>
              This is the perfect place to write a short description of this
              step and even the next steps ahead.
            </Typography>
          </View>

          <View style={{flex: 2, justifyContent: 'space-evenly', alignItems: 'center'}}>
            <View>
              <Input
                style={styles.inputStyles}
                borderless
                bgColor="transparent"
                type="email-address"
                placeholder="kanyewest@thegreatkanye.com"
                label="Email"
                borderColor="rgb(0,0,0)"
                placeholderTextColor="rgba(0,0,0,0.6)"
                icon="email-secure"
                family="MaterialCommunityIcons"
              />
              <Input
                style={styles.inputStyles}
                borderless
                bgColor="transparent"
                placeholder="My awesome password"
                label="Password"
                help="Your password must have between 6 and 9 characters"
                bottomHelp
                borderColor="rgb(0,0,0)"
                placeholderTextColor="rgba(0,0,0,0.6)"
                icon="textbox-password"
                family="MaterialCommunityIcons"
                password
                viewPass
              />
              <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity>
                  <Typography size={10} color="rgb(209,0,125)">
                    Forgot your password?
                  </Typography>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Button color="error" round>
                Sign in
              </Button>
              <TouchableOpacity>
                <Typography size={14} center color="rgb(209,0,125)" style={{ marginTop: 10 }}>
                  Don't have an account? Sign up
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyles: {
    borderBottomWidth: 2,
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
