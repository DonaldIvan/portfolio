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
    malibu: '#77cfff',
    background2: '#00253a',
    regalBlue: '#00456a',
  },
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
  },
  xlFontSize: {
    banner: '6rem',
    navLink: '2rem',
    contentTitle: '2.5rem',
    sectionTitle: '4rem',
    small: '1.2rem',
    default: '1.6rem',
  },
  mdFontSize: {
    banner: '5.5rem',
    navLink: '1.9rem',
    contentTitle: '2.3rem',
    sectionTitle: '3.6rem',
    small: '1.1rem',
    default: '1.5rem',
  },
  smFontSize: {
    banner: '3rem',
    navLink: '1.6rem',
    contentTitle: '2rem',
    sectionTitle: '2.6rem',
    small: '1.1rem',
    default: '1.3rem',
  },
};

export default theme;
