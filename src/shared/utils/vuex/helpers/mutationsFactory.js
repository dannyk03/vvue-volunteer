export default {
  allRequested: (state) => {
    state.list.loading = true;
  },
  allFetched: (state, data) => {
    Object.assign(state.list, {
      data,
      loading: false,
    });
  },
  allErrored: (state) => {
    state.list.loading = false;
  },
  oneRequested: (state) => {
    Object.assign(state.one, {
      data: null,
      loading: true,
    });
  },
  oneFetched: (state, data) => {
    Object.assign(state.one, {
      data,
      loading: false,
    });
  },
  oneErrored: (state) => {
    state.one.loading = false;
  },
  add: (state, element) => {
    if (!element) throw new Error('Add mutation: there\'s nothing to add');

    state.list.data.push(element);
  },
  remove: (state, id) => {
    if (!id) throw new Error('Remove mutation: id must be defined');

    const index = state.list.data.findIndex(i => i.id === id);
    state.list.data.splice(index, 1);
  },
};
