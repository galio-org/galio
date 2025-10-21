# Link

The `Link` component provides a theme-aware, customizable link for React Native apps, supporting semantic colors, disabled state, and full text styling.

## Usage

```tsx
import Link from 'galio-framework/Link';

<Link onPress={() => alert('Clicked!')}>Default Link</Link>
<Link onPress={goToProfile} color="primary">Primary Link</Link>
<Link onPress={goToDocs} color="info" textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Bold Info Link</Link>
<Link onPress={goToHelp} color="error" disabled>Disabled Error Link</Link>
<Link onPress={goToCustom} textStyle={{ color: 'success', textDecorationLine: 'none', fontStyle: 'italic' }}>Custom Success Link</Link>
```

## Props

| Prop           | Type            | Default   | Description |
|----------------|-----------------|-----------|-------------|
| `children`     | ReactNode       |           | Link text or node |
| `onPress`      | function        | required  | Callback when pressed |
| `color`        | string          |           | Text color (theme key or color string) |
| `textStyle`    | TextStyle       |           | Style for the link text (color, underline, fontSize, etc.) |
| `style`        | ViewStyle       |           | Style for the Pressable container |
| `disabled`     | boolean         | false     | Disable the link |
| `activeOpacity`| number          | 0.7       | Opacity when pressed |

## Theming
- `color` and `textStyle.color` accept theme palette keys (e.g., 'primary', 'info', 'error', 'success') or color strings.
- Uses `useColors` for full theme support.
- Disabled state automatically reduces opacity and disables interaction.

## Example

```tsx
<Link onPress={goToDocs} color="info" textStyle={{ fontWeight: 'bold', fontSize: 18 }}>Bold Info Link</Link>
<Link onPress={goToHelp} color="error" disabled>Disabled Error Link</Link>
<Link onPress={goToCustom} textStyle={{ color: 'success', textDecorationLine: 'none', fontStyle: 'italic' }}>Custom Success Link</Link>
```

## Notes
- For custom underline, font size, weight, or style, use the `textStyle` prop.
- Both `color` and `textStyle.color` accept theme keys for consistent theming.
- The link is accessible and uses `accessibilityRole="link"`.
- Disabled links are not clickable and have reduced opacity.
