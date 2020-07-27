import zhCN from "@theme/locales/zh-CN";
import enUS from "@theme/locales/en-US";

const isChinese = o => {
  if (typeof window === 'undefined') return;
  return /^(zh)/i.test(window.navigator.browserLanguage || window.navigator.language || 'zh');
};

export default savedata => {
  return {
    state: {
      lang: savedata.lang || (isChinese() ? 'zh-CN' : 'en-US')
    },
    getters: {
      lang(state) {
        return state.lang;
      },
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
            savedata.__set__('lang', 'en-US');
            break;
          case 'en-US':
            state.lang = 'zh-CN';
            savedata.__set__('lang', 'zh-CN');
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
}