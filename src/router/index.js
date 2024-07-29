import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: import('@/views/00LayoutView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: import('@/views/pages/00HomeView.vue')
        },
        {
          path: 'count',
          name: 'count',
          component: import('@/views/pages/01CounterView.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: import('@/views/pages/02LoginView.vue')
        }
      ]
    }
  ]
});

export default router;
