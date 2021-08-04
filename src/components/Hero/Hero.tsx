import {
  Section,
  SectionText,
  SectionTitle,
} from 'src/styles/GlobalComponents';
import { LeftSection, LeftSectionText, Button } from './HeroStyles';
import { PROJECTS } from 'src/constants/header';

const Hero: React.FC = () => (
  <Section>
    <LeftSection>
      <LeftSectionText>HI, I’M DONALD IVAN CRIBILLO</LeftSectionText>
      <SectionTitle main>
        Web Developer
        <br />
      </SectionTitle>
      <SectionText>
        I’m a Davao, Philippines based web developer focus on the front-end.
        Javascript have been rocking my world this past years and I’m really
        loving it. Additionally, I’m so passionate in building web enterprise
        application that could make people’s live easier.
      </SectionText>
      <Button href={`#${PROJECTS.id}`}>View projects</Button>
    </LeftSection>
  </Section>
);

export default Hero;
