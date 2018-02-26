import MainLayout from '@/layouts/MainLayout';
import loggedInGuard from '@/shared/utils/loggedInGuard';
import store from '@/shared/store';

import storeModule from './store';

const DefaultEnrollment = () => import(/* webpackChunkName: "mentoring" */'./containers/DefaultEnrollment');
const MentoringPage = () => import(/* webpackChunkName: "mentoring" */'./containers/MentoringPage');
const MentoringRegPage = () => import(/* webpackChunkName: "mentoring" */'./containers/MentoringRegPage');
const AvailableProgramsPage = () => import(/* webpackChunkName: "mentoring" */'./containers/AvailableProgramsPage');
// const AvailableProgramPage = () => import(/* webpackChunkName: "mentoring" */'./containers/AvailableProgramPage');

// for Default Entrollment
const StartDefault = () => import('./components/defaultEnrollmentComponents/StartDefault');
const TypicalDayDefault = () => import('./components/defaultEnrollmentComponents/TypicalDayDefault');
const AvailabilityDefault = () => import('./components/defaultEnrollmentComponents/AvailabilityDefault');
const WebinarDefault = () => import('./components/defaultEnrollmentComponents/WebinarDefault');


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
      name: 'programs',
    },
    {
      path: 'default-enrollment',
      component: DefaultEnrollment,
      name: 'defaultEnrollment',
      children: [
        {
          path: 'start',
          component: StartDefault,
          name: 'startDefault',
        },
        {
          path: 'typical',
          component: TypicalDayDefault,
          name: 'typicalDefault',
        },
        {
          path: 'availability',
          component: AvailabilityDefault,
          name: 'availabilityDefault',
        },
        {
          path: 'webinar',
          component: WebinarDefault,
          name: 'webinarDefault',
        },
      ],
    },
    {
      path: '',
      name: 'mentoring',
      redirect: '',
      component: MentoringPage,
    },
  ],
};
