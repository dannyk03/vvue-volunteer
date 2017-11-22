import Vue from 'vue';
import Router from 'vue-router';

import { routes as Home } from '@/modules/Home';
import { routes as About } from '@/modules/About';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
  ],
});

router.addRoutes([
  Home,
  About,
]);

export default router;
