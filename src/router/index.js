import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Manage from '@/views/Manage.vue';
import Song from '@/views/Song.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'manage',
    // alias: '/manage',
    path: '/manage-music',
    component: Manage,
    beforeEnter: () => {
      console.log('123');
    },
  },
  {
    path: '/manage',
    redirect: { name: 'manage' },
  },
  {
    name: 'song',
    path: '/song/:id',
    component: Song,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

router.beforeEach((to, from, next) => {
  console.log('Global Guard');
  next();
});

export default router;
