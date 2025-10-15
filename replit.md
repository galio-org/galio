# Galio Framework

## Overview

Galio is a React Native UI component library that provides a comprehensive set of pre-built, customizable components for building mobile applications. Licensed under MIT, it offers ready-made components, typography systems, and theming capabilities designed to accelerate React Native development. The library supports both iOS and Android platforms and is built with TypeScript for enhanced type safety.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Component Architecture

**File Structure** (Updated October 2025)
- All components are located in `src/` root directory for simplicity
- Flat structure makes it easy to find and import any component
- Components: Accordion, Avatar, Block, Button, Card, Checkbox, DeckSwiper, Icon, Input, Link, NavBar, Radio, Slider, Switch, Text, Toast

**Design Philosophy**
- While the codebase follows atomic design principles conceptually (basic components like Text/Icon, interactive atoms like Button/Input, and complex molecules like Card/NavBar), the file structure is intentionally flat
- All components are built as functional components using React Hooks
- Components utilize forwardRef where imperative handles are needed (Input, Link)
- Memo optimization is applied to prevent unnecessary re-renders (Icon, Text)
- Props are strongly typed using TypeScript interfaces for better developer experience

### Theming System (Modernized October 2025)

**Semantic Color Token System**
- Follows 2025 React Native standards (React Native Paper, NativeBase patterns)
- Industry-standard semantic tokens: `background`, `surface`, `text`, `primary`, `success`, `error`, etc.
- Colors automatically adapt to light/dark mode without manual branching
- Full TypeScript autocomplete support for all color tokens

**Dynamic Theme Provider**
- Global theme management through React Context API (`GalioProvider`)
- Supports three theme modes: light, dark, and auto (follows system preferences)
- Controlled mode switching via `mode` prop for manual theme toggle
- Deep merge capability for custom theme extensions while preserving defaults

**Modern Hooks (2025)**
- `useTheme()` - Returns complete theme object with `{ colors, sizes, mode }`
- `useColors()` - Convenient shortcut for semantic colors that auto-adapt to mode
- Legacy hooks maintained for backward compatibility with deprecation warnings

**Theme Structure**
- **Semantic Colors**: Auto-adapting tokens (background, surface, text, textSecondary, onPrimary, primary, success, error, warning, info, border, disabled)
- **Light Mode Colors**: Optimized for light backgrounds with proper contrast ratios
- **Dark Mode Colors**: Optimized for dark backgrounds with WCAG AA compliance
- **Sizes**: Responsive sizing system based on screen dimensions with BASE unit of 16px
- **Shadows**: Platform-specific shadow configurations for iOS and Android
- Centralized design tokens ensure visual consistency across all components

**Simple Customization**
- Just pass brand colors, everything else auto-generates
- Example: `<GalioProvider theme={{ colors: { primary: '#FF6B6B' } }}>`
- Supports partial overrides - only customize what you need
- Backward compatible with old API (COLORS/SIZES still work with warnings)

**Responsive Design**
- Custom normalization utilities for cross-device scaling
- Functions: `normalize()`, `verticalScale()`, `moderateScale()`, `scaleFont()`
- Base dimensions: 375x667 (iPhone 8 reference)
- Automatic adaptation to different screen sizes

### State Management

**Component-Level State**
- Internal state management using useState for uncontrolled components
- Support for both controlled and uncontrolled component patterns
- Props like `value` and `onChange` enable external state control
- Fallback to internal state when control props are not provided

**Animation State**
- Animated values managed through useRef to persist across renders
- PanResponder integration for gesture-based interactions (DeckSwiper, Slider)
- Memoized interpolations for performance optimization

### Icon System

**Multi-Family Icon Support**
- Integration with @expo/vector-icons supporting 14+ icon families
- Custom Galio icon set generated from IcoMoon configuration
- Dynamic icon family resolution through registry pattern
- Icon families: FontAwesome, MaterialIcons, Ionicons, Feather, AntDesign, and more

**Custom Font Loading**
- IcoMoon-based custom icon font (galio.ttf)
- JSON configuration for icon metadata and paths
- createIconSetFromIcoMoon utility for custom font integration

### Interaction Patterns

**Touch Handling**
- Pressable component for modern touch interactions across all interactive elements
- Platform-specific feedback (web cursor changes, mobile opacity)
- Accessibility support with proper labels and hints
- Disabled states with visual and functional constraints

**Gesture Recognition**
- PanResponder for swipe gestures (DeckSwiper)
- Touch tracking for continuous interactions (Slider)
- Threshold-based gesture completion logic

### Styling Architecture

**Style Composition**
- StyleSheet.create for optimized style objects
- Functional style generation based on theme and props
- Style merging with proper precedence (defaults < theme < props)
- Platform-specific styles using Platform.select

**Layout System**
- Flexbox-based Block component as foundation
- Declarative layout props (row, center, middle, space)
- SafeAreaView integration for notched devices
- Responsive width/height with fluid option

### Component Features

**Form Components**
- Input: Password visibility toggle, icon integration, validation states, label/help text
- Checkbox/Radio: Flexible layouts (row, column, reverse), custom styling, controlled/uncontrolled modes
- Switch: Theme-aware colors, accessibility support
- Slider: Continuous value tracking, step-based increments, custom styling

**Display Components**
- Card: Image support, avatar display, location metadata, configurable layouts
- Avatar: Dynamic sizing, label fallback, image support, shadow effects
- Toast: Position variants (top, center, bottom), fade animations, auto-dismiss
- Accordion: Expandable sections, custom icons, animated transitions

**Navigation Components**
- NavBar: Back navigation, left/right actions, transparent mode, custom title rendering
- DeckSwiper: Card stack navigation, swipe gestures, callback hooks

### TypeScript Integration

**Type Safety**
- Comprehensive interface definitions for all components
- Strict typing for theme objects and color schemes
- Generic type support for flexible component APIs
- Declaration files (index.d.ts) for library consumers

**Developer Experience**
- IntelliSense support for all props
- Type-checked theme customization
- Compile-time error detection

## External Dependencies

### Core React Native Dependencies
- **react** (>=16.8.0): React framework with Hooks support
- **react-native** (>=0.59.0): Cross-platform mobile framework
- Peer dependencies ensure compatibility with host application versions

### Icon Libraries
- **@expo/vector-icons** (^15.0.2): Comprehensive icon set including FontAwesome, MaterialIcons, Ionicons, etc.
- **@react-native-vector-icons/fontisto** (^12.3.0): Additional Fontisto icon family support
- Icon sets provide 1000+ icons across multiple design systems

### Development Tools
- **TypeScript** (~5.9.3): Static type checking and enhanced IDE support
- **ESLint** (^9.37.0): Code quality and consistency enforcement
- **@typescript-eslint** (^8.46.0): TypeScript-specific linting rules
- **Prettier** (^3.6.2): Code formatting
- **eslint-config-universe** (^15.0.3): Expo's ESLint configuration preset

### Build System
- **TypeScript Compiler**: Transpiles TS to JS with declaration files
- Build output: CommonJS modules in dist/ directory
- Font assets copied during build process
- Source maps and declaration maps for debugging

### Community Integration
- **opencollective-postinstall** (^2.0.3): Post-install messaging for open source funding
- Displays contributor and sponsor information after npm install

### Platform Support
- iOS and Android via React Native
- Web support through React Native Web compatibility
- No native module dependencies - pure JavaScript implementation