import zhCN from "./locales/zh-CN";
import enUS from "./locales/en-US";

export default {
  state: {
    lang: 'zh-CN'
  },
  getters: {
    locale(state) {
      switch (state.lang) {
        case 'zh-CN':
          return zhCN;
        case 'en-US':
          return enUS;
      }
      return zhCN;
    },
  },
  mutations: {
    swapLang(state) {
      switch (state.lang) {
        case 'zh-CN':
          state.lang = 'en-US';
          break;
        case 'en-US':
          state.lang = 'zh-CN';
          break;
      }
    }
  },
  actions: {
    swapLang(context) {
      context.commit('swapLang');
    }
  }
}