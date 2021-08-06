import { DiReact, DiNodejsSmall, DiCode, DiSass } from 'react-icons/di';

export const TECH_STACK = [
  {
    id: 0,
    title: 'Front-end',
    description: 'Javascript, React, Typescript, HTML',
    icon: <DiReact size="4rem" />,
  },
  {
    id: 1,
    title: 'Back-end',
    description: 'Node, Express, MongoDB, NextJS, PHP',
    icon: <DiNodejsSmall size="4rem" />,
  },
  {
    id: 2,
    title: 'Style/Library',
    description: 'CSS, SASS, Material UI, Bootstrap, Tailwind CSS',
    icon: <DiSass size="4rem" />,
  },
  {
    id: 3,
    title: 'Tools',
    description: 'Git, Jest, Jira, Trello, Firebase, Heroku, Github Actions',
    icon: <DiCode size="4rem" />,
  },
];
