export type Site = {
  name: string;
  url: string;
  email: string;
  logo: string;
  num_projects_homepage: number;
};

export type Metadata = {
  title: string;
  description: string;
};

export type Studies = {
  degree: string;
  school: string;
  start: Date;
  end: Date | string;
}[];


export type Skills = {
  name: string;
  icon: string;
  link: string;
}[];

export type Experience = {
  title: string;
  company: string;
  location: string;
  logo : string;
  start: Date;
  end: Date | string;
  description: string;
}[];

export type Socials = {
    name : string;
    url : string;
}[];