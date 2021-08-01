import Experiences from 'src/components/Experiences/Experiences';
import BgAnimation from 'src/components/BackgrooundAnimation/BackgroundAnimation';
import Hero from 'src/components/Hero/Hero';
import Projects from 'src/components/Projects/Projects';
import Technologies from 'src/components/Technologies/Technologies';
import Timeline from 'src/components/TimeLine/TimeLine';
import { Layout } from 'src/layout/Layout';
import { Section } from 'src/styles/GlobalComponents';

const Home: React.FC = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Technologies />
      <Projects />
      <Experiences />
      <Timeline />
    </Layout>
  );
};

export default Home;
