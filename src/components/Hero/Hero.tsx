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
        I’m a front-end focus javascript enthusiast that is remotely located in
        Davao City, Philippines. Having a serious hobby in constantly improving
        my practice is my main strength. Additionally, I’m so passionate in
        building web enterprise application that could make people’s live
        easier.
      </SectionText>
      <Button href={`#${PROJECTS.id}`}>View projects</Button>
    </LeftSection>
  </Section>
);

export default Hero;
