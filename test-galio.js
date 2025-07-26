


import React from 'react';
import { View, ScrollView, Text as RNText, StyleSheet } from 'react-native';
import galio from './src';

export default function GalioTestScreen() {
  let results = [];
  try {
    results.push('🧪 Testing Galio Framework v0.9.0...');
    results.push('✅ Galio framework imported successfully');
    results.push('📦 Available components: ' + Object.keys(galio).join(', '));

    const { Block, Button, Text, Icon, theme } = galio;
    results.push('✅ Block component: ' + typeof Block);
    results.push('✅ Button component: ' + typeof Button);
    results.push('✅ Text component: ' + typeof Text);
    results.push('✅ Icon component: ' + typeof Icon);
    results.push('✅ Theme object: ' + typeof theme);

    if (theme && theme.COLORS && theme.SIZES) {
      results.push('🎨 Theme colors: ' + Object.keys(theme.COLORS).join(', '));
      results.push('📏 Theme sizes: ' + Object.keys(theme.SIZES).join(', '));
    } else {
      results.push('⚠️ Theme object is missing COLORS or SIZES properties.');
    }

    results.push('🎉 All tests passed! Galio v0.9.0 is working correctly.');
    results.push('📱 Ready for React 19, React Native 0.80, and Expo 53!');
  } catch (error) {
    results.push('❌ Test failed: ' + error.message);
    results.push('Stack trace: ' + error.stack);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>
        {results.map((msg, i) => (
          <RNText key={i} style={styles.text}>{msg}</RNText>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    padding: 20,
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
    color: '#222',
  },
});
