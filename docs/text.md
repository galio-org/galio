# Typography (Text)

The `Text` component in Galio is a flexible and theme-driven text renderer for React Native. It supports multiple variants, colors, and styles, all configurable via props and the theme.

## Usage

```jsx
import Text from 'galio-be/src/Text';

<Text h1 bold color="#333">Heading 1</Text>
<Text p muted>Paragraph text</Text>
<Text small italic center>Small centered italic text</Text>
```

## Props

| Prop      | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| `h1-h6`   | boolean   | Heading levels, sets font size from theme        |
| `p`       | boolean   | Paragraph style, sets font size from theme       |
| `body`    | boolean   | Body text style, sets font size from theme       |
| `small`   | boolean   | Small text style, sets font size from theme      |
| `muted`   | boolean   | Uses theme's tertiary text color                 |
| `neutral` | boolean   | Uses theme's secondary text color                |
| `size`    | number    | Custom font size                                 |
| `color`   | string    | Custom text color                                |
| `bold`    | boolean   | Bold font weight                                 |
| `italic`  | boolean   | Italic font style                                |
| `center`  | boolean   | Centered text                                    |
| `shadow`  | boolean   | Adds text shadow                                 |
| `style`   | object    | Custom style object                              |
| `children`| node      | Text content                                     |

## Theming

Font sizes and colors are pulled from your theme configuration. You can customize these in your theme files for consistent typography across your app.

## Example Theme Mapping

```js
// theme.sizes
{
  H1: 44,
  H2: 38,
  H3: 30,
  H4: 24,
  H5: 21,
  H6: 18,
  BODY: 16,
  SMALL: 12,
  // ...other sizes
}

// theme.colors
{
  text: '#000',
  textSecondary: '#555',
  textTertiary: '#888',
  // ...other colors
}
```

## Customization

Override any prop or theme value for full control over your app's typography.
