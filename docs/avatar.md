
# Avatar Component Usage (v2)

The `Avatar` component is a flexible, theme-aware UI element for displaying user images, initials, or custom labels. It is fully customizable and now supports semantic shadow levels via a single `shadow` prop.

## Basic Usage

```tsx
import { Avatar } from 'galio-framework';

<Avatar source={{ uri: 'https://example.com/user.jpg' }} />
```

## Label Avatar (Initials or Text)

```tsx
<Avatar label="AB" />
```

## Customizing Size

```tsx
<Avatar label="CD" size={80} />
```

## Customizing Colors

```tsx
<Avatar label="EF" backgroundColor="#FF6B6B" labelColor="#FFF" />
```

## Shadows
    
Apply a shadow using the `shadow` prop. Available levels: `xs`, `sm`, `md`, `lg`, `xl`.

```tsx
<Avatar label="GH" shadow="md" />
```

- If you do not provide the `shadow` prop, no shadow is applied and the avatar uses `overflow: 'hidden'` for a perfect circle.
- If you provide `shadow`, the corresponding theme shadow is applied and `overflow` is disabled so the shadow is visible.

## Custom Styles

You can override styles for the container, image, label, and label text:

```tsx
<Avatar
  label="IJ"
  containerStyle={{ borderWidth: 2, borderColor: '#333' }}
  imageStyle={{ resizeMode: 'cover' }}
  labelStyle={{ backgroundColor: '#222' }}
  labelTextStyle={{ fontSize: 24, fontWeight: 'bold' }}
/>
```

## Accessibility

Set accessibility labels and hints for better screen reader support:

```tsx
<Avatar
  label="KL"
  accessibilityLabel="User avatar for Kevin Lee"
  accessibilityHint="Shows the user's initials"
/>
```

## All Avatar Variants

- **Image Avatar**: `<Avatar source={{ uri: '...' }} />`
- **Label Avatar**: `<Avatar label="XY" />`
- **Custom Colors**: `<Avatar label="XY" backgroundColor="#123456" labelColor="#FFF" />`
- **Custom Size**: `<Avatar label="XY" size={64} />`
- **Custom Shadow**: `<Avatar label="XY" shadow="xl" />`
- **Custom Styles**: `<Avatar label="XY" containerStyle={{ borderWidth: 1 }} />`

## Theming

The avatar automatically adapts to your theme (light/dark) and uses semantic colors and shadows from your theme provider. You can override any value via props for full control.

---
For more advanced usage, see the source code or ask for specific examples.
