import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
installQuasarPlugin();

import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';

import ProjectList from './ProjectList.vue';

import { Project } from 'src/types/project';
import projectGroups from 'src/data/projects';
import ProjectListItem from './ProjectListItem.vue';

const projects: Project[] = projectGroups[0].projects;

describe('Project List', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(ProjectList, {
      props: { projects: projects },
    });
  });
  it('renders correct number of items', () => {
    expect(projects.length).toBeGreaterThan(0);
    expect(wrapper.findAllComponents(ProjectListItem)).toHaveLength(
      projects.length
    );
  });
});
