import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
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

const Header = () => (
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
      <SocialIcons href="https://github.com/DonaldIvan">
        <AiFillGithub size="3em" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/donald-ivan-cribillo-7b3766185/">
        <AiFillLinkedin size="3em" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
