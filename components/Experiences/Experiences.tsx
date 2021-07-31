import { Section, SectionTitle } from 'styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './ExperienceStyles';
import { EXPERIENCES } from 'constants/experiences';
import { EXPERIENCE } from 'constants/header';

const Experiences = () => (
  <Section id={EXPERIENCE.id}>
    <SectionTitle>{EXPERIENCE.label}</SectionTitle>
    <Boxes>
      {EXPERIENCES.map(({ number, text }, index) => (
        <Box key={index}>
          <BoxNum>{number}</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Experiences;
