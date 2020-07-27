export default savedata => {
  return {
    state: {
      noCanvas: savedata.noCanvas || false
    },
    getters: {
      noCanvas(state) {
        return state.noCanvas;
      },
    },
    mutations: {
      toggleCanvas(state) {
        state.noCanvas = !state.noCanvas;
        savedata.__set__('noCanvas', state.noCanvas);
      }
    },
    actions: {
      toggleCanvas(context) {
        context.commit('toggleCanvas');
      }
    }
  }
}