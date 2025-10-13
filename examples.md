# Galio Framework - Component Examples

**Version:** 0.9.4  
**License:** MIT  
**Last Updated:** October 13, 2025

This document provides usage examples for all Galio Framework components.

---

## Table of Contents
1. [Installation](#installation)
2. [Theme Provider Setup](#theme-provider-setup)
3. [Components](#components)
   - [Accordion](#accordion)
   - [Block](#block)
   - [Button](#button)
   - [Card](#card)
   - [Checkbox](#checkbox)
   - [DeckSwiper](#deckswiper)
   - [Icon](#icon)
   - [Input](#input)
   - [NavBar](#navbar)
   - [Radio](#radio)
   - [Slider](#slider)
   - [Switch](#switch)
   - [Text](#text)
   - [Toast](#toast)

---

## Installation

```bash
npm install galio-framework
# or
yarn add galio-framework
```

---

## Theme Provider Setup

Wrap your app with `GalioProvider` to enable theming:

```tsx
import React from 'react';
import { GalioProvider } from 'galio-framework';
import App from './App';

export default function Root() {
  return (
    <GalioProvider mode="auto">
      <App />
    </GalioProvider>
  );
}
```

### Theme Options

```tsx
// Auto-detect system theme (light/dark)
<GalioProvider mode="auto">
  <App />
</GalioProvider>

// Force light mode
<GalioProvider mode="light">
  <App />
</GalioProvider>

// Force dark mode
<GalioProvider mode="dark">
  <App />
</GalioProvider>

// Custom theme colors
<GalioProvider 
  mode="auto"
  customColors={{
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    info: '#54A0FF',
    success: '#1DD1A1',
    warning: '#FFC312',
    danger: '#EE5A6F'
  }}
>
  <App />
</GalioProvider>
```

---

## Components

### Accordion

Expandable content panels for organizing information.

```tsx
import { Accordion } from 'galio-framework';

function AccordionExample() {
  return (
    <Accordion
      dataArray={[
        { title: 'First Item', content: 'This is the first item content' },
        { title: 'Second Item', content: 'This is the second item content' },
        { title: 'Third Item', content: 'This is the third item content' }
      ]}
      opened={0} // Index of initially opened item
      expandMultiple={false}
      icon="chevron-down"
      style={{ marginVertical: 10 }}
    />
  );
}
```

**Props:**
- `dataArray`: Array of objects with `title` and `content`
- `opened`: Index of initially opened item (default: 0)
- `expandMultiple`: Allow multiple items to be open (default: false)
- `icon`: Icon name for expand/collapse indicator
- `style`: Custom styles

---

### Block

Flexible layout container with built-in flexbox utilities.

```tsx
import { Block, Text } from 'galio-framework';

function BlockExample() {
  return (
    <>
      {/* Centered content */}
      <Block center middle style={{ height: 100 }}>
        <Text>Centered content</Text>
      </Block>

      {/* Row layout */}
      <Block row space="between" style={{ padding: 20 }}>
        <Text>Left</Text>
        <Text>Right</Text>
      </Block>

      {/* Card with shadow */}
      <Block card shadow style={{ padding: 20, margin: 10 }}>
        <Text>Card content with shadow</Text>
      </Block>

      {/* Flex layout */}
      <Block flex row>
        <Block flex={1} style={{ backgroundColor: '#f0f0f0', padding: 10 }}>
          <Text>Flex 1</Text>
        </Block>
        <Block flex={2} style={{ backgroundColor: '#e0e0e0', padding: 10 }}>
          <Text>Flex 2</Text>
        </Block>
      </Block>

      {/* Safe area */}
      <Block safe flex>
        <Text>Content with safe area insets</Text>
      </Block>
    </>
  );
}
```

**Props:**
- `row`: Horizontal layout (default: false)
- `flex`: Enable flex (boolean or number)
- `center`: Center content horizontally
- `middle`: Center content vertically
- `space`: Justify content ('between', 'around', 'evenly')
- `card`: Apply card border radius
- `shadow`: Add shadow
- `safe`: Use SafeAreaView
- `fluid`: Auto width
- `style`: Custom styles

---

### Button

Customizable buttons with icons and loading states.

```tsx
import { Button } from 'galio-framework';

function ButtonExample() {
  return (
    <>
      {/* Basic buttons */}
      <Button color="primary">Primary Button</Button>
      <Button color="info">Info Button</Button>
      <Button color="success">Success Button</Button>
      <Button color="warning">Warning Button</Button>
      <Button color="danger">Danger Button</Button>

      {/* Button with icon */}
      <Button 
        color="primary" 
        icon="heart"
        iconFamily="AntDesign"
        iconSize={18}
      >
        Like
      </Button>

      {/* Icon on right */}
      <Button 
        color="secondary" 
        icon="arrow-right"
        iconFamily="Feather"
        iconRight
      >
        Next
      </Button>

      {/* Icon only */}
      <Button 
        onlyIcon 
        icon="plus"
        iconFamily="AntDesign"
        color="primary"
      />

      {/* Loading state */}
      <Button loading loadingSize="small" color="primary">
        Loading...
      </Button>

      {/* Sizes */}
      <Button size="small" color="primary">Small</Button>
      <Button size="default" color="primary">Default</Button>
      <Button size="large" color="primary">Large</Button>

      {/* Rounded */}
      <Button round color="primary">Rounded Button</Button>

      {/* Disabled */}
      <Button disabled color="primary">Disabled Button</Button>

      {/* Shadowless */}
      <Button shadowless color="primary">No Shadow</Button>

      {/* Custom styles */}
      <Button 
        color="primary"
        style={{ width: 200 }}
        textStyle={{ fontSize: 18, fontWeight: 'bold' }}
        onPress={() => console.log('Pressed!')}
      >
        Custom Button
      </Button>

      {/* Text transformations */}
      <Button uppercase color="primary">uppercase text</Button>
      <Button lowercase color="primary">LOWERCASE TEXT</Button>
      <Button capitalize color="primary">capitalize text</Button>
    </>
  );
}
```

**Props:**
- `color`: Button color ('primary', 'info', 'success', 'warning', 'danger', or custom hex)
- `icon`: Icon name (string)
- `iconFamily`: Icon family ('AntDesign', 'Feather', 'MaterialIcons', etc.)
- `iconSize`: Icon size (default: 16)
- `iconColor`: Icon color
- `iconRight`: Position icon on right
- `onlyIcon`: Show only icon, no text
- `loading`: Show loading spinner
- `loadingSize`: Loading spinner size ('small' or 'large')
- `size`: Button size ('small', 'default', 'large')
- `round`: Rounded corners
- `disabled`: Disable button
- `shadowless`: Remove shadow
- `uppercase`, `lowercase`, `capitalize`: Text transformations
- `style`, `textStyle`: Custom styles
- `onPress`: Press handler

---

### Card

Beautiful card components for content display.

```tsx
import { Card, Button } from 'galio-framework';

function CardExample() {
  return (
    <>
      {/* Basic card with image */}
      <Card
        image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        title="John Doe"
        caption="Software Engineer at Tech Corp"
        avatar="https://randomuser.me/api/portraits/men/32.jpg"
        location="San Francisco, CA"
      />

      {/* Card with custom footer */}
      <Card
        image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        title="Jane Smith"
        caption="Passionate about design and coffee"
        avatar="https://randomuser.me/api/portraits/women/44.jpg"
        location="New York, NY"
        footerStyle={{ padding: 15 }}
      />

      {/* Card with right side component */}
      <Card
        title="Product Name"
        caption="Description of the product goes here"
        rightSideComponent={
          <Button size="small" color="primary">Buy</Button>
        }
      />

      {/* Borderless card */}
      <Card
        borderless
        image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        title="Borderless Card"
        caption="This card has no border"
      />

      {/* Card with onPress */}
      <Card
        image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        title="Clickable Card"
        caption="Tap me!"
        onPress={() => console.log('Card pressed!')}
      />

      {/* Full background image card */}
      <Card
        fullBackgroundImage
        image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        title="Full Background"
        caption="Image as background"
        style={{ height: 300 }}
      />

      {/* Custom content card */}
      <Card
        title="Custom Content"
        caption="Card with children"
      >
        <Block style={{ padding: 15 }}>
          <Text>Add any custom content here</Text>
          <Button color="primary" style={{ marginTop: 10 }}>
            Action
          </Button>
        </Block>
      </Card>
    </>
  );
}
```

**Props:**
- `image`: Card image URL
- `title`: Card title
- `caption`: Card caption/description
- `avatar`: Avatar image URL
- `location`: Location text with pin icon
- `titleColor`, `captionColor`, `locationColor`: Custom colors
- `borderless`: Remove border
- `shadow`: Enable shadow (default: true)
- `fullBackgroundImage`: Use image as full background
- `onPress`: Make card clickable
- `rightSideComponent`: Component to show on right side of title
- `footerStyle`, `imageStyle`: Custom styles
- `children`: Custom content

---

### Checkbox

Styled checkbox components.

```tsx
import { Checkbox, Block, Text } from 'galio-framework';

function CheckboxExample() {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(true);

  return (
    <>
      {/* Basic checkbox */}
      <Checkbox 
        checked={checked}
        onChange={(value) => setChecked(value)}
        label="Accept terms and conditions"
      />

      {/* Custom colors */}
      <Checkbox
        checked={checked2}
        onChange={(value) => setChecked2(value)}
        color="success"
        label="Subscribe to newsletter"
      />

      {/* Different sizes */}
      <Checkbox
        checked={checked}
        onChange={(value) => setChecked(value)}
        checkboxStyle={{ width: 30, height: 30 }}
        label="Large checkbox"
      />

      {/* Disabled */}
      <Checkbox
        checked={true}
        disabled
        label="Disabled checkbox"
      />

      {/* Without label */}
      <Checkbox
        checked={checked}
        onChange={(value) => setChecked(value)}
      />

      {/* Custom styles */}
      <Checkbox
        checked={checked}
        onChange={(value) => setChecked(value)}
        label="Custom styled"
        labelStyle={{ fontSize: 18, color: '#666' }}
        checkboxStyle={{ borderRadius: 8 }}
      />
    </>
  );
}
```

**Props:**
- `checked`: Checked state (boolean)
- `onChange`: Change handler function
- `label`: Label text
- `color`: Checkbox color
- `disabled`: Disable checkbox
- `checkboxStyle`, `labelStyle`: Custom styles

---

### DeckSwiper

Swipeable card deck component (Tinder-style).

```tsx
import { DeckSwiper, Card } from 'galio-framework';

function DeckSwiperExample() {
  const cards = [
    {
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      title: 'Card 1',
      caption: 'First card'
    },
    {
      image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
      title: 'Card 2',
      caption: 'Second card'
    },
    {
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      title: 'Card 3',
      caption: 'Third card'
    }
  ];

  return (
    <DeckSwiper
      dataSource={cards}
      renderItem={(item) => (
        <Card
          image={item.image}
          title={item.title}
          caption={item.caption}
        />
      )}
      onSwipeRight={(cardIndex) => console.log('Swiped right:', cardIndex)}
      onSwipeLeft={(cardIndex) => console.log('Swiped left:', cardIndex)}
    />
  );
}
```

**Props:**
- `dataSource`: Array of card data
- `renderItem`: Function to render each card
- `onSwipeRight`: Right swipe handler
- `onSwipeLeft`: Left swipe handler
- `style`: Custom styles

---

### Icon

Icon components with support for multiple icon families.

```tsx
import { Icon } from 'galio-framework';

function IconExample() {
  return (
    <>
      {/* Basic icons */}
      <Icon name="heart" family="AntDesign" size={24} />
      <Icon name="star" family="FontAwesome" size={24} />
      <Icon name="home" family="Feather" size={24} />

      {/* Custom color */}
      <Icon 
        name="heart" 
        family="AntDesign" 
        size={32} 
        color="#FF6B6B" 
      />

      {/* Predefined sizes */}
      <Icon name="settings" family="Feather" />
      <Icon name="settings" family="Feather" medium />
      <Icon name="settings" family="Feather" large />

      {/* Galio custom icons */}
      <Icon name="camera" family="Galio" size={40} />

      {/* With custom style */}
      <Icon
        name="bell"
        family="Feather"
        size={28}
        color="white"
        style={{ 
          backgroundColor: '#667eea', 
          padding: 10, 
          borderRadius: 20 
        }}
      />
    </>
  );
}
```

**Supported Icon Families:**
- AntDesign
- Entypo
- EvilIcons
- Feather
- FontAwesome
- FontAwesome5
- Fontisto
- Foundation
- Ionicons
- MaterialCommunityIcons
- MaterialIcons
- Octicons
- SimpleLineIcons
- Zocial
- Galio (custom)

**Props:**
- `name`: Icon name (required)
- `family`: Icon family (required)
- `size`: Icon size in pixels
- `color`: Icon color
- `medium`: Medium size preset
- `large`: Large size preset
- `style`: Custom styles

---

### Input

Form input fields with icons and validation.

```tsx
import { Input } from 'galio-framework';

function InputExample() {
  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <>
      {/* Basic input */}
      <Input
        placeholder="Enter your name"
        value={text}
        onChangeText={setText}
      />

      {/* With label */}
      <Input
        label="Email Address"
        placeholder="example@email.com"
        value={email}
        onChangeText={setEmail}
        type="email-address"
      />

      {/* Password with eye icon */}
      <Input
        password
        viewPass
        label="Password"
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
      />

      {/* With icon */}
      <Input
        placeholder="Search..."
        icon="search"
        family="Feather"
        iconSize={20}
      />

      {/* Icon on right */}
      <Input
        placeholder="Username"
        icon="user"
        family="Feather"
        right
      />

      {/* Rounded */}
      <Input
        rounded
        placeholder="Rounded input"
      />

      {/* Borderless */}
      <Input
        borderless
        placeholder="Borderless input"
        bgColor="#f5f5f5"
      />

      {/* With help text */}
      <Input
        label="Username"
        placeholder="Enter username"
        help="Username must be at least 3 characters"
        topHelp
      />

      {/* Error state */}
      <Input
        label="Email"
        placeholder="Enter email"
        error
        help="Please enter a valid email"
        bottomHelp
      />

      {/* Multiline */}
      <Input
        multiline
        numberOfLines={4}
        placeholder="Enter your message..."
        label="Message"
      />

      {/* Custom colors */}
      <Input
        placeholder="Custom input"
        color="#667eea"
        placeholderTextColor="#999"
        bgColor="#f0f0ff"
      />

      {/* Different keyboard types */}
      <Input
        type="numeric"
        placeholder="Phone number"
        label="Phone"
      />

      <Input
        type="email-address"
        placeholder="Email"
        label="Email"
      />
    </>
  );
}
```

**Props:**
- `value`: Input value
- `onChangeText`: Change handler
- `placeholder`: Placeholder text
- `label`: Label above input
- `type`: Keyboard type ('default', 'numeric', 'email-address', etc.)
- `password`: Password field
- `viewPass`: Show password toggle icon
- `icon`: Icon name
- `family`: Icon family
- `iconSize`: Icon size
- `iconColor`: Icon color
- `left`, `right`: Icon position (default: left)
- `rounded`: Rounded corners
- `borderless`: No border
- `bgColor`: Background color
- `color`: Text color
- `error`: Error state (red border)
- `help`: Help text
- `topHelp`, `bottomHelp`: Help text position
- `multiline`: Multiline input
- `numberOfLines`: Number of lines (multiline)
- `editable`: Editable state
- `style`, `textInputStyle`: Custom styles

---

### NavBar

Navigation bar component.

```tsx
import { NavBar, Button } from 'galio-framework';

function NavBarExample() {
  return (
    <>
      {/* Basic navbar */}
      <NavBar
        title="Home"
        left={
          <Button 
            onlyIcon 
            icon="menu" 
            iconFamily="Feather"
            color="transparent"
          />
        }
        right={
          <Button 
            onlyIcon 
            icon="search" 
            iconFamily="Feather"
            color="transparent"
          />
        }
      />

      {/* With back button */}
      <NavBar
        title="Details"
        back
        onLeftPress={() => console.log('Go back')}
        right={
          <Button 
            onlyIcon 
            icon="more-vertical" 
            iconFamily="Feather"
            color="transparent"
          />
        }
      />

      {/* Custom background */}
      <NavBar
        title="Profile"
        transparent={false}
        style={{ backgroundColor: '#667eea' }}
        titleStyle={{ color: 'white' }}
        leftIconColor="white"
        rightIconColor="white"
      />

      {/* Transparent navbar */}
      <NavBar
        title="Overlay"
        transparent
        titleStyle={{ color: 'white' }}
      />
    </>
  );
}
```

**Props:**
- `title`: Navigation title
- `left`: Left component
- `right`: Right component
- `back`: Show back arrow
- `onLeftPress`: Left button press handler
- `transparent`: Transparent background
- `style`, `titleStyle`: Custom styles
- `leftIconColor`, `rightIconColor`: Icon colors

---

### Radio

Radio button groups.

```tsx
import { Radio, Block, Text } from 'galio-framework';

function RadioExample() {
  const [selected, setSelected] = React.useState(1);

  return (
    <>
      {/* Basic radio group */}
      <Radio
        options={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
          { label: 'Option 3', value: 3 }
        ]}
        selectedValue={selected}
        onChange={(value) => setSelected(value)}
      />

      {/* Horizontal layout */}
      <Radio
        horizontal
        options={[
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' }
        ]}
        selectedValue={selected}
        onChange={(value) => setSelected(value)}
      />

      {/* Custom colors */}
      <Radio
        options={[
          { label: 'Red', value: 'red' },
          { label: 'Blue', value: 'blue' },
          { label: 'Green', value: 'green' }
        ]}
        selectedValue={selected}
        onChange={(value) => setSelected(value)}
        color="success"
      />

      {/* Disabled option */}
      <Radio
        options={[
          { label: 'Enabled', value: 1 },
          { label: 'Disabled', value: 2, disabled: true },
          { label: 'Enabled', value: 3 }
        ]}
        selectedValue={selected}
        onChange={(value) => setSelected(value)}
      />
    </>
  );
}
```

**Props:**
- `options`: Array of option objects with `label`, `value`, and optional `disabled`
- `selectedValue`: Currently selected value
- `onChange`: Change handler
- `horizontal`: Horizontal layout
- `color`: Radio button color
- `radioStyle`, `labelStyle`: Custom styles

---

### Slider

Range slider component.

```tsx
import { Slider, Block, Text } from 'galio-framework';

function SliderExample() {
  const [value, setValue] = React.useState(50);
  const [rangeValue, setRangeValue] = React.useState([20, 80]);

  return (
    <>
      {/* Basic slider */}
      <Block style={{ padding: 20 }}>
        <Text>Value: {value}</Text>
        <Slider
          value={value}
          onValueChange={(val) => setValue(val)}
          minimumValue={0}
          maximumValue={100}
        />
      </Block>

      {/* Custom colors */}
      <Slider
        value={value}
        onValueChange={(val) => setValue(val)}
        minimumTrackTintColor="#667eea"
        maximumTrackTintColor="#e0e0e0"
        thumbTintColor="#667eea"
      />

      {/* With step */}
      <Slider
        value={value}
        onValueChange={(val) => setValue(val)}
        step={10}
        minimumValue={0}
        maximumValue={100}
      />

      {/* Range slider */}
      <Slider
        range
        value={rangeValue}
        onValueChange={(val) => setRangeValue(val)}
        minimumValue={0}
        maximumValue={100}
      />

      {/* Disabled */}
      <Slider
        value={50}
        disabled
      />
    </>
  );
}
```

**Props:**
- `value`: Current value (number or [min, max] for range)
- `onValueChange`: Change handler
- `minimumValue`: Minimum value (default: 0)
- `maximumValue`: Maximum value (default: 100)
- `step`: Step increment
- `minimumTrackTintColor`: Color for filled track
- `maximumTrackTintColor`: Color for unfilled track
- `thumbTintColor`: Thumb color
- `disabled`: Disable slider
- `range`: Enable range mode

---

### Switch

Toggle switch component.

```tsx
import { Switch, Block, Text } from 'galio-framework';

function SwitchExample() {
  const [enabled, setEnabled] = React.useState(false);
  const [enabled2, setEnabled2] = React.useState(true);

  return (
    <>
      {/* Basic switch */}
      <Block row space="between" style={{ padding: 20 }}>
        <Text>Enable notifications</Text>
        <Switch
          value={enabled}
          onValueChange={(val) => setEnabled(val)}
        />
      </Block>

      {/* Custom colors */}
      <Block row space="between" style={{ padding: 20 }}>
        <Text>Dark mode</Text>
        <Switch
          value={enabled2}
          onValueChange={(val) => setEnabled2(val)}
          trackColor={{ false: '#e0e0e0', true: '#667eea' }}
          thumbColor={enabled2 ? '#ffffff' : '#f4f3f4'}
        />
      </Block>

      {/* Disabled */}
      <Block row space="between" style={{ padding: 20 }}>
        <Text>Disabled switch</Text>
        <Switch
          value={true}
          disabled
        />
      </Block>

      {/* Different sizes */}
      <Switch
        value={enabled}
        onValueChange={(val) => setEnabled(val)}
        style={{ transform: [{ scale: 0.8 }] }}
      />

      <Switch
        value={enabled}
        onValueChange={(val) => setEnabled(val)}
        style={{ transform: [{ scale: 1.2 }] }}
      />
    </>
  );
}
```

**Props:**
- `value`: Switch state (boolean)
- `onValueChange`: Change handler
- `trackColor`: Track colors for false/true states
- `thumbColor`: Thumb color
- `disabled`: Disable switch
- `style`: Custom styles

---

### Text

Typography components with semantic elements.

```tsx
import { Text } from 'galio-framework';

function TextExample() {
  return (
    <>
      {/* Headings */}
      <Text h1>Heading 1</Text>
      <Text h2>Heading 2</Text>
      <Text h3>Heading 3</Text>
      <Text h4>Heading 4</Text>
      <Text h5>Heading 5</Text>
      <Text h6>Heading 6</Text>

      {/* Paragraph */}
      <Text p>This is a paragraph of text.</Text>

      {/* Body text */}
      <Text body>Body text</Text>

      {/* Small text */}
      <Text small>Small text</Text>

      {/* Custom size */}
      <Text size={20}>Custom size text</Text>

      {/* Colors */}
      <Text color="#667eea">Colored text</Text>
      <Text muted>Muted text</Text>

      {/* Text styles */}
      <Text bold>Bold text</Text>
      <Text italic>Italic text</Text>
      <Text bold italic>Bold italic text</Text>

      {/* Alignment */}
      <Text center>Centered text</Text>

      {/* Text shadow */}
      <Text shadow size={24} style={{ color: 'white' }}>
        Text with shadow
      </Text>

      {/* Combined styles */}
      <Text h3 bold color="#667eea" center>
        Styled Heading
      </Text>

      {/* With custom style */}
      <Text 
        style={{ 
          fontSize: 18, 
          fontWeight: '600',
          letterSpacing: 1,
          textTransform: 'uppercase'
        }}
      >
        Custom styled text
      </Text>

      {/* Number of lines */}
      <Text numberOfLines={2}>
        This is a very long text that will be truncated after two lines.
        It demonstrates the numberOfLines prop which limits the text display.
      </Text>
    </>
  );
}
```

**Props:**
- `h1`, `h2`, `h3`, `h4`, `h5`, `h6`: Heading styles
- `p`: Paragraph style
- `body`: Body text style
- `small`: Small text style
- `size`: Custom font size
- `color`: Text color
- `muted`: Muted color
- `neutral`: Neutral color
- `bold`: Bold font weight
- `italic`: Italic font style
- `center`: Center alignment
- `shadow`: Text shadow
- `numberOfLines`: Limit number of lines
- `style`: Custom styles

---

### Toast

Notification toast messages.

```tsx
import { Toast } from 'galio-framework';

function ToastExample() {
  const showToast = (type) => {
    Toast.show({
      message: `This is a ${type} message`,
      type: type,
      duration: 3000,
      position: 'top'
    });
  };

  return (
    <>
      {/* Success toast */}
      <Button onPress={() => showToast('success')}>
        Show Success Toast
      </Button>

      {/* Error toast */}
      <Button onPress={() => showToast('error')}>
        Show Error Toast
      </Button>

      {/* Warning toast */}
      <Button onPress={() => showToast('warning')}>
        Show Warning Toast
      </Button>

      {/* Info toast */}
      <Button onPress={() => showToast('info')}>
        Show Info Toast
      </Button>

      {/* Custom toast */}
      <Button onPress={() => {
        Toast.show({
          message: 'Custom message',
          type: 'success',
          duration: 5000,
          position: 'bottom',
          style: { backgroundColor: '#667eea' },
          textStyle: { fontSize: 16 }
        });
      }}>
        Show Custom Toast
      </Button>
    </>
  );
}
```

**Toast.show() Options:**
- `message`: Toast message text (required)
- `type`: Toast type ('success', 'error', 'warning', 'info')
- `duration`: Display duration in ms (default: 3000)
- `position`: Position ('top', 'bottom', 'center')
- `style`: Custom container styles
- `textStyle`: Custom text styles

---

## Using Theme Colors in Components

Access current theme colors in your components:

```tsx
import { useThemeColors } from 'galio-framework';
import { View, Text } from 'react-native';

function ThemedComponent() {
  const colors = useThemeColors();

  return (
    <View style={{ backgroundColor: colors.primary, padding: 20 }}>
      <Text style={{ color: colors.white }}>
        This component responds to theme changes
      </Text>
    </View>
  );
}
```

**Available Theme Colors:**
- `primary`, `secondary`, `info`, `success`, `warning`, `danger`
- `white`, `black`, `grey`, `muted`
- `text`, `input`, `block`, `transparent`
- `neutral(opacity)`: Function for neutral colors with opacity

---

## Complete App Example

```tsx
import React from 'react';
import { ScrollView } from 'react-native';
import {
  GalioProvider,
  Block,
  Text,
  Button,
  Card,
  Input,
  Icon,
  NavBar
} from 'galio-framework';

function App() {
  const [search, setSearch] = React.useState('');

  return (
    <Block flex>
      <NavBar
        title="My App"
        left={
          <Button 
            onlyIcon 
            icon="menu" 
            iconFamily="Feather"
            color="transparent"
          />
        }
        right={
          <Button 
            onlyIcon 
            icon="bell" 
            iconFamily="Feather"
            color="transparent"
          />
        }
      />
      
      <ScrollView>
        <Block style={{ padding: 20 }}>
          <Text h3 bold>Welcome Back!</Text>
          <Text muted style={{ marginBottom: 20 }}>
            Here's what's new today
          </Text>

          <Input
            placeholder="Search..."
            icon="search"
            family="Feather"
            value={search}
            onChangeText={setSearch}
            style={{ marginBottom: 20 }}
          />

          <Card
            image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            title="Featured Article"
            caption="Discover the latest trends in mobile development"
            location="5 min read"
          />

          <Block row space="between" style={{ marginTop: 20 }}>
            <Button color="primary" flex={0.48}>
              <Icon name="heart" family="Feather" size={18} color="white" />
              {' '}Like
            </Button>
            <Button color="info" flex={0.48}>
              <Icon name="share" family="Feather" size={18} color="white" />
              {' '}Share
            </Button>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}

export default function Root() {
  return (
    <GalioProvider mode="auto">
      <App />
    </GalioProvider>
  );
}
```

---

## Additional Resources

- **Documentation:** https://galio.io/docs
- **GitHub:** https://github.com/galio-org/galio
- **Example App:** https://github.com/galio-org/galio-starter-kit
- **Website:** https://galio.io

---

**Version:** 0.9.4  
**Last Updated:** October 13, 2025
