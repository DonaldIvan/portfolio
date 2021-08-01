import Link from 'next/link';
import { DiCssdeck } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  PortfolioLink,
  Span,
} from './HeaderStyles';

import { NAV_LINKS, SOCIAL_LINKS } from 'constants/header';

const Header: React.FC = () => (
  <Container>
    <Div1>
      <Link href="/" passHref>
        <PortfolioLink>
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </PortfolioLink>
      </Link>
    </Div1>
    <Div2>
      {NAV_LINKS.map((link) => (
        <li key={link.id}>
          <Link href={`#${link.id}`} passHref>
            <NavLink>{link.label}</NavLink>
          </Link>
        </li>
      ))}
    </Div2>
    <Div3>
      {SOCIAL_LINKS.map(({ id, link, icon, isText }) => (
        <SocialIcons href={link} key={id} isText={isText} target="_blank">
          {icon}
        </SocialIcons>
      ))}
    </Div3>
  </Container>
);

export default Header;
