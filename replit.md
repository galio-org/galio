# Galio Framework

## Overview
Galio Framework is a beautiful React Native UI component library that provides carefully crafted components, typography, and a gorgeous base theme. This library is licensed under MIT and can be installed in any React Native project.

**Current Status**: ✅ Library successfully built and demo server running

## Project Structure
- `/src/` - TypeScript source code for all components
- `/dist/` - Compiled JavaScript output (auto-generated from TypeScript)
- `/assets/` - Images, fonts, and other static assets
- `/demo/` - Demo web server to showcase the library
- `/atomic/` - Atomic design components (compiled)
- `/theme/` - Theme configuration (compiled)

## What is Galio?
Galio is one of the coolest UI libraries for React Native. It provides:
- 14 beautiful UI components (Accordion, Block, Button, Card, Checkbox, DeckSwiper, Icon, Input, NavBar, Radio, Slider, Switch, Text, Toast)
- Customizable theme system
- TypeScript support
- Atomic design pattern implementation

## Technology Stack
- **Language**: TypeScript
- **Runtime**: Node.js v20.19.3
- **Build Tool**: TypeScript Compiler (tsc)
- **Target Platform**: React Native (iOS & Android)
- **Demo Server**: Node.js HTTP server

## Available Components
1. **Accordion** - Expandable content panels
2. **Block** - Flexible layout container
3. **Button** - Customizable buttons
4. **Card** - Beautiful card components
5. **Checkbox** - Styled checkboxes
6. **Deck Swiper** - Swipeable card deck
7. **Icon** - Icon components with vector-icons support
8. **Input** - Form input fields
9. **NavBar** - Navigation bar
10. **Radio** - Radio button groups
11. **Slider** - Range sliders
12. **Switch** - Toggle switches
13. **Text** - Typography components
14. **Toast** - Notification toasts

## Development Workflow

### Building the Library
The library is built using TypeScript:
```bash
npm run build
```
This compiles TypeScript files from `/src/` to JavaScript in `/dist/` and copies fonts.

### Running the Demo
A demo web server is configured to showcase the library:
```bash
npm start  # or the workflow will start automatically
```
The demo runs on port 5000 and displays library documentation.

### Available Scripts
- `npm run build` - Compile TypeScript to JavaScript
- `npm run lint` - Run ESLint on source files
- `npm run lint:fix` - Auto-fix linting issues
- `npm run type-check` - TypeScript type checking without emitting files

## Installation (For Users)
To use Galio in a React Native project:
```bash
npm install galio-framework
# or
yarn add galio-framework
```

Then import components:
```javascript
import { Block, Button, Card, Icon, Input, NavBar, Text } from 'galio-framework';
```

## Replit Environment Setup
- **Workflow**: "Demo Server" running `node demo/server.js` on port 5000
- **Output Type**: Webview (displays documentation page)
- **Node.js Version**: 20.19.3
- **TypeScript**: Installed and configured

## Key Dependencies
- `@expo/vector-icons` - Icon library
- `react` & `react-native` - Peer dependencies
- `typescript` - Development dependency

## Architecture Notes
This is a **library project**, not a standalone application. It:
- Exports reusable React Native components
- Is meant to be installed in other projects
- Uses TypeScript for type safety
- Follows atomic design patterns
- Has a demo server for documentation purposes only

## Recent Changes
- **2024-10-13**: Theme System & Component Improvements
  - ✅ Implemented proper dark mode support with system detection
  - ✅ Added `mode` prop to GalioProvider ('light' | 'dark' | 'auto')
  - ✅ Created `useThemeColors()` hook for accessing current mode colors
  - ✅ Implemented deep merge utility for custom theme overrides
  - ✅ Updated all core components to use current theme mode:
    - Button, Input, Icon, Card, Block, Text, Checkbox
  - ✅ Fixed hardcoded LIGHT_MODE references throughout codebase
  - ✅ Added React Native `useColorScheme` for system theme detection
  - ✅ **Checkbox component enhancement:**
    - Added `checked` prop for controlled mode (recommended)
    - Maintained `initialValue` for backward compatibility (uncontrolled mode)
    - Now supports both controlled and uncontrolled usage patterns
  - ✅ Created comprehensive examples.md with all component usage examples
  - Built TypeScript library successfully
  - Created demo documentation server
  - Configured workflow for port 5000
  - Added .gitignore for Node.js projects
  - Set up proper cache control headers

## Theme System
The Galio theme system now supports proper dark mode and runtime theme switching:

### Usage
```tsx
import { GalioProvider } from 'galio-framework';

// Auto-detect system theme
<GalioProvider mode="auto">
  <App />
</GalioProvider>

// Force light mode
<GalioProvider mode="light">
  <App />
</GalioProvider>

// Force dark mode
<GalioProvider mode="dark">
  <App />
</GalioProvider>

// Custom theme with deep merge
<GalioProvider 
  mode="auto"
  customColors={{
    primary: '#FF6B6B',
    secondary: '#4ECDC4'
  }}
>
  <App />
</GalioProvider>
```

### Accessing Theme Colors
```tsx
import { useThemeColors } from 'galio-framework';

function MyComponent() {
  const colors = useThemeColors();
  // colors automatically switches between LIGHT_MODE and DARK_MODE
  // based on current theme setting
  return <View style={{ backgroundColor: colors.primary }} />;
}
```

## External Resources
- Documentation: https://galio.io/docs
- GitHub: https://github.com/galio-org/galio
- Example App: https://github.com/galio-org/galio-starter-kit
- Website: https://galio.io

## Notes
- This is a React Native library, so the actual components run on mobile devices
- The demo server is a simple web page for documentation purposes
- The built library is in `/dist/` and ready for npm publishing
- All TypeScript source is in `/src/` directory
