export default {
  state: {
    locale: "ru",
  },
  mutations: {
    setLocate(state) {
      state.locale = state.locale == "ru" ? "en" : "ru";
    },
  },
  getters: {
    locale: (state) => state.locale,
  },
};
