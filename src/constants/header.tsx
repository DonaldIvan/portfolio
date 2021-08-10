import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const PROJECTS = {
  id: 'projects',
  label: 'Projects',
};
export const TECHNOLOGIES = {
  id: 'technologies',
  label: 'Technologies',
};
export const EXPERIENCE = {
  id: 'experience',
  label: 'Experience',
};
export const ABOUT = {
  id: 'about',
  label: 'About',
};
export const NAV_LINKS = [TECHNOLOGIES, PROJECTS, EXPERIENCE, ABOUT];

export const SOCIAL_LINKS = [
  {
    id: 0,
    link: '/DonldIvanCribillo-CV.png',
    icon: 'CV',
    isText: true,
  },
  {
    id: 1,
    link: 'https://github.com/DonaldIvan',
    icon: <AiFillGithub size="3rem" />,
    isText: false,
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/donald-ivan-cribillo-7b3766185/',
    icon: <AiFillLinkedin size="3rem" />,
    isText: false,
  },
];
