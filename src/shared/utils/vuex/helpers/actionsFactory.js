export default {
  fetch: (requestApi, mutations) => ({ commit }) => {
    commit(mutations.allRequested);

    return requestApi().then(
      data => commit(mutations.allFetched, data),
      () => commit(mutations.allErrored),
    );
  },
  fetchOne: (requestApi, mutations) => ({ commit }, id) => {
    commit(mutations.oneRequested);

    return requestApi(id).then(
      data => commit(mutations.oneFetched, data),
      () => commit(mutations.oneErrored),
    );
  },
  // put: (requestApi, mutations) => ({ commit }, ) => requestApi(),
  delete: (requestApi, mutations) => ({ commit }, id) => requestApi(id).then(
    () => commit(mutations.remove, id),
    () => {}, // ??
  ),
};
