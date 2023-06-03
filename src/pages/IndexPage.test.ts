import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
installQuasarPlugin();

import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';

import IndexPage from './IndexPage.vue';
import ProjectList from 'src/components/ProjectList.vue';
import ProjectListItem from 'src/components/ProjectListItem.vue';

import projectGroups from 'src/data/projects';
import projects from 'src/data/projects';

describe('Index Page', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(IndexPage);
  });

  it('contains my name', () => {
    expect(wrapper.text()).toContain('Joshua Ditton');
  });

  describe('Projects Section', () => {
    describe('Project Group Headings', () => {
      const findProjectsHeading = () =>
        wrapper.findAll('[data-test="project-group-heading"]');

      it('they render', () => {
        expect(projectGroups.length).toBeGreaterThan(0);
        expect(findProjectsHeading().length).toBe(projectGroups.length);
      });
    });

    describe('Projects List', () => {
      const findProjectList = () => wrapper.findComponent(ProjectList);
      const findProjectListItems = () =>
        wrapper.findAllComponents(ProjectListItem);

      it('renders', () => {
        expect(findProjectList().exists()).toBe(true);
      });

      it('displays correct number of projects', () => {
        const total = projectGroups
          .map((projectGroup) => projectGroup.projects.length)
          .reduce((previous, current) => previous + current);

        expect(total).toBeGreaterThan(0);
        expect(findProjectListItems()).toHaveLength(total);
      });
    });
  });
});
