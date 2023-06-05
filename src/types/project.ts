import Technology from './technology';

interface Project {
  name: string;
  description: string;
  technologies: Technology[];
  route_name?: string;
  external_url?: string;
  date?: string | null;
  repository?: string;
}

interface ProjectGroup {
  title: string;
  projects: Project[];
}

export type { ProjectGroup, Project };
