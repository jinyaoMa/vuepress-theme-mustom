export default {
  state: {
    ext: ''
  },
  getters: {
    ext(state) {
      return state.ext;
    },
  },
  mutations: {
    setExt(state, name) {
      const portal = 'portal';
      const search = 'search';
      switch (name) {
        case portal:
          state.ext = state.ext === portal ? '' : portal;
          break;
        case search:
          state.ext = state.ext === search ? '' : search;
          break;
        default:
          state.ext = '';
      }
    }
  },
  actions: {
    setExt(context, name) {
      context.commit('setExt', name);
    }
  }
}