import { DefaultTheme } from 'styled-components';
const theme: DefaultTheme = {
  fonts: {
    title: 'Jost, sans-serif',
    main: 'Jost, sans-serif',
  },
  colors: {
    primary: 'rgba(255, 255, 255, 0.80)',
    background1: '#0F1624',
    lime: '#A4FF00',
    malibu: '#77CFFF',
    background2: '#00456A',
  },
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
  },
};

export default theme;
