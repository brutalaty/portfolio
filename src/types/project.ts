import Technology from './technology';

interface Project {
  name: string;
  description: string;
  route_name?: string;
  external_url?: string;
  date?: string | null;
  technologies: Technology[];
}

interface ProjectGroup {
  title: string;
  projects: Project[];
}

export type { ProjectGroup, Project };
