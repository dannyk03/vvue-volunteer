import MainLayout from '@/layouts/MainLayout';
import loggedInGuard from '@/shared/utils/loggedInGuard';
import store from '@/shared/store';

import storeModule from './store';

const DefaultEnrollmentPage = () => import(/* webpackChunkName: "mentoring" */'./containers/DefaultEnrollmentPage');
const MentoringPage = () => import(/* webpackChunkName: "mentoring" */'./containers/MentoringPage');
const MentoringRegPage = () => import(/* webpackChunkName: "mentoring" */'./containers/MentoringRegPage');
const AvailableProgramsPage = () => import(/* webpackChunkName: "mentoring" */'./containers/AvailableProgramsPage');
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
      component: MentoringRegPage,
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
      name: 'programs',
    },
    {
      path: 'enrollment',
      component: DefaultEnrollmentPage,
      children: [
        {
          path: '',
          component: Start,
          name: 'start',
        },
        {
          path: 'typical-day',
          component: TypicalDay,
          name: 'typical-day',
        },
        {
          path: 'availability',
          component: Availability,
          name: 'availability',
        },
        {
          path: 'webinar',
          component: Webinar,
          name: 'webinar',
        },
      ],
    },
    {
      path: '',
      name: 'mentoring',
      redirect: '',
      component: MentoringRegPage,
    },
  ],

};
