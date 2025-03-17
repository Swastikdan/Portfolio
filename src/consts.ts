import type { Site, Metadata, Studies, Socials, Skills } from '@types';
export const site: Site = {
  name: 'Swastik Dan',
  url: 'https://swastikdan.in/',
  email: 'thisisswastikdan@gmail.com',
  logo: 'https://utfs.io/f/fce7dbfd-81b5-49b9-93c3-73b673beb23b-ephj4t.svg',
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
  {
    name: 'Java',
    icon: 'java',
    link: 'https://www.java.com/',
  },
  {
    name: 'JavaScript',
    icon: 'javascript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'React',
    icon: 'react',
    link: 'https://reactjs.org/',
  },
  {
    name: 'Next JS',
    icon: 'nextjs',
    link: 'https://nextjs.org/',
  },
  {
    name: 'Astro',
    icon: 'astro',
    link: 'https://astro.build/',
  },
  {
    name: 'Express JS',
    icon: 'expressjs',
    link: 'https://expressjs.com/',
  },
  {
    name: 'Node JS',
    icon: 'nodejs',
    link: 'https://nodejs.org/',
  },
  {
    name: 'Tailwind CSS',
    icon: 'tailwindcss',
    link: 'https://tailwindcss.com/',
  },
  {
    name:'Prisma',
    icon:'prisma',
    link:'https://www.prisma.io/',
  },
  {
    name: 'SQL',
    icon: 'sql',
    link: 'https://www.w3schools.com/sql/',
  },
  {
    name: 'MongoDB',
    icon: 'mongodb',
    link: 'https://www.mongodb.com/',
  },
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
