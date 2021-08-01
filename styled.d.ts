import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      title: string;
      main: string;
    };
    colors: {
      primary: string;
      background1: string;
      lime: string;
      malibu: string;
      background2: string;
      regalBlue: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    xlFontSize: {
      banner: string;
      navLink: string;
      contentTitle: string;
      sectionTitle: string;
      small: string;
      default: string;
    };
    mdFontSize: {
      banner: string;
      navLink: string;
      contentTitle: string;
      sectionTitle: string;
      small: string;
      default: string;
    };
    smFontSize: {
      banner: string;
      navLink: string;
      contentTitle: string;
      sectionTitle: string;
      small: string;
      default: string;
    };
  }
}
