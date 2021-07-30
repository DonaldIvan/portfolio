import { Section, SectionText, SectionTitle } from 'styles/GlobalComponents';
import Button from 'styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero: React.FC = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hi, I&#39;m Donald Ivan
        <br />
      </SectionTitle>
      <SectionText>Text</SectionText>
      <Button>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;
