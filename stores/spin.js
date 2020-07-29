export default {
  state: {
    isSpinning: true
  },
  getters: {
    isSpinning(state) {
      return state.isSpinning;
    },
  },
  mutations: {
    setSpin(state, flag) {
      state.isSpinning = flag;
    }
  },
  actions: {
    setSpin(context, flag) {
      context.commit('setSpin', flag);
    }
  }
}