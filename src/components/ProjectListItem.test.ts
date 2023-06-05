import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
installQuasarPlugin();

import { VueWrapper, mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import { getRouter } from 'vue-router-mock';

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

  const createComponent = (overrideProjectFields = {}) => {
    wrapper = mount(ProjectListItem, {
      props: {
        project: { ...project, ...overrideProjectFields },
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

  describe('router link', () => {
    const route_name = 'test-route';
    beforeEach(() => createComponent({ route_name: route_name }));

    const findRouterLinkButton = () =>
      wrapper.find('[data-test="router-link-button"]');

    describe('when the project does not have a route_name', () => {
      beforeEach(() => createComponent());

      it('should not render a route link button', () => {
        expect(findRouterLinkButton().exists()).toBe(false);
      });
    });

    describe('when the project has a route_name', () => {
      it('renders a router link button', () => {
        expect(findRouterLinkButton().exists()).toBe(true);
      });
    });

    describe('when clicked', () => {
      it('push route_name to the router', async () => {
        await findRouterLinkButton().trigger('click');

        expect(getRouter().push).toHaveBeenCalledWith({ name: route_name });
      });
    });
  });

  describe('external link', () => {
    const url = 'https://somerandomwebsite.gov';
    beforeEach(() => {
      createComponent({ external_url: url });
    });

    const findExternalLinkButton = () =>
      wrapper.find('[data-test="external-link-button"]');

    describe('when the project does not have an external link', () => {
      beforeEach(() => createComponent());

      it('should not render a link', () => {
        expect(findExternalLinkButton().exists()).toBe(false);
      });
    });

    describe('when a project has an external_url', () => {
      it('renders a link to that url', () => {
        expect(findExternalLinkButton().exists()).toBe(true);
        expect(findExternalLinkButton().attributes('href')).equals(url);
      });
    });

    describe('when clicked', () => {
      it('opens in a new window or tab', () => {
        expect(findExternalLinkButton().attributes('target')).equals('_blank');
      });
    });
  });

  describe('repository link', () => {
    const repository = 'https://github.com/brutalaty/baby-daily-back';
    beforeEach(() => createComponent({ repository: repository }));

    const findRepositoryLinkButton = () =>
      wrapper.find('[data-test="repository-link-button"]');

    describe('when the project does not have a repository', () => {
      it('does not render a repository', () => {
        createComponent();

        expect(findRepositoryLinkButton().exists()).toBe(false);
      });
    });

    describe('when the project has a repository', () => {
      it('renders a repository button', () => {
        expect(findRepositoryLinkButton().exists()).toBe(true);
      });

      it('the button has an href set to the projects repository', () => {
        expect(findRepositoryLinkButton().attributes('href')).toBe(repository);
      });

      describe('when clicked', () => {
        it('opens in a new tab or window', () => {
          expect(findRepositoryLinkButton().attributes('target')).toBe(
            '_blank'
          );
        });
      });
    });
  });
});
