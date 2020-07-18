export default {
  state: {
    isNight: false
  },
  getters: {
    isNight(state) {
      return state.isNight;
    },
  },
  mutations: {
    nightshift(state) {
      state.isNight = !state.isNight;
    }
  },
  actions: {
    nightshift(context) {
      context.commit('nightshift');
    }
  }
}