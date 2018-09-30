import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
// galio components
import {
  NavBar, Input, Button, Text,
} from '..';

const COLORS = {
  FACEBOOK: '#3B5998',
  DRIBBBLE: '#ea4c89',
  TWITTER: '#00aced',
};

const Register = props => (
  <View style={{ flex: 1 }}>
    <NavBar transparent onLeftPress={() => props.navigation.openDrawer()} />

    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            onlyIcon
            icon="facebook"
            iconFamily="FontAwesome"
            iconSize={28}
            style={{ marginRight: 15 }}
            color={COLORS.FACEBOOK}
            iconColor="#fff"
          />
          <Button
            onlyIcon
            icon="twitter"
            iconFamily="FontAwesome"
            iconSize={28}
            style={{ marginRight: 15 }}
            color={COLORS.TWITTER}
            iconColor="#fff"
          />
          <Button
            onlyIcon
            icon="dribbble"
            iconFamily="FontAwesome"
            iconSize={28}
            color={COLORS.DRIBBBLE}
            iconColor="#fff"
          />
        </View>
        <Text h4 muted center style={{ marginTop: 15 }}>
          or be classical
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
            placeholder="MigosFan29324"
            label="Username"
            placeholderTextColor="#757575"
          />
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
        </View>

        <View>
          <Button color="error" round>
            Sign up
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 3,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputStyles: {
    borderBottomWidth: 2,
    borderColor: '#212121',
    borderRadius: 0,
  },
});

export default Register;
