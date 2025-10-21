# Theme Shadows

This project uses a semantic shadow system for consistent elevation and shadow effects across components. Shadows are defined in the theme as `xs`, `sm`, `md`, `lg`, and `xl`.

## Usage

Access shadows via the theme:

```js
const shadow = theme.shadows.md;
```

Apply to your component styles using platform select:

```js
...Platform.select({
  ios: shadow.ios,
  android: shadow.android,
  web: shadow.web,
})
```

## Shadow Levels

- **xs**: Extra small shadow (subtle)
## Shadow Levels and Platform-Specific Details

Shadows can be customized for different platforms:

- **xs**: Extra small shadow (subtle)
- **sm**: Small shadow
- **md**: Medium shadow (default for most components)
- **lg**: Large shadow
- **xl**: Extra large shadow (strongest)

## Example

```
shadows: {
  xs: { ... },
  sm: { ... },
  md: { ... },
  lg: { ... },
  xl: { ... },
}
```
## Applying Shadows in Components

### iOS & Android
Use `Platform.select` to apply the correct shadow properties:

```js
const baseShadow = Platform.select({
  ios: shadow.ios,
  android: shadow.android,
});

const webShadow = Platform.OS === 'web' ? shadow.web : {};

const styles = StyleSheet.create({
  container: {
    ...baseShadow,
    ...webShadow,
    // other styles
  },
});
```

### Web
For web, only the `boxShadow` property is used:

```js
const webShadow = theme.shadows.lg.web; // { boxShadow: '...' }
```

## Overriding Shadows from Your App

You can override or extend shadow values by passing a custom `shadows` object to your `GalioProvider`:

```jsx
<GalioProvider
  theme={{
    shadows: {
      lg: {
        ios: { shadowColor: '#123', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.25, shadowRadius: 10 },
        android: { elevation: 10, shadowColor: '#123', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.25, shadowRadius: 10 },
        web: { boxShadow: '0px 8px 24px rgba(18,51,51,0.25)' },
      },
    },
  }}
>
  <App />
</GalioProvider>
```

## Best Practices

- Use semantic shadow levels (`md`, `lg`, etc.) for consistency.
- Override only the levels you need for your brand or design system.
- For web, always use the `boxShadow` property.

---
For more details, see the theme source or ask for examples for specific components.

You can customize these values in your theme for your brand or design system.
