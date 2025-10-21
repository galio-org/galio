# Block Component

The `Block` component is a flexible layout and container primitive for building responsive UIs in Galio. It supports semantic shadow levels, card styles, safe area, and a wide range of layout props.

## Usage

```tsx
import { Block } from 'galio-framework';

<Block shadow="md" card style={{ margin: 16 }}>
  <Text>Content</Text>
</Block>
```

## Props

| Prop           | Type                              | Default   | Description                                                        |
|----------------|-----------------------------------|-----------|--------------------------------------------------------------------|
| row            | boolean                           | false     | Layout direction: horizontal (row)                                 |
| flex           | boolean \| number                 | false     | Flex value or enable flex: 1                                       |
| center         | boolean                           | false     | Center content horizontally                                        |
| middle         | boolean                           | false     | Center content vertically and horizontally                         |
| top            | boolean                           | false     | Align content to top                                               |
| bottom         | boolean                           | false     | Align content to bottom                                            |
| right          | boolean                           | false     | Align content to right                                             |
| left           | boolean                           | false     | Align content to left                                              |
| space          | 'between' \| 'around' ...         | null      | Space distribution (justifyContent)                                |
| fluid          | boolean                           | false     | Width: auto                                                        |
| height         | number                            | null      | Height override                                                    |
| width          | number                            | null      | Width override                                                     |
| shadow         | 'none' \| 'xs' ... 'xl'           | 'none'   | Semantic shadow level (cross-platform)                             |
| shadowColor    | string                            | null      | Custom shadow color (overrides default)                            |
| card           | boolean                           | false     | Card style (border, radius)                                        |
| safe           | boolean                           | false     | Use SafeAreaView                                                   |
| background     | string                            | null      | Custom background color                                            |
| style          | ViewStyle \| ViewStyle[]           | undefined | Custom style(s)                                                    |
| children       | React.ReactNode                   |           | Content                                                            |

## Shadows

- Use the `shadow` prop with values: `xs`, `sm`, `md`, `lg`, `xl` for semantic, theme-driven shadows.
- Set `shadowColor` to override the default shadow color.
- Example:

```tsx
<Block shadow="lg" shadowColor="#888">
  <Text>Elevated Block</Text>
</Block>
```

## Card Style

- Add `card` to enable border, radius, and card styling.

## Safe Area

- Add `safe` to wrap the block in a `SafeAreaView` for iOS/Android.

## Customization

- All layout and style props can be combined for powerful, responsive layouts.

---

For more advanced usage, see the Galio documentation or source code.
