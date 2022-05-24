export const state = () => ({
  status: false,
  locale: "ru",
});

export const mutations = {
  setChangestatus(state, status) {
    state.status = status;
  },
  setLocate(state) {
    state.locale = state.locale == "ru" ? "en" : "ru";
  },
};

export const getters = {
  GetChangestatus(state) {
    return state.status;
  },
  locale: (state) => state.locale,
};
