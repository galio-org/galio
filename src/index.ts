/* eslint-disable import/no-cycle */

// Core Components
export { default as Accordion } from './Accordion';
export { default as Avatar } from './Avatar';
export { default as Block } from './Block';
export { default as Card } from './Card';
export { default as Checkbox } from './Checkbox';
export { default as DeckSwiper } from './DeckSwiper';
export { default as NavBar } from './NavBar';
export { default as Radio } from './Radio';
export { default as Slider } from './Slider';
export { default as Switch } from './Switch';
export { default as Toast } from './Toast';

// Atomic Components
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Link } from './Link';
export { default as Icon } from './Icon';
export { default as Text } from './Text';

// Theme and Utilities
export { 
    default as theme, 
    GalioProvider, 
    // Modern hooks (recommended)
    useTheme,
    useColors,
    // Legacy hooks (deprecated)
    useGalioTheme, 
    useThemeColors,
    useGalioStyles,
    withGalio 
} from './theme';
export { default as galioConfig } from './config/galio.json';

// Fonts
const GalioFont = require('./fonts/galio.ttf');
export { GalioFont }; 