export const state = () => ({
  status: false,
});

export const mutations = {
  setChangestatus(state, status) {
    state.status = status;
  },
};

export const getters = {
  GetChangestatus(state) {
    // console.log("change");
    return state.status;
  },
};
