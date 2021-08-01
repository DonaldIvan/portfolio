import { Section, SectionTitle } from 'src/styles/GlobalComponents';
import {
  List,
  ListTextContainer,
  ListIconContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

import { TECHNOLOGIES } from 'src/constants/header';
import { TECH_STACK } from 'src/constants/tech-stacks';

const Technologies: React.FC = () => (
  <Section id={TECHNOLOGIES.id} withBg>
    <SectionTitle>{TECHNOLOGIES.label}</SectionTitle>
    <List>
      {TECH_STACK.map(({ id, title, description, icon }) => (
        <ListItem key={id}>
          <ListIconContainer>{icon}</ListIconContainer>

          <ListTextContainer>
            <ListTitle>{title}</ListTitle>
            <ListParagraph>{description}</ListParagraph>
          </ListTextContainer>
        </ListItem>
      ))}
      <ListItem></ListItem>
    </List>
  </Section>
);

export default Technologies;
