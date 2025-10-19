# Accordion Component Usage

The Accordion component in Galio allows you to display collapsible sections with customizable headers, icons, and content. It supports semantic theming, shadows, and flexible styling for both light and dark modes.

## Importing Accordion

```tsx
import Accordion from 'galio-framework/src/Accordion';
```

## Basic Usage

```tsx
<Accordion
  dataArray={[
    {
      title: 'Section 1',
      content: 'Content for section 1',
      icon: { name: 'info', family: 'feather', color: colors.info, size: 18 },
    },
    {
      title: 'Section 2',
      content: 'Content for section 2',
      icon: { name: 'layers', family: 'feather', color: colors.success, size: 18 },
    },
  ]}
  titleStyle={{ color: colors.text, fontWeight: 'bold' }}
  headerStyle={{ padding: 16, flexDirection: 'row', alignItems: 'center' }}
  expandedIcon={{ name: 'chevron-up', family: 'feather', color: colors.success, size: 20 }}
  icon={{ name: 'chevron-down', family: 'feather', color: colors.textSecondary, size: 20 }}
  contentStyle={{ fontSize: 16, color: colors.text, minHeight: 48 }}
/>
```

## Props

- `dataArray`: Array of sections. Each item can have:
  - `title`: Header text
  - `content`: Content text
  - `icon`: Icon object for header
- `titleStyle`: Style for all header titles
- `headerStyle`: Style for header container
- `expandedIcon`: Icon when section is open
- `icon`: Icon when section is closed
- `contentStyle`: Style for content area
- `opened`: Index of initially opened section
- `onAccordionOpen`: Callback when a section opens
- `onAccordionClose`: Callback when a section closes
- `style`: Container style
- `listStyle`: Style for the list wrapper

## Example with Callbacks

```tsx
<Accordion
  dataArray={data}
  onAccordionOpen={(item, index) => console.log('Opened:', item, index)}
  onAccordionClose={(item, index) => console.log('Closed:', item, index)}
/>
```

## Theming and Shadows

Accordion supports semantic theming and shadows. Use `theme.shadows.md` or `theme.shadows.lg` for consistent elevation across platforms.

```tsx
style={{
  ...Platform.select({
    ios: theme.shadows?.lg?.ios,
    android: theme.shadows?.lg?.android,
  }),
  ...(Platform.OS === 'web' ? theme.shadows?.lg?.web : {}),
  borderRadius: theme.sizes?.CARD_BORDER_RADIUS || 16,
  backgroundColor: colors.background,
}}
```

## Notes
- You can override styles and icons for each item by passing them in the `dataArray`.
- The `titleStyle` prop applies to all headers unless overridden by an item's own `titleStyle`.
- Works with both light and dark themes.

---
For more details, see the source code in `src/Accordion.tsx` and the UI example in `screens/ui/Components.tsx`.
