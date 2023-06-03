import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
installQuasarPlugin();

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import TechnologyList from './TechnologyList.vue';

import Technology from 'src/types/technology';

const technologies: Array<Technology> = [
  { name: 'Vue 3', backgroundColor: '#009900', textColor: '#000000' },
  { name: 'Java', backgroundColor: '#ffffff', textColor: '#000000' },
  { name: 'TDD', backgroundColor: '#ffffff', textColor: '#000000' },
];

describe('Technology List', () => {
  it('renders', () => {
    const wrapper = mount(TechnologyList, {
      props: {
        technologies: technologies,
      },
    });

    expect(wrapper.text()).toContain('Vue 3');
    expect(wrapper.text()).toContain('Java');
    expect(wrapper.text()).toContain('TDD');
  });
});
