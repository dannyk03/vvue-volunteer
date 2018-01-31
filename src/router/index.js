import Vue from 'vue';
import Router from 'vue-router';

import { routes as Public } from '@/modules/Public';
import { routes as Dashboard } from '@/modules/Dashboard';
import { routes as Home } from '@/modules/Home';
import { routes as About } from '@/modules/About';
import { routes as Management } from '@/modules/Management';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
  ],
});

router.addRoutes([
  Public,
  Dashboard,
  Home,
  About,
  Management,
]);

export default router;
