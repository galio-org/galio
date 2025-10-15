# Galio Theme System - Migration Guide

## 🎯 What's New

Galio Framework has been **fully modernized** with a **semantic color token system** that follows 2025 React Native standards (React Native Paper, NativeBase patterns). The theme system is now simpler, more powerful, and easier to customize.

### Key Improvements

✅ **Semantic Color Tokens** - Colors auto-adapt to light/dark mode  
✅ **Simpler API** - Just pass brand colors, everything else works automatically  
✅ **Better TypeScript Support** - Full autocomplete for all theme properties  
✅ **Backward Compatible** - Old API still works with deprecation warnings  
✅ **All 16 Components Modernized** - Every component uses the new system

### Modernization Status (October 2025)

**All 16 Galio components** have been fully modernized:

| Component | Status | Uses Semantic Tokens | Auto Light/Dark |
|-----------|--------|---------------------|-----------------|
| Text | ✅ Complete | ✅ Yes | ✅ Yes |
| Button | ✅ Complete | ✅ Yes | ✅ Yes |
| Block | ✅ Complete | ✅ Yes | ✅ Yes |
| Card | ✅ Complete | ✅ Yes | ✅ Yes |
| Input | ✅ Complete | ✅ Yes | ✅ Yes |
| Icon | ✅ Complete | ✅ Yes | ✅ Yes |
| Checkbox | ✅ Complete | ✅ Yes | ✅ Yes |
| Radio | ✅ Complete | ✅ Yes | ✅ Yes |
| Switch | ✅ Complete | ✅ Yes | ✅ Yes |
| Slider | ✅ Complete | ✅ Yes | ✅ Yes |
| NavBar | ✅ Complete | ✅ Yes | ✅ Yes |
| Link | ✅ Complete | ✅ Yes | ✅ Yes |
| Avatar | ✅ Complete | ✅ Yes | ✅ Yes |
| Accordion | ✅ Complete | ✅ Yes | ✅ Yes |
| Toast | ✅ Complete | ✅ Yes | ✅ Yes |
| DeckSwiper | ✅ Complete | ✅ Yes | ✅ Yes |

**Every component** now:
- Uses `useTheme()` and `useColors()` hooks
- Automatically adapts to light/dark mode
- Works with semantic color tokens
- Has no manual mode branching  

---

## 📋 Migration Quick Start

### Old API (Still Works)
```tsx
import { GalioProvider, useGalioTheme, useThemeColors } from 'galio-framework';

// Provider
<GalioProvider theme={{ 
  COLORS: { primary: '#FF6B6B' },
  SIZES: { BASE: 18 }
}}>
  <App />
</GalioProvider>

// In components
const theme = useGalioTheme();
const colors = useThemeColors();
const modeColors = theme.COLORS[theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE'];
```

### New API (Recommended)
```tsx
import { GalioProvider, useTheme, useColors } from 'galio-framework';

// Provider - Simple!
<GalioProvider theme={{ 
  colors: { primary: '#FF6B6B' }
}}>
  <App />
</GalioProvider>

// In components - Colors auto-adapt!
const { colors, mode, sizes } = useTheme();
// or just
const colors = useColors();
<Text style={{ color: colors.text }}>Auto adapts to theme!</Text>
```

---

## 📦 Creating Your Own Theme File

**Important:** The framework provides **neutral defaults only**. You should define your brand colors in your own application's theme file, not in the framework.

### Step 1: Create `theme.ts` in Your Application

Create a file in your project (e.g., `src/theme.ts` or `app/theme.ts`):

```tsx
// src/theme.ts - Your application's theme file
export const myAppTheme = {
  colors: {
    // Your brand colors - override the neutral defaults
    primary: '#FF6B6B',       // Your brand primary color
    success: '#51CF66',       // Your brand success color
    error: '#FF6B6B',         // Your brand error color
    warning: '#FFA94D',       // Your brand warning color
    info: '#4DABF7',          // Your brand info color
    
    // Optional: Override other semantic colors
    background: '#FAFAFA',    // Custom background
    surface: '#FFFFFF',       // Custom surface
    text: '#1A1A1A',          // Custom text color
  },
  sizes: {
    // Optional: Custom size overrides
    BASE: 18,                 // Base font size
  }
};
```

### Step 2: Use Your Theme in GalioProvider

```tsx
// App.tsx
import { GalioProvider } from 'galio-framework';
import { myAppTheme } from './theme';

export default function App() {
  return (
    <GalioProvider theme={myAppTheme}>
      <YourApp />
    </GalioProvider>
  );
}
```

### Step 3: Use Colors in Your Components

```tsx
import { useColors } from 'galio-framework';

function MyComponent() {
  const colors = useColors();
  
  return (
    <Button 
      color={colors.primary}  // Uses YOUR brand primary color
    >
      Click Me
    </Button>
  );
}
```

### What the Framework Provides

The Galio Framework provides **neutral defaults** that are designed to be overridden:

- **Neutral grays** for primary/secondary colors
- **Subtle blues/greens/reds** for info/success/error states  
- **Light/Dark mode** auto-adaptation logic
- **Semantic token structure** that you fill with your brand colors

**You provide the brand colors** via your theme file - the framework just handles the structure and light/dark mode logic! 🎨

---

## 🎨 Semantic Color System

### Available Semantic Colors

| Color Token | Purpose | Auto-Adapts |
|------------|---------|-------------|
| `background` | Main background | ✅ Light/Dark |
| `surface` | Card/panel backgrounds | ✅ Light/Dark |
| `surfaceVariant` | Alternative surface | ✅ Light/Dark |
| `text` | Primary text | ✅ Light/Dark |
| `textSecondary` | Secondary text | ✅ Light/Dark |
| `textTertiary` | Muted/hint text | ✅ Light/Dark |
| `onPrimary` | Text on primary color | - |
| `onBackground` | Text on background | ✅ Light/Dark |
| `primary` | Primary brand color | ✅ Light/Dark |
| `primaryHover` | Primary hover state | ✅ Light/Dark |
| `success` | Success state | ✅ Light/Dark |
| `error` | Error state | ✅ Light/Dark |
| `warning` | Warning state | ✅ Light/Dark |
| `info` | Info state | ✅ Light/Dark |
| `border` | Border color | ✅ Light/Dark |
| `disabled` | Disabled state | ✅ Light/Dark |
| `inputBackground` | Input backgrounds | ✅ Light/Dark |
| `placeholder` | Placeholder text | ✅ Light/Dark |

### Usage Examples

```tsx
import { useColors } from 'galio-framework';

function MyComponent() {
  const colors = useColors();
  
  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Primary Text</Text>
      <Text style={{ color: colors.textSecondary }}>Secondary Text</Text>
      <View style={{ 
        backgroundColor: colors.primary,
        borderColor: colors.border 
      }}>
        <Text style={{ color: colors.onPrimary }}>On Primary</Text>
      </View>
    </View>
  );
}
```

---

## 🔄 Light/Dark Mode

### Auto Mode (Follows System)
```tsx
<GalioProvider>
  <App />
</GalioProvider>
```

### Manual Control
```tsx
function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  
  return (
    <GalioProvider mode={mode}>
      <Button onPress={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </Button>
      <YourApp />
    </GalioProvider>
  );
}
```

### In Components
```tsx
function MyComponent() {
  const { mode } = useTheme();
  
  return (
    <Text>Current mode: {mode}</Text>
  );
}
```

---

## 🎨 Custom Brand Colors

### Simple Customization
```tsx
<GalioProvider theme={{
  colors: {
    primary: '#FF6B6B',        // Your brand color
    success: '#51CF66',        // Custom success
    error: '#FF6B6B',          // Custom error
  }
}}>
  <App />
</GalioProvider>
```

### Advanced Customization
```tsx
<GalioProvider theme={{
  colors: {
    // Brand colors
    primary: '#6366F1',
    primaryHover: '#4F46E5',
    
    // Custom semantic colors
    background: '#FAFAFA',
    surface: '#FFFFFF',
    text: '#1A1A1A',
    textSecondary: '#666666',
    
    // State colors
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
  },
  sizes: {
    BASE: 18,                   // Change base size
    BUTTON_HEIGHT: 48,          // Larger buttons
  }
}}>
  <App />
</GalioProvider>
```

---

## 📝 Component Migration Examples

All 16 Galio components now support the new theming system. Here are common migration patterns:

### Button Component

**Old:**
```tsx
const theme = useGalioTheme();
const colors = useThemeColors();
<Button color={colors.primary}>Click Me</Button>
```

**New:**
```tsx
const colors = useColors();
<Button color={colors.primary}>Click Me</Button>
// or just use semantic color names
<Button color="primary">Click Me</Button>
```

### Custom Styles

**Old:**
```tsx
const theme = useGalioTheme();
const modeColors = theme.COLORS[theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE'];

const styles = StyleSheet.create({
  container: {
    backgroundColor: modeColors.background,
    borderColor: modeColors.grey,
  }
});
```

**New:**
```tsx
const colors = useColors();

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderColor: colors.border,
  }
});
```

### Dynamic Theme-Aware Components

**Old:**
```tsx
function MyCard() {
  const theme = useGalioTheme();
  const colors = theme.COLORS[theme.mode === 'dark' ? 'DARK_MODE' : 'LIGHT_MODE'];
  
  return (
    <View style={{ 
      backgroundColor: colors.background,
      borderColor: colors.grey 
    }}>
      <Text style={{ color: colors.text }}>Content</Text>
    </View>
  );
}
```

**New:**
```tsx
function MyCard() {
  const colors = useColors();
  
  return (
    <View style={{ 
      backgroundColor: colors.surface,
      borderColor: colors.border 
    }}>
      <Text style={{ color: colors.text }}>Content</Text>
    </View>
  );
}
```

---

## 🔧 API Reference

### Hooks

#### `useTheme()` (Recommended)
Returns complete theme object with semantic colors
```tsx
const { colors, sizes, mode } = useTheme();
```

#### `useColors()` (Recommended)
Returns just semantic colors for current mode
```tsx
const colors = useColors();
console.log(colors.primary); // Auto-adapts to light/dark!
```

#### `useGalioTheme()` (Deprecated)
Legacy hook, use `useTheme()` instead
```tsx
const theme = useGalioTheme(); // Shows deprecation warning
```

#### `useThemeColors()` (Deprecated)
Legacy colors hook, use `useColors()` instead
```tsx
const colors = useThemeColors(); // Shows deprecation warning
```

---

## 🚨 Breaking Changes

### None! 

The new theme system is **100% backward compatible**. Old code continues to work with deprecation warnings in console.

### Deprecation Warnings

You'll see console warnings if using old APIs:
- `useGalioTheme is deprecated. Use useTheme() instead`
- `useThemeColors is deprecated. Use useColors() instead`
- `Legacy theme API detected. Consider migrating to new API`

These are just warnings - your code will continue working.

---

## ✅ Migration Checklist

Use this checklist when migrating your application to the new theme system:

**GalioProvider Setup:**
- [ ] Create a `theme.ts` file in your application with your brand colors
- [ ] Update `GalioProvider` theme prop from `COLORS`/`SIZES` to `colors`/`sizes`
- [ ] Pass your custom theme to `<GalioProvider theme={myAppTheme}>`

**Component Updates:**
- [ ] Replace `useGalioTheme()` with `useTheme()`
- [ ] Replace `useThemeColors()` with `useColors()`
- [ ] Update color references to use semantic names (grey → border, muted → textSecondary, danger → error)
- [ ] Remove manual mode branching (`theme.mode === 'dark' ? ...` - colors now auto-adapt!)

**Testing:**
- [ ] Test light/dark mode switching works correctly
- [ ] Verify all custom colors appear in both light and dark modes
- [ ] Check that all 16 Galio components render properly
- [ ] Update TypeScript imports if needed

**All Components Ready:**
Since all 16 Galio components have been modernized, you can migrate at your own pace. Each component will automatically use the new semantic tokens when you update your code!

---

## 🎯 Why Migrate?

1. **Simpler Code** - Less boilerplate, more intuitive
2. **Better DX** - Full TypeScript autocomplete for colors
3. **Industry Standard** - Follows React Native Paper/NativeBase patterns
4. **Future-Proof** - Old API will be removed in v2.0
5. **Auto-Adapting** - Colors automatically adjust to theme mode
6. **All Components Ready** - All 16 Galio components fully support the new system
7. **No Manual Branching** - Never write `theme.mode === 'dark' ? ...` again!

---

## 📚 Resources

- [React Native Paper Theming](https://callstack.github.io/react-native-paper/docs/guides/theming/)
- [NativeBase Design Tokens](https://docs.nativebase.io/design-tokens)
- [Galio Documentation](./README.md)

---

## 💬 Need Help?

Having issues with migration? Check the:
- [GitHub Issues](https://github.com/galio-org/galio/issues)
- [Examples](./examples/)
- [Community Discord](https://discord.gg/galio)

---

**Happy Theming! 🎨**
