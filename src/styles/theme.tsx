import { ThemeProvider } from 'styled-components';

import theme from 'src/themes/default';
import GlobalStyles from './globals';

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
