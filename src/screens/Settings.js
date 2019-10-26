import React from 'react';
import { Platform, ScrollView, StyleSheet } from 'react-native';

// galio components
import {
  Text, Input, Block, NavBar, Checkbox, Switch, Radio,
} from 'galio-framework';
import theme from '../theme';

class Settings extends React.Component {
  state = {
    switch1: true,
    switch2: true,
    switch3: false,
    switch4: true,
    primaryCard: 'card1',
  };

  toggleSwitch = (name) => {
    this.setState(prevState => ({
      [name]: !prevState[name],
    }));
  };

  setPrimaryCard = (name) => {
    this.setState({ primaryCard: name });
  };

  render() {
    const { navigation } = this.props;
    const {
      switch1, switch2, switch3, switch4, primaryCard,
    } = this.state;

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Settings"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <ScrollView style={{ flex: 1 }}>
          <Block style={styles.container}>
            <Block style={styles.section}>
              <Block style={styles.headerContainer}>
                <Text style={styles.header}>Edit Details</Text>
                <Text style={styles.subHeader}>You can change your personal info</Text>
              </Block>
              <Input placeholder="Name" rounded />
              <Input placeholder="Email" rounded />
            </Block>
            <Block style={styles.section}>
              <Checkbox
                style={styles.checkOption}
                checkboxStyle={{
                  borderWidth: 1,
                  opacity: theme.SIZES.OPACITY * 0.5,
                }}
                color={theme.COLORS.ERROR}
                labelStyle={{
                  color: theme.COLORS.TEXT,
                  opacity: theme.SIZES.OPACITY * 0.5,
                }}
                label="I agree with Private Policy"
                initialValue
                disabled
              />
              <Checkbox
                style={styles.checkOption}
                checkboxStyle={{
                  borderWidth: 1,
                }}
                color={theme.COLORS.ERROR}
                labelStyle={{
                  color: theme.COLORS.TEXT,
                }}
                initialValue
                label="Send me promotional emails"
              />
              <Checkbox
                style={styles.checkOption}
                checkboxStyle={{
                  borderWidth: 3,
                }}
                color={theme.COLORS.ERROR}
                labelStyle={{
                  color: theme.COLORS.TEXT,
                }}
                label="Make my profile public"
              />
              <Checkbox
                style={styles.checkOption}
                checkboxStyle={{
                  borderWidth: 3,
                  opacity: theme.SIZES.OPACITY * 0.5,
                }}
                color={theme.COLORS.ERROR}
                labelStyle={{
                  color: theme.COLORS.TEXT,
                  opacity: theme.SIZES.OPACITY * 0.5,
                }}
                label="Activate Premium account"
                disabled
              />
            </Block>
            <Block style={styles.section}>
              <Block style={styles.headerContainer}>
                <Text style={styles.header}>Select Card</Text>
                <Text style={styles.subHeader}>Choose your primary card</Text>
              </Block>
              <Block style={styles.creditCardContainer}>
                <Block style={{ marginTop: 10, marginBottom: 10 }}>
                  <Radio
                    label="VISA ****4321"
                    labelStyle={{ fontWeight: '700', marginTop: -10 }}
                    color={theme.COLORS.ERROR}
                    containerStyle={styles.creditCardItem}
                    onChange={() => this.setPrimaryCard('card1')}
                    initialValue={primaryCard === 'card1'}
                  />
                  <Text style={styles.cardDetails}>{'John Doe \nExpires 11/2022'}</Text>
                </Block>
                <Block style={{ marginTop: 10, marginBottom: 10 }}>
                  <Radio
                    label="VISA ****1234"
                    labelStyle={{ fontWeight: '700', marginTop: -10 }}
                    color={theme.COLORS.ERROR}
                    containerStyle={[styles.creditCardItem, styles.borderTop]}
                    onChange={() => this.setPrimaryCard('card2')}
                    initialValue={primaryCard === 'card2'}
                  />
                  <Text style={styles.cardDetails}>{'John Doe \nExpires 11/2022'}</Text>
                </Block>
                <Block style={{ marginTop: 10, marginBottom: 10 }}>
                  <Radio
                    label="MASTERCARD ****3241"
                    labelStyle={{ fontWeight: '700', marginTop: -10 }}
                    color={theme.COLORS.ERROR}
                    containerStyle={[styles.creditCardItem, styles.borderTop]}
                    initialValue={primaryCard === 'card3'}
                    disabled
                  />
                  <Text style={[styles.cardDetails, { color: theme.COLORS.MUTED }]}>
                    {'John Doe \nExpires 11/2022'}
                  </Text>
                </Block>
              </Block>
            </Block>
            <Block style={styles.section}>
              <Block style={styles.headerContainer}>
                <Text style={styles.header}>Notification settings</Text>
                <Text style={styles.subHeader}>These are important settings</Text>
              </Block>
              <Block style={styles.toggleOption}>
                <Text>Someone mentions me </Text>
                <Switch
                  color={theme.COLORS.ERROR}
                  value={switch1}
                  onValueChange={() => this.toggleSwitch('switch1')}
                />
              </Block>
              <Block style={styles.toggleOption}>
                <Text>Someone follows me </Text>
                <Switch
                  color={theme.COLORS.ERROR}
                  value={switch2}
                  onValueChange={() => this.toggleSwitch('switch2')}
                />
              </Block>
              <Block style={styles.toggleOption}>
                <Text>Someone comments me </Text>
                <Switch
                  color={theme.COLORS.ERROR}
                  value={switch3}
                  onValueChange={() => this.toggleSwitch('switch3')}
                />
              </Block>
              <Block style={styles.toggleOption}>
                <Text>A seller follows me </Text>
                <Switch
                  color={theme.COLORS.ERROR}
                  value={switch4}
                  onValueChange={() => this.toggleSwitch('switch4')}
                />
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    justifyContent: 'center',
  },
  section: {
    marginBottom: 20,
  },
  headerContainer: {
    flex: 2,
    alignItems: 'center',
  },
  header: {
    margin: 3,
    fontSize: theme.SIZES.FONT * 1.2,
    fontWeight: '600',
  },
  subHeader: {
    marginBottom: 5,
    color: theme.COLORS.GREY,
  },
  checkOption: {
    margin: 10,
  },
  creditCardItem: {
    padding: 10,
  },
  cardDetails: {
    marginLeft: 43,
    marginTop: -15,
  },
  borderTop: {
    borderTopColor: theme.COLORS.GREY,
    borderTopWidth: 1,
  },
  creditCardContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.COLORS.GREY,
  },
  toggleOption: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default Settings;
