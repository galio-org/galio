# Input

The `Input` component is a customizable, theme-aware text input for React Native, supporting icons, help text, password visibility, and more.

## Usage

```tsx
import Input from 'galio-framework/Input';

// Theme-aware input with icon
<Input
  label="Email"
  placeholder="Enter your email"
  icon="email"
  iconProps={{ family: 'fontisto', color: 'primary', size: 'md' }}
  color="text"
  bgColor="surface"
  placeholderTextColor="placeholder"
/>

// Password input with theme error color
<Input
  label="Password"
  placeholder="Password"
  password
  viewPass
  icon="lock"
  iconProps={{ family: 'fontisto', color: 'error', size: 'lg' }}
  error
/>

// Custom icon node
<Input label="Custom" placeholder="Custom" iconContent={<MyCustomIcon />} />
```


## Props

| Prop              | Type                                      | Default      | Description |
|-------------------|-------------------------------------------|--------------|-------------|
| `label`           | string                                    |              | Label above the input. Uses theme color if a theme key is provided in `labelStyles.color`. |
| `labelStyles`     | TextStyle                                 |              | Style for the label. `color` can be a theme key. |
| `help`            | string                                    |              | Help text (top or bottom). Uses theme color if a theme key is provided in `helpStyles.color`. |
| `helpStyles`      | TextStyle                                 |              | Style for help text. `color` can be a theme key. |
| `topHelp`         | boolean                                   | true         | Show help above input |
| `bottomHelp`      | boolean                                   | false        | Show help below input |
| `icon`            | string \| boolean                         |              | Icon name (or false for none) |
| `iconProps`       | object                                    |              | Icon props: `{ family, color, size, style, ... }`. `color` and `size` can be theme keys or semantic values. |
| `iconContent`     | ReactNode                                 |              | Custom icon node (overrides icon/iconProps) |
| `left`            | boolean                                   | true         | Show icon on left |
| `right`           | boolean                                   | false        | Show icon on right |
| `password`        | boolean                                   |              | Enable password field |
| `viewPass`        | boolean                                   |              | Show/hide password toggle |
| `rounded`         | boolean                                   |              | Rounded corners |
| `borderless`      | boolean                                   |              | No border |
| `color`           | string                                    | 'primary'    | Text color (theme key or color string) |
| `bgColor`         | string                                    |              | Background color (theme key or color string) |
| `placeholderTextColor` | string                                |              | Placeholder color (theme key or color string) |
| `error`           | boolean                                   |              | Error state (red border/icon) |
| `style`           | ViewStyle                                 |              | Container style |
| `textInputStyle`  | TextStyle                                 |              | TextInput style |
| ...TextInput      | any                                       |              | All TextInput props supported |

## Icon Props
- Use `iconProps` for icon customization (family, color, size, style, etc.).
- `color` and `size` accept theme keys or semantic values ('xs', 'sm', 'md', 'lg', 'xl') or numbers.
- If `iconContent` is provided, it overrides the icon rendering.

## Theming
- All color-related props (`color`, `bgColor`, `placeholderTextColor`, `iconProps.color`, `labelStyles.color`, `helpStyles.color`) accept theme palette keys or color strings.
- If a theme key is provided, the corresponding theme color is used.
- Uses `useTheme` and `useColors` for full theme support.

## Example

```tsx
<Input label="Username" placeholder="Username" icon="user" iconProps={{ family: 'fontawesome', color: 'primary', size: 'lg' }} />
<Input label="Email" placeholder="Email" icon="email" iconProps={{ family: 'fontisto', color: 'info', size: 'md' }} color="text" bgColor="surface" placeholderTextColor="placeholder" />
<Input label="Password" placeholder="Password" password viewPass icon="lock" iconProps={{ family: 'fontisto', color: 'error', size: 'lg' }} error />
<Input label="Custom" placeholder="Custom" iconContent={<MyCustomIcon />} />
```


## Legacy Migration Guide

- **Old:**
  ```tsx
  <Input icon="user" family="fontawesome" iconColor="primary" iconSize={24} />
  ```
- **New:**
  ```tsx
  <Input icon="user" iconProps={{ family: 'fontawesome', color: 'primary', size: 24 }} />
  ```
- `iconColor` and `iconSize` are deprecated and will be removed in a future version. Use `iconProps.color` and `iconProps.size` instead.
- You will see a console warning if you use legacy props.

## Notes
- All standard TextInput props are supported.
- Pass any additional props as needed.
- For custom icons, use `iconContent`.
- All color-related props accept theme keys or color strings for full theme consistency.
