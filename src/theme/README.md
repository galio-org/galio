# Galio Framework - Theme

#### 1. Components
- **GalioTheme**: default theme for components exporting an object with `{ COLORS, SIZES }`
- **withGalio**: HoC for any React-Native component with args: `Component` & optional `styles`
- **GalioProvider**: React Context Provider getting **custom theme** from props and pass it to the React Context

#### 2. Usage
- install the latest **galio-framework** using `npm install galio-framework` or `yarn add galio-framework`
- import { **theme, withGalio, GalioProvider** } from 'galio-framework'
- export default **withGalio(YourComponent, componentStyles)**;
- custom theme constants will **overwrite** the default galio theme constants
```js
const customTheme = {
  SIZES: { BASE: 16, } // this will overwrite the Galio SIZES BASE value 16
  COLORS: { PRIMARY: 'red', } // this will overwrite the Galio COLORS PRIMARY color #FE2472
};

<GalioProvider theme={customTheme}>
  <YourComponent />
</GalioProvider>
```

#### 3. Theme COLORS & SIZES
Use the following reference tables to create your own custom theme

#### COLORS reference table
**Color name** | **Default value** | **Description**
:--- | :--- | :--- 
**SOCIAL** | 
FACEBOOK | #3B5998 | ![](https://dummyimage.com/40x12/3B5998/000000.png&text=+) For social Facebook button
TWITTER | #5BC0DE | ![](https://dummyimage.com/40x12/5BC0DE/000000.png&text=+) For social Twitter button
DRIBBBLE | #EA4C89 | ![](https://dummyimage.com/40x12/EA4C89/000000.png&text=+) For social Dribble button
**GALIO** | 
THEME | #FE2472 | ![](https://dummyimage.com/40x12/FE2472/000000.png&text=+) Theme default color
PRIMARY | #FE2472 | ![](https://dummyimage.com/40x12/FE2472/000000.png&text=+) Primary color for Buttons & Text
DARK_PRIMARY | #F4075C | ![](https://dummyimage.com/40x12/F4075C/000000.png&text=+) Dark Primary color
LIGHT_PRIMARY | #FF8AB9 | ![](https://dummyimage.com/40x12/FF8AB9/000000.png&text=+) Light Primary color
BRIGHT_PRIMARY | #FFD1E4 | ![](https://dummyimage.com/40x12/FFD1E4/000000.png&text=+) Bright Primary color
INFO | #0E2ADD | ![](https://dummyimage.com/40x12/0E2ADD/000000.png&text=+) Info color for Buttons & Text
DARK_INFO | #0520D0 | ![](https://dummyimage.com/40x12/0520D0/000000.png&text=+) Dark Info color
LIGHT_INFO | #8794FF | ![](https://dummyimage.com/40x12/8794FF/000000.png&text=+) Light Info color
BRIGHT_INFO | #D1D6FF | ![](https://dummyimage.com/40x12/D1D6FF/000000.png&text=+) Bright Info color
DANGER | #FF3F31 | ![](https://dummyimage.com/40x12/FF3F31/000000.png&text=+) Danger color for Buttons & Text
DARK_DANGER | #F43324 | ![](https://dummyimage.com/40x12/F43324/000000.png&text=+) Dark Danger color
LIGHT_DANGER | #FF7167 | ![](https://dummyimage.com/40x12/FF7167/000000.png&text=+) Light Danger color
BRIGHT_DANGER | #FFCAC6 | ![](https://dummyimage.com/40x12/FFCAC6/000000.png&text=+) Bright Danger color
WARNING | #FF9C09 | ![](https://dummyimage.com/40x12/FF9C09/000000.png&text=+) Warning color for Buttons & Text
DARK_WARNING | #EE8E00 | ![](https://dummyimage.com/40x12/EE8E00/000000.png&text=+) Dark Warning color
LIGHT_WARNING | #FFCC76 | ![](https://dummyimage.com/40x12/FFCC76/000000.png&text=+) Light Warning color
BRIGHT_WARNING | #FFEBCB | ![](https://dummyimage.com/40x12/FFEBCB/000000.png&text=+) Bright Warning color
SUCCESS | #18CE0F | ![](https://dummyimage.com/40x12/18CE0F/000000.png&text=+) Success color for Buttons & Text
DARK_SUCCESS | #24AD12 | ![](https://dummyimage.com/40x12/24AD12/000000.png&text=+) Dark Success color
LIGHT_SUCCESS | #88F38E | ![](https://dummyimage.com/40x12/88F38E/000000.png&text=+) Light Success color
BRIGHT_SUCCESS | #D2FBD3 | ![](https://dummyimage.com/40x12/D2FBD3/000000.png&text=+) Bright Success color
**STANDARD** | 
WHITE | #FFFFFF | ![](https://dummyimage.com/40x12/FFFFFF/000000.png&text=+) White color
BLACK | #161D28 | ![](https://dummyimage.com/40x12/161D28/000000.png&text=+) Black color
DARK_BLACK | #000B19 | ![](https://dummyimage.com/40x12/000B19/000000.png&text=+) Dark Black color
LIGHT_BLACK | #2A2F36 | ![](https://dummyimage.com/40x12/2A2F36/000000.png&text=+) Light Black color
BRIGHT_BLACK | #3D4144 | ![](https://dummyimage.com/40x12/3D4144/000000.png&text=+) Bright Black color
SECONDARY | #9FA5AA | ![](https://dummyimage.com/40x12/9FA5AA/000000.png&text=+) Grey color
DARK_SECONDARY | #62676B | ![](https://dummyimage.com/40x12/62676B/000000.png&text=+) Dark Black color
LIGHT_SECONDARY | #D6DADD | ![](https://dummyimage.com/40x12/D6DADD/000000.png&text=+) Light Black color
BRIGHT_SECONDARY | #EEF1F3 | ![](https://dummyimage.com/40x12/EEF1F3/000000.png&text=+) Bright Black color
GREY | #E9EBEF | ![](https://dummyimage.com/40x12/E9EBEF/000000.png&text=+) Text muted color
DARK_GREY | #E0E4EA | ![](https://dummyimage.com/40x12/E0E4EA/000000.png&text=+) Dark Black color
LIGHT_GREY | #F0F1F4 | ![](https://dummyimage.com/40x12/F0F1F4/000000.png&text=+) Light Black color
BRIGHT_GREY | #F7F8F9 | ![](https://dummyimage.com/40x12/F7F8F9/000000.png&text=+) Bright Black color
TRANSPARENT | transparent | Transparent value for Block, Button and other components
NEUTRAL | rgba(255,255,255, 0.65) | Text neutral color white with 65% transparency
**SHADOWS** | 
PRIMARY | 0 13px 11px -8 rgba(254, 36, 114, .30) | ![](https://dummyimage.com/40x12/fe2472/000000.png&text=+) Primary shadow
INFO | 0 13px 11px -8 rgba(14, 42, 221, .30) | ![](https://dummyimage.com/40x12/0E2ADD/000000.png&text=+) Info shadow
SUCCESS | 0 13px 11px -8 rgba(24, 206, 15, .30) | ![](https://dummyimage.com/40x12/18CE0F/000000.png&text=+) Success shadow
WARNING | 0 13px 11px -8 rgba(255, 156, 9, .30) | ![](https://dummyimage.com/40x12/FF9C09/000000.png&text=+) Warning shadow
DANGER | 0 13px 11px -8 rgba(255, 63, 49, .30) | ![](https://dummyimage.com/40x12/FF3F31/000000.png&text=+) Danger shadow
BLACK | 0 13px 11px -8 rgba(0, 0, 0, .30) | ![](https://dummyimage.com/40x12/161D28/000000.png&text=+) Black shadow
WHITE | 0 10px 20px -8 rgba(210, 210, 210, .100) | ![](https://dummyimage.com/40x12/FFFFFF/000000.png&text=+) White shadow
GREY | 0 13px 11px -8 rgba(152, 152, 152, .30) | ![](https://dummyimage.com/40x12/9FA5AA/000000.png&text=+) Grey shadow
LIGHT GREY | 0 13px 11px -8 rgba(149, 149, 149, .30) | ![](https://dummyimage.com/40x12/E9EBEF/000000.png&text=+) Light Grey shadow


#### SIZES reference table
`const { height, width } = Dimensions.get('screen');`
By default the size of **16** is used to calculate all the sizes

**Size name** | **Default value**
:--- | :---:
**THEME** |
BASE | 16 |
PARAGRAPH | 16 |
ICON | 16 |
H1 | 16 * 2,75 |
H2 | 16 * 2,375 |
H3 | 16 * 1,875 |
H4 | 16 * 1,5 |
H5 | 16 * 1,3125 |
H6 | 16 * 1,125 |
BODY | 16 * 0,875 |
SMALL| 16 * 0,75 |
OPACITY | 0.8 |
BORDER_RADIUS | 4 |
BORDER_WIDTH | 1 |
**BUTTON** |
BUTTON_WIDTH | 16 * 9 |
BUTTON_HEIGHT | 16 * 2.75 |
BUTTON_SHADOW_RADIUS | {x: 0 , y: 13, blur: 11, spread: -8 } |
**BLOCK** |
BLOCK_SHADOW_OPACITY | 0.15 |
BLOCK_SHADOW_RADIUS | 8 |
ANDROID_ELEVATION | 1 |
**CARD** |
CARD_BORDER_RADIUS | 16 * 0.4 |
CARD_BORDER_WIDTH | 16 * 0.05 |
CARD_WIDTH | width - (16 * 2) |
CARD_MARGIN_VERTICAL | 16 * 0.875 |
CARD_FOOTER_HORIZONTAL | 16 * 0.75 |
CARD_FOOTER_VERTICAL | 16 * 0.75 |
CARD_AVATAR_WIDTH | 16 * 2.5 |
CARD_AVATAR_HEIGHT | 16 * 2.5 |
CARD_AVATAR_RADIUS | 16 * 1.25 |
CARD_IMAGE_HEIGHT | 16 * 12.5 |
CARD_ROUND | 16 * 0.1875 |
CARD_ROUNDED | 16 * 0.5 |
**INPUT** |
INPUT_BORDER_RADIUS | 16 * 0.25 |
INPUT_BORDER_WIDTH | 16 * 0.0625 |
INPUT_HEIGHT | 16 * 2.75 |
INPUT_PADDING_HORIZONTAL | 16 |
INPUT_TEXT | 14 |
INPUT_LABEL | 14 |
INPUT_LABEL_MARGIN_BOTTOM | 16 * 0.5 |
INPUT_HELP_TEXT | 14 |
INPUT_ROUNDED | 16 * 1.5 |
**NAVBAR** |
NAVBAR_HEIGHT | 16 * 4.125 |
NAVBAR_VERTICAL | 16 |
NAVBAR_TITLE_FLEX | 2 |
NAVBAR_TITLE_HEIGHT | height * 0.07 |
NAVBAR_TITLE_TEXT | 14 |
NAVBAR_LEFT_FLEX | 0.5 |
NAVBAR_LEFT_HEIGHT | height * 0.07 |
NAVBAR_LEFT_MARGIN | 16 |
NAVBAR_RIGHT_FLEX | 0.5 |
NAVBAR_RIGHT_HEIGHT | height * 0.07 |
NAVBAR_RIGHT_MARGIN | 16 |
**CHECKBOX** |
CHECKBOX_WIDTH | 20 |
CHECKBOX_HEIGHT | 20 |
**SLIDER** |
TRACK_SIZE | 4 |
THUMB_SIZE | 25 |