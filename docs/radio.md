# Radio Component

The `Radio` component is a customizable radio button for React Native, supporting theme palette keys, semantic sizes, and label color.

## Usage

```tsx
import Radio from 'galio-be/src/Radio';

<Radio
  label="Option 1"
  color="primary" // theme palette key or color string
  labelColor="text" // theme palette key or color string
  size="md" // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number (px)
  checked={true}
  onChange={val => console.log(val)}
/>
```

## Props

| Prop              | Type                                                      | Description                                      |
|-------------------|-----------------------------------------------------------|--------------------------------------------------|
| color             | keyof theme.colors \| string                             | Radio color (theme palette key or custom string) |
| label             | string                                                    | Label text                                       |
| labelColor        | keyof theme.colors \| string                             | Label color (theme palette key or custom string) |
| labelStyle        | TextStyle \| TextStyle[]                                  | Custom label styles                              |
| size              | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number           | Semantic or pixel size                           |
| checked/value     | boolean                                                   | Controlled checked state                         |
| initialValue      | boolean                                                   | Uncontrolled initial value                       |
| onChange          | (checked: boolean) => void                                | Change handler                                   |
| disabled          | boolean                                                   | Disable radio button                             |
| flexDirection     | 'row' \| 'row-reverse' \| 'column' \| 'column-reverse'   | Layout direction                                 |
| radioOuterStyle   | ViewStyle                                                 | Custom outer radio styles                        |
| radioInnerStyle   | ViewStyle                                                 | Custom inner radio styles                        |
| containerStyle    | ViewStyle                                                 | Custom container styles                          |
| accessibilityLabel| string                                                    | Accessibility label                              |
| accessibilityHint | string                                                    | Accessibility hint                               |

## Theming
- Use theme palette keys for `color` and `labelColor` for consistent styling.
- Semantic sizes: `xs`, `sm`, `md`, `lg`, `xl` map to theme sizes.

## Migration Guide
- Replace legacy color strings with theme palette keys for consistency.
- Use `size` prop for semantic sizing.
- Use `labelColor` for theme-driven label color.

## Example
```tsx
<Radio
  label="Dark Mode"
  color="dark"
  labelColor="primary"
  size="lg"
  checked={isDarkMode}
  onChange={setDarkMode}
/>
```

---
For more details, see the source in `src/Radio.tsx`.
