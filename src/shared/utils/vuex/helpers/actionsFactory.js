export default {
  fetchList: (requestApi, mutations) => ({ commit }) => {
    commit(mutations.listRequested);

    return requestApi().then(
      data => commit(mutations.listFetched, data),
      () => commit(mutations.listErrored),
    );
  },
  fetchOne: (requestApi, mutations) => ({ commit }, id) => {
    commit(mutations.oneRequested);

    return requestApi(id).then(
      data => commit(mutations.oneFetched, data),
      () => commit(mutations.oneErrored),
    );
  },
  post: (requestApi, mutations) => ({ commit }, entity) => requestApi(entity).then(
    savedEntity => commit(mutations.add, savedEntity),
    () => {}, // ??
  ),
  // put: (requestApi, mutations) => ({ commit }, ) => requestApi(),
  delete: (requestApi, mutations) => ({ commit }, id) => requestApi(id).then(
    () => commit(mutations.remove, id),
    () => {}, // ??
  ),
};
