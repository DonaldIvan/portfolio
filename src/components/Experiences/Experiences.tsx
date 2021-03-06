import { Section, SectionTitle } from 'src/styles/GlobalComponents';
import { Box, Boxes, BoxCompany, BoxRole, BoxText } from './ExperienceStyles';
import { EXPERIENCES } from 'src/constants/experiences';
import { EXPERIENCE } from 'src/constants/header';

const Experiences: React.FC = () => (
  <Section id={EXPERIENCE.id}>
    <SectionTitle>{EXPERIENCE.label}</SectionTitle>
    <Boxes>
      {EXPERIENCES.map(({ id, company, role, description, date }) => (
        <Box key={id}>
          <BoxCompany>{company}</BoxCompany>
          <BoxRole>{role}</BoxRole>
          <BoxText description>{description}</BoxText>
          <BoxText>{date}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Experiences;
