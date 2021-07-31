import {
  DiReact,
  DiNodejsSmall,
  DiVisualstudio,
  DiCode,
  DiSass,
} from 'react-icons/di';

export const TECH_STACK = [
  {
    id: 0,
    title: 'Front-end',
    description: 'Javascript, HTML, React, Typescript, Redux',
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
    description:
      'CSS, SASS, LESS, Material UI, Bootstrap, Styled Component, Tailwin CSS',
    icon: <DiSass size="4rem" />,
  },
  {
    id: 3,
    title: 'Tools',
    description: 'Git, Jest, Jira, Trello, VSCode, Firebase, CircleCI',
    icon: <DiCode size="4rem" />,
  },
];
