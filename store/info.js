export default {
  state: {
    locale: "ru",
  },
  mutations: {
    updateInfo(state) {
      state.locale = state.locale == "ru" ? "en" : "ru";
    },
  },
  getters: {
    getLocale(state) {
      return state.locale || "ru";
    },
  },
};
