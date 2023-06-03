import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
installQuasarPlugin();

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Technology from 'src/types/technology';
import TechnologyListItem from './TechnologyListItem.vue';

const technology: Technology = {
  name: 'Vue 3',
  backgroundColor: '#333333',
  textColor: '#00aa00',
};

describe('TechnologyListItem', () => {
  it('renders', () => {
    const wrapper = mount(TechnologyListItem, {
      props: {
        technology: technology,
      },
    });

    expect(wrapper.text()).toContain(technology.name);
  });
});
