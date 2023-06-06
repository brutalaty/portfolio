import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
installQuasarPlugin();

import { mount, VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';

import { getRouter } from 'vue-router-mock';
import ProjectNavigationBar from './ProjectNavigationBar.vue';

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
    wrapper = mount(ProjectNavigationBar, {
      props: {
        project: project,
        ...overrideProps,
      },
    });
  };

  const findRouterLinkButton = () =>
    wrapper.find('[data-test="router-link-button"]');
  const findHomeLinkButton = () =>
    wrapper.find('[data-test="home-link-button"]');

  describe('prop: project', () => {
    it('is required', () => {
      expect(ProjectNavigationBar.props.project.required).toBe(true);
    });
  });

  describe('prop: showHomeButton', () => {
    it('defaults to false', () => {
      expect(wrapper.props().showHomeButton).toBe(false);
    });

    describe('when showHomeButton false', () => {
      beforeEach(() => createComponent({ showHomeButton: false }));

      it('does not show a home button', () => {
        expect(findHomeLinkButton().exists()).toBe(false);
      });

      describe('when the project has a route_name', () => {
        it('renders a router link button', () => {
          expect(findRouterLinkButton().exists()).toBe(true);
        });
      });
    });

    describe('when showHomeButton is true', () => {
      beforeEach(() => createComponent({ showHomeButton: true }));

      it('renders a home button', () => {
        expect(findHomeLinkButton().exists()).toBe(true);
      });

      it('does not render a router link button', () => {
        expect(findRouterLinkButton().exists()).toBe(false);
      });
    });
  });

  describe('routerLinkButton', () => {
    beforeEach(() => createComponent({ showHomeButton: false }));

    describe('when clicked', () => {
      it('pushed the projects route_name to the router', async () => {
        await findRouterLinkButton().trigger('click');
        expect(getRouter().push).toHaveBeenCalledWith({
          name: project.route_name,
        });
      });
    });
  });

  describe('homeLinkButton', () => {
    beforeEach(() => createComponent({ showHomeButton: true }));

    describe('when clicked', () => {
      it('navigates to the root route', async () => {
        await findHomeLinkButton().trigger('click');

        expect(getRouter().push).toHaveBeenCalledWith('/');
      });
    });
  });
});
