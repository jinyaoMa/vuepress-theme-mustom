export default savedata => {
  return {
    state: {
      skin: savedata.skin || 'default'
    },
    getters: {
      skin(state) {
        return state.skin;
      },
    },
    mutations: {
      setSkin(state, name) {
        state.skin = name;
        savedata.__set__('skin', state.skin);
      }
    },
    actions: {
      setSkin(context, name) {
        context.commit('setSkin', name);
      }
    }
  }
}