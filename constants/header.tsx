import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const PROJECTS = {
  id: 'projects',
  label: 'Projects',
};
export const TECHNOLOGIES = {
  id: 'technologies',
  label: 'Technologies',
};
export const ABOUT = {
  id: 'about',
  label: 'About',
};
export const NAV_LINKS = [PROJECTS, TECHNOLOGIES, ABOUT];

export const SOCIAL_LINKS = [
  {
    id: 0,
    link: 'https://github.com/DonaldIvan',
    icon: <AiFillGithub size="3rem" />,
  },
  {
    id: 1,
    link: 'https://www.linkedin.com/in/donald-ivan-cribillo-7b3766185/',
    icon: <AiFillLinkedin size="3rem" />,
  },
];
