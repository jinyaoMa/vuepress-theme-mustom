export default {
  state: {
    readmode: false
  },
  getters: {
    readmode(state) {
      return state.readmode;
    },
  },
  mutations: {
    toggleReadmode(state) {
      state.readmode = !state.readmode;
    },
    closeReadmode(state) {
      state.readmode = false;
    },
  },
  actions: {
    toggleReadmode(context) {
      context.commit('toggleReadmode');
    },
    closeReadmode(context) {
      context.commit('closeReadmode');
    }
  }
}