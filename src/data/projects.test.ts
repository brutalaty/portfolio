import { describe, expect, it } from 'vitest';

import { Project } from 'src/types/project';
import projectGroups from 'src/data/projects';

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
    describe('when set', () => {
      it.todo('exists on the router');
    });
  });
});
