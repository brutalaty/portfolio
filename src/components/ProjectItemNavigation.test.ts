import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
installQuasarPlugin();

import { mount, VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';

import { getRouter } from 'vue-router-mock';
import ProjectItemNavigation from './ProjectItemNavigation.vue';

import { Project } from 'src/types/project';

const project: Project = {
  name: 'name',
  description: 'description',
  technologies: [
    { name: 'Vue 3', backgroundColor: '#33aa00', textColor: '#111111' },
  ],
  route_name: 'game-clock',
};

describe('Project Navigation Bar', () => {
  let wrapper: VueWrapper;

  beforeEach(() => createComponent());

  const createComponent = (overrideProps = {}) => {
    wrapper = mount(ProjectItemNavigation, {
      props: {
        project: project,
        ...overrideProps,
      },
    });
  };

  const findRouterButton = () =>
    wrapper.find('[data-test="router-link-button"]');
  const findRepositoryButton = () =>
    wrapper.find('[data-test="repository-link-button"]');

  describe('prop: project', () => {
    it('is required', () => {
      expect(ProjectItemNavigation.props.project.required).toBe(true);
    });
  });

  describe('routerLinkButton', () => {
    describe('when the project has a route_name', () => {
      it('renders a router link button', () => {
        expect(findRouterButton().exists()).toBe(true);
      });
    });

    describe('when clicked', () => {
      it('pushed the projects route_name to the router', async () => {
        await findRouterButton().trigger('click');
        expect(getRouter().push).toHaveBeenCalledWith({
          name: project.route_name,
        });
      });
    });

    describe('when the project does not have a route_name', () => {
      beforeEach(() => {
        wrapper.setProps({ project: { ...project, route_name: undefined } });
      });

      it('does not render a router link button', () => {
        expect(findRouterButton().exists()).toBe(false);
      });
    });
  });

  describe('Repository Button', () => {
    beforeEach(() => {
      wrapper.setProps({
        project: { ...project, repository: 'https://somelink.com' },
      });
    });

    describe('when the project has a repository', () => {
      it('renders a repository button', () => {
        expect(findRepositoryButton().exists()).toBe(true);
      });
    });

    describe('when the project does not have a repository', () => {
      beforeEach(() => {
        wrapper.setProps({ project: { ...project, repository: undefined } });
      });

      it('does not render a repository button', () => {
        expect(findRepositoryButton().exists()).toBe(false);
      });
    });
  });
});
