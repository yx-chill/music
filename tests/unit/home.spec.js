import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import SongItem from '@/components/SongItem.vue';

describe('Home.vue', () => {
  test('renders lis of songs', () => {
    const songs = [
      {}, {}, {},
    ];
    const component = shallowMount(Home, {
      data() {
        return {
          songs,
        };
      },
    });
    const items = component.findAllComponents(SongItem);
    expect(items).toHaveLength(songs.length);
  });
});
