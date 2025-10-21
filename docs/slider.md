# Slider Component

The `Slider` component allows users to select a value from a range by sliding a thumb along a track. It is fully themeable and supports customization for colors, sizes, and accessibility.

## Usage

```tsx
import Slider from 'galio-be/src/Slider';

<Slider
  value={0.5}
  minimumValue={0}
  maximumValue={1}
  step={0.01}
  onValueChange={val => setValue(val)}
  activeColor="primary"
  trackStyle={{ height: 6 }}
  thumbStyle={{ width: 30, height: 30 }}
  containerStyle={{ margin: 16 }}
  accessibilityLabel="Volume"
  accessibilityHint="Adjust the volume"
/>
```

## Props

| Prop                | Type                                                      | Default   | Description                                                      |
|---------------------|-----------------------------------------------------------|-----------|------------------------------------------------------------------|
| value               | number                                                    | 0         | Current value of the slider                                      |
| minimumValue        | number                                                    | 0         | Minimum value                                                    |
| maximumValue        | number                                                    | 1         | Maximum value                                                    |
| step                | number                                                    | 0.01      | Step increment                                                   |
| disabled            | boolean                                                   | false     | Disables the slider                                              |
| trackStyle          | ViewStyle                                                 |           | Style for the track                                              |
| activeColor         | keyof theme palette \| string                            | "primary"| Color for the active track                                       |
| thumbStyle          | ViewStyle                                                 |           | Style for the thumb                                              |
| containerStyle      | ViewStyle                                                 |           | Style for the container                                          |
| onValueChange       | (value: number) => void                                   |           | Callback when value changes                                      |
| accessibilityLabel  | string                                                    |           | Accessibility label                                              |
| accessibilityHint   | string                                                    |           | Accessibility hint                                               |

## Theming

- Use theme palette keys (e.g., `primary`, `surface`, `background`) for `activeColor`.
- Track and thumb sizes can be set via theme sizes or inline styles.
- Disabled state uses `surfaceVariant` or fallback color.

## Migration Guide

- Replace any direct color values with theme palette keys for consistency.
- Use semantic props for sizing and colors.
- Remove deprecated props and ensure all styles use theme values where possible.

## Example

```tsx
<Slider
  value={progress}
  minimumValue={0}
  maximumValue={100}
  step={1}
  onValueChange={setProgress}
  activeColor="success"
  trackStyle={{ height: 8 }}
  thumbStyle={{ backgroundColor: '#fff' }}
/>
```

## Accessibility

- Always provide `accessibilityLabel` and `accessibilityHint` for better screen reader support.

---

For more details, see the [theme documentation](./theme.md) and other component docs.
