import { describe, expect, it } from 'vitest';

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

describe("every single project's", () => {
  describe('name', () => {
    it('is never an empty string', () => {
      projectGroups.forEach((projectGroup) => {
        projectGroup.projects.forEach((project) => {
          expect(project.name).toBeTruthy();
        });
      });
    });
  });

  describe('description', () => {
    it('is never an empty string', () => {
      projectGroups.forEach((projectGroup) => {
        projectGroup.projects.forEach((project) => {
          expect(project.description).toBeTruthy();
        });
      });
    });
  });

  describe('technologies', () => {
    it('is never an empty array', () => {
      projectGroups.forEach((projectGroup) => {
        projectGroup.projects.forEach((project) => {
          expect(project.technologies.length).toBeGreaterThan(0);
        });
      });
    });
  });
});
