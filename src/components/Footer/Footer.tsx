import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

import { SOCIAL_LINKS } from 'src/constants/header';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +639560320289">(+63) 956 032 0289</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: developer.donaldivan@gmail.com">
            developer.donaldivan@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Making people’s live easier with Javascript</Slogan>
        </CompanyContainer>
        <SocialContainer>
          {SOCIAL_LINKS.map(({ id, link, icon, isText }) => (
            <SocialIcons href={link} key={id} isText={isText} target="_blank">
              {icon}
            </SocialIcons>
          ))}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
