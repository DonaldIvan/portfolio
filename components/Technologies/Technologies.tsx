import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

import { TECHNOLOGIES } from 'constants/header';
import { TECH_STACK } from 'constants/tech-stack';

const Technologies = () => (
  <Section id={TECHNOLOGIES.id}>
    <SectionDivider />
    <SectionTitle>{TECHNOLOGIES.label}</SectionTitle>
    <SectionText>Test</SectionText>
    <List>
      {TECH_STACK.map(({ id, title, description, icon }) => (
        <ListItem key={id}>
          {icon}
          <ListContainer>
            <ListTitle>{title}</ListTitle>
            <ListParagraph>{description}</ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
      <ListItem></ListItem>
    </List>
  </Section>
);

export default Technologies;
