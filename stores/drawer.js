export default {
  state: {
    drawer: '',
    drawerOffset: 0
  },
  getters: {
    drawer(state) {
      return state.drawer;
    },
  },
  mutations: {
    setDrawer(state, name) {
      if (typeof window === 'undefined') return;
      const clear = o => {
        if (state.drawerOffset === 0) {
          state.drawer = '';
        } else {
          window.scrollBy(0, state.drawerOffset);
          window.setTimeout(o => {
            state.drawer = '';
            state.drawerOffset = 0;
          }, 0);
        }
      };
      switch (state.drawer) {
        case 'nav':
          if (name === 'nav') {
            clear();
          } else {
            state.drawer = 'ext';
          }
          break;
        case 'ext':
          if (name === 'ext') {
            clear();
          } else {
            state.drawer = 'nav';
          }
          break;
        default:
          state.drawer = name;
      }
      if (state.drawer !== '' && state.drawerOffset === 0) {
        state.drawerOffset = window.scrollY;
        window.setTimeout(o => {
          if (state.drawerOffset < window.innerHeight) {
            state.drawerOffset = 0;
          } else {
            window.scrollTo(0, window.innerHeight + 1);
            state.drawerOffset = Math.abs(state.drawerOffset - window.scrollY);
          }
        }, 0);
      }
    }
  },
  actions: {
    setDrawer(context, name) {
      context.commit('setDrawer', name);
    }
  }
}