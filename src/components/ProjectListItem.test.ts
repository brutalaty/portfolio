import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
installQuasarPlugin();

import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';

import ProjectListItem from './ProjectListItem.vue';
import TechnologyList from './TechnologyList.vue';

import { Project } from 'src/types/project';

const project: Project = {
  name: 'name',
  description: 'description',
  technologies: [
    { name: 'Vue 3', backgroundColor: '#33aa00', textColor: '#111111' },
  ],
};

describe('group', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    createComponent();
  });

  const createComponent = (overrideProject = {}) => {
    wrapper = mount(ProjectListItem, {
      props: {
        project: { ...project, ...overrideProject },
      },
    });
  };

  it('renders the projects name', () => {
    expect(project?.name).toBeTruthy();
    expect(wrapper.text()).toContain(project.name);
  });

  it('renders the projects description', () => {
    expect(project?.description).toBeTruthy();
    expect(wrapper.get('.project-description').text()).toContain(
      project.description
    );
  });

  it('renders the technologies', () => {
    expect(wrapper.findComponent(TechnologyList).exists()).toBe(true);
    expect(wrapper.findAll('.technology-item')).toHaveLength(
      project.technologies.length
    );
  });

  describe('external link', () => {
    const findExternalLink = () => wrapper.find('[data-test="external-url"]');

    describe('when the project does not have an external link', () => {
      it('should not render a link', () => {
        expect(findExternalLink().exists()).toBe(false);
      });
    });

    describe('when a project has an external_url', () => {
      const url = 'https://somerandomwebsite.gov';
      beforeEach(() => {
        createComponent({ external_url: url });
      });
      it('renders a link to that url', () => {
        expect(findExternalLink().exists()).toBe(true);
        expect(findExternalLink().attributes('href')).equals(url);
      });
      describe('when clicked', () => {
        it('opens in a new window or tab', () => {
          expect(findExternalLink().attributes('target')).equals('_blank');
        });
      });
    });
  });
});
