export default {
  state: {
    sortName: "address",
    sortFlag: true,
  },
  actions: {
    changeSort({ commit }, value) {
      commit("updateSortName", value);
      commit("updateSortFlag");
    },
  },
  mutations: {
    updateSortName(state, value) {
      state.sortName = value;
    },
    updateSortFlag(state) {
      state.sortFlag = !state.sortFlag;
    },
  },
  getters: {
    getSortName(state) {
      return state.sortName;
    },
    getSortFlag(state) {
      return state.sortFlag;
    },
  },
};
