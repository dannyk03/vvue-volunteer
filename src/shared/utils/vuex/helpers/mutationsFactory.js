export default {
  listRequested: (state) => {
    state.list.loading = true;
  },
  listFetched: (state, data) => {
    Object.assign(state.list, {
      data,
      loading: false,
    });
  },
  listErrored: (state) => {
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
    if (!state.list.data) state.list.data = [];
    state.list.data.push(element);
  },
  update: (state, element) => {
    if (!element) throw new Error('Update mutation: there\'s no update passed');
    Object.assign(state.one.data, element);
  },
  remove: (state, id) => {
    if (!id) throw new Error('Remove mutation: id must be defined');

    const index = state.list.data.findIndex(i => i.id === id);
    state.list.data.splice(index, 1);
  },
};
