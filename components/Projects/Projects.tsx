import {
  BlogCard,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from 'styles/GlobalComponents';
import { PROJECTS } from 'constants/header';
import { PROJECTS as PROJECTLIST } from 'constants/projects';

const Projects = () => (
  <Section id={PROJECTS.id}>
    <SectionDivider />
    <SectionTitle>{PROJECTS.label}</SectionTitle>
    <GridContainer>
      {PROJECTLIST.map(({ id, image, title, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree isTitle>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <TagList>{tags.join(', ')}</TagList>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
