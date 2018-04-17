import MainLayout from '@/layouts/MainLayout';
import loggedInGuard from '@/shared/utils/loggedInGuard';
import store from '@/shared/store';

import storeModule from './store';

// Pages
const CurrentProgramsPage = () => import(/* webpackChunkName: "mentoring" */'./containers/CurrentProgramsPage');
const ProgramRegPage = () => import(/* webpackChunkName: "mentoring" */'./containers/ProgramRegPage');
const AvailableProgramsPage = () => import(/* webpackChunkName: "mentoring" */'./containers/AvailableProgramsPage');
const ProgramDetailsPage = () => import(/* webpackChunkName: "mentoring" */'./containers/ProgramDetailsPage');

// Layouts
const DefaultEnrollmentLayout = () => import(/* webpackChunkName: "mentoring" */'./containers/DefaultEnrollmentLayout');

// for Default Entrollment
const StartDefault = () => import('./components/defaultEnrollment/Start');
const TypicalDayDefault = () => import('./components/defaultEnrollment/TypicalDay');
const AvailabilityDefault = () => import('./components/defaultEnrollment/Availability');
const WebinarDefault = () => import('./components/defaultEnrollment/Webinar');


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
      component: CurrentProgramsPage,
      name: 'programs',
    },
    {
      path: 'match',
      component: ProgramDetailsPage,
      name: 'match',
      props: {
        tab: 'match',
      },
    },
    {
      path: 'chat',
      component: ProgramDetailsPage,
      props: {
        tab: 'chat',
      },
    },
    {
      path: 'preparation',
      component: ProgramDetailsPage,
      props: {
        tab: 'preparation',
      },
    },
    {
      path: 'schedule',
      component: ProgramDetailsPage,
      props: {
        tab: 'schedule',
      },
    },
    {
      path: 'programs',
      component: AvailableProgramsPage,
      name: 'programs-avalible',
    },
    {
      path: 'program',
      component: ProgramRegPage,
      name: 'program',
    },
    {
      path: 'default-enrollment',
      component: DefaultEnrollmentLayout,
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
      component: CurrentProgramsPage,
    },
  ],
};
