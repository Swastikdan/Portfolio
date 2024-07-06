import type { Site, Metadata, Studies, Socials, Skills } from '@types';
export const site: Site = {
  name: 'Swastik Dan',
  url: 'https://swastikdan.in/',
  email: 'thisisswastikdan@gmail.com',
  num_projects_homepage: 2,
};

export const home: Metadata = {
  title: 'Swastik Dan | Personal Portfolio',
  description: 'A passionate developer who loves to code and build things.',
};

export const projects: Metadata = {
  title: 'Projects | Swastik Dan',
  description: 'A collection of projects that I have worked on.',
};

export const blog: Metadata = {
  title: 'Blog | Swastik Dan',
  description: 'A collection of blogs that I have written.',
};

export const notFound: Metadata = {
  title: '404 | Page Not Found',
  description: 'Page not found.',
};
export const errorPage: Metadata = {
  title: '500 | Internal Server Error',
  description: 'Internal Server Error.',
};

// Dates are in MM/DD/YYYY format
export const studies: Studies = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'Bengal Institute of Technology, Kolkata',
    start: new Date('06/01/2020'),
    end: new Date('07/01/2024'),
  },
];

export const skills: Skills = [
  'Java',
  'JavaScript',
  'React',
  'Next JS',
  'Astro JS',
  'Express JS',
  'Node JS',
  'Tailwind CSS',
  'SQL',
  'MongoDB',
];

export const socials: Socials = [
  {
    name: 'GitHub',
    url: 'https:github.com/Swastikdan',
  },
  {
    name: 'LinkedIn',
    url: 'https:linkedin.com/in/swastikdan',
  },
];
