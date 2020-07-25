export default {
  state: {
    noCanvas: false
  },
  getters: {
    noCanvas(state) {
      return state.noCanvas;
    },
  },
  mutations: {
    toggleCanvas(state) {
      state.noCanvas = !state.noCanvas;
    }
  },
  actions: {
    toggleCanvas(context) {
      context.commit('toggleCanvas');
    }
  }
}