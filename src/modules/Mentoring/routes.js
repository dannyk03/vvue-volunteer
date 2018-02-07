import MainLayout from '@/layouts/MainLayout';
import loggedInGuard from '@/shared/utils/loggedInGuard';
import store from '@/shared/store';

import storeModule from './store';

const MentoringPage = () => import(/* webpackChunkName: "mentoring" */'./containers/MentoringPage');

export default {
  path: '/home',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.home) {
      store.registerModule('dashboard', storeModule);
      store.commit('REFRESH_STORE');
    }

    loggedInGuard(store, next);
  },
  children: [
    {
      path: '/mentoring',
      component: MentoringPage,
    },
  ],
};
