import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        name: 'home',
      },

      {
        path: 'ptperfect',
        component: () => import('pages/PTPerfectPage.vue'),
        name: 'ptperfect',
      },

      {
        path: 'poker-game-clock',
        component: () => import('pages/PokerGameClockPage.vue'),
        name: 'poker-game-clock',
      },

      {
        path: 'poker-thick-client',
        component: () => import('pages/PokerClientPage.vue'),
        name: 'poker-thick-client',
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
