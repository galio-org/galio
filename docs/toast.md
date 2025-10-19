# Toast Component

The `Toast` component displays temporary messages to users, styled and positioned according to your theme. It supports custom colors, rounded corners, and fade animations.

## Usage

```jsx
import Toast from 'galio-be/src/Toast';

<Toast isShow={show} color="success" positionIndicator="top">
  Operation successful!
</Toast>
```

## Props

| Prop              | Type      | Description                                              |
|-------------------|-----------|----------------------------------------------------------|
| `children`        | node      | Content to display (string or React element)             |
| `isShow`          | boolean   | Show/hide the toast                                      |
| `positionIndicator`| 'top' \| 'center' \| 'bottom' | Where to show the toast on screen                         |
| `positionOffset`  | number    | Offset from top/bottom                                   |
| `fadeInDuration`  | number    | Fade-in animation duration (ms)                          |
| `fadeOutDuration` | number    | Fade-out animation duration (ms)                         |
| `color`           | string    | Theme color name or hex value                            |
| `round`           | boolean   | Rounded corners                                          |
| `style`           | object    | Custom container style                                   |
| `textStyle`       | object    | Custom text style                                        |

## Theming

- Background color uses your theme's color palette (primary, success, error, etc.).
- Text color uses `onPrimary` or `white` from your theme for contrast.
- Border, shadow, and radius are theme-driven for consistency.

## Example Theme Mapping

```js
// theme.colors
{
  primary: '#6200ee',
  success: '#4caf50',
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  white: '#fff',
  black: '#000',
  onPrimary: '#fff',
  // ...other colors
}

// theme.sizes
{
  BASE: 16,
  FONT: 16,
  // ...other sizes
}
```

## Customization

Override any prop or theme value for full control over your app's toast notifications.
