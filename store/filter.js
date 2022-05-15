export default {
  state: {
    showFilter: false,
    defaultInput: "",
  },
  mutations: {
    changeVisibility(state) {
      state.showFilter = !state.showFilter;
    },
  },
};
