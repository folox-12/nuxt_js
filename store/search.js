export default {
  actions: {
    getValue({ commit }, value) {
      commit("updateQuery", value);
    },
  },
  mutations: {
    updateQuery(state, query) {
      state.querySelector = query;
    },
  },
  state: {
    querySelector: "",
  },
  getters: {
    getStoreQuery(state) {
      return state.querySelector;
    },
  },
};
