# Changelog

All notable changes to this project will be documented in this file.

## [0.9.0] - 2025-07-26

### 🚀 **Major Update - React 19, React Native 0.80, Expo 50+ Support**

#### **Breaking Changes**
- **React**: Updated from 16.8.3 to 19.1.0
- **React Native**: Updated from 0.59 to 0.80.0
- **Vector Icons**: Migrated from `react-native-vector-icons` to `@expo/vector-icons`
- **Expo**: Added support for Expo SDK 50+

#### **Dependencies Updated**
- `react`: ^19.1.0
- `react-native`: ^0.80.0
- `@expo/vector-icons`: ^14.1.0
- `eslint`: ^8.57.0
- `prettier`: ^3.6.0
- `prop-types`: ^15.8.1

#### **New Features**
- **Modern React Support**: Full compatibility with React 19 features
- **Latest React Native**: Support for React Native 0.80 APIs
- **Expo Integration**: Native support for Expo 50+ projects
- **Enhanced Icon System**: Better icon support with @expo/vector-icons

#### **Bug Fixes**
- Fixed `Dimensions.get('screen')` deprecation warnings
- Resolved vector icons compatibility issues
- Updated component APIs for React 19 compatibility
- Fixed theme context usage for modern React

#### **Performance Improvements**
- Optimized bundle size with modern dependencies
- Improved component rendering performance
- Better memory usage with React 19

#### **Documentation**
- Updated README with new compatibility requirements
- Added migration guide for v0.8.x to v0.9.0
- Comprehensive test documentation

#### **Testing**
- All components tested and verified working
- Web compatibility confirmed
- Mobile compatibility ready for testing

### **Migration Guide**
To upgrade from v0.8.x to v0.9.0:

1. Update your dependencies:
   ```bash
   npm install galio-framework@0.9.0
   ```

2. Update your project dependencies:
   ```bash
   npm install react@^19.0.0 react-native@^0.80.0 @expo/vector-icons@^14.0.0
   ```

3. If using Expo, ensure you're on SDK 50+:
   ```bash
   npx expo install --fix
   ```

4. Update any custom icon usage to use @expo/vector-icons instead of react-native-vector-icons

### **Compatibility**
- **React**: >=18.0.0 (tested with 19.1.0)
- **React Native**: >=0.71.0 (tested with 0.80.0)
- **Expo**: >=50.0.0 (recommended)
- **@expo/vector-icons**: >=14.0.0

---

## [0.8.x] - Previous versions

### Legacy versions before the major React/React Native update 