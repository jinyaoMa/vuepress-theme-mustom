export default savedata => {
  return {
    state: {
      isNight: savedata.isNight || false
    },
    getters: {
      isNight(state) {
        return state.isNight;
      },
    },
    mutations: {
      nightshift(state) {
        state.isNight = !state.isNight;
        savedata.__set__('isNight', state.isNight);
      }
    },
    actions: {
      nightshift(context) {
        context.commit('nightshift');
      }
    }
  }
}