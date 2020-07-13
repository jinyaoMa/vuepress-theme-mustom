export default {
  state: {
    skin: 'default'
  },
  getters: {
    skin(state) {
      return state.skin;
    },
  },
  mutations: {
    setSkin(state, name) {
      state.skin = name;
    }
  },
  actions: {
    setSkin(context, name) {
      context.commit('setSkin', name);
    }
  }
}