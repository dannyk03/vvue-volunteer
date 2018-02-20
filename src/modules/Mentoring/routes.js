import MainLayout from '@/layouts/MainLayout';
import loggedInGuard from '@/shared/utils/loggedInGuard';
import store from '@/shared/store';

import storeModule from './store';

const MentoringPage = () => import(/* webpackChunkName: "mentoring" */'./containers/MentoringPage');
// const AvailableProgramsPage = () => import(/* webpackChunkName: "mentoring" */'./containers/AvailableProgramsPage');
// const AvailableProgramPage = () => import(/* webpackChunkName: "mentoring" */'./containers/AvailableProgramPage');

const Start = () => import('./components/Start');
const TypicalDay = () => import('./components/TypicalDay');
const Availability = () => import('./components/Availability');
const Webinar = () => import('./components/Webinar');


export default {
  path: '/mentoring',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.mentoring) {
      store.registerModule('mentoring', storeModule);
      store.commit('REFRESH_STORE');
    }

    loggedInGuard(store, next);
  },
  children: [
    {
      path: '',
      component: MentoringPage,
      children: [
        {
          path: 'start',
          component: Start,
          name: 'start',
        },
        {
          path: 'typical-day',
          component: TypicalDay,
        },
        {
          path: 'availability',
          component: Availability,
          name: 'availability',
        },
        {
          path: 'webinar',
          component: Webinar,
        },
      ],
    },
    {
      path: '*',
      name: 'mentoring',
      redirect: 'start',
    },
  ],
};
