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
  SIZES: { BASE: 18, } // this will overwrite the Galio SIZES BASE value 16
  COLORS: { PRIMARY: 'red', } // this will overwrite the Galio COLORS PRIMARY color #B23AFC
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
THEME | #B23AFC | ![](https://dummyimage.com/40x12/B23AFC/000000.png&text=+) Theme default color
PRIMARY | #B23AFC | ![](https://dummyimage.com/40x12/B23AFC/000000.png&text=+) Primary color for Buttons
INFO | #1232FF | ![](https://dummyimage.com/40x12/1232FF/000000.png&text=+) Info color for Buttons & Text
ERROR | #FE2472 | ![](https://dummyimage.com/40x12/FE2472/000000.png&text=+) Info color for error messages
WARNING | #FF9C09 | ![](https://dummyimage.com/40x12/FF9C09/000000.png&text=+) Warning color for warning messages
SUCCESS | #45DF31 | ![](https://dummyimage.com/40x12/45DF31/000000.png&text=+) Success color for success messages
**COMPONENTS** | 
INPUT | #808080 | ![](https://dummyimage.com/40x12/808080/000000.png&text=+) Input backgroundColor
PLACEHOLDER | #9FA5AA | ![](https://dummyimage.com/40x12/9FA5AA/000000.png&text=+) Input placeholder text color
NAVBAR | #F9F9F9 | ![](https://dummyimage.com/40x12/F9F9F9/000000.png&text=+) NavBar text color
BLOCK | #808080 | ![](https://dummyimage.com/40x12/808080/000000.png&text=+) Block border color
ICON | #000000 | ![](https://dummyimage.com/40x12/000000/000000.png&text=+) Icon default color
**STANDARD** | 
WHITE | #FFFFFF | ![](https://dummyimage.com/40x12/FFFFFF/000000.png&text=+) White color
BLACK | #000000 | ![](https://dummyimage.com/40x12/000000/000000.png&text=+) Black color
GREY | #898989 | ![](https://dummyimage.com/40x12/898989/000000.png&text=+) Grey color
MUTED | #9FA5AA | ![](https://dummyimage.com/40x12/9FA5AA/000000.png&text=+) Text muted color
TRANSPARENT | transparent | Transparent value for Block, Button and other components
NEUTRAL | rgba(255,255,255, 0.65) | Text neutral color white with 65% transparency

#### SIZES reference table
`const { height, width } = Dimensions.get('screen');`
By default the size of **16** is used to calculate all the sizes

**Size name** | **Default value**
:--- | :---: 
**THEME** | 
BASE | 16 | 
FONT | 16 | 
ICON | 16 | 
OPACITY | 0.8 | 
BORDER_RADIUS | 6 | 
BORDER_WIDTH | 0.8 | 
**BUTTON** | 
BUTTON_WIDTH | 16 * 9 | 
BUTTON_HEIGHT | 16 * 2.75 | 
BUTTON_SHADOW_RADIUS | 10 | 
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
INPUT_BORDER_RADIUS | 16 * 0.5 |
INPUT_BORDER_WIDTH | 16 * 0.05 |
INPUT_HEIGHT | 16 * 2.75 |
INPUT_HORIZONTAL | 16 |
INPUT_TEXT | 16 * 0.875 |
INPUT_LABEL_TEXT | 16 * 0.9 |
INPUT_LABEL_BOTTOM | 16 / 4 |
INPUT_HELP_TEXT | 16 * 0.8 |
INPUT_ROUNDED | 16 * 1.7 |
**NAVBAR** |
NAVBAR_HEIGHT | 16 * 4.125 |
NAVBAR_VERTICAL | 16 |
NAVBAR_TITLE_FLEX | 2 |
NAVBAR_TITLE_HEIGHT | height * 0.07 |
NAVBAR_TITLE_TEXT | 16 * 0.875 |
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