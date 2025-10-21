# DeckSwiper

The `DeckSwiper` component allows users to swipe through a stack of cards, similar to Tinder-style swiping. It is fully customizable and theme-aware.

## Usage

```tsx
import { DeckSwiper } from 'galio-framework';

<DeckSwiper
  components={[<Card1 />, <Card2 />, <Card3 />]}
  cardWidth={300}
  cardShadow="md"
  cardBackgroundColor="#fff"
  borderRadius={16}
  onSwipeLeft={() => {}}
  onSwipeRight={() => {}}
/>
```

## Props

| Prop                   | Type                | Default                | Description |
|------------------------|---------------------|------------------------|-------------|
| `components`           | `React.ReactNode[]` | **required**           | Array of card components to swipe through |
| `cardWidth`            | `number`            | `70% of screen width`  | Width of each card |
| `cardShadow`           | `string \| object`  | `'md'`                 | Shadow style or theme key for focused card |
| `nextCardShadow`       | `string \| object`  | `'sm'`                 | Shadow style or theme key for next card |
| `cardBackgroundColor`  | `string`            | theme color            | Background color for focused card |
| `nextCardBackgroundColor` | `string`         | theme color            | Background color for next card |
| `borderRadius`         | `number`            | theme value            | Card border radius |
| `onSwipeLeft`          | `() => void`        |                        | Callback for left swipe |
| `onSwipeRight`         | `() => void`        |                        | Callback for right swipe |
| `showNextCard`         | `boolean`           | `true`                 | Show next card preview |
| `style`                | `ViewStyle`         |                        | Container style |
| `focusedElementStyle`  | `ViewStyle`         |                        | Style for focused card |
| `nextElementStyle`     | `ViewStyle`         |                        | Style for next card |

## Theming

- Uses `useTheme` and `useColors` for full theme support.
- Shadows, border radius, and background colors can be customized or inherited from the theme.

## Example

```tsx
<DeckSwiper
  components={[<Card title="One" />, <Card title="Two" />]}
  cardShadow="lg"
  cardBackgroundColor={colors.surface}
  borderRadius={24}
/>
```
