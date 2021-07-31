import { Section, SectionText, SectionTitle } from 'styles/GlobalComponents';
import { LeftSection, LeftSectionText, Button } from './HeroStyles';

const Hero: React.FC = () => (
  <Section>
    <LeftSection>
      <LeftSectionText>HI, I’M DONALD IVAN CRIBILLO</LeftSectionText>
      <SectionTitle main>
        Web Developer
        <br />
      </SectionTitle>
      <SectionText>
        I’m a Davao, Philippines based web developer focused on the front-end. I
        have been working with Javascript this past 4 years and I’m still loving
        it. Additionally, I’m so passionate in building web enterprise
        application that could make people’s live easier.
      </SectionText>
      <Button>View projects</Button>
    </LeftSection>
  </Section>
);

export default Hero;
