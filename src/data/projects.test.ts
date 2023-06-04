import { describe, expect, it } from 'vitest';

import { Project } from 'src/types/project';
import projectGroups from 'src/data/projects';
import routes from 'src/router/routes';

describe('ProjectGroups', () => {
  describe('title', () => {
    it('is never an empty string', () => {
      projectGroups.forEach((projectGroup) => {
        expect(projectGroup.title).toBeTruthy();
      });
    });
  });

  describe('projects', () => {
    it('is never an empty array', () => {
      projectGroups.forEach((projectGroup) => {
        expect(projectGroup.projects.length).toBeGreaterThan(0);
      });
    });
  });
});

describe('Projects', () => {
  const projects: Array<Project> = projectGroups
    .map((projectGroup) => {
      return projectGroup.projects;
    })
    .flat();

  describe('name', () => {
    it('is never an empty string', () => {
      projects.forEach((project) => {
        expect(project.name).toBeTruthy();
      });
    });
  });

  describe('description', () => {
    it('is never an empty string', () => {
      projects.forEach((project) => {
        expect(project.description).toBeTruthy();
      });
    });
  });

  describe('technologies', () => {
    it('is never an empty array', () => {
      projects.forEach((project) => {
        expect(project.technologies.length).toBeGreaterThan(0);
      });
    });
  });

  describe('route_name', () => {
    const allRoutes = routes[0].children?.map((route) => route.name);
    const projectsWithRoutes = [...projects].filter(
      (project) => project.route_name !== undefined
    );
    describe('when set', () => {
      it('exists on the router', () => {
        projectsWithRoutes.forEach((project) => {
          expect(allRoutes).toContain(project.route_name);
        });
      });
    });
  });
});
