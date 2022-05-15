export default {
  state: {
    showFilter: false,
  },
  mutations: {
    changeVisibility(state) {
      state.showFilter = !state.showFilter;
    },
  },
};
