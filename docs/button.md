# Button Component

A highly customizable, theme-aware button for React Native, supporting icons, loading states, text transformation, shadows, and accessibility.

## Usage

```tsx
import Button from 'galio-be/src/Button';

<Button
  color="primary"
  size="large"
  icon="check"
  iconPosition="left"
  shadow="md"
  textTransform="uppercase"
  fullWidth
  onPress={() => alert('Pressed!')}
>
  Confirm
</Button>
```

## Props

| Prop                | Type                                              | Default      | Description                                                      |
|---------------------|---------------------------------------------------|--------------|------------------------------------------------------------------|
| color               | string                                            | 'primary'    | Button background color (theme key or custom color)              |
| children            | React.ReactNode                                   | —            | Button label/content                                             |
| disabled            | boolean                                           | false        | Disables the button                                             |
| icon                | string \| boolean                                 | —            | Icon name (from iconFamily) or false for no icon                 |
| iconPosition        | 'left' \| 'right'                                 | 'left'       | Icon position relative to text                                   |
| iconFamily          | string                                            | 'AntDesign'  | Icon family                                                     |
| iconSize            | number                                            | 16           | Icon size                                                       |
| iconColor           | string                                            | theme color  | Icon color                                                      |
| loading             | boolean                                           | false        | Shows loading spinner                                           |
| loadingSize         | 'small' \| 'large'                                | 'small'      | Spinner size                                                    |
| loadingColor        | string                                            | theme color  | Spinner color                                                   |
| onlyIcon            | boolean                                           | false        | Show only the icon (no text)                                    |
| opacity             | number                                            | 0.8          | Opacity when pressed                                            |
| round               | boolean                                           | false        | Makes button fully rounded                                      |
| size                | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' <br> <sub>Legacy: 'small' \| 'default' \| 'large'</sub> | 'md' | Button size (width). Prefer new values; legacy values supported for now. |
| fullWidth           | boolean                                           | false        | Makes button 100% width                                         |
| block               | boolean                                           | false        | Makes button 100% width (alias for fullWidth)                   |
| shadow              | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| ...      | —            | Shadow style from theme                                         |
| style               | ViewStyle                                         | —            | Custom button style                                             |
| textStyle           | TextStyle                                         | —            | Custom text style                                               |
| textTransform       | 'none' \| 'uppercase' \| 'lowercase' \| 'capitalize' | 'none'       | Text transformation                                             |
| onPress             | () => void                                        | —            | Press handler                                                   |
| testID              | string                                            | —            | Test ID for testing                                             |
| accessibilityLabel  | string                                            | —            | Accessibility label                                             |
| rippleColor         | string                                            | —            | Android ripple color                                            |

## Examples

**Primary Button:**
```tsx
<Button color="primary">Primary</Button>
```


**Button Sizes:**
```tsx
<Button size="xs">XS</Button>
<Button size="sm">SM</Button>
<Button size="md">MD</Button>
<Button size="lg">LG</Button>
<Button size="xl">XL</Button>
// Legacy (still works, but migrate soon):
<Button size="small">Small (legacy)</Button>
<Button size="default">Default (legacy)</Button>
<Button size="large">Large (legacy)</Button>
```

**With Icon:**
```tsx
<Button icon="star" iconPosition="right">Favorite</Button>
```

**Loading State:**
```tsx
<Button loading>Loading...</Button>
```

**Full Width:**
```tsx
<Button fullWidth>Full Width</Button>
```

**With Shadow:**
```tsx
<Button shadow="lg">Shadow</Button>
```

---


# Migration Guide: v2.x → v3.x

## Major Changes
- **Text transform props**: `uppercase`, `lowercase`, `capitalize` replaced by `textTransform`.
- **Icon position**: `iconRight` replaced by `iconPosition` ('left' | 'right').
- **Size**: Now accepts `'xs' | 'sm' | 'md' | 'lg' | 'xl'` (preferred). Legacy: `'small' | 'default' | 'large'` still work for now.
- **Shadow**: No shadow by default. Use `shadow` prop to enable. Short keys like `shadow="md"` are supported.
- **Removed**: `shadowless` prop (just omit `shadow`), `iconRight` (use `iconPosition`).
- **Added**: `fullWidth`, `block`, `testID`, `accessibilityLabel`, `rippleColor`.

## Before (v2.x)
```tsx
<Button
  uppercase
  icon="check"
  iconRight
  shadowless
  size="large"
>
  Confirm
</Button>
```

## After (v3.x)
```tsx
<Button
  textTransform="uppercase"
  icon="check"
  iconPosition="right"
  size="lg" // or size="large" (legacy)
>
  Confirm
</Button>
```

- To remove shadow, just omit the `shadow` prop.
- For 100% width, use `fullWidth` or `block`.
- For accessibility/testing, use `accessibilityLabel` and `testID`.

---

For more, see the source or ask for advanced usage!
