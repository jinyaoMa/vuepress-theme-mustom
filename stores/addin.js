export default savedata => {
  return {
    state: {
      firstTimeAddin: !(typeof savedata.addin === 'string'),
      addin: savedata.addin || ''
    },
    getters: {
      addin(state) {
        return state.addin;
      },
      firstTimeAddin(state) {
        return state.firstTimeAddin;
      },
    },
    mutations: {
      setAddin(state, { name, callback }) {
        const ad = "ad";
        const qrcode = "qrcode";
        switch (name) {
          case ad:
            state.addin = state.addin === ad ? "" : ad;
            break;
          case qrcode:
            state.addin = state.addin === qrcode ? "" : qrcode;
            break;
          default:
            state.addin = "";
        }
        typeof callback === 'function' && callback(state.addin);
        savedata.__set__('addin', state.addin);
      }
    },
    actions: {
      setAddin(context, name) {
        context.commit('setAddin', name);
      }
    }
  }
}