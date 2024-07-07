export type Site = {
  name: string;
  url: string;
  email: string;
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

export type Socials = {
    name : string;
    url : string;
}[];