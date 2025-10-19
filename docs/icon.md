# Icon

The `Icon` component provides a fully customizable, theme-aware icon for React Native apps, supporting multiple icon families and Galio's custom set.

## Usage

```tsx
import Icon from 'galio-framework/Icon';

<Icon name="home" family="fontawesome" />
<Icon name="star" family="Galio" color="primary" size="lg" />
<Icon name="star" family="Galio" color="#f00" size={32} />
```

## Props

| Prop         | Type     | Default         | Description |
|--------------|----------|----------------|-------------|
| `name`       | string   | **required**   | Icon name (depends on family) |
| `family`     | string   | **required**   | Icon family (e.g., 'Galio', 'fontawesome', 'fontisto', etc.) |
| `size`    | number \| 'xs'\|'sm'\|'md'\|'lg'\|'xl' | 'sm' (theme default) | Icon size: semantic string or px number |
| `color`   | string   | theme default  | Icon color (theme key or color string) |
| `style`      | any      |                | Style object for the icon |
| ...rest      | any      |                | Any other props are passed to the icon instance |

## Theming
- Uses `useTheme` and `useColors` for full theme support.
- You can set `color` to a theme palette key (e.g., 'primary', 'success', 'error') or a color string (e.g., '#f00').
- You can set `size` to a semantic value ('xs', 'sm', 'md', 'lg', 'xl') or a number in px.
- If `color` matches a theme key, the theme color is used. Otherwise, the value is used as a color string.

### Size Mapping
| Value | Theme Size         |
|-------|--------------------|
| xs    | theme.sizes.SMALL  |
| sm    | theme.sizes.ICON   |
| md    | theme.sizes.ICON_MEDIUM |
| lg    | theme.sizes.ICON_LARGE  |
| xl    | theme.sizes.ICON_LARGE * 1.5 |

## Example

```tsx
<Icon name="check" family="fontawesome" color="success" />
<Icon name="close" family="Galio" size={32} color="#f00" />
<Icon name="star" family="fontisto" size="md" color="warning" />
<Icon name="user" family="fontawesome" color="primary" size="xl" style={{ margin: 8 }} />
```

## Supported Families
- 'Galio' (custom set)
- 'fontawesome', 'fontisto', and any family supported by `getIconType`

## Notes
- If `color` matches a theme key, the theme color is used. Otherwise, the value is used as a color string.
- If `size` is a string, it uses the mapped theme size. If a number, it is used directly.
- Pass any additional props (e.g., `onPress`, `testID`) as needed.
