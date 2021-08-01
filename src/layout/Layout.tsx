import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import { Container } from './LayoutStyles';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
