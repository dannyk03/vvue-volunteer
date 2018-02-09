import MainLayout from '@/layouts/MainLayout';
import loggedInGuard from '@/shared/utils/loggedInGuard';
import store from '@/shared/store';

import storeModule from './store';

const MentoringPage = () => import(/* webpackChunkName: "mentoring" */'./containers/MentoringPage');
const AvailableProgramsPage = () => import(/* webpackChunkName: "mentoring" */'./containers/AvailableProgramsPage');

export default {
  path: '/mentoring',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.home) {
      store.registerModule('mentoring', storeModule);
      store.commit('REFRESH_STORE');
    }

    loggedInGuard(store, next);
  },
  children: [
    {
      path: 'match',
      component: MentoringPage,
      props: {
        tab: 'match',
      },
    },
    {
      path: 'chat',
      component: MentoringPage,
      props: {
        tab: 'chat',
      },
    },
    {
      path: 'preparation',
      component: MentoringPage,
      props: {
        tab: 'preparation',
      },
    },
    {
      path: 'schedule',
      component: MentoringPage,
      props: {
        tab: 'schedule',
      },
    },
    {
      path: 'programs',
      component: AvailableProgramsPage,
    },
    {
      path: '',
      name: 'mentoring',
      redirect: 'match',
    },
  ],
};
