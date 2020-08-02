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
    }
  },
  actions: {
    toggleReadmode(context) {
      context.commit('toggleReadmode');
    }
  }
}