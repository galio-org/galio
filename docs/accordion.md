
# Accordion Component Usage (v2)

The `Accordion` component is a flexible, theme-aware UI element for displaying expandable/collapsible content. It now supports semantic shadow levels via a single `shadow` prop for all platforms.

## Basic Usage

```tsx
import { Accordion } from 'galio-framework';

<Accordion
  dataArray={[
    { title: 'Section 1', content: 'Content 1' },
    { title: 'Section 2', content: 'Content 2' },
  ]}
/>
```

## Customizing Shadows

Apply a shadow using the `shadow` prop. Available levels: `xs`, `sm`, `md`, `lg`, `xl`.

```tsx
<Accordion
  dataArray={...}
  shadow="lg"
/>
```
- If you do not provide the `shadow` prop, no shadow is applied.
- If you provide `shadow`, the corresponding theme shadow is applied for the current platform.

## Custom Styles

You can override styles for the container, header, and content:

```tsx
<Accordion
  dataArray={...}
  style={{ borderRadius: 24 }}
  headerStyle={{ backgroundColor: '#eee' }}
  contentStyle={{ color: '#333', fontSize: 18 }}
/>
```

## Theming

The Accordion automatically adapts to your theme (light/dark) and uses semantic colors and shadows from your theme provider. You can override any value via props for full control.

## Props

- `dataArray`: Array of sections, each with `title`, `content`, and optional `icon`.
- `shadow`: Semantic shadow level (`'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'`).
- `style`: Style for the outer container.
- `headerStyle`: Style for each header row.
- `contentStyle`: Style for the content text.
- `titleStyle`: Style for the title text.
- `expandedIcon`, `icon`: Custom icons for expanded/collapsed state.
- `opened`: Index of the initially opened section.
- `onAccordionOpen`, `onAccordionClose`: Callbacks for open/close events.

---
For more advanced usage, see the source code or ask for specific examples.
