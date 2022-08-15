export type Tech = {
  name: string;
  url?: string;
};

export type Project = {
  name: string;
  description?: string;
  techs?: Tech[];
};
