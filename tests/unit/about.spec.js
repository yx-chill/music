import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('About.vue', () => {
  test('renders inners text', () => {
    const wrapper = shallowMount(About, {
      shallow: true,
    });
    expect(wrapper.text()).toContain('about');
  });
});
