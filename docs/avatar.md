# Avatar Component Usage

The `Avatar` component provides a flexible way to display user profile images, initials, or custom labels with full theme and style support. It adapts to your theme, supports shadows, and is highly customizable for various use cases.

## Basic Usage

```tsx
import Avatar from 'galio-be/src/Avatar';

<Avatar source={{ uri: 'https://example.com/user.jpg' }} />
```

## Label Avatar (Initials or Text)

```tsx
<Avatar label="AB" />
```

## Customizing Size

```tsx
<Avatar source={{ uri: '...' }} size={80} />
```

## Customizing Colors

```tsx
<Avatar label="CD" backgroundColor="#FF6B6B" labelColor="#FFF" />
```

## Shadow Levels

You can set the shadow level for the avatar using the `shadowLevel` prop:

```tsx
<Avatar source={{ uri: '...' }} shadowLevel="lg" />
```

Available levels: `xs`, `sm`, `md`, `lg`, `xl`

## Custom Styles

You can override styles for the container, image, label, and label text:

```tsx
<Avatar
  label="EF"
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
  label="GH"
  accessibilityLabel="User avatar for George Harris"
  accessibilityHint="Shows the user's initials"
/>
```

## All Avatar Variants

- **Image Avatar**: Displays a profile image.
  ```tsx
  <Avatar source={{ uri: '...' }} />
  ```
- **Label Avatar**: Displays initials or custom text.
  ```tsx
  <Avatar label="XY" />
  ```
- **Custom Colors**: Override background and text colors.
  ```tsx
  <Avatar label="XY" backgroundColor="#123456" labelColor="#FFF" />
  ```
- **Custom Size**: Change avatar size.
  ```tsx
  <Avatar label="XY" size={64} />
  ```
- **Custom Shadow**: Set shadow level.
  ```tsx
  <Avatar label="XY" shadowLevel="xl" />
  ```
- **Custom Styles**: Override any style.
  ```tsx
  <Avatar label="XY" containerStyle={{ borderWidth: 1 }} />
  ```

## Theming

The avatar automatically adapts to your theme (light/dark) and uses semantic colors and shadows from your theme provider. You can override any value via props for full control.

---
For more advanced usage, see the source code or ask for specific examples.
