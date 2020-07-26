export default {
  state: {
    triggerResize: 0
  },
  getters: {
    triggerResize(state) {
      return state.triggerResize;
    },
  },
  mutations: {
    triggerResizeIncrement(state) {
      state.triggerResize += 1;
    }
  },
  actions: {
    triggerResizeIncrement(context) {
      context.commit('triggerResizeIncrement');
    }
  }
}