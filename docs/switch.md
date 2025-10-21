# Switch Component

The `Switch` component provides a simple, themeable toggle for boolean values. It supports theme palette keys, custom colors, and accessibility props.

## Usage

```tsx
import Switch from 'galio-be/src/Switch';

<Switch
  value={isEnabled}
  onValueChange={setEnabled}
  color="primary"
  trackColor={{ false: 'surfaceVariant', true: 'success' }}
  iosBackgroundColor="surfaceVariant"
  containerStyle={{ margin: 8 }}
  accessibilityLabel="Enable notifications"
  accessibilityHint="Toggle notifications on or off"
/>
```

## Props

| Prop                | Type                                                      | Default         | Description                                                      |
|---------------------|-----------------------------------------------------------|-----------------|------------------------------------------------------------------|
| value               | boolean                                                   | false           | Current value of the switch                                      |
| onValueChange       | (value: boolean) => void                                  |                 | Callback when value changes                                      |
| color               | keyof theme palette \| string                            | "primary"      | Color for the active thumb/track                                 |
| disabled            | boolean                                                   | false           | Disables the switch                                              |
| trackColor          | { false, true: palette key \| string }                   | surfaceVariant/primary | Track colors for off/on states                                   |
| iosBackgroundColor  | palette key \| string                                    | surfaceVariant   | iOS background color                                             |
| containerStyle      | ViewStyle                                                 |                 | Style for the container                                          |
| accessibilityLabel  | string                                                    | "Switch"        | Accessibility label                                              |
| accessibilityHint   | string                                                    | "Toggle switch on or off" | Accessibility hint                                               |

## Theming

- Use theme palette keys (e.g., `primary`, `surfaceVariant`, `success`) for `color`, `trackColor`, and `iosBackgroundColor`.
- Custom colors (hex) are also supported.
- Disabled state uses theme palette for muted appearance.

## Migration Guide

- Replace any direct color values with theme palette keys for consistency.
- Use semantic props for colors and accessibility.
- Remove legacy theme.COLORS usage and use `useColors` for palette.
- Use `iosBackgroundColor` (camelCase) instead of `ios_backgroundColor`.

## Example

```tsx
<Switch
  value={darkMode}
  onValueChange={setDarkMode}
  color="success"
  trackColor={{ false: 'surfaceVariant', true: 'success' }}
  iosBackgroundColor="surfaceVariant"
/>
```

## Accessibility

- Always provide `accessibilityLabel` and `accessibilityHint` for better screen reader support.

---

For more details, see the [theme documentation](./theme.md) and other component docs.
