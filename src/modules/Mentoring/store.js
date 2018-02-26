import { createModule, AVAILABLE_NAMESPACES as T } from '@/shared/utils/vuex';
import { fetchPrograms, fetchProgram } from '@/api';

const initialState = {
  selectedUser: {
    firstName: 'Tony',
    lastName: 'Stark',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUPtECfQ8dtJGSx3m3g89gMvYRKtwUtDIJVjisRQ7YJhKF30d',
  },
  enrollmentSteps: 1,
  timepickerData: {
    toggle: false,
    data: {},
  },
  times: [],
};

const getters = {
  getSelectedUser: state => state.selectedUser,
  getEnrollmentSteps: state => state.enrollmentSteps,
  getTimePicker: state => state.timepickerData,
  getTimes: state => state.times,
};

const actions = {

};

const mutations = {
  enrollmentStepsIncrement: (state) => {
    state.enrollmentSteps += 1;
  },
  enrollmentStepsDecrement: (state) => {
    state.enrollmentSteps -= 1;
  },
  resetEnrollmentSteps: (state) => {
    state.enrollmentSteps = 1;
  },
  openTimePicker: (state, payload) => {
    state.timepickerData.toggle = payload.toggle;
    state.timepickerData.data = payload.data;
  },
  closeTimePicker: (state) => {
    state.timepickerData.toggle = false;
  },
  setTimePickerData: (state, payload) => {
    state.times.push(payload);
  },
};

const apis = {
  fetchList: fetchPrograms,
  fetchOne: fetchProgram,
};

const { module: programsModule, types: programs } = createModule({ types: [T.LIST, T.ONE], apis });

export { programs };

export default {
  namespaced: true,
  state: initialState,
  modules: {
    programs: programsModule,
  },
  getters,
  actions,
  mutations,
};
