import 'react-native-url-polyfill/auto';
import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import {
  Block,
  Button,
  Card,
  Text,
  Icon,
  Input,
  NavBar,
  Switch,
  Slider,
  Checkbox,
  Radio,
  Toast,
  theme,
  GalioProvider
} from './src';
console.log('GALIO TEST APP LOADED');

export default function App() {
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [inputValue, setInputValue] = useState('');
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <GalioProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <NavBar
        title="Galio Test App"
        leftIconColor="#000"
        rightIconColor="#000"
        style={styles.navbar}
      />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Block style={styles.section}>
          <Text h4 style={styles.sectionTitle}>Welcome to Galio v0.9.0!</Text>
          <Text p style={styles.description}>
            This app tests all Galio components with React 19, React Native 0.80, and Expo 53.
          </Text>
        </Block>

        {/* Buttons Section */}
        <Block style={styles.section}>
          <Text h5 style={styles.sectionTitle}>Buttons</Text>
          <Block row space="between" style={styles.buttonRow}>
            <Button color="primary" size="small">Primary</Button>
            <Button color="info" size="small">Info</Button>
            <Button color="success" size="small">Success</Button>
          </Block>
          <Block row space="between" style={styles.buttonRow}>
            <Button color="warning" size="small">Warning</Button>
            <Button color="danger" size="small">Danger</Button>
            <Button color="secondary" size="small">Secondary</Button>
          </Block>
          <Button 
            color="theme" 
            style={styles.fullButton}
            onPress={showToastMessage}
          >
            Show Toast Message
          </Button>
        </Block>

        {/* Icons Section */}
        <Block style={styles.section}>
          <Text h5 style={styles.sectionTitle}>Icons</Text>
          <Block row space="between" style={styles.iconRow}>
            <Icon family="AntDesign" name="heart" size={24} color={theme.COLORS.PRIMARY} />
            <Icon family="Entypo" name="star" size={24} color={theme.COLORS.WARNING} />
            <Icon family="Feather" name="check" size={24} color={theme.COLORS.SUCCESS} />
            <Icon family="FontAwesome" name="user" size={24} color={theme.COLORS.INFO} />
            <Icon family="Ionicons" name="settings" size={24} color={theme.COLORS.SECONDARY} />
          </Block>
        </Block>

        {/* Input Section */}
        <Block style={styles.section}>
          <Text h5 style={styles.sectionTitle}>Input</Text>
          <Input
            placeholder="Enter your name"
            value={inputValue}
            onChangeText={setInputValue}
            style={styles.input}
          />
        </Block>

        {/* Controls Section */}
        <Block style={styles.section}>
          <Text h5 style={styles.sectionTitle}>Controls</Text>
          
          <Block row space="between" style={styles.controlRow}>
            <Text>Switch: {switchValue ? 'ON' : 'OFF'}</Text>
            <Switch
              initialValue={switchValue}
              onChange={() => setSwitchValue(!switchValue)}
            />
          </Block>

          <Block style={styles.controlRow}>
            <Text>Slider: {sliderValue}</Text>
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              minimumValue={0}
              maximumValue={100}
              step={1}
              activeColor={theme.COLORS.PRIMARY}
            />
          </Block>

          <Block row space="between" style={styles.controlRow}>
            <Text>Checkbox: {checkboxValue ? 'Checked' : 'Unchecked'}</Text>
            <Checkbox
              initialValue={checkboxValue}
              onChange={setCheckboxValue}
              label="Checkbox"
            />
          </Block>

          <Block style={styles.controlRow}>
            <Text>Radio Buttons:</Text>
            <Radio
              value={radioValue === 'option1'}
              onChange={() => setRadioValue('option1')}
              label="Option 1"
              color="primary"
            />
            <Radio
              value={radioValue === 'option2'}
              onChange={() => setRadioValue('option2')}
              label="Option 2"
              color="primary"
            />
          </Block>
        </Block>

        {/* Card Section */}
        <Block style={styles.section}>
          <Text h5 style={styles.sectionTitle}>Cards</Text>
          <Card
            title="Galio Card"
            caption="Beautiful card component"
            location="React Native"
            avatar="https://i.imgur.com/0y8Ftya.jpg"
            image="https://i.imgur.com/0y8Ftya.jpg"
            style={styles.card}
          />
        </Block>

        {/* Simple Accordion-like Section (without FlatList) */}
        <Block style={styles.section}>
          <Text h5 style={styles.sectionTitle}>FAQ Section</Text>
          <Block style={styles.faqItem}>
            <Text h6>What is Galio?</Text>
            <Text p style={styles.faqAnswer}>
              Galio is a beautifully designed, free and open source React Native framework with a set of ready-to-use components.
            </Text>
          </Block>
          <Block style={styles.faqItem}>
            <Text h6>How to use Galio?</Text>
            <Text p style={styles.faqAnswer}>
              Simply import the components you need and start building your app with beautiful UI components.
            </Text>
          </Block>
          <Block style={styles.faqItem}>
            <Text h6>Is Galio free?</Text>
            <Text p style={styles.faqAnswer}>
              Yes! Galio is completely free and open source under the MIT license.
            </Text>
          </Block>
        </Block>

        {/* Theme Info */}
        <Block style={styles.section}>
          <Text h5 style={styles.sectionTitle}>Theme Information</Text>
          <Text p>Primary Color: {theme.COLORS.PRIMARY}</Text>
          <Text p>Secondary Color: {theme.COLORS.SECONDARY}</Text>
          <Text p>Success Color: {theme.COLORS.SUCCESS}</Text>
          <Text p>Warning Color: {theme.COLORS.WARNING}</Text>
          <Text p>Danger Color: {theme.COLORS.DANGER}</Text>
        </Block>
      </ScrollView>

      {/* Toast */}
      {showToast && (
        <Toast
          isShow={showToast}
          positionIndicator="top"
          style={{ backgroundColor: theme.COLORS.SUCCESS }}
        >
          <Block row>
            <Icon name="check" family="Feather" size={14} color={theme.COLORS.WHITE} />
            <Text style={{ color: theme.COLORS.WHITE, marginLeft: 10 }}>
              Toast message works perfectly!
            </Text>
          </Block>
        </Toast>
      )}
    </GalioProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  navbar: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  section: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    marginBottom: 15,
    color: '#2c3e50',
  },
  description: {
    color: '#7f8c8d',
    lineHeight: 20,
  },
  buttonRow: {
    marginBottom: 10,
  },
  fullButton: {
    marginTop: 10,
  },
  iconRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 4,
  },
  controlRow: {
    marginBottom: 15,
    alignItems: 'center',
  },
  card: {
    marginTop: 10,
  },
  faqItem: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  faqAnswer: {
    marginTop: 5,
    color: '#7f8c8d',
  },
});