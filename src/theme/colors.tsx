// theme/colors.js
export const SOCIAL = {
  facebook: '#3B5998',
  twitter: '#5BC0DE',
  dribbble: '#EA4C89',
};

export const THEME = {
  primary: '#FE2472',
  primaryDark: '#F4075C',
  primaryLight: '#FF8AB9',
  primaryBright: '#FFD1E4',

  info: '#0E2ADD',
  infoDark: '#0520D0',
  infoLight: '#8794FF',
  infoBright: '#D1D6FF',

  danger: '#FF3F31',
  dangerDark: '#F43324',
  dangerLight: '#FF7167',
  dangerBright: '#FFCAC6',

  warning: '#FF9C09',
  warningDark: '#EE8E00',
  warningLight: '#FFCC76',
  warningBright: '#FFEBCB',

  success: '#18CE0F',
  successDark: '#24AD12',
  successLight: '#88F38E',
  successBright: '#D2FBD3',
};

export const COMPONENTS = {
  input: '#808080',
  placeholder: '#9FA5AA',
  navbar: '#F9F9F9',
  block: '#808080',
  icon: '#000000',
};

export const SHADOWS = {
    default: {
        boxShadow: '0px 4px 4.65px rgba(0,0,0,0.1)',
        elevation: 4,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 4.65,
    },
    strong: {
        boxShadow: '0px 8px 6.27px rgba(0,0,0,0.1)',
        elevation: 8,
        shadowColor: '#000',
        shadhowOffset: {width: 0, height: 8},
        shadowOpacity: 0.2,
        shadowRadius: 6.27,
    },
};

export const BASE = {
  white: '#FFFFFF',
  black: '#000000',
  grey: '#898989',
  muted: '#9FA5AA',
  transparent: 'transparent',
  neutral: (opacity = 0.65) => `rgba(255,255,255, ${opacity})`,
};

export const DARK_MODE = {
    ...BASE,
    background: '#161D28',
    text: '#FFFFFF',
    ...COMPONENTS,
    ...THEME,
    ...SOCIAL,
};

export const LIGHT_MODE = {
    ...BASE,
    background: '#FFFFFF',
    text: '#161D28',
    ...COMPONENTS,
    ...THEME,
    ...SOCIAL,
};


export default { LIGHT_MODE, DARK_MODE, SHADOWS};
